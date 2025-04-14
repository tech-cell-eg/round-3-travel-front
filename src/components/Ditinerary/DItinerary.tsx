import { useGetQuery } from "../../lib/useGetQuery";


type DitineraryProps = {
  slug: string | undefined;
};
export default function DItinerary({ slug }: DitineraryProps) {
  const {
    data: tours = {},
    isLoading,
    isError,
    error,
  } = useGetQuery("tours", `/tours/${slug}`);

  const toursArray = tours?.data || [];
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  return (
    <div className="max-w-1/2 mx-6  py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Itinerary</h2>

      <div className="relative border-l-2 border-dashed border-bgButtonOrange pl-8">
        {toursArray?.itineraries.map((item:any, index:number) => (
          <div key={index} className="relative mb-10">
            {/* Circle */}
            <div
              className={`absolute -left-11 top-0 ${
                index === 0  || index === toursArray?.itineraries?.length - 1
                  ? "w-7 h-7 border-4 bg-bgButtonOrange"
                  : "w-5 h-5 border-2 bg-white"
              } rounded-full border-bgButtonOrange`}
            ></div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-bold text-[#001F5F]">
                {item.day}: {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
