import AppBanner from "../AppBanner/AppBanner";
import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Reviews from "../Reviews/Reviews";
import TopTrending from "../topTrending/TopTrending";
import Trending from "../Trending/Trending";
import Why from "../Why/Why";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="w-3/4 mx-auto">
        <Why/>
        <Trending/>
        <Popular/>
        <TopTrending/>
        <Reviews/>
        <AppBanner/>
        <Articles/>
      </div>
    </>
  )
}
