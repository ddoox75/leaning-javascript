let windowId;

function openWindow() {
    let option;

    //Đang dùng trình duyệt gì ?
    let ua = navigator.userAgent;

    //Edge sử dụng Trident
    option = ua.indexOf("Trident") ?
        "Menubar=yes,toolbar=yes,width=100,height=100" :
        "Menubar=yes,toolbar=yes,width=150,height=150";

    windowId = window.open("http://google.com", "Tim kiem", option);
}

function closeWindow() {
    if (windowId) {
        windowId.close();
        alert("Cua so da duoc dong");
    } else {
        alert("Cua so chua duoc mo");
    }
}

function checkWindow() {
    if (windowId.closed) {
        alert("Cua so da duoc dong");
    } else {
        alert("Cua so dang duoc mo");
    }
}