interface Feature166Props {
  heading: string;
  description?: string;
}

const CoreBooks = ({
  heading = "Curated Books at Your Fingertips",
  description = "Explore hand-picked books from various genres. With PaperTrail, you can discover, organize, and share your favorite reads effortlessly. Each book comes with detailed insights to help you dive deeper into your reading journey.",
}: Feature166Props) => {
  const feature1 = {
    title: "Mastering React",
    description:
      "A complete guide to building scalable and dynamic web applications using React.js and modern frontend tools.",
    image:
      "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1711556422/a/ed/ac/158645-ml-2252011.jpg",
  };
  const feature2 = {
    title: "Node.js in Action",
    description:
      "Learn backend development with Node.js, Express, and MongoDB to build robust APIs and real-world applications.",
    image:
      "https://static-01.daraz.com.bd/p/75dc138d38e4e738549ff02f3d9c951a.jpg",
  };
  const feature3 = {
    title: "Design Patterns Simplified",
    description:
      "An easy-to-understand introduction to common software design patterns and their practical use cases.",
    image:
      "https://www.palatinate.org.uk/wp-content/uploadedImages/TheTheory.jpg",
  };
  const feature4 = {
    title: "Clean Code with Nahid",
    description:
      "Learn the principles of writing clean, maintainable, and efficient code with practical examples and best practices.",
    image:
      "https://booksondemand.ma/cdn/shop/products/71Y67UzW5GL.jpg?v=1631701338&width=1946",
  };

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {heading}
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature1.title}</h2>
                <p className="text-muted-foreground">{feature1.description}</p>
                <img
                  src={feature1.image}
                  alt={feature1.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{feature2.title}</h2>
                <p className="text-muted-foreground">{feature2.description}</p>
                <img
                  src={feature2.image}
                  alt={feature2.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
                <img
                  src={feature3.image}
                  alt={feature3.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>
                <img
                  src={feature4.image}
                  alt={feature4.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBooks;
