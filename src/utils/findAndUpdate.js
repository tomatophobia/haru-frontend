import { Map } from "immutable";

const findAndUpdate = (id, node, callback) => {
  const imNode = Map(node);
  if (node.id[node.level] === id[node.level]) {
    if (node.level === id.length - 2) {
      return callback(id, node, imNode);
    } else {
      return imNode
        .set(
          "child",
          node.child.map(ch => findAndUpdate(id, ch, callback))
        )
        .toJS();
    }
  } else {
    return node;
  }
};

export const findAndAppend = (i, n) =>
  findAndUpdate(i, n, (id, node, imNode) => {
    return imNode
      .set(
        "child",
        node.child.map(ch => {
          if (ch.id[node.level + 1] === id[node.level + 1]) {
            const childN = ch.child.length;
            if (childN === 0) {
              const grandch = {
                id: ch.id.concat(0),
                level: ch.level + 1,
                text: "새로운 터닝 포인트",
                checked: false,
                child: []
              };
              return Map(ch)
                .set("child", ch.child.concat(grandch))
                .toJS();
            } else {
              const newid = ch.child[childN - 1].id[id.length] + 1;
              const grandch = {
                id: ch.id.concat(newid),
                level: ch.level + 1,
                text: "새로운 터닝 포인트",
                checked: false,
                child: []
              };
              return Map(ch)
                .set("child", ch.child.concat(grandch))
                .toJS();
            }
          } else {
            return ch;
          }
        })
      )
      .toJS();
  });

export const findAndCheck = (i, n) =>
  findAndUpdate(i, n, (id, node, imNode) => {
    return imNode
      .set(
        "child",
        node.child.map(ch =>
          ch.id[node.level + 1] === id[node.level + 1]
            ? Map(ch)
                .set("checked", !ch.checked)
                .toJS()
            : ch
        )
      )
      .toJS();
  });

export const findAndRemove = (i, n) =>
  findAndUpdate(i, n, (id, node, imNode) => {
    return imNode
      .set(
        "child",
        node.child.filter(ch => ch.id[node.level + 1] !== id[node.level + 1])
      )
      .toJS();
  });
