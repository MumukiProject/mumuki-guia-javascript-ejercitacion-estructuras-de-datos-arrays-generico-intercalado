> Definí una función `obtenerChatStatus` que reciba como argumento un array de strings `usuarios` y devuelva un string con el status del chat. Las reglas son:
>
- Para un usuario, debe mostrar: `NOMBRE_USUARIO_1 está conectado`
- Para dos usuarios, debe mostrar: `NOMBRE_USUARIO_1 y NOMBRE_USUARIO_2 + están conectados`
- Para más de dos usuarios, debe mostrar: `NOMBRE_USUARIO_1, NOMBRE_USUARIO_2 y X persona(s) más están conectadas`
>
```javascript
ム obtenerChatStatus(['Ale'])
'Ale está conectado'
ム obtenerChatStatus(['Ale', 'Gaby'])
'Ale y Gaby están conectados'
ム obtenerChatStatus(['Ale', 'Gaby', 'Mar'])
'Ale, Gaby y 1 persona(s) más están conectadas'
```