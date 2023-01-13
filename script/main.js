$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('#hidden-menu').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000', {placeholder: "(00) 00000-0000"});
    $('#cpf').mask('000.000.000-00', {placeholder: "000.000.000-00"});
    $('#cep').mask('00.000-000', {placeholder: "00.000-000"});
});
