import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background">
      <div className="relative flex items-center justify-center">
        {/* Spinning book icon (outer ring effect) */}
        <motion.div
          className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png" // book icon
            alt="Loading"
            className="w-12 h-12"
          />
        </motion.div>

        {/* Inner pulsing dot */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-primary"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </div>
    </div>
  );
}
