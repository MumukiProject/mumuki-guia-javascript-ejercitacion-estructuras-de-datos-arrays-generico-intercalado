it("Si hacemos comer('🐰🥕🥬🥕🚫')  debería retornar '' ", function() {
let resultado = comer('🐰🥕🥬🥕🚫') 
assert.deepEqual(resultado, '',`comer debería retornar '' pero fue ${resultado}`);
})

it("Si hacemos comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') debería retornar '🌱🥕🌱🌷'", function() {
let resultado = comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')
assert.deepEqual(resultado,  '🌱🥕🌱🌷' ,`comer debería retornar '🌱🥕🌱🌷' pero fue ${resultado}`);
})


