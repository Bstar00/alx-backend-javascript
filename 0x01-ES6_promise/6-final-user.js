import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let userData;
  try {
    const data = await signUpUser(firstName, lastName);
    userData = {
      status: 'fulfilled',
      value: data,
    };
  } catch (error) {
    userData = {
      status: 'rejected',
      value: error.toString(),
    };
  }

  let fileData;
  try {
    fileData = await uploadPhoto(fileName);
  } catch (error) {
    fileData = {
      status: 'rejected',
      value: error.toString(),
    };
  }

  return Promise.resolve([userData, fileData]);
}
