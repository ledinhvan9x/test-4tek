export const insertStringVariables = (text: string, ...args: string[]) => {
  let str = text;
  for (const arg of args) {
    str = str.replace("{}", arg);
  }
  return str;
};

export function isDateInPast(date: Date): boolean {
  const now = new Date();
  return date.getTime() < now.getTime();
}

export const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
