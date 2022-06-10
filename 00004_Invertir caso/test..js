it("Si hacemos invertirCaso('jUAnA aZurDuY')  debería retornar 'JuaNa AzURdUy'", function() {
let resultado = invertirCaso('jUAnA aZurDuY') 
assert.equal(resultado, 'JuaNa AzURdUy',`invertirCaso('jUAnA aZurDuY')  debería retornar 'JuaNa AzURdUy' pero fue ${resultado}`);
})

it("Si hacemos invertirCaso('feliz cumple')  debería retornar 'FELIZ CUMPLE'", function() {
let resultado = invertirCaso('feliz cumple') 
assert.equal(resultado, 'FELIZ CUMPLE',`invertirCaso('feliz cumple')  debería retornar 'FELIZ CUMPLE' pero fue ${resultado}`);
})