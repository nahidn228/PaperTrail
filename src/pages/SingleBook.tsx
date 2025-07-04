import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/API/bookApi";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { toast } from "sonner";
import type { IBookData } from "@/types/types";
import Loading from "@/components/Loading";

const SingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: bookData } = useGetSingleBookQuery(id);

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
      price: 0,
      available: true,
      photo: "",
    },
  });

  const onSubmit = async (data: IBookData) => {
    try {
      const res = await updateBook({ id, ...data }).unwrap();
      console.log(res);
      toast.success("Book updated successfully!");
      navigate("/books");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update book");
    }
  };

  useEffect(() => {
    if (bookData) {
      form.reset({
        title: bookData?.data?.title || "",
        author: bookData?.data.author || "",
        genre: bookData?.data.genre || "",
        isbn: bookData?.data.isbn || "",
        description: bookData?.data.description || "",
        copies: bookData?.data.copies || 0,
        price: bookData?.data.price || 0,
        available: bookData?.data.available ?? true,
        photo: bookData?.data.photo || "",
      });
    }
  }, [bookData, form]);

  return (
    <div className="py-10">
      <h2 className="text-[#152942] dark:text-white mb-6 text-center font-bold text-4xl">
        {bookData?.data?.title}
      </h2>
      <div className="max-w-2xl mx-auto  border rounded-2xl p-8 shadow-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Clean Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Robert C. Martin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">FICTION</SelectItem>
                      <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                      <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                      <SelectItem value="HISTORY">HISTORY</SelectItem>
                      <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                      <SelectItem value="FANTASY">FANTASY</SelectItem>
                      <SelectItem value="CLASSIC">CLASSIC</SelectItem>
                      <SelectItem value="PROGRAMMING">PROGRAMMING</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="9780132350884" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A handbook of agile software craftsmanship."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="3" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <FormLabel>Available</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photo URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://covers.openlibrary.org/b/id/9645796-L.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {isLoading ? <Loading text="Updating" /> : "Update book"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SingleBook;
