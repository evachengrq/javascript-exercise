function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  const { lastName } = person;
  const { firstName } = person;
  const score = getScore(person.id);
  return `你好，${lastName}${firstName}！你的考试成绩为${score}分`;
}
