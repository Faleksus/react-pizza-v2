import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

export const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
