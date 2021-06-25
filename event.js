let getButton = document.querySelector("#get");
getButton.addEventListener("click", getEvents);

const rootURL = "https://app.ticketmaster.com/discovery/v2/events.json";
const apiKey = "XnebbPSaGKwLi0abLTq9arXjgmAMtwdL";
const consumerSecret = "xLwMgGZw41CqhKja";
const size = 100;
const eventdate_from = "2021-07-03T23:00:00Z";
const eventdate_to = "2021-07-04T23:00:00Z";

const getButtong = document.querySelector("#get");
getButton.addEventListener("click", getEvents);

function getEvents() {
  console.log("Getting Events");
  let queryString = `${rootURL}?size=${size}&startDateTime=${eventdate_from}&endDateTime=${eventdate_to}&apikey=${apiKey}`;
  console.log(queryString);

  axios.get(queryString).then((responce) => {
    let events = responce.data._embedded.events;
    filterData(events);
  });
}

function filterData(events) {
  let data = [];
  let indexes = [];
  let names = [];
  let images = [];
  let adresses = [];
  for (i = 0; i < events.length; i++) {
    if (!names.includes(events[i].name)) {
      let incomingData = {
        index: i,
        name: events[i].name,
        image: events[i].images[0].url,
        adress:
          events[i]._embedded.venues[0].address.line1 +
          " " +
          events[i]._embedded.venues[0].city.name,
      };
      data.push(incomingData);
      //   indexes.push(i);
      //   names.push(events[i].name);
      //   images.push(events[i].images[0]);
      //   adresses.push(events[i]._embedded.venues[0].address);
    }
  }
  console.log(data);
  //   console.log("Indexes: ", indexes);
  //   console.log("Names: ", names);
  //   console.log("Images: ", images);
  //   console.log("Adresses: ", adresses);
}
