> Definí una función `jugarPiedraPapelTijeras` que reciba como argumentos dos strings `jugadorA` y `jugadorB` con los nombres de cada jugador respectivamente, y dos arrays de strings `jugadasA` y `jugadasB` con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre del ganador o `Empate` en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos al jugador correspondiente. Por ejemplo:
>
```javascript
const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']
>
// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate
>
// Resultado final: Empate
```
>
```javascript
ム jugarPiedraPapelTijeras('Ale', 'Gaby', ['tijera'], ['piedra']) 
'Gaby'
>
ム jugarPiedraPapelTijeras('Ale', 'Gaby', ['papel'], ['papel']) 
'Empate'
>
ム jugarPiedraPapelTijeras('Ale','Gaby',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
)
'Ale'
```