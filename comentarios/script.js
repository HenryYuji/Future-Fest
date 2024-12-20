document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form')
    const commentInput = document.getElementById('comment-input')
    const commentsList = document.getElementById('comments-list')
    let editIndex = -1;
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value;
        if (commentText) {
            if (editIndex === -1) {
                const li = createCommentElement(commentText)
                commentsList.appendChild(li)
            } else {
                commentsList.children[editIndex].firstChild.textContent = commentText;
                editIndex = -1; 
            }
            commentInput.value = '';
        }
    })
    function createCommentElement(text) {
        const li = document.createElement('li')
        li.textContent = text;
        const editButton = document.createElement('button')
        editButton.textContent = 'Editar';
        editButton.classList.add('btn', 'edit-btn')
        editButton.onclick = function() {
            commentInput.value = text;
            editIndex = Array.from(commentsList.children).indexOf(li)
        }
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('btn', 'delete-btn')
        deleteButton.onclick = function() {
            commentsList.removeChild(li)
        }
        li.appendChild(editButton)
        li.appendChild(deleteButton)
        
        return li;
    }
})