// Physical vibration for mobile devices/controllers
function triggerPhysicalVibration(duration = 40) {
    if (navigator.vibrate) {
        navigator.vibrate(duration);
    }
}

function randomizeBotNames() {
    let shuffled = [...botNamesPool].sort(() => Math.random() - 0.5);
    bots.forEach((bot, idx) => {
        bot.name = shuffled[idx % shuffled.length];
    });
    localStorage.setItem("arena_bots_data", JSON.stringify(bots));
}

// --- 1. BALANCED WORD BANK (GRADES K-7 FULLY POPULATED) ---
const wordDatabase = {
    "K": [
        { word: "cat", definition: "A small furry animal often kept as a pet." },
        { word: "dog", definition: "A common pet that likes to bark and wag its tail." },
        { word: "sun", definition: "The bright star that lights up the sky during the day." },
        { word: "run", definition: "To move very fast on your feet." },
        { word: "big", definition: "Very large in size." },
        { word: "red", definition: "The color of an apple or a stop sign." },
        { word: "hat", definition: "Something you wear on your head." },
        { word: "hop", definition: "To make a small jump on one foot." },
        { word: "pig", definition: "A pink farm animal that oinks." },
        { word: "wet", definition: "Covered with water." },
        { word: "cup", definition: "A small container used for drinking." },
        { word: "map", definition: "A drawing that shows where places are." },
        { word: "toy", definition: "Something you play with." },
        { word: "box", definition: "A container made of cardboard or wood." },
        { word: "sad", definition: "Feeling unhappy or down." },
        { word: "hot", definition: "Having a high temperature, like fire." },
        { word: "mud", definition: "Wet, sticky, soft dirt." },
        { word: "bug", definition: "A very small insect." },
        { word: "van", definition: "A large car used for carrying things or people." },
        { word: "sit", definition: "To rest your body on a chair." },
        { word: "pen", definition: "A tool used for writing with ink." },
        { word: "net", definition: "A tool made of mesh used to catch fish or butterflies." },
        { word: "bag", definition: "A container used for carrying things." },
        { word: "bat", definition: "A wooden stick used in baseball, or a flying mammal." },
        { word: "dig", definition: "To make a hole in the ground." },
        { word: "fox", definition: "A wild animal with a bushy tail." },
        { word: "bed", definition: "A piece of furniture that you sleep on." },
        { word: "cow", definition: "A large farm animal that makes milk." },
        { word: "egg", definition: "An oval object produced by a chicken." },
        { word: "key", definition: "A metal tool used to open locks." },
        { word: "log", definition: "A thick piece of wood from a tree." },
        { word: "nut", definition: "A hard-shelled dry fruit or seed." },
        { word: "jam", definition: "A sweet spread made from fruit." },
        { word: "fun", definition: "Something that brings joy or playfulness." },
        { word: "sky", definition: "The space above the earth where clouds float." },
        { word: "car", definition: "A vehicle with four wheels used for driving." },
        { word: "bus", definition: "A very large vehicle that carries many passengers." },
        { word: "bee", definition: "A yellow and black insect that makes honey." },
        { word: "day", definition: "The time when the sun is shining." },
        { word: "boy", definition: "A male child." }
    ],
    "1": [
        { word: "brave", definition: "Ready to face danger or pain without fear." },
        { word: "cloud", definition: "A white or gray shape in the sky made of water drops." },
        { word: "float", definition: "To rest on top of water without sinking." },
        { word: "grass", definition: "The green plants that cover lawns and fields." },
        { word: "light", definition: "Something that makes things bright so you can see." },
        { word: "night", definition: "The dark time when most people sleep." },
        { word: "paper", definition: "Thin material used for writing, drawing, or wrapping." },
        { word: "rain", definition: "Water falling in drops from the sky." },
        { word: "smile", definition: "A happy look on your face that turns your lips up." },
        { word: "train", definition: "A group of connected cars that move on tracks." },
        { word: "under", definition: "Below or beneath something." },
        { word: "water", definition: "A clear liquid that we drink and use to wash." },
        { word: "green", definition: "The color of leaves and growing grass." },
        { word: "house", definition: "A building where people live." },
        { word: "learn", definition: "To get knowledge or skill in something." },
        { word: "write", definition: "To make letters or words on paper with a pen." },
        { word: "count", definition: "To say numbers in order one by one." },
        { word: "happy", definition: "Feeling joy or pleasure." },
        { word: "plant", definition: "A living thing that grows in the ground." },
        { word: "sweet", definition: "Having a taste like sugar or honey." },
        { word: "clean", definition: "Free from dirt or mess." },
        { word: "small", definition: "Not big; little." },
        { word: "drink", definition: "To take liquid into your mouth and swallow it." },
        { word: "stand", definition: "To be on your feet in an upright position." },
        { word: "speak", definition: "To say words with your voice." },
        { word: "friend", definition: "A person you like and enjoy spending time with." },
        { word: "table", definition: "A piece of furniture with a flat top and legs." },
        { word: "clock", definition: "A tool that shows what time it is." },
        { word: "apple", definition: "A round fruit with red, green, or yellow skin." },
        { word: "sleep", definition: "To rest your mind and body with your eyes closed." },
        { word: "storm", definition: "Heavy rain, snow, or wind." },
        { word: "stone", definition: "A hard, solid piece of rock." },
        { word: "brush", definition: "A tool with bristles used for cleaning or painting." },
        { word: "bread", definition: "A common food made by baking flour and water." },
        { word: "spoon", definition: "A tool with a small bowl-shaped end used for eating." },
        { word: "stamp", definition: "A small piece of paper put on mail to show payment." },
        { word: "truck", definition: "A large, strong vehicle used to carry heavy loads." },
        { word: "watch", definition: "To look at something carefully for a while." },
        { word: "earth", definition: "The planet we live on." },
        { word: "mouse", definition: "A tiny rodent with a long tail." }
    ],
    "2": [
        { word: "planet", definition: "A large round object in space that circles a star." },
        { word: "summer", definition: "The warmest season of the year." },
        { word: "winter", definition: "The coldest season of the year." },
        { word: "spring", definition: "The season when plants start to grow and flowers bloom." },
        { word: "autumn", definition: "The season when leaves fall from the trees." },
        { word: "forest", definition: "A large area covered with many trees." },
        { word: "ocean", definition: "The huge body of salty water that covers most of the Earth." },
        { word: "desert", definition: "A dry, sandy land with very little water or plants." },
        { word: "river", definition: "A natural stream of water flowing in a channel to the sea." },
        { word: "lake", definition: "A large body of water surrounded by land." },
        { word: "mountain", definition: "A very high hill with steep sides." },
        { word: "valley", definition: "Low land between hills or mountains." },
        { word: "island", definition: "A piece of land completely surrounded by water." },
        { word: "nature", definition: "All the living things and objects in the world not made by humans." },
        { word: "animal", definition: "A living thing that can move and eat food." },
        { word: "flower", definition: "The colorful part of a plant that makes seeds." },
        { word: "garden", definition: "A piece of ground where vegetables or flowers are grown." },
        { word: "bridge", definition: "A structure built over a river or road so people can cross." },
        { word: "shadow", definition: "A dark shape made when something blocks the light." },
        { word: "castle", definition: "A large, strong building built in the past to protect people." },
        { word: "pocket", definition: "A small bag sewn into clothing to hold things." },
        { word: "hammer", definition: "A tool with a heavy metal head used for hitting nails." },
        { word: "pencil", definition: "A wooden tool used for writing or drawing." },
        { word: "butter", definition: "A yellow food made from cream." },
        { word: "cheese", definition: "A solid food made from milk." },
        { word: "copper", definition: "A soft, red-brown metal." },
        { word: "blanket", definition: "A warm cover used on a bed." },
        { word: "bubble", definition: "A thin ball of liquid filled with air." },
        { word: "monkey", definition: "A playful animal with a long tail that climbs trees." },
        { word: "rabbit", definition: "A small animal with long ears and soft fur." },
        { word: "spider", definition: "An eight-legged creature that spins webs to catch bugs." },
        { word: "feather", definition: "One of the soft, light things that cover a bird's body." },
        { word: "yellow", definition: "The color of a lemon or ripe banana." },
        { word: "window", definition: "An opening in a wall filled with glass to let in light." },
        { word: "market", definition: "A public place where people buy and sell goods." },
        { word: "camera", definition: "A tool used for taking photos or videos." },
        { word: "school", definition: "A place where children go to learn." },
        { word: "active", definition: "Always moving or doing things." },
        { word: "silver", definition: "A shiny, gray-white valuable metal." }
    ],
    "3": [
        { word: "dinosaur", definition: "A group of reptiles that lived millions of years ago." },
        { word: "treasure", definition: "A collection of gold, silver, jewels, or valuable things." },
        { word: "distance", definition: "The amount of space between two places." },
        { word: "creative", definition: "Having the ability to make or think of new things." },
        { word: "physical", definition: "Relating to the body rather than the mind." },
        { word: "language", definition: "The system of words or signs that people use to talk." },
        { word: "computer", definition: "An electronic machine that stores and processes data." },
        { word: "negative", definition: "Expressing 'no' or showing a lack of hope." },
        { word: "positive", definition: "Full of hope and confidence." },
        { word: "practice", definition: "Doing something over and over to get better at it." },
        { word: "separate", definition: "To keep things apart or divide them." },
        { word: "straight", definition: "Moving in one direction without bending or curving." },
        { word: "struggle", definition: "To try very hard to do something difficult." },
        { word: "terrible", definition: "Very bad, awful, or unpleasant." },
        { word: "tomorrow", definition: "The day after today." },
        { word: "vacation", definition: "A period of time spent away from home or school for fun." },
        { word: "valuable", definition: "Worth a lot of money or highly important." },
        { word: "weather", definition: "The state of the air outside, like rain, sun, or wind." },
        { word: "whisper", definition: "To speak very softly using only your breath." },
        { word: "wonder", definition: "To feel curious or want to know something." },
        { word: "young", definition: "In an early stage of life; not old." },
        { word: "zero", definition: "The number that means none or nothing." },
        { word: "balance", definition: "A state of staying upright and steady without falling." },
        { word: "caution", definition: "Care taken to avoid danger or mistakes." },
        { word: "century", definition: "A period of one hundred years." },
        { word: "custom", definition: "A traditional way of doing something in a culture." },
        { word: "damage", definition: "Harm or injury that lowers the value or usefulness of something." },
        { word: "puzzle", definition: "A game, toy, or problem designed to test mental skills." },
        { word: "silent", definition: "Completely quiet with no sound at all." },
        { word: "texture", definition: "The feel of a surface, like rough, smooth, or soft." }
    ],
    "4": [
        { word: "gargantuan", definition: "Enormously big; huge." },
        { word: "monotonous", definition: "Dull, tedious, and repetitious; lacking in variety." },
        { word: "conspire", definition: "Make secret plans jointly to commit an unlawful act." },
        { word: "navigate", definition: "Plan and direct the route or course of a vehicle or ship." },
        { word: "emphasize", definition: "Give special importance or prominence to something in speaking or writing." },
        { word: "absolute", definition: "Complete, perfect, or not limited in any way." },
        { word: "beacon", definition: "A light or fire set up in a high position as a warning or guide." },
        { word: "chronological", definition: "Arranged in the order of time that events occurred." },
        { word: "deceive", definition: "To make someone believe something that is not true; trick." },
        { word: "expand", definition: "To become larger in size, bulk, or volume." },
        { word: "huddle", definition: "To crowd close together in a tight group." },
        { word: "mimic", definition: "To copy the actions or words of another person." },
        { word: "permanent", definition: "Lasting or intended to last for a very long time without change." },
        { word: "release", definition: "To set free or let go of something." },
        { word: "sensible", definition: "Showing good judgment, wisdom, or common sense." },
        { word: "typical", definition: "Showing all the usual traits of a certain group or thing." },
        { word: "vanish", definition: "To disappear quickly from sight." },
        { word: "boundary", definition: "A line or border that marks the limits of an area." },
        { word: "collapse", definition: "To fall down or cave in suddenly." },
        { word: "eager", definition: "Feeling or showing a lot of interest or excitement." },
        { word: "breeze", definition: "A gentle, light wind." },
        { word: "construct", definition: "To build or put together parts to form something." },
        { word: "cascade", definition: "A small waterfall pouring down in stages." },
        { word: "dynamic", definition: "Constant change, activity, or progress." },
        { word: "factor", definition: "A circumstance, fact, or influence that contributes to a result." }
    ],
    "5": [
        { word: "abolish", definition: "To formally put an end to a system, practice, or law." },
        { word: "accurate", definition: "Correct in all details; exact and precise." },
        { word: "biology", definition: "The scientific study of living organisms and their environments." },
        { word: "dynamic", definition: "Full of energy, force, or active motion." },
        { word: "ecosystem", definition: "A biological community of interacting organisms and their physical environment." },
        { word: "friction", definition: "The resistance that one surface meets when moving over another." },
        { word: "gravity", definition: "The force that attracts a body toward the center of the earth." },
        { word: "heritage", definition: "Valued objects, traditions, and qualities passed down from previous generations." },
        { word: "intercept", definition: "To obstruct someone or something so as to prevent them from reaching a destination." },
        { word: "logic", definition: "Reasoning conducted or assessed according to strict principles of validity." },
        { word: "maximum", definition: "The greatest amount, size, or intensity possible." },
        { word: "nostalgic", definition: "Feeling a sentimental longing or affection for the past." },
        { word: "nucleus", definition: "The central and most important part of an object, movement, or cell." },
        { word: "obstacle", definition: "A thing that blocks one's way or prevents progress." },
        { word: "parallel", definition: "Side by side and having the same distance continuously between them." },
        { word: "protest", definition: "An expression or declaration of objection, disapproval, or dissent." },
        { word: "qualify", definition: "Be entitled to a particular benefit or privilege by fulfilling a condition." },
        { word: "recall", definition: "To bring back into one's mind, remember, or officially summon back." },
        { word: "species", definition: "A group of living organisms consisting of similar individuals capable of exchanging genes." },
        { word: "transparent", definition: "Allowing light to pass through so that objects behind can be distinctly seen." },
        { word: "undergo", definition: "To experience or subject to something, such as a process or change." },
        { word: "vibrate", definition: "To move continuously and rapidly to and fro." },
        { word: "widespread", definition: "Found or distributed over a large area or among many people." },
        { word: "yield", definition: "Produce or provide a natural, agricultural, or industrial product." },
        { word: "zenith", definition: "The time at which something is most powerful, successful, or at its highest point." }
    ],
    "6": [
        { word: "manipulate", definition: "Handle or control something in a skillful manner." },
        { word: "accurate", definition: "Correct in all details; exact." },
        { word: "synthesize", definition: "Combine a number of components into a coherent whole." },
        { word: "ephemeral", definition: "Lasting for a very short time." },
        { word: "cacophony", definition: "A harsh, discordant mixture of sounds." },
        { word: "alternate", definition: "Occur in turn repeatedly; take turns." },
        { word: "boycott", definition: "Withdraw from commercial or social relations with a country, organization, or person as a punishment or protest." },
        { word: "compact", definition: "Closely and neatly packed together; dense." },
        { word: "dilute", definition: "Make a liquid thinner or weaker by adding water or another solvent to it." },
        { word: "extract", definition: "Remove or take out, especially by effort or force." },
        { word: "fusion", definition: "The process or result of joining two or more things together to form a single entity." },
        { word: "generation", definition: "All of the people born and living at about the same time." },
        { word: "hazard", definition: "A danger or risk." },
        { word: "ignite", definition: "Catch fire or cause to catch fire." },
        { word: "kinetic", definition: "Relating to or resulting from motion." },
        { word: "luxury", definition: "The state of great comfort and extravagant living." },
        { word: "massive", definition: "Large and heavy or solid." },
        { word: "negotiate", definition: "Try to reach an agreement or compromise by discussion with others." },
        { word: "originate", definition: "Have a specified beginning; arise." },
        { word: "precise", definition: "Marked by exactness and accuracy of expression or detail." },
        { word: "reluctant", definition: "Unwilling and hesitant; disinclined." },
        { word: "solar", definition: "Relating to or determined by the sun." },
        { word: "tangible", definition: "Perceptible by touch; clear and definite; real." },
        { word: "unique", definition: "Being the only one of its kind; unlike anything else." },
        { word: "visible", definition: "Able to be seen." }
    ],
    "7": [
        { word: "ubiquitous", definition: "Present, appearing, or found everywhere." },
        { word: "perfunctory", definition: "An action carried out with a minimum of effort or reflection." },
        { word: "capricious", definition: "Given to sudden and unaccountable changes of mood or behavior." },
        { word: "aesthetic", definition: "Concerned with beauty or the appreciation of beauty." },
        { word: "juxtaposition", definition: "Two things being placed close together with contrasting effect." },
        { word: "adjacent", definition: "Next to or adjoining something else." },
        { word: "complex", definition: "Consisting of many different and connected parts." },
        { word: "cultivate", definition: "Prepare and use land for crops, or try to develop a skill or quality." },
        { word: "diagram", definition: "A simplified drawing showing the appearance, structure, or workings of something." },
        { word: "element", definition: "A part or aspect of something abstract, especially one that is essential or characteristic." },
        { word: "evaluate", definition: "Form an idea of the amount, number, or value of; assess." },
        { word: "fragile", definition: "Easily broken or damaged." },
        { word: "global", definition: "Relating to the whole world; worldwide." },
        { word: "highlight", definition: "An outstanding part of an event or period of time." },
        { word: "illusion", definition: "A thing that is or is likely to be wrongly perceived or interpreted by the senses." },
        { word: "isolate", definition: "Identify something and examine or treat it separately." },
        { word: "justify", definition: "Show or prove to be right or reasonable." },
        { word: "layer", definition: "A sheet, quantity, or thickness of material covering a surface or body." },
        { word: "passive", definition: "Accepting or allowing what happens or what others do, without active response or resistance." },
        { word: "query", definition: "A question, especially one expressing doubt or requesting information." },
        { word: "register", definition: "Enter or record on an official list or directory." },
        { word: "status", definition: "The relative social, professional, or official standing of someone or something." },
        { word: "tension", definition: "The state of being stretched tight, or mental or emotional strain." },
        { word: "valid", definition: "Having a sound basis in logic or fact; reasonable or cogent." },
        { word: "widespread", definition: "Found or distributed over a large area or among many people." }
    ], // Keep this trailing bracket exactly like this! We'll append Grade 8 here next.
    "8": [
        { word: "facetious", definition: "Treating serious issues with deliberately inappropriate humor." },
        { word: "anomaly", definition: "Something that deviates from what is standard, normal, or expected." },
        { word: "melancholy", definition: "A feeling of pensive sadness, typically with no obvious cause." },
        { word: "grandiloquent", definition: "Pompous or extravagant in language, style, or manner." },
        { word: "surreptitious", definition: "Kept secret, especially because it would not be approved of." },
        { word: "adversary", definition: "One's opponent in a contest, conflict, or dispute." },
        { word: "conspicuous", definition: "Standing out so as to be clearly visible." },
        { word: "formidable", definition: "Inspiring fear or respect through being impressively large or powerful." },
        { word: "inevitable", definition: "Certain to happen; unavoidable." },
        { word: "resilient", definition: "Able to withstand or recover quickly from difficult conditions." },
        { word: "prosperous", definition: "Successful in material terms; flourishing financially." },
        { word: "subtle", definition: "Delicate or precise as to be difficult to analyze or describe." },
        { word: "vigilant", definition: "Keeping careful watch for possible danger or difficulties." },
        { word: "scarcity", definition: "The state of being scarce or in short supply." },
        { word: "vulnerable", definition: "Susceptible to physical or emotional attack or harm." },
        { word: "provocative", definition: "Causing annoyance, anger, or another strong reaction on purpose." },
        { word: "tactic", definition: "An action or strategy carefully planned to achieve a specific end." },
        { word: "coax", definition: "Gently and persistently persuade someone to do something." },
        { word: "elude", definition: "Evade or escape from a danger, enemy, or pursuer." },
        { word: "plausible", definition: "Seeming reasonable or probable." },
        { word: "subordinate", definition: "Lower in rank or position." },
        { word: "innovate", definition: "Make changes in something established, especially by introducing new methods." },
        { word: "retrospect", definition: "A survey or review of a past course of events or period of time." },
        { word: "validate", definition: "Check or prove the validity or accuracy of something." }
    ],
    "9": [
        { word: "sesquipedalian", definition: "A very long word, or using very long words." },
        { word: "pulchritude", definition: "Great physical beauty." },
        { word: "magnanimous", definition: "Generous or forgiving, especially toward a rival." },
        { word: "mercurial", definition: "Subject to sudden or unpredictable changes of mood." },
        { word: "pernicious", definition: "Having a harmful effect, especially in a gradual or subtle way." },
        { word: "benevolent", definition: "Well-meaning and kindly." },
        { word: "ephemeral", definition: "Lasting for a very short time." },
        { word: "capricious", definition: "Given to sudden and unaccountable changes of mood or behavior." },
        { word: "audacious", definition: "Showing a willingness to take surprisingly bold risks." },
        { word: "lucid", definition: "Expressed clearly; easy to understand." },
        { word: "loquacious", definition: "Tending to talk a great deal; talkative." },
        { word: "mitigate", definition: "Make less severe, serious, or painful." },
        { word: "pragmatic", definition: "Dealing with things sensibly and realistically based on practical considerations." },
        { word: "superfluous", definition: "Unnecessary, especially through being more than enough." },
        { word: "tenacious", definition: "Tending to keep a firm hold of something; clinging or adhering closely." },
        { word: "zealous", definition: "Having or showing great energy or enthusiasm in pursuit of a cause." },
        { word: "apathetic", definition: "Showing or feeling no interest, enthusiasm, or concern." },
        { word: "corroborate", definition: "Confirm or give support to a statement, theory, or finding." },
        { word: "deviate", definition: "Depart from an established course or standard." },
        { word: "exacerbate", definition: "Make a problem, bad situation, or negative feeling worse." },
        { word: "impetuous", definition: "Acting or done quickly and without thought or care." },
        { word: "obsequious", definition: "Obedient or attentive to an excessive or servile degree." },
        { word: "ostentatious", definition: "Designed to impress or attract notice." },
        { word: "reticent", definition: "Not revealing one's thoughts or feelings readily." }
    ],
    "10": [
        { word: "gregarious", definition: "Fond of company; sociable." },
        { word: "equanimity", definition: "Mental calmness, composure, and evenness of temper." },
        { word: "lugubrious", definition: "Looking or sounding sad and dismal." },
        { word: "sycophant", definition: "A person who acts excessively flattering toward someone important for advantage." },
        { word: "solipsism", definition: "The theory that the self is the only thing that can be known to exist." },
        { word: "acquiesce", definition: "Accept something reluctantly but without protest." },
        { word: "belligerent", definition: "Hostile and aggressive." },
        { word: "dearth", definition: "A scarcity or lack of something." },
        { word: "esoteric", definition: "Intended for or likely to be understood by only a small number of people with specialized knowledge." },
        { word: "garrulous", definition: "Excessively talkative, especially on trivial matters." },
        { word: "harangue", definition: "A lengthy and aggressive speech." },
        { word: "iconoclast", definition: "A person who attacks cherished beliefs or institutions." },
        { word: "juxtapose", definition: "Place or deal with close together for contrasting effect." },
        { word: "malleable", definition: "Able to be hammered or pressed permanently out of shape without breaking." },
        { word: "nefarious", definition: "Wicked or criminal activity." },
        { word: "obdurate", definition: "Stubbornly refusing to change one's opinion or course of action." },
        { word: "paradigmatic", definition: "Serving as a typical example or pattern of something." },
        { word: "quintessential", definition: "Representing the most perfect or typical example of a quality or class." },
        { word: "recalcitrant", definition: "Having an obstinately uncooperative attitude toward authority." },
        { word: "salient", definition: "Most noticeable or important." },
        { word: "taciturn", definition: "Reserved or uncommunicative in speech; saying little." },
        { word: "unctuous", definition: "Excessively flattering or oily in expression or manner." },
        { word: "vacillate", definition: "Alternate or waver between different opinions or actions." },
        { word: "winsome", definition: "Attractive or appealing in appearance or character." }
    ],
    "11": [
        { word: "refulgent", definition: "Shining brightly." },
        { word: "quixotic", definition: "Exceedingly idealistic, unrealistic, and impractical." },
        { word: "puerile", definition: "Childishly silly and trivial." },
        { word: "terpsichorean", definition: "Relating to dancing." },
        { word: "peripatetic", definition: "Traveling from place to place, in particular working in various places." },
        { word: "alacrity", definition: "Brisk and cheerful readiness." },
        { word: "bilateral", definition: "Having or relating to two sides; affecting both sides." },
        { word: "chicanery", definition: "The use of trickery to achieve a political, financial, or legal purpose." },
        { word: "deleterious", definition: "Causing harm or damage." },
        { word: "enervate", definition: "Cause someone to feel drained of energy or vitality." },
        { word: "fatuous", definition: "Silly and pointless." },
        { word: "histrionic", definition: "Overly theatrical or melodramatic in character or style." },
        { word: "impugn", definition: "Dispute the truth, validity, or honesty of a statement or motive." },
        { word: "lucrative", definition: "Producing a great deal of profit." },
        { word: "multifarious", definition: "Many and of various types." },
        { word: "nihilism", definition: "The rejection of all religious and moral principles, often in the belief that life is meaningless." },
        { word: "obfuscate", definition: "Render obscure, unclear, or unintelligible." },
        { word: "parsimonious", definition: "Unwilling to spend money or use resources; stingy or frugal." },
        { word: "redoubtable", definition: "Formidable, especially as an opponent." },
        { word: "sanguine", definition: "Optimistic or positive, especially in an apparently bad or difficult situation." },
        { word: "tempestuous", definition: "Characterized by strong and turbulent or conflicting emotion." },
        { word: "variegated", definition: "Exhibiting different colors, especially as irregular patches or streaks." },
        { word: "xenophobia", definition: "Dislike of or prejudice against people from other countries." }
    ],
    "12": [
        { word: "anachronistic", definition: "Belonging or appropriate to a period other than that in which it exists." },
        { word: "circumlocution", definition: "The use of many words where fewer would do, especially to be vague." },
        { word: "grandiloquence", definition: "Pompous or extravagant language intended to impress." },
        { word: "osculate", definition: "To kiss, or to touch closely." },
        { word: "tintinnabulation", definition: "A ringing or tinkling sound of bells." },
        { word: "abnegation", definition: "The solemn renunciation or rejection of a belief or doctrine." },
        { word: "blandishment", definition: "A flattering or pleasing statement or action used to persuade someone gently." },
        { word: "concupiscent", definition: "Filled with strong sexual desire or lust." },
        { word: "desuetude", definition: "A state of disuse." },
        { word: "epistemological", definition: "Relating to the theory of knowledge, especially with regard to its methods and validation." },
        { word: "hegemony", definition: "Leadership or dominance, especially by one country or social group over others." },
        { word: "imprimatur", definition: "An official license or sanction granted by a licensing authority." },
        { word: "misanthrope", definition: "A person who dislikes humankind and avoids human society." },
        { word: "noisome", definition: "Having an extremely offensive smell, or highly disagreeable." },
        { word: "obstreperous", definition: "Noisy and difficult to control." },
        { word: "palaver", definition: "Prolonged and idle discussion." },
        { word: "scurrilous", definition: "Making or spreading scandalous claims about someone with the intention of damaging their reputation." },
        { word: "trenchant", definition: "Vigorous or incisive in expression or style." },
        { word: "utilitarian", definition: "Designed to be useful or practical rather than attractive." },
        { word: "verisimilitude", definition: "The appearance of being true or real." },
        { word: "vociferous", definition: "Vehement or clamorous expression of feelings or opinions." },
        { word: "zeitgeist", definition: "The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time." }
    ]
};

