export const isValidate = data => {
  data = data.substr(1); // to remove '$'
  return Number(data); // undefined, null, 0, NaN
};

export const isCapitalize = data => {
  return data.charAt(0) >= "A" && data.charAt(0) <= "Z";
};

export const isMoreThanSomeCharacter = (data, len = 5) => {
  return data.length === len;
};
