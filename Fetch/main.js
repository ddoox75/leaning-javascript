// fetch("https://api.publicapis.org/entries")
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

fetch("https://api.nationalize.io/?name=nathaniel").then((response) => {
    let elements;

    response
        .json()
        .then((jsonData) => {
            console.log(jsonData.name);
            console.log(jsonData.country);

            // elements = jsonData.country.forEach((item) => {
            //     return `<li>${country.country_id}</li>`;
            // });
            elements = jsonData.country.map((item) => `<li>${item.probability}</li>`);
            // document.writeln(elements.join(""));
            document.writeln("<ol>" + elements.join("") + "</ol>");
        })
        .catch((err) => {
            console.log(err);
        });
});