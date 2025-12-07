// List of items your wife likes
const items = [
    "Sword of Swift",
    "Cardigan of Swift",
    "Noah Kahan's Jacket",
    "Hozier's Hair",
    "Sims 4 Build Tool",
    "Minecraft Diamond Hoe",
    "Animal Crossing Leaf",

    "Hylian Hoodie of Comfort",
    "Potion of Extra Sleep",
    "Swiftie's Quill",
    "Lover Era Lantern",
    "Noah Kahan's Maple Mug",
    "Hozier's Forest Boots",
    "Enchanted ACNH Fishing Rod",
    "Minecraft Torch of Courage",
    "Simoleon Wallet",
    "Lyric Notebook of Insight",
    "Animal Crossing Tea Set",
    "Sims Plumbob Ring",
    "Swift's Stardust Boots",
    "Noah's Acoustic Amulet",
    "Hozie's Candle of Longing",
    "Minecraft Ender Pearl Charm",
    "Animal Crossing Fruit Basket",
    "Potion of Mild Inconvenience Prevention",
    "Swiftie Shield of Emotional Resilience",
    "Cozy Cottagecore Cloak"
];

// Icons that match items
const icons = [
    "🗡️",          // Sword of Swift
    "🥼",          // Cardigan of Swift
    "🧥",          // Noah Kahan's Jacket
    "🧔🏻‍♀️",       // Hozier's Hair
    "♢",           // Sims 4 Build Tool
    "💎⛏️",        // Minecraft Diamond Hoe
    "🍃",          // Animal Crossing Leaf

    "🧝‍♂️👕",      // Hylian Hoodie of Comfort
    "🧪😴",         // Potion of Extra Sleep
    "🪶✨",         // Swiftie’s Quill
    "🏮💖",         // Lover Era Lantern
    "🍁☕",         // Noah Kahan’s Maple Mug
    "🥾🌲",         // Hozier’s Forest Boots
    "🎣🍃",         // Enchanted ACNH Fishing Rod
    "🔦🟧",         // Minecraft Torch of Courage
    "💼💚",         // Simoleon Wallet
    "📓🎵",         // Lyric Notebook of Insight
    "🍵🍃",         // Animal Crossing Tea Set
    "💍♦️",         // Sims Plumbob Ring
    "👢✨",         // Swift’s Stardust Boots
    "🎸🔗",         // Noah’s Acoustic Amulet
    "🕯️🌙",         // Hozier’s Candle of Longing
    "🟣💠",         // Minecraft Ender Pearl Charm
    "🍎🍊🍃",       // Animal Crossing Fruit Basket
    "🧪🛡️",         // Potion of Mild Inconvenience Prevention
    "🛡️💗",         // Swiftie Shield of Emotional Resilience
    "🧥🌼"          // Cozy Cottagecore Cloak
];

// Descriptions
const descriptions = [
    "This sword blesses you with the ability to cut through any bull-crap today, use it wisely",
    "A Cardigan that allows the user to shake off any unneeded piece of advice from anyone, use liberally",
    "Warm enough to survive stick season or survive becoming food for the worms, use this to hide more stealthily from harsh words",
    "A locked of Hozier's hair that is imbued with power, lets the user to cast spells more easily, use it to make your day more magical",
    "Allows the user to rearrange life itself, though requires patience... and too many expansion packs.",
    "Use this to build your way to success, that is if you can keep the motivation longer than 2 weeks",
    "Infused with pure wholesome energy; also smells faintly like fresh bells and soft music.",


    // ReWrite to make more personal
    "A hoodie infused with the cozy calm of a long Zelda side-quest. Grants comfort even when adulthood feels like a boss fight.",
    "A shimmering vial that promises eight hours of sleep even if you only get five. Effects may vary, but hope is real.",
    "A quill that writes better comebacks than you can think of in the shower. Powered by lyrical rage.",
    "Glows warmly whenever kindness is needed. Also improves dramatic lighting in emotional moments.",
    "A mug filled with the essence of small towns and big feelings. Grants immunity to seasonal depression for 12 minutes.",
    "Boots woven from roots, moss, and pure ethereal vibes. Helps the wearer walk gracefully through emotional turmoil.",
    "Allows you to catch good luck and emotional clarity. Works best at 5 p.m. on a Tuesday.",
    "A small flickering light that keeps bad thoughts from spawning. Also prevents creepers, metaphorical or otherwise.",
    "A wallet that never quite fills, but somehow always helps you get through the week.",
    "A notebook that captures stray thoughts before they vanish. Encourages deep emotional lore drops.",
    "Drinking from this set instantly reduces stress by a measurable amount. Also increases your interior-design instincts.",
    "A ring that changes color based on your mood. Extremely helpful when people are being dense.",
    "Boots that let you step over nonsense without even noticing it. Great for family gatherings.",
    "Strumming it heals emotional damage—yours or others'. Does not require actual musical talent.",
    "Burning it fills the room with poetic melancholy and incredible hair energy.",
    "Lets you instantly teleport away from drama, though may cause mild existential dread.",
    "Increases your productivity by 12% and your cuteness by 300%.",
    "Stops your day from falling apart due to tiny stupid things. Extremely powerful magic.",
    "Blocks 90% of unnecessary negativity. Also looks cute with any outfit.",
    "A cloak woven from sunshine, tea steam, and soft playlists. Reduces stress on contact."
];

// Stats
const status = [
    "+5 Wis, +4 Con",
    "+6 Int, +3 Cha",
    "+7 Dex, +1 Cha",
    "+7 Int, +1 Wis",
    "+5 Str, +3 Wis",
    "+5 Wis, +4 Str",
    "+6 Int, +2 Wis",

    "+4 Wis, +5 Con",
    "+6 Con, +2 Wis",
    "+5 Cha, +3 Int",
    "+4 Wis, +5 Cha",
    "+6 Wis, +2 Cha",
    "+5 Dex, +3 Wis",
    "+4 Dex, +4 Wis",
    "+5 Con, +3 Cha",
    "+3 Wis, +5 Cha",
    "+5 Int, +3 Wis",
    "+4 Wis, +4 Cha",
    "+5 Int, +3 Cha",
    "+6 Dex, +2 Wis",
    "+4 Cha, +4 Wis",
    "+5 Wis, +3 Cha",
    "+7 Dex, +1 Int",
    "+4 Con, +4 Cha",
    "+5 Wis, +3 Con",
    "+6 Con, +2 Cha",
    "+5 Wis, +3 Con"
];


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
