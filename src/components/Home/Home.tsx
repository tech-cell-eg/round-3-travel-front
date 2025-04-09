import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
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
      </div>
    </>
  )
}
