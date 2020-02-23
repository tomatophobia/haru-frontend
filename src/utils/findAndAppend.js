import { Map } from "immutable";

const findAndAppend = (id, node) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 1) {
      return imNode.set("checked", !node.checked).toJS();
    } else {
      return imNode.set('child', node.child.map(ch => findAndAppend(id, ch))).toJS();
    }
  } else {
    const copy = imNode;
    return copy.toJS();
  }
};

export default findAndAppend;
