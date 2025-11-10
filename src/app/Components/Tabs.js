"use client";
import React, { useState } from "react";

const Tabs = ({ items, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  const handleClick = (id) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center border-b border-gray-200">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={`px-6 py-2 mt-2 text-base transition-all ${
            activeTab === item.id
              ? "font-semibold text-[#4E4C6A] border-b-2 border-[#4E4C6A]"
              : "font-normal text-[#999999] hover:text-[#4E4C6A]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
