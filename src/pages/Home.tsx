import BookSlider from "@/components/BookSlider";
import BooksGallery from "@/components/home/BooksGallery";
import CoreBooks from "@/components/home/CoreBooks";
import { FeaturesSection } from "@/components/home/FeaturesSection";


import { HeroSection } from "@/components/home/HeroSection";
import HomeSingleBook from "@/components/HomeSingleBook";
import { useGetAllBookQuery } from "@/redux/API/bookApi";

const Home = () => {
  const { data: books, isLoading } = useGetAllBookQuery(null);

  const gallery = books?.data;

  console.log(books);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <HeroSection />
      {/* <Hero /> */}
      <FeaturesSection />
      <BooksGallery items={gallery} />
      <CoreBooks
        heading={"Curated Books at Your Fingertips"}
        description={
          "Explore hand-picked books from various genres. With PaperTrail, you can discover, organize, and share your favorite reads effortlessly. Each book comes with detailed insights to help you dive deeper into your reading journey."
        }
      />
      {/* <Banner /> */}
      <div>
        <BookSlider books={books} isLoading={isLoading} />
      </div>
      <HomeSingleBook />
    </div>
  );
};

export default Home;
