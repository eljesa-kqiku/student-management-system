export function saveToLocalStorage(key, val) {
    localStorage.setItem(key, val);
}

export function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}