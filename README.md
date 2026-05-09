# Chat Clone Project - UTN.BA 🚀

Este proyecto es el **Trabajo Final Integrador** para el curso de **Desarrollo en React JS** del Centro de e-Learning UTN BA .  El objetivo principal es demostrar el dominio de componentes, estados (hooks) y propiedades en React, construyendo un clon de una aplicación de mensajería funcional y responsive.

##  Objetivo de la Aplicación
 Desarrollar una interfaz de chat que permita gestionar múltiples conversaciones de forma independiente, aplicar estilos con CSS nativo y manejar la lógica de estados de React para simular una interacción real .

##  Funcionalidades
* **Gestión de Chats**: Panel lateral izquierdo para visualizar y seleccionar diferentes conversaciones .
* **Creación Dinámica**: Funcionalidad para agregar nuevos contactos o chats a la lista .
* **Historial Independiente**: Cada chat mantiene sus propios mensajes de forma aislada .
* **Respuestas Automáticas**: El sistema responde automáticamente tras un breve retraso al enviar un mensaje
* **Buscador**: Barra de búsqueda funcional para filtrar chats en la lista lateral
* **Diseño Responsive**: La interfaz se adapta a diferentes tamaños de pantalla utilizando CSS nativo

##  Tecnologías Utilizadas
*  **React JS**: Biblioteca principal para la construcción de la UI
*  **React Router**: Para la navegación entre la lista de contactos, chats individuales y formularios.
*  **CSS Nativo**: Estilos personalizados sin librerías externas, utilizando Flexbox o Grid
*  **Hooks**: Uso de `useState`, `useEffect`, `useMemo`, `useCallback` y `useContext` para la gestión de lógica y estado global.

##  Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone [https://github.com/fersilva362/utn-final-react.git](https://github.com/fersilva362/utn-final-react.git)
    cd utn-final-react
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar en modo desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Build para producción**:
    ```bash
    npm run build
    ```

##  Estructura del Proyecto
 El código está organizado siguiendo buenas prácticas de modularización:
* `/src/components`: Componentes reutilizables como `SentMessage`, `ReceivedMessage` y `MessageTile`.
* `/src/hooks`: Custom hooks (`useContactHook`, `useNewUserForm`) para separar la lógica de la interfaz de usuario.
* `/src/context`: Manejo del estado global de los contactos y conversaciones.
* `/src/styles`: Archivos `.css` para el diseño visual y responsive.

##  Despliegue
La aplicación se encuentra disponible en:  
 **[utn-final-react.vercel.app](https://utn-final-react.vercel.app/)** 


