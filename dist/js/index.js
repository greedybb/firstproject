window.addEventListener('load', function(){
    Grade(document.querySelectorAll('.lb-bgc'))
})


let currentIndex = 0;
let titles = document.querySelectorAll('.like-lb>.titles>li');
let images = document.querySelectorAll('.like-lb>.images>li')
titles.forEach((title,index)=>{
    title.onmouseover = function(){
        titles[currentIndex].className = ''
        images[currentIndex].className = ''
        title.className = 'current'
        images[index].className = 'current'
        currentIndex = index
    }
})