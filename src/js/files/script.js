
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        
        const subMenu = document.querySelector(`[data-subcatalog="${subMenuId}"]`);

        const catalogMenu = document.querySelector('.low-header');

        if (subMenu){
            catalogMenu.classList.toggle('_sub-catalog-show');
            targetElement.classList.toggle('_sub-catalog-active');
            subMenu.classList.toggle('_sub-catalog-open');;
        } else{
          console.log('Ой, что-то пошло не так')
        }
        e.preventDefault();
    }
}





