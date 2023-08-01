export default function getListStudentIds(array) {
  return array.reduce((accumulator, index) => accumulator + index.id, 0);
}
