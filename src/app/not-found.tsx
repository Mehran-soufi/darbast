// app/404.tsx (or appropriate server-side file)

export const metadata = {
  title: "دربست | 404",
  description: "صفحه پیدا نشد",
};

import Custom404 from "@/components/notFound/custom404"; // Import the client component

export default function NotFoundPage() {
  return <Custom404 />;
}