const gradesArray = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const ranks = ["Aluminum", "Iron", "Titanium", "Nickel", "Zinc", "Copper", "Lead", "Silver", "Palladium", "Platinum", "Gold", "Osmium", "Ruthenium", "Rhodium", "Rhenium", "Iridium"];

// --- 2. COMPETITIVE BOTS DATA BLOCKS ---
let defaultBots = [
    { name: "AlphaSpell_Bot", liveXP: 0, foreverXP: 14200, foreverPts: 22 },
    { name: "LexiconQueen👑", liveXP: 0, foreverXP: 12850, foreverPts: 18 },
    { name: "WordWizard🧙‍♂️", liveXP: 0, foreverXP: 11100, foreverPts: 14 },
    { name: "VocabVortex🌪️", liveXP: 0, foreverXP: 9450, foreverPts: 9 },
    { name: "SyntaxSlayer⚔️", liveXP: 0, foreverXP: 7200, foreverPts: 5 }
];
let bots = JSON.parse(localStorage.getItem("arena_bots_data")) || defaultBots;

// --- 3. STATE MANAGEMENT GLOBAL VARIABLES ---
let currentMode = "normal";
let currentGradeIndex = 0; 
let gameActiveWords = [];
let activeWordIndex = 0;
let isCustomQuizActive = false; 

