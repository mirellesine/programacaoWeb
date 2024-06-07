let produtos = [];

function createProduct(id, nome, qtd) {
    let product = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return product;
}

function addProduct(product) {
    produtos.push(product);
    console.log(produtos);
}

function listProducts() {
    console.log("Produtos atuais:", produtos);
    return produtos;
}

function removeProduct(id) {
    for (let i = 0; i < produtos.length; i ++){
        if(produtos[i].id == id){
            produtos.splice(i, 1);
        }
    }
}

function editProdut(id, qtd){
    for (let i = 0; i < produtos.length; i ++){
        if(produtos[i].id == id){
            produtos[i].qtd = qtd;
        }
    }
}

module.exports = {
    createProduct,
    addProduct,
    listProducts,
    removeProduct,
    editProdut
};