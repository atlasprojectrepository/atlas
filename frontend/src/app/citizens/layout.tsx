import "../globals.css";
import { inter } from "@/app/ui/fonts";
import { Providers } from "@/app/providers";

export default function CitizenLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body style={{backgroundColor: "#191918", height: "100vh"}} className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
