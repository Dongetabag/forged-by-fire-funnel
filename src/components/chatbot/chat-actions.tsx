"use client";

import { motion } from "framer-motion";
import { Heart, Upload, Flame, Users, ArrowRight } from "lucide-react";
import type { ChatAction } from "./chat-types";

const iconMap: Record<string, typeof Heart> = {
  "#donate": Heart,
  "#contact": Flame,
  "#story": Users,
  upload: Upload,
};

function getIcon(href?: string) {
  if (!href) return ArrowRight;
  for (const [key, Icon] of Object.entries(iconMap)) {
    if (href.includes(key)) return Icon;
  }
  return ArrowRight;
}

function getStyle(variant?: string) {
  switch (variant) {
    case "primary":
      return "bg-[#E85D23] text-white hover:bg-[#C84914]";
    case "warm":
      return "bg-[#F59E0B] text-[#1A1A1A] hover:bg-[#D97706]";
    default:
      return "bg-[#1A1A1A]/8 text-[#1A1A1A]/72 hover:bg-[#1A1A1A]/15";
  }
}

interface Props {
  actions: ChatAction[];
  onAction: (action: ChatAction) => void;
}

export default function ChatActions({ actions, onAction }: Props) {
  if (!actions.length) return null;

  return (
    <div className="flex flex-wrap gap-2 px-5 pb-2">
      {actions.map((action, i) => {
        const Icon = getIcon(action.href);
        return (
          <motion.button
            key={`${action.label}-${i}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAction(action)}
            className={`chat-action-btn ${getStyle(action.variant)}`}
          >
            <Icon size={13} />
            {action.label}
          </motion.button>
        );
      })}
    </div>
  );
}
