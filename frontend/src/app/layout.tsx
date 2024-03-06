import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/ui/fonts";
import { Providers } from "@/app/providers";


export const metadata: Metadata = {
  title: "ATLAS",
  description: "La première application de gestion democratique de l'humanité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
          <html lang="fr">
            <body style={{background: "url(world-map.svg) center center no-repeat #191918", height: "100vh"}} className={inter.className}>
            <Providers>
            {children}
            </Providers>
            </body>
            </html>
    );
}
