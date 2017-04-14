/*

    editArrayAt

    Ecrire une fonction "editArrayAt",
    qui prend en paramètre un tableau, une position et une valeur.
    La fonction modifie la valeur de la position du tableau.

    Prototype:
        void editArrayAt(arr, position, value);

    Exemple:
        var arr = ["bonjour", 4, 5];
        editArrayAt(arr, 1, "ça");  // ["bonjour", "ça", 5]
        editArrayAt(arr, 2, "va?"); // ["bonjour", "ça", "va?"]

*/
var arr = ["bonjour", 5, 2];

function editArrayAt(arr, position, value) {
    //this gets arry position and applies the value
    arr[position] = value;
    //returns the varriable arr
    //return arr;

}
