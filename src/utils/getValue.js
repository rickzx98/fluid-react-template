export const getValue = (data, field, transformer) => {
  let realData = transformer ? transformer(data[field].value) : (data[field].value || '');
  return realData;
};
