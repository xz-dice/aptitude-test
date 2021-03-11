import {BaseUser} from "./interfaces/User";
import {searchByTextAndEmail} from "./searchFunction";
import {percentageFilter} from "./filterFunctions";
import {testAllocatedFilter} from "./filterFunctions";
import {categoryFilter} from "./filterFunctions";

/**
 * takes an array of objects- reduces the number of objects in the array based on search criteria, date criteria,
 * and score functions. The final array of results is then put into an object so it can be passed to the handlebars
 * function and output to the front-end.
 *
 * @param resultArray an array full of objects of testee's info and scores
 * @return returns filtered array.
 */
function searchAndFilter(resultArray: Array<BaseUser>) {
    resultArray = searchByTextAndEmail(resultArray);
    resultArray = percentageFilter(resultArray);
    resultArray = dateFilter(resultArray);
    resultArray = testAllocatedFilter(resultArray);
    resultArray = categoryFilter(resultArray);
    return resultArray;
}

export{
    searchAndFilter
}