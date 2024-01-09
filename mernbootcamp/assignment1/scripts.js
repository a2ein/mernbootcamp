function dropDown ( ) {

document.getElementById('myd').classList.toggle("show");



}
document.querySelector('.drop-cont').addEventListener('onmouseleave' , function(){

    document.getElementById('myd').classList.remove("show");


});