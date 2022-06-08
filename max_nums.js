// start coding your function here!
function find_max(arr) {
    var max = arr[0];

    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
}
exports.find_max = find_max;