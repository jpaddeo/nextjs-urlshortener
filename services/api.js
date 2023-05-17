const api = {
  links: async () => {
    const response = await fetch(`/api/links`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  },
  short: async (url) => {
    const response = await fetch('/api/short', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  },
};
export default api;
