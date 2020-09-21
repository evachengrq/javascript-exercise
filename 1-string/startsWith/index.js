export default function collectCarNumberCount(collection) {
  let count = 0;
  collection.forEach(element => {
    if (element[0] === '粤' && element[1] === 'A') {
      count += 1;
    }
  });
  return count;
}
