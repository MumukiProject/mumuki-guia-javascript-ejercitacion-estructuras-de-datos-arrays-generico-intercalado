it("Si hacemos germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') debería retornar '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'", function() {
let resultado = germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
assert.deepEqual(resultado,'🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸',`germinar debería retornar '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸' pero fue ${resultado}`);
})

it("Si hacemos germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') debería retornar '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'", function() {
let resultado = germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')
assert.deepEqual(resultado, '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸',`̣germinar debería retornar'🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸' pero fue ${resultado}`);
})


