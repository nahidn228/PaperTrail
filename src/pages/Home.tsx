import Banner from "@/components/Banner";
import BookSlider from "@/components/BookSlider";
import Hero from "@/components/home/Hero";
import HomeSingleBook from "@/components/HomeSingleBook";
import { useGetAllBookQuery } from "@/redux/API/bookApi";

const Home = () => {
  const { data: books, isLoading } = useGetAllBookQuery(null);
  return (
    <div>
      <Hero />
      <Banner />
      <div>
        <BookSlider books={books} isLoading={isLoading} />
      </div>
      <HomeSingleBook />
    </div>
  );
};

export default Home;
