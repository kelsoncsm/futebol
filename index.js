var list8 = [{ jogador: 'Kelson' }, { jogador: 'Fernando M' }, { jogador: 'Fernando P' }, { jogador: 'Jean(P)' }, { jogador: 'Sabino' }, { jogador: 'Edvan' }, { jogador: 'Mike' }, { jogador: 'Luiz' }];


var list11 = [{ jogador: 'Kelson' }, { jogador: 'Fernando M' }, { jogador: 'Fernando P' }, { jogador: 'Jean(P)' }, { jogador: 'Sabino' }, { jogador: 'Edvan' }, { jogador: 'Mike' }, { jogador: 'Luiz' }, { jogador: 'João' }, { jogador: 'Vitor' }, { jogador: 'Matheus' }];

var list16 = [{ jogador: 'Kelson' }, { jogador: 'Fernando M' }, { jogador: 'Fernando P' }, { jogador: 'Jean(P)' },
{ jogador: 'Sabino' }, { jogador: 'Edvan' }, { jogador: 'Mike' }, { jogador: 'Luiz' },
{ jogador: 'João' }, { jogador: 'Vitor' }, { jogador: 'Matheus' }, { jogador: 'Pinho' },
{ jogador: 'Tico' }, { jogador: 'Arnado' }, { jogador: 'Bernardo' }, { jogador: 'Aristeu' }];


var times = { T1: [], T2: [], T3: [], T4: [] }


AddTimes();

function AddTimes() {
    const _array = shuffleArray(list11);

    _array.forEach(element => {

        if (times.T1.length <= 3 && !times.T1.find(x => x.jogador == element.jogador)) {
            times.T1.push({ nome: 'Time 1', jogador: element.jogador });
        } else if (times.T2.length <= 3 && !times.T2.find(x => x.jogador == element.jogador)) {
            times.T2.push({ nome: 'Time 2', jogador: element.jogador });
        } else if (times.T3.length <= 3 && !times.T3.find(x => x.jogador == element.jogador)) {
            times.T3.push({ nome: 'Time 3', jogador: element.jogador });
        } else if (times.T4.length <= 3 && !times.T4.find(x => x.jogador == element.jogador)) {
            times.T4.push({ nome: 'Time 4', jogador: element.jogador });
        }

    });

    console.log(times)

}


function shuffleArray(lista) {


    const newArray = [];
    let number = Math.floor(Math.random() * lista.length);
    let count = 1;
    newArray.push(lista[number]);

    while (count < lista.length) {
        const newNumber = Math.floor(Math.random() * lista.length);
        if (!newArray.includes(lista[newNumber])) {
            count++;
            number = newNumber;
            newArray.push(lista[number]);
        }
    }

    return newArray;
}



