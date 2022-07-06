// This is for bug finding and console logging

onload.window.addEventListener('error', onError, true);
onload.window.addEventListener('abort', onAbort, true); 

function onAbort(event) {
  console.log('abort');
}

function onError(event) {
    if (event.target.error.name == "NotReadableError") {
        console.log('not readable');
    }
}