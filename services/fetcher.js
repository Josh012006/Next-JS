const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${apiUrl}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};