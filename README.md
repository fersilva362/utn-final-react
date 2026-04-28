# Chat Clone Project - UTN.BA 
Este proyecto es el Trabajo Final Integrador para el curso de Desarrollo en React JS del Centro de e-Learning UTN BA.
El objetivo principal es demostrar el dominio de componentes, estados (hooks) y propiedades en React, construyendo un clon de una aplicación de mensajería funcional y responsive.  
Objetivo de la AplicaciónDesarrollar una interfaz de chat que permita gestionar múltiples conversaciones de forma independiente, aplicar estilos con CSS nativo y manejar la lógica de estados de React para simular una interacción real. 
## FuncionalidadesGestión de Chats: 
Panel lateral izquierdo para visualizar y seleccionar diferentes conversaciones.  
Creación Dinámica: Funcionalidad para agregar nuevos contactos/chats a la lista.  
Historial Independiente: Cada chat mantiene sus propios mensajes de forma aislada.  
Respuestas Automáticas: El sistema responde automáticamente tras un breve retraso al enviar un mensaje.  
Buscador : Barra de búsqueda funcional para filtrar chats en la lista lateral.  
Diseño Responsive: La interfaz se adapta a diferentes tamaños de pantalla utilizando CSS nativo. 
Tecnologías UtilizadasReact JS: Biblioteca principal para la construcción de la UI. 
React Router: Para la navegación entre chats y formularios.
CSS Nativo: Estilos personalizados sin librerías externas, utilizando Flexbox/Grid. 
Hooks: Uso de useState, useEffect, useMemo, useCallback y useContext para la gestión de lógica y estado global. 
## Instalación y Uso 
Clonar el repositorio:
git clone https://github.com/fersilva362/utn-final-react.git
cd utn-final-react

Instalar dependencias: 
npm install 
Ejecutar en modo desarrollo:
npm run dev
Build para producción:
npm run build
### Estructura del Proyecto
El código está organizado siguiendo buenas prácticas de modularización:  /src/components: Componentes reutilizables como SentMessage, ReceivedMessage, MessageTile./src/hooks: Custom hooks (useContactHook, useNewUserForm) para separar la lógica de la UI.  /src/context: Manejo del estado global de los contactos./src/styles: Archivos .css para el diseño visual.  🌐 DespliegueLa aplicación se encuentra disponible en vivo en:
link to despliegue en vercel: https://utn-final-react.vercel.app/
