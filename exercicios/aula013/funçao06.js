function sayMyName(nome){
    console.log('Antes de executar a funçao callback')

    nome()

    console.log('depois de excutar a callbak')

}
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)