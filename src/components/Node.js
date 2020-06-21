import React from "react";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import "./Node.scss";
import "./react-contextmenu.css";
import cn from "classnames";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const Node = ({ todo, onToggle, onAppend, onRemove, onChange }) => {
  const { id, text, checked, level } = todo;

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
            <MenuItem
              className="react-contextmenu-item"
            >
              <input id={id.join(",")} placeholder="목표를 입력하세요" value="" onClick={(e) => {
                e.stopPropagation();
                // TODO input 상태관리 사용해서 input 값 변경 구현
              }}/>
            </MenuItem>
            <MenuItem
              className="react-contextmenu-item"
              onClick={() => {
                onChange(id, "123");
                // TODO 관리하고 있는 input state 값 가지고 와서 두 번째 인자에 넣어주기
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
