import React from "react";
import { CheckBox, CheckBoxOutlineBlank, AddBox } from "@material-ui/icons";
import "./Node.scss";
import cn from "classnames";

const Node = ({ todo, onToggle }) => {
  const { id, text, checked, level } = todo;

  return (
    <div className={`Node level${level}`}>
      <div className={cn("checkbox", { checked })} onClick={() => onToggle(id)}>
        {checked ? <CheckBox /> : <CheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="add">
        <AddBox />
      </div>
    </div>
  );
};

export default Node;
