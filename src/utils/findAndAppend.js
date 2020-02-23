import { Map } from "immutable";

const findAndAppend = (id, node) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 1) {
      const newid = node.child.length;
      const ch = {
        id: node.id.concat(newid),
        level: node.level + 1,
        text: "새로운 터닝 포인트",
        checked: false,
        child: []
      }
      console.log(ch);
      return imNode.set("child", node.child.concat(ch)).toJS();
    } else {
      return imNode.set('child', node.child.map(ch => findAndAppend(id, ch))).toJS();
    }
  } else {
    return node;
  }
};

export default findAndAppend;
