import { Link } from "react-router";
import { Button } from "./ui/button";

const HomeSingleBook = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 py-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <img
            src="https://booksondemand.ma/cdn/shop/products/71Y67UzW5GL.jpg?v=1631701338&width=1946"
            alt="Clean Code with Nahid"
            className="w-48 h-72 object-cover rounded-lg shadow"
          />
        </div>
        <div className="flex-1 space-y-2">
          <p className="">
            <span className="font-semibold border-2 text-[#4ECDC4]  rounded-2xl p-1 px-2">
              PROGRAMMING
            </span>
          </p>
          <p className="text-xl font-bold text-[#152942] dark:text-white mb-6 ">
            Clean Code with Nahid
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Author:
            </span>{" "}
            Nahid Hasan
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Genre:
            </span>{" "}
            PROGRAMMING
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              ISBN:
            </span>{" "}
            19250036544
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Description:
            </span>{" "}
            Received `true` for a non-boolean attribute `cl`.\n\nIf you want to
            write it to the DOM, pass a string instead: cl=\"true\" or
            cl=.\nvalidateProperty @
            react-dom_client.js?v=2b195635:2473Understand this error",
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Copies:
            </span>
            100
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Price:
            </span>{" "}
            $20
          </p>
          <p>
            <span className="font-semibold text-[#152942] dark:text-[#4ECDC4]">
              Available:
            </span>{" "}
            YES
          </p>
        </div>
      </div>
      <Button className="flex  justify-self-end">
        <Link to={"/books"}>Explore More {">"}</Link>
      </Button>
    </div>
  );
};

export default HomeSingleBook;
