function verficarDado(dado){
    if(typeof dado === 'number'){
        console.log("Este dado é um number.")
    } else if (typeof dado === 'string') {
        console.log("Este dado é um string.")

    } else if(typeof dado === 'boolean'){
        console.log("Este dado é um boolean.")
    }
}
verficarDado(false)
verficarDado(28)
verficarDado("kakau")
