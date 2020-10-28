// Event listener which opens dialog box


function addNotesEventListeners() {
    document.querySelectorAll('.internal-notes-button').forEach((notesButton) => {
    notesButton.addEventListener('click', () => {
            let modal_content = document.querySelector("#modal-content");
        getTemplateAjax('js/templates/internalNotesModal.hbs').then(function (HBTemplate) {
            let template: Function = Handlebars.compile(HBTemplate);
            let html = template();
            modal_content.innerHTML += html
        })
            openDialog();
        });
    })
}