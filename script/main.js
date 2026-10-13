let listsContainer = document.querySelector(".lists-container");

let hr_carousel = document.querySelector(".hr_carousel");

let innerHTMLS2 = "";

rItems.forEach((item) => {
  innerHTMLS2 += ` <div class="card movie-card p-0">
      <img src=${item.Image} class="card-img-top">
      <div class="card-body p-2">
        <h6 class="mb-1">${item.eventName}</h6>
        <small class="text-muted">⭐ ${item.rating}/10</small>
      </div>
    </div>`;
});

if (!hr_carousel) {
  console.log("Element not found!");
} else {
  hr_carousel.innerHTML = innerHTMLS2;
}
function toggleFilter(element) {
  if (element.parentElement.classList.toggle != "active") {
    element.parentElement.classList.toggle("active");
  }
}
function Filter(e) {
  let filterItems = e.id;
  e.classList.toggle("active");
  e.parentElement.classList.toggle("active");

  if (filterItems == "all") {
    filterItems = items;
  } else {
    filterItems = items.filter((item) => item.category == e.id);
  }
  console.log(e.id);
  console.log(filterItems);
  displayItems(filterItems);
}

function displayItems(data) {
  let innerHTMLS = "";

  data.forEach((item) => {
    innerHTMLS += ` <div class="list">
    <div onClick="about(this)" > <a  href="../index1.html?id=${item.item_id}" ><img   src="${item.itemImage}" width="100%" alt="image" /></a></div>
    <div class="list-text">
    <h3>${item.title}</h3>
    <p>${item.loaction}</p>
    <p>${item.category}</p>
    <p>$${item.price} onwords</p>
   
    </div>
    </div>`;
  });

  if (!listsContainer) {
    console.log("Element not found!");
  } else {
    listsContainer.innerHTML = innerHTMLS;
  }
}

function about(e) {
  console.log(e);
}

function bookTicket() {
  alert("Ticket Booked Successfully");
}

function myFunction() {
  displayItems(items);
}
