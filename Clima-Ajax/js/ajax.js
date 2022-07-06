(function () {

	var Latitude = -34.726397;
	var Longitude = -58.431400;


	$.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + Latitude + '&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'json'
	})
		.done(function (data) {

			console.log("Correcto!");

			console.log(data); // Se imprime en consola la api
			LugarTemperatura(data)
			mostrar_data(data)
			



		})
		.fail(function () {
			console.log("Fallo!");
		})
		.always(function () {
			console.log("Completo!");
		});








})();


function mostrar_data(data) {
	let id= data.id;
	let name = data.name;
    let visibilidad = data.visibility;
	let url = `img/${data.weather[0].icon}.png`
    //$("#picFoto").attr('src', url);
	let temperatura = Math.round(data.main.temp);

	let html = "";
    html += '<tr>';
	html += '<td> ' + id+ '</td>';
	html += '<td> ' + name+ '</td>';
	html += '<td> ' + visibilidad+ '</td>';
	html += '<td> ' + temperatura+ '</td>';
	html += '<td> ' + `<img id="picFoto" src="${url}"  alt="Foto">`+ '</td>';
	html += '</tr>';
	
	

	
	$('.table').append(html);
}

function LugarTemperatura(data){

	let localidad = data.name;
	let pais = data.sys.country;

	$('#lugar').append(localidad);
	$('#pais').append(pais);
}