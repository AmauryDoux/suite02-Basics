/*

    editStringAt

    Ecrire une fonction "editStringAt",
    qui modifie une chaine de caractère à une certaine position.
    La fonction retourne cette même chaine de caractère avec les modifications attendus.

    Prototype:
        str editStringAt(str, position, char);

    Exemple:
        editStringAt("toto", 3, "a"); // "tota";

*/

function editStringAt(str, position, char) {

    var len = str.length;
    var str2 = ""
    for (var i = 0; i < len; i++) {
        if (i === position) {
            str2 = str2 + char;

        } else {
            str2 = str2 + str[i]
        }
    }
    return str2;
}
