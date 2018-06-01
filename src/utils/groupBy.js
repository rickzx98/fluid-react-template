export function groupBy(array, key) {
    return array.reduce(function (value, index) {
        (value[index[key]] = value[index[key]] || []).push(index);
        return value;
    }, {});
}