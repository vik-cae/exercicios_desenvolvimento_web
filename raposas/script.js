const valor = document.getElementById("valor")
const botao = document.getElementById("botao")

botao.addEventListener('click', (e) =>{
    buscarDados(valor.value)
})

async function buscarDados(numero) {
    try{
        const reponse = await fetch (`https://randomfox.ca/?i=${numero}`);
        const data = await reponse.json();
        console.log(data)
       
    } catch (error){
        console.error('error:', error)
    }
}

