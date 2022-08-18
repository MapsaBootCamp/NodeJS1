class Graph{
    #adjMatrix;

    constructor(){
        this.#adjMatrix = {}
    }

    addNode(nodeName){
        if(nodeName in Object.keys(this.#adjMatrix))
            return null;
        this.#adjMatrix[nodeName] = []
    }

    addEdge(nodeName1, nodeName2){
        this.addNode(nodeName1)
        this.addNode(nodeName2)
        this.#adjMatrix[nodeName1].push(nodeName2)
        this.#adjMatrix[nodeName2].push(nodeName1)
    }

    isConnected(){
        
    }

    display(){
        console.log(this.#adjMatrix);
    }
}


const g1 = new Graph();
g1.addNode(1)
g1.addNode(2)
g1.addNode(3)
g1.addNode(4)
g1.addNode(5)
g1.addNode(6)

g1.addEdge(1, 2)
g1.addEdge(1, 6)
g1.addEdge(2, 4)


g1.display()


