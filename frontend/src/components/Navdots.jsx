import React from "react";

const Navdots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills",  "contact"].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      )
    )}
  </div>
);

export default Navdots;
