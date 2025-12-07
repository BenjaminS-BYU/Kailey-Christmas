// {
//         name: "",
//         icon: "",
//         description: "",
//         stats: "",
//         category: "",
//         rarity: ""
//     }

/* Card of the Day — items as objects */
const items = [
    /* Swift */
    { name: "Sword of Swift", 
        icon: "🗡️", 
        description: "This sword blesses you with the ability to cut through any bull-crap today, use it wisely.", 
        stats: "+5 Wis, +4 Con", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Cardigan of Swift", 
        icon: "🥼", 
        description: "A Cardigan that allows the user to shake off any unneeded piece of advice from anyone, use liberally.", 
        stats: "+6 Int, +3 Cha", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Swiftie's Quill", 
        icon: "🪶✨", 
        description: "A quill that writes better comebacks than you can think of in the shower. Powered by lyrical rage.", 
        stats: "+5 Cha, +3 Int", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Lover Era Lantern", 
        icon: "🏮💖", 
        description: "Glows warmly whenever kindness is needed. Also improves dramatic lighting in emotional moments. Almost makes you a Mirrorball.", 
        stats: "+4 Wis, +5 Cha", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Lyric Notebook of Insight", 
        icon: "📓🎵", 
        description: "A notebook that captures stray thoughts before they vanish. Encourages deep lore drops (This has 13 words in it btw).", 
        stats: "+5 Int, +3 Wis", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Swift's Stardust Boots", 
        icon: "👢✨", 
        description: "Boots that let you step over Bull-crap. Great for family gatherings.", 
        stats: "+6 Dex, +2 Wis", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Swiftie Shield of Emotional Resilience", 
        icon: "🛡️💗", 
        description: "Blocks 90% of unnecessary negativity. Also looks cute with any outfit.", 
        stats: "+6 Con, +2 Cha", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Folklore Feathered Cape", 
        icon: "🪶🧣", 
        description: "A cape sewn from stories and late-night tea. Wear it to make small decisions feel as important as invisible string.", 
        stats: "+4 Cha, +3 Wis", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Taylor's Travel Mug (Worn In)", 
        icon: "☕🎤", 
        description: "Keeps hot feelings warm. Contains 12% more nostalgia per sip.", 
        stats: "+3 Wis, +3 Cha", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Legendary Backstage Pass", 
        icon: "🎫🌟", 
        description: "Grants one unforgettable small moment. Non-transferable, but shareable.", 
        stats: "+6 Cha, +1 Con", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Epic Drink from the Lakes", 
        icon: "🎫🌟", 
        description: "Poets die here, but you gain more wisdom and have the ability to write bangers today, so get to writing bish.", 
        stats: "+10 Con, +3 Wis", 
        category: "Swift", 
        rarity: "Epic" },



    /* Hozier */
    

    { name: "Hozier's Hair", 
        icon: "💇", 
        description: "A lock of Hozier's hair that is imbued with power, lets the user cast spells more easily, use it to make your day more magical.", 
        stats: "+7 Int, +1 Wis", 
        category: "Hozier", 
        rarity: "Legendary" },

    

    { name: "Hozier's Forest Boots", 
        icon: "🥾🌲", 
        description: "Boots woven from roots, for years or for hours, with pure ethereal vibes. Helps the wearer walk gracefully through emotional turmoil.", 
        stats: "+5 Dex, +3 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    

    { name: "Hozier's Candle of Longing", 
        icon: "🕯️🌙", 
        description: "Take this candle to light through the storm of life, with it, how could you fear any hurricane?", 
        stats: "+5 Wis, +3 Cha", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Hozier's Rain Catcher", 
        icon: "🌧️🫗", 
        description: "Catches sweet soft melodies into pure sensual melancholy.", 
        stats: "+5 Int, +2 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Hozier's Echo Bottle", 
        icon: "🍶🎵", 
        description: "Cry out into the night to hear back the forrest God's song, imbues the user with wisdom.", 
        stats: "+4 Wis, +3 Cha", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Toy Soldier", 
        icon: "🪖⚔️", 
        description: "This toy is Nobody's soldier! And neither is the holder. Gain fearless independence and strength.", 
        stats: "+4 Str, +3 Int", 
        category: "Hozier", 
        rarity: "Rare" },




        // Noah Kahan
    { name: "Noah's Acoustic Amulet", 
        icon: "🎸🔗", 
        description: "Sorry strumming this makes you remember your trauma... ", 
        stats: "-4 Cha, -4 Wis", 
        category: "Kahan", 
        rarity: "Common" },

    { name: "Noah Kahan's Maple Mug", 
        icon: "🍁☕", 
        description: "Drink this to wared off seasonal depression.. or just live in it.", 
        stats: "+6 Wis, +2 Cha", 
        category: "Kahan", 
        rarity: "Rare" },

    { name: "Noah Kahan's Jacket", 
        icon: "🧥", 
        description: "Warm enough to survive stick season or survive becoming food for the worms, use this to hide more stealthily from harsh words.", 
        stats: "+7 Dex, +1 Cha", 
        category: "Kahan", 
        rarity: "Epic" },



    /* Cozy Games */
    { name: "Sims 4 Build Tool", 
        icon: "🏠", 
        description: "Allows the user to rearrange life itself, though requires patience... and too many expansion packs.", 
        stats: "+5 Str, +3 Wis", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Minecraft Diamond Hoe", 
        icon: "💎⛏️", 
        description: "Use this to build your way to success, that is if you can keep the motivation longer than 2 weeks.", 
        stats: "+5 Wis, +4 Str", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Animal Crossing Leaf", 
        icon: "🍃", 
        description: "Infused with pure wholesome energy; also smells faintly like fresh bells and soft music.", 
        stats: "+6 Int, +2 Wis", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Enchanted Fishing Rod", 
        icon: "🎣🍃", 
        description: "Allows you to catch good luck and emotional clarity. Works best at 5 p.m. on a Tuesday.", 
        stats: "+4 Dex, +4 Wis", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Minecraft Torch of Courage", 
        icon: "🔦🟧", 
        description: "A small flickering light that keeps bad thoughts from spawning. Also prevents creepers, metaphorical or otherwise.", 
        stats: "+5 Con, +3 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Simoleon Wallet", 
        icon: "💼💚", 
        description: "Rosebud, no kaching, no wait, Motherload, that'll do it right?? (When I asked you, you told me how to spell it so now its funny when I spell it wrong right??)", 
        stats: "+3 Monne, +5 🤑", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Animal Crossing Tea Set", 
        icon: "🍵🍃", 
        description: "Drink up all the tea and spend all your bells!", 
        stats: "+4 Wis, +4 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Sims Plumbob Ring", 
        icon: "💍♦️", 
        description: "Dis ring gives depwa some creativity aey makes depper husband even sexier.", 
        stats: "+5 Int, +3 Cha", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Minecraft Ender Pearl Charm", 
        icon: "🟣💠", 
        description: "Lets you instantly teleport away from drama, though may cause mild existential dread.", 
        stats: "+7 Dex, +1 Int", 
        category: "Cozy Games", 
        rarity: "Epic" },

    { name: "Animal Crossing Fruit Basket", 
        icon: "🍎🍊🍃", 
        description: "Any who eat from this basket are saved from Nook's greed.", 
        stats: "+4 Con, +4 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Cozy Cottagecore Cloak", 
        icon: "🧥🌼", 
        description: "This cloak blesses the user with the feeling of sitting in a windowsill with the sunlight, their favorite book and apple cider to drink.", 
        stats: "+5 Cozy, +3 Con", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Campfire Guitar Pick", 
        icon: "🎸🔥", 
        description: "Allows the holder to be like their older brother playing a guitar around a campfire.", 
        stats: "+3 Cha, +2 Int", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Sable's Needle", 
        icon: "🪡🧵", 
        description: "Grants the user with impeccable sewing skills and makes them Able to take on the day.", 
        stats: "+3 Wis, +4 Int", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Crossing Terrarium", 
        icon: "🌿🔮", 
        description: "Watching the villagers in this terrarium give the watcher much needed coziness and calmness.", 
        stats: "+10 Cozy, +1 Con", 
        category: "Cozy Games", 
        rarity: "Legendary" },

    { name: "Pixel Lantern", 
        icon: "🕹️🏮", 
        description: "Casts light into the darkest cave allowing the user to find diamonds without trouble.", 
        stats: "+3 Con, +4 Wis", 
        category: "Cozy Games", 
        rarity: "Common" },


    { name: "Kitt's Halter", 
        icon: "🦘🍃", 
        description: "Grants this user with the educational prowess of a Loving and kind mother.", 
        stats: "+3 Int, +4 Wis", 
        category: "Cozy Games", 
        rarity: "Common" },





    /* DnD */
    { name: "Hylian Hoodie of Comfort", 
        icon: "🧝‍♂️👕", 
        description: "A hoodie infused with the cozy calm of a long Zelda side-quest. Grants comfort even when adulthood feels like a boss fight.", 
        stats: "+4 Wis, +5 Con", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Potion of Extra Sleep", 
        icon: "🧪😴", 
        description: "A shimmering vial that promises eight hours of sleep even if you only get five. Effects may vary, but hope is real.", 
        stats: "+6 Con, +2 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Potion of Mild Inconvenience Prevention", 
        icon: "🧪🛡️", 
        description: "Stops your day from falling apart due to tiny stupid things. Extremely powerful magic.", 
        stats: "+5 Wis, +3 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Bard's Lute of Comfort", 
        icon: "🎼🎸", 
        description: "Pluck a chord and watch awkward silences turn into warm conversations.", 
        stats: "+5 Cha, +2 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "D20 of Gentle Luck", 
        icon: "🎲✨", 
        description: "A die that rolls 19s when you need a break and 20s if someone deserves it.", 
        stats: "+5 Int, +3 Con", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Wanderer's Map (Folded)", 
        icon: "🗺️📌", 
        description: "Marks places you don't have to go, but would remember fondly if you did.", 
        stats: "+4 Int, +3 Wis", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Druid's Pocket Garden", 
        icon: "🌱🪴", 
        description: "A sprout that refuses to die no matter how chaotic life gets.", 
        stats: "+4 Con, +3 Wis", 
        category: "DnD", 
        rarity: "Rare" },








    /* Axolotls */
    { name: "Mossy Axolotl Plush", 
        icon: "🫧🦎", 
        description: "A damp little friend that hums lullabies and lowers stress instantly.", 
        stats: "+3 Cha, +5 Con", 
        category: "Axolotls", 
        rarity: "Common" },

    { name: "Axolotl Tideband", 
        icon: "🌊🧲", 
        description: "A bracelet that lets you breathe easier in crowded places. Slightly damp after rain.", 
        stats: "+4 Con, +3 Wis", 
        category: "Axolotls", 
        rarity: "Rare" },

    { name: "Axolotl Crown", 
        icon: "👑🦎", 
        description: "Tiny crown that makes everyone smile when you enter a room. Waterproof.", 
        stats: "+4 Cha, +2 Wis", 
        category: "Axolotls", 
        rarity: "Epic" },

    { name: "Axolotl Bubble Wand", 
        icon: "🫧✨", 
        description: "Blow a bubble and remember something sweet from childhood. Splash-resistant.", 
        stats: "+2 Cha, +4 Wis", 
        category: "Axolotls", 
        rarity: "Common" },

    { name: "Axolotl Songbook", 
        icon: "📚🦎", 
        description: "A soot-stained hymn to soft things. Singing it together heals awkwardness.", 
        stats: "+4 Cha, +2 Wis", 
        category: "Axolotls", 
        rarity: "Rare" },



    // Kids
    { name: "Ollie's Logic",
        icon: "🤓☝️",
        description: "Today you are bless with Ollie's Logical mind, you become smarter, but maybe not wiser...",
        stats: "+7 Int, -1 Wis",
        category: "Kids",
        rarity: "Common"
    },

    { name: "Ava's Charisma",
        icon: "👧",
        description: "Ava is wild and excitable, if a bit too much sometimes 😂, take her charisma with you and be confident without fear!",
        stats: "+7 Cha, -1 Int",
        category: "Kids",
        rarity: "Common"
    },



    // Ben
    { name: "Ben's Butt",
        icon: "🍑",
        description: "Take my Butt with you to get a lil Horny and distracted... hehe🤭",
        stats: "-3 Con, +5 Horny",
        category: "Ben",
        rarity: "Common"
    }
];

/* Rarity classes mapping */
const rarityClass = {
  "Common": "rarity-common",
  "Rare": "rarity-rare",
  "Epic": "rarity-epic",
  "Legendary": "rarity-legendary"
};

/* DOM elements */
const cardContainer = document.getElementById("cardContainer");
const todayBtn = document.getElementById("todayBtn");
const randomBtn = document.getElementById("randomBtn");
const categorySelect = document.getElementById("categorySelect");
const metaText = document.getElementById("metaText");

/* Utility: deterministic hash from string */
function hashStringToInt(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/* Get pool by category (All or specific) */
function getPool(category) {
  if (!category || category === "All") return items;
  return items.filter(it => it.category === category);
}

/* Daily index: based on YYYY-MM-DD + category to vary per-category */
function getDailyIndex(category) {
  const todayISO = new Date().toISOString().slice(0,10); // YYYY-MM-DD
  const key = `${todayISO}::${category || "All"}`;
  const hash = hashStringToInt(key);
  const pool = getPool(category);
  if (pool.length === 0) return -1;
  return hash % pool.length;
}

/* Render card object into DOM */
function renderCard(cardObj, note = "") {
  if (!cardObj) {
    cardContainer.innerHTML = `<div class="card show"><div class="card-icon">❓</div><div><p class="card-title">No card found</p><p class="card-desc">Try a different category.</p></div></div>`;
    metaText.textContent = "";
    return;
  }

  const rarityClassName = rarityClass[cardObj.rarity] || "";
  const html = `
    <article class="card ${rarityClassName}" role="article">
      <div class="card-icon" aria-hidden="true">${cardObj.icon}</div>
      <div>
        <div class="card-meta">
          <div style="display:flex;flex-direction:column;">
            <h2 class="card-title">${escapeHtml(cardObj.name)}</h2>
            <div class="card-stats">${escapeHtml(cardObj.stats)}</div>
          </div>
          <div style="margin-left:auto;display:flex;flex-direction:column;align-items:flex-end">
            <div class="badge">${escapeHtml(cardObj.category)}</div>
            <div class="badge" style="margin-top:6px">${escapeHtml(cardObj.rarity)}</div>
          </div>
        </div>
        <p class="card-desc">${escapeHtml(cardObj.description)}</p>
      </div>
    </article>
  `;

  cardContainer.innerHTML = html;
  // small reveal animation
  const el = cardContainer.querySelector(".card");
  requestAnimationFrame(()=> el.classList.add("show"));

  const d = new Date();
  const todayISO = d.toISOString().slice(0,10);
  metaText.textContent = note ? note : `Displayed for ${todayISO} — category: ${categorySelect.value}`;
}

/* Basic HTML-escape for safety */
function escapeHtml(s){
  return String(s).replace(/[&<>"'`]/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;", "`":"&#96;"}[m]));
}

/* Show today's deterministic card for the selected category */
function showTodaysCard() {
  const category = categorySelect.value;
  const pool = getPool(category);
  if (pool.length === 0) {
    renderCard(null);
    return;
  }
  const idx = getDailyIndex(category);
  const card = pool[idx];
  renderCard(card, `Daily Card — category: ${categorySelect.value}. Index ${idx+1} of ${pool.length}.`);
}

/* Show a random card from the selected category */
function showRandomCard() {
  const category = categorySelect.value;
  const pool = getPool(category);
  if (pool.length === 0) {
    renderCard(null);
    return;
  }
  const idx = Math.floor(Math.random() * pool.length);
  renderCard(pool[idx], `Random Card — category: ${categorySelect.value}. Index ${idx+1} of ${pool.length}.`);
}

/* init */
todayBtn.addEventListener("click", showTodaysCard);
randomBtn.addEventListener("click", showRandomCard);
categorySelect.addEventListener("change", showTodaysCard);

/* show daily on load */
document.addEventListener("DOMContentLoaded", showTodaysCard);
