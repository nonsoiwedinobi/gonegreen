'use client';
import React, { useState } from 'react';
import menuData from '../MenuData.json';
import MenuItem from './MenuCategories';
import Search from './Search';

interface Category {
  name: string;
  items: MenuItem[];
}

const MenuSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredMenu, setFilteredMenu] = useState<Category[]>(menuData.categories);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Perform the search logic and update the filteredMenu state
    const filteredCategories = menuData.categories.map((category) => {
      return {
        ...category,
        items: category.items.filter((item) =>
          item.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()))
        ),
      };
    });

    setFilteredMenu(filteredCategories);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredMenu.map((category) => (
        <div key={category.name}>
          <h2 className="text-xl font-bold mb-2">{category.name} Menu</h2>
          {category.items.map((item, index) => (
            <MenuItem key={index} name={item.name} price={item.price} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuSearch