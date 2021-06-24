let allImages = document.querySelectorAll('.image');
let imageView = document.querySelector('.image-view');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let imageBox = document.querySelector('.image-box');
let images = document.querySelectorAll('.image');

let idList = [];
let i = 0;

function currentImageDisplay(i){
    for(i=0; i<idList.length; i++){
        //imageBox.style.background = `url("${idList[i]}.jpeg") center/cover no-repeat`;
       imageBox.innerHTML = 
       `<p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       <p>The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure</p>
       `
    }
}

imageView.addEventListener('click', function(){
    imageView.style.display = "none";
    imageBox.style.display = "none";
})

images.forEach(function(img, index){
    img.addEventListener('click', function(event){
        img = event.target.id;
        idList.push(img);
        console.log(idList);
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageDisplay(i);
    })
})


/*prevBtn.addEventListener('click', function(){
    if(i===0){
        i = allImages.length;
    }
    i--;
    newId = allImages[i].id;
    imageBox.style.background = `url("${newId}.jpeg") center/cover no-repeat`;
})

nextBtn.addEventListener('click', function(){
    if(i===2){
        i = -1;
    }
    i++;
    newId = allImages[i].id;
    imageBox.style.background = `url("${newId}.jpeg") center/cover no-repeat`;
})*/


