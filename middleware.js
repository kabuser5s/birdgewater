// Geo-blocking : seules la France (FR) et la Côte d'Ivoire (CI) sont autorisées.
const ALLOWED_COUNTRIES = new Set(["FR", "CI", "BF"]);

export default function middleware(request) {
  const country = request.headers.get("x-vercel-ip-country") || "";

  // En local, il n'y a pas de données de géolocalisation : on laisse passer.
  if (country && !ALLOWED_COUNTRIES.has(country)) {
    return new Response(
      "Accès refusé : ce site est uniquement disponible depuis la France et la Côte d'Ivoire.",
      {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      }
    );
  }
}
