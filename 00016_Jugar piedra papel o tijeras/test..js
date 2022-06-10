it("Si hacemos jugarPiedraPapelTijeras('Ale', 'Gaby', ['tijera'], ['piedra']) debería retornar Gaby", function() {
let resultado = jugarPiedraPapelTijeras('Ale', 'Gaby', ['tijera'], ['piedra'])
assert.equal(resultado, 'Gaby',`jugarPiedraPapelTijeras('Ale', 'Gaby', ['tijera'], ['piedra']) debería retornar 'Gaby' pero fue ${resultado}`);
})

it("Si hacemos jugarPiedraPapelTijeras('Ale', 'Gaby', ['papel'], ['papel']) debería retornar Empate", function() {
let resultado = jugarPiedraPapelTijeras('Ale', 'Gaby', ['papel'], ['papel'])
assert.equal(resultado, 'Empate',`'jugarPiedraPapelTijeras(Ale', 'Gaby', ['papel'], ['papel']) debería retornar 'Empate' pero fue ${resultado}`);
})

