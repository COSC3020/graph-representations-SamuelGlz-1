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
    //let tempList 

    if (adjList == []){
        return []
    }

    let vertNumber = adjList.length

    for (i = 0; i < adjList.length; i++){

        let tempList = []

        for (j = 0; j < adjList.length; j++){
            tempList.push(0)
        }

        adjMatrix.push(tempList);

        for(k = 0 ; k < vertNumber; k++){

            if(adjList[i][k] == undefined){
            }
            else{
                let num = adjList[i][k]
                adjMatrix[i][num] = 1
            }

        }

    }

    return adjMatrix;
}
