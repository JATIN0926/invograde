import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center gap-3 text-white text-lg font-Geist-Medium">
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl leading-none"
        >
          +
        </motion.div>
        <p className="font-Outfit-Regular text-base">{question}</p>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden py-2 px-6 text-white/80 leading-[1.6] font-Outfit-Regular text-[0.9rem]"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