// Persistent States
let savedDatabase = JSON.parse(localStorage.getItem("arena_saved_db")) || [];
let localFriendsList = [];
let activeLeaderboardTab = "live";

// UPDATED: Standard Core XP baseline defaults to 10000 XP if empty
let username = localStorage.getItem("arena_username") || "";
let userXP = localStorage.getItem("arena_xp") !== null ? parseInt(localStorage.getItem("arena_xp")) : 10000;
let rankIndex = parseInt(localStorage.getItem("arena_rank_index")) || 0;
let leaderboardPoints = parseInt(localStorage.getItem("arena_lb_points")) || 0;
let liveXPGained = 0; 

// Streak Tracking
let dailyPracticeStreak = parseInt(localStorage.getItem("arena_daily_streak")) || 1;
let currentAnswerStreak = 0;
let bestAnswerStreak = parseInt(localStorage.getItem("arena_best_answer_streak")) || 0;

// UPDATED: Remember active progress streaks across sessions and reloads
let correctStreakCounter = parseInt(localStorage.getItem("arena_correct_streak")) || 0; 
let wrongStreakCounter = parseInt(localStorage.getItem("arena_wrong_streak")) || 0;    

let score = 0;
let streak = 0;
let timeLeft = 300;
let timerInterval = null;
let profileStatsInterval = null;

