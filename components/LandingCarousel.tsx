"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import LandingLayout from "./LandingLayout";

const carouselData = [
  {
    id: 1,
    image: "/images/carousel_1.png",
    content: "We Achieve Beyond Your Mind Believes",
  },
  {
    id: 2,
    image: "/images/carousel_2.png",
    content: "Your Perfect Smile Even Better",
  },
  {
    id: 3,
    image: "/images/carousel_3.png",
    content: "Don’t Be Shy & Show Them Your Smile",
  },
  {
    id: 4,
    image: "/images/carousel_4.png",
    content: "As Crystal Clear As You Smile Appears",
  },
];

export default function LandingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between p-24 bg-[url('/images/hero.png')] bg-cover bg-center">
        <LandingLayout>
          {/*  Landing Hero */}
          <div className="flex flex-col items-center gap-10 md:flex-row justify-around">
            {/* <img src="/images/hero.png" alt="hero" className="w-full h-auto" /> */}

            <div className="w-[365px] h-[126px] md:w-[466px] md:h-[210px] flex flex-col items-center md:items-start justify-between">
              {/* Heading */}
              <motion.div>
                <h1 className="text-[#262261] text-4xl w-full text-center md:text-start">
                  {carouselData[currentIndex].content}
                </h1>
              </motion.div>

              {/* hero Button 'contact us' */}
              <div>
                <Link href="/contact-us">
                  <Button className="w-[269px] h-10 bg-[#262261] cursor-pointer text-[18px] rounded-xl text-white border border-[#DEDDDC]">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>

            {/* carousel slider */}
            <motion.div
              key={carouselData[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-[268px] h-[200px] md:w-[480px] md:h-[358px] flex items-center justify-center rounded-xl bg-gray-50 border-none">
                <CardContent className="p-4">
                  {
                    <img
                      src={carouselData[currentIndex].image}
                      className="rounded-xl w-[258px] h-[180px] md:w-[466px] md:h-[327px]"
                    />
                  }
                </CardContent>
              </Card>
            </motion.div>
          </div>
          {/* Navigation & Dots */}
          <div className="flex items-center justify-around w-full space-x-6 pt-6">
            <Button onClick={handlePrev} className="bg-white cursor-pointer">
              <img src="/images/left-arrow.png" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {carouselData.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full border border-gray-400 transition-all ${
                    currentIndex === index
                      ? "bg-[#262261] border-[#262261]"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>

            <Button onClick={handleNext} className="bg-white cursor-pointer">
              <img src="/images/right-arrow.png" />
            </Button>
          </div>
        </LandingLayout>
      </div>
    </>
  );
}
