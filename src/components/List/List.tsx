import TourTypeList from "../TourType/TourTypeList";


export default function List() {

    


  
  return (
    <>
       <div className="w-3/4 mx-auto text-mainTextColor pt-10">
          <div className="flex w-full justify-between text-sm">
            <p>Home&gt;Tours&gt;Phuket</p>
            <p>THE 10 BEST Phuket Tours & Excursions</p>
          </div>
          <h3 className="pt-10 md:font-bold font-semibold lg:text-3xl md:text-2xl
           text-lg  ">Explore all things to do in Phuket</h3>
          <div className="flex flex-wrap gap-5 mt-10">
            <div className="w-full md:w-1/6 ">

            </div>
            <div className="w-full md:w-4/6 me-3">
               <div className="flex">
                <TourTypeList/>
               </div>
            </div>

          </div>
       </div>
    </>
  )
}
