
function multiplicateHandler(tabuada, sequencia) {
    /*
    Se nao houver sequencia informado, valor padrão = 0
    */
    if (sequencia == 0) sequencia = 10;
    let tabuadaArr = Array.from({ length: sequencia }, (_, index) => index + 1);
    let i = 0;

    let result = tabuadaArr.map((tabuada, sequencia) => {
        return `${tabuada} x ${i + 1} = ${tabuada * (i + 1)}`
    })

    return result;
}

module.exports = multiplicateHandler;