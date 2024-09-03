const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    ulEl.textContent = "";
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </il>`;
    }
    ulEl.innerHTML = listItems;
}