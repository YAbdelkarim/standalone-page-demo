import { Metadata } from "next";
import { Inter, Manrope, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Agent Details | Standalone Demo",
  description:
    "Standalone demo of the agent-details page: agent profile, properties grid, contact card and quick stats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${montserrat.variable}`}
      style={{
        ["--font" as string]: inter.style.fontFamily,
        ["--display" as string]: montserrat.style.fontFamily,
      }}
    >
      <body>
        <header className="demo-header">
          <span className="brand">Manzel</span>
          <span className="demo-tag">Standalone Agent Details — Demo Page</span>
        </header>
        {children}
        <footer
          style={{
            textAlign: "center",
            padding: "24px",
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          Standalone demo extracted from Manzel (beyootech-nextjs)
        </footer>
      </body>
    </html>
  );
}
