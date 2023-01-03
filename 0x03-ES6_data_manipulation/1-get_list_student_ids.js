export default function getListStudentIds(studentArray) {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return studentIdArray.map((item) => item.id);
}
