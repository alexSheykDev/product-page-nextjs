"use client";

import { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
}

export default function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const handleSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="mt-8">
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            className={`w-5 h-5 rounded-full transition-all cursor-pointer ${
              selectedColor === color && " border-2 scale-120 border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
