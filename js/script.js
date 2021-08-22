function relogio(){
        var data = new Date()
        var horas = data.getHours();
        var minutos = data.getMinutes();
        var minutos = data.getMinutes();
        if(horas<10){
            horas = "0"+horas;
        }
        if(minutos<10){
            minutos = "0"+minutos;
        }
        document.getElementById('relogio').innerHTML=`${horas}:${minutos}`
}
function fundo(){
    var img = Math.floor(Math.random() * 16+1);
    document.body.style.background = `url('imagem/${img}.gif')`;
    document.body.style.backgroundRepeat= 'no-repeat';
    document.body.style.backgroundSize= 'cover';
    document.body.style.backgroundAttachment = 'fixed'
}
window.setInterval("relogio()",1)