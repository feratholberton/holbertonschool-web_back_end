import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((userValues) => {
      const { body } = userValues[0];
      const { firstName, lastName } = userValues[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
