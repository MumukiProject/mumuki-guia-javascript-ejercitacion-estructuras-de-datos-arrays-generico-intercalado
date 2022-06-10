it("Si hacemos sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) debería retornar true", function() {
let resultado = sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])
assert.deepEqual(resultado, true,`sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) debería retornar true pero fue ${resultado}`);
})

it("Si hacemos sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) debería retornar false", function() {
let resultado = sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])
assert.deepEqual(resultado, false,`sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) debería retornar false pero fue ${resultado}`);
})

it("Si hacemos sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) debería retornar false", function() {
let resultado = sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])
assert.deepEqual(resultado, false,`sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) debería retornar false pero fue ${resultado}`);
})