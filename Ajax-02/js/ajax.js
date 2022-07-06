(function () {


	$.ajax({
		type: 'GET',
		url: 'json/datos.json',
		dataType: 'json'
	})
		.done(function (data) {
			console.log( data );
			var personas = data;

			//recorro mi array de personas
			for (let i = 0; i < personas.length; i++) {

				var persona = personas[i];
				var tags = "";

				//recorro los tags de personas, un array dentro de otro array
				for (let j = 0; j < persona.tags.length; j++) {
					tags += '<span class="label label-primary"> ' + persona.tags[j] + '</span> ';
				
				}

				let html = "";
				html += '<tr>'
				html += '<td> ' + persona.name + '</td>';
				html += '<td>' + persona.age + '</td>';
				html += '<td> ' + tags + ' </td>';
				html += '</tr>';

				$('.table').append(html);
			}




		})
		.fail(function () {
			console.log("Fallo!");
		})
		.always(function () {
			console.log("Completo!");
		});








})();