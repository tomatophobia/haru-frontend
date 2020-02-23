import React, { useState, useCallback } from "react";
import Forest from "./components/Forest";

const findAndChange = (id, node) => {
  if (id[0] === node.id[0]) {
    return traverseAndChange(id, node);
  } else return node;
};

const traverseAndChange = (id, node) => {
  if (node.id[node.level] === id[node.level]) return { ...node, checked: !node.checked };
  else return node.child.map(ch => traverseAndChange(id, ch));
};

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

  const onToggle = useCallback(
    id => {
      setTree(trees.map(root => findAndChange(id, root)));
    },
    [trees]
  );

  return (
    <div>
      <Forest trees={trees} onToggle={onToggle} />
    </div>
  );
};

export default App;
