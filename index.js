let myLeads = []

const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const warning = document.getElementById('warning-msg')

const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push({ url: tabs[0].url, tags: [] })
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    if (inputEl.value) {
        if (inputEl.value.includes(" ")) {
            warning.textContent = "Please remove the spaces from the input"
        } else {
            myLeads.push({ url: "https://" + inputEl.value, tags: [] })
            inputEl.value = ""
            warning.textContent = ""
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        }
    } else {
        warning.textContent = "Please enter some input in the input field"
    }
})

function delSingle(i) {
    myLeads.splice(i, 1)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function addTag(index) {
    const tagInput = document.querySelector(`#tag-input-${index}`).value
    if (tagInput) {
        myLeads[index].tags.push(tagInput)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
}


function delTag(index , tagIndex) {
    myLeads[index].tags.splice(tagIndex, 1)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
}

function render(myLeads) {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li class="list-items">
                <h4>${i+1})</h4>
                <a target='_blank' href='${myLeads[i].url}'>
                    ${myLeads[i].url}
                </a>
                <button id='single-del-button' onClick="delSingle(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>

                <div class="tag-div">
                    <input id="tag-input-${i}" class="tag-input" placeholder="Enter tags" />
                    <button class="tag-button" onClick="addTag(${i})">TAG</button>
                </div>
            </li>
            <div class="tags-container">
                    ${myLeads[i].tags.map(tag => `<span class="tag">${tag}
                        <button id='single-del-button' onClick="delTag(${i},${myLeads[i].tags[tag]})"> <i class="fa-solid fa-trash"></i> </button></span>`).join(' ')}
            </div>
        `
    }
    ulEl.innerHTML = listItems
}
