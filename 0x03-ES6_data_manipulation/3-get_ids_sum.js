export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((counter, item) => counter + item.id, 0);
}
