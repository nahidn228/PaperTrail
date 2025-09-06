import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { IBookData } from "@/types";

export function BookCard({ book }: { book: IBookData }) {
  const navigate = useNavigate();

  return (
    <Card className="group relative h-full transition-all duration-300 hover:shadow-xl hover:shadow-[#7420E6]/20 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7420E6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <CardHeader className="pb-2 relative z-10">
        <div className="aspect-[2/3] relative mb-3 overflow-hidden rounded-lg shadow-md">
          <img
            src={book.photo || "/api/placeholder/150/225"}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300"
          />

          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Availability badge */}
          <Badge
            className={`absolute top-2 right-2 text-xs px-2 py-1 font-medium shadow-lg ${
              book.available
                ? "bg-[#7420E6] text-white border-[#7420E6] hover:bg-[#5a17b8]"
                : "bg-gray-500 text-white border-gray-400"
            }`}
          >
            {book.available ? "Available" : "Out of Stock"}
          </Badge>
        </div>

        <CardTitle className="text-sm font-semibold line-clamp-2 leading-tight group-hover:text-[#7420E6] dark:group-hover:text-[#7420E6] transition-colors">
          {book.title}
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground font-medium">
          by {book.author}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 pb-2 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant="outline"
            className="text-xs border-[#7420E6]/30 text-[#7420E6] dark:text-[#7420E6]/80 bg-[#7420E6]/10 hover:bg-[#7420E6]/20 transition-colors"
          >
            {book.genre}
          </Badge>
          <span className="text-sm font-bold text-[#7420E6] dark:text-[#7420E6]/80">
            ${book.price}
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-0 relative z-10">
        <div className="flex justify-center w-full">
          <Button
            size="sm"
            onClick={() => navigate(`/books/${book._id}`)}
            className="w-4/5 text-xs h-8 px-3 bg-gradient-to-r from-[#7420E6] to-[#9b3fff] hover:from-[#5a17b8] hover:to-[#7420E6] text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
