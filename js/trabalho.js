
let users = [];

window.addEventListener("load", () => {
    console.log("page loaded...");

    let searchValue = document.querySelector("#search").value;
    // console.log(`${searchValue}`);

    queryUsers(searchValue);

})

//Arrow function using async/await
queryUsers = async (searchValue) => {
    let res = await fetch('https://randomuser.me/api/?seed=javascript&results=250&nat=EN&noinfo');
    let json = await res.json();
    users = json;

    console.log("users: ", users);
}