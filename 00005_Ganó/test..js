it("Si hacemos gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])  debería retornar false", function() {
let resultado = gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) 
assert.equal(resultado, false,`gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])  debería retornar false pero fue ${resultado}`);
})

it("Si hacemos gano(['💫', '💫', '💫', '💫', '💫']) debería retornar true", function(){
  let resultado = gano(['💫', '💫', '💫', '💫', '💫'])
  assert.equal(resultado, true, `gano(['💫', '💫', '💫', '💫', '💫']) debería retornar true pero fue ${resultado}`);
})
