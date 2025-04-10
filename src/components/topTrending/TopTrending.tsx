import "../../App.css";
import { Card } from "primereact/card";
import { Button } from 'primereact/button';
import cardImage from "../../assets/cardImage.png";

export default function TopTrending() {
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
    <div className="bg-bgTranding m-auto py-20 px-5 shadow-lg rounded-lg max-w-5xl">
      <div className="m-auto px-20">
      <div className="flex justify-between items-center px-2 py-8">
  <h2 className="text-xl font-bold text-gray-800">Top Trending</h2> 
  <Button
  label="See all"
  className="p-button-sm p-button-outlined text-gray-500 font-normal focus:shadow-[0px_0px_0px_2px_#EB662B] focus:rounded-lg active:p-1 active:shadow-[0px_0px_0px_2px_#EB662B] active:rounded-lg focus:p-1       "
/>




</div>



<div className="flex overflow-x-auto gap-4 py-4 px-2">
  <div className="">
    <Card
      className="rounded-xl overflow-hidden shadow transform transition duration-300 hover:scale-105 "
      header={header}
    >
      <div className="p-2 ">
        <p className="text-sm text-gray-500 mb-1 text-center">Paris, France</p>
        <h3 className="text-md px-4 font-semibold text-gray-900 leading-snug">
        Centipede Tour - Guided Arizona
        Desert Tour by ATV              </h3>
        <p className="text-sm text-center text-gray-600 mt-2"> 4.8 (243)</p>
        <hr className="my-3 text-gray-300 px-4" />
        <div className="flex px-3 justify-between text-sm text-gray-700 font-medium">
          <span>4 days</span>
          <span className="text-gray-600">From $189.25</span>
        </div>
      </div>
    </Card>
  </div>
  <div className="">
    <Card
      className="rounded-xl overflow-hidden shadow transform transition duration-300 hover:scale-105 "
      header={header}
    >
      <div className="p-2 ">
        <p className="text-sm text-gray-500 mb-1 text-center">Paris, France</p>
        <h3 className="text-md px-4 font-semibold text-gray-900 leading-snug">
        Centipede Tour - Guided Arizona
        Desert Tour by ATV              </h3>
        <p className="text-sm text-center text-gray-600 mt-2"> 4.8 (243)</p>
        <hr className="my-3 text-gray-300 px-4" />
        <div className="flex px-3 justify-between text-sm text-gray-700 font-medium">
          <span>4 days</span>
          <span className="text-gray-600">From $189.25</span>
        </div>
      </div>
    </Card>
  </div>
  <div className="">
    <Card
      className="rounded-xl overflow-hidden shadow transform transition duration-300 hover:scale-105 "
      header={header}
    >
      <div className="p-2 ">
        <p className="text-sm text-gray-500 mb-1 text-center">Paris, France</p>
        <h3 className="text-md px-4 font-semibold text-gray-900 leading-snug">
        Centipede Tour - Guided Arizona
        Desert Tour by ATV              </h3>
        <p className="text-sm text-center text-gray-600 mt-2"> 4.8 (243)</p>
        <hr className="my-3 text-gray-300 px-4" />
        <div className="flex px-3 justify-between text-sm text-gray-700 font-medium">
          <span>4 days</span>
          <span className="text-gray-600">From $189.25</span>
        </div>
      </div>
    </Card>
  </div>
  <div className="">
    <Card
      className="rounded-xl overflow-hidden shadow transform transition duration-300 hover:scale-105 "
      header={header}
    >
      <div className="p-2 ">
        <p className="text-sm text-gray-500 mb-1 text-center">Paris, France</p>
        <h3 className="text-md px-4 font-semibold text-gray-900 leading-snug">
        Centipede Tour - Guided Arizona
        Desert Tour by ATV              </h3>
        <p className="text-sm text-center text-gray-600 mt-2"> 4.8 (243)</p>
        <hr className="my-3 text-gray-300 px-4" />
        <div className="flex px-3 justify-between text-sm text-gray-700 font-medium">
          <span>4 days</span>
          <span className="text-gray-600">From $189.25</span>
        </div>
      </div>
    </Card>
  </div>



</div>
      </div>

    </div>
  );
}
