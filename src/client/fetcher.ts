/* eslint-disable no-useless-catch */

export const fetcher = async <T>(
  url: URL | RequestInfo,
  options?: RequestInit,
  baseURL = process.env.API_HOST
): Promise<T> => {
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsIm5hbWUiOiJzYXJhaCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjgxNzY4MjU5LCJleHAiOjE2ODE3NjkxNTl9.q7OYu61mwrmM_QYYwNIpVEKAwf-Rixs0IyuEEb9_1Rs";

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
