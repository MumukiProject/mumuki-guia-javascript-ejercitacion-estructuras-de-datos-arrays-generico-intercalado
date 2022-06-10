it("Si hacemos sumarCaracteres(['hola', 'qué', 'tal', 'cómo', 'estás']) debería retornar 19", function() {
let resultado = sumarCaracteres(["hola", "qué", "tal", "cómo", "estás"])
assert.equal(resultado, 19,`sumarCaracteres(["hola", "qué", "tal", "cómo", "estás"]) debería retornar 19 pero fue ${resultado}`);
})

it("Si hacemos sumarCaracteres(['hola', 'vamos', 'a', 'programar', 'un', 'poco']) debería retornar 25", function() {
let resultado = sumarCaracteres(["hola", "vamos", "a", "programar", "un", "poco"])
assert.equal(resultado, 25,`sumarCaracteres(["hola", "vamos", "a", "programar", "un", "poco"]) debería retornar 25 pero fue ${resultado}`);
})