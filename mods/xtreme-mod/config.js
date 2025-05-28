// WELCOME TO Xtreme Monopoly Game Mod
// Where the game is played with 8 players instead of 4 players, and inflation rate x100 is added to the game.
// It is a modification of the original Monopoly Game created by Barnista.
// To show case how to create a mod, I have added a few comments in the code.
// It is licensed under the MIT License.


// --- Game Info ---
webTitle = "Monopoly Game - Xtreme 8 Players"; // Web title
modName = "Xtreme-Mod"; // Project name
modVersionNumber = "1.1.0"; // Version number
modVersionLink = "https://github.com/Barnista/OneFileMonopolyGame/commits/main/";
modLink = "https://github.com/Barnista/OneFileMonopolyGame";// Project link (GitHub or other)
// If you want to use your own link, please change it here.

// --- Game Configuration ---
DICE_SIDES = 6; // Number of sides on the dice
BOARD_SIZE = 40; // Number of spaces on the board
JAIL_POSITION = 10; // Position of the jail space
GO_TO_JAIL_POSITION = 30; // Position of the "Go to Jail" space
PASS_GO_SALARY = 20000; // Salary received when passing "Go" space
INITIAL_MONEY = 150000; // Initial money for each player

DEFAULT_RENT = 2500; // Default rent for properties
DEFAULT_RENT_SCALE_1 = 400; // Rent scale for properties with rent defined
DEFAULT_RENT_SCALE_2 = 1000; // Rent scale for properties with rent defined
DEFAULT_BAIL = 5000; // Bail amount for getting out of jail

MAX_PLAYERS = 8; // Maximum number of players
PLAYER_COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#ff0000', '#00ff00', '#0000ff', '#ff00ff']; // Player colors for the game. You can add more colors if needed.
// Player colors for the game. You can add more colors if needed.

