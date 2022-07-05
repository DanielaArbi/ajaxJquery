function listarDatos(){

$.ajax({
    type:'GET',  //metodo
    url:'json/registro.json',  //url local de donde obtengo los datos
    dataType:'json'  //tipo de dato
})  //si todo va bien se efectua esta funcion
.done(function(data){
    console.log('hecho Correcto!');

    var persona = data;
    console.log(persona)
    $('#picFoto').attr('src',data.foto);
    $('#txtNombre').val(data.nombre);
    $('#txtDireccion').val(data.direccion);
    $('#txtTelefono').val(data.telefono);
    $('#txtGenero').val(data.genero);
})  
.fail(function(){  //si algo falla se efectua esta funcion
    console.log("fallo!");
}) 
.always(function(){ //siempre se va a ejecutar esta funcion
    console.log("Completo!");
})






}