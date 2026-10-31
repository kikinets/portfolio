import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getContent, isLocale } from "@/content";
import { About, Contact, Experience, Explain, Footer, Hero, Now, Work } from "@/components/Sections";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const c = getContent(locale);

  return (
    <>
      <Hero c={c} locale={locale} />
      <main>
        <About c={c} />
        <Explain c={c} />
        <Work c={c} />
        <Experience c={c} />
        <Now c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
