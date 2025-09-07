import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/moving-border";

const HomeSingleBook = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 py-12 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Book Cover */}
        <div className="md:col-span-1">
          <div className="w-full h-full min-h-[400px] rounded-xl shadow-xl border border-[#7420E6]/20 overflow-hidden transition-transform hover:scale-105">
            <img
              src="https://booksondemand.ma/cdn/shop/products/71Y67UzW5GL.jpg?v=1631701338&width=1946"
              alt="Clean Code with Nahid"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="md:col-span-2">
          <Card className="bg-card/60 border border-[#7420E6]/30 backdrop-blur-md shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-[#7420E6]">
                Clean Code with Nahid
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-1">Nahid Hasan</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Book Info */}
              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div>
                  <span className="font-semibold">Genre:</span>
                  <Badge className="ml-2 bg-[#7420E6]/20 text-[#7420E6] border border-[#7420E6]/40">
                    PROGRAMMING
                  </Badge>
                </div>
                <div>
                  <span className="font-semibold">ISBN:</span>
                  <span className="ml-2 text-muted-foreground">
                    19250036544
                  </span>
                </div>
                <div>
                  <span className="font-semibold">Price:</span>
                  <span className="ml-2 text-muted-foreground">$20</span>
                </div>
                <div>
                  <span className="font-semibold">Copies:</span>
                  <span className="ml-2 text-muted-foreground">100</span>
                </div>
              </div>

              <Separator />

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="font-semibold">Status:</span>
                <Badge className="bg-[#7420E6] text-white px-3 py-1 rounded-lg">
                  Available
                </Badge>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-3 text-[#7420E6] text-lg md:text-xl">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Creating maintainable, readable, and efficient code that
                  developers love to work with. I focus on applying best
                  practices, modern patterns, and clean architecture principles
                  to build robust applications. Every line of code is written
                  with clarity, scalability, and performance in mind, ensuring
                  long-term sustainability and seamless collaboration.
                </p>
              </div>
            </CardContent>

            {/* Explore More Button */}
            <CardFooter className="pt-4">
              <Link to={"/books"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-primary dark:bg-slate-900 font-semibold text-white border-neutral-200 dark:border-slate-800 flex gap-2"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                {/* <Button
              
                  borderRadius="1.75rem"
                  size="lg"
                  className="bg-primary transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button> */}
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleBook;
