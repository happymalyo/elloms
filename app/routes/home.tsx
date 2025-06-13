import { Welcome } from "~/components/Welcome/Welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Elloms" },
    { name: "description", content: "Welcome to Elloms!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
