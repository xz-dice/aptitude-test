
// populate dropdown menu with available tests
import {sendData} from "./sendData";
import {jsonToFormData} from "./aptitudeTestHelpers";
import {populateHandlebars} from "./populateHandlebars";
import {getData} from "./getData";
import {sendQuestionForm} from "./sendQuestionForm";

populateHandlebars('#test_id', 'js/templates/testDropdown.hbs', 'test');

/**
 * Edit a question in the database
 * @param {string} id The question you want to edit
 * @param {object} newQuestionData The data you are changing
 * @returns {Promise<void>}
 */
async function editQuestion(id: number, newQuestionData: Object) {
    return await sendData(jsonToFormData(newQuestionData), `/question/${id}/edit`);
}

/**
 * Get a question from the database
 * @param {string} id The question you want to get
 * @returns {Promise<object>} the question data
 **/
async function getQuestionById(id: number) {
    const { data } = await getData(`/question/${id}`);
    return data;
}

/**
 * Get the answer of a specific question
 * @param {string} id The question you would like the answer of
 * @returns {Promise<string>} the answer number
 */
async function getAnswerByQuestionId(id: number) {
    const { data } = await getData(`/answer/${id}`);
    return data.answer;
}

(async () => {
    const form = document.querySelector<HTMLFormElement>("#edit-question");
    const questionId: number = location.hash.replace("#", "") as any as number;
    const question = await getQuestionById(questionId);
    const answer = await getAnswerByQuestionId(questionId);

    document.querySelector<HTMLInputElement>("#questionText").value = question.text;
    document.querySelector<HTMLInputElement>("#option1").value = question.option1;
    document.querySelector<HTMLInputElement>("#option2").value = question.option2;
    document.querySelector<HTMLInputElement>("#option3").value = question.option3;
    document.querySelector<HTMLInputElement>("#option4").value = question.option4;
    document.querySelector<HTMLInputElement>("#option5").value = question.option5;
    document.querySelector<HTMLInputElement>("#test_id").value = question.test_id;
    document.querySelector<HTMLInputElement>(`input[data-question-id="${answer}"]`).checked = true;

    form.addEventListener("submit", (event) => {
        sendQuestionForm(event, form, true, questionId);
    });
})();
export{
    editQuestion,
    getQuestionById,
    getAnswerByQuestionId
}