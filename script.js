
// async function testando(){

//     try{
//      const resposta = await fetch('https://randomfox.ca/floof/')
//      const valor = await resposta.json()
//      const div = document.getElementById(`fotos`)

//     //  const imagem = document.getElementById('imagem_fox')
 
//     //  imagem.src= valor.image
//     const image = document.createElement(`img`)
//     image.src= valor.image

//     div.appendChild(image)
     
//     } catch(error){
//      console.error('Error:',error)
//     }
 
 
//  }

// testando()


const imgs = document.getElementById("img") /*para pegar o elemento do html*/
const img = document.querySelectorAll("#img img") /*qurryselectorall pra pelar o elemento dento do id = img*/

let idx = 0;  /*contante*/

function carrossel() {
    idx++;/* + na variavel*/

    if (idx > img.length - 1) {
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;

}

setInterval(carrossel, 1800);

const swiper = new Swiper('.slider-wrapper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

const conteudo = document.getElementById('conteudo')
const titulo = document.getElementById('titulo')

function curiosidade(valor) {
    const lista_curiosidades = [
        {
            titulo: '1. Habilidade de adaptação',
            conteudo: 'Raposas conseguem viver em uma ampla variedade de habitats, desde florestas e campos até áreas urbanas. A raposa-vermelha, em particular, é uma das espécies de mamíferos mais amplamente distribuídas no mundo.'
        },
        {
            titulo: '2. Comunicação diversificada',
            conteudo: 'Raposas têm um repertório vocal impressionante com cerca de 40 sons diferentes. Esses sons incluem gritos, latidos e guinchos, usados para se comunicar entre si.'
        },
        {
            titulo: '3. Comportamento noturno',
            conteudo: 'Elas são geralmente noturnas ou crepusculares, o que significa que são mais ativas ao amanhecer e ao entardecer. Isso as ajuda a evitar predadores e competir por recursos.'
        },
        {
            titulo: '4. Cauda multifuncional',
            conteudo: 'A cauda da raposa, chamada de "penacho", é usada para equilibrar enquanto correm, para se aquecer durante o frio e como meio de comunicação visual com outras raposas.'
        },
        {
            titulo: '5. Saltos precisos',
            conteudo: 'Raposas são conhecidas por seus saltos habilidosos. Elas podem localizar presas sob a neve, calcular a distância e pular com precisão para capturá-las.'
        },
        {
            titulo: '6. Monogamia com flexibilidade',
            conteudo: 'Algumas raposas formam pares monogâmicos, mas em certas condições, podem viver em pequenos grupos familiares para ajudar a criar filhotes.'
        },
        {
            titulo: '7. Visão peculiar',
            conteudo: 'Embora a visão noturna das raposas seja boa, elas enxergam melhor em movimento. Um objeto estático é mais difícil para elas perceberem.'
        },
        {
            titulo: '8. Popularidade na cultura',
            conteudo: 'Raposas são figuras populares no folclore de diversas culturas, frequentemente associadas à astúcia e inteligência. Exemplos incluem a raposa no folclore japonês (kitsune) e nas fábulas de Esopo.'
        },
        {
            titulo: '9. Dieta variada',
            conteudo: 'Elas são onívoras e têm uma dieta flexível que inclui pequenos mamíferos, pássaros, insetos, frutas e até restos de comida humana em áreas urbanas.'
        },
        {
            titulo: '10. Existência de raposas "domesticadas"',
            conteudo: 'Na Rússia, cientistas criaram um programa de domesticação de raposas desde os anos 1950, resultando em animais com comportamentos mais amigáveis e características físicas semelhantes a cães.'
        }
    ]

    conteudo.innerHTML = lista_curiosidades[valor].conteudo
    titulo.innerHTML = lista_curiosidades[valor].titulo
}


const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('#loadMore');

async function fetchFoxImage() {
  try {
    const response = await fetch('https://randomfox.ca/floof/');
    const data = await response.json();
    return data.image; 
  } catch (error) {
    console.error('Erro ao buscar imagem:', error);
    return null;
  }
}


async function renderFox() {
  const imageUrl = await fetchFoxImage();
  if (imageUrl) {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Uma raposa fofinha';
    gallery.appendChild(imgElement);
  }
  else{
    console.error('Erro ao buscar imagem:', error);
  }
}

var contador = 4
loadMoreButton.addEventListener('click', ()=>{
    loadGallery(contador++)
})

// Função para carregar várias imagens
async function loadGallery(count = contador) {
  for (let i = 0; i < count; i++) {
    await renderFox();
  }
}

loadGallery()

function tt(){
    const images = document.querySelectorAll('.gallery img');

    // Adicionar um evento de clique a cada imagem
    images.forEach(image => {
      image.addEventListener('click', () => {
        // Pegar o atributo src da imagem clicada
        const imageUrl = image.src;
        
        const modal = document.querySelector('.modal')
        const img_modal = document.querySelector('#modal_img')
        
        modal.classList.add('ativo')
        img_modal.src=imageUrl

        const btn_x = document.querySelector('#x')

        btn_x.addEventListener('click',()=>{
            modal.classList.remove('ativo')
        })
      });
    });
}

setInterval(tt,2000)