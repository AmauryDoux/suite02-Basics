/*

    copyArray

    Ecrire une fonction "copyArray",
    qui prend en paramètre un tableau,
    et retourne une copie de ce tableau.

    Prototype:
        arr copyArray(arr);

    Exemple:
        copyArray(["bonjour", 4, 5]); // ["bonjour", 4, 5]

*/


function copyArray(arr) {
    var len = arr.length;
    var arr2 = [];
    for (var i = 0; i < len; i++) {
        arr2.push(arr[i])
    }
    return arr2;
}
