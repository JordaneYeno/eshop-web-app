let datas__chaussures = [];

const url__chaussures = async () => {
	datas__chaussures = await fetch(
		"http://localhost:8080/api/chaussures/all"
	).then((res) => res.json());
	console.log(datas__chaussures)
};

const url__taille = async () => {
	datas__chaussures = await fetch(
		"http://localhost:8080/api/chaussures/size/all"
	).then((res) => res.json());
	console.log(datas__chaussures)
};

const url__marques = async () => {
	datas__chaussures = await fetch(
		"http://localhost:8080/api/marques/all"
	).then((res) => res.json());
	console.log(datas__chaussures)
};


grids__chaussures = async () => {
await url__chaussures();

for (let i = 0; i < datas__chaussures.length; i++) {

	document.getElementById('result').innerHTML += 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
};console.clear()}; grids__chaussures()

girds__tailles = async () => {
await url__taille();

	let select = document.getElementById('taille')

for (let i = 0; i < datas__chaussures.length; i++) {

	const option = document.createElement('option');

		option.value = `${datas__chaussures[i].idxTaille}`;
		option.text = `${datas__chaussures[i].taille}`;
		select.appendChild(option);

};console.clear()}; girds__tailles()


girds__marques = async () => {
await url__marques();

	let select = document.getElementById('marque')

for (let i = 0; i < datas__chaussures.length; i++) {

	const option = document.createElement('option');

		option.value = `${datas__chaussures[i].idxMarque}`;
		option.text = `${datas__chaussures[i].marque}`;
		select.appendChild(option);

};console.clear()}; girds__marques()


document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = document.getElementById('search').value

  if (searchTerm && searchTerm !== '') {
    get__chaussures="http://localhost:8080/api/chaussures/searchname/"+ searchTerm

    document.getElementById('search').value = '';

	 const url__chaussures = async () => {
		datas__chaussures = await fetch(get__chaussures).then((res) => res.json());
		console.log(datas__chaussures)
	};

grids__chaussures = async () => {
await url__chaussures();

		document.getElementById('resultSearchAll').innerHTML = '';

for (let i = 0; i < datas__chaussures.length; i++) {

	document.getElementById('result').style.display='none';

	if (datas__chaussures.length > 1) {
    
		document.getElementById('resultSearchAll').style.display='block'; 
	document.getElementById('resultSearch').style.display='none';
		document.getElementById('resultSearchAll').innerHTML += 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}else{

		document.getElementById('resultSearch').style.display='inline';
	document.getElementById('resultSearchAll').style.display='none'; 
		document.getElementById('resultSearch').innerHTML = 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}
};console.clear()}; grids__chaussures()


  } else {

    window.location.reload()
  }
})



let selectMarque = document.getElementById('marque')

selectMarque.addEventListener('change', () =>{

	searchMarque = selectMarque.value;
 console.log(searchMarque)
  if (searchMarque && searchMarque !== '') {

	get__marques="http://localhost:8080/api/chaussures/searchidmarque/"+ searchMarque;
 
    document.getElementById('search').value = '';

	 const url__chaussures = async () => {
		datas__chaussures = await fetch(get__marques).then((res) => res.json());
		console.log(datas__chaussures)
	};

grids__chaussures = async () => {
await url__chaussures();

		document.getElementById('resultSearchAll').innerHTML = '';

for (let i = 0; i < datas__chaussures.length; i++) {

	document.getElementById('result').style.display='none';

	if (datas__chaussures.length > 1) {
    
		document.getElementById('resultSearchAll').style.display='block'; 
	document.getElementById('resultSearch').style.display='none';
		document.getElementById('resultSearchAll').innerHTML += 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}else{

		document.getElementById('resultSearch').style.display='inline';
	document.getElementById('resultSearchAll').style.display='none'; 
		document.getElementById('resultSearch').innerHTML = 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}
 };console.clear()}; grids__chaussures()


  } else {

    window.location.reload()
 }
})


let selectTaille = document.getElementById('taille')

selectTaille.addEventListener('change', () =>{
	
	searchtaille = selectTaille.options[selectTaille.selectedIndex].innerHTML;
 console.log(searchtaille)
  if (searchtaille && searchtaille !== '') {

	get__tailles="http://localhost:8080/api/chaussures/searchsize/"+ searchtaille;
 
    document.getElementById('search').value = '';

	 const url__chaussures = async () => {
		datas__chaussures = await fetch(get__tailles).then((res) => res.json());
		console.log(datas__chaussures)
	};

grids__chaussures = async () => {
await url__chaussures();

		document.getElementById('resultSearchAll').innerHTML = '';

for (let i = 0; i < datas__chaussures.length; i++) {

	document.getElementById('result').style.display='none';

	if (datas__chaussures.length > 1) {
    
		document.getElementById('resultSearchAll').style.display='block'; 
	document.getElementById('resultSearch').style.display='none';
		document.getElementById('resultSearchAll').innerHTML += 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}else{

		document.getElementById('resultSearch').style.display='inline';
	document.getElementById('resultSearchAll').style.display='none'; 
		document.getElementById('resultSearch').innerHTML = 
	`
    <li class="span4">
        <div class="thumbnail">
            <a href="product_details.html"><img  width="125" src="../assets/img/${datas__chaussures[i].images}" alt="" /></a>
            <div class="caption">
                <h5>${datas__chaussures[i].nomChaussure}</h5>
                <p>
                    Description du produit..

                </p>

                <h4 style="text-align:center"><a class="btn" href="product_details.html">Add</i></a> <a class="btn" href="#">taille: ${datas__chaussures[i].taille}<a class="btn btn-primary" href="#">${datas__chaussures[i].prix} fcfa</a></h4>
            </div>
        </div>
    </li>

	`
	}
  };console.clear()}; grids__chaussures()


  } else {

    window.location.reload()
 }

})


document.getElementById('basket').addEventListener("click", () =>{
	alert('Panier Désactivé');
});