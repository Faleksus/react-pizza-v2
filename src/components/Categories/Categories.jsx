import { useState } from "react";

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState("Всі");

  const categories = [
    "Всі",
    "Мʼясні",
    "Вегетаріанські",
    "Гриль",
    "Гострі",
    "Закриті",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setActiveIndex(category)}
            className={activeIndex === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
