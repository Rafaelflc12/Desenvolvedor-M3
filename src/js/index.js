
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


class Products {
    constructor(colorFilter, tamFilter, priceFilter, allFilter, produtoGeted) {
        this.renderProducts(colorFilter||tamFilter || priceFilter || filter || produtoGeted);
        this.filtrocor(products);
        this.filtroTam(products);
        this.allFilters(colorFilter|| tamFilter|| priceFilter);
        this.filtroPrice(products)
        
        this.ordenar(products);
        //this.buy(products);
    }
// ORDENAÇÃO -------------


    ordenar(products, aDate, bDate) {
        let arrprod = [...products]
document.addEventListener('click', e =>  {
    let click = e.target;
    let menorproducts =[]
    let recente =[]
    let maiorproducts =[]
    
    
/**    recente = arrprod.sort((a, b) => {NÃO FUNCIONA 
                let aDate = new Date(a.date)
                let bDate = new Date(b.date)
               return aDate.date.localeCompare(bDate.date)
               
            });
    
 */   
            menorproducts = arrprod.sort((a, b) => {
        return a.price -  b.price;
    });
            maiorproducts = arrprod.sort((a, b) => {
        return b.price -  a.price;
    });
    
   
   
    if(click.value =='menor-preco') {
        this.renderProducts([...menorproducts])
    }
    if(click.value =='maior-preco') {
        this.renderProducts([...maiorproducts])
    }
    
        
    if (click.value == 'mais-recente') {/**NÃO FUNCIONA */
        this.renderProducts([...recente])
        
    }
        
    })
    }
// TENTATIVA DE GERENCIAMENTO DOS FILTROS
    allFilters(colorFilter , tamFilter, all) {
        let active = true;
        let colors = []
        let total = []
        let sizes = []
        let precos = []
        let checkboxes = document.getElementsByName('cor');
        // all = JSON.parse(localStorage.getItem('produtos')) || [];
        
      
        
    }

    // FUNÇÃO RENDERIZADORA


    renderProducts(Filter) {
        let itens = [...Filter];


        let html = document.querySelector('.products');



        let listaProduto = [];
        for (let item of itens) {
            let parcela = item.price / item.parcelamento[0];
            let produto = '';
            produto += `
                <div class="productoes">
                <img src= ${item.image}></img>
                <h1 id="product-h1">${item.name}</h1>
                <h2 id="product-h2">R$ ${item.price.toFixed(2)}</h3>
                <h3 id="product-h1">até ${item.parcelamento[0]}x de R$ ${parcela.toFixed(2)}</h1>
                <input type="button" class="buy" value="comprar" ${item.id}></div>
                `;
            listaProduto.push(produto)



            item++
            html.innerHTML = listaProduto;
        }









    }




 /**   buy(products) {
 Não Funciona 
        const btn = document.querySelectorAll('buy')
        btn.addEventListener('change', (e) => {
            let click = e.target;
            let comprar = false;
            if(click.value =='comprar') {
                comprar = !comprar;
                let bought = products.item.id;
                let cart = []
                cart = bought
                const noCart = JSON.stringify(cart);
                localStorage.setItem('noCarrinho', noCart);
                
             }else {
                 comprar;
                 localStorage.removeItem('noCarrinho', cart)
             }
             return;
        })


        let bag = document.querySelector('.bag-counter--span');


        
        bag.innerHTML = cart.length;



    }


*/

// FILTRAGEM DE CORES
    filtrocor(products) {
         
        let prodnovo= []
        let all = []
        
        let colorFilter = [];
        
        let produtoGeted = []
        document.addEventListener('click', e => {
            let items = products;
            let click = e.target;
           
            colorFilter= items.filter(produto =>
                produto.color.includes(`${click.value}`));
                
                
              
                
                
                produtoGeted = JSON.parse(localStorage.getItem('produto')) || [];
                all.push(click.value, produtoGeted);
                
                
                console.log(produtoGeted)
                
                localStorage.setItem('produto', JSON.stringify(all));
                
               
               
               
                this.renderProducts(...produtoGeted);  
            });
            
        

    }


    //FILTRAGEM DE TAMANHOS
    filtroTam(products) {


        document.addEventListener('click', e => {
            let items = products;
            let click = e.target;
            let checkboxes = document.querySelectorAll("tamanho");

            let clickes = []
            if(checkboxes.checked) {
                clickes.push(tamFilter);

            }

            let tamFilter = [];

            tamFilter = items.filter(produto =>
                produto.size.includes(`${click.value}`));

                
        

            this.allFilters(clickes);

        })

    }

//FILTRAGEM DE PREÇOS


    filtroPrice(products) {


        document.addEventListener('click', e => {
            let items = products;
            let click = e.target;
            let checkboxes = document.querySelectorAll("preco");
            let priceFilter = [];
            let switchPrice = click.value
            
            if(click.value =='50'){
            priceFilter = items.filter(produto => 
                produto.price >=0 && produto.price <=50)

                this.renderProducts([...priceFilter])    
            }else if(click.value == '51') {
                priceFilter = items.filter(produto => 
                    produto.price >=51 && produto.price <=150)
    
                    this.renderProducts([...priceFilter])
            }else if(click.value == '151') {
                priceFilter = items.filter(produto => 
                    produto.price >=150 && produto.price <=300)
    
                    this.renderProducts([...priceFilter])
            }else if(click.value == '301') {
                priceFilter = items.filter(produto => 
                    produto.price >=301 && produto.price <=500)
    
                    this.renderProducts([...priceFilter])
            }else if(click.value =='1') {
                priceFilter = items.filter(produto => 
                    produto.price > 1)
    
                    this.renderProducts([...priceFilter])
            }
            
            
            
            
               
        });
        
    }
}



const mostrar = new Products(products);



mostrar;








