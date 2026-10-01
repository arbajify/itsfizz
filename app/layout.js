import "./globals.css";

export const metadata = {
  title: "Welcome Itzfizz",
  description: "Scroll-driven hero section built with Next.js, Tailwind and GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
