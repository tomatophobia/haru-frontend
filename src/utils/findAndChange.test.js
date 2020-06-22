import { updateTrees, findAndChangeWithText } from "./findAndUpdate";

const trees = [
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
            child: [],
          },
          {
            id: [0, 0, 1],
            level: 2,
            text: "본격 프로그래밍",
            checked: false,
            child: [],
          },
        ],
      },
      {
        id: [0, 1],
        level: 1,
        text: "백앤드 완성",
        checked: false,
        child: [],
      },
    ],
  },
  {
    id: [1],
    level: 0,
    text: "FP in Scala 완독하기",
    checked: false,
    child: [],
  },
];

const trees_after = [
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
            child: [],
          },
          {
            id: [0, 0, 1],
            level: 2,
            text: "바뀐이름",
            checked: false,
            child: [],
          },
        ],
      },
      {
        id: [0, 1],
        level: 1,
        text: "백앤드 완성",
        checked: false,
        child: [],
      },
    ],
  },
  {
    id: [1],
    level: 0,
    text: "FP in Scala 완독하기",
    checked: false,
    child: [],
  },
];

test("simple change test", () => {
  const id = [0, 0, 1];
  const findAndChange = findAndChangeWithText("바뀐이름");
  expect(updateTrees(id, trees, findAndChange)).toEqual(trees_after);
});
