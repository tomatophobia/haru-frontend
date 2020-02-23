import React from "react";
import Node from "./Node";
import "./Tree.scss";

const drawer = (root, onToggle) => {
  return (
    <div className="box" key={root.id.join("")}>
      <Node todo={root} key={root.id.join("")} onToggle={onToggle} />
      <div className={"level" + root.level}>
        {root.child.map(ch => drawer(ch, onToggle))}
      </div>
    </div>
  );
};

const Tree = ({ root, onToggle }) => {
  return <div className="Tree">{drawer(root, onToggle)}</div>;
};

export default Tree;
