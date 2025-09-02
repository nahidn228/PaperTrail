import Banner from "@/components/Banner";
import BookSlider from "@/components/BookSlider";
import BooksGallery from "@/components/home/BooksGallery";

import Hero from "@/components/home/Hero";
import HomeSingleBook from "@/components/HomeSingleBook";
import { useGetAllBookQuery } from "@/redux/API/bookApi";

const Home = () => {
  const { data: books, isLoading } = useGetAllBookQuery(null);

  const gallery = books?.data;

  console.log(books);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Hero />
      <BooksGallery items={gallery} />
      {/* <CoreBooks coreBooks={books} /> */}
      <Banner />
      <div>
        <BookSlider books={books} isLoading={isLoading} />
      </div>
      <HomeSingleBook />
    </div>
  );
};

export default Home;
