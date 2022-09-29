function oneToOneAssociation(tableA, tableB){

    tableA.hasOne(tableB, {
        onDelete: "CASCADE",
        onUpdate: "RESTRICT"
    });
    
    tableB.belongsTo(tableA);
}

function oneToManyAssociation(tableA, tableB){

    tableA.hasMany(tableB);
    tableB.belongsTo(tableA);
}


function manyToManyAssociation(tableA, tableB, throughTable){

    tableA.belongsToMany(tableB, {through: throughTable});
    tableB.belongsToMany(tableA, {through: throughTable});
}


module.exports = {
    oneToOneAssociation,
    manyToManyAssociation,
    oneToManyAssociation,
}