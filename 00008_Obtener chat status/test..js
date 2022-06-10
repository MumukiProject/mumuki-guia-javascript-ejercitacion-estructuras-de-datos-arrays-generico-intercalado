it("Si hacemos obtenerChatStatus(['Ale'])  debería retornar 'Ale está conectado' ", function() {
let resultado = obtenerChatStatus(['Ale'])
assert.deepEqual(resultado,'Ale está conectado' ,`obtenerChatStatus(['Ale'])  debería retornar 'Ale está conectado' pero fue ${resultado}`);
})

it("Si hacemos obtenerChatStatus(['Ale', 'Gaby'])  debería retornar 'Ale y Gaby están conectados' ", function() {
let resultado = obtenerChatStatus(['Ale', 'Gaby'])
assert.deepEqual(resultado,'Ale y Gaby están conectados' ,`obtenerChatStatus(['Ale', 'Gaby'])  debería retornar 'Ale y Gaby están conectados' pero fue ${resultado}`);
})

it("Si hacemos obtenerChatStatus(['Ale', 'Gaby', 'Mar'])  debería retornar 'Ale, Gaby y 1 persona(s) más están conectadas' ", function() {
let resultado = obtenerChatStatus(['Ale', 'Gaby', 'Mar'])
assert.deepEqual(resultado,'Ale, Gaby y 1 persona(s) más están conectadas' ,`obtenerChatStatus(['Ale', 'Gaby', 'Mar'])  debería retornar 'Ale, Gaby y 1 persona(s) más están conectadas' pero fue ${resultado}`);
})
