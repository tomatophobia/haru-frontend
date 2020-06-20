import React from "react";
import Node from "./Node";
import "./Tree.scss";

const drawer = (root, onToggle, onAppend, onRemove, onChange) => {
  return (
    <div className="box" key={root.id.join("")}>
      <Node
        todo={root}
        key={root.id.join("")}
        onToggle={onToggle}
        onAppend={onAppend}
        onRemove={onRemove}
        onChange={onChange}
      />
      <div className={"level" + root.level}>
        {root.child.map(ch => drawer(ch, onToggle, onAppend, onRemove, onChange))}
      </div>
    </div>
  );
};

const Tree = ({ root, onToggle, onAppend, onRemove, onChange }) => {
  return (
    <div className="Tree">{drawer(root, onToggle, onAppend, onRemove, onChange)}</div>
  );
};

export default Tree;
