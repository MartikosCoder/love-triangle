/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;

    for(counter = 0; counter < preferences.length; counter++){
        if(preferences[preferences[preferences[counter] - 1] - 1] - 1 === counter) {
            result++;
        }
    }

    return parseInt(result / 3);
};
