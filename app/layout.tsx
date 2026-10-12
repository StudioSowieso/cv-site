import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Sabien Douven – Front-end Developer & UX/UI Designer";
const description =
  "Cv en portfolio van Sabien Douven, Front-end Developer met een passie voor UX&UI uit Beek (Limburg). Projecten, werkervaring, skills en contact.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sabiendouven.nl"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://sabiendouven.nl",
    siteName: "Sabien Douven",
    locale: "nl_NL",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f1f4fb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={font.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
