const subirAInicio = (() => {

    let button = document.getElementById("boton-subir");
    window.onscroll = () => {
        button.classList[
            (document.documentElement.scrollTop > 200) ? "add" : "remove"
        ]("is-visible")
    }
    button.onclick = () => {
        window.scrollTo({
        top:0, behavior:"smooth"
        })
    }
})();