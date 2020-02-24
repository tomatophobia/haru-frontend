import React, { useState, useCallback } from "react";
import Forest from "./components/Forest";
import findAndChange from './utils/findAndChange';
import findAndAppend from './utils/findAndAppend';
import findAndRemove from './utils/findAndRemove';

const App = () => {
  const [trees, setTree] = useState([
    {
      id: [0], // tree id, node id
      level: 0,
      text: "하루 프로젝트 완성하기",
      checked: false,
      child: [
        {
          id: [0, 0],
          level: 1,
          text: "프론트앤드 완성",
          checked: false,
          child: [
            {
              id: [0, 0, 0],
              level: 2,
              text: "프로젝트 디자인",
              checked: false,
              child: []
            },
            {
              id: [0, 0, 1],
              level: 2,
              text: "본격 프로그래밍",
              checked: false,
              child: []
            }
          ]
        },
        {
          id: [0, 1],
          level: 1,
          text: "백앤드 완성",
          checked: false,
          child: []
        }
      ]
    },
    {
      id: [1],
      level: 0,
      text: "FP in Scala 완독하기",
      checked: false,
      child: []
    }
  ]);

  const onAppend = useCallback(
    id => {
      setTree(trees.map(root => findAndAppend(id, root)));
    },
    [trees]
  )

  const onToggle = useCallback(
    id => {
      setTree(trees.map(root => findAndChange(id, root)));
    },
    [trees]
  );

  const onRemove = useCallback(
    id => {
      setTree(trees.map(root => findAndRemove(id, root)));
    },
    [trees]
  )

  return (
    <div>
      <Forest trees={trees} onToggle={onToggle} onAppend={onAppend} onRemove={onRemove}/>
    </div>
  );
};

export default App;
