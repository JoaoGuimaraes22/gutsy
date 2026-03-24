import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import ScrollProgress from "./_components/scroll-progress";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import StatsCounters from "./_components/stats-counters";
import About from "./_components/about";
import Menu from "./_components/menu";
import GalleryStrip from "./_components/gallery-strip";
import Services from "./_components/services";
import Reviews from "./_components/reviews";
import GoogleReviews from "./_components/google-reviews";
import Pricing from "./_components/pricing";
import FAQ from "./_components/faq";
import Contact from "./_components/contact";
import Reservation from "./_components/reservation";
import Footer from "./_components/footer";
import ReserveBar from "./_components/reserve-bar";

export default async function RestaurantPage({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <Navbar lang={lang} dict={dict.navbar} />
      <main>
        <Hero dict={dict.hero} />
        <StatsCounters dict={dict.statsCounters} />
        <About dict={dict.about} />
        <Menu dict={dict.menu} />
        <GalleryStrip dict={dict.galleryStrip} />
        <Services dict={dict.services} />
        <Reviews dict={dict.reviews} />
        <GoogleReviews dict={dict.googleReviews} />
        <Pricing dict={dict.pricing} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} />
        <Reservation dict={dict.reservation} />
      </main>
      <Footer dict={dict.footer} />
      <ReserveBar dict={dict.reserveBar} />
    </>
  );
}
