import { Link, useParams } from "react-router";
import { useGetSingleBookQuery } from "@/redux/API/bookApi";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";


const ShowSingleBook = () => {
  const { id } = useParams();
  const { data: bookData, isLoading, isError } = useGetSingleBookQuery(id);

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
        {/* Left: Book image */}
        <div className="flex-shrink-0">
          <img
            src={book.photo}
            alt={book.title}
            className="w-48 h-72 object-cover rounded-lg shadow"
          />
        </div>
        {/* Right: Book details */}
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
        <Button className="cursor-pointer border-[#4ECDC4] dark:border-[#4ECDC4]" variant="outline" size={"sm"}>
          <Link to={`/edit-book/${book._id}`}>Edit Book</Link>
        </Button>
        <Button className="cursor-pointer "  size={"sm"}>
          <Link to={`/borrow/${book._id}`}> Borrow Book</Link>
        </Button>
      </div>
    </div>
  );
};

export default ShowSingleBook;
