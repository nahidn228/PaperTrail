/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import { useBorrowGetAllBookQuery } from "@/redux/API/bookApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useBorrowGetAllBookQuery(null);
  console.log(data);

  console.log(data);

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

  if (!data?.data || data.data.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        No borrow summary data found.
      </div>
    );
  }

  return (
    <div className="p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#152942] dark:text-[#4ECDC4] pb-10">
        Borrow Summary
      </h2>
      <div className="max-w-screen mx-auto min-h-[calc(100vh-200px)] border  dark:border-[#4ECDC4] rounded-2xl p-8 shadow-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead className="text-right">
                Total Quantity Borrowed
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data.map((item: any, idx: number) => (
              <TableRow key={idx}>
                <TableCell>{item.book.title}</TableCell>
                <TableCell>{item.book.isbn}</TableCell>
                <TableCell className="text-right">
                  {item.totalQuantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummary;
