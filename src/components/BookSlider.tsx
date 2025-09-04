// components/BookSlider.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Loading from "@/components/Loading";
import type { IBookData } from "@/types/types";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { motion } from "motion/react";

interface IBookSliderProps {
  books: { data: IBookData[] };
  isLoading: boolean;
}

const BookSlider: React.FC<IBookSliderProps> = ({ books, isLoading }) => {
  if (isLoading) return <Loading text="Loading books..." />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="max-w-screen-xl mx-auto py-6  px-4">
      {/* Title */}
      <h1 className="relative z-10 mx-auto max-w-2xl text-center text-xl font-bold text-slate-700 dark:text-slate-300 sm:text-xl md:text-3xl  py-4 leading-snug">
        {"Explore Our Books".split(" ").map((word, index) => (
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

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={() => plugin.current?.stop()}
        onMouseLeave={() => plugin.current?.reset()}
      >
        <CarouselContent>
          {books?.data?.map((book: IBookData) => (
            <CarouselItem key={book._id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full shadow-md hover:shadow-xl transition duration-300 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-xl">
                <CardContent className="p-4 flex flex-col items-center">
                  <div className="flex-1">
                    <img
                      src={book.photo}
                      alt={book.title}
                      className="w-32 h-48 object-cover rounded mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-[#152942] dark:text-[#4ECDC4]">
                    {book.title}
                  </h3>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-300">
                    by {book.author}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    $ {book.price}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BookSlider;
