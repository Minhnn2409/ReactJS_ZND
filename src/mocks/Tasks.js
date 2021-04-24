const { v4: uuidv4 } = require("uuid");

let items = [
  {
    id: uuidv4(),
    name: "ABC",
    level: 0,
  },
  {
    id: uuidv4(),
    name: "DEF",
    level: 1,
  },
  {
    id: uuidv4(),
    name: "GHI",
    level: 2,
  },
];
export default items;
