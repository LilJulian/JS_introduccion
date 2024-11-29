export const esPrimo=(numero) => {
    let primo = true;
    for (let i = 2; i < numero/2; i++) {
        if (numero % i === 0){
            primo = false;
        }
    }
    return primo;
}

export const llenado = (a) => a;
    