let blitzTimerRemaining = 86400; // Updated to 24 hours (86400s)
let blitzTimerInterval = null;
let botSimulationInterval = null;

// UPDATED: Dynamically generated bot pool names
const botNamesPool = [
    "SpellBreaker⚡", "LexiconLoki", "WordWhisperer", "SyntaxSamurai", "GrammarGoliath", 
    "AlphaSpell_Bot", "LexiconQueen👑", "WordWizard🧙‍♂️", "VocabVortex🌪️", "SyntaxSlayer⚔️",
    "PhonicPhantom👻", "VocabValkyrie", "SpellBound✨", "DictionDragon🐉", "LetterLord"
];

// --- 4. DOM INTERFACE ELEMENTS ---
const sidebar = document.getElementById("app-sidebar");
const navHomeBtn = document.getElementById("nav-home-btn");
const navProfileBtn = document.getElementById("nav-profile-btn");
const navLeaderboardBtn = document.getElementById("nav-leaderboard-btn");
const navSettingsBtn = document.getElementById("nav-settings-btn");

const welcomeScreen = document.getElementById("welcome-screen");
const loginNameInput = document.getElementById("login-username");
const loginGradeSelect = document.getElementById("login-grade-select");
const welcomeStartBtn = document.getElementById("welcome-start-btn");

