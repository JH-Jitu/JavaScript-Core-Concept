const isSuccess = false;

const tryUntilSuccess = (attempt) => {
  if (isSuccess) {
    return 0;
  } else {
    return tryUntilSuccess(attempt++);
  }
};
