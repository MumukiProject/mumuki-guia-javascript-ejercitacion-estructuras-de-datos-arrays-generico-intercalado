> Definí una función `comer` que reciba como argumento un string que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:
>
```javascript
ム comer('🐰🥕🥬🥕🚫') 
''
ム comer('🥕🥬🐰🥕🥕🥕🚫')
'🥕🥬'
ム comer('🐰🥕🥬🥕🚫🥕') 
'🥕'
ム comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')
'🌱🥕🌱🌷'
```