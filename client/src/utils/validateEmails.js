import { isEmail } from 'validator';

export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => isEmail(email) === false);

  if (invalidEmails.length) {
    return `These email(s) are invalid ${invalidEmails}`;
  }

  return;
}