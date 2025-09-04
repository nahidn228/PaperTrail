import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { IBookData } from "@/types/types";
import { Link } from "react-router";
import { motion } from "motion/react";

interface Props {
  items: IBookData[];
}

const BooksGallery: React.FC<Props> = ({ items }) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="container mx-auto max-w-screen-xl py-24 px-4">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          {/* Title */}
          <h1 className="relative z-10 mx-auto max-w-2xl  text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-xl md:text-3xl lg:text-5xl  leading-snug px-0">
            {" Read smarter, not harder".split(" ").map((word, index) => (
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
            className="relative z-10 mx-auto max-w-xl py-4  text-base font-normal text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg"
          >
            Discover, organize, and share your favorite books effortlessly. Dive
            into a curated reading journey with PaperTrail.
          </motion.p>

          {/* <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Read smarter, not harder
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Discover, organize, and share your favorite books effortlessly. Dive
            into a curated reading journey with PaperTrail.
          </p> */}
        </div>
        <div className="hidden shrink-0 gap-3 md:flex">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="rounded-full shadow-sm"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="rounded-full shadow-sm"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <Carousel setApi={setCarouselApi}>
        <CarouselContent className="ml-0 gap-6">
          {items?.map((item, idx) => (
            <CarouselItem
              key={item._id ?? idx}
              className="max-w-[300px] pl-[12px] lg:max-w-[300px]"
            >
              <Link to={`/books/${item._id}`}>
                <div className="group relative h-full min-h-[27rem] overflow-hidden rounded-xl bg-background shadow-md ring-1 ring-border/20 transition-all duration-300 hover:shadow-xl hover:ring-border/40">
                  {/* Book Cover */}
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="mb-2 text-lg font-semibold leading-snug md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-white/80">
                      {item.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary-foreground/90 group-hover:underline">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {items?.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-primary shadow-lg ring-2 ring-primary/50"
                : "bg-primary/20 hover:bg-primary/40"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BooksGallery;
