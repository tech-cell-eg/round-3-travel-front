import AppBanner from "../AppBanner/AppBanner";
import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import TopTrending from "../topTrending/TopTrending";
import Why from "../Why/Why";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="w-3/4 mx-auto">
        <Why/>
        <TopTrending/>
        <Reviews/>
        <AppBanner/>
        <Articles/>
      </div>
    </>
  )
}
