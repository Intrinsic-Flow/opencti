import { createError } from 'apollo-errors';

export const LoginError = createError('LoginError', {
  message: 'Login failed'
});

export const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred!  Please try again later'
});

export const AuthenticationRequiredError = createError(
  'AuthenticationRequiredError',
  {
    message: 'You must be logged in to do this'
  }
);

export const AlreadyAuthenticatedError = createError(
  'AlreadyAuthenticatedError',
  {
    message: 'You are already authenticated'
  }
);

export const ForbiddenError = createError('ForbiddenError', {
  message: 'You are not allowed to do this'
});

export const FunctionalError = createError('FunctionalError', {
  message: 'Please set a functional error message'
});