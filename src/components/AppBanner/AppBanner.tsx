import { useState, useRef } from "react";
import "./AppBanner.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function AppBanner() {
  const [email, setEmail] = useState("");
  const toast = useRef<Toast>(null);

  const handleSubmit = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.current?.show({
        severity: "warn",
        summary: "Invalid Email",
        detail: "Please enter a valid email address.",
        life: 3000,
      });
      return;
    }

    toast.current?.show({
      severity: "success",
      summary: "Email Submitted",
      detail: `Email: ${email}`,
      life: 3000,
    });

    setEmail(""); // clear input
  };

  return (
    <section className="app-banner px-4 sm:px-6 lg:px-8">
      <Toast ref={toast} />

      <div className="text-white rounded-2xl w-full md:w-[80%] lg:w-[50%] max-w-4xl p-6 sm:p-10 md:p-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-left">
          Get 5% off your 1st app booking
        </h1>
        <p className="text-sm sm:text-base md:text-base mb-6 text-left">
          Booking's better on the app. Use promo code{" "}
          <span className="font-semibold">"TourBooking"</span> to save!
        </p>

        <div className="text-left">
          <p className="text-sm mb-2">Get a magic link sent to your email</p>
          <div className="flex flex-col sm:flex-row sm:items-start items-stretch gap-3">
            <InputText
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-white text-gray-900 rounded-lg py-2 px-3 sm:w-auto flex-1"
            />
            <Button
              label="Send"
              onClick={handleSubmit}
              className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
