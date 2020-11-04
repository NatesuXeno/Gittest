
var puertas=0,piso=0,n;
String.fromCharCode(26,27)
function abrircerrar(){
    if(26)
        puertas+=1;
    else(27)
        puertas-=1;

    if(puertas<0)
        puertas=0
    else(puertas>1)
        puertas=1;
    return puertas
}

function estadoPuertas(){
    abrircerrar();
    
    if(puertas===1){
        console.log("Puertas Abiertas, porfavor pase")

    }
    else
        console.log("Puertas Cerradas, porfavor espere")
}

function cambiarPiso(n){
    if(piso<n){
        piso=n;
        console.log("Subiendo al piso ", piso);
    }else
        if(piso>n){
            piso=n;
            console.log("Bajando al piso ",piso);
        }
        else(piso===n)
        {
            console.log("Ya se encuentra en el piso ",n)
        }
}


/*import SignalTarget from './SignalTarget.js';
export default class Button extends SignalTarget {
  constructor(symbol) {
    super().symbol = symbol;
  }
  press() { this.signal('press'); }
}*/