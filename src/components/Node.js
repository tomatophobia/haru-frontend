import React from "react";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import "./Node.scss";
import cn from "classnames";

const Node = ({ todo, onToggle, onAppend, onRemove }) => {
  const { id, text, checked, level } = todo;

  return (
    <div className={`Node level${level}`}>
      <div className="remove" onClick={() => onRemove(id)}>
        <RemoveCircle />
      </div>
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        <div className="text">{text}</div>
      </div>
      <div className="add" onClick={() => onAppend(id.concat(-1))}>
        <AddCircle />
      </div>
    </div>
  );
};

export default Node;
