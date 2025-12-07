// List of items your wife likes
const items = [
    "Sword of Swift",
    "Cardigan of Swift",
    "Noah Kahan's Jacket",
    "Hozier's Hair",
    "Sims 4 Build Tool",
    "Minecraft Diamond Hoe",
    "Animal Crossing Leaf"
];

// Icons that match items (simple emoji for now, you can swap for images later)
const icons = [
    "🗡️",
    "🧥",
    "🧣",
    "💇",
    "🏠",
    "⛏️",
    "🍃"
];

// Magical descriptions
const descriptions = [
    "This sword blesses you with the ability to cut through any bull-crap today, use it wisely",
    "A Cardigan that allows the user to shake off any unneeded piece of advice from anyone, use liberally",
    "Warm enough to survive stick season or survive becoming food for the worms, use this to hide more stealthily from harsh words",
    "A locked of Hozier's hair that is imbued with power, lets the user to cast spells more easily",
    "Allows the user to rearrange life itself, though requires patience and too many expansion packs.",
    "Durable enough to last longer than your first survival world.",
    "Infused with pure wholesome energy; also smells faintly like fresh bells and soft music."
];

const status = [
    "+5 Wis, +4 Con",
    "+6 Int, +3 Cha",
    "+7 Dex, +1 Cha",
    "+7 Int, ",
    "Allows the user to rearrange life itself, though requires patience and too many expansion packs.",
    "Durable enough to last longer than your first survival world.",
    "Infused with pure wholesome energy; also smells faintly like fresh bells and soft music."
]

function generateCard() {
    const index = Math.floor(Math.random() * items.length);

    const cardHTML = `
        <div class="card">
            <div class="card-icon">${icons[index]}</div>
            <div class="card-title">${items[index]}</div>
            <div class="card-desc">${descriptions[index]}</div>
            <div class="card-stats">${stats[index]}</div>
        </div>
    `;

    document.getElementById("cardContainer").innerHTML = cardHTML;
}

document.getElementById("newCardBtn").addEventListener("click", generateCard);
