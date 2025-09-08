import { BookCategories } from "@/components/home/BookCategories";
import BooksGallery from "@/components/home/BooksGallery";
import CoreBooks from "@/components/home/CoreBooks";

import { FeaturesSection } from "@/components/home/FeaturesSection";

import { HeroSection } from "@/components/home/HeroSection";
import Integration from "@/components/home/Integration";

import HomeSingleBook from "@/components/HomeSingleBook";
import { Loader } from "@/components/Loader";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { useGetAllBookQuery } from "@/redux/API/bookApi";
import type { IBookData } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("SCIENCE");
  const [loading, setLoading] = useState(true);
  const { setTheme } = useTheme();

  const {
    data: books,
    isLoading,
    error: allBooksError,
  } = useGetAllBookQuery({
    page: 1,
    limit: 1000,
  });

  const gallery = books?.data;

  const getFilteredBooks = () => {
    if (!books?.data) return [];
    return books.data.filter(
      (book: IBookData) => book.genre === selectedCategory
    );
  };

  const filteredBooks = getFilteredBooks();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      const theme = localStorage.getItem("vite-ui-theme");
      console.log(theme);
      if (theme !== "dark")
        toast(
          <div className="flex items-center justify-between gap-4">
            <span>Use Dark mode for a better experience</span>
            <Button size="sm" onClick={() => setTheme("dark")}>
              Enable
            </Button>
          </div>
        );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
      <Integration />

      {/* <WorldMapDemo /> */}
    </div>
  );
};

export default Home;
