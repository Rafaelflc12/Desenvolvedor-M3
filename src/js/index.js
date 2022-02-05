
let show = true;
import { products } from "../../db.json";

const asideFilterToggle = document.querySelector('aside');
const orderToggle = document.querySelector('.order-mobile');
const orderClose = orderToggle.querySelector('.x');





const toggleCores = asideFilterToggle.querySelector(".cores");
const toggleTamanhos = asideFilterToggle.querySelector(".tamanhos");
const togglePrecos = asideFilterToggle.querySelector(".faixa-preco");


document.addEventListener("click", (e) => {
    let click = e.target;

//CONTROLE DE CLICKES PARA EVENTOS CSS



    if (click.classList.contains('ordenar')) {
        document.body.style.overflow = show ? "hidden" : "initial";
        orderToggle.classList.toggle("on", show);
        show = !show;

    }
    if (click.classList.contains('x')) {
        show = !show;
        document.body.style.overflow = show ? "hidden" : "initial";
        orderToggle.classList.toggle("on", show);

    }
    if (click.classList.contains('filtrar')) {
        document.body.style.overflow = show ? "hidden" : "initial";
        asideFilterToggle.classList.toggle("on", show);
        show = !show;

    }
    if (click.classList.contains('x-filtrar')) {
        show = !show;
        document.body.style.overflow = show ? "hidden" : "initial";
        asideFilterToggle.classList.toggle("on", show);

    }


    if (click.classList.contains("titulo-cores")) {

        toggleCores.classList.toggle("on-cores", show);
        show = !show;

    }

    if (click.classList.contains(".tamanhos-titulo")) {

        toggleTamanhos.classList.toggle("tamanhos-on", show);
        show = !show;

    }


    if (click.classList.contains("preco")) {

        togglePrecos.classList.toggle("on-preco", show);
        show = !show;


    }




// CLICKES DO MENU ORDENAR




    if (click.classList.contains('limpar')) {


        document.body.style.overflow = "initial";
        asideFilterToggle.classList.toggle("on", show);
        asideFilterToggle.querySelectorAll('input').checked = !checked;
    }
    if (click.classList.contains('aplicar')) {


        document.body.style.overflow = "initial";
        asideFilterToggle.classList.toggle("on", show);

    }
    if (toggleCores && toggleTamanhos || togglePrecos) document.body.style.overflow = "initial";




})





const coresEle = document.getElementById("cores")

const allProds = document.getElementsByClassName("produtos");
const allBuy = document.getElementsByClassName("buy");
const html = document.querySelector('.products');

function addToCart(e){
    const savedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if(savedCartProducts && !savedCartProducts.find((prod) => prod.id == e.target.id)){
        
        const cartProduct = products.find((prod) => prod.id == e.target.id);

        const cartProductList = [...savedCartProducts, cartProduct];

        localStorage.setItem('cartProducts', JSON.stringify(cartProductList));
    }
    
    if(savedCartProducts == null){
        console.log("ASDASDASD");
        const cartProduct = products.find((prod) => prod.id == e.target.id);

        localStorage.setItem('cartProducts', JSON.stringify([cartProduct]));
    }
};

function addBuyEvent(){
    for(let item of allBuy){
        item.addEventListener("click", addToCart);
    }  
};

function renderizarProdutosIniciais(){

    let produto = '';

    products.forEach((prod) => {
            
        let parcela = prod.price / prod.parcelamento[0];
        produto += `
            <div class="produtos">
                <img src= ${prod.image}></img>
                <h1 id="product-h1">${prod.name}</h1>
                <h2 id="product-h2">R$ ${prod.price.toFixed(2)}</h3>
                <h3 id="product-h1">até ${prod.parcelamento[0]}x de R$ ${parcela.toFixed(2)}</h1>
                <input type="button" class="buy" value="comprar" id="${prod.id}">
            </div>
        `;
    });

    html.innerHTML = produto;

    addBuyEvent()
}

renderizarProdutosIniciais();

function filtrarCor(){
    const opcoesCores = document.getElementsByName("cor");

    const corAtiva = [];

    opcoesCores.forEach(element => {
        if(element.checked){
            
            corAtiva.push(element.value);
        }
    });

    let produto = '';

    if(corAtiva.length != 0){
        products.forEach((prod) => {

            if(corAtiva.includes(prod.color)){
                let parcela = prod.price / prod.parcelamento[0];
                produto += `
                    <div class="productoes">
                        <img src= ${prod.image}></img>
                        <h1 id="product-h1">${prod.name}</h1>
                        <h2 id="product-h2">R$ ${prod.price.toFixed(2)}</h3>
                        <h3 id="product-h1">até ${prod.parcelamento[0]}x de R$ ${parcela.toFixed(2)}</h1>
                        <input type="button" class="buy" value="comprar" id="${prod.id}">
                    </div>
                `;
            }
        })
    } else {
        products.forEach((prod) => {
            
            let parcela = prod.price / prod.parcelamento[0];
            console.log("22222222");
            produto += `
                <div class="productoes">
                    <img src= ${prod.image}></img>
                    <h1 id="product-h1">${prod.name}</h1>
                    <h2 id="product-h2">R$ ${prod.price.toFixed(2)}</h3>
                    <h3 id="product-h1">até ${prod.parcelamento[0]}x de R$ ${parcela.toFixed(2)}</h1>
                    <input type="button" class="buy" value="comprar" ${prod.id}>
                </div>
            `;
        })
    }
  
    html.innerHTML = produto;
}

coresEle.addEventListener("click", filtrarCor);





