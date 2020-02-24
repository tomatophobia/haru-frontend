import { Map } from "immutable";

const findAndRemove = (id, node) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 2) {
      return imNode.set('child', node.child.filter(ch => ch.id[node.level + 1] !== id[node.level + 1])).toJS()
    } else {
      return imNode.set('child', node.child.map(ch => findAndRemove(id, ch))).toJS();
    }
  } else {
    return node;
  }
};

export default findAndRemove;
