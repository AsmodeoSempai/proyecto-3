// link de la api https://rapidapi.com/api-sports/api/covid-193/details



let contenedor = document.querySelector('#contenedor');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '79c5818858msha33cb69f7fbf0f8p1b1416jsn2d6ecace2356',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};
async function peticion (){
   
   
   const respuesta = await fetch('https://covid-193.p.rapidapi.com/statistics?country=mexico', options)
	.then(respuesta => respuesta.json())
	.then(respuesta => console.log(respuesta))
	.catch(error => console.error(error));

    contenedor.innerHTML = JSON.stringify(respuesta)
}


   