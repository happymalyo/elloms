import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("history", "./history/history.tsx"),
  route(
    "/.well-known/appspecific/com.chrome.devtools.json",
    "./utils/debug-null.tsx",
  ),
] satisfies RouteConfig;
