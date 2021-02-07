const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = response;
    throw error;
  }
  const data = await response.json();
  return data;
};

export default getData;
