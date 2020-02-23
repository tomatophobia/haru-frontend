import {Map} from 'immutable';

const x = {
  one: 1,
  two: "2",
  three: [3]
}

const imX = Map(x);
const copy = imX;

copy.set('')