const homeScreen = document.getElementById("home-screen");
const profileScreen = document.getElementById("profile-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");
const settingsScreen = document.getElementById("settings-screen");
const gameScreen = document.getElementById("game-screen");
const rankupOverlay = document.getElementById("rankup-overlay");
const rankupNewName = document.getElementById("rankup-new-name");

const startBtn = document.getElementById("start-game-btn");
const quitBtn = document.getElementById("back-to-menu");
const saveWordBtn = document.getElementById("save-word-btn");
const settingsGradeStatusText = document.getElementById("settings-grade-status-text");
const settingsGradeSelect = document.getElementById("settings-grade-select");
const settingsLogoutBtn = document.getElementById("settings-logout-btn");

const speakBtn = document.getElementById("speak-btn");
const definitionDisplay = document.getElementById("definition-display");
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

const scoreValue = document.getElementById("score");
const streakDisplay = document.getElementById("streak-display");
const streakValue = document.getElementById("streak");
const timerDisplay = document.getElementById("timer-display");
const timerValue = document.getElementById("timer");

const dbCount = document.getElementById("db-count");
const databaseList = document.getElementById("database-list");
const quizSavedBtn = document.getElementById("quiz-saved-btn");

const customWordInput = document.getElementById("custom-word-input");
const customDefInput = document.getElementById("custom-def-input");
const addCustomWordBtn = document.getElementById("add-custom-word-btn");

const friendSearch = document.getElementById("friend-search");
const addFriendBtn = document.getElementById("add-friend-btn");
const friendListContainer = document.getElementById("friend-list");

const lbCountdown = document.getElementById("lb-countdown");
const leaderboardList = document.getElementById("leaderboard-list");

// --- 5. INITIALIZATION & APP ROUTING ---
window.addEventListener("load", () => {
    let cachedGrade = localStorage.getItem("arena_grade_val") || "K";
    currentGradeIndex = gradesArray.indexOf(cachedGrade);
    if (currentGradeIndex === -1) currentGradeIndex = 0;
    
    checkDailyPracticeStreakLogs();
    startBlitzLeaderboardEngine();
    startBotSimulationEngine();
    updateDatabaseUI();

    if (username) {
        welcomeScreen.classList.add("hidden");
        sidebar.classList.remove("hidden");
        homeScreen.classList.remove("hidden");
        updateUIElements();
    }
});

welcomeStartBtn.addEventListener("click", () => {
    const enteredName = loginNameInput.value.trim();
    if (!enteredName) {
        alert("Please specify a valid profile name!");
        return;
    }
    username = enteredName;
    localStorage.setItem("arena_username", username);

    const chosenGrade = loginGradeSelect.value;
    currentGradeIndex = gradesArray.indexOf(chosenGrade);
    localStorage.setItem("arena_grade_val", chosenGrade);

    welcomeScreen.classList.add("hidden");
    sidebar.classList.remove("hidden");
    homeScreen.classList.remove("hidden");
    
    updateUIElements();
});

// BUG RESOLVED: Completely closes down every template viewport safely upon activation
function switchView(targetCard) {
    homeScreen.classList.add("hidden");
    profileScreen.classList.add("hidden");
    leaderboardScreen.classList.add("hidden");
    settingsScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    
    navHomeBtn.classList.remove("active");
    navProfileBtn.classList.remove("active");
    navLeaderboardBtn.classList.remove("active");
    navSettingsBtn.classList.remove("active");
    
    targetCard.classList.remove("hidden");
}

