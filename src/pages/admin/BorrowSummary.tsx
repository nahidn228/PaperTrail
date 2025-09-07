/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { useBorrowGetAllBookQuery } from "@/redux/API/bookApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Loader } from "@/components/Loader";

const BorrowSummary = () => {
  const { data, isLoading, isError } = useBorrowGetAllBookQuery(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 mt-6">
        Failed to load borrow summary. Please try again later.
      </div>
    );
  }

  const borrowData = data?.data || [];

  const filteredData = borrowData.filter((item: any) =>
    item.book.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Slice for pagination
  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <motion.div
      className="p-6 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="max-w-5xl mx-auto shadow-xl rounded-2xl border dark:border-primary">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center text-primary">
            Borrow Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Search bar */}
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 " />
            <Input
              placeholder="Search book by title..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // reset to first page when searching
              }}
              className="w-full"
            />
            {search && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearch("")}
                className="text-primary"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              <p className="text-lg">No borrow summary found.</p>
              <p className="text-sm">Try a different search keyword.</p>
            </div>
          ) : (
            <>
              {/* Table */}
              <Table className="overflow-hidden">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Book Title</TableHead>
                    <TableHead className="font-semibold">ISBN</TableHead>
                    <TableHead className="text-right font-semibold">
                      Total Quantity Borrowed
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedData.map((item: any, idx: number) => (
                    <motion.tr
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="cursor-pointer hover:bg-primary"
                    >
                      <TableCell className="font-medium">
                        {item.book.title}
                      </TableCell>
                      <TableCell>{item.book.isbn}</TableCell>
                      <TableCell className="text-right font-semibold text-white">
                        {item.totalQuantity}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm font-medium">
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="flex items-center gap-1"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default BorrowSummary;
