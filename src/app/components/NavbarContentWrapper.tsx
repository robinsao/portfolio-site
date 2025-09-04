"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function NavbarContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    hidden: { scale: 0, rotate: -180, opacity: 0.1 },
    visible: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0.1 },
  };

  return (
    <>
      <button
        className="block md:hidden pl-4 py-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.2 }}
            >
              <FaX size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.2 }}
            >
              <FaBars size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div
        className={cn(
          className,
          "hidden md:grid", // Desktop: always visible
          isOpen ? "grid" : "hidden", // Mobile: toggled
        )}
      >
        {children}
      </div>
    </>
  );
}