function verifyGameExit() {
    if (!gameScreen.classList.contains("hidden")) {
        if (!confirm("Abandon active game practice loop?")) return false;
        stopPracticeTimer();
        clearInterval(timerInterval);
        isCustomQuizActive = false;
    }
    return true;
}

navHomeBtn.addEventListener("click", () => { if(verifyGameExit()) { switchView(homeScreen); navHomeBtn.classList.add("active"); } });
navProfileBtn.addEventListener("click", () => { if(verifyGameExit()) { renderAnalyticsAndStats(); switchView(profileScreen); navProfileBtn.classList.add("active"); } });
navLeaderboardBtn.addEventListener("click", () => { if(verifyGameExit()) { renderLeaderboardUI(); switchView(leaderboardScreen); navLeaderboardBtn.classList.add("active"); } });
navSettingsBtn.addEventListener("click", () => { if(verifyGameExit()) { switchView(settingsScreen); navSettingsBtn.classList.add("active"); } });

settingsLogoutBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to log out? Local stats cache will be reset.")) {
        localStorage.clear();
        window.location.reload();
    }
});

document.querySelectorAll("#mode-selection .select-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const btn = e.currentTarget;
        btn.parentElement.querySelectorAll(".select-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentMode = btn.getAttribute("data-value");
    });
});

// --- 6. AUDIO CONTROL DECK ---
function getBestVoice() {
    const voices = window.speechSynthesis.getVoices();
    const premiumKeywords = ["natural", "google", "microsoft", "siri", "premium", "zira", "samantha"];
    const enVoices = voices.filter(v => v.lang.includes("en"));
    enVoices.sort((a, b) => {
        const aScore = premiumKeywords.reduce((s, kw) => s + (a.name.toLowerCase().includes(kw) ? 1 : 0), 0);
        const bScore = premiumKeywords.reduce((s, kw) => s + (b.name.toLowerCase().includes(kw) ? 1 : 0), 0);
        return bScore - aScore;
    });
    return enVoices.length > 0 ? enVoices[0] : null;
}

function speakWordPrompt(word, definition) {
    window.speechSynthesis.cancel(); 
    const targetedVoice = getBestVoice();

    const introUtterance = new SpeechSynthesisUtterance("The word is");
    const wordUtterance = new SpeechSynthesisUtterance(word);
    const defUtterance = new SpeechSynthesisUtterance("Definition " + definition);

    [introUtterance, wordUtterance, defUtterance].forEach(u => {
        u.voice = targetedVoice; u.pitch = 0.95; u.volume = 0.5;
    });

    introUtterance.rate = 0.8;
    wordUtterance.rate = 0.45; // Smooth slow pronunciation
    defUtterance.rate = 0.8;

    introUtterance.onend = () => { setTimeout(() => { window.speechSynthesis.speak(wordUtterance); }, 750); };
    wordUtterance.onend = () => { setTimeout(() => { window.speechSynthesis.speak(defUtterance); }, 750); };

    window.speechSynthesis.speak(introUtterance);
}

function speakFeedback(text) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getBestVoice();
    utterance.rate = 0.8;
    utterance.volume = 0.5;
    window.speechSynthesis.speak(utterance);
}

// --- 7. PROGRESSION SCALING SYSTEMS ---
function checkDailyPracticeStreakLogs() {
    const todayStr = new Date().toISOString().split('T')[0];
    const lastActiveStr = localStorage.getItem("arena_last_active_date");

    if (lastActiveStr) {
        const lastDate = new Date(lastActiveStr);
        const todayDate = new Date(todayStr);
        const dateDifference = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

        if (dateDifference === 1) {
            dailyPracticeStreak++;
        } else if (dateDifference > 1) {
            dailyPracticeStreak = 1;
        }
    } else {
        dailyPracticeStreak = 1;
    }

    localStorage.setItem("arena_daily_streak", dailyPracticeStreak);
    localStorage.setItem("arena_last_active_date", todayStr);
}

function getTargetXPForCurrentRank() {
    if (rankIndex === 0) return 100;
    if (rankIndex === 1) return 200;
    return 500 + (rankIndex - 2) * 250;
}

function triggerRankUpAnimation(newRankName) {
    rankupNewName.textContent = newRankName;
    rankupOverlay.classList.remove("hidden");
    speakFeedback("Rank Up! You achieved " + newRankName);
    
    setTimeout(() => {
        rankupOverlay.classList.add("hidden");
    }, 3500);
}

function processXPGain(isCorrect) {
    let xpTarget = getTargetXPForCurrentRank();
    
    if (isCorrect) {
        userXP += 10;
        liveXPGained += 10; 
        
        if (userXP >= xpTarget) {
            if (rankIndex < ranks.length - 1) {
                userXP -= xpTarget;
                rankIndex++;
                triggerRankUpAnimation(ranks[rankIndex]);
            } else {
                userXP = xpTarget; 
            }
        }
    } else {
        userXP = Math.max(0, userXP - 1);
    }
    
    localStorage.setItem("arena_xp", userXP);
    localStorage.setItem("arena_rank_index", rankIndex);
    updateUIElements();
    
    if (!leaderboardScreen.classList.contains("hidden")) renderLeaderboardUI();
}

function updateUIElements() {
    const currentRank = ranks[rankIndex];
    const activeGradeStr = gradesArray[currentGradeIndex];
    let xpTarget = getTargetXPForCurrentRank();

    document.getElementById("sidebar-username").textContent = username;
    document.getElementById("sidebar-rank").textContent = currentRank;
    document.getElementById("sidebar-grade-badge").textContent = `Grade: ${activeGradeStr}`;
    document.getElementById("sidebar-daily-streak").textContent = `🔥 ${dailyPracticeStreak} Day Streak`;
    
    document.getElementById("profile-user-title").textContent = `${username}'s Training Profile`;
    document.getElementById("profile-rank-val").textContent = currentRank;
    document.getElementById("profile-xp-text").textContent = `${userXP} / ${xpTarget} XP`;
    document.getElementById("profile-lb-points").textContent = leaderboardPoints;
    
    document.getElementById("profile-daily-streak-val").textContent = `${dailyPracticeStreak} Days`;
    document.getElementById("profile-curr-streak-val").textContent = currentAnswerStreak;
    document.getElementById("profile-best-streak-val").textContent = bestAnswerStreak;
    
    settingsGradeStatusText.textContent = `Grade ${activeGradeStr}`;
    
    let barPct = (userXP / xpTarget) * 100;
    document.getElementById("profile-xp-bar").style.width = `${barPct}%`;
}

function startBlitzLeaderboardEngine() {
    blitzTimerInterval = setInterval(() => {
        blitzTimerRemaining--;
        
        // Calculate Hours, Minutes, and Seconds for a daily countdown
        let hours = Math.floor(blitzTimerRemaining / 3600);
        let minutes = Math.floor((blitzTimerRemaining % 3600) / 60);
        let seconds = blitzTimerRemaining % 60;

        // Format to HH:MM:SS
        let formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        lbCountdown.textContent = formattedTime;

        if (blitzTimerRemaining <= 0) {
            processBlitzEpochResolution();
        }
    }, 1000);
}

