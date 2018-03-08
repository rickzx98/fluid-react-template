export const getValue = (data, field, transformer) => {
    let realData = transformer ? transformer(data[field]) : (data[field] || '');
    return realData;
};