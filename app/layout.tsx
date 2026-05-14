import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kita SonnenNest | Liebevolle Betreuung in Nürnberg",
  description:
    "Kita SonnenNest in Nürnberg: liebevolle Betreuung, starke Werte, kreative Räume und eine herzliche Eingewöhnung."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="paper-texture">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
