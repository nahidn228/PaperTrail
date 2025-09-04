
import { BookCategories } from "@/components/home/BookCategories";
import BooksGallery from "@/components/home/BooksGallery";
import CoreBooks from "@/components/home/CoreBooks";
import { FeaturesSection } from "@/components/home/FeaturesSection";

import { HeroSection } from "@/components/home/HeroSection";
import HomeSingleBook from "@/components/HomeSingleBook";
import { useGetAllBookQuery } from "@/redux/API/bookApi";
import type { IBookData } from "@/types/types";
import { useState } from "react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("SCIENCE");

  const {
    data: books,
    isLoading,
    error: allBooksError,
  } = useGetAllBookQuery(null);

  const gallery = books?.data;



  const getFilteredBooks = () => {
    if (!books?.data) return [];
    return books.data.filter(
      (book: IBookData) => book.genre === selectedCategory
    );
  };

  const filteredBooks = getFilteredBooks();

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

      <BookCategories
        categories={[
          { value: "SCIENCE", label: "Science" },
          { value: "FICTION", label: "Fiction" },
          { value: "NON_FICTION", label: "Non-Fiction" },
          { value: "HISTORY", label: "History" },
          { value: "BIOGRAPHY", label: "Biography" },
          { value: "FANTASY", label: "Fantasy" },
        ]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredBooks={filteredBooks}
        isLoading={isLoading}
        error={allBooksError}
      />
    
      <HomeSingleBook />
    </div>
  );
};

export default Home;
