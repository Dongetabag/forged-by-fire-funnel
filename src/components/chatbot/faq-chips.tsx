"use client";

import { motion } from "framer-motion";
import type { ChatAction } from "./chat-types";

interface Props {
  chips: ChatAction[];
  onSelect: (question: string) => void;
}

export default function FaqChips({ chips, onSelect }: Props) {
  if (!chips.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 overflow-x-auto px-5 py-2.5 scrollbar-none"
      style={{ scrollbarWidth: "none" }}
    >
      {chips.map((chip, i) => (
        <motion.button
          key={`${chip.label}-${i}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect(chip.faqQuestion || chip.label)}
          className="chat-chip shrink-0"
        >
          {chip.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
