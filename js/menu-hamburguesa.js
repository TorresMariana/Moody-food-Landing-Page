//MENU HAMBURGUESA
let menuCheckbox = document.getElementById('menu-hamburguesa');
let logo = document.querySelector('.header__logo');

function menuHamburguesa() {
    //abre o cierra el menú
    menuCheckbox.checked = !menuCheckbox.checked;

    // Si el checkbox está marcado (menú abierto), cambiar color y z-index del logo
    if (menuCheckbox.checked) {
        logo.style.color = 'var(--color-primario)';
        logo.style.zIndex = 3;
        logo.style.transition = 'all .5s';
    } else {
        logo.style.color = 'var(--color-secundario)';
        logo.style.zIndex = '';  
    }
}

function cerrarmenuHamburguesa() {
    // Establecer el checkbox como falso para cerrar el menú
    menuCheckbox.checked = false;

    // Restaurar el color del logo cuando el menú se cierra
    logo.style.color = 'var(--color-secundario)';
    logo.style.zIndex = '';
}