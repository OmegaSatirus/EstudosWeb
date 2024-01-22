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

const PrecoProduto = document.getElementById('PrecoProduto');
const NomeProduto = document.getElementById('NomeComida');
const Resultado = document.getElementById('Total');
const Soma = document.getElementById('AdcProduto');
const Menos = document.getElementById('RmvProduto');
const Itens = document.getElementById('Itens');
const RangeConfirm = document.getElementById('Confirmacao');

let numItens = 0;

function AtualizarTotal() {
    const numeroPreco = parseFloat(PrecoProduto.innerText);
    const total = numItens * numeroPreco;
    Resultado.innerText = total.toFixed(2);
}

function RmvOuAdcProduto(operacao) {
    if (operacao === 'adicao') {
        numItens += 1;
    } else if (operacao === 'remocao' && numItens > 0) {
        numItens -= 1;
    }
    AtualizarItens();
}

function AtualizarItens() {
    Itens.innerText = numItens;
    AtualizarTotal();
}

function AdcCarrinho() {
    const numeroPreco = parseFloat(PrecoProduto.innerText);
    Carrinho.push({ Nome: NomeProduto.innerText, Preco: numeroPreco, QTD: numItens });
}

function Confirmacao() {
    if (RangeConfirm.value == 25) {
        AdcCarrinho();
        alert("Produto(s) Adicionado(s) com sucesso!");
        const ValorTotal = numItens * parseFloat(PrecoProduto.innerText);
        console.log("Carrinho:", Carrinho);
        console.log("Nome do Produto:", NomeProduto.innerText);
        console.log("Valor Total:", ValorTotal.toFixed(2));
        console.log("Preço do Produto:", parseFloat(PrecoProduto.innerText));
        console.log("Quantidade de Itens:", numItens);
    }
}


Soma.addEventListener('click', () => RmvOuAdcProduto('adicao'));
Menos.addEventListener('click', () => RmvOuAdcProduto('remocao'));
RangeConfirm.addEventListener('input', Confirmacao);
