import { Link } from "react-router";
import { Button } from "../ui/button";
import HeroIcon from "./HeroIcon";

const Hero = () => {
  return (
    <section className=" lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold  sm:text-5xl">
            Discover books that
            <strong className="text-primary"> inspire </strong>
            you
          </h1>

          <p className="mt-4 text-base text-pretty  sm:text-lg/relaxed">
            Organize your collection, track your journey, and share your
            favorites with ease.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Button size={"lg"}>
              {" "}
              <Link to={"/books"}> Get Started </Link>
            </Button>{" "}
            <Button size={"lg"} variant={"outline"}>
              Learn More
            </Button>
          </div>
        </div>

        <HeroIcon />
      </div>
    </section>
  );
};

export default Hero;
