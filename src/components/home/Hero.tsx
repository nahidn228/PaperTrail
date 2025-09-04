import { Link } from "react-router";
import { Button } from "../ui/button";
import HeroIcon from "./HeroIcon";
import { SparklesCore } from "../ui/sparkles";

const Hero = () => {
  return (
    <section className=" lg:grid lg:h-screen lg:place-content-center max-w-screen-xl mx-auto ">
      <div className="w-full absolute inset-0 h-screen">
         <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className=" py-16  grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className=" text-left w-3/4 mx-auto">
          <h1 className="text-4xl font-bold  sm:text-5xl">
            Discover books that
            <strong className="text-primary"> inspire </strong>
            you
          </h1>

          <p className="mt-4 text-base text-pretty  sm:text-lg/relaxed">
            Organize your collection, track your journey, and share your
            favorites with ease.
          </p>

          <div className="mt-4 flex flex-col md:flex-row gap-4 sm:mt-6">
            <Button size={"lg"}>
              {" "}
              <Link to={"/books"}> Get Started </Link>
            </Button>{" "}
            <Button className="cursor-pointer" size={"lg"} variant={"outline"}>
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
