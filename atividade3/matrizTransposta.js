let matriz = [[1,2], [3,4], [5,6]]
let transposta = []
let linha = []
let coluna = []


function transposicao(matriz){
    for(let i = 0; i < 3; i++){
        linha.push(matriz[i][0])
        coluna.push(matriz[i][1])
    }

    transposta.push(linha)
    transposta.push(coluna)
}

console.log("Matriz normal : \n")


for (let i = 0 ; i < 3; i++){
    for(let j = 0; j < 2; j++){
        console.log(`[${matriz[i][j]} ` + `${matriz[i][j+1]}]`)
        break
    }
}


transposicao(matriz)

console.log("\nMatriz transposta : \n")

for (let i = 0 ; i < 2; i++){
    for(let j = 0; j < 3; j++){
        console.log(`[${transposta[i][j]} ` + `${transposta[i][j+1]} ` + `${transposta[i][j+2]}]`)
        break
    }
}