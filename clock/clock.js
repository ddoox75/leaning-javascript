display = () => {
    const now = new Date();

    const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    document.writeln("<h1>" + timeString + "</h1>");
    setTimeout(location.reload(), 1000);
};

// refresh = () => {
//     location.reload();
// };
display();