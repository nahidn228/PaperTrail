import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const PageTransition = () => {
  const location = useLocation();
  const [showLine, setShowLine] = useState(true);

  useEffect(() => {
    setShowLine(true); // show line on route change
    const timer = setTimeout(() => {
      setShowLine(false); // trigger exit after 2s
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location?.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* sweeping line (only visible for 2s) */}
        <AnimatePresence>
          {showLine && (
            <motion.div
              key={location?.pathname + "-line"}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, originX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed top-0 left-0 z-50 h-full w-full bg-primary"
            />
          )}
        </AnimatePresence>

        {/* page content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
