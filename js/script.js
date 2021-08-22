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
function mensagem(){
    var data = new Date()
    var horas = data.getHours();
    var msm = Math.floor(Math.random() * 4);
    mensagem = [
        ["Talvez esteja ficando tarde","Bora ve uns anime","Dormir me parece boa ideia","Mais uma partida e vamos dormir. ok?"],//horas meia noite
        ["Agora ta bem tarde msm","","Pq prgramar de madrugada é melhor?","Bora mimi?"],//horas 1
        ["É agora ta realmente tarde","To soninho","Quem sabe continuar amanhã seja melhor","vamo mimi, vai..."],//horas 2
        ["Vc viu que horas são?","666","Has you seen the herobrine","Atrás de vc"],//horas 3
        ["Acordou cedo ou nem dormiu ainda?","Isso não é hora pra estar acordado","hora de dormir? acordar? não sei","Vamo que vamo"],//horas 4
        ["Hummm acordar cedo é dificil","Ja acordado?","Vc não ficou acordado ate agora ne?","pq tão cedo?"],//horas 5
        ["Bom hora de começar tudo de novo","O que tem pra hj?","Tem café?","Só mais 10 min"],//horas 6
        ["Bom dia :)","Tomar café?","Cafézinnn","Bora começar o dia"],//horas 7
        ["Bora começar a aula","Presta bastante atenção :)","Aula de quem hj?","Que tal um café?"],//horas 8
        ["volta a ver a aula :(","Aulinha ta como?","Matando aula ne?","Que coisa feia volta pra aula"],//horas 9
        ["Nossa a aula ja acabou?","Vai estudar anda","Vc tem que estudar para se sair bem","Aula un tantinho chata"],//horas 10
        ["Hora do papa","Vamo comer","To fominha","Vamo papa?"],//horas 11
        ["Tarde","Sera que o Ports ja fez os 5k?","Cade os 5k em trader de elite?","Sem 5K sem trader de elite"],//horas 12
        ["Tem mais nda pra fazer não?","Que tal ler um pouco","Adianta as atividades anda :(","Vc acha que eu não to vendo esse artigo"],//horas 13
        ["","","",""],//horas 14
        ["O Jogo... Vc perdeu","","",""],//horas 15
        ["Café da tarde","Bora comer alguma coisa","",""],//horas 16
        ["","","",""],//horas 17
        ["Noite","Bora estudar","",""],//horas 18
        ["Olha as atividade atrasadas","","",""],//horas 19
        ["","","",""],//horas 20
        ["","","",""],//horas 21
        ["","","",""],//horas 22
        ["ola","oi","coisa","naosei"],//horas 23
    ]
    document.getElementById('mensagem').innerHTML=`${mensagem[horas][msm]}`
}
window.setInterval("relogio()",1)