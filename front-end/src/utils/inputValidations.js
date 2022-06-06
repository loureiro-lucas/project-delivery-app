export const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const NAME_MIN_LENGTH = 12;
export const PASSWORD_MIN_LENGTH = 6;

export const validateEmailInput = (loginInput) => loginInput.match(EMAIL_REGEX);

export const validateNameInput = (nameInput) => nameInput.length >= NAME_MIN_LENGTH;

export const validatePasswordInput = (passwordInput) => (
  passwordInput.length >= PASSWORD_MIN_LENGTH
);
