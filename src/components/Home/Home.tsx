import Hero from "../Hero/Hero";
import HomeBanner from "../HomeBanner/HomeBanner";
import PopularThings from "../PopularThings/PopularThings";
import PopularTours from "../PopularTours/PopularTours";
import Trending from "../TrendingDestination/TrendingDestination";
import Why from "../Why/Why";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="w-3/4 mx-auto">
        <Why/>
        <Trending/>
        <PopularTours/>
      </div>
      <HomeBanner/>
      <div className="w-3/4 mx-auto">
         <PopularThings/>
      </div>

    </>
  )
}
