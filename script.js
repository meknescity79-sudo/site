const fleet = [
  {
    name: "Kia Picanto Street",
    type: "City Car",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: "29",
    features: ["Compact", "A/C", "Bluetooth"],
    accent: "accent-a",
  },
  {
    name: "Renault Clio Urban",
    type: "City Hatch",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "34",
    features: ["Economy", "Touchscreen", "Parking Assist"],
    accent: "accent-b",
  },
  {
    name: "Peugeot 208 Allure",
    type: "Hatchback",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: "38",
    features: ["LED Lights", "Cruise", "USB-C"],
    accent: "accent-c",
  },
  {
    name: "Dacia Sandero Stepway",
    type: "Cross Hatch",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    rate: "36",
    features: ["Raised Ride", "Media Screen", "Rear Camera"],
    accent: "accent-d",
  },
  {
    name: "Hyundai i20 Urban Plus",
    type: "Compact",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: "37",
    features: ["Smart Key", "Lane Assist", "A/C"],
    accent: "accent-a",
  },
  {
    name: "Toyota Corolla Comfort",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    rate: "49",
    features: ["Quiet Cabin", "Hybrid Drive", "CarPlay"],
    accent: "accent-b",
  },
  {
    name: "Volkswagen Jetta Business",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "52",
    features: ["Business Class", "Digital Dash", "Wi-Fi"],
    accent: "accent-c",
  },
  {
    name: "Skoda Octavia Signature",
    type: "Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "54",
    features: ["Big Trunk", "Comfort Seats", "ACC"],
    accent: "accent-d",
  },
  {
    name: "Peugeot 3008 GT",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "67",
    features: ["Panoramic Roof", "Ambient Light", "NAV"],
    accent: "accent-a",
  },
  {
    name: "Nissan Qashqai Premium",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: "64",
    features: ["360 Camera", "Comfort Mode", "A/C"],
    accent: "accent-b",
  },
  {
    name: "Hyundai Tucson N-Line",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    rate: "71",
    features: ["Bold Styling", "Wireless Charge", "ADAS"],
    accent: "accent-c",
  },
  {
    name: "Toyota RAV4 Hybrid",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    rate: "75",
    features: ["Hybrid", "Spacious", "Smart Sense"],
    accent: "accent-d",
  },
  {
    name: "Kia Sportage X-Line",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "72",
    features: ["Bold Trim", "Leather", "Drive Modes"],
    accent: "accent-a",
  },
  {
    name: "Volkswagen Tiguan Elegance",
    type: "SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "78",
    features: ["Premium Cabin", "Travel Assist", "Large Boot"],
    accent: "accent-b",
  },
  {
    name: "Mercedes C-Class Executive",
    type: "Executive",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    rate: "98",
    features: ["Executive Trim", "Soft Ride", "Mood Lighting"],
    accent: "accent-c",
  },
  {
    name: "BMW 3 Series Touring",
    type: "Executive",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "102",
    features: ["Sport Comfort", "Estate Space", "HUD"],
    accent: "accent-d",
  },
  {
    name: "Audi A6 Prestige",
    type: "Luxury Sedan",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    rate: "118",
    features: ["Virtual Cockpit", "Matrix LED", "Leather"],
    accent: "accent-a",
  },
  {
    name: "Range Rover Evoque",
    type: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    rate: "129",
    features: ["Signature Look", "Premium Audio", "360 View"],
    accent: "accent-b",
  },
  {
    name: "Tesla Model 3 Long Range",
    type: "Electric",
    seats: 5,
    transmission: "Automatic",
    fuel: "EV",
    rate: "111",
    features: ["Electric", "Glass Roof", "Autopilot Ready"],
    accent: "accent-c",
  },
  {
    name: "Ford Tourneo Custom",
    type: "Family Van",
    seats: 8,
    transmission: "Automatic",
    fuel: "Diesel",
    rate: "124",
    features: ["8 Seats", "Luggage Space", "Group Travel"],
    accent: "accent-d",
  },
];

const fleetGrid = document.querySelector("#fleet-grid");

fleet.forEach((car, index) => {
  const card = document.createElement("article");
  card.className = "fleet-card reveal";

  card.innerHTML = `
    <div class="fleet-visual ${car.accent}">
      <span class="visual-index">Unit ${String(index + 1).padStart(2, "0")}</span>
      <span class="visual-class">${car.type}</span>
    </div>
    <div class="fleet-content">
      <div class="fleet-title-row">
        <h3>${car.name}</h3>
        <div class="fleet-rate">
          <strong>${car.rate} EUR</strong>
          <span>per day</span>
        </div>
      </div>
      <ul class="fleet-meta">
        <li>${car.seats} seats</li>
        <li>${car.transmission}</li>
        <li>${car.fuel}</li>
      </ul>
      <ul class="fleet-features">
        ${car.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </div>
  `;

  fleetGrid.appendChild(card);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
  observer.observe(element);
});
