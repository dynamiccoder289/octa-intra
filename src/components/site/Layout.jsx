import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
