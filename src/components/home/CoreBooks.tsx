import { motion } from "motion/react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

interface Feature166Props {
  heading?: string;
  description?: string;
}

const CoreBooks = ({
  heading = "Curated Books at Your Fingertips",
  description = "Explore hand-picked books from various genres. With PaperTrail, you can discover, organize, and share your favorite reads effortlessly. Each book comes with detailed insights to help you dive deeper into your reading journey.",
}: Feature166Props) => {
  const features = [
    {
      title: "Mastering React",
      description:
        "A complete guide to building scalable and dynamic web applications using React.js and modern frontend tools.",
      image:
        "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1711556422/a/ed/ac/158645-ml-2252011.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Node.js in Action",
      description:
        "Learn backend development with Node.js, Express, and MongoDB to build robust APIs and real-world applications.",
      image:
        "https://static-01.daraz.com.bd/p/75dc138d38e4e738549ff02f3d9c951a.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Design Patterns Simplified",
      description:
        "An easy-to-understand introduction to common software design patterns and their practical use cases.",
      image:
        "https://www.palatinate.org.uk/wp-content/uploadedImages/TheTheory.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Clean Code with Nahid",
      description:
        "Learn the principles of writing clean, maintainable, and efficient code with practical examples and best practices.",
      image:
        "https://booksondemand.ma/cdn/shop/products/71Y67UzW5GL.jpg?v=1631701338&width=1946",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "The World of Books",
      description:
        "Learn the principles of writing clean, maintainable, and efficient code with practical examples and best practices.",
      image:
        "https://m.media-amazon.com/images/I/61t4BqKwwKL._UF1000,1000_QL80_.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Atomic Habits",
      description: "Atomic Habits: The life-changing million copy bestseller",
      image:
        "https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg",
      className: "absolute top-48 left-[40%] rotate-[-17deg]",
    },
  ];

  return (
    <section className=" relative mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center px-4 py-20">
      {/* Vertical lines */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="container mx-auto ">
        {/* Heading */}
        <div className="mb-16 text-center">
          {/* Title */}
          <h1 className="relative z-10 mx-auto max-w-2xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-xl md:text-3xl lg:text-5xl  leading-snug">
            {`${heading}`.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="relative z-10 mx-auto max-w-2xl py-4 text-center text-base font-normal text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-white/20 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-4 w-full rounded-xl object-cover aspect-[4/5]"
              />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}

        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
            Everything You Need for Smarter Learning
          </p>
          {features.map((item) => (
            <DraggableCardBody className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
};

export default CoreBooks;
