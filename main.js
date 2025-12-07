// List of items your wife likes
const items = [
    "Sword of Swift",
    "Cardigan of Swift",
    "Noah Kahan’s Jacket",
    "Hozier’s Hair",
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
    "Forged with the power of catchy choruses, this blade cuts cleanly through any bad vibes.",
    "Knitted from cozy enchantments — wear it and feel instantly folklore-level powerful.",
    "Warm enough to survive Vermont winters, charming enough to level up your charisma.",
    "Soft, mythical, and rumored to contain at least one forest spirit.",
    "Allows the user to rearrange life itself, though requires patience and too many expansion packs.",
    "Durable enough to last longer than your first survival world.",
    "Infused with pure wholesome energy; also smells faintly like fresh bells and soft music."
];

function generateCard() {
    const index = Math.floor(Math.random() * items.length);

    const cardHTML = `
        <div class="card">
            <div class="card-icon">${icons[index]}</div>
            <div class="card-title">${items[index]}</div>
            <div class="card-desc">${descriptions[index]}</div>
        </div>
    `;

    document.getElementById("cardContainer").innerHTML = cardHTML;
}

document.getElementById("newCardBtn").addEventListener("click", generateCard);
