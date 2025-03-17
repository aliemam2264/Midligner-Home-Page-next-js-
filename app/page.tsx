"use client";
import LandingNav from "@/components/includes/Landing-Nav";
import React, { useEffect, useState } from "react";
import Footer from "@/components/includes/Footer";
import LandingCarousel from "@/components/LandingCarousel";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/FaqAccordion";

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Landing Navbar */}
      <LandingNav />
      <LandingCarousel />

      {/* who we are */}
      <div className="bg-white py-20">
        <LandingLayout>
          <div className="h-[327px] flex flex-col md:flex-row w-full gap-16 justify-center  items-center">
            <div className="flex flex-col items-center md:items-start gap-6">
              <h1 className="text-[#262261] text-3xl">Who Are We?</h1>
              <p className="text-[#1F1E1E] text-xl">
                Get to know more about mid.ligner
              </p>
            </div>

            <div className="relative h-[327px] aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full border-none"
                src="https://www.youtube.com/embed/LlcCa-H3dDo"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </LandingLayout>
      </div>

      {/* work flow */}
      <div className="bg-[#ECEDF5] py-16">
        <LandingLayout>
          <div className="bg-[#ECEDF5] flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group w-[230px] h-[270px]   bg-[#FCFCFD] rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:bg-[#262261] transision duration-300"
            >
              {/* Background Tooth Icon (Faded) */}
              <div className="absolute top-3 left-3 opacity-20">
                <img
                  src="/images/scanningVector.png"
                  className="w-[45px] h-[52px]"
                />
              </div>

              {/* Center Tooth Icon */}
              <img src="/images/scanning.png" className="w-[144px] h-[144px]" />

              {/* Scanning Text */}
              <p className="text-[#262261] text-[20px] font-medium text-lg group-hover:text-white group-hover:text-[22px] transision duration-300">
                Scanning
              </p>

              {/* Bottom Number */}
              <img
                src="/images/01.png"
                className="w-[44px] h-[34px] absolute bottom-2 right-2 group-hover:w-[50px] group-hover:h-[40px] transision duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative group w-[230px] h-[270px] bg-[#FCFCFD] rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:bg-[#262261] transision duration-300"
            >
              {/* Background Tooth Icon (Faded) */}
              <div className="absolute top-3 left-3">
                <img
                  src="/images/platformVector.png"
                  className="w-[45px] h-[52px]"
                />
              </div>

              {/* Center Tooth Icon */}
              <img src="/images/platform.png" className="w-[144px] h-[144px]" />

              {/* digital platform Text */}
              <p className="text-[#262261] text-[20px] font-medium text-lg group-hover:text-white group-hover:text-[22px] transision duration-300">
                Digital Platform
              </p>

              {/* Bottom Number */}
              <img
                src="/images/02.png"
                className="w-[44px] h-[34px] absolute bottom-2 right-2 group-hover:w-[50px] group-hover:h-[40px] transision duration-300"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative group w-[230px] h-[270px] bg-[#FCFCFD] rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:bg-[#262261] transision duration-300"
            >
              {/* Background Tooth Icon (Faded) */}
              <div className="absolute top-3 left-3">
                <img
                  src="/images/percisionVector.png"
                  className="w-[45px] h-[52px]"
                />
              </div>

              {/* Center Tooth Icon */}
              <img
                src="/images/percision.png"
                className="w-[144px] h-[144px]"
              />

              {/* Percition software Text */}
              <p className="text-[#262261] font-normal text-lg group-hover:text-white group-hover:text-[22px] group-hover:text-center transision duration-300">
                Percision Software
              </p>

              {/* Bottom Number */}
              <img
                src="/images/03.png"
                className="w-[44px] h-[34px] absolute bottom-2 right-2 group-hover:w-[50px] group-hover:h-[40px] transision duration-300"
              />
            </motion.div>
          </div>
        </LandingLayout>
      </div>

      {/* Features & Advantages */}
      <div className="bg-white flex flex-col items-center gap-12 py-20">
        <span className="bg-white px-4 py-3 shadow-lg rounded-xl text-sm text-[#262261] flex items-center gap-1">
          <img src="/images/star.png" />
          Features & Advantages
        </span>
        {/* features */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[350px] md:w-[880px]"
        >
          <img src="/images/features.png" />
        </motion.div>

        {/* cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-4 items-center md:flex-row"
        >
          <img src="/images/bink-card.png" />
          <img src="/images/blue-card.png" />
        </motion.div>
      </div>

      {/* digital workflow */}
      <div className="bg-white flex flex-col items-center gap-12 py-20">
        <span className="bg-white px-4 py-3 shadow-xl rounded-xl text-sm text-[#262261] flex items-center gap-1">
          <img src="/images/digital.png" className="w-[15] h-5" />
          Digital Workflow
        </span>
        {/* cards */}
        <div className="md:w-[900px] flex flex-col gap-6">
          <motion.div
            initial={isMobile ? {} : { opacity: 0, translateX: "-100%" }}
            whileInView={isMobile ? {} : { opacity: 1, translateX: "0" }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl overflow-hidden rounded-3xl flex flex-col gap-2 items-center md:flex-row justify-between p-4"
          >
            <div className="flex flex-col w-[250px] md:w-[400px] gap-4 px-4 md:pl-0">
              <h2 className="text-[#262261] text-xl">Booking your 3D Scan</h2>
              <p>
                Now you can schedule your transformation appointment and
                experience the latest in dental technology with the Medit
                intraoral scanner at one of our Mid.ligner affiliated clinics.
              </p>
              <button className="bg-[#262261] text-white text-[12px] md:text-[16px] rounded-lg py-1 w-[200px] md:w-[263px]">
                Books 3D Scan Appointment
              </button>
            </div>
            <div className="flex items-end h-auto md:h-[200px] ">
              <span className="text-4xl font-extrabold text-[#A0A5CB]   ">
                01
              </span>
            </div>
            <div className="w-[276px]">
              <img src="/images/card_1.png" />
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? {} : { opacity: 0, translateX: "100%" }}
            whileInView={isMobile ? {} : { opacity: 1, translateX: "0" }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-3xl flex flex-col gap-2 items-center md:flex-row justify-between p-4"
          >
            <div className="flex flex-col w-[250px] md:w-[400px] gap-4 pl-4 md:pl-0">
              <h2 className="text-[#262261] text-xl">
                Get a Glimpse of Your Future Smile
              </h2>
              <p>
                Using the digital scan of your teeth, we’ll create a tailored
                treatment plan featuring a preview of your future smile using
                highly precision software designed by orthodontists, along with
                a comprehensive diagnosis, predicted results, and treatment
                timeline.
              </p>
              <button className="bg-[#262261] text-white text-[12px] md:text-[16px] rounded-lg py-1 w-[200px] md:w-[263px]">
                Books 3D Scan Appointment
              </button>
            </div>
            <div className="flex items-end h-auto md:h-[200px] ">
              <span className="text-4xl font-extrabold text-[#A0A5CB]   ">
                02
              </span>
            </div>
            <div className="w-[276px]">
              <img src="/images/card_2.png" />
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? {} : { opacity: 0, translateX: "-100%" }}
            whileInView={isMobile ? {} : { opacity: 1, translateX: "0" }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-3xl flex flex-col gap-2 items-center md:flex-row justify-between p-4"
          >
            <div className="flex flex-col w-[250px] md:w-[400px] gap-4 pl-4 md:pl-0">
              <h2 className="text-[#262261] text-xl">Step In. Smile Out!</h2>
              <p className="text-[#5F5E5D]">Production and Delivery</p>
              <p>
                Now you can schedule your transformation appointment and
                experience the latest in dental technology with the Medit
                intraoral scanner at one of our Mid.ligner affiliated clinics.
              </p>
            </div>
            <div className="flex items-end h-auto md:h-[200px] ">
              <span className="text-4xl font-extrabold text-[#A0A5CB]   ">
                03
              </span>
            </div>
            <div className="w-[276px]">
              <img src="/images/card_3.png" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* treatable cases */}
      <div
        className="bg-[#ECEDF5] flex flex-col items-center gap-12 py-20"
        id="treatable-cases"
      >
        <span className="bg-white px-4 py-3 shadow-xl rounded-xl text-sm text-[#262261] flex items-center gap-1">
          <img src="/images/teeth.png" className="w-5 h-5" />
          Treatable Cases
        </span>
        {/* cards */}
        <div className="flex flex-col gap-4 mx-2 md:mx-0">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/over-crowded.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">Over Crowded</h2>
                <p>
                  Occurs when there is insufficient room to fit all teeth
                  leading to plaque accumulation.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/open-bites.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">Open Bites</h2>
                <p>
                  Occurs when there is excessive space between upper and lower
                  front teeth.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/over-bite.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">Over bite</h2>
                <p>Occurs when upper teeth covering lower teeth abnormally.</p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/under-bite.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">Under Bite</h2>
                <p>Occurs when lower teeth bite over your front teeth.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/cross-bite.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">Cross Bite</h2>
                <p>Occurs when upper and lower jaws are misaligned.</p>
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-xl flex items-center gap-4 p-4">
              <img
                src="/images/diastema.png"
                className="w-[120px] h-[104px] md:w-[200px] md:h-[156px]"
              />
              <div className="w-[190px] md:w-[210px] flex flex-col gap-4">
                <h2 className="text-[#262261] text-xl">
                  Gapped teeth (Diastema)
                </h2>
                <p>
                  Occurs when spaces between teeth are too wide this can cause
                  gum problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div
        className="bg-white flex flex-col items-center gap-12 py-20"
        id="faq"
      >
        <div className="w-full bg-[#FCFCFD] flex flex-col gap-6 items-center py-10 rounded-xl">
          <span className="bg-white px-4 py-3 shadow-xl rounded-xl text-sm text-[#262261] flex items-center gap-1">
            <img src="/images/faq.png" className="w-5 h-5" />
            FAQs
          </span>
          {/* FAQ Select */}

          <div className="w-[100%] pl-8 md:pl-3 mx-auto md:w-[50%]">
            <FaqAccordion />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
};

export default Landing;
