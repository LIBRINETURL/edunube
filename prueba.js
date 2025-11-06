/**
 * Función JavaScript pura para abrir la página de inicio de Google.
 * * NOTA IMPORTANTE: Para que esta función se ejecute correctamente y no sea 
 * bloqueada por el navegador, DEBE ser llamada por una acción directa del 
 * usuario (ej: un evento 'onclick' de un botón en un archivo HTML).
 */
function abrirGoogle() {
    const url = 'https://www.google.com';
    const windowName = '_blank'; // Parámetro para forzar la apertura en una nueva pestaña

    try {
        const newWindow = window.open(url, windowName);

        if (!newWindow) {
            // Si window.open devuelve null o false, significa que el navegador 
            // probablemente bloqueó la ventana emergente.
            console.error('El navegador bloqueó la ventana emergente. Asegúrese de que la función se ejecuta con una interacción directa del usuario.');
        } else {
            // Opcional: enfocar la nueva ventana si se abre correctamente
            newWindow.focus();
            console.log(`Pestaña abierta exitosamente a: ${url}`);
        }
    } catch (error) {
        // Manejo de errores de ejecución
        console.error('Ocurrió un error al intentar abrir la pestaña:', error);
    }
}

// Ejemplo de cómo se llamaría esta función en la consola del navegador:
// abrirGoogle();

// Si quieres que el script se ejecute inmediatamente al cargar (lo cual 
// es propenso al bloqueo), descomenta la siguiente línea:
// abrirGoogle();
