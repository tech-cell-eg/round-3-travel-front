import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { useGetQuery } from "../../lib/useGetQuery";

export default function Articles() {
  const {
    data: articles = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("articles", "/articles");

  const toursArray = articles?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  console.log("Articles:", toursArray);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Travel Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {toursArray.slice(0, 4).map((article: any, index: number) => (
          <Card
            key={index}
            header={
              <div className="relative pb-5">
                <img
                  alt="Article"
                  src={article.image}
                  className="h-48 w-full m-auto rounded-lg object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Tag
                    value="Trips"
                    severity={null}
                    className="bg-white text-black text-xs px-3 py-1 rounded-2xl shadow"
                  />
                </div>
              </div>
            }
            className="shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <div className="p-4">
              <p className="text-xs text-gray-800 mb-1">
                 By {article?.user?.name || "Unknown"}
              </p>
              <h3 className="text-sm font-semibold text-gray-900">
                {article.description || "Untitled Article"}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
