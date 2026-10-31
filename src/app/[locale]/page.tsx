import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getContent, isLocale } from "@/content";
import { getPhoto } from "@/content/photo";
import Nav from "@/components/ui/Nav";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Strengths, { Credibility } from "@/components/sections/Strengths";
import { Building, Featured } from "@/components/sections/Work";
import { Contact, Footer, Journey, Stack, WhyMe } from "@/components/sections/Rest";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const c = getContent(locale);

  return (
    <>
      <ScrollProgress />
      <Nav locale={locale} nav={c.nav} />
      <main>
        <Hero hero={c.hero} locale={locale} photo={getPhoto()} />
        <Credibility credibility={c.credibility} />
        <Strengths strengths={c.strengths} />
        <Education education={c.education} />
        <Featured featured={c.featured} />
        <Building building={c.building} />
        <WhyMe explain={c.explain} locale={locale} />
        <Journey journey={c.journey} />
        <Stack stack={c.stack} />
        <Contact contact={c.contact} />
      </main>
      <Footer footer={c.footer} />
    </>
  );
}
