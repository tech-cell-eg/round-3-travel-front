import TopTrending from "../topTrending/TopTrending";

export default function Dfooter() {
  return (
    <div>
      <h3 className=" text-2xl font-bold text-gray-800 dark:text-white mt-10 mb-5">
      You might also like...
      </h3>
      <TopTrending/>
      </div>
  )
}
