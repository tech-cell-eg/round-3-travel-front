import "../../App.css";
import { Card } from "primereact/card";
import { useGetQuery } from "../../lib/useGetQuery";
import image from "../../assets/art-img.png";

export default function TopTrending() {
  const {
    data: tours = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("tour-categories", "/tours?trending");

  const toursArray = tours?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  console.log("top trending:", toursArray);



  return (
    <div className="bg-bgsecondary w-[100%] py-10 mt-4  shadow-lg rounded-lg">
      <div className="m-auto px-5 md:px-20">
        <div className="flex justify-between items-center px-2 py-8">
          <h2 className="text-xl font-bold text-gray-800">Top Trending</h2>
        </div>

        {/* ✅ Use grid for proper layout */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4">
  {toursArray.slice(0, 4).map((tour: any, index: number) => (
    <Card
      key={index}
      className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
    >
      <div className="p-4">
        <img src={image} alt="tour-img" className="pb-6 w-full" />
        <p className="text-sm text-gray-500 text-center mb-1">
          {tour?.destination?.name || "Unknown Location"}
        </p>
        <h3 className="text-md font-semibold text-gray-900 text-center">
          {tour?.title || "Untitled Tour"}
        </h3>
        <p className="text-sm text-center text-gray-600 mt-2">
          {tour.rating
            ? `${tour.rating} (${tour.reviews_count})`
            : "No ratings"}
        </p>
        <hr className="my-3 border-gray-300" />
        <div className="flex justify-between text-sm text-gray-700 font-medium px-2">
          <span>{tour.duration || "N/A"} days</span>
          <span className="text-gray-600">
            From ${tour?.initial_price || "0.00"}
          </span>
        </div>
      </div>
    </Card>
  ))}
</div>


      </div>
    </div>
  );
}
