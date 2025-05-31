import { LoaderFunction } from "@remix-run/node";

// Catch-all route handler
export const loader: LoaderFunction = async ({ request }) => {
  // If it's a DevTools request, return an empty 200 response
  if (request.url.includes('/.well-known/appspecific/com.chrome.devtools.json')) {
    return new Response(JSON.stringify({}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // For all other unmatched routes, return 404
  throw new Response("Not Found", { status: 404 });
};

// This component won't render for DevTools requests
export default function CatchAll() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>404: Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}