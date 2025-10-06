let myLeads=[]

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTabBtn = document.getElementById("tab-btn")
const deleteAllBtn = document.getElementById("delete-btn")
const errMsg = document.getElementById("err-msg")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    save(inputEl.value)
})

saveTabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        save(tabs[0].url)
    })
})

function save(input){
    if(!myLeads.includes(input)){
        myLeads.push(input)
        inputEl.value=""
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    }else if(input==""){
        displayErrorMsg("please enter the Lead")
    }else{
        displayErrorMsg("Lead is already present")
        inputEl.value=""
    }
}

function displayErrorMsg(msg){
    errMsg.textContent=msg
    setTimeout(function(){
        errMsg.innerText=""
    },1000)
}
function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        
        // ulEl.innerHTML+="<li><a target='_blank' href='" + inputEl.value +"'>"+inputEl.value+"</a></li>"
        
        listItems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML=listItems
}



deleteAllBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})