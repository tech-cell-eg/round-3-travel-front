import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import image from "../../assets/art-img.png";

const articles = [
  {
    image: "https://placehold.co/600x400",
    date: "April 06 2023",
    author: "Ali Tufan",
    title: "Kenya vs Tanzania Safari: The Better African Safari Experience",
  },
  {
    image: "https://placehold.co/600x400",
    date: "April 07 2023",
    author: "Emily Johnson",
    title: "Exploring the Serengeti: A Wildlife Adventure",
  },
  {
    image: "https://placehold.co/600x400",
    date: "April 08 2023",
    author: "Maxwell Rhodes",
    title: "Into the Wild: An Unforgettable Safari Journey",
  },
];

export default function Articles() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Travel Articles</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card
            key={index}
            header={
              <div className="relative pb-5">
                <img
                  alt="Article"
                  src={image}
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
                {article.date} | By {article.author}
              </p>
              <h3 className="text-sm font-semibold p text-gray-900">
                {article.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
