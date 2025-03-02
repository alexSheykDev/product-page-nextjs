import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Page App",
  description: "Product Page App Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
