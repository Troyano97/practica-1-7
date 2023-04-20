const VALOR_BITCOIN_DOLAR = 39685.40;
const ETHEREUM_CAMBIO_BITCOIN_UNO = 13.54;

let bitcoinCambiar= prompt ("Ingrese la cantidad de bitcoin a cambiar");
let seleccionMoneda= confirm ("¿aceptar para dolares o cancelar para ETH?");

if (seleccionMoneda)
{
    alert("Ahora tienes dolares: $"+(VALOR_BITCOIN_DOLAR*bitcoinCambiar))
    
}
else {
    alert(" Ahora tienes Ethereum: "+(ETHEREUM_CAMBIO_BITCOIN_UNO*bitcoinCambiar))
 
    
};
