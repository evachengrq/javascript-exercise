export default function countTypesNumber(source) {
  const array = Object.values(source);
  // ['3', '4', '5']
  return array.map(char => parseInt(char, 10)).reduce((prev, current) => prev + current, 0);
}
