import {getData} from "./getData";

async function getTestDuration(test_id: number): Promise<number> {
    let test_fetch_result = await getData('test');
    let all_test_data = test_fetch_result.data;
    let selected_test_data = all_test_data[test_id - 1];

    return selected_test_data.time;
}
export{
    getTestDuration
}