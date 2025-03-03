import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "@/components/layouts/BaseLayout";
import Head from "next/head";
import ClientProviders from "@/components/providers/ClientProvider";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler.min.css"
        />
      </Head>

      <body>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/js/tabler.min.js"
        ></script>
        <ClientProviders>
          <BaseLayout>{children}</BaseLayout>
        </ClientProviders>
      </body>
    </html>
  );
}
