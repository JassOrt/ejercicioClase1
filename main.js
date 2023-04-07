if('serviceWorker' in navigator){
    console.log("Puedes usar el service worker");
    // Configuracion del sw 
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('SW cargado correctamente', res))
                            .catch(err => console.log('serviceWorker no se ha podido registrar', err));
}
else
{
    console.log("No se puede usar el service worker")
}