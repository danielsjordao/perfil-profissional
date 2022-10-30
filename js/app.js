const visualizar =[
    {
        id: 1,
        nome: "daniel jordao",
        funcao: "web developer",
        img:
          "./assets/img/",
        texto:
          "work in Progress",
      }
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
