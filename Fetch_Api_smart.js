/* Fetch Api main function  */
const loadData_async_await_smart = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error message: ", error);
    }
};

/* Fetch Api main function use different purpose start */
//   first purpose
const showData_async_await_smart1 = async () => {
    //await for collect asynchronous data
    const result = await loadData_async_await_smart("https://randomuser.me/api/");
    console.log("Smart way use first result", result);
};
showData_async_await_smart1();

//   second purpose
const showData_async_await_smart2 = async () => {
    //await for collect asynchronous data
    const result = await loadData_async_await_smart("https://randomuser.me/api/");
    console.log("Smart way use second result", result);
};
showData_async_await_smart2();
/* Fetch Api main function use different purpose end */

/* dynamic load data normal fetch api start */
// const showData = (url) => fetch(url).then((res) => res.json());

// showData("https://randomuser.me/api/").then((data) => console.log(data));
/* dynamic load data normal fetch api end */