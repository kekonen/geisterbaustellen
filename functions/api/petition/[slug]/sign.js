const SLUG_RE = /^[a-z0-9-]{1,80}$/;
const TOKEN_RE = /^[a-f0-9-]{36}$/;

export async function onRequestPost({ params, request, env }) {
  const slug = params.slug;
  if (!SLUG_RE.test(slug)) return json({ error: "invalid slug" }, 400);
  if (!env.PETITIONS) return json({ error: "missing kv binding" }, 500);

  let body;
  try { body = await request.json(); }
  catch { return json({ error: "bad body" }, 400); }

  const token = body && typeof body.token === "string" ? body.token : "";
  if (!TOKEN_RE.test(token)) return json({ error: "missing token" }, 400);

  const tokenKey = `token:${token}`;
  const valid = await env.PETITIONS.get(tokenKey);
  if (!valid) return json({ error: "expired" }, 410);

  const before = await getCount(env.PETITIONS, slug);
  await env.PETITIONS.put(`sig:${slug}:${token}`, "1");
  await env.PETITIONS.delete(tokenKey);
  const after = await getCount(env.PETITIONS, slug);

  return json({ slug, count: Math.max(after, before + 1) });
}

async function getCount(kv, slug) {
  const rawBase = await kv.get(`count:${slug}`);
  const base = rawBase ? Number(rawBase) || 0 : 0;
  let cursor;
  let signatures = 0;
  do {
    const page = await kv.list({ prefix: `sig:${slug}:`, cursor });
    signatures += page.keys.length;
    cursor = page.cursor;
    if (page.list_complete) break;
  } while (cursor);
  return base + signatures;
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}
