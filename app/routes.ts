import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("history", "./history/history.tsx"),
] satisfies RouteConfig;
