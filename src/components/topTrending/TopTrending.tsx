import "../../App.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import cardImage from "../../assets/cardImage.png";
import { useGetQuery } from "../../lib/useGetQuery";

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

  console.log("top trending:", tours.data);

  const header = (
    <div className="px-4 pt-4">
      <img
        alt="Card"
        src={cardImage}
        className="w-full h-48 object-cover rounded-2xl"
      />
    </div>
  );

  return (
    <div className="bg-bgsecondary m-auto py-20 px-5 shadow-lg rounded-lg">
      <div className="m-auto px-5 md:px-20">
        <div className="flex justify-between items-center px-2 py-8">
          <h2 className="text-xl font-bold text-gray-800">Top Trending</h2>
          <Button
            label="See all"
            className="p-button-sm p-button-outlined text-gray-500 font-normal focus:shadow-[0px_0px_0px_2px_#EB662B] focus:rounded-lg active:p-1 active:shadow-[0px_0px_0px_2px_#EB662B] active:rounded-lg focus:p-1"
          />
        </div>

        {/* ✅ Use grid for proper layout */}
        <div className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
  {toursArray.map((tour: any, index: number) => (
    <Card
      key={index}
      className="rounded-xl w-[280px] shadow transform transition duration-300 hover:scale-105"
      header={header}
    >
              <div className="p-2">
                <p className="text-sm text-gray-500 mb-1 text-center">
                  {tour?.destination?.name || "Unknown Location"}
                </p>
                <h3 className="text-md px-4 font-semibold text-gray-900 leading-snug">
                  {tour?.title || "Untitled Tour"}
                </h3>
                <p className="text-sm text-center text-gray-600 mt-2">
                  {tour.rating
                    ? `${tour.rating} (${tour.reviewsCount})`
                    : "No ratings"}
                </p>
                <hr className="my-3 text-gray-300 px-4" />
                <div className="flex px-3 justify-between text-sm text-gray-700 font-medium">
                  <span>{tour.duration || "N/A"} days</span>
                  <span className="text-gray-600">
                    From ${tour.price || "0.00"}
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
