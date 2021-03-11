import {Handlebars} from "./dist/handlebars-v4.0.11";
import {getCookie} from "./dist/cookies";
import {getData} from "./dist/getData";
import {putDescription} from "./dist/question_desc";
import {addAnswerEventListeners} from "./dist/checkAnswers";
import {fillNav} from "./dist/questionNav";
import {active} from "./dist/questionNav";
import {changeQuestion} from "./dist/questionNav";
import {current} from "./dist/handlebars-v4.0.11";
import {getTemplateAjax} from "./dist/ajaxHandlebarsTemplate";

let flaggedQuestions = {}
import {flaggedQuestions} from "./dist/questions";
/**
 * fills handlebars template by getting the user data from the api and inserts into the user_list div
 *
 * @param HBTemplate the handlebars template
 */
function fillUserTable(HBTemplate: string) {
    let template: Function = Handlebars.compile(HBTemplate)
    let counter = 0;
    let cookie = getCookie('userEmail');
    getData(`user?email=${cookie}`)
        .then((data) => {getData(`question?test_id=${data.data.test_id}`)
            .then((result) => {
                let questionNoAssign = 1
                result.data.forEach((question) => {
                    question['questionOrderId'] = questionNoAssign
                    flaggedQuestions[question.questionOrderId] = false
                    document.querySelector("#questions").innerHTML += template(question)
                    questionNoAssign++
                })
            counter = result.data.length

            putDescription(counter)
            addAnswerEventListeners()
            fillNav()
            active()
            changeQuestion(current)
        })
    })
}

getTemplateAjax('js/templates/questions.hbs').then(function(HBTemplate) {
    fillUserTable(HBTemplate)
})

document.querySelector('#flag-checkbox').addEventListener('change', function() {
    let qid  = document.querySelector<HTMLElement>('#questions .question.active').dataset.questionOrderId
    flaggedQuestions[qid] = document.querySelector<HTMLInputElement>('#flag-checkbox').checked
})