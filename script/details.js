let aboutMain = document.querySelector(".about-main");
const params = new URLSearchParams(window.location.search);
const eventId = Number(params.get("id"));

const selectedEvent = items.find((item) => item.item_id === eventId);

if (selectedEvent) {
  aboutMain.innerHTML = `
  
   <div class="my-4">
        <!-- TITLE -->
        <div class="title text-center text-lg-start">${selectedEvent.title}</div>

        <!-- MAIN -->
        <div class="row g-4 align-items-start">
          <!-- LEFT -->
          <div class="col-lg-8 col-md-12">
            <div class="banner position-relative">
              <img 
                src="${selectedEvent.itemImage}"
                class="object-fit-cover rounded"
                alt="error"
                height="500"
                
              />

              

              <!-- INTEREST -->
              <div
                class="interest d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-3"
              >
                <div class="tags mb-2 mb-md-0">
                  <span class="tag">${selectedEvent.category}</span>
                </div>

                <div
                  class="interest-btn-div d-flex align-items-center flex-wrap"
                >
                  <div class="like me-3">👍 23 are interested</div>
                  <button class="interest-btn">I'm Interested</button>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="col-lg-4 col-md-12">
            <div class="card p-3 shadow-sm">
              <div class="row mb-2">
                <span class="ms-2">📅 ${selectedEvent.date}</span>
              </div>
              <div class="row mb-2"><span class="ms-2">⏰ 7:00 PM</span></div>
              <div class="row mb-2">
                <span class="ms-2"> ⏳ ${selectedEvent.time}</span>
              </div>
              <div class="row mb-2">
                <span class="ms-2">👥 Age Limit - ${selectedEvent.age}yrs +</span>
              </div>
              <div class="row mb-2">
                <span class="ms-2">🌐 ${selectedEvent.language}</span>
              </div>
              <div class="row mb-2"><span class="ms-2">🎭 ${selectedEvent.category}</span></div>
              <div class="row mb-3">
                <span class="ms-2">📍 ${selectedEvent.loaction}</span>
              </div>

              <div class="price mb-1">₹399 onwards</div>
              <div class="available mb-3">Available</div>

              <button class="book-btn w-100" onClick="bookTicket()">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
  
  `;
} else {
  console.log("Event not found");
}
