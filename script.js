const eventDate = [
  {
    when: "Today",
    time: "21:00",
    title: "Concert 1",
    desc: "An amazing concert happening today!",
    soldout: false,
    bgcolor: "#f7dad4",
  },
  {
    when: "17 December",
    time: "22:00",
    title: "Concert 2",
    desc: "Join us for an unforgettable evening.",
    soldout: false,
    bgcolor: "#f0f6d9",
  },
  {
    when: "19 December",
    time: "18:30",
    title: "Concert 3",
    desc: "A live performance you can't miss.",
    soldout: true,
    bgcolor: "#cfe4f3",
  },
  {
    when: "22 December",
    time: "19:00",
    title: "Concert 4",
    desc: "A fantastic musical journey.",
    soldout: false,
    bgcolor: "#eadafc",
  },
];

const events = document.getElementById("events");

events.innerHTML = "";

eventDate.map((item) => {
  events.innerHTML += `
    <div class="card">
      <span class="items">
        <div class="date" style="background-color: ${item.bgcolor};">
          <h5>${item.when}</h5>
          <h2>${item.time}</h2>
        </div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
        <div class="btn">
          ${
            item.soldout
              ? `  <span class="soldout">Sold out</span>`
              : `
<button class="ticketbn" onclick="openModal()"><img src="ticket.svg" class="ticket" alt=""> Buy a Ticket</button>`
          }
        </div>
      </span>
    </div>
  `;
});

// Modal

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const isOpen = false;

function openModal() {
  if (!isOpen) {
    modal.style.display = "block";
    modal.style.animation = "fadeIn 0.5s forwards";
  }
}

function closeModal() {
  modal.style.animation = "fadeOut 0.5s forwards";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}

//function click outside close
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.animation = "fadeOut 0.5s forwards";
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  }
};
