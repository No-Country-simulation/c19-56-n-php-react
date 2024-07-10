 **Modelo Blog**
   - `title`: El título del blog.
   - `description`: Descripción o contenido principal del blog.
   - `image`: Ruta de la imagen destacada del blog.
   - `status`: Estado del blog (por ejemplo, publicado, borrador, archivado).
   - `user_id`: ID del usuario que creó el blog.
   - `category_id`: ID de la categoría a la que pertenece el blog.
   - `slug`: Slug URL del blog, utilizado para crear una URL amigable.
   - `meta_title`: Título meta del blog para SEO.
   - `meta_description`: Descripción meta del blog para SEO.
   - `meta_keywords`: Palabras clave meta para SEO del blog.

2. **Modelo Contact**
   - `name`: Nombre de la persona que contacta.
   - `email`: Dirección de correo electrónico de la persona que contacta.
   - `phone`: Número de teléfono de la persona que contacta.
   - `message`: Mensaje proporcionado por la persona que contacta.
   - `direccion`: Dirección física proporcionada por la persona que contacta.
   - `status`: Estado del contacto (por ejemplo, nuevo, en proceso, resuelto).

3. **Modelo Donation**
   - `user_id`: ID del usuario que realiza la donación.
   - `amount`: Cantidad donada.
   - `status`: Estado de la donación (por ejemplo, pendiente, completada, cancelada).
   - `observations`: Observaciones adicionales sobre la donación.

4. **Modelo EducationAndResource**
   - `name`: Nombre del recurso o material educativo.
   - `description`: Descripción detallada del recurso o material.
   - `url`: URL donde se puede acceder al recurso o material.
   - `status`: Estado del recurso (por ejemplo, activo, inactivo).

5. **Modelo History**
   - `name`: Nombre del historial o evento registrado.
   - `description`: Descripción detallada del historial o evento.
   - `url`: URL relacionada con el historial o evento, si aplica.
   - `status`: Estado del historial o evento (por ejemplo, activo, inactivo).
   - `pet_id`: ID de la mascota asociada al historial o evento.
   - `user_id`: ID del usuario relacionado con el historial o evento.

6. **Modelo NeedPet**
   - `name`: Nombre de la necesidad específica de la mascota.
   - `description`: Descripción detallada de la necesidad.
   - `status`: Estado de la necesidad (por ejemplo, pendiente, resuelta).
   - `pet_id`: ID de la mascota asociada a la necesidad.
   - `user_id`: ID del usuario que reporta o atiende la necesidad.

7. **Modelo Pet**
   - `name`: Nombre de la mascota.
   - `race_id`: ID de la raza de la mascota.
   - `size`: Tamaño de la mascota (por ejemplo, pequeño, mediano, grande).
   - `weight`: Peso de la mascota.
   - `age`: Edad de la mascota.
   - `personality`: Descripción de la personalidad de la mascota.
   - `image`: Ruta de la imagen de la mascota.
   - `status`: Estado de la mascota (por ejemplo, disponible para adopción, adoptado).

8. **Modelo Sponsorship**
   - `pet_id`: ID de la mascota que recibe el patrocinio.
   - `user_id`: ID del usuario que proporciona el patrocinio.
   - `amount`: Cantidad de dinero del patrocinio.
   - `observations`: Observaciones adicionales sobre el patrocinio.
   - `status`: Estado del patrocinio (por ejemplo, activo, completado, cancelado).
   - `date_start`: Fecha de inicio del patrocinio.
   - `date_end`: Fecha de finalización del patrocinio.

9. **Modelo Volunteering**
   - `user_id`: ID del usuario que crea la tarea de voluntariado.
   - `name`: Nombre de la oportunidad de voluntariado.
   - `description`: Descripción detallada de la actividad de voluntariado.
   - `status`: Estado de la oportunidad de voluntariado (por ejemplo, disponible, completado).
   - `date_start`: Fecha de inicio de la actividad de voluntariado.
   - `date_end`: Fecha de finalización de la actividad de voluntariado.
   - `observations`: Observaciones adicionales sobre la actividad de voluntariado.
   - `locations`: Ubicaciones asociadas a la actividad de voluntariado.

10. **Modelo VolunteerRegistration**
    - `volunteering_id`: ID de la actividad de voluntariado a la que se registra el voluntario.
    - `volunteer_user_id`: ID del usuario que se registra como voluntario.
    - `role`: Rol o función que el voluntario desempeñará en la actividad.
    - `status`: Estado del registro del voluntario (por ejemplo, pendiente, aprobado, completado).
    - `observations`: Observaciones adicionales sobre el registro o la participación del voluntario.
    - `hours_committed`: Horas a las que el voluntario se compromete.
    - `hours_completed`: Horas efectivamente completadas por el voluntario.