export function padToTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}:${padToTwoDigits(
    seconds
  )}`;
}

// export const optionsParse = {
//   replace: (domNode) => {
//     const domElement = domNode;
//     if (domElement.name === "a" && domElement.type === "tag") {
//       domElement.attribs.target = "_blank";
//     }
//     return domElement;
//   },
// };
