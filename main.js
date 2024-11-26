const searchInput =document.getElementById('search-input')
const searchButton =document.getElementById('search-button')
const todoList =document.getElementById('todo-list')
const listContainer =document.getElementById('list-container')


searchButton.addEventListener('click', function (){
    if (searchInput.value==='') {
        alert(`Enter Task`);
    }
    else {
        // create li
        let li=document.createElement(`li`);
        li.className=`d-flex align-items-center`;

        // create span
        let span=document.createElement(`span`);
        span.className=`list-container d-flex align-items-center`;
        span.textContent=searchInput.value;

        // create edit button
        let editButton=document.createElement(`button`)
        editButton.type=`button`
        editButton.className=`btn btn-outline-success me-2 ms-2`;
        editButton.textContent=`Edit`


        // create delete button
        let deleteButton=document.createElement(`button`)
        deleteButton.type=`button`
        deleteButton.className=`btn btn-outline-danger me-2 ms-2`;
        deleteButton.textContent=`Delete`


        // edit button
        editButton.addEventListener('click',function () {
            let newtask=prompt(`Change Task: ${span.textContent}`)
            if(newtask!==null){
                span.textContent=newtask;
            }
        })

        // delete button
        deleteButton.addEventListener('click',function () {
            li.remove();
        })
        

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // append all in listcontainer
        listContainer.appendChild(li)
        
    }
    searchInput.value=''
    
});

console.log(2+3);