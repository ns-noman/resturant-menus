const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchAPI(endpoint, options = {}) {

  const config = {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  if (options.body) {
    config.body = JSON.stringify(options.body);
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, config);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "API request failed");
  }
  
  return data;
}