BOARD_SPACES = [
    { id: 0, nameKey: "space_0", type: "go", price: 0, rent: [], colorGroup: null },
    { id: 1, nameKey: "space_1", type: "property", price: 6000, rent: [200, 1000, 3000, 9000, 16000, 25000], colorGroup: "brown" },
    { id: 2, nameKey: "space_2", type: "community_chest", price: 0, rent: [], colorGroup: null },
    { id: 3, nameKey: "space_3", type: "property", price: 6000, rent: [400, 2000, 6000, 18000, 32000, 45000], colorGroup: "brown" },
    { id: 4, nameKey: "space_4", type: "tax", price: 20000, rent: [], colorGroup: null },
    { id: 5, nameKey: "space_5", type: "property", group: "station", price: 20000, rent: [2500, 5000, 10000, 20000], colorGroup: "station" },
    { id: 6, nameKey: "space_6", type: "property", price: 10000, rent: [600, 3000, 9000, 27000, 40000, 55000], colorGroup: "lightblue" },
    { id: 7, nameKey: "space_7", type: "chance", price: 0, rent: [], colorGroup: null },
    { id: 8, nameKey: "space_8", type: "property", price: 10000, rent: [600, 3000, 9000, 27000, 40000, 55000], colorGroup: "lightblue" },
    { id: 9, nameKey: "space_9", type: "property", price: 12000, rent: [800, 4000, 10000, 30000, 45000, 60000], colorGroup: "lightblue" },
    { id: 10, nameKey: "space_10", type: "jail", price: 0, rent: [], colorGroup: null },
    { id: 11, nameKey: "space_11", type: "property", price: 14000, rent: [1000, 5000, 15000, 45000, 62500, 75000], colorGroup: "pink" },
    { id: 12, nameKey: "space_12", type: "property", group: "utility", price: 15000, rent: [], colorGroup: "utility" },
    { id: 13, nameKey: "space_13", type: "property", price: 14000, rent: [1000, 5000, 15000, 45000, 62500, 75000], colorGroup: "pink" },
    { id: 14, nameKey: "space_14", type: "property", price: 16000, rent: [1200, 6000, 18000, 50000, 70000, 90000], colorGroup: "pink" },
    { id: 15, nameKey: "space_15", type: "property", group: "station", price: 20000, rent: [2500, 5000, 10000, 20000], colorGroup: "station" },
    { id: 16, nameKey: "space_16", type: "property", price: 18000, rent: [1400, 7000, 20000, 55000, 75000, 95000], colorGroup: "orange" },
    { id: 17, nameKey: "space_17", type: "community_chest", price: 0, rent: [], colorGroup: null },
    { id: 18, nameKey: "space_18", type: "property", price: 18000, rent: [1400, 7000, 20000, 55000, 75000, 95000], colorGroup: "orange" },
    { id: 19, nameKey: "space_19", type: "property", price: 20000, rent: [1600, 8000, 22000, 60000, 80000, 100000], colorGroup: "orange" },
    { id: 20, nameKey: "space_20", type: "free_parking", price: 0, rent: [], colorGroup: null },
    { id: 21, nameKey: "space_21", type: "property", price: 22000, rent: [1800, 9000, 25000, 70000, 87500, 105000], colorGroup: "red" },
    { id: 22, nameKey: "space_22", type: "chance", price: 0, rent: [], colorGroup: null },
    { id: 23, nameKey: "space_23", type: "property", price: 22000, rent: [1800, 9000, 25000, 70000, 87500, 105000], colorGroup: "red" },
    { id: 24, nameKey: "space_24", type: "property", price: 24000, rent: [2000, 10000, 30000, 75000, 92500, 110000], colorGroup: "red" },
    { id: 25, nameKey: "space_25", type: "property", group: "station", price: 20000, rent: [2500, 5000, 10000, 20000], colorGroup: "station" },
    { id: 26, nameKey: "space_26", type: "property", price: 26000, rent: [2200, 11000, 33000, 80000, 97500, 115000], colorGroup: "yellow" },
    { id: 27, nameKey: "space_27", type: "property", price: 26000, rent: [2200, 11000, 33000, 80000, 97500, 115000], colorGroup: "yellow" },
    { id: 28, nameKey: "space_28", type: "property", group: "utility", price: 15000, rent: [], colorGroup: "utility" },
    { id: 29, nameKey: "space_29", type: "property", price: 28000, rent: [2400, 12000, 36000, 85000, 102500, 120000], colorGroup: "yellow" },
    { id: 30, nameKey: "space_30", type: "go_to_jail", price: 0, rent: [], colorGroup: null },
    { id: 31, nameKey: "space_31", type: "property", price: 30000, rent: [2600, 13000, 39000, 90000, 110000, 127500], colorGroup: "green" },
    { id: 32, nameKey: "space_32", type: "property", price: 30000, rent: [2600, 13000, 39000, 90000, 110000, 127500], colorGroup: "green" },
    { id: 33, nameKey: "space_33", type: "community_chest", price: 0, rent: [], colorGroup: null },
    { id: 34, nameKey: "space_34", type: "property", price: 32000, rent: [2800, 15000, 45000, 100000, 120000, 140000], colorGroup: "green" },
    { id: 35, nameKey: "space_35", type: "property", group: "station", price: 20000, rent: [2500, 5000, 10000, 20000], colorGroup: "station" },
    { id: 36, nameKey: "space_36", type: "chance", price: 0, rent: [], colorGroup: null },
    { id: 37, nameKey: "space_37", type: "property", price: 35000, rent: [3500, 17500, 50000, 110000, 130000, 150000], colorGroup: "darkblue" },
    { id: 38, nameKey: "space_38", type: "tax", price: 10000, rent: [], colorGroup: null },
    { id: 39, nameKey: "space_39", type: "property", price: 40000, rent: [5000, 20000, 60000, 140000, 170000, 200000], colorGroup: "darkblue" },
];
// Board spaces configuration. Each space has an ID, name key for localization, type, price, rent structure, and color group.

CHANCE_CARDS = [
    { id: 1, nameKey: "chance_card_1", textKey: "chance_text_1", action: "money", value: 10000 }, // Collect $100
    { id: 2, nameKey: "chance_card_2", textKey: "chance_text_2", action: "move", value: 3 }, // Move forward 3 spaces
    { id: 3, nameKey: "chance_card_3", textKey: "chance_text_3", action: "jail" }, // Go to jail
    { id: 4, nameKey: "chance_card_4", textKey: "chance_text_4", action: "move", value: -2 }, // Move back 2 spaces
    { id: 5, nameKey: "chance_card_5", textKey: "chance_text_5", action: "money", value: 5000 }, // Pay $100
    { id: 6, nameKey: "chance_card_6", textKey: "chance_text_6", action: "none" },
];

// --- Game State ---
players = [];   // Will store player objects with 'id', 'name', 'money', 'position', 'properties', 'inJail', 'jailTurns'
boardSpaces = []; // Will store objects with 'id', 'type', 'price', 'rent', 'colorGroup', 'group', 'owner', 'houses', 'nameKey'
currentPlayerIndex = 0; // Index of the current player in the players array
gameActive = true; // Flag to check if the game is active
diceRolledThisTurn = false; // Flag to check if the dice has been rolled this turn
currentLanguage = 'th'; // Default language