export default function getStudentsByLocation(array, city, grad) {
  return array
    .filter((index) => index.location === city)
    .map((student) => {
      const gradeI = grad
        .filter((index) => index.studentId === student.id)
        .map((y) => y.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
