// array is printed in reverse order; later("newer") elements are printed first
// Note to self: insert new decor at end of array, in right-to-left order of in-game for each theme
const decorArray = [
    /* Start of Crispy Cookie Town */
    {
        name: "Lawn",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/cct/cct1.png',
        note: ""
    },
    {
        name: "Soda Stream",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/cct/cct2.png',
        note: ""
    },
    {
        name: "Village Lane",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/cct/cct3.png',
        note: ""
    },
    {
        name: "Cracker Flowerbed",
        theme: "Crispy Cookie Town",
        size: "2x2",
        points: 10,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/cct/cct4.png',
        note: ""
    },
    {
        name: "Choco Stick Streetlight",
        theme: "Crispy Cookie Town",
        size: "2x2",
        points: 10,
        tags: ["Lamp"],
        url: '/regular_decor/cct/cct5.png',
        note: ""
    },
    {
        name: "Candy Standpipe",
        theme: "Crispy Cookie Town",
        size: "2x2",
        points: 10,
        tags: [],
        url: '/regular_decor/cct/cct6.png',
        note: ""
    },
    {
        name: "Choco Stick Drying Rack",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: [],
        url: '/regular_decor/cct/cct7.png',
        note: ""
    },
    {
        name: "Pretzel Fence",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: ["Fence"],
        url: '/regular_decor/cct/cct8.png',
        note: ""
    },
    {
        name: "Roll Cake Flowerbed",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/cct/cct9.png',
        note: ""
    },
    {
        name: "Choco Gazebo",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/cct/cct10.png',
        note: ""
    },
    {
        name: "Roll Cake Garden Table",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: ["Table", "Cookie Interaction", "Food"],
        url: '/regular_decor/cct/cct11.png',
        note: ""
    },
    {
        name: "Berry Churros Swing",
        theme: "Crispy Cookie Town",
        size: "4x4",
        points: 15,
        tags: ["Cookie Decor"],
        url: '/regular_decor/cct/cct12.png',
        note: "Cookie Decor for Strawberry Cookie or Gingerbrave Cookie"
    },
    {
        name: "Tick Tock Clock Tower",
        theme: "Crispy Cookie Town",
        size: "16x16",
        points: 170,
        tags: ["Landmark", "Tower"],
        url: '/regular_decor/cct/cct13.png',
        note: ""
    },
    /* Start of Camping Time */
    {
        name: "Roll Cake Pot Hanger",
        theme: "Camping Time",
        size: "2x2",
        points: 11,
        tags: [],
        url: '/regular_decor/ct/ct1.png',
        note: ""
    },
    {
        name: "Sweet Stick Firewood",
        theme: "Camping Time",
        size: "2x2",
        points: 11,
        tags: ["Fire"],
        url: '/regular_decor/ct/ct2.png',
        note: ""
    },
    {
        name: "Basket of Berries",
        theme: "Camping Time",
        size: "2x2",
        points: 11,
        tags: ["Food"],
        url: '/regular_decor/ct/ct3.png',
        note: ""
    },
    {
        name: "Comfy Candy Stool",
        theme: "Camping Time",
        size: "2x2",
        points: 11,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ct/ct4.png',
        note: ""
    },
    {
        name: "Jellybelt Hammock",
        theme: "Camping Time",
        size: "4x4",
        points: 16,
        tags: [],
        url: '/regular_decor/ct/ct5.png',
        note: ""
    },
    {
        name: "Pancake Tent",
        theme: "Camping Time",
        size: "4x4",
        points: 16,
        tags: ["Tent"],
        url: '/regular_decor/ct/ct6.png',
        note: ""
    },
    {
        name: "Jellysteak BBQ",
        theme: "Camping Time",
        size: "4x4",
        points: 16,
        tags: ["Food"],
        url: '/regular_decor/ct/ct7.png',
        note: ""
    },
    {
        name: "Long-lasting Campfire",
        theme: "Camping Time",
        size: "4x4",
        points: 16,
        tags: ["Fire", "Cookie Interaction"],
        url: '/regular_decor/ct/ct8.png',
        note: ""
    },
    /*Start of Land of Peace & Healing*/
    {
        name: "Magic Primrose Planter",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/lph/lph1.png',
        note: ""
    },
    {
        name: "Bed of Blooming Lilies",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/lph/lph2.png',
        note: ""
    },
    {
        name: "Cream Mead Stall",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Cart", "Food"],
        url: '/regular_decor/lph/lph3.png',
        note: ""
    },
    {
        name: "Cream Eclair Wall",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Wall"],
        url: '/regular_decor/lph/lph4.png',
        note: ""
    },
    {
        name: "Stained Glass Conservatory",
        theme: "Land of Peace & Healing",
        size: "8x8",
        points: 36,
        tags: ["Building"],
        url: '/regular_decor/lph/lph5.png',
        note: ""
    },
    {
        name: "White Choclate Fence",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/lph/lph6.png',
        note: ""
    },
    {
        name: "Honey Waffle Table",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Table", "Cookie Interaction", "Food"],
        url: '/regular_decor/lph/lph7.png',
        note: ""
    },
    {
        name: "Sleeping Vanilla Orchard",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/lph/lph8.png',
        note: ""
    },
    {
        name: "Vanilla Kingdom Gates",
        theme: "Land of Peace & Healing",
        size: "8x8",
        points: 36,
        tags: ["Gate"],
        url: '/regular_decor/lph/lph9.png',
        note: ""
    },
    {
        name: "Good Old Clothesline",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/lph/lph10.png',
        note: ""
    },
    {
        name: "Wafer Laundry Basket",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/lph/lph11.png',
        note: ""
    },
    {
        name: "Cream Sheep",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Animal"],
        url: '/regular_decor/lph/lph12.png',
        note: ""
    },
    {
        name: "Bed of Primroses",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/lph/lph13.png',
        note: ""
    },
    {
        name: "Candy Cane Wheelchair",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/lph/lph14.png',
        note: ""
    },
    {
        name: "Peaceful Dreamer's Statue",
        theme: "Land of Peace & Healing",
        size: "2x2",
        points: 20,
        tags: ["Statue"],
        url: '/regular_decor/lph/lph15.png',
        note: ""
    },
    {
        name: "Vanilla Eclair Bench",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/lph/lph16.png',
        note: ""
    },
    {
        name: "Vanilla Sandwich Table",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/lph/lph17.png',
        note: ""
    },
    {
        name: "Simmering Bread Cauldron",
        theme: "Land of Peace & Healing",
        size: "4x4",
        points: 30,
        tags: ["Food"],
        url: '/regular_decor/lph/lph18.png',
        note: ""
    },
    {
        name: "Wafflebot Workshop",
        theme: "Land of Peace & Healing",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/lph/lph19.png',
        note: "Cookie Decor for Strawberry Crepe Cookie"
    },
    {
        name: "Crow Tree",
        theme: "Land of Peace & Healing",
        size: "8x8",
        points: 400,
        tags: ["Greenery", "Cookie Decor"],
        url: '/regular_decor/lph/lph20.png',
        note: "Cookie Decor for Black Raisin Cookie"
    },
    {
        name: "Vanilla Orchid Garden",
        theme: "Land of Peace & Healing",
        size: "8x8",
        points: 400,
        tags: ["Building", "Cookie Decor", "Ancient"],
        url: '/regular_decor/lph/lph21.png',
        note: "Cookie Decor for Pure Vanilla Cookie"
    },
    {
        name: "Vanilla Sanatorium",
        theme: "Land of Peace & Healing",
        size: "16x16",
        points: 440,
        tags: ["Landmark", "Building"],
        url: '/regular_decor/lph/lph22.png',
        note: ""
    },
    /*Start of Parfaedia Fantasy*/
    {
        name: "Cinnamon Canal",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/pf/pf1.png',
        note: ""
    },
    {
        name: "Hard Almond Tiles",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/pf/pf2.png',
        note: ""
    },
    {
        name: "Cinnamon Sprinkle Road",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/pf/pf3.png',
        note: ""
    },
    {
        name: "Vanilla Soft Serve Tree",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/pf/pf4.png',
        note: ""
    },
    {
        name: "Choco Soft Serve Tree",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/pf/pf5.png',
        note: ""
    },
    {
        name: "Banana Soft Serve Tree",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/pf/pf6.png',
        note: ""
    },
    {
        name: "Strawberry Soft Serve Tree",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/pf/pf7.png',
        note: ""
    },
    {
        name: "Highly Suspicious Wizard",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Gnome"],
        url: '/regular_decor/pf/pf8.png',
        note: ""
    },
    {
        name: "Potted Mandragora",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 25,
        tags: ["Greenery"],
        url: '/regular_decor/pf/pf9.png',
        note: ""
    },
    {
        name: "Snowy Blue Light Lamp",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/pf/pf10.png',
        note: ""
    },
    {
        name: "Blue Light Lamp",
        theme: "Parfaedia Fantasy",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/pf/pf11.png',
        note: ""
    },
    {
        name: "Almond Biscuit Bench",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/pf/pf12.png',
        note: ""
    },
    {
        name: "Mysterious Passage",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 35,
        tags: [],
        url: '/regular_decor/pf/pf13.png',
        note: ""
    },
    {
        name: "Ink Cap Alembic",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 35,
        tags: [],
        url: '/regular_decor/pf/pf14.png',
        note: ""
    },
    {
        name: "Magic Ingredient Shelf",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 36,
        tags: [],
        url: '/regular_decor/pf/pf15.png',
        note: ""
    },
    {
        name: "Sweetberry Parfait Table",
        theme: "Parfaedia Fantasy",
        size: "4x4",
        points: 35,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/pf/pf16.png',
        note: ""
    },
    {
        name: "Flying Teaspoon Shop",
        theme: "Parfaedia Fantasy",
        size: "8x8",
        points: 40,
        tags: ["Shop", "Food"],
        url: '/regular_decor/pf/pf17.png',
        note: ""
    },
    {
        name: "Latte Atelier",
        theme: "Parfaedia Fantasy",
        size: "8x8",
        points: 400,
        tags: ["Food", "Cookie Decor"],
        url: '/regular_decor/pf/pf18.png',
        note: "Cookie Decor for Latte Cookie"
    },
    {
        name: "Almond St. 8, Phone Booth",
        theme: "Parfaedia Fantasy",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/pf/pf19.png',
        note: "Cookie Decor for Almond Cookie"
    },
    {
        name: "Cream Puff Attic",
        theme: "Parfaedia Fantasy",
        size: "8x8",
        points: 400,
        tags: ["Building", "Cookie Decor"],
        url: '/regular_decor/pf/pf20.png',
        note: "Cookie Decor for Cream Puff Cookie"
    },
    {
        name: "Parfaitarium",
        theme: "Parfaedia Fantasy",
        size: "16x16",
        points: 440,
        tags: ["Landmark", "Building"],
        url: '/regular_decor/pf/pf21.png',
        note: ""
    },
    /*Start of Happy Farm*/
    {
        name: "Biscuit Channel",
        theme: "Happy Farm",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/hf/hf1.png',
        note: ""
    },
    {
        name: "Biscuitstone Tile",
        theme: "Happy Farm",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/hf/hf2.png',
        note: ""
    },
    {
        name: "Biscuitstone Road",
        theme: "Happy Farm",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/hf/hf3.png',
        note: ""
    },
    {
        name: "Biscuit Hay Sheaf",
        theme: "Happy Farm",
        size: "2x2",
        points: 11,
        tags: [],
        url: '/regular_decor/hf/hf4.png',
        note: ""
    },
    {
        name: "Jellybean Cart",
        theme: "Happy Farm",
        size: "2x2",
        points: 11,
        tags: ["Food", "Cart"],
        url: '/regular_decor/hf/hf5.png',
        note: ""
    },
    {
        name: "Cream Biscuit Fence",
        theme: "Happy Farm",
        size: "4x4",
        points: 17,
        tags: ["Fence"],
        url: '/regular_decor/hf/hf6.png',
        note: ""
    },
    {
        name: "Biscuit Horsie",
        theme: "Happy Farm",
        size: "4x4",
        points: 17,
        tags: ["Animal"],
        url: '/regular_decor/hf/hf7.png',
        note: ""
    },
    {
        name: "Blueberry Cart",
        theme: "Happy Farm",
        size: "4x4",
        points: 17,
        tags: ["Cart", "Food"],
        url: '/regular_decor/hf/hf8.png',
        note: ""
    },
    {
        name: "Biscuit Hay Wagon",
        theme: "Happy Farm",
        size: "4x4",
        points: 17,
        tags: ["Cart"],
        url: '/regular_decor/hf/hf9.png',
        note: ""
    },
    {
        name: "Round Bee Hive",
        theme: "Happy Farm",
        size: "2x2",
        points: 17,
        tags: ["Food"],
        url: '/regular_decor/hf/hf10.png',
        note: ""
    },
    {
        name: "Fluffy Bread Cart",
        theme: "Happy Farm",
        size: "8x8",
        points: 22,
        tags: ["Cart", "Cookie Interaction"],
        url: '/regular_decor/hf/hf11.png',
        note: ""
    },
    /*Start of Acorn Village*/
    {
        name: "Choco Acorn",
        theme: "Acorn Village",
        size: "2x2",
        points: 12,
        tags: ["Greenery"],
        url: '/regular_decor/av/av1.png',
        note: ""
    },
    {
        name: "Acorn Vine Lamp",
        theme: "Acorn Village",
        size: "2x2",
        points: 12,
        tags: ["Lamp"],
        url: '/regular_decor/av/av2.png',
        note: ""
    },
    {
        name: "Autumnal Acorn Lamp",
        theme: "Acorn Village",
        size: "2x2",
        points: 12,
        tags: ["Lamp"],
        url: '/regular_decor/av/av3.png',
        note: ""
    },
    {
        name: "Simple Rope Fence",
        theme: "Acorn Village",
        size: "4x4",
        points: 17,
        tags: ["Fence"],
        url: '/regular_decor/av/av4.png',
        note: ""
    },
    {
        name: "Waffle Acorn Storage",
        theme: "Acorn Village",
        size: "4x4",
        points: 17,
        tags: [],
        url: '/regular_decor/av/av5.png',
        note: ""
    },
    {
        name: "Acorn Oak",
        theme: "Acorn Village",
        size: "4x4",
        points: 17,
        tags: ["Greenery"],
        url: '/regular_decor/av/av6.png',
        note: ""
    },
    {
        name: "Acorn House",
        theme: "Acorn Village",
        size: "4x4",
        points: 17,
        tags: ["Building"],
        url: '/regular_decor/av/av7.png',
        note: ""
    },
    {
        name: "Clover Cookie's Forset Music Festival",
        theme: "Acorn Village",
        size: "8x8",
        points: 180,
        tags: ["Greenery", "Cookie Decor"],
        url: '/regular_decor/av/av8.png',
        note: "Cookie Decor for Clover Cookie"
    },
    /*Start for Gnome's Life*/
    {
        name: "Watering Can Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl1.png',
        note: ""
    },
    {
        name: "Tripped Over Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl2.png',
        note: ""
    },
    {
        name: "Torch Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl3.png',
        note: ""
    },
    {
        name: "Standing Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl4.png',
        note: ""
    },
    {
        name: "Reading Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl5.png',
        note: ""
    },
    {
        name: "Mustache Sugar Gnome",
        theme: "Gnome's Life",
        size: "2x2",
        points: 12,
        tags: ["Gnome"],
        url: '/regular_decor/gl/gl6.png',
        note: ""
    },
    /*Start of Market Square*/
    {
        name: "Chocostone Tile",
        theme: "Market Square",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ms/ms1.png',
        note: ""
    },
    {
        name: "Chocostone Road",
        theme: "Market Square",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ms/ms2.png',
        note: ""
    },
    {
        name: "Jampie Bench",
        theme: "Market Square",
        size: "2x2",
        points: 13,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/ms/ms3.png',
        note: ""
    },
    {
        name: "Cotton Candy Cart",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food", "Cart"],
        url: '/regular_decor/ms/ms4.png',
        note: ""
    },
    {
        name: "Berry Box",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food"],
        url: '/regular_decor/ms/ms5.png',
        note: ""
    },
    {
        name: "Honeycomb Box",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food"],
        url: '/regular_decor/ms/ms6.png',
        note: ""
    },
    {
        name: "Veggie Basket",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food"],
        url: '/regular_decor/ms/ms7.png',
        note: ""
    },
    {
        name: "Roll Cake Cutting Board",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food"],
        url: '/regular_decor/ms/ms8.png',
        note: ""
    },
    {
        name: "Lemon Drink Container",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food"],
        url: '/regular_decor/ms/ms9.png',
        note: ""
    },
    {
        name: "Milk Cart",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food", "Cart"],
        url: '/regular_decor/ms/ms10.png',
        note: ""
    },
    {
        name: "Omurice Table",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Food", "Table", "Cookie Interaction"],
        url: '/regular_decor/ms/ms11.png',
        note: ""
    },
    {
        name: "Jampie Table",
        theme: "Market Square",
        size: "4x4",
        points: 19,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/ms/ms12.png',
        note: ""
    },
    {
        name: "This'n'That' Emporium",
        theme: "Market Square",
        size: "8x8",
        points: 25,
        tags: ["Shop"],
        url: '/regular_decor/ms/ms13.png',
        note: ""
    },
    {
        name: "Colorful Flower Shop",
        theme: "Market Square",
        size: "8x8",
        points: 25,
        tags: ["Shop", "Greenery"],
        url: '/regular_decor/ms/ms14.png',
        note: ""
    },
    {
        name: "Fresh Veggie Shop",
        theme: "Market Square",
        size: "8x8",
        points: 25,
        tags: ["Shop", "Food"],
        url: '/regular_decor/ms/ms15.png',
        note: ""
    },
    {
        name: "Jelly Meat Stall",
        theme: "Market Square",
        size: "8x8",
        points: 25,
        tags: ["Shop", "Food"],
        url: '/regular_decor/ms/ms16.png',
        note: ""
    },
    {
        name: "Caramel Fountain",
        theme: "Market Square",
        size: "8x8",
        points: 25,
        tags: ["Fountain"],
        url: '/regular_decor/ms/ms17.png',
        note: ""
    },
    /*Start of Lunar New Year*/
    {
        name: "Black Sesame Dasik Tile",
        theme: "Lunar New Year",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/lny/lny1.png',
        note: ""
    },
    {
        name: "Kite Sugar Gnome",
        theme: "Lunar New Year",
        size: "2x2",
        points: 20,
        tags: ["Gnome"],
        url: '/regular_decor/lny/lny2.png',
        note: ""
    },
    {
        name: "Jujube Rice Cake Wall",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: ["Wall"],
        url: '/regular_decor/lny/lny3.png',
        note: ""
    },
    {
        name: "Persimmon Jar",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/lny/lny4.png',
        note: ""
    },
    {
        name: "Painted Folding Screen",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/lny/lny5.png',
        note: ""
    },
    {
        name: "Migwa Cedar",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/lny/lny6.png',
        note: ""
    },
    {
        name: "Jelly Pine Tree",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/lny/lny7.png',
        note: ""
    },
    {
        name: "Yakgwa Bench",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/lny/lny8.png',
        note: ""
    },
    {
        name: "Yakgwa Table",
        theme: "Lunar New Year",
        size: "4x4",
        points: 30,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/lny/lny9.png',
        note: ""
    },
    {
        name: "Lucky Palanquin",
        theme: "Lunar New Year",
        size: "8x8",
        points: 36,
        tags: [],
        url: '/regular_decor/lny/lny10.png',
        note: ""
    },
    {
        name: "Sujeonggwa Pond",
        theme: "Lunar New Year",
        size: "8x8",
        points: 35,
        tags: [],
        url: '/regular_decor/lny/lny11.png',
        note: ""
    },
    {
        name: "Dagwa Pavilion",
        theme: "Lunar New Year",
        size: "8x8",
        points: 40,
        tags: ["Building", "Cookie Interaction"],
        url: '/regular_decor/lny/lny12.png',
        note: ""
    },
    {
        name: "Spirit Fox Swing",
        theme: "Lunar New Year",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/lny/lny13.png',
        note: "Cookie Decor for Kumiho Cookie"
    },
    /*Start of Atlas of Trees*/
    {
        name: "Snowfall Tree Stump",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/aot/aot1.png',
        note: ""
    },
    {
        name: "Red Berry Bush",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot2.png',
        note: ""
    },

    {
        name: "Jolly Snowfruit Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot3.png',
        note: ""
    },
    {
        name: "Frosted Pine Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot4.png',
        note: ""
    },
    {
        name: "Jolly Round Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot5.png',
        note: ""
    },
    {
        name: "Autumn Willow Tree",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot6.png',
        note: ""
    },
    {
        name: "Autumn Tree with a Clover",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot7.png',
        note: ""
    },
    {
        name: "Amber Autumn Tree",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot8.png',
        note: ""
    },
    {
        name: "Autumn Clover Leaf Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot9.png',
        note: ""
    },
    {
        name: "Palm Maple Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot10.png',
        note: ""
    },
    {
        name: "Eerie Dried-up Tree",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot11.png',
        note: ""
    },
    {
        name: "Sleeping Sage Stump",
        theme: "Atlas of Trees",
        size: "3x3",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot12.png',
        note: ""
    },
    {
        name: "Resting Tree Stump",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/aot/aot13.png',
        note: ""
    },
    {
        name: "Ivied Stump",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/aot/aot14.png',
        note: ""
    },
    {
        name: "Sleeping Log",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/aot/aot15.png',
        note: ""
    },
    {
        name: "Young Evergreen Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot16.png',
        note: ""
    },
    {
        name: "Tapered Garden Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot17.png',
        note: ""
    },
    {
        name: "Rebellious Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot18.png',
        note: ""
    },
    {
        name: "Clover Leaf Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot19.png',
        note: ""
    },
    {
        name: "Verdant Ginkogo Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot20.png',
        note: ""
    },
    {
        name: "Pointy Pine Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot21.png',
        note: ""
    },
    {
        name: "Fluffy Pine Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot22.png',
        note: ""
    },
    {
        name: "Shaggy Evergreen Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot23.png',
        note: ""
    },
    {
        name: "Lie Detector Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot24.png',
        note: ""
    },
    {
        name: "Round Evergreen Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot25.png',
        note: ""
    },
    {
        name: "Frightened Dried-up Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot26.png',
        note: ""
    },
    {
        name: "Exhausted Dried-up Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot27.png',
        note: ""
    },
    {
        name: "Large Willow Tree",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot28.png',
        note: ""
    },
    {
        name: "Mushroom-adorned Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot29.png',
        note: ""
    },
    {
        name: "Sheltering Garden Tree",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot30.png',
        note: ""
    },
    {
        name: "Big Tree with a Clover",
        theme: "Atlas of Trees",
        size: "6x6",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot31.png',
        note: ""
    },
    {
        name: "Big Tree with a Mushroom",
        theme: "Atlas of Trees",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/aot/aot32.png',
        note: ""
    },
    /*Start of Tea Cup Hamlet*/
    {
        name: "Spring Flowers",
        theme: "Tea Cup Hamlet",
        size: "4x4",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/tch/tch1.png',
        note: ""
    },
    {
        name: "Blue Sage Tea Cup House",
        theme: "Tea Cup Hamlet",
        size: "4x4",
        points: 20,
        tags: ["Building"],
        url: '/regular_decor/tch/tch2.png',
        note: ""
    },
    {
        name: "Cherry Teapot House",
        theme: "Tea Cup Hamlet",
        size: "4x4",
        points: 20,
        tags: ["Building"],
        url: '/regular_decor/tch/tch3.png',
        note: ""
    },
    {
        name: "Cherry Tea Cup House",
        theme: "Tea Cup Hamlet",
        size: "4x4",
        points: 20,
        tags: ["Building"],
        url: '/regular_decor/tch/tch4.png',
        note: ""
    },
    {
        name: "Creamer Pond",
        theme: "Tea Cup Hamlet",
        size: "4x4",
        points: 20,
        tags: [],
        url: '/regular_decor/tch/tch5.png',
        note: ""
    },
    /*Start of Witches & Ghosts*/
    {
        name: "Melted Choco Tree",
        theme: "Witches & Ghosts",
        size: "4x4",
        points: 21,
        tags: ["Greenery"],
        url: '/regular_decor/wg/wg1.png',
        note: ""
    },
    {
        name: "Gloomy Mausoleum",
        theme: "Witches & Ghosts",
        size: "4x4",
        points: 21,
        tags: [],
        url: '/regular_decor/wg/wg2.png',
        note: ""
    },
    {
        name: "Witch's Oven Photo Zone",
        theme: "Witches & Ghosts",
        size: "8x8",
        points: 28,
        tags: [],
        url: '/regular_decor/wg/wg3.png',
        note: ""
    },
    {
        name: "Bleak Sugar Cemetery",
        theme: "Witches & Ghosts",
        size: "8x8",
        points: 28,
        tags: [],
        url: '/regular_decor/wg/wg4.png',
        note: ""
    },
    {
        name: "Blackberry Cookie's Midnight Fireplace",
        theme: "Witches & Ghosts",
        size: "8x8",
        points: 240,
        tags: ["Cookie Decor"],
        url: '/regular_decor/wg/wg5.png',
        note: "Cookie Decor for both Blackberry Cookie and Onion Cookie"
    },
    {
        name: "Eerie Haunted House",
        theme: "Witches & Ghosts",
        size: "16x16",
        points: 200,
        tags: ["Landmark", "Building"],
        url: '/regular_decor/wg/wg6.png',
        note: ""
    },
    /*Start of Blade & Magic*/
    {
        name: "Weapon Rack",
        theme: "Blade & Magic",
        size: "4x4",
        points: 22,
        tags: ["Weapon"],
        url: '/regular_decor/bm/bm1.png',
        note: ""
    },
    {
        name: "Magic Tome",
        theme: "Blade & Magic",
        size: "4x4",
        points: 22,
        tags: [],
        url: '/regular_decor/bm/bm2.png',
        note: ""
    },
    {
        name: "Bear Jelly Black Knight",
        theme: "Blade & Magic",
        size: "4x4",
        points: 22,
        tags: ["Statue"],
        url: '/regular_decor/bm/bm3.png',
        note: ""
    },
    {
        name: "Epic Puppet Show",
        theme: "Blade & Magic",
        size: "8x8",
        points: 29,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/bm/bm4.png',
        note: ""
    },
    {
        name: "Sage's Round Table",
        theme: "Blade & Magic",
        size: "6x6",
        points: 38,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/bm/bm5.png',
        note: ""
    },
    {
        name: "Green Territory's Banner",
        theme: "Blade & Magic",
        size: "2x2",
        points: 20,
        tags: ["Banner"],
        url: '/regular_decor/bm/bm6.png',
        note: ""
    },
    {
        name: "Excavated Warrior's Statue",
        theme: "Blade & Magic",
        size: "4x4",
        points: 30,
        tags: ["Statue"],
        url: '/regular_decor/bm/bm7.png',
        note: ""
    },
    {
        name: "Red Territory's Banner",
        theme: "Blade & Magic",
        size: "2x2",
        points: 20,
        tags: ["Banner"],
        url: '/regular_decor/bm/bm8.png',
        note: ""
    },
    {
        name: "Warrior's Stone Bench",
        theme: "Blade & Magic",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/bm/bm9.png',
        note: ""
    },
    {
        name: "Blue Territory's Banner",
        theme: "Blade & Magic",
        size: "2x2",
        points: 20,
        tags: ["Banner"],
        url: '/regular_decor/bm/bm10.png',
        note: ""
    },
    {
        name: "Morning Training Ground",
        theme: "Blade & Magic",
        size: "4x4",
        points: 30,
        tags: ["Weapon"],
        url: '/regular_decor/bm/bm11.png',
        note: ""
    },
    {
        name: "Magical Blue Pointy Hat Tower",
        theme: "Blade & Magic",
        size: "6x6",
        points: 38,
        tags: ["Tower"],
        url: '/regular_decor/bm/bm12.png',
        note: ""
    },
    {
        name: "Magic Wisp",
        theme: "Blade & Magic",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/bm/bm13.png',
        note: ""
    },
    {
        name: "Curious Laboratory",
        theme: "Blade & Magic",
        size: "8x8",
        points: 240,
        tags: ["Cookie Decor"],
        url: '/regular_decor/bm/bm14.png',
        note: "Cookie Decor for both Wizard Cookie and Alchemist Cookie"
    },
    {
        name: "Madeleine Cookie's Altar",
        theme: "Blade & Magic",
        size: "8x8",
        points: 300,
        tags: ["Cookie Decor"],
        url: '/regular_decor/bm/bm15.png',
        note: "Cookie Decor for Madeleine Cookie"
    },
    {
        name: "Excavation Tent",
        theme: "Blade & Magic",
        size: "8x8",
        points: 400,
        tags: ["Tent", "Cookie Decor"],
        url: '/regular_decor/bm/bm16.png',
        note: "Cookie Decor for Eclair Cookie"
    },
    {
        name: "Molten Magma Mountain",
        theme: "Blade & Magic",
        size: "16x16",
        points: 230,
        tags: ["Landmark"],
        url: '/regular_decor/bm/bm17.png',
        note: ""
    },
    /*Start of Kingdom of Snow & Ice*/
    {
        name: "Snowy Road",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ksi/ksi1.png',
        note: ""
    },
    {
        name: "Frosty Tiles",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ksi/ksi2.png',
        note: ""
    },
    {
        name: "Slippery Ice Road",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ksi/ksi3.png',
        note: ""
    },
    {
        name: "Snowy Tree",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 23,
        tags: ["Greenery"],
        url: '/regular_decor/ksi/ksi4.png',
        note: ""
    },
    {
        name: "De-iceing Tools",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 23,
        tags: [],
        url: '/regular_decor/ksi/ksi5.png',
        note: ""
    },
    {
        name: "Strawberry Snowman",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 23,
        tags: [],
        url: '/regular_decor/ksi/ksi6.png',
        note: ""
    },
    {
        name: "Mint Choco Snowman",
        theme: "Kingdom of Snow & Ice",
        size: "4x4",
        points: 23,
        tags: [],
        url: '/regular_decor/ksi/ksi7.png',
        note: ""
    },
    {
        name: "Ice Cream Igloo",
        theme: "Kingdom of Snow & Ice",
        size: "8x8",
        points: 30,
        tags: ["Building"],
        url: '/regular_decor/ksi/ksi8.png',
        note: ""
    },
    {
        name: "Snow Sugar Cookie's Winter Guest",
        theme: "Kingdom of Snow & Ice",
        size: "8x8",
        points: 300,
        tags: ["Cookie Decor"],
        url: '/regular_decor/ksi/ksi9.png',
        note: "Cookie Decor for Snow Sugar Cookie"
    },
    {
        name: "Everwinter Snow Globe",
        theme: "Kingdom of Snow & Ice",
        size: "16x16",
        points: 260,
        tags: ["Landmark"],
        url: '/regular_decor/ksi/ksi10.png',
        note: ""
    },
    /*Start of Luxurious Juice Salon*/
    {
        name: "Chocowood Tiles",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ljs/ljs1.png',
        note: ""
    },
    {
        name: "Modern Choco Menu Board",
        theme: "Luxurious Juice Salon",
        size: "2x2",
        points: 16,
        tags: [],
        url: '/regular_decor/ljs/ljs2.png',
        note: ""
    },
    {
        name: "Golden Cheese Plant",
        theme: "Luxurious Juice Salon",
        size: "2x2",
        points: 16,
        tags: ["Greenery"],
        url: '/regular_decor/ljs/ljs3.png',
        note: ""
    },
    {
        name: "Luxurious Croissant Sofa",
        theme: "Luxurious Juice Salon",
        size: "2x2",
        points: 16,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ljs/ljs4.png',
        note: ""
    },
    {
        name: "Caramel Butter Gramophone",
        theme: "Luxurious Juice Salon",
        size: "2x2",
        points: 16,
        tags: ["Music"],
        url: '/regular_decor/ljs/ljs5.png',
        note: ""
    },
    {
        name: "Stained-Glass Pattern",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: [],
        url: '/regular_decor/ljs/ljs6.png',
        note: ""
    },
    {
        name: "Cheese Pie Table",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Table"],
        url: '/regular_decor/ljs/ljs7.png',
        note: ""
    },
    {
        name: "Luxurious Mille-feuille Shelf",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: [],
        url: '/regular_decor/ljs/ljs8.png',
        note: ""
    },
    {
        name: "Cacaoken Aging Barrel",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Food"],
        url: '/regular_decor/ljs/ljs9.png',
        note: ""
    },
    {
        name: "Dark Choco Harpsichord",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Music"],
        url: '/regular_decor/ljs/ljs10.png',
        note: ""
    },
    {
        name: "Bottled Applie Pie Cellar",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Food"],
        url: '/regular_decor/ljs/ljs11.png',
        note: ""
    },
    {
        name: "Luxurious Armchair Set",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ljs/ljs12.png',
        note: ""
    },
    {
        name: "Modern Choco Table Set",
        theme: "Luxurious Juice Salon",
        size: "4x4",
        points: 23,
        tags: ["Cookie Interaction", "Table"],
        url: '/regular_decor/ljs/ljs13.png',
        note: ""
    },
    {
        name: "Sparkling Cookie's Juice Bar",
        theme: "Luxurious Juice Salon",
        size: "8x8",
        points: 360,
        tags: ["Cookie Decor", "Food"],
        url: '/regular_decor/ljs/ljs14.png',
        note: `Cookie Decor for Sparkling Cookie, Milk Cookie
        and Vampire cookie. Up to 2 other cookies can interact
        with the stools.`
    },
    {
        name: "Brewing Laboratory",
        theme: "Luxurious Juice Salon",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/ljs/ljs15.png',
        note: "Cookie Decor for Espresso Cookie"
    },
    /*Start for Grand Dinner Party*/
    {
        name: "Cookie & Cream Tiles",
        theme: "Grand Dinner Party",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/gdp/gdp1.png',
        note: ""
    },
    {
        name: "Red Velvet Carpet",
        theme: "Grand Dinner Party",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/gdp/gdp2.png',
        note: ""
    },
    {
        name: "Green Tea Pillar",
        theme: "Grand Dinner Party",
        size: "2x2",
        points: 16,
        tags: ["Food"],
        url: '/regular_decor/gdp/gdp3.png',
        note: ""
    },
    {
        name: "Pudding Cart",
        theme: "Grand Dinner Party",
        size: "2x2",
        points: 16,
        tags: ["Cart", "Food"],
        url: '/regular_decor/gdp/gdp4.png',
        note: ""
    },
    {
        name: "Luxurious Garden Plant",
        theme: "Grand Dinner Party",
        size: "2x2",
        points: 16,
        tags: ["Greenery"],
        url: '/regular_decor/gdp/gdp5.png',
        note: ""
    },
    {
        name: "Super-Luxurious Vase",
        theme: "Grand Dinner Party",
        size: "2x2",
        points: 16,
        tags: ["Greenery"],
        url: '/regular_decor/gdp/gdp6.png',
        note: ""
    },
    {
        name: "Luxurious Party Vase",
        theme: "Grand Dinner Party",
        size: "2x2",
        points: 16,
        tags: ["Greenery"],
        url: '/regular_decor/gdp/gdp7.png',
        note: ""
    },
    {
        name: "Luxurious Afternoon Tea Set",
        theme: "Grand Dinner Party",
        size: "4x4",
        points: 24,
        tags: ["Food"],
        url: '/regular_decor/gdp/gdp8.png',
        note: ""
    },
    {
        name: "Jelly Steak Table",
        theme: "Grand Dinner Party",
        size: "4x4",
        points: 24,
        tags: ["Table", "Food"],
        url: '/regular_decor/gdp/gdp9.png',
        note: ""
    },
    {
        name: "Luxurious 3-Tier Cake",
        theme: "Grand Dinner Party",
        size: "4x4",
        points: 24,
        tags: ["Food"],
        url: '/regular_decor/gdp/gdp10.png',
        note: ""
    },
    {
        name: "Grand Dinner Table",
        theme: "Grand Dinner Party",
        size: "8x8",
        points: 32,
        tags: ["Table", "Cookie Interaction", "Food"],
        url: '/regular_decor/gdp/gdp11.png',
        note: ""
    },
    {
        name: "Custard Cookie III's Throne",
        theme: "Grand Dinner Party",
        size: "8x8",
        points: 800,
        tags: ["Cookie Decor"],
        url: '/regular_decor/gdp/gdp12.png',
        note: "Cookie Decor for Custard Cookie"
    },
    /*Start of Sculpture Park*/
    {
        name: "Sugar Marble Waterway",
        theme: "Sculpture Park",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/sp/sp1.png',
        note: ""
    },
    {
        name: "Jellystone Tiles",
        theme: "Sculpture Park",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/sp/sp2.png',
        note: ""
    },
    {
        name: "Almond Garden Tree",
        theme: "Sculpture Park",
        size: "2x2",
        points: 17,
        tags: ["Greenery"],
        url: '/regular_decor/sp/sp3.png',
        note: ""
    },
    {
        name: "Conical Garden Plant",
        theme: "Sculpture Park",
        size: "2x2",
        points: 17,
        tags: ["Greenery"],
        url: '/regular_decor/sp/sp4.png',
        note: ""
    },
    {
        name: "Wisteria Streetlight",
        theme: "Sculpture Park",
        size: "2x2",
        points: 17,
        tags: ["Lamp", "Greenery"],
        url: '/regular_decor/sp/sp5.png',
        note: ""
    },
    {
        name: "Blue Banner Lantern",
        theme: "Sculpture Park",
        size: "2x2",
        points: 17,
        tags: ["Banner", "Lamp"],
        url: '/regular_decor/sp/sp6.png',
        note: ""
    },
    {
        name: "Sugar Swan Statue",
        theme: "Sculpture Park",
        size: "4x4",
        points: 17,
        tags: ["Statue"],
        url: '/regular_decor/sp/sp7.png',
        note: ""
    },
    {
        name: "Cubic Garden Plant",
        theme: "Sculpture Park",
        size: "4x4",
        points: 25,
        tags: ["Greenery"],
        url: '/regular_decor/sp/sp8.png',
        note: ""
    },
    {
        name: "Sugar Marble Wall",
        theme: "Sculpture Park",
        size: "4x4",
        points: 25,
        tags: ["Wall"],
        url: '/regular_decor/sp/sp9.png',
        note: ""
    },
    {
        name: "Sugar Marble Seat",
        theme: "Sculpture Park",
        size: "4x4",
        points: 25,
        tags: ["Bench"],
        url: '/regular_decor/sp/sp10.png',
        note: ""
    },
    {
        name: "Sugar Marble Bench",
        theme: "Sculpture Park",
        size: "4x4",
        points: 25,
        tags: ["Bench"],
        url: '/regular_decor/sp/sp11.png',
        note: ""
    },
    {
        name: "Pure Vanilla Cookie Statue",
        theme: "Sculpture Park",
        size: "4x4",
        points: 25,
        tags: ["Statue", "Ancient"],
        url: '/regular_decor/sp/sp12.png',
        note: ""
    },
    {
        name: "Rhombic Garden Plant",
        theme: "Sculpture Park",
        size: "8x8",
        points: 33,
        tags: ["Greenery"],
        url: '/regular_decor/sp/sp13.png',
        note: ""
    },
    {
        name: "Sugar Marble Jelly Dragon",
        theme: "Sculpture Park",
        size: "4x4",
        points: 33,
        tags: ["Statue"],
        url: '/regular_decor/sp/sp14.png',
        note: ""
    },
    {
        name: "Sugar Marble Jelly Lion",
        theme: "Sculpture Park",
        size: "4x4",
        points: 33,
        tags: ["Statue"],
        url: '/regular_decor/sp/sp15.png',
        note: ""
    },
    {
        name: "Dreaming Jelly Lion Statue",
        theme: "Sculpture Park",
        size: "16x16",
        points: 290,
        tags: ["Landmark", "Statue"],
        url: '/regular_decor/sp/sp16.png',
        note: ""
    },
    /*Start of St. Pastry Order*/
    {
        name: "Pastry Peonies",
        theme: "St. Pastry Order",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/spo/spo1.png',
        note: ""
    },
    {
        name: "Tribunal Candle",
        theme: "St. Pastry Order",
        size: "2x2",
        points: 20,
        tags: ["Candle"],
        url: '/regular_decor/spo/spo2.png',
        note: ""
    },
    {
        name: "Secret Shrine",
        theme: "St. Pastry Order",
        size: "4x4",
        points: 36,
        tags: ["Candle"],
        url: '/regular_decor/spo/spo3.png',
        note: ""
    },
    {
        name: "Cathedral Pew",
        theme: "St. Pastry Order",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/spo/spo4.png',
        note: ""
    },
    {
        name: "Pie-That-Gave-Up",
        theme: "St. Pastry Order",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/spo/spo5.png',
        note: ""
    },
    {
        name: "Cookie Tray of Doom",
        theme: "St. Pastry Order",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/spo/spo6.png',
        note: ""
    },
    {
        name: "Strawberry Choco Pansies",
        theme: "St. Pastry Order",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/spo/spo7.png',
        note: ""
    },
    {
        name: "Cream Cake Stand",
        theme: "St. Pastry Order",
        size: "4x4",
        points: 36,
        tags: ["Food"],
        url: '/regular_decor/spo/spo8.png',
        note: ""
    },
    {
        name: "Fluffy Barking Cake Hound",
        theme: "St. Pastry Order",
        size: "2x2",
        points: 350,
        tags: ["Cake Hound"],
        url: '/regular_decor/spo/spo9.png',
        note: ""
    },
    {
        name: "Forgotten Piece of Cake",
        theme: "St. Pastry Order",
        size: "8x8",
        points: 420,
        tags: ["Food", "Cookie Decor"],
        url: '/regular_decor/spo/spo10.png',
        note: "Cookie Decor for Red Velvet Cookie"
    },
    {
        name: "Clandestine Rendezvous",
        theme: "St. Pastry Order",
        size: "8x8",
        points: 420,
        tags: ["Cookie Decor", "Cookie Interaction"],
        url: '/regular_decor/spo/spo11.png',
        note: "Cookie Decor for Pastry Cookie; another cookies can also interact simultaneously"
    },
    {
        name: "Ominous Cake Tower",
        theme: "St. Pastry Order",
        size: "16x16",
        points: 450,
        tags: ["Landmark", "Food", "Tower"],
        url: '/regular_decor/spo/spo12.png',
        note: ""
    },
    /*Start of Flower Garden*/
    {
        name: "Shrub",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg1.png',
        note: ""
    },
    {
        name: "Hydrangea",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg2.png',
        note: ""
    },
    {
        name: "Strawberrose Flowerbed",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg3.png',
        note: ""
    },
    {
        name: "Cream Rose Flowerbed",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg4.png',
        note: ""
    },
    {
        name: "Zinnia Flowerbed",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg5.png',
        note: ""
    },
    {
        name: "Daffodil Flowerbed",
        theme: "Flower Garden",
        size: "2x2",
        points: 17,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/fg/fg6.png',
        note: ""
    },
    {
        name: "Herb Terrace",
        theme: "Flower Garden",
        size: "8x8",
        points: 360,
        tags: ["Greenery", "Cookie Decor"],
        url: '/regular_decor/fg/fg7.png',
        note: "Cookie Decor for Herb Cookie"
    },
    {
        name: "Morning Dew Garden",
        theme: "Flower Garden",
        size: "16x16",
        points: 320,
        tags: ["Greenery", "Landmark"],
        url: '/regular_decor/fg/fg8.png',
        note: ""
    },
    /*Start for Garden of Delights*/
    {
        name: "Pink Water Tiles",
        theme: "Garden of Delights",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/gd/gd1.png',
        note: ""
    },
    {
        name: "Macaron Bench",
        theme: "Garden of Delights",
        size: "2x2",
        points: 18,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/gd/gd2.png',
        note: ""
    },
    {
        name: "Soft Serve Horsey",
        theme: "Garden of Delights",
        size: "2x2",
        points: 18,
        tags: ["Animal"],
        url: '/regular_decor/gd/gd3.png',
        note: ""
    },
    {
        name: "Pastel Postbox",
        theme: "Garden of Delights",
        size: "2x2",
        points: 18,
        tags: [],
        url: '/regular_decor/gd/gd4.png',
        note: ""
    },
    {
        name: "Lovely Phone Booth",
        theme: "Garden of Delights",
        size: "2x2",
        points: 18,
        tags: [],
        url: '/regular_decor/gd/gd5.png',
        note: ""
    },
    {
        name: "Lovely Photo Zone",
        theme: "Garden of Delights",
        size: "4x4",
        points: 26,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/gd/gd6.png',
        note: ""
    },
    {
        name: "Montblanc Dessert Table",
        theme: "Garden of Delights",
        size: "4x4",
        points: 26,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/gd/gd7.png',
        note: ""
    },
    {
        name: "Cotton Candy Tree",
        theme: "Garden of Delights",
        size: "4x4",
        points: 26,
        tags: ["Greenery"],
        url: '/regular_decor/gd/gd8.png',
        note: ""
    },
    {
        name: "Lovely Dressing Room",
        theme: "Garden of Delights",
        size: "8x8",
        points: 300,
        tags: ["Cookie Decor"],
        url: '/regular_decor/gd/gd9.png',
        note: "Cookie Decor for Princess Cookie and Knight Cookie"
    },
    {
        name: "Mint Choco Cookie's Concert Hall",
        theme: "Garden of Delights",
        size: "8x8",
        points: 360,
        tags: ["Cookie Decor"],
        url: '/regular_decor/gd/gd10.png',
        note: "Cookie Decor for Mint Choco Cookie"
    },
    {
        name: "Grand Dessert Tower",
        theme: "Garden of Delights",
        size: "16x16",
        points: 350,
        tags: ["Food", "Landmark", "Tower"],
        url: '/regular_decor/gd/gd11.png',
        note: ""
    },
    /*Start of Bustling Amusement Park*/
    {
        name: "Balloon Bear Jelly",
        theme: "Bustling Amusement Park",
        size: "2x2",
        points: 18,
        tags: [],
        url: '/regular_decor/bap/bap1.png',
        note: ""
    },
    {
        name: "Free Hug Bear Jelly",
        theme: "Bustling Amusement Park",
        size: "2x2",
        points: 18,
        tags: [],
        url: '/regular_decor/bap/bap2.png',
        note: ""
    },
    {
        name: "Water Bomb Board",
        theme: "Bustling Amusement Park",
        size: "4x4",
        points: 27,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/bap/bap3.png',
        note: ""
    },
    {
        name: "Rocket Rider",
        theme: "Bustling Amusement Park",
        size: "4x4",
        points: 27,
        tags: [],
        url: '/regular_decor/bap/bap4.png',
        note: ""
    },
    {
        name: "Cherry Cream Fence",
        theme: "Bustling Amusement Park",
        size: "4x4",
        points: 27,
        tags: ["Fence"],
        url: '/regular_decor/bap/bap5.png',
        note: ""
    },
    {
        name: "Colorful Balloon Stand",
        theme: "Bustling Amusement Park",
        size: "4x4",
        points: 27,
        tags: ["Cart"],
        url: '/regular_decor/bap/bap6.png',
        note: ""
    },
    {
        name: "Jelly Horsey Carousel",
        theme: "Bustling Amusement Park",
        size: "8x8",
        points: 36,
        tags: [],
        url: '/regular_decor/bap/bap7.png',
        note: ""
    },
    {
        name: "Creamy Rainbow Arch",
        theme: "Bustling Amusement Park",
        size: "8x8",
        points: 400,
        tags: ["Arch", "Cookie Decor"],
        url: '/regular_decor/bap/bap8.png',
        note: "Cookie Decor for Cream Unicorn Cookie"
    },
    {
        name: "Firecracker Cupcake",
        theme: "Bustling Amusement Park",
        size: "8x8",
        points: 300,
        tags: ["Food", "Cookie Decor"],
        url: '/regular_decor/bap/bap9.png',
        note: "Cookie Decor for Cherry Cookie and Gumball Cookie"
    },
    {
        name: "Ferris Wheel",
        theme: "Bustling Amusement Park",
        size: "16x16",
        points: 410,
        tags: ["Landmark"],
        url: '/regular_decor/bap/bap10.png',
        note: ""
    },
    /*Start of Pew-pew Arcade*/
    {
        name: "Jellybean Vending Machine",
        theme: "Pew-Pew Arcade",
        size: "2x2",
        points: 19,
        tags: ["Machine"],
        url: '/regular_decor/ppa/ppa1.png',
        note: ""
    },
    {
        name: "Mighty Hammer Game",
        theme: "Pew-Pew Arcade",
        size: "4x4",
        points: 19,
        tags: ["Machine"],
        url: '/regular_decor/ppa/ppa2.png',
        note: ""
    },
    {
        name: "Gumball Machine",
        theme: "Pew-Pew Arcade",
        size: "4x4",
        points: 28,
        tags: ["Machine"],
        url: '/regular_decor/ppa/ppa3.png',
        note: ""
    },
    {
        name: "Bubblegum Sniper Game",
        theme: "Pew-Pew Arcade",
        size: "4x4",
        points: 28,
        tags: ["Machine"],
        url: '/regular_decor/ppa/ppa4.png',
        note: ""
    },
    {
        name: "Muscle Cookie's Gym Machine",
        theme: "Pew-Pew Arcade",
        size: "8x8",
        points: 300,
        tags: ["Cookie Decor"],
        url: '/regular_decor/ppa/ppa5.png',
        note: "Cookie Decor for Muscle Cookie and Pancake Cookie"
    },
    {
        name: "Gumball Arcade Machine",
        theme: "Pew-Pew Arcade",
        size: "16x16",
        points: 410,
        tags: ["Machine", "Landmark"],
        url: '/regular_decor/ppa/ppa6.png',
        note: ""
    },
    /*Start of Crimson Badlands*/
    {
        name: "Dark Choco Tiles of Darkness",
        theme: "Crimson Badlands",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/cb/cb1.png',
        note: ""
    },
    {
        name: "Candy Cane Torch",
        theme: "Crimson Badlands",
        size: "2x2",
        points: 19,
        tags: [],
        url: '/regular_decor/cb/cb2.png',
        note: ""
    },
    {
        name: "Tilted Candy Cane Thorn",
        theme: "Crimson Badlands",
        size: "4x4",
        points: 29,
        tags: [],
        url: '/regular_decor/cb/cb3.png',
        note: ""
    },
    {
        name: "Slanted Candy Cane Thorn",
        theme: "Crimson Badlands",
        size: "4x4",
        points: 29,
        tags: [],
        url: '/regular_decor/cb/cb4.png',
        note: ""
    },
    {
        name: "Voodoo Doll",
        theme: "Crimson Badlands",
        size: "4x4",
        points: 29,
        tags: [],
        url: '/regular_decor/cb/cb5.png',
        note: ""
    },
    {
        name: "Melting Choco Tree",
        theme: "Crimson Badlands",
        size: "4x4",
        points: 29,
        tags: ["Greenery"],
        url: '/regular_decor/cb/cb6.png',
        note: ""
    },
    {
        name: "Round Table of Darkness",
        theme: "Crimson Badlands",
        size: "8x8",
        points: 400,
        tags: ["Table", "Cookie Decor"],
        url: '/regular_decor/cb/cb7.png',
        note: "Cookie Decor for Dark Choco, Pomegranate, Licorice and Posion Mushroom Cookie"
    },
    {
        name: "Dark Lord's Castle",
        theme: "Crimson Badlands",
        size: "16x16",
        points: 440,
        tags: ["Building", "Landmark"],
        url: '/regular_decor/cb/cb8.png',
        note: ""
    },
    /*Start of Starry Night*/
    {
        name: "Constellation Tiles",
        theme: "Starry Night",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/sn/sn1.png',
        note: ""
    },
    {
        name: "Milky Waterway",
        theme: "Starry Night",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/sn/sn2.png',
        note: ""
    },
    {
        name: "Starlight Lantern",
        theme: "Starry Night",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/sn/sn3.png',
        note: ""
    },
    {
        name: "White Star Jelly Tree",
        theme: "Starry Night",
        size: "4x4",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/sn/sn4.png',
        note: ""
    },
    {
        name: "Golden Croissant Bench",
        theme: "Starry Night",
        size: "4x4",
        points: 20,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/sn/sn5.png',
        note: ""
    },
    {
        name: "Little Telescope",
        theme: "Starry Night",
        size: "4x4",
        points: 29,
        tags: [],
        url: '/regular_decor/sn/sn6.png',
        note: ""
    },
    {
        name: "Starlight Carousel",
        theme: "Starry Night",
        size: "8x8",
        points: 39,
        tags: [],
        url: '/regular_decor/sn/sn7.png',
        note: ""
    },
    {
        name: "Star Candy Observatory",
        theme: "Starry Night",
        size: "16x16",
        points: 470,
        tags: ["Landmark", "Tower"],
        url: '/regular_decor/sn/sn8.png',
        note: ""
    },
    /*Start of Industrial Adventure*/
    {
        name: "Caramel Streetlight",
        theme: "Industrial Adventure",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/ia/ia1.png',
        note: ""
    },
    {
        name: "Red Jelly Fire Hydrant",
        theme: "Industrial Adventure",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ia/ia2.png',
        note: ""
    },
    {
        name: "Cacao Manhole Lid",
        theme: "Industrial Adventure",
        size: "2x2",
        points: 30,
        tags: [],
        url: '/regular_decor/ia/ia3.png',
        note: ""
    },
    {
        name: "Cherry Bomb Cannon",
        theme: "Industrial Adventure",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ia/ia4.png',
        note: ""
    },
    {
        name: "Cacao Butter Plane",
        theme: "Industrial Adventure",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ia/ia5.png',
        note: ""
    },
    {
        name: "Caramel Clock Tower",
        theme: "Industrial Adventure",
        size: "8x8",
        points: 40,
        tags: ["Tower"],
        url: '/regular_decor/ia/ia6.png',
        note: ""
    },
    {
        name: "Choco-Coated Hangar",
        theme: "Industrial Adventure",
        size: "8x8",
        points: 50,
        tags: ["Building"],
        url: '/regular_decor/ia/ia7.png',
        note: ""
    },
    {
        name: "Sheriff's Office",
        theme: "Industrial Adventure",
        size: "8x8",
        points: 400,
        tags: ["Building", "Cookie Decor"],
        url: '/regular_decor/ia/ia8.png',
        note: "Cookie Decor for both Rye Cookie and Chili Pepper Cookie"
    },
    {
        name: "Croissant Zeppelin",
        theme: "Industrial Adventure",
        size: "16x16",
        points: 500,
        tags: ["Landmark", ],
        url: '/regular_decor/ia/ia9.png',
        note: ""
    },
    /*Start of Tropical Island*/
    {
        name: "Seaside Sand Path",
        theme: "Tropical Island",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ti/ti1.png',
        note: ""
    },
    {
        name: "Fruit Cocktail Bridge",
        theme: "Tropical Island",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/ti/ti2.png',
        note: ""
    },
    {
        name: "Orange Biscuit Bridge",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/ti/ti3.png',
        note: ""
    },
    {
        name: "Fresh Fruit Juice Cart",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction", "Shop"],
        url: '/regular_decor/ti/ti4.png',
        note: ""
    },
    {
        name: "Welcomed Sugar Gnome",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Gnome"],
        url: '/regular_decor/ti/ti5.png',
        note: ""
    },
    {
        name: "Welcoming Sugar Gnome",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Gnome"],
        url: '/regular_decor/ti/ti6.png',
        note: ""
    },
    {
        name: "Hibiscus Bush",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/ti/ti7.png',
        note: ""
    },
    {
        name: "Lime Table",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Greenery", "Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/ti/ti8.png',
        note: ""
    },
    {
        name: "Bamboo Fence",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/ti/ti9.png',
        note: ""
    },
    {
        name: "Limecoco Palm Tree",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ti/ti10.png',
        note: ""
    },
    {
        name: "Candy Corn Hermit Crab",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Animal"],
        url: '/regular_decor/ti/ti11.png',
        note: ""
    },
    {
        name: "Monstera Bush",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ti/ti12.png',
        note: ""
    },
    {
        name: "Coconut Beach Welcome Sign",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ti/ti13.png',
        note: ""
    },
    {
        name: "Watermelon Sunbed",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ti/ti14.png',
        note: ""
    },
    {
        name: "Mango Fish",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Animal", "Water"],
        url: '/regular_decor/ti/ti15.png',
        note: ""
    },
    {
        name: "Unicorn Tube",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Water"],
        url: '/regular_decor/ti/ti16.png',
        note: ""
    },
    {
        name: "Watermelon Fish",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Animal", "Water"],
        url: '/regular_decor/ti/ti17.png',
        note: ""
    },
    {
        name: "Jelly Shark Fin",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Animal", "Water"],
        url: '/regular_decor/ti/ti18.png',
        note: ""
    },
    {
        name: "Faded Message in a Bottle",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Water"],
        url: '/regular_decor/ti/ti19.png',
        note: ""
    },
    {
        name: "Conch of the Sea",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ti/ti20.png',
        note: ""
    },
    {
        name: "Jelly Starfish",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Animal"],
        url: '/regular_decor/ti/ti21.png',
        note: ""
    },
    {
        name: "Juicy Ice Pop Snowboard",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ti/ti22.png',
        note: ""
    },
    {
        name: "Beach Picnic Set",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ti/ti23.png',
        note: ""
    },
    {
        name: "Beachside Castle",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ti/ti24.png',
        note: ""
    },
    {
        name: "Plumeria Flowerbed",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/ti/ti25.png',
        note: ""
    },
    {
        name: "Durianeer Tree Fort",
        theme: "Tropical Island",
        size: "6x6",
        points: 32,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ti/ti26.png',
        note: ""
    },
    {
        name: "Green'n'Purple Plant",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Greenery", "Cookie Interaction"],
        url: '/regular_decor/ti/ti27.png',
        note: ""
    },
    {
        name: "Coconut Palm",
        theme: "Tropical Island",
        size: "6x6",
        points: 32,
        tags: ["Greenery"],
        url: '/regular_decor/ti/ti28.png',
        note: ""
    },
    {
        name: "Durianeer Crow's Nest",
        theme: "Tropical Island",
        size: "6x6",
        points: 32,
        tags: ["Flag"],
        url: '/regular_decor/ti/ti29.png',
        note: ""
    },
    {
        name: "Durianeer Cannonball",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: ["Weapon"],
        url: '/regular_decor/ti/ti30.png',
        note: ""
    },
    {
        name: "Durianeer Cannon",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Weapon"],
        url: '/regular_decor/ti/ti31.png',
        note: ""
    },
    {
        name: "Durianeer Treasure Chest",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ti/ti32.png',
        note: ""
    },
    {
        name: "Durian Totem",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ti/ti33.png',
        note: ""
    },
    {
        name: "Pop-up Skeleton",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ti/ti34.png',
        note: ""
    },
    {
        name: "Sturdy Barrel",
        theme: "Tropical Island",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ti/ti35.png',
        note: ""
    },
    {
        name: "Dinghy Feast",
        theme: "Tropical Island",
        size: "6x6",
        points: 32,
        tags: ["Food", "Cookie Interaction"],
        url: '/regular_decor/ti/ti36.png',
        note: ""
    },
    {
        name: "Silent Palm Tree Prison",
        theme: "Tropical Island",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ti/ti37.png',
        note: ""
    },
    {
        name: "Oh no! It's the Durianeers!",
        theme: "Tropical Island",
        size: "8x8",
        points: 36,
        tags: ["Water", "Flag"],
        url: '/regular_decor/ti/ti38.png',
        note: ""
    },
    {
        name: "Silk and Satin",
        theme: "Tropical Island",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/ti/ti39.png',
        note: "Cookie Decor for Lilac Cookie"
    },
    {
        name: "Mango Canoe",
        theme: "Tropical Island",
        size: "8x8",
        points: 400,
        tags: ["Water", "Cookie Decor", "Cookie Interaction"],
        url: '/regular_decor/ti/ti40.png',
        note: "Cookie Decor for Mango Cookie; a second cookie can also interact"
    },
    {
        name: "Rookie Raft",
        theme: "Tropical Island",
        size: "8x8",
        points: 400,
        tags: ["Water", "Cookie Decor", "Flag"],
        url: '/regular_decor/ti/ti41.png',
        note: "Cookie Decor for Sorbet Shark Cookie"
    },
    {
        name: "Dream of the Tower",
        theme: "Tropical Island",
        size: "16x16",
        points: 1200,
        tags: ["Water", "Cookie Decor"],
        url: '/regular_decor/ti/ti42.png',
        note: "Cookie Decor for Sea Fairy Cookie"
    },
    {
        name: "Skull Island Resort",
        theme: "Tropical Island",
        size: "16x16",
        points: 440,
        tags: ["Landmark", "Water"],
        url: '/regular_decor/ti/ti43.png',
        note: ""
    },
    /*Start of Summer Music Festival*/
    {
        name: "Mini Pie Chair",
        theme: "Summer Music Festival",
        size: "2x2",
        points: 20,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/smf/smf1.png',
        note: ""
    },
    {
        name: "Candy Fence",
        theme: "Summer Music Festival",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/smf/smf2.png',
        note: ""
    },
    {
        name: "Icy Soda Cart",
        theme: "Summer Music Festival",
        size: "4x4",
        points: 30,
        tags: ["Food", "Cart"],
        url: '/regular_decor/smf/smf3.png',
        note: ""
    },
    {
        name: "Paru Paru ☆ Goods Stand",
        theme: "Summer Music Festival",
        size: "4x4",
        points: 30,
        tags: ["Table"],
        url: '/regular_decor/smf/smf4.png',
        note: ""
    },
    {
        name: "Candy Spotlight",
        theme: "Summer Music Festival",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/smf/smf5.png',
        note: ""
    },
    {
        name: "Cherry Cone Mic",
        theme: "Summer Music Festival",
        size: "2x2",
        points: 20,
        tags: ["Music"],
        url: '/regular_decor/smf/smf6.png',
        note: ""
    },
    {
        name: "Sweet Synth",
        theme: "Summer Music Festival",
        size: "4x4",
        points: 30,
        tags: ["Music"],
        url: '/regular_decor/smf/smf7.png',
        note: ""
    },
    {
        name: "Apple Bass",
        theme: "Summer Music Festival",
        size: "2x2",
        points: 20,
        tags: ["Music"],
        url: '/regular_decor/smf/smf8.png',
        note: ""
    },
    {
        name: "Candy Drums",
        theme: "Summer Music Festival",
        size: "4x4",
        points: 30,
        tags: ["Music"],
        url: '/regular_decor/smf/smf9.png',
        note: ""
    },
    {
        name: "Multitopping☆ Street Stage",
        theme: "Summer Music Festival",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor", "Music"],
        url: '/regular_decor/smf/smf10.png',
        note: "Cookie Decor for Parfait Cookie"
    },
    /*Start of Hollyberry Garden Carnival*/
    {
        name: "Heart Tiles",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/hgc/hgc1.png',
        note: ""
    },
    {
        name: "Hollyberry Cookie Statue",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Statue", "Ancient"],
        url: '/regular_decor/hgc/hgc2.png',
        note: ""
    },
    {
        name: "Rose Vine Sofa",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/hgc/hgc3.png',
        note: ""
    },
    {
        name: "Pinkberry Mousse Piano",
        theme: "Hollyberry Garden Carnival",
        size: "6x6",
        points: 32,
        tags: ["Music", "Cookie Interaction"],
        url: '/regular_decor/hgc/hgc4.png',
        note: ""
    },
    {
        name: "Blossoming Invitation",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/hgc/hgc5.png',
        note: ""
    },
    {
        name: "Bustling Picnic Table",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/hgc/hgc6.png',
        note: ""
    },
    {
        name: "Glorious Rose Vase",
        theme: "Hollyberry Garden Carnival",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/hgc/hgc7.png',
        note: ""
    },
    {
        name: "Blueberry Floral Hedge",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/hgc/hgc8.png',
        note: ""
    },
    {
        name: "Pinkberry Floral Hedge",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/hgc/hgc9.png',
        note: ""
    },
    {
        name: "Pinkberry Arbor",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Greenery", "Arch"],
        url: '/regular_decor/hgc/hgc10.png',
        note: ""
    },
    {
        name: "Blueberry Floral Arbor",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Greenery", "Arch"],
        url: '/regular_decor/hgc/hgc11.png',
        note: ""
    },
    {
        name: "Gold Choco Marble Bridge",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/hgc/hgc12.png',
        note: ""
    },
    {
        name: "Milk Choco Marble Railing",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/hgc/hgc13.png',
        note: ""
    },
    {
        name: "Berry Fan Palm",
        theme: "Hollyberry Garden Carnival",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/hgc/hgc14.png',
        note: ""
    },
    {
        name: "Hollyberry Streetlight",
        theme: "Hollyberry Garden Carnival",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/hgc/hgc15.png',
        note: ""
    },
    {
        name: "Berry Palm Tree",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Greenery", "Food"],
        url: '/regular_decor/hgc/hgc16.png',
        note: ""
    },
    {
        name: "Street Artist Set",
        theme: "Hollyberry Garden Carnival",
        size: "6x6",
        points: 32,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/hgc/hgc17.png',
        note: ""
    },
    {
        name: "Berries 'n' Goods",
        theme: "Hollyberry Garden Carnival",
        size: "6x6",
        points: 32,
        tags: ["Shop"],
        url: '/regular_decor/hgc/hgc18.png',
        note: ""
    },
    {
        name: "Candy Cane Candlestick",
        theme: "Hollyberry Garden Carnival",
        size: "2x2",
        points: 20,
        tags: ["Candle"],
        url: '/regular_decor/hgc/hgc19.png',
        note: ""
    },
    {
        name: "Greenish Red Dragon Mascot",
        theme: "Hollyberry Garden Carnival",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/hgc/hgc20.png',
        note: ""
    },
    {
        name: "Berry Boat",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Food", "Water"],
        url: '/regular_decor/hgc/hgc21.png',
        note: ""
    },
    {
        name: "Charming Gondola",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 36,
        tags: ["Water", "Cookie Interaction"],
        url: '/regular_decor/hgc/hgc22.png',
        note: ""
    },
    {
        name: "Raspberries in a Net",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Food", "Water"],
        url: '/regular_decor/hgc/hgc23.png',
        note: ""
    },
    {
        name: "Floating Raspberries",
        theme: "Hollyberry Garden Carnival",
        size: "4x4",
        points: 30,
        tags: ["Food", "Water"],
        url: '/regular_decor/hgc/hgc24.png',
        note: ""
    },
    {
        name: "Berry Tea Party",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 400,
        tags: ["Greenery", "Table", "Cookie Decor"],
        url: '/regular_decor/hgc/hgc25.png',
        note: "Cookie Decor for both Princess Cookie and Raspberry Cookie"
    },
    {
        name: "Hollyberry Pavilion",
        theme: "Hollyberry Garden Carnival",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor", "Ancient"],
        url: '/regular_decor/hgc/hgc26.png',
        note: "Cookie Decor for Hollyberry Cookie"
    },
    {
        name: "Raspberry Chateau",
        theme: "Hollyberry Garden Carnival",
        size: "16x16",
        points: 440,
        tags: ["Landmark", "Building"],
        url: '/regular_decor/hgc/hgc27.png',
        note: ""
    },
    /*Start of Welcome to Green Hill*/
    {
        name: "Eggman Gnome",
        theme: "Welcome to Green Hill",
        size: "2x2",
        points: 20,
        tags: ["Gnome", "Collab"],
        url: '/limited_decor/wgh/wgh1.png',
        note: ""
    },
    {
        name: "Green Hill Matcha Grass",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 0,
        tags: ["Ground", "Collab"],
        url: '/limited_decor/wgh/wgh2.png',
        note: ""
    },
    {
        name: "Chili Dog Bench",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Food", "Collab"],
        url: '/limited_decor/wgh/wgh3.png',
        note: ""
    },
    {
        name: "Giant Ring Portal",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 35,
        tags: ["Collab"],
        url: '/limited_decor/wgh/wgh4.png',
        note: ""
    },
    {
        name: "Sonic & Tails Arcade Machine",
        theme: "Welcome to Green Hill",
        size: "6x6",
        points: 32,
        tags: ["Machine", "Collab"],
        url: '/limited_decor/wgh/wgh5.png',
        note: ""
    },
    {
        name: "Mini-Rings",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Collab"],
        url: '/limited_decor/wgh/wgh6.png',
        note: ""
    },
    {
        name: "Sonic's Treadmill",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Collab"],
        url: '/limited_decor/wgh/wgh7.png',
        note: ""
    },
    {
        name: "Checkered Grass Block",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Wall", "Collab"],
        url: '/limited_decor/wgh/wgh8.png',
        note: ""
    },
    {
        name: "Chili Dog Table",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Collab"],
        url: '/limited_decor/wgh/wgh9.png',
        note: ""
    },
    {
        name: "Green Hill Sunflower",
        theme: "Welcome to Green Hill",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Collab"],
        url: '/limited_decor/wgh/wgh10.png',
        note: ""
    },
    {
        name: "Chili Dog Stand",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 30,
        tags: ["Cart", "Food", "Collab"],
        url: '/limited_decor/wgh/wgh11.png',
        note: ""
    },
    {
        name: "Green Hill Palm Tree",
        theme: "Welcome to Green Hill",
        size: "4x4",
        points: 40,
        tags: ["Greenery", "Collab"],
        url: '/limited_decor/wgh/wgh12.png',
        note: ""
    },
    {
        name: "Sonic Photo Zone",
        theme: "Welcome to Green Hill",
        size: "6x6",
        points: 35,
        tags: ["Collab"],
        url: '/limited_decor/wgh/wgh13.png',
        note: ""
    },
    /*Start of Abundant Harvest Festival*/
    {
        name: "Quaint Paper Lantern",
        theme: "Abundant Harvest Festival",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/ahf/ahf1.png',
        note: ""
    },
    {
        name: "Rice Cake Flowerbed",
        theme: "Abundant Harvest Festival",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ahf/ahf2.png',
        note: ""
    },
    {
        name: "Honey-Glazed Rice Cake Bridge",
        theme: "Abundant Harvest Festival",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/ahf/ahf3.png',
        note: ""
    },
    {
        name: "Colorful Okchun Tea Set",
        theme: "Abundant Harvest Festival",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/ahf/ahf4.png',
        note: ""
    },
    {
        name: "Sikhye Well",
        theme: "Abundant Harvest Festival",
        size: "6x6",
        points: 32,
        tags: ["Food"],
        url: '/regular_decor/ahf/ahf5.png',
        note: ""
    },
    {
        name: "Rice Cake Yutnori Board",
        theme: "Abundant Harvest Festival",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ahf/ahf6.png',
        note: ""
    },
    {
        name: "Autumn Glow Gazebo",
        theme: "Abundant Harvest Festival",
        size: "8x8",
        points: 36,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/ahf/ahf7.png',
        note: ""
    },
    {
        name: "Rice Cake Basket",
        theme: "Abundant Harvest Festival",
        size: "6x6",
        points: 32,
        tags: ["Food", "Cookie Interaction"],
        url: '/regular_decor/ahf/ahf8.png',
        note: ""
    },
    {
        name: "Moon Mortar Picnic",
        theme: "Abundant Harvest Festival",
        size: "8x8",
        points: 400,
        tags: ["Food", "Cookie Decor"],
        url: '/regular_decor/ahf/ahf9.png',
        note: "Cookie Decor for Moon Rabbit Cookie"
    },
    /*Start of Mala Tribe's Turf*/
    {
        name: "Volcanic Brownic Tiles",
        theme: "Mala Tribe's Turf",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/mtt/mtt1.png',
        note: ""
    },
    {
        name: "Volcanic Succulent",
        theme: "Mala Tribe's Turf",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/mtt/mtt2.png',
        note: ""
    },
    {
        name: "Legendary Dragon Lamp",
        theme: "Mala Tribe's Turf",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/mtt/mtt3.png',
        note: ""
    },
    {
        name: "Canele Lava Vent",
        theme: "Mala Tribe's Turf",
        size: "2x2",
        points: 20,
        tags: ["Food"],
        url: '/regular_decor/mtt/mtt4.png',
        note: ""
    },
    {
        name: "Minecart's Final Step",
        theme: "Mala Tribe's Turf",
        size: "6x6",
        points: 32,
        tags: ["Cart"],
        url: '/regular_decor/mtt/mtt5.png',
        note: ""
    },
    {
        name: "Mala Tribe Brazier",
        theme: "Mala Tribe's Turf",
        size: "2x2",
        points: 20,
        tags: ["Fire"],
        url: '/regular_decor/mtt/mtt6.png',
        note: ""
    },
    {
        name: "Hot Pot Cauldron",
        theme: "Mala Tribe's Turf",
        size: "6x6",
        points: 32,
        tags: ["Food"],
        url: '/regular_decor/mtt/mtt7.png',
        note: ""
    },
    {
        name: "Barbecue Signpost",
        theme: "Mala Tribe's Turf",
        size: "2x2",
        points: 20,
        tags: ["Food"],
        url: '/regular_decor/mtt/mtt8.png',
        note: ""
    },
    {
        name: "Hot & Spicy Arsenal",
        theme: "Mala Tribe's Turf",
        size: "6x6",
        points: 32,
        tags: ["Weapon"],
        url: '/regular_decor/mtt/mtt9.png',
        note: ""
    },
    {
        name: "Hellfire Mala Pond",
        theme: "Mala Tribe's Turf",
        size: "6x6",
        points: 32,
        tags: [],
        url: '/regular_decor/mtt/mtt10.png',
        note: ""
    },
    {
        name: "Boiling Lava Bridge",
        theme: "Mala Tribe's Turf",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/mtt/mtt11.png',
        note: ""
    },
    {
        name: "Dice Game Table",
        theme: "Mala Tribe's Turf",
        size: "6x6",
        points: 32,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/mtt/mtt12.png',
        note: ""
    },
    {
        name: "Chieftain's Tent",
        theme: "Mala Tribe's Turf",
        size: "8x8",
        points: 400,
        tags: ["Tent", "Cookie Decor", "Cookie Interaction"],
        url: '/regular_decor/mtt/mtt13.png',
        note: "Cookie Decor for Mala Sauce Cookie; a second cookie can also interact"
    },
    /*Start of Sweet & Creepy*/
    {
        name: "Creepy Red Tiles",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/sc/sc1.png',
        note: ""
    },
    {
        name: "Old Stone Tiles",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/sc/sc2.png',
        note: ""
    },
    {
        name: "Gothic Fence",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/sc/sc3.png',
        note: ""
    },
    {
        name: "Halloween Treat Table",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food"],
        url: '/regular_decor/sc/sc4.png',
        note: ""
    },
    {
        name: "Fallen Chandelier",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/sc/sc5.png',
        note: ""
    },
    {
        name: "Almost New Onion Rabbit Toy",
        theme: "Sweet & Creepy",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/sc/sc6.png',
        note: ""
    },
    {
        name: "Pumpkin Lantern Pie",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/sc/sc7.png',
        note: ""
    },
    {
        name: "Oddly Familiar Scarecrow",
        theme: "Sweet & Creepy",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/sc/sc8.png',
        note: ""
    },
    {
        name: "Old Sugar Tombstone",
        theme: "Sweet & Creepy",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/sc/sc9.png',
        note: ""
    },
    {
        name: "Readings with Ms. BearJelly",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/sc/sc10.png',
        note: ""
    },
    {
        name: "Pumpkin Tree",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/sc/sc11.png',
        note: ""
    },
    {
        name: "Rendezvous with Mr. BearJelly",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/sc/sc12.png',
        note: ""
    },
    {
        name: "Ghost Tree",
        theme: "Sweet & Creepy",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/sc/sc13.png',
        note: ""
    },
    {
        name: "Spooky Old Cinema",
        theme: "Sweet & Creepy",
        size: "8x8",
        points: 80,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/sc/sc14.png',
        note: ""
    },
    {
        name: "Pumpkin Parasol Party",
        theme: "Sweet & Creepy",
        size: "6x6",
        points: 400,
        tags: ["Table", "Food", "Cookie Decor"],
        url: '/regular_decor/sc/sc15.png',
        note: "Cookie Decor for Pumpkin Pie Cookie"
    },
    /*Start of Kingdom's First Jellymart*/
    {
        name: "Too Big Shopping Cart",
        theme: "Kingdom's First Jellymart",
        size: "4x4",
        points: 34,
        tags: ["Cart", "Food"],
        url: '/limited_decor/kfj/kfj1.png',
        note: ""
    },
    {
        name: "Long Shopping List",
        theme: "Kingdom's First Jellymart",
        size: "2x2",
        points: 28,
        tags: [],
        url: '/limited_decor/kfj/kfj2.png',
        note: ""
    },
    {
        name: "Jam Shelf",
        theme: "Kingdom's First Jellymart",
        size: "4x4",
        points: 34,
        tags: ["Food"],
        url: '/limited_decor/kfj/kfj3.png',
        note: ""
    },
    {
        name: "Baked Goods Aisle",
        theme: "Kingdom's First Jellymart",
        size: "4x4",
        points: 34,
        tags: ["Food", "Table"],
        url: '/limited_decor/kfj/kfj4.png',
        note: ""
    },
    {
        name: "Cereal Shelf",
        theme: "Kingdom's First Jellymart",
        size: "4x4",
        points: 34,
        tags: ["Food"],
        url: '/limited_decor/kfj/kfj5.png',
        note: ""
    },
    {
        name: "Ice Cream Fridge",
        theme: "Kingdom's First Jellymart",
        size: "2x2",
        points: 28,
        tags: ["Food"],
        url: '/limited_decor/kfj/kfj6.png',
        note: ""
    },
    {
        name: "World's Kindest Cashier",
        theme: "Kingdom's First Jellymart",
        size: "6x6",
        points: 70,
        tags: [],
        url: '/limited_decor/kfj/kfj7.png',
        note: ""
    },
    {
        name: "Fulfilling Shopping Cart",
        theme: "Kingdom's First Jellymart",
        size: "4x4",
        points: 35,
        tags: ["Cart", "Food", "Collab"],
        url: '/limited_decor/kfj/kfj8.png',
        note: "Collaboration with e-mart; only available with membership on the e-mart app"
    },
    /*Start of Cozy Snowfall Village*/
    {
        name: "Cream Cotton Alpaca",
        theme: "Cozy Snowfall Village",
        size: "4x4",
        points: 30,
        tags: ["Animal"],
        url: '/regular_decor/csv/csv1.png',
        note: ""
    },
    {
        name: "Fresh Snow Angel",
        theme: "Cozy Snowfall Village",
        size: "6x6",
        points: 32,
        tags: [],
        url: '/regular_decor/csv/csv2.png',
        note: ""
    },
    {
        name: "Cream Cotton Sheep",
        theme: "Cozy Snowfall Village",
        size: "2x2",
        points: 20,
        tags: ["Animal"],
        url: '/regular_decor/csv/csv3.png',
        note: ""
    },
    {
        name: "Glacial Thorns",
        theme: "Cozy Snowfall Village",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/csv/csv4.png',
        note: ""
    },
    {
        name: "Cotton Puff Tree",
        theme: "Cozy Snowfall Village",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/csv/csv5.png',
        note: ""
    },
    {
        name: "Frosted Snow Bridge",
        theme: "Cozy Snowfall Village",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/csv/csv6.png',
        note: ""
    },
    {
        name: "Frozen Birch Tree",
        theme: "Cozy Snowfall Village",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/csv/csv7.png',
        note: ""
    },
    {
        name: "Snowy Lantern",
        theme: "Cozy Snowfall Village",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/csv/csv8.png',
        note: ""
    },
    {
        name: "Sugar Glace Berry",
        theme: "Cozy Snowfall Village",
        size: "2x2",
        points: 20,
        tags: ["Greenery", "Food"],
        url: '/regular_decor/csv/csv9.png',
        note: ""
    },
    {
        name: "Icicle Arch",
        theme: "Cozy Snowfall Village",
        size: "8x8",
        points: 36,
        tags: ["Arch"],
        url: '/regular_decor/csv/csv10.png',
        note: ""
    },
    {
        name: "Candy Cane Sledge",
        theme: "Cozy Snowfall Village",
        size: "4x4",
        points: 35,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/csv/csv11.png',
        note: ""
    },
    {
        name: "Cozy Cotton Rug",
        theme: "Cozy Snowfall Village",
        size: "6x6",
        points: 38,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/csv/csv12.png',
        note: ""
    },
    {
        name: "Ice Fishing Spot",
        theme: "Cozy Snowfall Village",
        size: "8x8",
        points: 40,
        tags: ["Food", "Cookie Interaction"],
        url: '/regular_decor/csv/csv13.png',
        note: ""
    },
    {
        name: "Snow Blossom Hill",
        theme: "Cozy Snowfall Village",
        size: "8x8",
        points: 400,
        tags: ["Animal", "Cookie Decor"],
        url: '/regular_decor/csv/csv14.png',
        note: "Cookie Decor for Cotton Cookie"
    },
    {
        name: "Timeless Throne of Ice",
        theme: "Cozy Snowfall Village",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/csv/csv15.png',
        note: "Cookie Decor for Frost Queen Cookie"
    },
    /*Start of Jolly Year-End Festivities*/
    {
        name: "Delivery Gnome",
        theme: "Jolly Year-End Festivities",
        size: "2x2",
        points: 20,
        tags: ["Gnome"],
        url: '/regular_decor/jyf/jyf1.png',
        note: ""
    },
    {
        name: "Fruit Bread Wall",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: ["Wall"],
        url: '/regular_decor/jyf/jyf2.png',
        note: ""
    },
    {
        name: "Hot Cocoa Vending Machine",
        theme: "Jolly Year-End Festivities",
        size: "2x2",
        points: 20,
        tags: ["Machine", "Food"],
        url: '/regular_decor/jyf/jyf3.png',
        note: ""
    },
    {
        name: "Candle of Wishes",
        theme: "Jolly Year-End Festivities",
        size: "2x2",
        points: 20,
        tags: ["Candle"],
        url: '/regular_decor/jyf/jyf4.png',
        note: ""
    },
    {
        name: "Mint Cocoa Vending Machine",
        theme: "Jolly Year-End Festivities",
        size: "2x2",
        points: 20,
        tags: ["Machine", "Food"],
        url: '/regular_decor/jyf/jyf5.png',
        note: ""
    },
    {
        name: "Hot Choco Fountain",
        theme: "Jolly Year-End Festivities",
        size: "8x8",
        points: 36,
        tags: ["Food", "Fountain"],
        url: '/regular_decor/jyf/jyf6.png',
        note: ""
    },
    {
        name: "Season's Greetings Photo Wall",
        theme: "Jolly Year-End Festivities",
        size: "6x6",
        points: 38,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/jyf/jyf7.png',
        note: ""
    },
    {
        name: "Holly Cupcake Stand",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: ["Cart", "Food"],
        url: '/regular_decor/jyf/jyf8.png',
        note: ""
    },
    {
        name: "Jingling Churros Arbor",
        theme: "Jolly Year-End Festivities",
        size: "8x8",
        points: 36,
        tags: ["Arch", "Greenery"],
        url: '/regular_decor/jyf/jyf9.png',
        note: ""
    },
    {
        name: "Holly Streetlight",
        theme: "Jolly Year-End Festivities",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/jyf/jyf10.png',
        note: ""
    },
    {
        name: "Twinkling Snowy Tree",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/jyf/jyf11.png',
        note: ""
    },
    {
        name: "Candy Cane Bench",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 25,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/jyf/jyf12.png',
        note: ""
    },
    {
        name: "Velvet Sleigh of Presents",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 35,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/jyf/jyf13.png',
        note: ""
    },
    {
        name: "Holiday Candy Table",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/jyf/jyf14.png',
        note: ""
    },
    {
        name: "Pile of Presents",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/jyf/jyf15.png',
        note: ""
    },
    {
        name: "Holly Biscuit Reindeer",
        theme: "Jolly Year-End Festivities",
        size: "4x4",
        points: 30,
        tags: ["Animal"],
        url: '/regular_decor/jyf/jyf16.png',
        note: ""
    },
    {
        name: "Snowflakes & Cocoa Cafe",
        theme: "Jolly Year-End Festivities",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor", "Cookie Interaction"],
        url: '/regular_decor/jyf/jyf17.png',
        note: "Cookie Decor for Cocoa Cookie; a second cookie can also interact"
    },
    /*Start of Kingdom of the Unwavering*/
    {
        name: "Simple Stone Tiles",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ku/ku1.png',
        note: ""
    },
    {
        name: "Ornate Citadel Tiles",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/ku/ku2.png',
        note: ""
    },
    {
        name: "Licorice Sea Waterway",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/ku/ku3.png',
        note: ""
    },
    {
        name: "Citadel Banner",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Banner"],
        url: '/regular_decor/ku/ku4.png',
        note: ""
    },
    {
        name: "Underworld General Idol",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Statue"],
        url: '/regular_decor/ku/ku5.png',
        note: ""
    },
    {
        name: "Modest Table Platform",
        theme: "Kingdom of the Unwavering",
        size: "6x6",
        points: 32,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/ku/ku6.png',
        note: ""
    },
    {
        name: "Sky General Idol",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Statue"],
        url: '/regular_decor/ku/ku7.png',
        note: ""
    },
    {
        name: "Star Jelly Flower",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/ku/ku8.png',
        note: ""
    },
    {
        name: "Cacao Pagoda",
        theme: "Kingdom of the Unwavering",
        size: "6x6",
        points: 38,
        tags: [],
        url: '/regular_decor/ku/ku9.png',
        note: ""
    },
    {
        name: "Choco Bamboo",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ku/ku10.png',
        note: ""
    },
    {
        name: "Bridge of Harmony",
        theme: "Kingdom of the Unwavering",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/ku/ku11.png',
        note: ""
    },
    {
        name: "Choco Cone Spruce",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/ku/ku12.png',
        note: ""
    },
    {
        name: "Cacao Tile Wall",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Wall"],
        url: '/regular_decor/ku/ku13.png',
        note: ""
    },
    {
        name: "Cacao Tile Gate",
        theme: "Kingdom of the Unwavering",
        size: "8x8",
        points: 40,
        tags: ["Gate"],
        url: '/regular_decor/ku/ku14.png',
        note: ""
    },
    {
        name: "Dragon Roar Buk Drum",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Music"],
        url: '/regular_decor/ku/ku15.png',
        note: ""
    },
    {
        name: "Folding Screen with a Landscape Painting",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ku/ku16.png',
        note: ""
    },
    {
        name: "Purple Stone Lantern",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/ku/ku17.png',
        note: ""
    },
    {
        name: "Dark Cacao Bench",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/ku/ku18.png',
        note: ""
    },
    {
        name: "Purple Brazier",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Fire"],
        url: '/regular_decor/ku/ku19.png',
        note: ""
    },
    {
        name: "Royal Feast Table",
        theme: "Kingdom of the Unwavering",
        size: "6x6",
        points: 38,
        tags: ["Table", "Food"],
        url: '/regular_decor/ku/ku20.png',
        note: ""
    },
    {
        name: "Cacao & Cream Cannon",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Weapon"],
        url: '/regular_decor/ku/ku21.png',
        note: ""
    },
    {
        name: "Licorice Jelly Dummy",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: [],
        url: '/regular_decor/ku/ku22.png',
        note: ""
    },
    {
        name: "Kingdom Defender's Weapon Rack",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Weapon"],
        url: '/regular_decor/ku/ku23.png',
        note: ""
    },
    {
        name: "Heroic Founder's Statue",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Statue", "Ancient"],
        url: '/regular_decor/ku/ku24.png',
        note: ""
    },
    {
        name: "Licorice Oozeling",
        theme: "Kingdom of the Unwavering",
        size: "6x6",
        points: 32,
        tags: ["Water"],
        url: '/regular_decor/ku/ku25.png',
        note: ""
    },
    {
        name: "Statue of a Vow",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: ["Statue"],
        url: '/regular_decor/ku/ku26.png',
        note: ""
    },
    {
        name: "Rice Cake Hound Kennel",
        theme: "Kingdom of the Unwavering",
        size: "2x2",
        points: 20,
        tags: ["Cake Hound"],
        url: '/regular_decor/ku/ku27.png',
        note: ""
    },
    {
        name: "Practice Target",
        theme: "Kingdom of the Unwavering",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/ku/ku28.png',
        note: ""
    },
    {
        name: "Dark Cacao Stove",
        theme: "Kingdom of the Unwavering",
        size: "6x6",
        points: 32,
        tags: [],
        url: '/regular_decor/ku/ku29.png',
        note: ""
    },
    {
        name: "Caramel Watchtower",
        theme: "Kingdom of the Unwavering",
        size: "8x8",
        points: 400,
        tags: ["Tower", "Cookie Decor"],
        url: '/regular_decor/ku/ku30.png',
        note: "Cookie Decor for Caramel Arrow Cookie"
    },
    {
        name: "Altar of Bittersweet Rituals",
        theme: "Kingdom of the Unwavering",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/ku/ku31.png',
        note: "Cookie Decor for Affogato Cookie"
    },
    {
        name: "Shelter of Solitude",
        theme: "Kingdom of the Unwavering",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor", "Ancient"],
        url: '/regular_decor/ku/ku32.png',
        note: "Cookie Decor for Dark Cacao Cookie"
    },
    {
        name: "Chocolate Altar of the Fallen",
        theme: "Kingdom of the Unwavering",
        size: "16x16",
        points: 500,
        tags: ["Landmark", "Cookie Interaction"],
        url: '/regular_decor/ku/ku33.png',
        note: ""
    },
    /*Start of Springtime Blossom Picnic Party*/
    {
        name: "Creamy Pink Wafer Fence",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 25,
        tags: ["Fence"],
        url: '/limited_decor/sbpp/sbpp1.png',
        note: ""
    },
    {
        name: "Pink Blossom Streetlight",
        theme: "Springtime Blossom Picnic Party",
        size: "2x2",
        points: 25,
        tags: ["Lamp"],
        url: '/limited_decor/sbpp/sbpp2.png',
        note: ""
    },
    {
        name: "Golden Bell Hedge",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 25,
        tags: ["Greenery"],
        url: '/limited_decor/sbpp/sbpp3.png',
        note: ""
    },
    {
        name: "Pink Icing Radio",
        theme: "Springtime Blossom Picnic Party",
        size: "2x2",
        points: 30,
        tags: [],
        url: '/limited_decor/sbpp/sbpp4.png',
        note: ""
    },
    {
        name: "Pleasant Picnic Basket",
        theme: "Springtime Blossom Picnic Party",
        size: "2x2",
        points: 30,
        tags: [],
        url: '/limited_decor/sbpp/sbpp5.png',
        note: ""
    },
    {
        name: "Blooming Cherry Blossom Tree",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/limited_decor/sbpp/sbpp6.png',
        note: ""
    },
    {
        name: "Budding Flower Bike",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 45,
        tags: [],
        url: '/limited_decor/sbpp/sbpp7.png',
        note: ""
    },
    {
        name: "Spring Picnic Cart",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 45,
        tags: ["Cart"],
        url: '/limited_decor/sbpp/sbpp8.png',
        note: ""
    },
    {
        name: "Pink Macaron Table Set",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 50,
        tags: ["Table", "Cookie Interaction"],
        url: '/limited_decor/sbpp/sbpp9.png',
        note: ""
    },
    {
        name: "Dandelion Trailer",
        theme: "Springtime Blossom Picnic Party",
        size: "6x6",
        points: 50,
        tags: [],
        url: '/limited_decor/sbpp/sbpp10.png',
        note: ""
    },
    {
        name: "Springtime Picnic Mat",
        theme: "Springtime Blossom Picnic Party",
        size: "4x4",
        points: 50,
        tags: ["Cookie Interaction"],
        url: '/limited_decor/sbpp/sbpp11.png',
        note: ""
    },
    {
        name: "Spring Bouquet Truck",
        theme: "Springtime Blossom Picnic Party",
        size: "6x6",
        points: 60,
        tags: [],
        url: '/limited_decor/sbpp/sbpp12.png',
        note: ""
    },
    /*Start of First Steps Towards Peace*/
    {
        name: "Crow's Nest Table",
        theme: "First Steps Towards Peace",
        size: "4x4",
        points: 30,
        tags: ["Table", "Cookie Interaction"],
        url: '/regular_decor/fstp/fstp1.png',
        note: ""
    },
    {
        name: "Crow's Nest Sign",
        theme: "First Steps Towards Peace",
        size: "4x4",
        points: 30,
        tags: ["Lamp"],
        url: '/regular_decor/fstp/fstp2.png',
        note: ""
    },
    {
        name: "Vanilla Cone Tree",
        theme: "First Steps Towards Peace",
        size: "4x4",
        points: 30,
        tags: ["Greenery"],
        url: '/regular_decor/fstp/fstp3.png',
        note: ""
    },
    {
        name: "Crow's Nest Inn",
        theme: "First Steps Towards Peace",
        size: "6x6",
        points: 38,
        tags: ["Food", "Cookie Interaction"],
        url: '/regular_decor/fstp/fstp4.png',
        note: ""
    },
    {
        name: "Magic Academy Combo Desk",
        theme: "First Steps Towards Peace",
        size: "4x4",
        points: 35,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/fstp/fstp5.png',
        note: ""
    },
    {
        name: "Banner of Eternal Unity",
        theme: "First Steps Towards Peace",
        size: "2x2",
        points: 20,
        tags: ["Banner"],
        url: '/regular_decor/fstp/fstp6.png',
        note: ""
    },
    {
        name: "Magic Academy Chalkboard",
        theme: "First Steps Towards Peace",
        size: "6x6",
        points: 32,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/fstp/fstp7.png',
        note: ""
    },
    {
        name: "Vanilla Orchid Garland Fence",
        theme: "First Steps Towards Peace",
        size: "4x4",
        points: 30,
        tags: ["Fence"],
        url: '/regular_decor/fstp/fstp8.png',
        note: ""
    },
    {
        name: "Dark Cacao Tent",
        theme: "First Steps Towards Peace",
        size: "6x6",
        points: 38,
        tags: ["Tent"],
        url: '/regular_decor/fstp/fstp9.png',
        note: ""
    },
    {
        name: "Council Banquet Table",
        theme: "First Steps Towards Peace",
        size: "6x6",
        points: 38,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/fstp/fstp10.png',
        note: ""
    },
    {
        name: "Snowfield Choco Chip Cairn",
        theme: "First Steps Towards Peace",
        size: "8x8",
        points: 300,
        tags: ["Banner", "Cookie Decor"],
        url: '/regular_decor/fstp/fstp11.png',
        note: "Cookie Decor for Crunchy Chip Cookie"
    },
    {
        name: "Quiet Garden Corner",
        theme: "First Steps Towards Peace",
        size: "8x8",
        points: 400,
        tags: ["Greenery", "Cookie Decor"],
        url: '/regular_decor/fstp/fstp12.png',
        note: "Cookie Decor for Wildberry Cookie"
    },
    /*Start of The Republic's Azure Streets*/
    {
        name: "Seashell Tile",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 0,
        tags: ["Ground"],
        url: '/regular_decor/tras/tras1.png',
        note: ""
    },
    {
        name: "Dome of the Light",
        theme: "The Republic's Azure Streets",
        size: "8x8",
        points: 40,
        tags: [],
        url: '/regular_decor/tras/tras2.png',
        note: ""
    },
    {
        name: "Luxurious Shell Parasol",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/tras/tras3.png',
        note: ""
    },
    {
        name: "Seaside Dining Table",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 35,
        tags: ["Table", "Food", "Cookie Interaction"],
        url: '/regular_decor/tras/tras4.png',
        note: ""
    },
    {
        name: "Conch Shell Street Lamp",
        theme: "The Republic's Azure Streets",
        size: "2x2",
        points: 20,
        tags: ["Lamp"],
        url: '/regular_decor/tras/tras5.png',
        note: ""
    },
    {
        name: "Jelly Cube Bougainvillea",
        theme: "The Republic's Azure Streets",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/tras/tras6.png',
        note: ""
    },
    {
        name: "Sandshell Bench",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 30,
        tags: ["Bench", "Cookie Interaction"],
        url: '/regular_decor/tras/tras7.png',
        note: ""
    },
    {
        name: "Gold Azure Banners",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 30,
        tags: ["Banner"],
        url: '/regular_decor/tras/tras8.png',
        note: ""
    },
    {
        name: "Creme Seashell Bridge",
        theme: "The Republic's Azure Streets",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water"],
        url: '/regular_decor/tras/tras9.png',
        note: ""
    },
    {
        name: "Republic Daily Stand",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 35,
        tags: [],
        url: '/regular_decor/tras/tras10.png',
        note: ""
    },
    {
        name: "Seashell Fence",
        theme: "The Republic's Azure Streets",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/tras/tras11.png',
        note: ""
    },
    {
        name: "Olive Skewer Tree",
        theme: "The Republic's Azure Streets",
        size: "2x2",
        points: 20,
        tags: ["Greenery"],
        url: '/regular_decor/tras/tras12.png',
        note: ""
    },
    {
        name: "Azure Ocean Arch",
        theme: "The Republic's Azure Streets",
        size: "8x8",
        points: 36,
        tags: ["Arch"],
        url: '/regular_decor/tras/tras13.png',
        note: ""
    },
    {
        name: "Ivory Pearl Fountain",
        theme: "The Republic's Azure Streets",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor", "Fountain"],
        url: '/regular_decor/tras/tras14.png',
        note: "Cookie Decor for Oyster Cookie"
    },
    {
        name: "Paladin's Altar",
        theme: "The Republic's Azure Streets",
        size: "8x8",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/tras/tras15.png',
        note: "Cookie Decor for Financier Cookie"
    },
    {
        name: "Waterfall of Contemplation",
        theme: "The Republic's Azure Streets",
        size: "12x12",
        points: 400,
        tags: ["Cookie Decor"],
        url: '/regular_decor/tras/tras16.png',
        note: "Cookie Decor for Clotted Cream Cookie"
    },
    /*Start of other*/
    {
        name: "Bear-o'-lantern",
        theme: "Other",
        size: "8x8",
        points: 9,
        tags: [],
        url: '/limited_decor/other/o1.png',
        note: "Rewarded for Trick or Treat! Bear-O'-Lantern event"
    },
    {
        name: "Bonus Time Bench",
        theme: "Ovenbreak",
        size: "12x12",
        points: 1,
        tags: ["Collab", "Bench"],
        url: '/limited_decor/other/o2.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Brick Oven Wall",
        theme: "Ovenbreak",
        size: "8x8",
        points: 1,
        tags: ["Collab", "Wall"],
        url: '/limited_decor/other/o3.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Cake Baked from the Heart",
        theme: "Other",
        size: "12x12",
        points: 400,
        tags: ["Food"],
        url: '/limited_decor/other/o4.png',
        note: "Given during Bake the Holiday Cake event"
    },
    {
        name: "Cookievorous Pet Plant",
        theme: "Other",
        size: "2x2",
        points: 1,
        tags: ["Cookie Interaction", "Greenery"],
        url: '/limited_decor/other/o5.png',
        note: "Given in the cookie story Herb Cookie's New Plant"
    },
    {
        name: "Dried Mandragonion",
        theme: "Ovenbreak",
        size: "2x2",
        points: 1,
        tags: ["Collab"],
        url: '/limited_decor/other/o6.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Explorer's Hot Air Balloon",
        theme: "Other",
        size: "12x12",
        points: 1,
        tags: ["Collab"],
        url: '/limited_decor/other/o7.png',
        note: "Available from Google Play store for 500 Google Play Points"
    },
    {
        name: "Farseeing Longan Eyes",
        theme: "Ovenbreak",
        size: "4x4",
        points: 30,
        tags: ["Collab"],
        url: '/limited_decor/other/o8.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Magic Scroll of Golden Tart",
        theme: "Ovenbreak",
        size: "2x2",
        points: 20,
        tags: ["Collab"],
        url: '/limited_decor/other/o9.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Seal Scroll of Triangular Tart",
        theme: "Ovenbreak",
        size: "2x2",
        points: 20,
        tags: ["Collab"],
        url: '/limited_decor/other/o10.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Golden Throne of Ancient Legends",
        theme: "Ovenbreak",
        size: "8x8",
        points: 40,
        tags: ["Collab", "Cookie Interaction"],
        url: '/limited_decor/other/o11.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Good Boy Cream Wolf",
        theme: "Other",
        size: "4x4",
        points: 300,
        tags: ["Animal"],
        url: '/limited_decor/other/o12.png',
        note: "Limited time shop exclusive"
    },
    {
        name: "Jelly Conga",
        theme: "Ovenbreak",
        size: "4x4",
        points: 1,
        tags: ["Collab"],
        url: '/limited_decor/other/o13.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "New Sugar Gnome",
        theme: "Other",
        size: "2x2",
        points: 1,
        tags: ["Gnome"],
        url: '/limited_decor/other/o14.png',
        note: "Given with coupon codes"
    },
    {
        name: "Olive Tacks",
        theme: "Ovenbreak",
        size: "4x4",
        points: 1,
        tags: ["Collab"],
        url: '/limited_decor/other/o15.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Rice Cake Stand",
        theme: "Other",
        size: "8x8",
        points: 9,
        tags: ["Shop"],
        url: '/limited_decor/other/o16.png',
        note: "Given during Honey Rice Cakes event"
    },
    {
        name: "Sausage on a Fork",
        theme: "Ovenbreak",
        size: "2x2",
        points: 1,
        tags: ["Collab", "Food"],
        url: '/limited_decor/other/o17.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Strange Vials",
        theme: "Ovenbreak",
        size: "4x4",
        points: 1,
        tags: ["Collab"],
        url: '/limited_decor/other/o18.png',
        note: "Given during cross-promotion event with Cookie Run: Ovenbreak"
    },
    {
        name: "Sweet Honey Jar",
        theme: "Other",
        size: "8x8",
        points: 1,
        tags: ["Food"],
        url: '/limited_decor/other/o19.png',
        note: "Given during Honey Sweet Honey event"
    },
    {
        name: "Magic Music Box Castle",
        theme: "Other",
        size: "12x12",
        points: 1,
        tags: ["Landmark"],
        url: '/limited_decor/other/o20.png',
        note: "Given during Pre-Registration Event or from purchasing the Art Book Package"
    },
    {
        name: "Pink Valentine Box",
        theme: "Other",
        size: "8x8",
        points: 40,
        tags: ["Cookie Interaction"],
        url: '/limited_decor/other/o21.png',
        note: "Limited time shop exclusive; up to two cookies can interact at once"
    },
    {
        name: "The Stylish Brothers",
        theme: "Other",
        size: "4x4",
        points: 1,
        tags: ["Statue", "Collab"],
        url: '/limited_decor/other/o22.png',
        note: "Collaboration with Ebbets/Musinsa; given with purchase of Ebbets clothes"
    },
    {
        name: "Dreamy Picnic with Vinyls",
        theme: "Other",
        size: "4x4",
        points: 30,
        tags: ["Gnome"],
        url: '/limited_decor/other/o23.png',
        note: "Given with CRK 1st Anniversary OST Bundle"
    },
    {
        name: "Star Jelly Tree of Hopes and Dreams",
        theme: "Other",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery"],
        url: '/limited_decor/other/o24.png',
        note: "Limited time shop exclusive"
    },
    /*Start of Arena*/
    {
        name: "Greenish Red Dragon Statue",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Statue"],
        url: '/limited_decor/arena/a1.png',
        note: "reach Master in Brave Season 1"
    },
    {
        name: "Legendary Black Knight",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Statue"],
        url: '/limited_decor/arena/a2.png',
        note: "reach Master in Brave Season 2"
    },
    {
        name: "Crimson Dessert Party",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Food", "Table", "Cookie Interaction"],
        url: '/limited_decor/arena/a3.png',
        note: "reach Master in Brave Season 3"
    },
    {
        name: "Eternal Candy Jail",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Cookie Interaction"],
        url: '/limited_decor/arena/a4.png',
        note: "reach Master in Pure Vanilla Season 1"
    },
    {
        name: "Angelic Clarion Quartet",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: [],
        url: '/limited_decor/arena/a5.png',
        note: "reach Master in Pure Vanilla Season 2"
    },
    {
        name: "Watchful Vanilla Orchid",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Statue", "Ancient"],
        url: '/limited_decor/arena/a6.png',
        note: "reach Master in Pure Vanilla Season 3"
    },
    {
        name: "Chest of the Depths",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Water"],
        url: '/limited_decor/arena/a7.png',
        note: "reach Master in Sea Fairy Season 1"
    },
    {
        name: "Robust Bear Jelly Statue",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Water", "Statue"],
        url: '/limited_decor/arena/a8.png',
        note: "reach Master in Sea Fairy Season 2"
    },
    {
        name: "Tidal Equestrian Statue",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Water", "Statue"],
        url: '/limited_decor/arena/a9.png',
        note: "reach Master in Sea Fairy Season 3"
    },
    {
        name: "Shield of the Kingdom",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Statue", "Ancient"],
        url: '/limited_decor/arena/a10.png',
        note: "reach Master in Hollyberry Season 1"
    },
    {
        name: "Goblet of the Noble Oath",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Fountain"],
        url: '/limited_decor/arena/a11.png',
        note: "reach Master in Hollyberry Season 2"
    },
    {
        name: "Huntress's Wintering Hut",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Cookie Interaction", "Ancient", "Weapon"],
        url: '/limited_decor/arena/a12.png',
        note: "reach Master in Hollyberry Season 3"
    },
    {
        name: "Blizzard Howler",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Statue", "Cake Hound"],
        url: '/limited_decor/arena/a13.png',
        note: "reach Master in Frost Queen Season 1"
    },
    {
        name: "Ice Cream Catapult",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Food", "Weapon"],
        url: '/limited_decor/arena/a14.png',
        note: "reach Master in Frost Queen Season 2"
    },
    {
        name: "Reflection of the Frost Guardian",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Statue"],
        url: '/limited_decor/arena/a15.png',
        note: "reach Master in Frost Queen Season 3"
    },
    {
        name: "Bell of the Twin Dragons",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Ancient", "Music"],
        url: '/limited_decor/arena/a16.png',
        note: "reach Master in Dark Cacao Season 1"
    },
    {
        name: "Twin Dragon Memorial Statue",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Ancient", "Statue"],
        url: '/limited_decor/arena/a17.png',
        note: "reach Master in Dark Cacao Season 2"
    },
    {
        name: "Portrait of the Resolute King",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Ancient"],
        url: '/limited_decor/arena/a18.png',
        note: "reach Master in Dark Cacao Season 3"
    },
    {
        name: "Slumbering Paladin's Sanctuary",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Water", "Statue"],
        url: '/limited_decor/arena/a19.png',
        note: "reach Master in Radiant Heroes Season 1"
    },
    {
        name: "Warrior-Goddess of the Ocean",
        theme: "Arena",
        size: "8x8",
        points: 33,
        tags: ["Water", "Statue"],
        url: '/limited_decor/arena/a20.png',
        note: "reach Master in Radiant Heroes Season 2"
    },
    {
        name: "Dawnstrider's Guide",
        theme: "Arena",
        size: "6x6",
        points: 33,
        tags: ["Water", "Statue"],
        url: '/limited_decor/arena/a21.png',
        note: "reach Master in Radiant Heroes Season 3"
    },
    /*Start of Kingdom Pass*/
    {
        name: "Every Cookie's Garden House",
        theme: "Kingdom Pass",
        size: "16x16",
        points: 50,
        tags: ["Landmark", "Building"],
        url: '/limited_decor/kp/kp1.png',
        note: "Brave Season 1"
    },
    {
        name: "Angel's Fountain",
        theme: "Kingdom Pass",
        size: "16x16",
        points: 400,
        tags: ["Landmark", "Fountain"],
        url: '/limited_decor/kp/kp2.png',
        note: "Brave Season 2"
    },
    {
        name: "Big Squishy Visitor",
        theme: "Kingdom Pass",
        size: "12x12",
        points: 400,
        tags: ["Landmark"],
        url: '/limited_decor/kp/kp3.png',
        note: "Brave Season 3"
    },
    {
        name: "Spring Wisteria Bridge",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery", "Bridge", "Cookie Interaction"],
        url: '/limited_decor/kp/kp4.png',
        note: "Pure Vanilla Season 1"
    },
    {
        name: "Biscuit Playground",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction"],
        url: '/limited_decor/kp/kp5.png',
        note: "Pure Vanilla Season 2"
    },
    {
        name: "Gnominator Statue",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Statue"],
        url: '/limited_decor/kp/kp6.png',
        note: "Pure Vanilla Season 3"
    },
    {
        name: "Quackity Quack Jelly Boat",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Water", "Cookie Interaction"],
        url: '/limited_decor/kp/kp7.png',
        note: "Sea Fairy Season 1"
    },
    {
        name: "Ship in a Safe Bottle",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark"],
        url: '/limited_decor/kp/kp8.png',
        note: "Sea Fairy Season 2"
    },
    {
        name: "Romantic Rose Gazebo",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Water", "Cookie Interaction"],
        url: '/limited_decor/kp/kp9.png',
        note: "Sea Fairy Season 3"
    },
    {
        name: "Sugar Gnome's Pretzel Carriage",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction", "Gnome", "Animal"],
        url: '/limited_decor/kp/kp10.png',
        note: "Hollyberry Season 1"
    },
    {
        name: "Autumn Breeze Camping Site",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery", "Cookie Interaction"],
        url: '/limited_decor/kp/kp11.png',
        note: "Hollyberry Season 2"
    },
    {
        name: "Holiday Wish Tree",
        theme: "Kingdom Pass",
        size: "12x12",
        points: 400,
        tags: ["Landmark", "Greenery"],
        url: '/limited_decor/kp/kp12.png',
        note: "Hollyberry Season 3"
    },
    {
        name: "Golden Cookie Awards",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction"],
        url: '/limited_decor/kp/kp13.png',
        note: "Frost Queen Season 1"
    },
    {
        name: "New Year Tiger Statue",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery", "Statue"],
        url: '/limited_decor/kp/kp14.png',
        note: "Frost Queen Season 2"
    },
    {
        name: "Popcorn Magnolia Swing",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery", "Cookie Interaction"],
        url: '/limited_decor/kp/kp15.png',
        note: "Frost Queen Season 3"
    },
    {
        name: "Pink Choco Cherry Tree",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Greenery", "Cookie Interaction"],
        url: '/limited_decor/kp/kp16.png',
        note: "Dark Cacao Season 1"
    },
    {
        name: "Springtime Floral Terrace",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Building", "Cookie Interaction"],
        url: '/limited_decor/kp/kp17.png',
        note: "Dark Cacao Season 2"
    },
    {
        name: "Bagel Sandwich Greenhouse",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Building", "Cookie Interaction"],
        url: '/limited_decor/kp/kp18.png',
        note: "Dark Cacao Season 3"
    },
    {
        name: "Magic Clockwork Yacht",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction", "Water"],
        url: '/limited_decor/kp/kp19.png',
        note: "Radiant Heroes Season 1"
    },
    {
        name: "Rooftop Juice Bar",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction", "Building"],
        url: '/limited_decor/kp/kp20.png',
        note: "Radiant Heroes Season 2"
    },
    {
        name: "Bear Jelly Carnival",
        theme: "Kingdom Pass",
        size: "8x8",
        points: 400,
        tags: ["Landmark", "Cookie Interaction"],
        url: '/limited_decor/kp/kp21.png',
        note: "Radiant Heroes Season 3"
    },
    /*Start of World of Magic & Dreams*/
    {
        name: "Waterway of Dreams",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 0,
        tags: ["Water", "Collab"],
        url: '/limited_decor/wmd/wmd1.png',
        note: ""
    },
    {
        name: "Midsummer Tiles of Dreams",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 0,
        tags: ["Ground", "Collab"],
        url: '/limited_decor/wmd/wmd2.png',
        note: ""
    },
    {
        name: "Mickey's Cheese Tiles",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 0,
        tags: ["Ground", "Collab"],
        url: '/limited_decor/wmd/wmd3.png',
        note: ""
    },
    {
        name: "Mickey's Biscuit Tiles",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 0,
        tags: ["Ground", "Collab"],
        url: '/limited_decor/wmd/wmd4.png',
        note: ""
    },
    {
        name: "Wavy Jelly Coral",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Water", "Collab"],
        url: '/limited_decor/wmd/wmd5.png',
        note: ""
    },
    {
        name: "Fairy Ice Cream Cart",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Cart", "Food", "Collab"],
        url: '/limited_decor/wmd/wmd6.png',
        note: ""
    },
    {
        name: "Artisan Pie Bench",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Bench", "Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd7.png',
        note: ""
    },
    {
        name: "Choco \"Gnome\" of Clubs",
        theme: "World of Magic & Dreams",
        size: "2x2",
        points: 20,
        tags: ["Gnome", "Collab"],
        url: '/limited_decor/wmd/wmd8.png',
        note: ""
    },
    {
        name: "Strawberry \"Gnome\" of Hearts",
        theme: "World of Magic & Dreams",
        size: "2x2",
        points: 20,
        tags: ["Gnome", "Collab"],
        url: '/limited_decor/wmd/wmd9.png',
        note: ""
    },
    {
        name: "Painted Wonderland Tree",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Greenery", "Collab"],
        url: '/limited_decor/wmd/wmd10.png',
        note: ""
    },
    {
        name: "Pink Fence",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Fence", "Collab"],
        url: '/limited_decor/wmd/wmd11.png',
        note: ""
    },
    {
        name: "Mickey's Brick Wall",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Wall", "Collab"],
        url: '/limited_decor/wmd/wmd12.png',
        note: ""
    },
    {
        name: "Dreamy Royal Fence",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Fence", "Collab"],
        url: '/limited_decor/wmd/wmd13.png',
        note: ""
    },
    {
        name: "Golden Mickey Streetlight",
        theme: "World of Magic & Dreams",
        size: "2x2",
        points: 20,
        tags: ["Lamp", "Collab"],
        url: '/limited_decor/wmd/wmd14.png',
        note: ""
    },
    {
        name: "Candied Flowerbed",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Greenery", "Collab"],
        url: '/limited_decor/wmd/wmd15.png',
        note: ""
    },
    {
        name: "Mickey's Garden Tree",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Greenery", "Collab"],
        url: '/limited_decor/wmd/wmd16.png',
        note: ""
    },
    {
        name: "Mickey's Bench",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 22,
        tags: ["Bench", "Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd17.png',
        note: ""
    },
    {
        name: "Sugar Gnome Parademaster",
        theme: "World of Magic & Dreams",
        size: "2x2",
        points: 20,
        tags: ["Gnome", "Collab"],
        url: '/limited_decor/wmd/wmd18.png',
        note: ""
    },
    {
        name: "Mickey's Roadsign",
        theme: "World of Magic & Dreams",
        size: "2x2",
        points: 20,
        tags: ["Collab"],
        url: '/limited_decor/wmd/wmd19.png',
        note: ""
    },
    {
        name: "Candy Apple Stand",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Food", "Collab"],
        url: '/limited_decor/wmd/wmd20.png',
        note: ""
    },
    {
        name: "Financier Cake Canoe",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 36,
        tags: ["Water", "Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd21.png',
        note: ""
    },
    {
        name: "Kiteseller's Cart",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Cart", "Collab"],
        url: '/limited_decor/wmd/wmd22.png',
        note: ""
    },
    {
        name: "Genie's Cotton Candy Cart",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Cart", "Food", "Collab"],
        url: '/limited_decor/wmd/wmd23.png',
        note: ""
    },
    {
        name: "Sunday in Never Land",
        theme: "World of Magic & Dreams",
        size: "6x6",
        points: 34,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd24.png',
        note: ""
    },
    {
        name: "Mont Blanc Parasol",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd25.png',
        note: ""
    },
    {
        name: "Disney Friends Balloons",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Cart", "Collab"],
        url: '/limited_decor/wmd/wmd26.png',
        note: ""
    },
    {
        name: "Dreamy Castle Bridge",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 36,
        tags: ["Bridge", "Water", "Collab"],
        url: '/limited_decor/wmd/wmd27.png',
        note: ""
    },
    {
        name: "Mickey's Billboard",
        theme: "World of Magic & Dreams",
        size: "6x6",
        points: 34,
        tags: ["Collab"],
        url: '/limited_decor/wmd/wmd28.png',
        note: ""
    },
    {
        name: "Mickey's Fountain",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 36,
        tags: ["Collab", "Fountain"],
        url: '/limited_decor/wmd/wmd29.png',
        note: ""
    },
    {
        name: "Trainee's Horsey Ride",
        theme: "World of Magic & Dreams",
        size: "4x4",
        points: 32,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd30.png',
        note: ""
    },
    {
        name: "Royal Dressing Room",
        theme: "World of Magic & Dreams",
        size: "6x6",
        points: 34,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd31.png',
        note: ""
    },
    {
        name: "Juice Can Spaceship",
        theme: "World of Magic & Dreams",
        size: "6x6",
        points: 34,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd32.png',
        note: ""
    },
    {
        name: "Magic Mirror of Fate",
        theme: "World of Magic & Dreams",
        size: "6x6",
        points: 140,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd33.png',
        note: ""
    },
    {
        name: "Happily Ever After Photo Zone",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 160,
        tags: ["Cookie Interaction", "Collab"],
        url: '/limited_decor/wmd/wmd34.png',
        note: ""
    },
    {
        name: "Praline Pumpkin Coach",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 160,
        tags: ["Cookie Decor", "Collab"],
        url: '/limited_decor/wmd/wmd35.png',
        note: "Cookie Decor for Cinderella Cookie"
    },
    {
        name: "Little Ocean Globe",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Cookie Decor", "Disney Crystals", "Water", "Collab"],
        url: '/limited_decor/wmd/wmd36.png',
        note: "Cookie Decor for Ariel Cookie; produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Grandmother Willow",
        theme: "World of Magic & Dreams",
        size: "12x12",
        points: 650,
        tags: ["Cookie Decor", "Disney Crystals", "Water", "Greenery", "Collab"],
        url: '/limited_decor/wmd/wmd37.png',
        note: "Cookie Decor for Pocahontas Cookie; produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Tower of Fireworks",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Disney Crystals", "Tower", "Collab"],
        url: '/limited_decor/wmd/wmd38.png',
        note: "produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Midnight Merry-go-round",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd39.png',
        note: "produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Ballroom as Old as Time",
        theme: "World of Magic & Dreams",
        size: "16x16",
        points: 700,
        tags: ["Cookie Decor", "Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd40.png',
        note: "Cookie Decor for Beast Cookie and Belle Cookie; produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Magic Carpet Ride",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Cookie Interaction", "Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd41.png',
        note: "produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Golden Cheese Pirate Ship",
        theme: "World of Magic & Dreams",
        size: "12x12",
        points: 650,
        tags: ["Cookie Interaction", "Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd42.png',
        note: "produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Stage Aloha",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Cookie Decor", "Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd43.png',
        note: "Cookie Decor for Stitch Cookie and Lilo Cookie; produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Carrot Pie House",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 600,
        tags: ["Cookie Decor", "Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd44.png',
        note: "Cookie Decor for Alice Cookie; produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Twirly Sky Cupcakes",
        theme: "World of Magic & Dreams",
        size: "16x16",
        points: 700,
        tags: ["Disney Crystals", "Collab"],
        url: '/limited_decor/wmd/wmd45.png',
        note: "produced Wishing Star Crystals during Disney crossover"
    },
    {
        name: "Disney Ice Cream Truck",
        theme: "World of Magic & Dreams",
        size: "8x8",
        points: 36,
        tags: ["Collab"],
        url: '/limited_decor/wmd/wmd46.png',
        note: "produced items during Disney Cookies' Wishlist event"
    },
    /*Start of Treacherous Duskgloom Sea*/
    {
        name: "Duskgloom Waterway",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 0,
        tags: ["Water"],
        url: '/regular_decor/tds/tds1.png',
        note: ""
    },
    {
        name: "Sinking Boat",
        theme: "Treacherous Duskgloom Sea",
        size: "8x8",
        points: 40,
        tags: ["Cookie Interaction", "Water"],
        url: '/regular_decor/tds/tds2.png',
        note: ""
    },
    {
        name: "TIp of the Rock",
        theme: "Treacherous Duskgloom Sea",
        size: "6x6",
        points: 32,
        tags: ["Water"],
        url: '/regular_decor/tds/tds3.png',
        note: ""
    },
    {
        name: "Seawater Juice Barrel",
        theme: "Treacherous Duskgloom Sea",
        size: "6x6",
        points: 38,
        tags: ["Water"],
        url: '/regular_decor/tds/tds4.png',
        note: ""
    },
    {
        name: "Floating Wood",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 30,
        tags: ["Water"],
        url: '/regular_decor/tds/tds5.png',
        note: ""
    },
    {
        name: "Salty Shark's Flag",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 30,
        tags: ["Flag"],
        url: '/regular_decor/tds/tds6.png',
        note: ""
    },
    {
        name: "Secure Lantern Brig",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 35,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/tds/tds7.png',
        note: ""
    },
    {
        name: "Gilded Candy Globe",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/tds/tds8.png',
        note: ""
    },
    {
        name: "Navigator's Desk",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 30,
        tags: ["Cookie Interaction"],
        url: '/regular_decor/tds/tds9.png',
        note: ""
    },
    {
        name: "The Republic's Navy Needs You!",
        theme: "Treacherous Duskgloom Sea",
        size: "4x4",
        points: 30,
        tags: [],
        url: '/regular_decor/tds/tds10.png',
        note: ""
    },
];

/**/

// {
//     name: "",
//     theme: "Treacherous Duskgloom Sea",
//     size: "",
//     points: ,
//     tags: [],
//     url: '/regular_decor/tds/tds.png',
//     note: ""
// },

// {
//     name: "",
//     theme: "Kingdom Pass",
//     size: "",
//     points: ,
//     tags: [],
//     url: '/limited_decor/kp/kp.png',
//     note: ""
// },

const themeArray = [
    "Arena",
    "Kingdom Pass",
    "Ovenbreak",
    "Crispy Cookie Town",
    "Camping Time",
    "Land of Peace & Healing",
    "Parfaedia Fantasy",
    "Happy Farm",
    "Acorn Village",
    "Gnome's Life",
    "Market Square",
    "Lunar New Year",
    "Atlas of Trees",
    "Tea Cup Hamlet",
    "Witches & Ghosts",
    "Blade & Magic",
    "Kingdom of Snow & Ice",
    "Luxurious Juice Salon",
    "Grand Dinner Party",
    "Sculpture Park",
    "Flower Garden",
    "Garden of Delights",
    "Bustling Amusement Park",
    "Pew-Pew Arcade",
    "Crimson Badlands",
    "Starry Night",
    "Industrial Adventure",
    "St. Pastry Order",
    "Tropical Island",
    "Summer Music Festival",
    "Hollyberry Garden Carnival",
    "Welcome to Green Hill",
    "Abundant Harvest Festival",
    "Mala Tribe's Turf",
    "Sweet & Creepy",
    "Kingdom's First Jellymart",
    "Cozy Snowfall Village",
    "Jolly Year-End Festivities",
    "Kingdom of the Unwavering",
    "Springtime Blossom Picnic Party",
    "First Steps Towards Peace",
    "The Republic's Azure Streets",
    "World of Magic & Dreams",
    "Other",
    "Treacherous Duskgloom Sea"
];

const sizeArray = [
    "2x2",
    "3x3",
    "4x4",
    "6x6",
    "8x8",
    "12x12",
    "16x16"
];

const tagsArray = [...new Set(decorArray.flatMap(({tags}) => tags))].sort();

//https://discordapp.com/users/474649200622043138

export {decorArray, themeArray, sizeArray, tagsArray};
