import { motion } from "motion/react";

const DATA = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/29/29302.png", // Book icon
    title: "Borrow Tracking",
    description:
      "Easily track borrowed books, due dates, and borrower details in one place.",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/633/633759.png", // Bell/notification icon
    title: "Notifications",
    description:
      "Receive automatic reminders for overdue books and upcoming returns.",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/622/622669.png", // Magnifying glass icon
    title: "Search & Filter",
    description:
      "Quickly find books or borrowers using powerful search and filter options.",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Analytics/graph icon
    title: "Analytics",
    description:
      "Get insights on borrowing trends, most popular books, and user activity.",
  },
  {
    id: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", // Users icon
    title: "User Management",
    description:
      "Manage users, track their borrowing history, and handle permissions.",
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/512/1041/1041881.png", // Library/book shelf icon
    title: "Book Catalog",
    description:
      "Maintain a structured catalog of books with categories, authors, and ISBNs.",
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910762.png", // Receipt icon
    title: "Digital Receipts",
    description:
      "Generate digital borrow receipts and maintain a full history of transactions.",
  },
  {
    id: 8,
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", // Devices icon
    title: "Multi-Device Access",
    description:
      "Access your borrow summary and manage books from any device, anywhere.",
  },
];

interface IntegrationProps {
  data?: typeof DATA;
}

const Integration = ({ data = DATA }: IntegrationProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="relative z-10 mx-auto max-w-2xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-xl md:text-3xl lg:text-5xl  leading-snug">
          {"Paper Trail Features".split(" ").map((word, index) => (
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-base font-normal text-neutral-600 dark:text-neutral-400 sm:text-base md:text-lg"
        >
          Manage your library efficiently with modern tools
        </motion.p>

       
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 py-10">
          {data.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex min-h-[140px] flex-col items-start rounded-xl border bg-background p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                <img
                  src={icon}
                  alt={title}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="mb-1 text-base font-medium">{title}</div>
              <div className="text-xs leading-snug text-muted-foreground">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;
