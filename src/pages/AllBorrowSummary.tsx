"use client";

import Loading from "@/components/Loading";
import { useBorrowGetAllBookQuery } from "@/redux/API/bookApi";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Badge } from "@/components/ui/badge";
import type { IBookData } from "@/types";

interface IBorrowItem {
  book: IBookData;
  totalQuantity: number;
}

const AllBorrowSummary = () => {
  const { data, isLoading, isError } = useBorrowGetAllBookQuery(null);
  const borrowData: IBorrowItem[] = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Loading text="Your borrow data is loading..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-6">
        Failed to load borrow summary. Please try again later.
      </div>
    );
  }

  if (borrowData.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No borrow summary data found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 my-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary ">
        📖 Borrow Summary
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {borrowData.map((item, idx) => (
          <CardSpotlight
            key={idx}
            className="p-4 h-72 flex flex-col justify-center "
          >
            <div>
              <h3 className="text-xl font-bold relative z-20 mt-2 text-white">
                {item.book.title}
              </h3>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                ISBN: {item.book.isbn}
              </p>
              <p className="text-sm text-neutral-200 mt-1">
                Author: {item.book.author}
              </p>
            </div>
            <Badge className="bg-[#7420E6] text-white mt-4 w-fit">
              Total Borrowed: {item.totalQuantity}
            </Badge>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
};

export default AllBorrowSummary;
