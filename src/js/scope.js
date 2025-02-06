function textvar() {
    var x = 34;
    if (true) {
        var x = 17;
        console.log(x);
    }
    console.log(x);
}
//textvar();
//scope de let
function scopelet() {
    let x = 45;
    if (true) {
        let x = 90;
        console.log(x);
    }
    console.log(x);
}
//scopelet();
//scope de const
const x = 23;
function scopeconst() {
    const x = 44;
    if (true) {
        const x = 77;
        console.log(x);
    }
    console.log(x);
}
//scopeconst();
//console.log(x);

if(true){
    let z=34;
    const w=12;
    var y = 45;
}
//console.log(y);
const diames=14;
const mes=2;
const dia_amor=14;
const febrero=2;
function ambitoBloque(){
    let musica;
    if(diames===dia_amor && mes===febrero){
        musica="rosas.mp3";
    }
    console.log(musica);
}
ambitoBloque();
/**
 * else{
        console.log("Hoy no es 14 de febrero");
    }
 */