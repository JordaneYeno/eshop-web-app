let count = [];

const url__compteur__chaussures = async () => {
	count = await fetch(
		"http://localhost:8080/api/chaussures/all"
	).then((res) => res.json());

};

const url__compteur__marques = async () => {
	count = await fetch(
		"http://localhost:8080/api/marques/all"
	).then((res) => res.json());

};

compteur__chaussures = async () => {
await url__compteur__chaussures();

	document.getElementById('number__shoes').innerHTML += count.length

	console.clear()
}; compteur__chaussures()

compteur__marques = async () => {
await url__compteur__marques();

	document.getElementById('number__marks').innerHTML += count.length

	console.clear()
}; compteur__marques()
