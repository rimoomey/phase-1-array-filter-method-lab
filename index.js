// Code your solution here
function findMatching(collection, target) {
    return collection.filter((element) => element.toUpperCase() == target.toUpperCase());
}

function fuzzyMatch(collection, letters) {
    return collection.filter((el) => letters === el.slice(0, letters.length));
}

function matchName(collection, name) {
    return collection.filter((el) => el.name === name);
}