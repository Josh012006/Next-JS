const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${apiUrl}${endpoint}`, options);
  return res.json();
};