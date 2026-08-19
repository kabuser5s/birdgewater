// Geo-block: seules la France (FR) et la Côte d'Ivoire (CI) sont autorisées.
const ALLOWED_COUNTRIES = new Set(["FR", "CI"]);

export function onRequest(context) {
  const { request, next } = context;

  const country =
    (request.cf && request.cf.country) ||
    request.headers.get("cf-ipcountry") ||
    "";

  // En local, il n'y a pas de données de géolocalisation : on laisse passer.
  if (country && !ALLOWED_COUNTRIES.has(country)) {
    return new Response(
      "Acces refuse : ce site est uniquement disponible depuis la France et la Cote d'Ivoire.",
      {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      }
    );
  }

  return next();
}
