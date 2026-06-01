export async function onRequestGet({ env }) {
  if (!env.PETITIONS) {
    return new Response(JSON.stringify({ error: "missing kv binding" }), {
      status: 500,
      headers: { "content-type": "application/json", "cache-control": "no-store" }
    });
  }
  const token = crypto.randomUUID();
  await env.PETITIONS.put(`token:${token}`, "1", { expirationTtl: 300 });
  return new Response(JSON.stringify({ token, ttl: 300 }), {
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}
