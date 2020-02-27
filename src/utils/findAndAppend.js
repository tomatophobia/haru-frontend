import { Map } from "immutable";

const findAndAppend = (id, node) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 1) {
      const childN = node.child.length;
      if (childN === 0) {
        const ch = {
          id: node.id.concat(0),
          level: node.level + 1,
          text: "새로운 터닝 포인트",
          checked: false,
          child: []
        };
        return imNode.set("child", node.child.concat(ch)).toJS();
      } else {
        const newid = node.child[childN - 1].id[id.length] + 1
        const ch = {
          id: node.id.concat(newid),
          level: node.level + 1,
          text: "새로운 터닝 포인트",
          checked: false,
          child: []
        };
        return imNode.set("child", node.child.concat(ch)).toJS();
      }
    } else {
      return imNode
        .set(
          "child",
          node.child.map(ch => findAndAppend(id, ch))
        )
        .toJS();
    }
  } else {
    return node;
  }
};

export default findAndAppend;
