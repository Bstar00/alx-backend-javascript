import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoData, createUserData]) => {
      const body = uploadPhotoData.body;
      const { firstName, lastName } = createUserData;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
