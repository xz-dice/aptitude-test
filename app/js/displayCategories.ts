import {populateHandlebars} from "./populateHandlebars";
import {deleteCategory} from "./deleteCategory";
import {populateNewUserCategoryDropdown, populateTableCategoryDropdown} from "./populateCategoryDropdown";
import{updateScoreTable} from "./handlebarsScoreTable";

function populateCategories() {
    document.querySelector('#categoriesContainer').innerHTML = '';
    populateHandlebars('#categoriesContainer', 'js/templates/categoryItem.hbs', 'category')
        .then(() => {
            document.querySelectorAll('.deleteCategory').forEach((button: HTMLElement) => {
                button.addEventListener('click', async(clickedBtn: MouseEvent) => {
                    const button = clickedBtn.target as HTMLButtonElement
                    const id = parseInt(button.dataset.id);
                    let response = await deleteCategory(id);
                    if (response) {
                        document.querySelector('#categoriesContainer').innerHTML = '';
                        populateCategories();
                        populateTableCategoryDropdown();
                        populateNewUserCategoryDropdown();
                        updateScoreTable();
                    }
                })
            })
        })
}

populateCategories();

export{
    populateCategories
}