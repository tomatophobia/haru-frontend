import React from "react";
import Node from "./Node";
import "./Tree.scss";

const drawer = (root, onToggle, onAppend) => {
  return (
    <div className="box" key={root.id.join("")}>
      <Node
        todo={root}
        key={root.id.join("")}
        onToggle={onToggle}
        onAppend={onAppend}
      />
      <div className={"level" + root.level}>
        {root.child.map(ch => drawer(ch, onToggle, onAppend))}
      </div>
    </div>
  );
};

const Tree = ({ root, onToggle, onAppend }) => {
  return <div className="Tree">{drawer(root, onToggle, onAppend)}</div>;
};

export default Tree;
