it("Si hacemos separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶']) debería retornar '🐶🐶🐶🐶🐱🐱🐱']", function() {
let resultado = separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶'])
assert.deepEqual(resultado, '🐶🐶🐶🐶🐱🐱🐱',`separar debería retornar '🐶🐶🐶🐶🐱🐱🐱' pero fue ${resultado}`);
})

