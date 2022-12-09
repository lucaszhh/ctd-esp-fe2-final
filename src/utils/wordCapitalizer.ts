/**
 * This function is responsible for recibe string and creating new string capitalized
 * @param text 
 * @returns string
 */


export const wordCapitalizer:(text: string) => string = (text) => {
  return text
    .split(" ")
    .map((str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
};