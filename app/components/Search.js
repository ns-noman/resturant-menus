"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    console.log("Searching for:", search);
  };

  return (
    <div className="header-search relative">
      <a href="#" className="show-search">
        <i className="icon-search"></i>
      </a>

      <div className="top-search">
        <form className="search-form relative" onSubmit={handleSubmit}>
          <fieldset className="search">
            <input
              type="search"
              placeholder="Search..."
              name="search"
              tabIndex={2}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-required="true"
              required
            />
          </fieldset>

          <div>
            <button type="submit" aria-label="Search">
              <i className="icon-search"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}