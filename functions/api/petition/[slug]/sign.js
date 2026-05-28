const SLUG_RE = /^[a-z0-9-]{1,80}$/;
const TOKEN_RE = /^[a-f0-9-]{36}$/;

export async function onRequestPost({ params, request, env }) {
  const slug = params.slug;
  if (!SLUG_RE.test(slug)) return json({ error: "invalid slug" }, 400);

  let body;
  try { body = await request.json(); }
  catch { return json({ error: "bad body" }, 400); }

  const token = body && typeof body.token === "string" ? body.token : "";
  if (!TOKEN_RE.test(token)) return json({ error: "missing token" }, 400);

  const tokenKey = `token:${token}`;
  const valid = await env.PETITIONS.get(tokenKey);
  if (!valid) return json({ error: "expired" }, 410);
  await env.PETITIONS.delete(tokenKey);

  const countKey = `count:${slug}`;
  const raw = await env.PETITIONS.get(countKey);
  const next = (raw ? Number(raw) || 0 : 0) + 1;
  await env.PETITIONS.put(countKey, String(next));

  return json({ slug, count: next });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}
