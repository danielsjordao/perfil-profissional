const visualizar =[
    {
        id: 1,
        nome: "susan smith",
        funcao: "web developer",
        img:
          "./assets/img/",
        texto:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        nome: "anna johnson",
        funcao: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        texto:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        nome: "peter jones",
        funcao: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        texto:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        nome: "bill anderson",
        funcao: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        texto:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ];
const img = document.getElementById("pessoa-img");
const autor = document.getElementById("autor");
const funcao = document.getElementById("funcao");
const info = document.getElementById("info");

const prevBtn = document.querySelector("prev-btn");
const nextBtn = document.querySelector("next-btn");
const randomBtn = document.querySelector("random-btn");

// definir item inicial
let currentItem = 0;

// carrega o item inicial
window.addEventListener("DOMContentLoaded", function(){
    const item = visualizar[currentItem];
    img.src = item.img;
    autor.textContent = item.nome;
    funcao.textContent = item.funcao;
    info.textContent = item.texto;
});
// mostra a pessoa baseada no item
function mostrarPessoa(pessoa){
    const item = visualizar[pessoa];
    img.src = item.img;
    autor.textContent = item.nome;
    funcao.textContent = item.funcao;
    info.textContent = item.texto;    
}
// mostrar próxima pessoa
nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > visualizar.length - 1){
        currentItem = 0;
    }
    mostrarPessoa(currentItem);
});
// mostrar pessoa anterior
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = visualizar.length - 1;
    }
    mostrarPessoa(currentItem);
});
//mostrar aleatório
randomBtn.addEventListener("click", function(){
    console.log("Olá");

    currentItem = Math.floor(Math.random() * visualizar.length);
    mostrarPessoa(currentItem);
});