function startBotSimulationEngine() {
    // UPDATED: Bots now randomly gain 1 or 2 XP every second (1000ms)
    botSimulationInterval = setInterval(() => {
        bots.forEach(bot => {
            const randomXP = Math.floor(Math.random() * 2) + 1; // Generates 1 or 2
            bot.liveXP += randomXP;
            bot.foreverXP += randomXP;
        });
        localStorage.setItem("arena_bots_data", JSON.stringify(bots));
        if (!leaderboardScreen.classList.contains("hidden")) renderLeaderboardUI();
    }, 1000);
}

function processBlitzEpochResolution() {
    let fullList = [
        { name: username || "Player", val: liveXPGained, isUser: true },
        ...bots.map(b => ({ name: b.name, val: b.liveXP, isUser: false }))
    ];
    fullList.sort((a, b) => b.val - a.val);

    if (fullList[0].isUser && liveXPGained > 0) {
        leaderboardPoints++;
        localStorage.setItem("arena_lb_points", leaderboardPoints);
        alert("👑 CONGRATULATIONS! You won the 10-Minute Blitz and earned 1 Leaderboard Point!");
    } else {
        let winningBotObj = bots.find(b => b.name === fullList[0].name);
        if (winningBotObj) winningBotObj.foreverPts++;
    }

    liveXPGained = 0;
    bots.forEach(b => b.liveXP = 0);
    localStorage.setItem("arena_bots_data", JSON.stringify(bots));
    blitzTimerRemaining = 84600; 
    
    updateUIElements();
    renderLeaderboardUI();
}

// --- 9. LEADERBOARD SYSTEM COMPONENT MANAGEMENT ---
function renderLeaderboardUI() {
    let aggregatedList = [];

    if (activeLeaderboardTab === "live") {
        aggregatedList = [
            { name: username || "Player", value: liveXPGained, isUser: true },
            ...bots.map(b => ({ name: b.name, value: b.liveXP, isUser: false }))
        ];
    } else if (activeLeaderboardTab === "xp-forever") {
        aggregatedList = [
            { name: username || "Player", value: (10000 + userXP), isUser: true }, 
            ...bots.map(b => ({ name: b.name, value: b.foreverXP, isUser: false }))
        ];
    } else if (activeLeaderboardTab === "pts-forever") {
        aggregatedList = [
            { name: username || "Player", value: leaderboardPoints, isUser: true },
            ...bots.map(b => ({ name: b.name, value: b.foreverPts, isUser: false }))
        ];
    }

    aggregatedList.sort((a, b) => b.value - a.value);

    leaderboardList.innerHTML = aggregatedList.map((row, index) => `
        <div class="lb-row ${row.isUser ? 'player-row' : ''}">
            <span class="lb-rank-num">#${index + 1}</span>
            <span class="lb-name-tag">${row.name}</span>
            <span class="lb-val-tag">${row.value} ${activeLeaderboardTab === 'pts-forever' ? 'Pts' : 'XP'}</span>
        </div>
    `).join('');
}

document.getElementById("tab-live").addEventListener("click", (e) => { toggleLBTab(e.target, "live"); });
document.getElementById("tab-xp-forever").addEventListener("click", (e) => { toggleLBTab(e.target, "xp-forever"); });
document.getElementById("tab-pts-forever").addEventListener("click", (e) => { toggleLBTab(e.target, "pts-forever"); });

function toggleLBTab(element, tabName) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    element.classList.add("active");
    activeLeaderboardTab = tabName;
    renderLeaderboardUI();
}

// --- 10. CRITICAL PERFORMANCE STREAK SHIFTS (10 CORRECT / 15 WRONG) ---
function evaluateStreakProgression(isCorrectAnswer) {
    if (isCorrectAnswer) {
        wrongStreakCounter = 0; 
        correctStreakCounter++;
        currentAnswerStreak++;
        
        if (currentAnswerStreak > bestAnswerStreak) {
            bestAnswerStreak = currentAnswerStreak;
            localStorage.setItem("arena_best_answer_streak", bestAnswerStreak);
        }

        if (correctStreakCounter === 10) {
            correctStreakCounter = 0;
            if (currentGradeIndex < gradesArray.length - 1) {
                currentGradeIndex++;
                const newGrade = gradesArray[currentGradeIndex];
                localStorage.setItem("arena_grade_val", newGrade);
                feedback.textContent = `🚀 PROMOTED! Advanced up to Grade ${newGrade}!`;
                setTimeout(() => { speakFeedback("Promoted"); }, 1400);
                updateUIElements();
                gameActiveWords = [...wordDatabase[newGrade]].sort(() => Math.random() - 0.5);
                activeWordIndex = 0;
            }
        }
    } else {
        correctStreakCounter = 0; 
        wrongStreakCounter++;
        currentAnswerStreak = 0;

        // UPDATED: Now requires a massive 15-answer wrong streak to down-grade out of an active difficulty tier
        if (wrongStreakCounter === 15) {
            wrongStreakCounter = 0;
            if (currentGradeIndex > 0) {
                currentGradeIndex--;
                const newGrade = gradesArray[currentGradeIndex];
                localStorage.setItem("arena_grade_val", newGrade);
                feedback.textContent = `⚠️ DEMOTED! Shifted down to Grade ${newGrade}.`;
                setTimeout(() => { speakFeedback("Demoted"); }, 1400);
                updateUIElements();
                gameActiveWords = [...wordDatabase[newGrade]].sort(() => Math.random() - 0.5);
                activeWordIndex = 0;
            }
        }
    }
    updateUIElements();
}

// --- 11. GENERAL GAMEPLAY CONTROL CORE ---
startBtn.addEventListener("click", () => {
    isCustomQuizActive = false; 
    const activeGradeStr = gradesArray[currentGradeIndex];
    gameActiveWords = [...wordDatabase[activeGradeStr]].sort(() => Math.random() - 0.5);
    activeWordIndex = 0; 
    launchGamePlayLoop();
});

function launchGamePlayLoop() {
    score = 0; streak = 0; correctStreakCounter = 0; wrongStreakCounter = 0;
    scoreValue.textContent = score; streakValue.textContent = streak;
    switchView(gameScreen);
    userInput.disabled = false; userInput.focus();
    startPracticeTimer();

    streakDisplay.classList.toggle("hidden", currentMode !== "marathon");
    timerDisplay.classList.toggle("hidden", currentMode !== "speedrun");

    if (currentMode === "speedrun") {
        timeLeft = 300; timerValue.textContent = timeLeft;
        timerInterval = setInterval(() => {
            timeLeft--; timerValue.textContent = timeLeft;
            if (timeLeft <= 0) endGameSession("Time's Up! ⏱️ Game Over.");
        }, 1000);
    }
    queueNextWord();
}

function queueNextWord() {
    userInput.value = "";
    if (activeWordIndex >= gameActiveWords.length) {
        if (isCustomQuizActive) {
            endGameSession("🎉 Quiz Complete! You completed your saved catalog list!");
            return;
        } else {
            const activeGradeStr = gradesArray[currentGradeIndex];
            gameActiveWords = [...wordDatabase[activeGradeStr]].sort(() => Math.random() - 0.5);
            activeWordIndex = 0;
        }
    }
    const currentTarget = gameActiveWords[activeWordIndex];
    definitionDisplay.textContent = `Definition: ${currentTarget.definition}`;
    speakWordPrompt(currentTarget.word, currentTarget.definition);
}

