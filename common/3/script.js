const path = "/users/download/index.html";

console.log(isHtml(path))

function isHtml(path) {
    return path.split('.')[1] === 'html';
}