// @ts-ignore
export * from "./../../../mixcss.config"
export * from "./types";
/* 
    methods
*/
export const mixClass = (conditionsObject: any) => {
  let out = "";
  Object.keys(conditionsObject).map((k: string) =>
    conditionsObject[k] ? (out = out + " " + k) : null
  );
  return out;
};