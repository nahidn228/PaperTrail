import { cn } from "@/lib/utils";
import {
  IconBook,
  IconSearch,
  IconLockOpen,
  IconBolt,
  IconBookmark,
  IconDeviceMobile,
  IconUsers,
  IconShieldCheck,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function FeaturesSection() {
  const features = [
    {
      title: "Built for learners",
      description:
        "Made for students, researchers, and lifelong learners who need quick access to papers.",
      icon: <IconBook />,
    },
    {
      title: "Ease of use",
      description:
        "Find, filter, and download academic resources in just a few clicks.",
      icon: <IconSearch />,
    },
    {
      title: "Free & open access",
      description:
        "No hidden charges, no paywalls—your knowledge should never be locked.",
      icon: <IconLockOpen />,
    },
    {
      title: "Fast & reliable",
      description:
        "Search results load instantly so you can focus on studying, not waiting.",
      icon: <IconBolt />,
    },
    {
      title: "Smart organization",
      description:
        "Bookmark and save your favorite papers for easy access anytime.",
      icon: <IconBookmark />,
    },
    {
      title: "Mobile-friendly",
      description: "Use it anywhere—whether on your phone, tablet, or desktop.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Community-driven",
      description:
        "Built to help students support each other by sharing resources.",
      icon: <IconUsers />,
    },
    {
      title: "Secure platform",
      description:
        "Your data stays safe with modern authentication and role-based access.",
      icon: <IconShieldCheck />,
    },
  ];

  return (
    <section className="w-full py-10 md:py-20">
      {/* Title */}
      <h1 className="relative z-10 mx-auto max-w-2xl text-center text-2xl font-bold text-slate-700 dark:text-slate-300 sm:text-xl md:text-3xl lg:text-5xl  leading-snug">
        {"Features That Empower Your Research".split(" ").map((word, index) => (
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
        Fast, reliable, and user-friendly—built to support students,
        researchers, and knowledge seekers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
