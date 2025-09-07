"use client";


import { useGetAllBookQuery } from "@/redux/API/bookApi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { ShootingStars } from "@/components/ui/shooting-stars";
// import { StarsBackground } from "@/components/ui/stars-background";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import type { IBookData } from "@/types";
import { useState } from "react";
import { Link } from "react-router";
import { Loader } from "@/components/Loader";

const AllBooks = () => {
  const [page, setPage] = useState(1);
  const limit = 8;
  const { data: books, isLoading } = useGetAllBookQuery({ limit, page });

  const totalPages = books?.meta?.totalPages || 1;
  const currentBooks = books?.data || [];

  if (isLoading) return <Loader />;

  return (
    <div className="my-10 container mx-auto px-6">
      <h2 className="text-3xl font-bold my-20 text-slate-800 dark:text-slate-200 text-center">
        📚 Explore PaperTrail ALL Books
      </h2>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {currentBooks.map((book: IBookData) => (
          <Link key={book._id} to={`/books/${book._id}`}>
            <CardSpotlight className="h-96 w-full max-w-xs p-4 flex flex-col justify-between rounded-2xl">
              {/* Cover */}
              <div className="flex-1 w-full rounded-lg overflow-hidden">
                <img
                  src={book.photo}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="mt-3">
                <h3 className="text-lg font-bold text-white">{book.title}</h3>
                <p className="text-sm text-neutral-200">{book.author}</p>
              </div>

              {/* Genre & Price */}
              <div className="flex justify-between items-center mt-2">
                <Badge
                  variant="outline"
                  className="border-[#7420E6]/30 text-[#7420E6] bg-[#7420E6]/10"
                >
                  {book.genre}
                </Badge>
                <span className="font-semibold text-white">${book.price}</span>
              </div>

              {/* Action */}
              <Button className="mt-4 w-full ">View Book</Button>
            </CardSpotlight>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <p className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Button
              key={num}
              variant={num === page ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(num)}
            >
              {num}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Background Stars */}
      {/* <div className="pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div> */}
    </div>
  );
};

export default AllBooks;
