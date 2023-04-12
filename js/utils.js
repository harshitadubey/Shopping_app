function getDataFromLocalStorageByName(name) {
    let data = JSON.parse(localStorage.getItem(name));
    return data;
}
function setDataFromLocalStorageByName(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}