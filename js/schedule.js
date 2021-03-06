var container = document.querySelector('.schedule-list');
var template  = document.querySelector('#schedule_element_template').content;

function leaderboard_link(text, target) {
  return '<a href="https://speedrun.com/'+target+'" target="_blank">'+ text +'</a>';
}

function link(text, target) {
  return '<a href="https://twitch.tv/'+target+'" target="_blank">'+ text +'</a>';
}

function create_runner_links(runners) {
  text = "";
  runners.forEach(function(runner, index) {
    if(index > 0) text += ", "
    text += link(runner.name, runner.twitch);
  });

  return text;
}

function create_run(run) {
  var element = document.importNode(template, true);
  element.querySelector('.datetime .time').innerHTML = run.datetime.format('h:mma');
  element.querySelector('.datetime .date').innerHTML = run.datetime.format('MMM Do');

  element.querySelector('.info .game').innerHTML          = run.game;
  element.querySelector('.info .category').innerHTML      = leaderboard_link(run.category, run.link);
  element.querySelector('.info .runners').innerHTML       = create_runner_links(run.runners);
  if(run.commentators) {
    element.querySelector('.info .commentators').innerHTML  = "ft. " + create_runner_links(run.commentators);
  }

  container.appendChild(element);
  return element;
}

var runs = [
  {
    "game": "Spyro the Dragon",
    "category": "Any%",
    "link": "spyro1#Any",
    "datetime": moment("2017-08-11T23:00:00Z"),
    "runners": [
      { "name": "AlexDest", "twitch": "alexdest" },
      { "name": "Hummeldon", "twitch": "hummeldon" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "Any%",
    "link": "spyro2#Any",
    "datetime": moment("2017-08-11T23:50:00Z"),
    "runners": [
      { "name": "Lewisb99", "twitch": "lewisb99_" }
    ],
    "commentators": [
      { "name": "Spudlyman", "twitch": "spudlyman" }
    ]
  },
  {
    "game": "Spyro: Year of the Dragon",
    "category": "Any%",
    "link": "spyro3#Any",
    "datetime": moment("2017-08-12T00:10:00Z"),
    "runners": [
      { "name": "faulty", "twitch": "amfaulty" }
    ],
    "commentators": [
      { "name": "Dact", "twitch": "dactyly" },
      { "name": "jeremythompson", "twitch": "jeremythompson" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "Blackout",
    "link": "spyro2",
    "datetime": moment("2017-08-12T00:50:00Z"),
    "runners": [
      { "name": "Alex", "twitch": "alexdest" },
      { "name": "Beuchi", "twitch": "beuchiism" },
      { "name": "Spudly", "twitch": "Spudlyman" },
      { "name": "Venom", "twitch": "venomynous" }
    ]
  },
  {
    "game": "Spyro: Season of Flame",
    "category": "Any%",
    "link": "spyrosof#Any",
    "datetime": moment("2017-08-12T02:25:00Z"),
    "runners": [
      { "name": "Zombie", "twitch": "zombiemaster916" }
    ]
  },
  {
    "game": "Spyro: Attack of the Rhynocs",
    "category": "Any%",
    "link": "spyroaotr#Any",
    "datetime": moment("2017-08-12T03:05:00Z"),
    "runners": [
      { "name": "JakeInTake", "twitch": "jakeintakestreams" }
    ]
  },
  {
    "game": "Spyro the Dragon",
    "category": "Vortex%",
    "link": "spyro1#Vortex",
    "datetime": moment("2017-08-12T03:35:00Z"),
    "runners": [
      { "name": "Gazco41", "twitch": "gazco41" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "10 Portals",
    "link": "spyro2#Stand_On_10_Portals",
    "datetime": moment("2017-08-12T04:10:00Z"),
    "runners": [
      { "name": "ParsoFish", "twitch": "parsofish" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "Bonedance",
    "link": "spyro2#Bone_Dance",
    "datetime": moment("2017-08-12T04:20:00Z"),
    "runners": [
      { "name": "Grant", "twitch": "grantchil" }
    ]
  },
  {
    "game": "Spyro: Year of the Dragon",
    "category": "Bonedance",
    "link": "spyro3#Bone_Dance",
    "datetime": moment("2017-08-12T04:30:00Z"),
    "runners": [
      { "name": "ParsoFish", "twitch": "parsoFish" },
      { "name": "Grant", "twitch": "grantchil" }
    ]
  },
  {
    "game": "Spyro Orange: The Cortex Conspiracy",
    "category": "Beat Cortex",
    "link": "spyrofusion#Beat_Cortex",
    "datetime": moment("2017-08-12T04:50:00Z"),
    "runners": [
      { "name": "Ikkatosh23", "twitch": "ikkatosh23" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "14 Talisman",
    "link": "spyro2#14_Talisman",
    "datetime": moment("2017-08-12T05:35:00Z"),
    "runners": [
      { "name": "Jumpyluff", "twitch": "jumpyluff" },
      { "name": "VSnake", "twitch": "v_snake_" }
    ],
    "commentators": [
      { "name": "Martyrr", "twitch": "martyrrsenpai" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "40 Orb (Boss Skips)",
    "link": "spyro2#40_Orb_Boss_Skips",
    "datetime": moment("2017-08-12T06:10:00Z"),
    "runners": [
      { "name": "FalcoEagle", "twitch": "falcoeagle" }
    ],
    "commentators": [
      { "name": "Dact", "twitch": "dactyly" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "40 Orb",
    "link": "spyro2#40_Orb",
    "datetime": moment("2017-08-12T06:55:00Z"),
    "runners": [
      { "name": "Lewisb99", "twitch": "lewisb99_" }
    ]
  },
  {
    "game": "Spyro: Year of the Dragon",
    "category": "100 Egg",
    "link": "spyro3#100_Egg",
    "datetime": moment("2017-08-12T07:50:00Z"),
    "runners": [
      { "name": "Dact", "twitch": "dactyly" }
    ],
    "commentators": [
      { "name": "Nerf", "twitch": "nerfripp" }
    ]
  },
  {
    "game": "Spyro: Season of Flame",
    "category": "100%",
    "link": "spyrosof#100",
    "datetime": moment("2017-08-12T08:50:00Z"),
    "runners": [
      { "name": "Zombie", "twitch": "zombiemaster916" }
    ]
  },
  {
    "game": "Spyro: A Hero's Tail",
    "category": "Any%",
    "link": "spyroaht#Any",
    "datetime": moment("2017-08-12T10:45:00Z"),
    "runners": [
      { "name": "Dustiel", "twitch": "dustiel" }
    ]
  },
  {
    "game": "Spyro: A Hero's Tail",
    "category": "100%",
    "link": "spyroaht#100",
    "datetime": moment("2017-08-12T11:30:00Z"),
    "runners": [
      { "name": "Dustiel", "twitch": "dustiel" }
    ]
  },
  {
    "game": "Spyro: Year of the Dragon",
    "category": "149 Egg",
    "link": "spyro3#149_Egg",
    "datetime": moment("2017-08-12T15:15:00Z"),
    "runners": [
      { "name": "Wedc517", "twitch": "wedc517" }
    ]
  },
  {
    "game": "Spyro the Dragon",
    "category": "120%",
    "link": "spyro1#120",
    "datetime": moment("2017-08-12T17:40:00Z"),
    "runners": [
      { "name": "Gazco41", "twitch": "gazco41" }
    ]
  },
  {
    "game": "Spyro 2: Ripto's Rage",
    "category": "100%",
    "link": "spyro2#100",
    "datetime": moment("2017-08-12T19:15:00Z"),
    "runners": [
      { "name": "AlexDest", "twitch": "alexdest" }
    ],
    "commentators": [
      { "name": "Tyzerra", "twitch": "tyzerra" }
    ]
  },
  {
    "game": "Spyro: Year of the Dragon",
    "category": "117%",
    "link": "spyro3#117",
    "datetime": moment("2017-08-12T21:05:00Z"),
    "runners": [
      { "name": "Notvanni", "twitch": "notvanni" }
    ]
  },
];

runs.forEach(function(run) {
  create_run(run);
});
