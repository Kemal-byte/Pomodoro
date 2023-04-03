const colors = {
  primaryYellow: "#E21818",
  primaryBG: "#25201C",
};
export function updateColors(newColors: string[]) {
  console.log(colors);
  const holder = { primaryYellow: newColors[0], primaryBG: newColors[1] };
  Object.assign(colors, holder);
  console.log("updated colors: ", colors);
}
export const comb1 = ["#E21818", "#00235B"];
export const comb2 = ["#F9F5EB", "#EA5455"];
export const comb3 = ["#BAD7E9", "#2B3467"];

export default colors;
//#FF9D16
//#25201C
// import { useState } from "react";

// const useColors = () => {
//   const [colors, setColors] = useState({
//     primaryYellow: "#FF9D16",
//     primaryBG: "#25201C",
//   });

//   const updateColors = (newColors: string[]) => {
//     const holder = { primaryYellow: newColors[0], primaryBG: newColors[1] };
//     setColors((prevColors) => Object.assign({}, prevColors, holder));
//   };

//   return {
//     colors,
//     updateColors,
//   };
// };

// export default useColors;
