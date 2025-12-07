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
        description: "Glows warmly whenever kindness is needed. Also improves dramatic lighting in emotional moments.", 
        stats: "+4 Wis, +5 Cha", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Lyric Notebook of Insight", 
        icon: "📓🎵", 
        description: "A notebook that captures stray thoughts before they vanish. Encourages deep emotional lore drops.", 
        stats: "+5 Int, +3 Wis", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Swift's Stardust Boots", 
        icon: "👢✨", 
        description: "Boots that let you step over nonsense without even noticing it. Great for family gatherings.", 
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
        description: "A cape sewn from stories and late-night tea. Wear it to make small decisions feel fated.", 
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





    /* Hozier */
    

    { name: "Hozier's Hair", 
        icon: "💇", 
        description: "A lock of Hozier's hair that is imbued with power, lets the user cast spells more easily, use it to make your day more magical.", 
        stats: "+7 Int, +1 Wis", 
        category: "Hozier", 
        rarity: "Legendary" },

    

    { name: "Hozier's Forest Boots", 
        icon: "🥾🌲", 
        description: "Boots woven from roots, moss, and pure ethereal vibes. Helps the wearer walk gracefully through emotional turmoil.", 
        stats: "+5 Dex, +3 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    

    { name: "Hozier's Candle of Longing", 
        icon: "🕯️🌙", 
        description: "Burning it fills the room with poetic melancholy and incredible hair energy.", 
        stats: "+5 Wis, +3 Cha", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Hozier's Rain Catcher", 
        icon: "🌧️🫗", 
        description: "Collects ambient melancholy and repurposes it into creative focus.", 
        stats: "+5 Int, +2 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Hozier's Echo Bottle", 
        icon: "🍶🎵", 
        description: "Open to hear a single perfect note that becomes a motif for your week.", 
        stats: "+4 Wis, +3 Cha", 
        category: "Hozier", 
        rarity: "Epic" },



        // Noah Kahan
    { name: "Noah's Acoustic Amulet", 
        icon: "🎸🔗", 
        description: "Strumming it heals emotional damage—yours or others'. Does not require actual musical talent.", 
        stats: "+4 Cha, +4 Wis", 
        category: "Kahan", 
        rarity: "Epic" },

    { name: "Noah Kahan's Maple Mug", 
        icon: "🍁☕", 
        description: "A mug filled with the essence of small towns and big feelings. Grants immunity to seasonal depression for 12 minutes.", 
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

    { name: "Enchanted ACNH Fishing Rod", 
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
        description: "A wallet that never quite fills, but somehow always helps you get through the week.", 
        stats: "+3 Wis, +5 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Animal Crossing Tea Set", 
        icon: "🍵🍃", 
        description: "Drinking from this set instantly reduces stress by a measurable amount. Also increases your interior-design instincts.", 
        stats: "+4 Wis, +4 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Sims Plumbob Ring", 
        icon: "💍♦️", 
        description: "A ring that changes color based on your mood. Extremely helpful when people are being dense.", 
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
        description: "Increases your productivity by 12% and your cuteness by 300%.", 
        stats: "+4 Con, +4 Cha", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Cozy Cottagecore Cloak", 
        icon: "🧥🌼", 
        description: "A cloak woven from sunshine, tea steam, and soft playlists. Reduces stress on contact.", 
        stats: "+5 Wis, +3 Con", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Campfire Guitar Pick", 
        icon: "🎸🔥", 
        description: "Grants the confidence to sing badly and be loved for it.", 
        stats: "+3 Cha, +2 Int", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Patchwork Quilter's Needle", 
        icon: "🪡🧵", 
        description: "Mends small regrets and the occasional sweater.", 
        stats: "+3 Wis, +4 Int", 
        category: "Cozy Games", 
        rarity: "Common" },

    { name: "Sootheleaf Terrarium", 
        icon: "🌿🔮", 
        description: "A tiny world on your desk. Watching it grow calms decision fatigue.", 
        stats: "+4 Wis, +3 Con", 
        category: "Cozy Games", 
        rarity: "Rare" },

    { name: "Pixel Lantern", 
        icon: "🕹️🏮", 
        description: "A tiny lantern that glows like your favourite cozy game; reduces anxiety by 7%.", 
        stats: "+3 Con, +4 Wis", 
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
        rarity: "Rare" }
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
  renderCard(card, `Card seeded by date (daily). Index ${idx+1} of ${pool.length}.`);
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
  renderCard(pool[idx], `Random preview — index ${idx+1} of ${pool.length}.`);
}

/* init */
todayBtn.addEventListener("click", showTodaysCard);
randomBtn.addEventListener("click", showRandomCard);
categorySelect.addEventListener("change", showTodaysCard);

/* show daily on load */
document.addEventListener("DOMContentLoaded", showTodaysCard);
