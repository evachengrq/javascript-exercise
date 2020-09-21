export default function numberMapToWord(collection) {
  return collection.map(num => String.fromCharCode(64 + num).toLowerCase());
}
