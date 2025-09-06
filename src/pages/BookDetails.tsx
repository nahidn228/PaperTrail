/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate, Link } from "react-router";
import {
  useBorrowAddBookMutation,
  useGetSingleBookQuery,
} from "@/redux/API/bookApi";

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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, BookOpen, Heart, Pencil } from "lucide-react";

import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Loader from "@/components/Loader";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: bookData,
    isLoading,
    error,
  } = useGetSingleBookQuery(id as string);

  const [borrowBook, { isLoading: borrowLoading }] = useBorrowAddBookMutation();

  const form = useForm({
    defaultValues: { quantity: 1, dueDate: "" },
  });

  const onSubmit = async (data: { quantity: number; dueDate: any }) => {
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

  if (isLoading) return <Loader />;

  if (error || !bookData?.data) {
    return (
      <div className="text-center mt-8 text-red-500">
        Book not found!
        <div className="mt-4">
          <Button onClick={() => navigate(-1)} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const book = bookData?.data;

  return (
    <div className=" max-w-4xl mx-auto p-6 ">
      {/* Header */}
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="mb-6 text-[#7420E6] hover:text-[#5a1ab4]"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Library
      </Button>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Book Cover */}
        <div className="md:col-span-1 shadow-xl">
          <div className="w-full h-full min-h-[400px] rounded-lg shadow-md border border-[#7420E6]/20 overflow-hidden">
            <img
              src={book?.photo}
              alt={book?.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Book Details */}
        <div className=" relative md:col-span-2 shadow-xl">
          <Card className="bg-card/50 border border-[#7420E6]/20 backdrop-blur-sm h-full">
            <CardHeader>
              <CardTitle className="text-3xl text-[#7420E6]">
                {book?.title}
              </CardTitle>
              <p className="text-lg text-muted-foreground">{book?.author}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Book Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Genre:</span>
                  <Badge className="ml-2 bg-[#7420E6]/20 text-[#7420E6] border border-[#7420E6]/30">
                    {book?.genre}
                  </Badge>
                </div>
                <div>
                  <span className="font-medium">ISBN:</span>
                  <span className="ml-2 text-muted-foreground">
                    {book?.isbn}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Price:</span>
                  <span className="ml-2 text-muted-foreground">
                    ${book?.price.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Copies:</span>
                  <span className="ml-2 text-muted-foreground">
                    {book?.copies}
                  </span>
                </div>
              </div>

              <Separator />

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <Badge
                  className={
                    book.copies > 0
                      ? "bg-[#7420E6] text-white"
                      : "bg-red-500 text-white"
                  }
                >
                  {book?.copies > 0 ? "Available" : "Unavailable"}
                </Badge>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-medium mb-2 text-[#7420E6]">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {book?.description}
                </p>
              </div>

              <Separator />

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                {/* Edit Book Button */}
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-[#7420E6] text-[#7420E6] hover:bg-[#7420E6] hover:text-white transition-all"
                >
                  <Pencil className="h-4 w-4" />
                  <Link to={`/edit-book/${book._id}`}>Edit Book</Link>
                </Button>

                {/* Borrow Book Button with Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="cursor-pointer  flex items-center gap-2 border-[#7420E6] text-white hover:bg-[#7420E6] hover:text-white transition-all">
                      <BookOpen className="h-4 w-4" />
                      Borrow Book
                    </Button>
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
                              <FormLabel>
                                Quantity (max {book.copies})
                              </FormLabel>
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

                {/* Add to Favorites Button */}
                <Button
                  variant="outline"
                  className="cursor-pointer flex items-center gap-2 border-2 border-[#7420E6] text-[#7420E6] hover:bg-[#7420E6] hover:text-white transition-all"
                  onClick={() =>
                    toast.info("Add to favorites functionality coming soon!")
                  }
                >
                  <Heart className="h-4 w-4" />
                  Add to Favorites
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className=" pointer-events-none">
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}
