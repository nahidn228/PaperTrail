import { Link, useParams, useNavigate } from "react-router";
import {
  useBorrowAddBookMutation,
  useGetSingleBookQuery,
} from "@/redux/API/bookApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loading from "@/components/Loading";
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
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const ShowSingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: bookData, isLoading, isError } = useGetSingleBookQuery(id);
  const [borrowBook, { isLoading: borrowLoading }] = useBorrowAddBookMutation();

  const form = useForm({
    defaultValues: { quantity: 1, dueDate: "" },
  });

  const onSubmit = async (data: { quantity: number; dueDate: any; }) => {
    if (data.quantity > bookData?.data?.copies) {
      toast.error(`Quantity cannot exceed ${bookData?.data?.copies} copies.`);
      return;
    }
    console.log(data);

    try {
      await borrowBook({
        bookId: bookData?.data?._id,
        quantity: data.quantity,
        dueDate: data.dueDate,
      }).unwrap();
      toast.success("Book borrowed successfully!");
      navigate("/borrow-summary");
    } catch (error) {
      console.error(error);
      toast.error("Failed to borrow book.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading text="Loading book..." />
      </div>
    );
  }

  if (isError || !bookData?.data) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p>Error loading book data. Please try again.</p>
      </div>
    );
  }

  const book = bookData.data;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#152942] dark:text-white mb-6 text-center">
        {book.title}
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src={book.photo}
            alt={book.title}
            className="w-48 h-72 object-cover rounded-lg shadow"
          />
        </div>
        <div className="flex-1 space-y-2">
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Author:
            </span>{" "}
            {book.author}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Genre:
            </span>{" "}
            {book.genre}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              ISBN:
            </span>{" "}
            {book.isbn}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Description:
            </span>{" "}
            {book.description}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Copies:
            </span>{" "}
            {book.copies}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Price:
            </span>{" "}
            ${book.price}
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Available:
            </span>{" "}
            {book.available ? "Yes" : "No"}
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-2 py-6">
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer border-[#4ECDC4] dark:border-[#4ECDC4]"
        >
          <Link to={`/edit-book/${book._id}`}>Edit Book</Link>
        </Button>

        {/* Borrow Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Borrow Book</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Borrow "{book.title}"</DialogTitle>
              <DialogDescription>
                Fill details and click Confirm Borrow
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity (max {book.copies})</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={borrowLoading}>
                    {borrowLoading ? "Borrowing..." : "Confirm Borrow"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ShowSingleBook;
