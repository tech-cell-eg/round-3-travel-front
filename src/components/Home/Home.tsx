import AppBanner from "../AppBanner/AppBanner";
import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import TopTrending from "../topTrending/TopTrending";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularThings from "../PopularThings/PopularThings";
import PopularTours from "../PopularTours/PopularTours";
import Why from "../Why/Why";
import Trending from "../TrendingDestination/TrendingDestination";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="w-3/4 mx-auto">
        <Why/>
        <Trending/>
        <PopularTours/>
        <HomeBanner/>
        <PopularThings/>
        <TopTrending/>
        <Reviews/>
        <AppBanner/>
        <Articles/>



      </div>


    </>
  )
}
