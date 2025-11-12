# Landing Page - Superando la Ansiedad

## 📋 Descripción
Landing page moderna y persuasiva diseñada para vender el ebook "Superando la Ansiedad" con un diseño totalmente responsivo y optimizado para conversiones.

## 🎯 Características Implementadas

### ✅ Elementos de Conversión
- **Cronómetro diario**: Se reinicia automáticamente a medianoche para crear urgencia
- **Notificaciones flotantes**: Aparecen cada 20 segundos simulando compras recientes
- **Múltiples CTAs**: Botones estratégicamente ubicados que dirigen a Hotmart
- **Facebook Pixel**: Integrado para seguimiento de conversiones

### 📦 Productos Incluidos
1. **Ebook Principal**: "Superando la Ansiedad" - $7.99 USD
2. **Order Bump**: "Consejos para Deshacerse del Estrés" - $3.99 USD (60% descuento)
3. **Bono #1**: Técnicas para Redefinir la Mente (Valor: $29.99)
4. **Bono #2**: Los Secretos de la Pasión por Uno Mismo (Valor: $24.99)

### 🎨 Diseño
- **Colores calmantes**: Azules, verdes suaves y blancos
- **Tipografía profesional**: Poppins y Playfair Display
- **Totalmente responsivo**: Adaptado para móviles, tablets y desktop
- **Animaciones suaves**: Efectos de scroll y hover

### 📱 Secciones de la Página
1. **Header sticky**: Con logo y cronómetro visible siempre
2. **Hero section**: Titular impactante con CTA principal
3. **Producto principal**: Showcase del ebook con precio y descripción
4. **Beneficios**: 6 tarjetas destacando lo que aprenderán
5. **Bonos exclusivos**: Presentación visual de los 2 bonos gratis
6. **Order Bump**: Oferta especial del ebook complementario
7. **Testimonios**: 3 reseñas de clientes satisfechos
8. **CTA final**: Última oportunidad de conversión con garantía
9. **Footer**: Información legal y copyright

## 🚀 Cómo Usar

### Abrir la Página
1. Navega a la carpeta: `c:\Users\JohanyLaura\Documents\WEB\Ansiedad`
2. Haz doble clic en `index.html` para abrir en tu navegador

### Estructura de Archivos
```
Ansiedad/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño responsivo
├── script.js           # Funcionalidad (cronómetro, notificaciones)
├── README.md           # Este archivo
└── Imagenes/           # Carpeta con todas las imágenes
    ├── EBOOK PRINCIPAL.png
    ├── BONO 1.png
    ├── Bono 2.png
    └── ORDER BUMPS.png
```

## 🔗 Enlaces de Hotmart
Todos los botones "ACCEDER AHORA" dirigen a:
```
https://pay.hotmart.com/V102852043E?checkoutMode=10
```

## 📊 Seguimiento con Facebook Pixel
El pixel ID `1793778261275413` está configurado para rastrear:
- **PageView**: Cuando alguien visita la página
- **InitiateCheckout**: Cuando hacen clic en cualquier botón CTA

## 🎯 Optimizaciones Implementadas

### SEO y Performance
- Meta descripción optimizada
- Fuentes precargadas para mejor rendimiento
- Imágenes optimizadas con lazy loading implícito

### Conversión
- Múltiples puntos de conversión a lo largo de la página
- Urgencia con cronómetro diario
- Prueba social con notificaciones y testimonios
- Garantía de 7 días visible
- Precios con descuento destacados

### UX/UI
- Navegación fluida con scroll suave
- Animaciones sutiles que no distraen
- Contraste adecuado para legibilidad
- Espaciado generoso para facilitar lectura
- Botones grandes y fáciles de tocar en móviles

## 📱 Responsividad
La página se adapta perfectamente a:
- **Móviles**: < 768px
- **Tablets**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Paleta de Colores
- **Primario**: #4A90E2 (Azul calmante)
- **Secundario**: #67C4A7 (Verde suave)
- **Acento**: #F39C12 (Naranja para CTAs)
- **Éxito**: #27AE60 (Verde para precios)
- **Texto**: #34495E (Gris oscuro)

## ⚡ Funcionalidades JavaScript

### Cronómetro
- Se reinicia automáticamente cada día a medianoche
- Formato: HH:MM:SS
- Visible en el header sticky

### Notificaciones
- Primera notificación: 5 segundos después de cargar
- Siguientes: cada 20 segundos
- 20 nombres diferentes de países hispanohablantes
- Animación suave de entrada y salida

### Tracking
- Eventos de Facebook Pixel automáticos
- Seguimiento de clics en CTAs

## 🔧 Personalización

### Cambiar Precios
Edita en `index.html`:
- Línea 89-91: Precio del ebook principal
- Línea 217-220: Precio del order bump

### Modificar Cronómetro
Edita en `script.js`:
- Función `initCountdown()` para cambiar la lógica

### Ajustar Colores
Edita en `styles.css`:
- Variables CSS en `:root` (líneas 8-18)

## 📞 Soporte
Para cualquier modificación o pregunta sobre la landing page, revisa los comentarios en el código fuente.

## ✨ Notas Importantes
- **NUNCA** usar la palabra "descargar" - siempre "ACCEDER"
- Mantener el tono motivador y empático
- Enfocarse en la transformación, no solo en el producto
- Las imágenes deben estar en la carpeta `Imagenes/`

---

**Creado con**: HTML5, CSS3, JavaScript Vanilla
**Optimizado para**: Conversiones y experiencia de usuario
**Compatible con**: Todos los navegadores modernos
