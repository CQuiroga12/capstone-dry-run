let allImages = document.querySelectorAll('.image');
let imageView = document.querySelector('.image-view');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let imageBox = document.querySelector('.image-box');
let images = document.querySelectorAll('.image');
let image = document.createElement("img");
//let para = document.createElement("p");

let idList = [];
let i = 0;

function displayPic(name){
    
    image.src = `${name}.jpeg`;
    image.classList.add('img1');
    return image;
}

let p0 ='The model regarding paragraph length that your teacher undoubtedly taught you involves a topic sentence, a number of facts that support that core idea, and a concluding sentence. The proviso about the number of sentences between the topic sentence and the conclusion was not given to you because it was the magic formula for creating paragraphs of the perfect length; rather, your educator was attempting to give you a good reason to do adequate research on your topic. Academic writing yields the best examples of the topic-support-conclusion paragraph structure';

let p1 = 'This is another paragraph that literally makes no sense whatsoever but I still add it in in order to see if the demo works and also I am very stressed out right now and I do not even know why I am doing this.';

let p2 = 'This is another paragraph. Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.'

tagDic = {'cat':p0, 'dog':p1, 'panda':p2};

function currentImageDisplay(i){
    for(i=0; i<idList.length; i++){
        //imageBox.style.background = `url("${idList[i]}.jpeg") center/cover no-repeat`;
       //imageBox.appendChild(displayPic(idList[i]));
       imageBox.innerHTML = 
       `<img src="${idList[i]}.jpeg" class="img1">
        <div class="content">${tagDic[idList[i]]}</div>`

    }
}

window.onclick = function(event){
    if(event.target === imageView){
        imageView.style.display = "none";

    }
}

/*imageView.addEventListener('click', function(){
    imageView.style.display = "none";
    //imageBox.style.display = "none";
    /*imageImage = document.querySelector('.img1');
    imageBox.parentNode.removeChild(imageImage);
    //imageBox.parentNode.removeChild(img);
})*/

images.forEach(function(img){
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


