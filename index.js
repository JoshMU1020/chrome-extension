const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-Btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(arr) {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a href="${arr[i]}" target="_blank">
                ${arr[i]}
            </a>
        </il>`;
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0].url;
        myLeads.push(activeTab);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})