
const eventForm = document.getElementById('eventForm');
const eventTitle = document.getElementById('eventTitle');
const eventDate = document.getElementById('eventDate');
const eventCategory = document.getElementById('eventCategory');
const eventDescription = document.getElementById('eventDescription');
const eventContainer = document.getElementById('eventContainer');
const clearAllBtn = document.getElementById('clearAllBtn');
const addSampleBtn = document.getElementById('addSampleBtn');
const demoContent = document.getElementById('demoContent');

//take 2 sample events for Add sample event data

let sampleEvent = [
    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg thai dgjabds"
    },
    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "ahgs dsfchjh adg thai dgjabds"
    }
]

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => addEvent(event));
})

//Create event card which contains the user data and we store it inside a div.
function createEventCard(eventData){
    // ... (content of function not fully visible in right pane)
    // ...
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;
    //return the card for the addEvent function
    return card;
}

//Add the created event and append inside the event container
function addEvent (eventData){
    //if empty-state is present then remove it when new card will be added.
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove()
    
    eventContainer.appendChild(createEventCard(eventData));
    
}

//form handling using submit event
eventForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const eventData = {
        //eventData stores the user given value
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }
    addEvent(eventData);
    
})

eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".event-card");
    if (card && event.target.classList.contains("delete-btn")) {
        card.remove();
}






clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "";
    //after clearing all the events we will show the empty state
    demoContent.innerHTML = `
        <div id="empty-state">
            <h2>No events added yet!</h2>
            <p>Use the form above to add your first event.</p>
        </div>
    `
})})

eventContainer.addEventListener("click", (event) => {
    console.log("inside delete");
    const card = event.target.closest(".event-card");
    if (event.target.classList.contains("delete-btn")) {
        card.remove();
    }
})
