export default function updateStudentGradeByCity(array, city, grad) {
  return array
  // filters by localization
    .filter((item) => item.location === city)
    .map((student) => {
    // filters by student id and maps by grade
      const gradeItems = grad
        .filter((item) => item.studentId === student.id)
        .map((n) => n.grade)[0];
      const grade = gradeItems || 'N/A';
      return { ...student, grade };
    });
}
