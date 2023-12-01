import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export default function TabButton({ active, selectTab, translationKey }) {
  const { t } = useTranslation("global");
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {t(translationKey)}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-pink-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
}
