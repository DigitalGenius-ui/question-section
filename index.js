const article = document.querySelectorAll("article");

article.forEach(function(question){
    const btns = question.querySelector(".btn");
    btns.addEventListener('click', function(){

        article.forEach(function(item){
            if (item != question){
                item.classList.remove("open");
            }
        })

        question.classList.toggle("open");
    });
});

