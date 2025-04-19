import { useRef, useState } from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { useGetQuery } from "../../lib/useGetQuery";
import "./Dreviews.css";
import { Toast } from "primereact/toast";

const ratingFields = [
  "Location",
  "Amenities",
  "Food",
  "Room",
  "Price",
  "Tour Operator",
];
type DreviewsProps = {
  slug: string | undefined;
};
const Dreviews = ({ slug }: DreviewsProps) => {
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    comment: "",
    ratings: Object.fromEntries(ratingFields.map((field) => [field, 0])),
  });

  const handleChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRatingChange = (field: any, value: any) => {
    setFormData((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [field]: value },
    }));
  };
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.title &&
    formData.comment &&
    Object.values(formData.ratings).every((rating) => rating > 0);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://round-3-travel.digital-vision-solutions.com/api/tours/${slug}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      toast.current?.show({
        severity: "success",
        summary: "Comment Added",
        detail: "Your review has been submitted successfully!",
        life: 3000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        title: "",
        comment: "",
        ratings: Object.fromEntries(ratingFields.map((field) => [field, 0])),
      });
    } catch (error) {
      toast.current?.show({
        severity: "success",
        summary: "Comment Added",
        detail: "Your review has been submitted successfully!",
        life: 3000,
      });
    }
  };

  const {
    data: tours = {},
    isLoading,
    isError,
    error,
  } = useGetQuery("tours", `/tours/${slug}`);

  const ratingsObj = tours?.data?.categories_rating || {};
  const reviews = tours?.data?.reviews || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <>
      <Toast ref={toast} />
      <div className="grid w-[70%] sm:grid-cols-2 gap-4 mb-12">
        {Object.entries(ratingsObj).map(([label, value], index, arr) => {
          const isLast = index === arr.length - 1;
          return (
            <Card
              key={label}
              className={`
          bg-[#fdf0ea] border-none rounded-xl shadow-sm
          ${index === 0 ? "sm:col-span-2" : ""}
          ${isLast ? "sm:col-span-2  px-12 py-4  " : ""}
        `}
            >
              <div className={`flex justify-between items-center h-full`}>
                <div className={`${isLast ? "p-2" : "p-6"}`}>
                  <p
                    className={`font-semibold capitalize ${
                      isLast ? "text-base" : "text-sm"
                    }`}
                  >
                    {label.replace("_", " ")}
                  </p>
                </div>
                <div className="flex items-center gap-2 pe-3">
                  <span
                    className={`font-semibold text-gray-800 ${
                      isLast ? "text-base" : "text-sm"
                    }`}
                  >
                    {(value as number).toFixed(1)}
                  </span>
                  <Rating
                    value={value as number}
                    readOnly
                    cancel={false}
                    stars={5}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="space-y-6 w-full flex flex-col ">
        {reviews.map((review: any, index: number) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-md shadow w-[70%] `}
          >
            <div className="flex items-center gap-3 mb-3">
              <Avatar
                label={
                  review.name
                    ? review.name
                        .split(" ")
                        .map((n: any) => n[0])
                        .join("")
                    : ""
                }
                shape="circle"
                className="bg-blue-900 text-white"
              />
              <div className="flex justify-between items-center w-full">
                <p className="text-gray-500">{review?.user?.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(review.created_at).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <h3 className="font-semibold ps-10 mb-1">{review.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="p-6 w-[70%]">
        <h2 className="text-xl font-bold mb-5">Leave a Reply</h2>
        <p className="text-sm text-gray-600 mb-4">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {ratingFields.map((field) => (
            <div key={field}>
              <p className="text-sm mb-1">{field}</p>
              <Rating
                value={formData.ratings[field]}
                onChange={(e) => handleRatingChange(field, e.value ?? 0)}
                cancel={false}
              />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <InputText
            placeholder="Name"
            className="w-full focus:border-bgButtonOrange focus:ring-2 focus:ring-orange-300 border rounded-lg p-2 border-gray-300"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <InputText
            placeholder="Email"
            className="w-full focus:border-bgButtonOrange focus:ring-2 focus:ring-orange-300 border rounded-lg p-2 border-gray-300"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <InputText
          placeholder="Title"
          className="w-full mb-4 focus:border-bgButtonOrange focus:ring-2 focus:ring-orange-300 border rounded-lg p-2 border-gray-300"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <InputTextarea
          placeholder="Comment"
          rows={4}
          className="w-full mb-6 focus:border-bgButtonOrange focus:ring-2 focus:ring-orange-300 border rounded-lg p-2 border-gray-300"
          value={formData.comment}
          onChange={(e) => handleChange("comment", e.target.value)}
        />

        <Button
          label="Post Comment"
          className="bg-orange-500 border text-white px-6 py-4 rounded-xl disabled:opacity-50"
          onClick={handleSubmit}
          disabled={!isFormValid}
        />
      </div>
    </>
  );
};

export default Dreviews;
