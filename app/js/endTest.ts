import {finishTest} from "./dist/checkAnswers";

function pageLeaveAlert() {
    alert ('Beware, if you leave the page the test will end!')
}

function cancelTest() {
    if (document.visibilityState === "hidden") {
        console.log('cancel')
        let pageLeft: boolean = true
        finishTest(pageLeft)
    }
}

document.body.addEventListener("mouseleave", pageLeaveAlert);
document.addEventListener("visibilitychange", cancelTest);


export {
    pageLeaveAlert,
    cancelTest
}