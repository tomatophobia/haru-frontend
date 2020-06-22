import React, { useState } from "react";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import "./Node.scss";
import "./react-contextmenu.css";
import cn from "classnames";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const Node = ({ todo, onToggle, onAppend, onRemove, onChange }) => {
  const { id, text, checked, level } = todo;

  const [title, setTitle] = useState("");
  const onChangeTitle = e => setTitle(e.target.value);

  return (
    <div className={`Node level${level}`}>
      <div className="remove" onClick={() => onRemove(id)}>
        <RemoveCircle />
      </div>
      <div className={cn("checkbox", { checked })}>
        <div>
          <ContextMenuTrigger id={id.join(",")}>
            <div className="text" onClick={() => onToggle(id)}>
              {text}
            </div>
          </ContextMenuTrigger>

          <ContextMenu id={id.join(",")}>
            <MenuItem className="react-contextmenu-item">
              <input
                type="text"
                name="title"
                placeholder="목표를 입력하세요"
                value={title}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={onChangeTitle}
              />
            </MenuItem>
            <MenuItem
              className="react-contextmenu-item"
              onClick={() => {
                onChange(id, title);
              }}
            >
              이름변경
            </MenuItem>
          </ContextMenu>
        </div>
      </div>
      <div className="add" onClick={() => onAppend(id.concat(-1))}>
        <AddCircle />
      </div>
    </div>
  );
};

export default Node;
