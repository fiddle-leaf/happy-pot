export async function getPlants(query) {
  const url = `https://perenual.com/api/v2/species-list?key=sk-aVMJ6809962d8e29e9983&q=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return console.log(json);
  } catch (error) {
    return console.log(error.message);
  }
}
