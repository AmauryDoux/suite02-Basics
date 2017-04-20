/*

    getValuesByType

    Ecrire une fonction "getValuesByType",
    qui donne un tableau avec uniquement les valeurs d'un type en particulier depuis un autre tableau.

    Prototype:
        arr getValuesByType(arr, type);

    Exemple:
        getValuesByType(["toto", 4, 5], "number"); // [4, 5]

    Attention, la fonction ne doit pas modifier le tableau modèle.

*/
function getValuesByType(arr, type) {
    var array = [];
    for (var i = 0; len = i < arr.length; i++) {
        if (typeof arr[i] === type) {
            array.push(arr[i]);



        }
    }
    return array;
}
