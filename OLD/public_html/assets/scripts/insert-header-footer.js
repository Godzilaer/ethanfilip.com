fetch('/assets/html-modules/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response not ok: ' + response.statusText);
        }

        return response.text();
    })
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    })
    .catch(error => {
        console.error('Header fetch error:', error);
    });

fetch('/assets/html-modules/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response not ok: ' + response.statusText);
    }

    return response.text();
})
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');

    const copyrightText = doc.querySelector("#copyright");

    var originalYear = 2024;
    var currentYear = new Date().getFullYear();
    var year = currentYear == originalYear ? originalYear : originalYear + "-" + currentYear;


    copyrightText.innerHTML = `&copy; ${year} Ethan Filip. All rights reserved.`;
    
    //Insert before the first script tag in the body
    document.querySelector("body script").insertAdjacentHTML("beforebegin", doc.body.innerHTML);

    const footerLoadedEvent = new Event('footerLoaded');
    document.dispatchEvent(footerLoadedEvent);
})
.catch(error => {
    console.error('Footer fetch error:', error);
});