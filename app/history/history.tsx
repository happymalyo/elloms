import type { LoaderFunctionArgs } from "react-router";
import { ModalHistory } from "~/components/History/ModalHistory";

export async function loader(args: LoaderFunctionArgs) {
  // Vous pouvez retourner des données ou simplement un objet vide si rien n'est requis
  return {};
}

export default function History() {
  return (
    <>
      <ModalHistory />
    </>
  );
}
