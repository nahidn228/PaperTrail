import Loading from "@/components/Loading";
import { useDeleteBookMutation, useGetAllBookQuery } from "@/redux/API/bookApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronFirst, ChevronLast, Inspect, Trash2 } from "lucide-react";
import { Link } from "react-router";
import type { IBook } from "@/types";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { CardDescription, CardTitle } from "@/components/ui/card";

const Books = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data: books, isLoading } = useGetAllBookQuery({ limit, page });
  const [deleteBook, { isLoading: loadingDelete }] = useDeleteBookMutation();

  const totalPages = books?.meta?.totalPages || 1;
  const currentBooks = books?.data || [];

  if (isLoading) return <Loading text=" Getting Book from server " />;

  // pagination logic
  // const totalBooks = books?.data?.length || 0;
  // const totalPages = Math.ceil(totalBooks / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const currentBooks = books?.data?.slice(
  //   startIndex,
  //   startIndex + itemsPerPage
  // );

  const handleDelete = async (book: IBook) => {
    const id = book?._id;
    console.log(id);
    if (!id) {
      toast.error("Book ID is missing, cannot delete");
      return;
    }

    return toast.error(`You are not permitted to do this operation`);

    try {
      const res = await deleteBook(id).unwrap();
      console.log(res);
      toast.success(`${book.title} is successfully deleted`);
    } catch (error) {
      toast.error(`${book.title} is not deleted`);
      console.log(error);
    }
  };

  console.log(books);

  return (
    <div className=" my-4">
      {/* <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 flex items-center gap-2">
        📚 Book List
      </h2> */}

      <div className="p-4">
        <CardTitle>Books List</CardTitle>
        <CardDescription>Showing All book details</CardDescription>
      </div>
      <div className="overflow-x-auto rounded-xl border border-[#7420E6]/20 shadow-md bg-card min-h-90">
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow className="bg-[#7420E6]/10 dark:bg-[#7420E6]/20">
              <TableHead className="p-4">Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentBooks?.map((book: IBook) => (
              <TableRow
                key={book?._id}
                className="hover:bg-[#7420E6]/5 dark:hover:bg-[#7420E6]/10 transition-colors"
              >
                <TableCell className="font-medium">{book?.title}</TableCell>
                <TableCell>{book?.author}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="border-[#7420E6]/30 text-[#7420E6] bg-[#7420E6]/10"
                  >
                    {book?.genre}
                  </Badge>
                </TableCell>
                <TableCell>{book?.isbn}</TableCell>
                <TableCell>{book?.copies}</TableCell>
                <TableCell>
                  {book?.available ? (
                    <Badge className="bg-[#7420E6] text-white">Available</Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">Unavailable</Badge>
                  )}
                </TableCell>

                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Link to={`/books/${book?._id}`}>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-[#7420E6]/10 text-[#7420E6]"
                      >
                        <Inspect className="w-5 h-5" />
                      </Button>
                    </Link>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-red-500/10 text-red-500"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[400px]">
                        <DialogHeader>
                          <DialogTitle className="text-lg">
                            Delete this book?
                          </DialogTitle>
                          <DialogDescription>
                            This action cannot be undone.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button
                            onClick={() => handleDelete(book)}
                            className="bg-red-500 hover:bg-red-600 text-white"
                          >
                            {loadingDelete ? "Deleting..." : "Delete"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between mt-6">
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
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div> */}

      {/* Pagination Controls */}
      {/* <div className="flex items-center justify-between mt-6">
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
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div> */}

      <div className="flex items-center justify-between mt-6">
        {/* Page Info */}
        <p className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </p>

        {/* Pagination Controls */}
        <div className="flex gap-2">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            <ChevronFirst className="w-4 h-4 mr-1" />
            Prev
          </Button>

          {/* Page Numbers */}
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

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
            <ChevronLast className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <div className=" pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export default Books;
