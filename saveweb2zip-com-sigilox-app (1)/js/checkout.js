var soundPath = '/lobibox/sounds/';
var imgPath = '/lobibox/bell.png';
var positionLob = 'bottom right';
var titleLob = 'SigiloX informa:';
var nomeProduto = '';
var clickUrlLob = '#comprar';
var compradores = JSON.parse('["Jeferson Oliveira","LUCAS TEIXEIRA GONCALVES","Bruno Padilha","Fabio de Jesus","Guilherme Lima Rodrigues","DANILO GUSTAVO DANCINI DE JESUS","Filipe Dantas de Oliveira","Michel de oliveira Silva"]');
var clientes = ["Maria Dias", "Elias Araújo", "Vilma Oliveira", "Selma", "Diogo Campos", "Pedro Meireles", "Roberta Alves", "Marcos Campos"];

function shuffle(o) {
    for (var e, s, a = o.length; 0 !== a;) s = Math.floor(Math.random() * a), a -= 1, e = o[a], o[a] = o[s], o[s] = e;
    return o
};

function noti(o, e) {
    Lobibox.notify(o, {
        pauseDelayOnHover: !1,
        continueDelayOnInactiveTab: !0,
        showAfterPrevious: !1,
        rounded: !1,
        delayIndicator: !0,
        sound: !0,
        icon: !0,
        showClass: "fadeIn",
        hideClass: "fadeOut",
        size: "mini",
        closable: !1,
        delay: 5e3,
        soundPath: soundPath,
        img: imgPath,
        position: positionLob,
        title: titleLob,
        msg: e,
        onClickUrl: clickUrlLob
    })
};

