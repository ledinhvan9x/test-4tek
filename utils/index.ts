export const insertStringVariables = (text: string, ...args: string[]) => {
  let str = text;
  for (const arg of args) {
    str = str.replace("{}", arg);
  }
  return str;
};
