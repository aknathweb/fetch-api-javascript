const url = "https://jsonplaceholder.typicode.com/comments";
/* -------------Fetch Api using normal way start-------------- */

// The fetch(url) method -> 
//1. process of fetching a resource from a server.
//2. returns a Promise that resolves to a Response object.
//3. This response is a readable stream; যা আস্তে আস্তে আসে

//.then(response=>response.text()) or .then(response=>response.json())
//1. convert Response object to text or convert Response object to json
//2. returns a Promise that resolves to a actual data.

//.then(data=>console.log(data))
//1. After completion the covert process
//2. give the actual data

const loadData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then(data => console.log('Fetch Api using normal way', data))
        .catch((error) => console.log(error));
}
loadData(url);

/* -------------Fetch Api using normal way end-------------- */

/* ----Fetch Api using async and await syntax start ------- */
//1. fetch api asynchronous function
// await fetch(url)
//1. returns a Promise that resolves to a Response object.
//2. await for Response object Promise asynchronous process

// await response.text() or await response.json()
//1. convert Response object to text or convert Response object to json
//2. await for Response convert asynchronous process

//console.log(data);
//1. After completion give the actual data

const loadData_async_await = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetch Api using async and await syntax', data);
    } catch (error) {
        console.log(error);
    }
}
loadData_async_await(url);
        /* ----Fetch Api using async and await syntax end ------- */