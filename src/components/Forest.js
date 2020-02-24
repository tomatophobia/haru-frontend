import React from "react";
import Tree from "./Tree";

const Forest = ({ trees, onToggle, onAppend, onRemove }) => {
  return (
    <div>
      {trees.map(root => {
        return (
          <Tree
            key={root.id[0]}
            root={root}
            onToggle={onToggle}
            onAppend={onAppend}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default Forest;
