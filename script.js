// When the user submits a comment into the text box create a div with two p tags within it that appends their comment onto the page.  

//store variables
//form
const form = document.querySelector('form');
console.log(form);
const textComment = document.querySelector('textarea').value;
const userName = document.getElementById('name').value;
const userEmail = document.getElementById('emailAddress').value;
//Append new comment content created by event listener to below:
const commentSection = document.querySelector('.commentsGrid');

//comment

form.addEventListener('submit', function (event) {
    console.log(event);
    event.preventDefault();

    if (textComment !== "" || userName !== "" || userEmail !=="") {

        const newUserImg = document.createElement('div');
        newUserImg.classList.add('userCommentJulia');
        console.log(newUserImg.classList);
        
        const newComment = document.createElement('div');
        newComment.classList.add('commentTextBox');
        console.log(newComment.classList);

        newComment.innerHTML = 
        `<p>${textComment}</p>
        <p>${userName}</p>`;
        
        commentSection.appendChild(newComment);
    }
});