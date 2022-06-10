it("Si hacemos obtenerResultado('Ale', 'Gaby', [4, 4, 4], [1, 2, 3]) debería retornar Ale", function() {
let resultado = obtenerResultado('Ale', 'Gaby', [4, 4, 4], [1, 2, 3])
assert.deepEqual(resultado, 'Ale',`obtenerResultado('Ale', 'Gaby', [4, 4, 4], [1, 2, 3]) debería retornar 'Ale' pero fue ${resultado}`);
})

it("Si hacemos obtenerResultado('Ale', 'Gaby', [3, 5, 5, 7], [4, 1, 2, 9]) debería retornar Empate", function() {
let resultado = obtenerResultado('Ale', 'Gaby', [3, 5, 5, 7], [4, 1, 2, 9])
assert.deepEqual(resultado, 'Empate',`obtenerResultado('Ale', 'Gaby', [3, 5, 5, 7], [4, 1, 2, 9]) debería retornar 'Empate' pero fue ${resultado}`);
})

it("Si hacemos obtenerResultado('Ale', 'Gaby', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) debería retornar Gaby", function() {
let resultado = obtenerResultado('Ale', 'Gaby', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])
assert.deepEqual(resultado, 'Gaby',`obtenerResultado('Ale', 'Gaby', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) debería retornar 'Gaby' pero fue ${resultado}`);
})