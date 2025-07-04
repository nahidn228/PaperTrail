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
    <div className="max-w-6xl mx-auto  px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#152942] dark:text-white mb-6">
        Explore Our Books
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={() => plugin.current?.stop()}
        onMouseLeave={() => plugin.current?.reset()}
      >
        <CarouselContent>
          {books?.data?.map((book: IBookData) => (
            <CarouselItem key={book._id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full shadow-md hover:shadow-xl transition duration-300">
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
