// Luot choi
let turn = true;
// Dem so lan click, để kết thúc
let clickedCount = 0;

play = (btn) => {
    btn.innerText = turn ? "X" : "O"; //click đầu tiên sẽ thay đổi text của button = X
    btn.classList.add(turn ? "xbtn" : "obtn"); // thêm class name
    btn.setAttribute("disabled", "disabled"); // vô hiệu hóa button

    turn = !turn; // Đảo giá trị của turn khi click
    clickedCount++;
    if (clickedCount == 16) alert("Finish");
};

function reset() {
    if (!confirm("Reset game ?")) return;

    let btns = document.getElementsByClassName("btn");

    for (const element of btns) {
        element.innerText = "";
        element.classList.remove("xbtn");
        element.classList.remove("obtn");
        element.removeAttribute("disabled");
    }
    turn = true;
    clickedCount = 0;
}