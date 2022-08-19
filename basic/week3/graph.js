class Graph{

    constructor(){
        this._adjMatrix = {};
    }

    addNode(nodeName){
        if(nodeName in this._adjMatrix)
            return null;
        this._adjMatrix[nodeName] = []
    }

    addEdge(nodeName1, nodeName2){
        this.addNode(nodeName1)
        this.addNode(nodeName2)
        this._adjMatrix[nodeName1].push(nodeName2)
        this._adjMatrix[nodeName2].push(nodeName1)
    }
    
    findNeghbors(nodeName, neghborsArray=[]){
        for(let elm of this._adjMatrix[nodeName]){
            if(!neghborsArray.includes(elm)){
                neghborsArray.push(elm);
                neghborsArray.concat(this.findNeghbors(elm, neghborsArray))
            }
        }
        return neghborsArray;
    }

    isConnected(){
        if(Object.keys(this._adjMatrix).length < 2)
            return true;
        const result = this.findNeghbors(Object.keys(this._adjMatrix)[0])
        console.log(result);
        if(result.length === Object.keys(this._adjMatrix).length)
            return true;
        return false
    }

    findPath(nodeName1, nodeName2){

    }


    display(){
        console.log(this._adjMatrix);
    }
}

class DirectedGraph extends Graph{

}


Graph.prototype.jahat = function () {
    console.log("salam man protoam");
};


const g1 = new Graph();
g1.addNode(1)
g1.addNode(2)
g1.addNode(3)
g1.addNode(4)
g1.addNode(5)
g1.addNode(6)
g1.addNode(6)
g1.addNode(7)

g1.addEdge(1, 2)
g1.addEdge(1, 3)
g1.addEdge(3, 5)
g1.addEdge(1, 6)
g1.addEdge(2, 4)
g1.addEdge(5, 7)

const g2 = new DirectedGraph()
console.log(g2.jahat());

// console.log(g1.isConnected());
// console.log(g1.jahat)
// g1.display()
