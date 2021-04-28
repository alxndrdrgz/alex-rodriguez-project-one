// When the user submits a comment into the text box create a div with two p tags within it that appends their comment onto the page.  

const app = {};

app.addComment = function () {
    app.form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        if (app.textComment !== "" || app.userName !== "" || app.userEmail !=="") {
    
            const newUserImg = document.createElement('div');
            newUserImg.classList.add('userComment');
            newUserImg.innerHTML = `<img src="assets/comment-2.jpg" alt="thumbnail photo of the user who commented on post">`;
    
            const newComment = document.createElement('div');
            newComment.classList.add('commentTextBox');
        
    
            newComment.innerHTML = 
            `<p>${app.textComment}</p>
            <p>${app.userName}</p>`;
            
            app.commentSection.appendChild(newUserImg);
            app.commentSection.appendChild(newComment);
        }
    });
}

app.init = function () {
    app.form = document.querySelector('form');
    app.textComment = document.querySelector('textarea').value;
    app.userName = document.getElementById('name').value;
    app.userEmail = document.getElementById('emailAddress').value;
    //Append new comment content created by event listener to below:
    app.commentSection = document.querySelector('.commentsGrid');

    app.addComment();
}

app.init();

