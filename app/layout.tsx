import "./globals.css";
import { monotypeCorsiva, plusJakartaSans } from "./fonts";

export const metadata = {
  title: "Your App",
  description: "App using local fonts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${monotypeCorsiva.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
