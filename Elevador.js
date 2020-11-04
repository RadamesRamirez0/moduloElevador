var pisoActual=1;
var puerta = {Abierta:false};
const pisoMax = 8;

let subirPiso =()=>  {
    if(pisoActual < 8)
        pisoActual++;
    else
        console.log("Estás en el piso más alto.");
    console.log("Piso Actual: "+ pisoActual);
} 
let bajarPiso =()=>  {
    if(pisoActual > 1)
        pisoActual--;
    else
        console.log("Estás en el piso más bajo.");
    console.log("Piso Actual: "+ pisoActual);
} 
let cambiarPiso = piso =>{
    if(piso >= 0 && piso <=8 )
        pisoActual= piso;
    else 
        console.log("Piso inválido.");
    console.log("Piso Actual: "+ pisoActual);
}
let abrirPuerta =()=> {
    console.log("Puerta abierta");
    return puerta.Abierta=true;
    
}
let cerrarPuerta =()=>
{
    console.log("Puerta cerrada");
    return puerta.Abierta=false;
   
}
module.exports ={
    subirPiso,
    bajarPiso,
    cambiarPiso,
    abrirPuerta,
    cerrarPuerta
}