const Carrinho = [];
const ListaDeProdutos = [
    { Nome: "Comida01", Preco: 25.99 },
    { Nome: "Comida02", Preco: 12.95 },
    { Nome: "Comida03", Preco: 6.70 },
    { Nome: "Comida04", Preco: 14.90 },
    { Nome: "Comida05", Preco: 34.99 },
    { Nome: "Comida06", Preco: 23.70 },
    { Nome: "Comida07", Preco: 49.99 },
    { Nome: "Comida08", Preco: 25.99 },
    { Nome: "Comida09", Preco: 24.99 },
    { Nome: "Comida10", Preco: 23.99 },
    { Nome: "Comida11", Preco: 19.99 },
    { Nome: "Comida12", Preco: 25.99 },
];

// Conversão de número
const PrecoProduto = document.getElementById('PrecoProduto');
const textoPreco = PrecoProduto.innerText;
const numeroPreco = parseFloat(textoPreco);

// Soma de valores
let numItens = 0; 

const Resultado = document.getElementById('Total');
const Soma = document.getElementById('AdcProduto');
const Menos = document.getElementById('RmvProduto');
const Itens = document.getElementById('Itens');

function RmvProduto() {
    if (numItens === 0) {
        alert("Não tem nenhum item!");
    } else {
        numItens -= 1;
        Itens.innerText = numItens; 
    }
}

function AdcProduto() {
    numItens += 1;
    Itens.innerText = numItens; 
}

Menos.addEventListener('click', RmvProduto);
Soma.addEventListener('click', AdcProduto);

function Teste() {
    console.log(numItens);
}
