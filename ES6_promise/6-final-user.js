import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signup, upload]).then((results) => results.map((result) => ({
    status: result.status,
    value:
      result.status === 'fulfilled'
        ? result.value
        : (result.reason instanceof Error ? result.reason.toString() : result.reason),
  })));
}
