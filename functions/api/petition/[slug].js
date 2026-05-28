const SLUG_RE = /^[a-z0-9-]{1,80}$/;

export async function onRequestGet({ params, env }) {
  const slug = params.slug;
  if (!SLUG_RE.test(slug)) return json({ error: "invalid slug" }, 400);
  const raw = await env.PETITIONS.get(`count:${slug}`);
  const count = raw ? Number(raw) || 0 : 0;
  return json({ slug, count });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}
