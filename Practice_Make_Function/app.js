function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Bắt đầu";
    } else {
        result = "Quit";
    }
    return result;
}

let confirmAnswer = confirm("Bạn có muốn bắt đầu trò chơi?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);