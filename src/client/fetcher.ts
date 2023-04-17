/* eslint-disable no-useless-catch */

export const fetcher = async <T>(
  url: URL | RequestInfo,
  options?: RequestInit,
  baseURL = process.env.API_HOST
): Promise<T> => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjgxNzY1MjYzLCJleHAiOjE2ODE3NjYxNjN9.Q6tAqkkvj9fAapll-7D3LVq05Cgdgog2Op66JWq5Enc";

  const defaultOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
  };

  const requestOptions = { ...defaultOptions, ...options };

  try {
    const response = await fetch(`${baseURL}/${url}`, requestOptions);
    const data: T = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw data;
    }
  } catch (err) {
    throw err;
  }
};
