import Loading from "@/components/Loading";
import { useGetAllBookQuery } from "@/redux/API/bookApi";
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
import { Inspect, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import type { IBook } from "@/types/types";

const Books = () => {
  const { data: books, isLoading } = useGetAllBookQuery(null);

  if (isLoading) return <Loading text=" Getting Book from server " />;

  console.log(books.data);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="p-8 ">
      <h2 className="text-xl font-semibold mb-4">📚 Book List</h2>
      <div className="max-w-screen mx-auto min-h-[calc(100vh-200px)]  border rounded-2xl p-8 shadow-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.data?.map((book: IBook) => (
              <TableRow key={book._id}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.copies}</TableCell>
                <TableCell>
                  {book.available ? "Available" : "Unavailable"}
                </TableCell>
                <TableCell>
                  <div className="space-x-3">
                    <Button
                      className="cursor-pointer border-[#4ECDC4]"
                      variant="outline"
                      size={"sm"}
                    >
                      <Link to={`/books/${book._id}`}>
                        <Inspect className="w-5 h-5 " />
                      </Link>
                    </Button>
                    {/* Edit and Borrow Action */}

                    {/* Delete Book */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="cursor-pointer border-[#4ECDC4]">
                          <Trash2 className="w-5 h-5 text-[#ED4250] hover:text-[#152942] cursor-pointer" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            Are You sure want to delete this books ?
                          </DialogTitle>
                          <DialogDescription>
                            This operation could'not be undone
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button className="cursor-pointer">Cancel</Button>
                          </DialogClose>
                          <Button
                            onClick={() => handleDelete(book._id)}
                            className="bg-orange-600 cursor-pointer"
                          >
                            Delete Book
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
    </div>
  );
};

export default Books;
