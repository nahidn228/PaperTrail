import Banner from "@/components/Banner";
import BookSlider from "@/components/BookSlider";
import HomeSingleBook from "@/components/HomeSingleBook";
import { useGetAllBookQuery } from "@/redux/API/bookApi";

const Home = () => {
  const { data: books, isLoading } = useGetAllBookQuery(null);
  return (
    <div>
      <Banner />
      <div>
        <BookSlider books={books} isLoading={isLoading} />
      </div>
      <HomeSingleBook />
    </div>
  );
};

export default Home;
