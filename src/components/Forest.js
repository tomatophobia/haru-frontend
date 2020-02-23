import React from "react";
import Tree from "./Tree";

const Forest = ({ trees, onToggle }) => {
  return (
    <div>
      {trees.map(root => {
        return <Tree key={root.id[0]} root={root} onToggle={onToggle} />;
      })}
    </div>
  );
};

export default Forest;
