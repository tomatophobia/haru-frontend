import { Map } from "immutable";

export const updateTrees = (id, trees, callback) => {
  if (id.length === 1) {
    const wrapper = { id: [], level: -1, child: trees };
    const imWrap = Map(wrapper);
    const res = callback(id, wrapper, imWrap);
    return res.child;
  } else {
    return trees.map((ch) => findAndUpdate(id, ch, callback));
  }
};

// 반복되는 로직 템플릿
const findAndUpdate = (id, node, callback) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 2) {
      return callback(id, node, imNode);
    } else {
      return imNode
        .set(
          "child",
          node.child.map((ch) => findAndUpdate(id, ch, callback))
        )
        .toJS();
    }
  } else {
    return node;
  }
};

// findAndAppend의 경우는 자기 자신의 자식을 추가하므로 id에 -1을 붙여서 다른 로직과 비슷하게 진행되도록 트릭을 썼음
export const findAndAppend = (id, node, imNode) => {
  const childN = node.child.length;
  if (childN === 0) {
    const ch = {
      id: node.id.concat(0),
      level: node.level + 1,
      text: "새로운 터닝 포인트",
      checked: false,
      child: [],
    };
    return imNode.set("child", node.child.concat(ch)).toJS();
  } else {
    const newid = node.child[childN - 1].id[id.length - 1] + 1;
    const ch = {
      id: node.id.concat(newid),
      level: node.level + 1,
      text: "새로운 터닝 포인트",
      checked: false,
      child: [],
    };
    return imNode.set("child", node.child.concat(ch)).toJS();
  }
};

export const findAndCheck = (id, node, imNode) => {
  return imNode
    .set(
      "child",
      node.child.map((ch) =>
        ch.id[node.level + 1] === id[node.level + 1]
          ? Map(ch).set("checked", !ch.checked).toJS()
          : ch
      )
    )
    .toJS();
};

export const findAndRemove = (id, node, imNode) => {
  return imNode
    .set(
      "child",
      node.child.filter((ch) => ch.id[node.level + 1] !== id[node.level + 1])
    )
    .toJS();
};

export const findAndChangeWithText = (text) => {
  return (id, node, imNode) => {
    return imNode
      .set(
        "child",
        node.child.map((ch) =>
          ch.id[node.level + 1] === id[node.level + 1]
            ? Map(ch).set("text", text).toJS()
            : ch
        )
      )
      .toJS();
  };
};
