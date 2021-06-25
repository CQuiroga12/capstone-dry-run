let eventList = document.querySelector(".eventlist");
let getButton = document.querySelector("#get");
let curDisplay = "";
let nameDic = {};
let adressDic = {};
let urlDic = {};
let nextLink = "";
let prevLink = "";

getButton.addEventListener("click", getEvents);

const rootURL = "https://app.ticketmaster.com/discovery/v2/events.json";
const apiKey = "XnebbPSaGKwLi0abLTq9arXjgmAMtwdL";
const consumerSecret = "xLwMgGZw41CqhKja";
const eventdate_from = "2021-07-02T23:00:00Z";
const eventdate_to = "2021-07-04T23:00:00Z";

const getButtong = document.querySelector("#get");
getButton.addEventListener("click", getEvents);

let sizeInput = document.querySelector("#size");
let stateInput = document.querySelector("#state");

function getEvents() {
  clearImages();
  console.log("Getting Events");
  let queryString = `${rootURL}?size=${sizeInput.value}&startDateTime=${eventdate_from}&endDateTime=${eventdate_to}&stateCode=${stateInput.value}&apikey=${apiKey}`;
  console.log(queryString);

  axios.get(queryString).then((responce) => {
    console.log(responce);
    // nextLink = responce.data._links.next.href;
    // if (document.querySelector("#next-button") === null) {
    //   addNext(responce);
    // }
    let events = responce.data._embedded.events;
    filterData(events);
  });
}

function filterData(events) {
  let data = [];
  let names = [];

  for (i = 0; i < events.length; i++) {
    if (!names.includes(events[i].name)) {
      let incomingData = {
        index: "id#" + i,
        name: events[i].name,
        image: events[i].images[0].url,
        adress:
          events[i]._embedded.venues[0].address.line1 +
          " " +
          events[i]._embedded.venues[0].city.name,
        url: events[i].url,
      };
      data.push(incomingData);
    }
  }
  console.log(data);
  loadImages(data);
}

function loadImages(data) {
  let container = document.querySelector(".container");
  for (i = 0; i < data.length; i++) {
    let nestedContainer = document.createElement("div");
    nestedContainer.classList.add("image-container", "gallery");
    let img = document.createElement("img");
    img.src = data[i].image;
    img.classList.add("image");
    container.appendChild(nestedContainer);
    nestedContainer.appendChild(img);
    img.id = data[i].index;
    nameDic[img.id] = data[i].name;
    adressDic[img.id] = data[i].adress;
    urlDic[img.id] = data[i].url;
  }

  let images = document.querySelectorAll(".image");
  console.log(images);
  let imageView = document.querySelector(".image-view");
  let imageBox = document.querySelector(".image-box");
  images.forEach(function (img) {
    img.addEventListener("click", function (event) {
      curDisplay = event.target.src;
      curId = event.target.id;
      imageView.style.display = "block";
      imageBox.style.display = "block";
      currentImageDisplay(i);
    });
  });
}

window.onclick = function (event) {
  let imageView = document.querySelector(".image-view");
  if (event.target === imageView) {
    imageView.style.display = "none";
  }
};

function currentImageDisplay(i) {
  console.log(curDisplay);
  let imageBox = document.querySelector(".image-box");
  //imageBox.style.background = `url("${idList[i]}.jpeg") center/cover no-repeat`;
  //imageBox.appendChild(displayPic(idList[i]));
  imageBox.innerHTML = `<img src="${curDisplay}" class="img1">
        <div class="content">${nameDic[curId]}</div>
        <div class="content">${adressDic[curId]}</div>
        <div class="content"><a href="${urlDic[curId]}" target="_blank">${urlDic[curId]}</a></div>`;
}

function addNext(events) {
  let nextValue = events.data._links.next;
  var nextButton = document.createElement("button");
  nextButton.addEventListener("click", loadNextPage);
  nextButton.innerHTML = "Next Page";
  nextButton.classList.add("buttons");
  nextButton.id = "next-button";
  getButton.insertAdjacentElement("afterend", nextButton);
}

function loadNextPage() {
  clearImages();
  axios
    .get(`https://app.ticketmaster.com${nextLink}&apikey=${apiKey}"`)
    .then((responce) => {
      let events = responce.data._embedded.events;
      filterData(events);
    });
}

function clearImages() {
  let allImages = document.querySelectorAll(".image-container");
  for (i = 0; i < allImages.length; i++) {
    allImages[i].parentElement.removeChild(allImages[i]);
  }
  tagDic = {};
}
