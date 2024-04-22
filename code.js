//code for converToAdjLsit edited from last semester, convertToAdjMatrix new

const { number } = require("jsverify");

function convertToAdjList(adjMatrix) {
    let adjList = [];
    let tempList

    if (adjMatrix == []){
        return []
    }

    for (i = 0; i < adjMatrix.length; i++){
        tempList = [];
        for(j = 0; j < adjMatrix[i].length; j++){
            if(adjMatrix[i][j] == 1) {
                tempList.push(j);
            }
        }
        adjList.push(tempList);
    }

    return adjList;
}

function convertToAdjMatrix(adjList) {
    let adjMatrix = [];
    let tempList

    if (adjList == []){
        return []
    }

    let nodeNumber = adjList.length

    for (i = 0; i < adjList.length; i++){

        tempList = Array.from({ length: nodeNumber }).fill(0);

        adjMatrix.push(tempList);

        //console.log(adjMatrix);

        for(k = 0 ; k < nodeNumber; k++){

            if(adjList[i][k] == undefined){
                //console.log("skip")
            }
            else{
                let num = adjList[i][k]
                adjMatrix[i][num] = 1
            }

        }

    }

    return adjMatrix;
}

//console.log(convertToAdjList([[0,1,0],[1,0,1],[1,0,1]]))
//console.log(convertToAdjMatrix([[1],[0,2],[0,2]]))