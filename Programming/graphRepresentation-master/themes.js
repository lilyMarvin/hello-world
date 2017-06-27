// nodeFill - 70% Light
// nodeBord - 35% Light
// edgeFill - 25% Light
// menuColo - [background, border, button, button hover, text color]
//
var defaultTheme = testingTheme;

var themeDict = [
  { name: "testingTheme", "testingTheme": testingTheme },
  { name: "blueTheme",    "blueTheme"   : blueTheme    },
  { name: "clearTheme",   "clearTheme"  : clearTheme   }
];

var testingTheme = {
  svgColor :  "rgb(240, 240, 240)",
  menuColo : { background  : "rgba(179, 255, 153, .7)",
               border      : "rgb(32, 128, 0)",
               button      : "rgba(179, 255, 153, .6)",
               buttonHover : "rgba(57, 230, 0, .8)",
               text        : "rgb(0, 0, 0)" },
  colorNam : ["Green",              "Orange",             "Red"               ],
  levelNam : ["Okie Doke",          "Spooky",             "Hotline Miami"     ],
  fontFill : ["rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(0, 0, 0)"      ],
  nodeFill : ["rgb(102, 255, 102)", "rgb(255, 217, 102)", "rgb(255, 102, 102)"],
  nodeBord : ["rgb(0, 179, 0)" ,    "rgb(179, 134, 0)",   "rgb(179, 0, 0)"    ],
  edgeFill : ["rgb(0, 128, 0)",     "rgb(128, 96, 0)",    "rgb(128, 0, 0)"    ]
}

// Hues 165, 240, 345
var blueTheme = {
  svgColor :  "rgb(230, 204, 255)",
  menuColo : { background  : "rgba(153, 204, 255, .7)",
               border      : "rgb(0, 64, 128)",
               button      : "rgba(153, 204, 255, .6)",
               buttonHover : "rgba(77, 166, 255, .8)",
               text        : "rgb(0, 0, 0)" },
  colorNam : ["Cyan",               "Blue",               "Fuschia"           ],
  levelNam : ["Okie Doke",          "Spooky",             "Hotline Miami"     ],
  fontFill : ["rgb(0, 0, 0)",       "rgb(255, 255, 255)", "rgb(0, 0, 0)"      ],
  nodeFill : ["rgb(102, 255, 217)", "rgb(102, 102, 255)", "rgb(179, 102, 255)"],
  nodeBord : ["rgb(0, 179, 134)" ,  "rgb(0, 0, 179)",     "rgb(89, 0, 179)"   ],
  edgeFill : ["rgb(0, 128, 96)",    "rgb(0, 0, 128)",     "rgb(64, 0, 128)"   ]
}

var clearTheme = {
  svgColor :  "rgb(255, 255, 255)",
  menuColo : { background  : "rgba(200, 200, 200, .7)",
               border      : "rgb(0, 0, 0)",
               button      : "rgba(200, 200, 200, .6)",
               buttonHover : "rgba(170, 170, 170, .8)",
               text        : "rgb(0, 0, 0)" },
  colorNam : ["---",                "---",                "---"               ],
  levelNam : ["0",                  "1",                  "2"                 ],
  fontFill : ["rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(0, 0, 0)"      ],
  nodeFill : ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(255, 255, 255)"],
  nodeBord : ["rgb(0, 0, 0)" ,      "rgb(0, 0, 0)",       "rgb(0, 0, 0)"      ],
  edgeFill : ["rgb(0, 0, 0)",       "rgb(0, 0, 0)",       "rgb(0, 0, 0)"      ]
}

function setTheme(newTheme) {
  theme = newTheme;
  var svg = document.getElementById("svgBody");
  svg.style.background = theme.svgColor;
  var nodeList = document.getElementsByClassName("node");
  for (var i = 0; i < nodeList.length; i++) {
    var nodeId = nodeList[i].id.substr(4,3);
    setColor(nodeId, currentGraph.nodeStates[nodeId], currentGraph.nodes[i].type);
    setAdjEdgeColors(nodeId, currentGraph.nodeStates[nodeId]);
  }
  var menuList = document.getElementsByClassName("menu");
  for (var i = 0; i < menuList.length; i++) {
    var menuEle = menuList[i],
        nodeId = menuEle.id.substr(4, 3),
        nodeState = currentGraph.nodeStates[nodeId];
    menuEle.style.backgroundColor = theme.menuColo.background;
    menuEle.style.borderColor = theme.menuColo.border;
    menuEle.style.color = theme.menuColo.text;
    menuEle.firstElementChild.style.borderBottomColor = theme.menuColo.border;
    menuEle.firstElementChild.innerHTML = "Status: " + theme.levelNam[nodeState];
  }
  var menuButtonList = document.getElementsByClassName("menuButton");
  for (var i = 0; i < menuButtonList.length; i++) {
    var menuButtonEle = menuButtonList[i];
    menuButtonEle.style.backgroundColor = theme.menuColo.button;
    menuButtonEle.style.color = theme.menuColo.text;
  }
};
