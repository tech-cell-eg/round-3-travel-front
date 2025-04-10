import AppBanner from "../AppBanner/AppBanner";
import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import TopTrending from "../topTrending/TopTrending";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularThings from "../PopularThings/PopularThings";
import PopularTours from "../PopularTours/PopularTours";
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

        <PopularTours/>

      </div>
      <HomeBanner/>
      <div className="w-3/4 mx-auto">
         <PopularThings/>
      </div>

    </>
  )
}
