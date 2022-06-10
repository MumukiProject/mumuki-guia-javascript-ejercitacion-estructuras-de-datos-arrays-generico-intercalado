it("Si hacemos obtenerMenor([5, 7, 99, 34, 54, 2, 12]) debería retornar 2", function() {
let resultado = obtenerMenor([5, 7, 99, 34, 54, 2, 12])
assert.equal(resultado, 2,`obtenerMenor([5, 7, 99, 34, 54, 2, 12]) debería retornar 2 pero fue ${resultado}`);
})

it("Si hacemos obtenerMenor([19, 27, 24, 8, 9, 15, 12]) debería retornar 8", function() {
let resultado = obtenerMenor([19, 27, 24, 8, 9, 15, 12])
assert.equal(resultado, 8,`obtenerMenor([19, 27, 24, 8, 9, 15, 12]) debería retornar 8 pero fue ${resultado}`);
})