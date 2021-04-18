$(document).ready(() => {
$('#next').on('click',()=>{
    $('#icon').attr("src",'justiceforall.jpg');
    $("#aud").attr("src",'uno.mp3');
    $("#tt").text("One - Metallica");
})
$('#next').on('dblclick',()=>{
    $('#icon').attr("src",'kiem.jpg');
    $("#aud").attr("src",'four.mp3');
    $("#tt").text("The Four Horsemen");
})
$('#pre').on('click',()=>{
    $('#icon').attr("src",'ridelightning.jpg');
    $("#aud").attr("src",'for.mp3');
    $("#tt").text("For Whom the bell tolls");
})
});