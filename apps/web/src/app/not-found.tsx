import { redirect } from "next/navigation";

export default function NotFoundPage() {
      redirect("/docs/getting-started/installation");
}