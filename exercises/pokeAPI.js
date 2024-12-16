export async function getPokemonList() {

  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200&offset=200');
  const data = await response.json();
  console.log(data.results);
  const results = data.results
  const names = results.map((item) => item.name)
  console.log(names)

  return names;
}

getPokemonList()