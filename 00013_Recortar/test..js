it("Si hacemos recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) debería retornar ['elef', 'dino', 'choc', 'avio', 'amer']", function() {
let resultado = recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])
assert.deepEqual(resultado, ['elef', 'dino', 'choc', 'avio', 'amer'],`recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) debería retornar ['elef', 'dino' 'choc', 'avio', 'amer'] pero fue ${resultado}`);
})

it("Si hacemos recortar(1, ['algoritmo', 'bug', 'compilador']) debería retornar ['a', 'b','c']", function() {
let resultado = recortar(1, ['algoritmo', 'bug', 'compilador'])
assert.deepEqual(resultado, ['a', 'b', 'c'],`recortar(1, ['algoritmo', 'bug', 'compilador']) debería retornar ['a', 'b', 'c'] pero fue ${resultado}`);
})