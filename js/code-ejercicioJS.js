$(function(){
    $('.publicar').on('click', mostrarFormulario);

    function mostrarFormulario(){
        // Está es una forma de realizar el ejercicio
        //$('form').css('display', 'block');

        // Otra forma de realizarlo es:
        $('form').slideToggle();
    }

    $('form').on('submit', procesarFormulario);

    function procesarFormulario(ev){
        ev.preventDefault();
        var titulo = $('input[name=titulo]').val();
        var autor = $('input[name=autor]').val();
        var tag = $('input[name=tag]').val();

        var template = '<article class="post"> \
            <div class="descripcion"> \
                <figure class="imagen"> \
                    <img src="imagenes/foto.jpg" alt=""> \
                </figure> \
                <div class="detalles"> \
                    <h2 class="titulo">'+titulo+'</h2> \
                    <p class="autor">Por: <a href="#">'+autor+'</a></p> \
                    <a href="#" class="tag">'+tag+'</a> \
                    <p class="fecha">Hace <strong>2 minutos</strong></p> \
                </div> \
            </div> \
            <div class="acciones"> \
                <div class="votos"> \
                    <a href="#" class="up"></a> \
                    <span class="total">1</span> \
                    <a href="#" class="down"></a> \
                </div> \
                <div class="datos"> \
                    <a href="#" class="comentarios">1</a> \
                    <a href="#" class="estrellita"></a> \
                </div> \
            </div> \
        </article>';

        $('.posts').prepend(template);

        // Limpia los campos
        $('input[type=text]').val('');

        // Ocultar el formulario
        $('form').slideUp();
    }
});