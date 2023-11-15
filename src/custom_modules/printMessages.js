const printMessage = (function(){
    const alert = (a) => alert(a);
    const log = (a) => console.log(a)

    return {
        alert,
        log,
    }
})();

export {printMessage}