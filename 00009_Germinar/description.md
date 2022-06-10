> Definí una función `germinar` que tome por parámetro un string de `plantines` con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:
>
```javascript
ム germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')
'🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
ム germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')
'🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
ム germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')
'🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
```