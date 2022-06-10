> Definí una función `obtenerResultado` que tome por parámetros dos strings `jugadorA` y `jugadorB` con los nombres de cada jugador respectivamente, y dos arrays de numeros `puntajesA` y `puntajesB` de la misma longitud. La función debe devolver un string con el nombre del ganador o `Empate` en caso de que no haya ninguno. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos al jugador correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:
>
```javascript
const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]
>
// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate
>
// Resultado final: Gana Jugador B
```
> 
```javascript
ム obtenerResultado('Ale', 'Gaby', [4, 4, 4], [1, 2, 3])
'Ale'
ム obtenerResultado('Ale', 'Gaby', [3, 5, 5, 7], [4, 1, 2, 9])
'Empate'
ム obtenerResultado('Ale', 'Gaby', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])
'Gaby'
```