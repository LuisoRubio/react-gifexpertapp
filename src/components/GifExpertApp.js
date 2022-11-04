import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  // eslint-disable-next-line
  const [categories, setCategories] = useState(["Rick and Morty"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid 
            category={category} 
            key={category} 
          />
        ))}
      </ol>
    </>
  );
};
