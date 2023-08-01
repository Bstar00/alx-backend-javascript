export default function getStudentsByLocation(array, city) {
  return array.filter((index) => index.location === city);
}
