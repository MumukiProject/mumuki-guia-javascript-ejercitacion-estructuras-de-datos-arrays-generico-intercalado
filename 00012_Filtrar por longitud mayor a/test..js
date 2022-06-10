it("Si hacemos filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',]) debería retornar ['remolacha', 'sorpresa', 'verde']", function() {
let resultado = filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',])
assert.deepEqual(resultado, ['remolacha', 'sorpresa', 'verde'],`filtrarPorLongitud(4,['dia','remolacha','azul','sorpresa','te','verde',]) debería retornar ['remolacha', 'sorpresa', 'verde'] pero fue ${resultado}`);
})