"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Info } from "lucide-react";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const PriceHero = ({
  heading = "Flexible Plans for Every User",
  description = "Choose a plan that fits your needs. Transparent pricing, no hidden fees, and all the features you need to manage your money efficiently.",
  button = {
    text: "Start Free Trial",
    url: "#",
  },
}: Hero7Props) => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-40" />

      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          {heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Button with Dialog */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10"
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                size="lg"
                className="relative group overflow-hidden rounded-2xl px-8 py-3 text-lg font-semibold shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">{button.text}</span>
                <span className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors" />
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="rounded-2xl shadow-2xl border border-white/10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
              <AlertDialogHeader className="flex flex-col items-center gap-4 text-center">
                <Info className="h-14 w-14 text-indigo-500 animate-pulse" />
                <AlertDialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
                  🚧 Feature Unavailable
                </AlertDialogTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  This feature is currently under development. Stay tuned for
                  updates!
                </p>
              </AlertDialogHeader>

              <AlertDialogFooter className="flex justify-center mt-4">
                <AlertDialogAction className="px-6 py-2 text-lg rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition">
                  Got It ✨
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceHero;
