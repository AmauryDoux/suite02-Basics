/*

    Search in Array

    Ecrire une fonction "searchOcc", qui nous renvoi l'index d'une occurrence dans un tableau.
    Si l'occurrence est introuvable dans le tableau, renvoyer -1;

    Prototype:
        nbr searchOcc(arr, occurence);

    Exemples:
        searchOcc(["Salut", "ça", "va", "?"], "va"); // 2
        searchOcc(["Salut", "ça", "va", "?"], "Ahahahah"); // -1

    Fonctions interdites:
        - Array.indexOf

*/
function searchOcc(arr, occurence) {

    for (var i = 0; len = i < arr.length; i++) {
        if (occurence === arr[i]) {
            return i;

        }

    }
    return -1;
}
