/**
 * deletes question from Test
 * @param {number} id the question id
 * @returns {Promise<*>} response from api
 */
import {sendData} from "./sendData";

async function deleteQuestion(id: number) {
    return await sendData(undefined, `/question/${id}/delete`);
}
export{
    deleteQuestion
}