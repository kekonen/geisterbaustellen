const SLUG_RE = /^[a-z0-9-]{1,80}$/;

export async function onRequestGet({ params, env }) {
  const slug = params.slug;
  if (!SLUG_RE.test(slug)) return json({ error: "invalid slug" }, 400);
  if (!env.PETITIONS) return json({ error: "missing kv binding" }, 500);
  const count = await getCount(env.PETITIONS, slug);
  return json({ slug, count });
}

export async function getCount(kv, slug) {
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
