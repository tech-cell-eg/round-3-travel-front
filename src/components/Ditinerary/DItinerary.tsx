const itineraryData = [
  { day: "Day 1", title: "Airport Pick Up", description: "" },
  { day: "Day 2", title: "Temples & River Cruise", description: "" },
  { day: "Day 3", title: "Massage & Overnight Train", description: "Like on all of our trips, we can collect you from the airport..." },
  { day: "Day 4", title: "Khao Sok National Park", description: "" },
  { day: "Day 5", title: "Travel to Koh Phangan", description: "" },
  { day: "Day 6", title: "Morning Chill & Muay Thai Lesson", description: "" },
  { day: "Day 7", title: "Island Boat Trip", description: "" },
];

export default function DItinerary() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-[#001F5F] mb-10">Itinerary</h2>
      <div className="relative border-l-4 border-orange-500 pl-6 space-y-8">
        {itineraryData.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-white border-4 border-orange-500"></div>
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
