import "./page.scss";
import "./globals.scss";
import type { Metadata } from "next";
import { Providers } from "../store/provider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Favicon from '../../public/logo.svg';

import { Lato } from "next/font/google";

import { useLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

const lato = Lato({
  weight: ["400", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple | iPhone",
  description: "Apple store",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;

  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <Providers>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <body className={lato.className}>
            <Header />
            <main className="main container">{children}</main>
            <Footer />
          </body>
        </NextIntlClientProvider>
      </Providers>
    </html>
  );
}