speakBtn.addEventListener("click", () => {
    const currentTarget = gameActiveWords[activeWordIndex];
    if (currentTarget) speakWordPrompt(currentTarget.word, currentTarget.definition);
});

// --- 12. ANSWER EVALUATION LOOP ---
function evaluateSubmission() {
    const currentTarget = gameActiveWords[activeWordIndex];
    if (!currentTarget || userInput.disabled) return;

    const guess = userInput.value.trim().toLowerCase();
    const answer = currentTarget.word.toLowerCase();

    if (guess === answer) {
        score++; streak++;
        scoreValue.textContent = score; streakValue.textContent = streak;
        feedback.textContent = "Correct! 🎉";
        feedback.className = "feedback correct";
        speakFeedback("Correct!");
        
        processXPGain(true);
        evaluateStreakProgression(true);

        userInput.disabled = true;
        setTimeout(() => {
            userInput.disabled = false; activeWordIndex++; queueNextWord(); userInput.focus();
        }, 1200);
    } else {
        feedback.className = "feedback wrong";
        processXPGain(false);
        evaluateStreakProgression(false);
        
        if (currentMode === "marathon") {
            feedback.textContent = `Game Over! The word was "${currentTarget.word}"`;
            speakFeedback(`Incorrect. Game Over.`);
            endGameSession(`Marathon broken at a streak of ${streak}!`);
        } else {
            feedback.textContent = "Incorrect. Try again! 🤔";
            speakFeedback("Incorrect. Try again.");
            streak = 0; streakValue.textContent = streak;
        }
    }
}

function startPracticeTimer() {
    if (profileStatsInterval) clearInterval(profileStatsInterval);
    profileStatsInterval = setInterval(() => {
        const todayStr = new Date().toISOString().split('T')[0];
        let trackingData = JSON.parse(localStorage.getItem("spelling_arena_time_logs")) || {};
        trackingData[todayStr] = (trackingData[todayStr] || 0) + 1;
        localStorage.setItem("spelling_arena_time_logs", JSON.stringify(trackingData));
    }, 1000);
}

function stopPracticeTimer() { if (profileStatsInterval) { clearInterval(profileStatsInterval); profileStatsInterval = null; } }

function renderAnalyticsAndStats() {
    let trackingData = JSON.parse(localStorage.getItem("spelling_arena_time_logs")) || {};
    const today = new Date();
    let totalSecToday = 0, totalSecWeek = 0, totalSecMonth = 0;

    const formatSeconds = (ts) => {
        if (ts < 60) return `${ts}s`;
        const mins = Math.floor(ts / 60); const secs = ts % 60;
        return secs === 0 ? `${mins}m` : `${mins}m ${secs}s`;
    };

    for (let i = 0; i < 30; i++) {
        let checkDate = new Date(); checkDate.setDate(today.getDate() - i);
        let dateStr = checkDate.toISOString().split('T')[0];
        let recordedSeconds = trackingData[dateStr] || 0;
        if (i === 0) totalSecToday += recordedSeconds;
        if (i < 7) totalSecWeek += recordedSeconds;
        totalSecMonth += recordedSeconds;
    }

    document.getElementById("stat-day").textContent = formatSeconds(totalSecToday);
    document.getElementById("stat-week").textContent = formatSeconds(totalSecWeek);
    document.getElementById("stat-month").textContent = formatSeconds(totalSecMonth);
    updateUIElements();
}

function endGameSession(reasonMessage) {
    clearInterval(timerInterval); stopPracticeTimer();
    userInput.disabled = true; definitionDisplay.textContent = reasonMessage;
    feedback.textContent = `Final Score: ${score}`; feedback.className = "feedback correct";
    speakFeedback("Game over!");
    isCustomQuizActive = false;
}

// --- 13. USER DIRECTORY INTEGRATIONS CENTER ---
quizSavedBtn.addEventListener("click", () => {
    if (savedDatabase.length === 0) {
        alert("Your custom vocabulary database is completely empty!");
        return;
    }
    isCustomQuizActive = true;
    gameActiveWords = [...savedDatabase].sort(() => Math.random() - 0.5);
    activeWordIndex = 0;
    launchGamePlayLoop();
});

addCustomWordBtn.addEventListener("click", () => {
    const wordVal = customWordInput.value.trim();
    const defVal = customDefInput.value.trim();
    if (!wordVal || !defVal) {
        alert("Please fill in both fields!");
        return;
    }
    const alreadySaved = savedDatabase.some(item => item.word.toLowerCase() === wordVal.toLowerCase());
    if (!alreadySaved) {
        savedDatabase.push({ word: wordVal, definition: defVal });
        localStorage.setItem("arena_saved_db", JSON.stringify(savedDatabase));
        updateDatabaseUI();
        customWordInput.value = ""; customDefInput.value = "";
    } else {
        alert("Word already saved inside your personal library!");
    }
});

saveWordBtn.addEventListener("click", () => {
    const currentTarget = gameActiveWords[activeWordIndex];
    if (!currentTarget) return;
    const alreadySaved = savedDatabase.some(item => item.word.toLowerCase() === currentTarget.word.toLowerCase());
    if (!alreadySaved) {
        savedDatabase.push(currentTarget);
        localStorage.setItem("arena_saved_db", JSON.stringify(savedDatabase));
        updateDatabaseUI();
        saveWordBtn.textContent = "✓"; saveWordBtn.style.background = "#10b981"; saveWordBtn.style.color = "white";
        setTimeout(() => { saveWordBtn.textContent = "+"; saveWordBtn.style.background = "rgba(255,255,255,0.05)"; saveWordBtn.style.color = "#cbd5e1"; }, 1000);
    }
});

function updateDatabaseUI() {
    dbCount.textContent = savedDatabase.length;
    if (savedDatabase.length === 0) {
        databaseList.innerHTML = `<p class="empty-db-msg">No words saved yet.</p>`;
    } else {
        databaseList.innerHTML = savedDatabase.map(item => `<div class="db-item"><strong>${item.word}</strong> - <span>${item.definition}</span></div>`).join('');
    }
}

addFriendBtn.addEventListener("click", () => {
    const targetFriendName = friendSearch.value.trim();
    if (!targetFriendName) return;
    if (localFriendsList.includes(targetFriendName)) return;
    localFriendsList.push(targetFriendName);
    friendSearch.value = "";
    friendListContainer.innerHTML = localFriendsList.map(name => `<div class="db-item">🟢 <strong>${name}</strong> (Online)</div>`).join('');
});

submitBtn.addEventListener("click", evaluateSubmission);
userInput.addEventListener("keypress", (e) => { if (e.key === "Enter") evaluateSubmission(); });
quitBtn.addEventListener("click", () => { clearInterval(timerInterval); stopPracticeTimer(); switchView(homeScreen); navHomeBtn.classList.add("active"); });

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}