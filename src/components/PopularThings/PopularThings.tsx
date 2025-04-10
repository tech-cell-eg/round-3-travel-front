import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useGetQuery } from "../../lib/useGetQuery";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function PopularThings() {
  //define the type of tours data from api(interface)
  // type Category = {
  //     id: string;
  //     name: string;
  //     rating: string;
  //     numOfPeop: number;
  //     price: number;
  //     title:string;
  //     destination: {
  //       name: string;
  //       image: string;
  //     };
  //   };

  //get the data from api using custom hook useGetQuery
  const {
    data: tours = [],
    isLoading,
    isError,
    error,
  } = useGetQuery("tour-categories", "/tour-categories");

  //handel loading & error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <div className="text-mainTextColor container mx-auto mt-32">
        <div className="flex justify-between pb-6">
          <h3 className="md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg max-md:text-center">
            Popular things to do
          </h3>
          <div className="card flex justify-content-center">
            <Link to={"/"}>
              <Button
                label="see all"
                className="font-normal cursor-pointer hover:text-bgButtonOrange"
                unstyled={true}
              />
            </Link>
          </div>
        </div>
        <Link to={"/"}></Link>
      </div>
      {Array.isArray(tours?.data) && tours.data.length >= 5 && (
        <div className="flex flex-wrap w-full gap-5 justify-center pt-5">
          <div className="w-full md:w-3/12">
            <Link to={"/"}>
              <div
                className="bg-[url('/image.png')] h-[170px] cursor-pointer  
                        bg-no-repeat bg-center bg-cover w-full rounded"
              >
                <h6 className="pt-32 ps-3 text-secondTextColor">
                  {tours.data[0].name}
                </h6>
              </div>
            </Link>
            <Link to={"/"}>
              <div
                className="bg-[url('/image.png')] h-[170px]  cursor-pointer
                        bg-no-repeat bg-center bg-cover w-full rounded mt-5"
              >
                <h6 className="pt-32 ps-3 text-secondTextColor">
                  {tours.data[1].name}
                </h6>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-4/12">
            <Link to={"/"}>
              <div
                className="bg-[url('/image.png')] h-[363px] cursor-pointer
                        bg-no-repeat bg-center bg-cover w-full rounded"
              >
                <h6 className="pt-[310px] ps-3 text-secondTextColor">
                  {tours.data[2].name}
                </h6>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-4/12">
            <Link to={"/"}>
              <div
                className="bg-[url('/image.png')] h-[170px] cursor-pointer 
                        bg-no-repeat bg-center bg-cover w-full rounded mb-5"
              >
                <h6 className="pt-32 ps-3 text-secondTextColor">
                  {tours.data[3].name}
                </h6>
              </div>
            </Link>
            <div className="w-full flex gap-5">
              <Link to={"/"} className="w-1/3">
                <div
                  className="bg-[url('/image.png')] h-[170px]  cursor-pointer
                            bg-no-repeat bg-center bg-cover  rounded w-full"
                >
                  <h6 className="pt-32 ps-3 text-secondTextColor">
                    {tours.data[4].name}
                  </h6>
                </div>
              </Link>

              <Link to={"/"} className="w-2/3">
                <div
                  className="bg-[url('/image.png')] h-[170px]  cursor-pointer
                            bg-no-repeat bg-center bg-cover rounded w-full"
                >
                  <h6 className="pt-32 ps-3 text-secondTextColor">
                    {tours.data[0].name}
                  </h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
