import * as readlineSync from 'readline-sync';

function avg_inputs(): number {
    let array: number[] = [];

    let userNumber = readlineSync.questionInt('Rentrez un nombre (0 ou nombre négatif pour arrêter) : ');

    while (userNumber > 0) {
        array.push(userNumber);
        userNumber = readlineSync.questionInt('Rentrez un autre nombre (0 ou nombre négatif pour arrêter) : ');
    }

    if (array.length === 0) {
        console.log("Aucun nombre valide n'a été entré.");
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}
1
const moyenne = avg_inputs();
console.log(`La moyenne des nombres est : ${moyenne}`);
