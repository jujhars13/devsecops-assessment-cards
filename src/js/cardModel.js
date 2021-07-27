// transform the raw card json
import raw from "./cards.json";

// we want the data objects by returned by category
// get unique categories to begin with
const output = raw.reduce((acc, curr) => {
  acc[curr.category] = [];
  return acc;
}, {});
raw.forEach(el => output[el.category].push(el));

export default output;
