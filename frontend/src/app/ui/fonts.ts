import {Inter, Sono} from "next/font/google";

export const sono = Sono({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin-ext'],
});

export const inter = Inter({ subsets: ["latin"] });
