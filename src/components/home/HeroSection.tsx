/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useGetAllBookQuery } from "@/redux/API/bookApi";
import BookSlider from "../BookSlider";
import { SparklesCore } from "../ui/sparkles";

export function HeroSection() {
  const { data: books, isLoading } = useGetAllBookQuery({
    page: 1,
    limit: 1000,
  });

  console.log(books);

  return (
    <div className="relative mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center px-4">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Vertical lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Content */}
      <div className="w-full py-10 md:py-20">
        {/* Title */}
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug">
          {"Find papers instantly, not endlessly"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base font-normal text-neutral-600 dark:text-neutral-400 sm:text-lg md:text-xl"
        >
          Search, filter, and download academic papers within seconds. Save time
          and focus on learning with our simple, fast, and user-friendly
          platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap items-center justify-center"
        >
          <Link to={"/books"} className="w-full sm:w-auto">
            <Button className="w-full sm:w-60 transform rounded-lg bg-black px-6 py-6 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-[#7420E6] dark:text-white dark:hover:bg-[#7237c4] cursor-pointer md:text-xl">
              Explore Now
            </Button>
          </Link>
          <Link to={"/contact"} className="w-full sm:w-auto">
            <Button className="w-full sm:w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-6 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer md:text-xl">
              Contact Support
            </Button>
          </Link>
        </motion.div>

        {/* BookSlider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-12 md:mt-20 rounded-3xl border border-neutral-200 p-4 shadow-md dark:border-neutral-800"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 py-20">
            {books ? <BookSlider books={books} isLoading={isLoading} /> : ""}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
