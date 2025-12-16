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
        description: "A cape sewn from stories and late-night tea. Wear it to make small decisions feel as important as invisible strings.", 
        stats: "+4 Cha, +3 Wis", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Taylor's Travel Mug", 
        icon: "☕🎤", 
        description: "Keeps the vibes electric, drink up for some fun.", 
        stats: "+3 Wis, +3 Cha", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Legendary Backstage Pass", 
        icon: "🎫🌟", 
        description: "If you're in the mood, tell someone that you have this backstage pass and they will do whatever you desire (sexually obv).", 
        stats: "+6 Cha, +1 Con", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Epic Drink from the Lakes", 
        icon: "🥛🛶", 
        description: "Poets die here, but you gain more wisdom and have the ability to write bangers today, so get to writing bish.", 
        stats: "+10 Con, +3 Wis", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Pool of Folklore", 
        icon: "🍀", 
        description: "Tossing pennies into this pool grants the user with fate altering luck, you may even find The One.", 
        stats: "+5 Luck", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Cardigan of Knowledge", 
        icon: "🧥🧣", 
        description: "They may have assumed you know nothing, but I knew you'd make it through this day, take this cardigan for added support.", 
        stats: "+5 Int, +3 Con", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Tattoo of Kisses", 
        icon: "💋", 
        description: "Let this magical tattoo ever remind you that my lips are but an ask away.", 
        stats: "+6 Con, +10 Love", 
        category: "Swift", 
        rarity: "Legendary" },


    { name: "Key-Lime Canine", 
        icon: "🐶🍋‍🟩", 
        description: "This magical green dog brings aid to the user through their toughest challenges, truly the gudest boi.", 
        stats: "+4 Str, +3 Con", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Sign of Exile", 
        icon: "❌", 
        description: "Use this against any foe to not be their problem anymore. There are so many signs. They may not see them tho...", 
        stats: "+5 Str, +2 Int", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Stolen Lullabies", 
        icon: "🎶", 
        description: "These lullabies were screamed into the night, use them to bolster your resolve and confidence today!", 
        stats: "+3 Wis, +4 Con", 
        category: "Swift", 
        rarity: "Common" },

    { name: "Highest Heels", 
        icon: "👠👠", 
        description: "Magical feels that let you step more sure and, love. Use for speed or stealth, love. Also Swift-step, why not hah.", 
        stats: "+5 Wis, +5 Dex", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Sweetest Tea", 
        icon: "🍵", 
        description: "A summer hot drink that allows the user to fly away from all their problems like they are high in the sky.", 
        stats: "+7 Dex, +4 Wis", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Wine of Memories", 
        icon: "🍷", 
        description: "Wine so good you'll get lost in a memory, and your worries will slip away, but you can only drink in August.", 
        stats: "+4 Int, -5 Wis", 
        category: "Swift", 
        rarity: "Rare" },

    { name: "Shiniest Wheels", 
        icon: "🛞", 
        description: "Wheels so good they make any carriage light as a feather good for any long adventure. However, they rust easy.", 
        stats: "+6 Con, +3 Dex", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Illicit Hood of Stealth", 
        icon: "🥷", 
        description: "A magically stealthy hood, conceals the user and their illicit affairs to any who gaze upon them. Downside: you might be called kid wearing this...", 
        stats: "+7 Dex, +4 Con", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Invisible String", 
        icon: "𓍯", 
        description: "A magically infused string that guides you to the best outcome of any event, use this with confidence.", 
        stats: "+10 Luck", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Potion of Ferocity", 
        icon: "😠", 
        description: "Drink this potion to rage like a barbarian or a Mad Woman, whoever you are fighting deserves it.", 
        stats: "+10 Str", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Helm of Revivify", 
        icon: "🤲❤️", 
        description: "Wear this helm for just one single glimpse of relief.", 
        stats: "+5 Con, +3 Str", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Parties Relief", 
        icon: "🎉✨", 
        description: "A bounty of relief for your humble party of adventures, beware of teenage boys showing up, would you have him? Would you want him?.", 
        stats: "+10 Con", 
        category: "Swift", 
        rarity: "Legendary" },

    { name: "Devil's Fire", 
        icon: "🔥🔥", 
        description: "Standing near this fire grants the recipient extra strength, but stand for too long and you loose constitution. But it's peaceful.", 
        stats: "+9 Str, -5 Con", 
        category: "Swift", 
        rarity: "Epic" },

    { name: "Blue Magic Spray", 
        icon: "🔵💨", 
        description: "Getting hit with this shade of blue causes the victim to fall in love with their pain and they are enchanted to stay near you while fighting.", 
        stats: "-6 Con", 
        category: "Swift", 
        rarity: "Epic" },

        /* Additional Swift Album Items */

    /* Taylor Swift (Debut) */
    { name: "Debut Acoustic Guitar",
        icon: "🎸",
        description: "Take this guitar to remind yourself that simplicity can take you far.",
        stats: "+3 Cha, +2 Dex",
        category: "Swift",
        rarity: "Common" },

    { name: "Hometown Boots",
        icon: "👢",
        description: "Remember where home is, stay close and know that your family is with you!",
        stats: "+2 Con, +3 Wis",
        category: "Swift",
        rarity: "Common" },


    /* Fearless */
    { name: "Fearless Golden Armor",
        icon: "✨🛡️",
        description: "Stay fearless with this armor, mi amore.",
        stats: "+5 Con, +2 Cha",
        category: "Swift",
        rarity: "Rare" },

    { name: "White Horse Reins",
        icon: "🐎",
        description: "Ride em like a cowgirl, yeee-haw! If you fall off this horse, get back on and ride again.",
        stats: "+4 Dex, +3 Wis",
        category: "Swift",
        rarity: "Rare" },


    /* Speak Now */
    { name: "Enchanted Ballroom Gloves",
        icon: "🧤✨",
        description: "I was enchanted to meet you, wear these gloves to remind yourself of the magic I felt that day.",
        stats: "+5 Cha, +2 Dex",
        category: "Swift",
        rarity: "Epic" },

    { name: "Dragon-proof Pen",
        icon: "🖋️🐉",
        description: "Witches and dragons be damned with this pen, write your own destiny.",
        stats: "+4 Int, +3 Wis",
        category: "Swift",
        rarity: "Rare" },


    /* Red */
    { name: "Red Scarf of Memory",
        icon: "🧣🔴",
        description: "Stop leaving this at people's houses, It took me like 10 minutes to find it.",
        stats: "+4 Wis, +4 Cha",
        category: "Swift",
        rarity: "Epic" },

    { name: "Burning Matchbook",
        icon: "🔥📕",
        description: "You are like a red burning flame, my love. Don't forget your passion.",
        stats: "+5 Str, +2 Int",
        category: "Swift",
        rarity: "Rare" },


    /* 1989 */
    { name: "Polaroid of Reinvention",
        icon: "📸",
        description: "In your wildest dreams, you can be anyone you want, don't be stuck to who you were, be whoever you want.",
        stats: "+5 Cha, +3 Dex",
        category: "Swift",
        rarity: "Epic" },

    { name: "Neon City Jacket",
        icon: "🧥🌃",
        description: "The city lights can't compare to your dreamy flare, this jacket lets you shine brighter and fuller today.",
        stats: "+4 Dex, +3 Con",
        category: "Swift",
        rarity: "Rare" },


    /* Reputation */
    { name: "Serpent Ring",
        icon: "🐍💍",
        description: "Witches will come after you but use this ring to bite back with strength and cunning.",
        stats: "+10 Cha, +8 Str",
        category: "Swift",
        rarity: "Legendary" },

    { name: "Blackout Cloak",
        icon: "🖤🥷",
        description: "If you feel your reputation is down the drain, use this cloak to disappear from any ignorant eye.",
        stats: "+6 Dex, +3 Con",
        category: "Swift",
        rarity: "Epic" },


    /* Lover */
    { name: "Heartglass Compass",
        icon: "💖🧭",
        description: "Use this compass to find your Lover, kinda useless since I'm right here. Brings good luck.",
        stats: "+5 Wis, +4 Luck",
        category: "Swift",
        rarity: "Epic" },

    { name: "Pastel Shield",
        icon: "🛡️🌈",
        description: "Use this shield to let others know they just need to calm down, they're all too loud.",
        stats: "+5 Con, +3 Cha",
        category: "Swift",
        rarity: "Rare" },


    /* Evermore */
    { name: "Evergreen Locket",
        icon: "🌲🔒",
        description: "This locket may be forgotten sometimes, but use it to remember that some things last forever. Like us!",
        stats: "+4 Con, +4 Wis",
        category: "Swift",
        rarity: "Rare" },

    { name: "Willowbranch Staff",
        icon: "🌿✨",
        description: "Life may be a willow, but with this staff you have the power to bend and not break.",
        stats: "+5 Wis, +3 Int",
        category: "Swift",
        rarity: "Epic" },


    /* Midnights */
    { name: "Midnight Clockwork Ring",
        icon: "🕛💍",
        description: "Wear this ring to control time itself, or at least make it feel like you have more of it.",
        stats: "+5 Int, +4 Luck",
        category: "Swift",
        rarity: "Epic" },

    { name: "Lavender Haze Cloak",
        icon: "💜🌫️",
        description: "Don't give a damn what people say, wear this cloak to hide away from negativity and judgement.",
        stats: "+15 Dex",
        category: "Swift",
        rarity: "Legendary" },


    /* The Tortured Poets Department */
    { name: "Typewriter of Confession",
        icon: "⌨️📝",
        description: "You left this at my house... I used it to write some new poems tho so that's cool. You can have it back for some more writing inspiration.",
        stats: "+6 Int, +3 Wis",
        category: "Swift",
        rarity: "Epic" },

    { name: "Ink-Stained Overcoat",
        icon: "🧥🖋️",
        description: "You may be tortured, but with this coat, you can write better and have more clarity in your thoughts today.",
        stats: "+10 Con, +10 Cha",
        category: "Swift",
        rarity: "Legendary" },






    /* Hozier */
    { name: "Hozier's Hair", 
        icon: "💇", 
        description: "A locket of Hozier's hair that is imbued with power, lets the user cast spells more easily, use it to make your day more magical.", 
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

    { name: "Unreal Vine Bracelet", 
        icon: "🌿📿", 
        description: "This magical bracelet allows the wearer to immediately understand a new language that you choose for a day. Bhfuilis soranna sorcha Ach tagais 'nós na hoíche Trína chéile", 
        stats: "+5 Int, +6 Wis", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Clock of De Selby", 
        icon: "🌙", 
        description: "Before the dawn has come, you can block out the sun for stealth to reign true.", 
        stats: "+5 Dex, +3 Con", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Necklace of Quick New Music", 
        icon: "♫𓎤", 
        description: "The first time a creature hears your song with this necklace, they are enchanted towards you. Use this to turn a bad moment around.", 
        stats: "+4 Wis, +3 Int", 
        category: "Hozier", 
        rarity: "Common" },

    { name: "Woven Thread of Time", 
        icon: "🧵", 
        description: "A magical thread woven with forrest powers to rewind time to Put You Back Into a moment for a redo.", 
        stats: "+10 Wis", 
        category: "Hozier", 
        rarity: "Legendary" },

    { name: "Wings of Icarian", 
        icon: "🪽", 
        description: "Magical wings that allow you to leave the ground and be sky-bound. Leave your troubles for a while.", 
        stats: "+6 Int, +7 Con", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Meal of Goodwill", 
        icon: "💖🍲", 
        description: "If you don't know where to go next but every desire for going there, partake of this meal for clarity and direction.", 
        stats: "+5 Wis, +4 Int", 
        category: "Hozier", 
        rarity: "Common" },

    { name: "Mirror of Sharped Image", 
        icon: "🪞", 
        description: "Look into this mirror to see through all the lies your mind tells you, to see Who You Are.", 
        stats: "+6 Int, +4 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Wish of End", 
        icon: "😌", 
        description: "Take this wish with you to end any uneasiness and pain you are going through. Hope is a powerful thing my love, All Things End.", 
        stats: "+10 Con, +5 Wis", 
        category: "Hozier", 
        rarity: "Legendary" },

    { name: "Garment of Heat", 
        icon: "🔥", 
        description: "Use this magical garment From a Warmer Climate to warm your thoughts and body when all feels cold and 'Uiscefhuarithe'", 
        stats: "+5 Con, +3 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Tablet of Language", 
        icon: "👅🗣️", 
        description: "Take this tablet to speak any forgotten language of your choice for a day. Reminds you of home, and things forgotten.", 
        stats: "+5 Int, +5 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Cold Touch of Death Amulet", 
        icon: "💀𓌜", 
        description: "You shall never know the warm touch of death with this amulet, this allows Anything But death. Keep it close to remind you we are stuck together FOREVER", 
        stats: "+10 Con", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Beam of Abstract", 
        icon: "☄️🎇", 
        description: "Use this light to brighten up any night, See How it Shines.", 
        stats: "+5 Wis, +5 Cha", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Band of Knowing", 
        icon: "💭", 
        description: "Where this band in times of distress to know that I know you, you are not alone and you are loved.", 
        stats: "+6 Wis, +4 Con", 
        category: "Hozier", 
        rarity: "Common" },

    { name: "Spell of First Light", 
        icon: "☀️✨", 
        description: "Cast this spell to bring out the light and banish the darkness from your heart.", 
        stats: "+5 Wis, +5 Cha", 
        category: "Hozier", 
        rarity: "Rare" },

        /* Additional Hozier Items */

    { name: "Bogland Rosary", 
        icon: "📿🌫️", 
        description: "Wear this rosary like Real People Do to gain wisdom and constitution through trying times.", 
        stats: "+4 Wis, +3 Con", 
        category: "Hozier", 
        rarity: "Common" },

    { name: "Giggle at a funeral", 
        icon: "⛪", 
        description: "It's no laughing matter, but with this item you can find humor in the darkest of times.", 
        stats: "+6 Wis, +4 Cha", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Cherry Wine Chalice", 
        icon: "🍒🍷", 
        description: "Drink from this chalice to know that I am yours and you are mine. You can feel my love more fully today.", 
        stats: "+3 Cha, +4 Wis", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Work Song Shackles", 
        icon: "⛓️🎶", 
        description: "These shackles may give you toothaches, but they provide you with strength and endurance through the hardest moments today.", 
        stats: "+6 Con, +2 Str", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Angel of Small Death Feather", 
        icon: "🪶🕊️", 
        description: "Take this feather with you to fly above any troubles and have a sweeter breath today ;).", 
        stats: "+5 Dex, +3 Wis", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Sedated Poppy Ring", 
        icon: "🌺💍", 
        description: "Any way to distract or sedate, wear this ring to gain calmness in the wake of fear and pain.", 
        stats: "+4 Wis, +3 Int", 
        category: "Hozier", 
        rarity: "Common" },

    { name: "Arsonist's Lullaby Torch", 
        icon: "🔥🕯️", 
        description: "If all you have is the fire of this torch, you can still use it to light any darkness that comes your way today.", 
        stats: "+6 Str, -2 Wis", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "From Eden Apple", 
        icon: "🍎🌿", 
        description: "Babe, Theres nothing tragic about this apple, It provides you with wisdom and clarity today.", 
        stats: "+10 Wis, +4 Luck", 
        category: "Hozier", 
        rarity: "Legendary" },

    { name: "Nina Cried Power Drum", 
        icon: "🥁✊", 
        description: "You can cry power with this drum and gain strength and greater charisma today!", 
        stats: "+6 Cha, +3 Str", 
        category: "Hozier", 
        rarity: "Epic" },

    { name: "Movement Anklet", 
        icon: "🦶✨", 
        description: "Move me baby, you can move faster today and get things done quicker!", 
        stats: "+5 Dex, +3 Cha", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Shrike's Warning Bell", 
        icon: "🔔🕊️", 
        description: "All the goodness and wisdom is going with you now, ring this bell to ward off any bad feelings today.", 
        stats: "+6 Wis, +2 Int", 
        category: "Hozier", 
        rarity: "Rare" },

    { name: "Almost Sweet Harp String", 
        icon: "🎻", 
        description: "Play this harp to be still your foolish heart and gain wisdom and peace of mind today.", 
        stats: "+4 Cha, +4 Wis", 
        category: "Hozier", 
        rarity: "Common" },

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

    { name: "Boat of Little Light", 
        icon: "⛵🕯️", 
        description: "This mere boat of little light carries the you through disasters and hard times, use this to navigate the day.", 
        stats: "+5 Con, +4 Wis", 
        category: "Kahan", 
        rarity: "Rare" },

    { name: "Stick of Seasons", 
        icon: "🪄🍂", 
        description: "With this Stick you can Cancel out the Darkness of any seasonal depression, use liberally.", 
        stats: "+6 Wis, +3 Con", 
        category: "Kahan", 
        rarity: "Epic" },

    { name: "Winter Coat Atmosphere", 
        icon: "🌌🧥", 
        description: "Wear this coat to to feel the atmosphere of All My Love. Gain wisdom and constitution today.", 
        stats: "+7 Wis, +4 Con", 
        category: "Kahan", 
        rarity: "Epic" },

    { name: "Sending Stone Obsession", 
        icon: "🗣🪨", 
        description: "Use this stone to send a secret message to the one person you are obsessed with. I know they are thinking of you.", 
        stats: "+5 Cha, +3 Int", 
        category: "Kahan", 
        rarity: "Common" },

    { name: "Message of Importance", 
        icon: "🚨", 
        description: "This message magically attunes to the reader to tell them what they most need to hear today. You are somebody people want.", 
        stats: "+9 Wis, +4 Cha", 
        category: "Kahan", 
        rarity: "Legendary" },

    { name: "Glasses of New Perspective", 
        icon: "👓", 
        description: "These glasses grant the user with New Perspective on anyone they look at, take time to see someone in a new light.", 
        stats: "+5 Int, +5 Wis", 
        category: "Kahan", 
        rarity: "Rare" },

    { name: "Map of Everywhere, Everything", 
        icon: "🗺️", 
        description: "This map tells you where not to speed in life, use it to map out tough situations.", 
        stats: "+6 Int, +4 Wis", 
        category: "Kahan", 
        rarity: "Epic" },

    { name: "Orange Juice Clarity", 
        icon: "🍊", 
        description: "Drink this juice to gain clarity on any situation, provides comfort and longing.", 
        stats: "+5 Wis, +3 Con", 
        category: "Kahan", 
        rarity: "Rare" },




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
        description: "Rosebud, or kaching. No wait, Motherload, that'll do it right?? (When I asked you, you told me how to spell it so now its funny when I spell it wrong right??)", 
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

    { name: "Tom Nook's Ledger",
        icon: "📒💰",
        description: "Fortune bless you this day, all investments, be it financial or otherwise, will be fruitful this day.",
        stats: "+5 Luck",
        category: "Cozy Games",
        rarity: "Rare"
    },

    { name: "Isabelle's Bell",
        icon: "🔔🦝",
        description: "Ring this bell when you haven't been home in months to let some friends your back in town.",
        stats: "+5 Cha, +3 Wis",
        category: "Cozy Games",
        rarity: "Common"
        },

    { name: "Stardew Valley Flute",
        icon: "🪈🌾",
        description: "Summon yourself some courage and teleport away from stressful situations with this magical flute.",
        stats: "+7 Wis, +3 Con",
        category: "Cozy Games",
        rarity: "Epic"
        },


     { name: "Sorting Box of Comfort",
        icon: "📦🏠",
        description: "Use this box to sort out life's biggest messes and helps you unpack your feelings. Make sure to sort it A Little to the Left.",
        stats: "+6 Con, +3 Wis",
        category: "Cozy Games",
        rarity: "Epic"
        },

    { name: "Tunic of Strength",
        icon: "👕",
        description: "This warriors tunic provides you with strength and constitution to get through any tough day.",
        stats: "+7 Str, +2 Dex",
        category: "Cozy Games",
        rarity: "Epic"
        },

    { name: "Hylian Hoodie of Comfort", 
        icon: "🧝‍♂️👕", 
        description: "Ganon's personal clothing brand that grants the user strength beyond their own, use it while wrestling the kids!", 
        stats: "+7 Str, +5 Con", 
        category: "Cozy Games", 
        rarity: "Rare" },



    /* DnD */
    { name: "Potion of Extra Sleep", 
        icon: "🧪😴", 
        description: "A vial of restfulness, even if you get a crappy nights rest. Effects may vary, but hope is real.", 
        stats: "+6 Con, +2 Wis", 
        category: "DnD", 
        rarity: "Legendary" },

    { name: "Potion of Mild Inconvenience Prevention", 
        icon: "🧪🛡️", 
        description: "Stops the kids from inconveniencing you... you might need to chug a couple vials", 
        stats: "+5 Wis, +3 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Bard's Lute of Comfort", 
        icon: "🎼🎸", 
        description: "A rare lute that plays any song of your heart and grants the user with inspiration.", 
        stats: "+5 Cha, +2 Luck", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "D20 of Gentle Luck", 
        icon: "🎲✨", 
        description: "A D20 with only 19's and 20's on it, use this if today is too much for you, let me know.", 
        stats: "+20 Luck", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Wanderer's Map", 
        icon: "🗺️📌", 
        description: "A map of nostalgia. The user is forced to remember the places they've been and see how far they've come. I'm so proud of you my love.", 
        stats: "+5 Love, +3 Con", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Druid's Pocket Garden", 
        icon: "🌱🪴", 
        description: "A replenishing flower that casts a fermion that if sniffed grants restfulness and constitution.", 
        stats: "+5 Con, +3 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Ring of Quiet Mornings", 
        icon: "💍🌅", 
        description: "", 
        stats: "+4 Wis, +2 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Cloak of Emotional Armor", 
        icon: "🧥🛡️", 
        description: "", 
        stats: "+6 Con", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Boots of Getting Stuff Done", 
        icon: "🥾⚡", 
        description: "", 
        stats: "+4 Dex, +2 Con", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Amulet of Self-Trust", 
        icon: "📿✨", 
        description: "", 
        stats: "+5 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Helm of Clear Thoughts", 
        icon: "🪖💭", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Bracelet of Steady Hands", 
        icon: "📿👐", 
        description: "", 
        stats: "+4 Dex", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Lantern of Gentle Guidance", 
        icon: "🏮✨", 
        description: "", 
        stats: "+3 Wis, +2 Luck", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Scarf of Warm Assurance", 
        icon: "🧣❤️", 
        description: "", 
        stats: "+4 Con", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Cup of Endless Tea", 
        icon: "☕♾️", 
        description: "", 
        stats: "+3 Wis, +3 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Charm of Small Victories", 
        icon: "🍀🏆", 
        description: "", 
        stats: "+5 Luck", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Blanket of Instant Calm", 
        icon: "🛌✨", 
        description: "", 
        stats: "+6 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Mirror of Kind Reflections", 
        icon: "🪞💖", 
        description: "", 
        stats: "+4 Cha, +2 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Necklace of Deep Breaths", 
        icon: "📿🌬️", 
        description: "", 
        stats: "+5 Con", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Journal of Sorted Thoughts", 
        icon: "📖🖋️", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Ring of Boundary Setting", 
        icon: "💍🚧", 
        description: "", 
        stats: "+5 Wis, +2 Cha", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Pendant of Quiet Confidence", 
        icon: "🔮😌", 
        description: "", 
        stats: "+4 Cha", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Socks of Perfect Comfort", 
        icon: "🧦✨", 
        description: "", 
        stats: "+3 Con", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Belt of Emotional Stability", 
        icon: "👖🛡️", 
        description: "", 
        stats: "+6 Con, +2 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Stone of Grounding", 
        icon: "🪨🌍", 
        description: "", 
        stats: "+4 Con, +2 Wis", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Feather of Light Days", 
        icon: "🪶☀️", 
        description: "", 
        stats: "+5 Luck", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Charm of Saying No", 
        icon: "❌✨", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Candle of Evening Peace", 
        icon: "🕯️🌙", 
        description: "", 
        stats: "+3 Wis, +3 Con", 
        category: "DnD", 
        rarity: "Common" },

    { name: "Gloves of Gentle Strength", 
        icon: "🧤💪", 
        description: "", 
        stats: "+4 Str, +2 Con", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Key of Safe Returns", 
        icon: "🗝️🏠", 
        description: "", 
        stats: "+4 Luck, +2 Wis", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Token of Being Enough", 
        icon: "🪙💗", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Legendary" },

    { name: "Ribbon of Shared Burdens", 
        icon: "🎀🤝", 
        description: "", 
        stats: "+4 Love, +2 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Bookmark of Second Chances", 
        icon: "🔖✨", 
        description: "", 
        stats: "+5 Luck", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Compass of Inner North", 
        icon: "🧭💠", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Bracelet of Rest Days", 
        icon: "📿🛏️", 
        description: "", 
        stats: "+5 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Music Box of Familiar Songs", 
        icon: "🎶📦", 
        description: "", 
        stats: "+4 Wis, +2 Cha", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Coin of Good Timing", 
        icon: "🪙⏰", 
        description: "", 
        stats: "+6 Luck", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Crown of Quiet Authority", 
        icon: "👑🕊️", 
        description: "", 
        stats: "+6 Cha, +2 Wis", 
        category: "DnD", 
        rarity: "Legendary" },

    { name: "Shawl of Soft Landings", 
        icon: "🧣🪶", 
        description: "", 
        stats: "+4 Con, +2 Luck", 
        category: "DnD", 
        rarity: "Uncommon" },

    { name: "Talisman of Tomorrow", 
        icon: "🔮🌅", 
        description: "", 
        stats: "+5 Wis, +3 Luck", 
        category: "DnD", 
        rarity: "Legendary" },

    { name: "Badge of Earned Pride", 
        icon: "🎖️💪", 
        description: "", 
        stats: "+4 Cha, +2 Con", 
        category: "DnD", 
        rarity: "Rare" },

    { name: "Thread of Patience", 
        icon: "🧵⏳", 
        description: "", 
        stats: "+6 Wis", 
        category: "DnD", 
        rarity: "Epic" },

    { name: "Pocket Clock of Slow Time", 
        icon: "⌚🐢", 
        description: "", 
        stats: "+5 Con", 
        category: "DnD", 
        rarity: "Rare" },



    /* Axolotls */
    { name: "Mossy Axolotl Plush", 
        icon: "🫧🦎", 
        description: "Hug this bad boi to receive so much love.", 
        stats: "+3 Cha, +5 Con", 
        category: "Axolotls", 
        rarity: "Common" },

    { name: "Axolotl Period Relief", 
        icon: "🌊🧲", 
        description: "A bracelet that lightens the effects of periods. Turns red by the end of the day.", 
        stats: "+6 Con, +3 Wis", 
        category: "Axolotls", 
        rarity: "Rare" },

    { name: "Axolotl Crown", 
        icon: "👑🦎", 
        description: "Tiny crown that brings the wearer much needed confidence. You got this! Waterproof.", 
        stats: "+6 Cha, +2 Wis", 
        category: "Axolotls", 
        rarity: "Epic" },

    { name: "Axolotl Bubble Wand", 
        icon: "🫧✨", 
        description: "Blow a bubble (and maybe me) and your burdens become lighter. Use very liberally.", 
        stats: "+2 Cha, +4 Wis", 
        category: "Axolotls", 
        rarity: "Common" },

    { name: "Axolotl Songbook", 
        icon: "📚🦎", 
        description: "A rare songbook full of your favorite lyrics you didn't even know. Lookin at you Noah Kahan. An axolotl sings them when opened.", 
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

    { name: "Oliver's Energy",
        icon: "⚡",
        description: "Sometimes hes crazy, sometimes hes chill... Never an in-between. Y'know what, I admire it.",
        stats: "+5 Dex, +3 Con",
        category: "Kids",
        rarity: "Rare"
    },

    { name: "Coloring Book of Creativity",
        icon: "💡",
        description: "Use this coloring book to gain ideas for creativity and artistic prowess.",
        stats: "+6 Int, +4 Cha",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Math Whiz Ring",
        icon: "🔢",
        description: "No amount of math will take you down with this today!",
        stats: "+8 Int, +2 Wis",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Ollie's Heart",
        icon: "❤︎",
        description: "No one loves more fully and quietly as Ollie. Take this little bear's heart with ya.",
        stats: "+10 Love, +2 Cha",
        category: "Kids",
        rarity: "Legendary"
    },

    { name: "Oliver's Persistence",
        icon: "😫",
        description: "You'll never get a no for an answer if you keep asking! Take Oliver's persistence with you to never give up on your dreams!",
        stats: "+7 Con, -2 Cha",
        category: "Kids",
        rarity: "Rare"
    },

    { name: "Ollie's Learning",
        icon: "🎓",
        description: "He learns so fast, Our big boy is so amazing. Take his learning with you to soak up knowledge quickly!",
        stats: "+8 Int, +2 Wis",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Oliver's Focus",
        icon: "🔎",
        description: "Dude's focus is unmatched, take this energy with you as you study.",
        stats: "+7 Int, + 2 Wis",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Oliver's Crazy",
        icon: "🤪",
        description: "Sometimes its okay to be a crazy little bear.",
        stats: "+5 Cha, -3 Int",
        category: "Kids",
        rarity: "Common"
    },

    { name: "Ava's Charisma",
        icon: "👧",
        description: "Ava is wild and excitable, if a bit too much sometimes 😂, take her charisma with you and be confident without fear!",
        stats: "+7 Cha, -1 Int",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Ava's Smile",
        icon: "👧",
        description: "Her smile could cure the darkest heart, take it with you to be a light to the world today.",
        stats: "+5 Cha, +3 Con",
        category: "Kids",
        rarity: "Common"
    },

    { name: "Ava's Dance Moves",
        icon: "💃",
        description: "Ava's got moves for days! Use that mental image to brighten up your day today my love.",
        stats: "+6 Dex, +2 Cha",
        category: "Kids",
        rarity: "Rare"
    },

    { name: "Ava's Imagination",
        icon: "✨🙌",
        description: "Ava can play with anything. Allow her imagination to guide your creativity today!",
        stats: "+8 Int, +2 Wis",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Ava's Energy",
        icon: "🔋⚡",
        description: "Better than 100 monsters, might make you a lil grumpy later tho.",
        stats: "+5 Dex, +5 Con",
        category: "Kids",
        rarity: "Common"
    },

    { name: "Ava's Laugh",
        icon: "😂",
        description: "Remind yourself this laugh is the reason to life for and to build a strong future for. Ava loves and laughs like no other.",
        stats: "+20 Luck, +10 Love",
        category: "Kids",
        rarity: "Legendary"
    },

    { name: "Ava's Curiosity",
        icon: "🤯",
        description: "Use Ava's curiosity to help you study and learn better today!",
        stats: "+7 Int, +3 Wis",
        category: "Kids",
        rarity: "Epic"
    },

    { name: "Ava's Kindness",
        icon: "🫶",
        description: "Don't forget, everyone deserve to be loved and treated with the kindness of an Ava... As long as she's not hangry.",
        stats: "+10 Love, +2 Cha",
        category: "Kids",
        rarity: "Legendary"
    },

    { name: "Ava's Hug",
        icon: "🫂🥹",
        description: "She squeezes you with all the love that little body can manage! Take that love with you where ere you go.",
        stats: "+5 Con, +5 Love",
        category: "Kids",
        rarity: "Epic"
    },



    // Ben
    { name: "Ben's Butt",
        icon: "🍑",
        description: "Take my Butt with you to get a lil Horny and distracted... hehe🤭",
        stats: "-3 Con, +5 Horny",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Hug",
        icon: "🤗",
        description: "Warmer than a thousand suns, Tighter than the largest snake. Love me for goodness sake.",
        stats: "+10 Love",
        category: "Ben",
        rarity: "Legendary"
    },

    { name: "Ben's Giant Massive Dictionary",
        icon: "📙👀",
        description: "Only smart people read from this Dict, Open it offend and suck up all the creamy knowledge within.",
        stats: "+15 Int",
        category: "Ben",
        rarity: "Legendary"
    },

    { name: "Ben's Hairy Chest",
        icon: "🪒",
        description: "This hairy chest provides you with the intensity of a bear and charisma with flair!",
        stats: "+5 Cha",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Poetic Flare",
        icon: "🧨📜",
        description: "Could be wise, could be dumb, but either way you'll have some fun. Use this to cheaply get compliments for stuff you say. Works for me that way.",
        stats: "+7 Cha, +3 Int",
        category: "Ben",
        rarity: "Rare"
    },

    { name: "Ben's Fart",
        icon: "💨",
        description: "Sorry dawg, this is just a bad one, but maybe it'll bring you luck?",
        stats: "-2 Cha, +5 Luck",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Cuddles",
        icon: "❤️",
        description: "Will these cuddles stay just cuddles? Guess you'll find out with a bruise on your butt. Use with caution.",
        stats: "+10 Love, +5 Con",
        category: "Ben",
        rarity: "Epic"
    },

    { name: "Ben's Grip",
        icon: "✊🏻",
        description: "This grip holds tight around your neck, or hips and never lets go till you're satisfied.",
        stats: "+5 Str, -5 Con",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Love",
        icon: "♡🫵🏻",
        description: "A wonderful Item and cherished piece of legendary lore! With this love, nothing can stop you from achieving your dreams!",
        stats: "+20 Love",
        category: "Ben",
        rarity: "Legendary"
    },

    { name: "Ben's Pen",
        icon: "✍🏻",
        description: "Hey i lost this, give it back pls. But also it makes you smarter... so I guess keep it.",
        stats: "+10 Int, +5 Cha",
        category: "Ben",
        rarity: "Epic"
    },

    { name: "Ben's Voice",
        icon: "🗣",
        description: "Let it whisper sweet nothings to you when you can't see the good in yourself.",
        stats: "+7 Cha, +3 Int",
        category: "Ben",
        rarity: "Epic"
    },

    { name: "Ben's Kiss",
        icon: "😘",
        description: "This item is so common it might as well be all over your body at this point.",
        stats: "+15 Love, +5 Cha",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Muskles",
        icon: "💪",
        description: "You strgth, ya?",
        stats: "-2 Int, +10 Str",
        category: "Ben",
        rarity: "Rare"
    },

    { name: "Ben's Magical Dick",
        icon: "🍆😩",
        description: "Richard is a nice fellow who will carry sacks for you, he loves eggplants, you can have him today.",
        stats: "-4 Str, +10 Sack Carrying",
        category: "Ben",
        rarity: "Epic"
    },

    { name: "Ben's Rod of Hardness",
        icon: "🪄",
        description: "",
        stats: "+10 Str, +5 Con",
        category: "Ben",
        rarity: "Epic"
    },

    { name: "Ben's Shield of Protection",
        icon: "🛡️",
        description: "I'm just giving this away cuz I never use it anyways.",
        stats: "+10 Con",
        category: "Ben",
        rarity: "Common"
    },

    { name: "Ben's Fiery Ring",
        icon: "💍❤️‍🔥",
        description: "Use this ring to set ablaze the fire in your heart. You've already lit mine so I'm good.",
        stats: "+5 Cha, +5 Int",
        category: "Ben",
        rarity: "Rare"
    },
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
