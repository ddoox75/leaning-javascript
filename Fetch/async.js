// fetch("https://reactnative.dev/movies.json")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
const fetchData = async() => {
    const response = await fetch("https://reactnative.dev/movies.json");

    const data = await response.json();

    console.log("Data", data);
};
fetchData();