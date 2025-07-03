import { Button } from "@/components/ui/button"; // shadcn button
import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white via-white to-gray-50 dark:from-background dark:via-background dark:to-background">
      <div className="max-w-screen-xl mx-auto text-center space-y-6">
        <div className="flex justify-center items-center gap-3">
          <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#4ECDC4]" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#152942] dark:text-white">
            Welcome to PaperTrail
          </h1>
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Discover, organize, and share your favorite books effortlessly. Dive
          into a curated reading journey with PaperTrail.
        </p>
        <Button className="bg-[#4ECDC4] hover:bg-[#3bbab3] text-[#152942] font-semibold px-8 py-6 rounded-full transition cursor-pointer text-lg">
          <Link to={"/books"}> Get Started </Link>
        </Button>
      </div>
    </section>
  );
};

export default Banner;
