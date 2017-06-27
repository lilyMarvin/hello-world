// File To Store Graphs, ID VALUES MUST BE A 3-DIGIT INT
var testingGraph = {
  //32 nodes, 10 intersections, 6 access points, 3 buildings
  nodes: [
    //level 1
    { name: "" , id: "000" , cx: "75px" , cy: "475px", type: "PoweredIntersection" },
    { name: "" , id: "001" , cx: "600px" , cy: "475px", type: "PoweredIntersection" },
    { name: "" , id: "002" , cx: "1200px" , cy: "475px", type: "UnpoweredIntersection" },
    { name: "" , id: "003" , cx: "1500px" , cy: "475px", type: "UnpoweredIntersection" },
    { name: "" , id: "004" , cx: "1800px" , cy: "475px", type: "UnpoweredIntersection" },
    //level 2
    { name: "" , id: "005" , cx: "150px" , cy: "650px", type: "PoweredIntersection" },
    { name: "" , id: "006" , cx: "600px" , cy: "650px", type: "PoweredIntersection" },
    //level 3
    { name: "" , id: "007" , cx: "600px" , cy: "900px", type: "PoweredIntersection" },
    { name: "" , id: "008" , cx: "1200px" , cy: "900px", type: "UnpoweredIntersection" },
    { name: "" , id: "009" , cx: "1500px" , cy: "900px", type: "UnpoweredIntersection" },

    //coffee shop
    { name: "" , id: "010" , cx: "700px" , cy: "475px", type: "AccessPoint" },
    //hospital
    { name: "" , id: "011" , cx: "1500px" , cy: "350px", type: "AccessPoint" },
    { name: "" , id: "012" , cx: "1600px" , cy: "475px", type: "AccessPoint" },
    //school
    { name: "" , id: "013" , cx: "1500px" , cy: "750px", type: "AccessPoint" },
    { name: "" , id: "014" , cx: "1500px" , cy: "825px", type: "AccessPoint" },
    { name: "" , id: "015" , cx: "1600px" , cy: "900px", type: "AccessPoint" },
    //power station
    { name: "" , id: "032" , cx: "400px" , cy: "475px", type: "AccessPoint" },
    { name: "" , id: "033" , cx: "600px" , cy: "350px", type: "AccessPoint" },
    //train station
    { name: "" , id: "034" , cx: "300px" , cy: "650px", type: "AccessPoint" },
    { name: "" , id: "035" , cx: "215px" , cy: "810px", type: "AccessPoint" },


    { name: "TrainStation" , id: "036" , cx: "300px" , cy: "740px", type: "Building" },
    { name: "PowerStation" , id: "037" , cx: "400px" , cy: "350px", type: "Building" },
    { name: "CoffeeShop" , id: "016" , cx: "700px" , cy: "350px", type: "Building" },
    { name: "Hospital" , id: "017" , cx: "1600px" , cy: "350px", type: "Building" },
    { name: "School" , id: "018" , cx: "1600px" , cy: "800px", type: "Building" },

    { name: "" , id: "019" , cx: "0px"    , cy: "300px"  , type: "Border" },
    { name: "" , id: "020" , cx: "300px"  , cy: "1000px" , type: "Border" },
    { name: "" , id: "021" , cx: "0px"    , cy: "475px"  , type: "Border" },
    { name: "" , id: "022" , cx: "2000px" , cy: "475px"  , type: "Border" },
    { name: "" , id: "023" , cx: "0px"    , cy: "650px"  , type: "Border" },
    { name: "" , id: "024" , cx: "2000px" , cy: "900px"  , type: "Border" },
    { name: "" , id: "025" , cx: "600px"  , cy: "0px"    , type: "Border" },
    { name: "" , id: "026" , cx: "600px"  , cy: "1000px" , type: "Border" },
    { name: "" , id: "027" , cx: "1200px" , cy: "0px"    , type: "Border" },
    { name: "" , id: "028" , cx: "1200px" , cy: "1000px" , type: "Border" },
    { name: "" , id: "029" , cx: "1500px" , cy: "0px"    , type: "Border" },
    { name: "" , id: "030" , cx: "1500px" , cy: "1000px" , type: "Border" },
    { name: "" , id: "031" , cx: "1800px" , cy: "0px"    , type: "Border" }
  ],
  //37 edges
  edges: [
    //Diagonal Lines
    { id1:"019" , id2:"000" },
    { id1:"000" , id2:"005" },
    { id1:"005" , id2:"035" },
    { id1:"035" , id2:"020" },

    // Vertical Lines
    { id1:"025" , id2:"001" },
    { id1:"001" , id2:"006" },
    { id1:"006" , id2:"007" },
    { id1:"007" , id2:"026" },

    { id1:"027" , id2:"002" },
    { id1:"002" , id2:"008" },
    { id1:"008" , id2:"028" },

    { id1:"029" , id2:"011" },
    { id1:"011" , id2:"003" },
    { id1:"003" , id2:"013" },
    { id1:"013" , id2:"014" },
    { id1:"014" , id2:"009" },
    { id1:"009" , id2:"030" },
    { id1:"004" , id2:"031" },

    // Horizontal Lines
    { id1:"021" , id2:"000" },
    { id1:"000" , id2:"001" },
    { id1:"001" , id2:"010" },
    { id1:"010" , id2:"002" },
    { id1:"002" , id2:"003" },
    { id1:"003" , id2:"012" },
    { id1:"012" , id2:"004" },
    { id1:"004" , id2:"022" },

    { id1:"023" , id2:"005" },
    { id1:"005" , id2:"006" },

    { id1:"007" , id2:"008" },
    { id1:"008" , id2:"009" },
    { id1:"009" , id2:"015" },
    { id1:"015" , id2:"024" },

    // Access Points
    { id1:"010" , id2:"016" },
    { id1:"011" , id2:"017" },
    { id1:"012" , id2:"017" },
    { id1:"013" , id2:"018" },
    { id1:"014" , id2:"018" },
    { id1:"037" , id2:"032" },
    { id1:"037" , id2:"033" },
    { id1:"035" , id2:"036" },
    { id1:"036" , id2:"034" },
    { id1:"015" , id2:"018" }
  ],
  buttons: [
    { name: "placeHold",
      affectedClasses: [],
      listenerAssign: function(button) { return }
    },
    { name: "toggleCol",
      affectedClasses: [],
      listenerAssign: function(button) {
        var nodeId = button.id.substr(0,3);
        button.innerHTML = "Initial Color";
        button.addEventListener("click", function() {
          var color = currentGraph.nodeStates[nodeId];
          switch (color) {
            case 0 :
              setColor(nodeId, 1);
              button.innerHTML = "Color: " + theme.colorNam[1];
              break;
            case 1 :
              setColor(nodeId, 2);
              button.innerHTML = "Color: " + theme.colorNam[2];
              break;
            default:
              setColor(nodeId, 0);
              button.innerHTML = "Color: " + theme.colorNam[0];
          };
        });
      }
    }
  ],
  nodeStates: { }, // Given values at runtime
  idToIndex: { } // Given values at runtime
}

/*
var twoGraph = {
  nodes: [
    { name: "A" , id: "000" , cx: "20%" , cy: "25%" },
    { name: "B" , id: "001" , cx: "75%" , cy: "20%" },
    { name: "C" , id: "002" , cx: "50%" , cy: "45%" }
  ],
  edges: [
    { id1: "000" , id2: "001" },
    { id1: "001" , id2: "002" }
  ],
  buttons: [
    { name: "placeHold",
      affectedClasses: [],
      listenerAssign: function(button) { return }
    },
    { name: "toggleCol",
      affectedClasses: [],
      listenerAssign: function(button) {
        var nodeId = button.id.substr(0,3);
        button.innerHTML = "Initial Color";
        button.addEventListener("click", function() {
          var color = currentGraph.nodeStates[nodeId];
          switch (color) {
            case 0 :
              setColor(nodeId, 1);
              button.innerHTML = "Color: " + theme.colorNam[1];
              break;
            case 1 :
              setColor(nodeId, 2);
              button.innerHTML = "Color: " + theme.colorNam[2];
              break;
            default:
              setColor(nodeId, 0);
              button.innerHTML = "Color: " + theme.colorNam[0];
          };
        });
      }
    }
  ],
  nodeStates: { }, // Given values at runtime
  idToIndex: { } // Given values at runtime
}
*/

var graphDict = [
  {name: "testingGraph", g: testingGraph},
  {name: "null",         g: "null"}
];

// INITIALIZE FUNCTION --------------------------------
function setGraph(inGraph) {

  currentGraph = inGraph;

  for (var i = 0; i < currentGraph.nodes.length; i++) {
    currentGraph.idToIndex[currentGraph.nodes[i].id] = i;
    currentGraph.nodeStates[currentGraph.nodes[i].id] = 0;
  }

  var body = document.getElementById("body");
  var svg = document.getElementById("svgBody");

  svg.innerHTML = "";
  var preMenuButtons = document.getElementsByClassName("menu");
  while (preMenuButtons[0]) {
    preMenuButtons[0].parentNode.removeChild(preMenuButtons[0]);
  }

  for (var i = 0; i < currentGraph.nodes.length; i++) {
    currentGraph.idToIndex[currentGraph.nodes[i].id] = i;
    currentGraph.nodeStates[currentGraph.nodes[i].id] = 0;
  }


  // Adds edge line elements
  for (var i = 0; i < currentGraph.edges.length; i++) {
    //creating the edge
    var edgeEle = document.createElementNS("http://www.w3.org/2000/svg", "line"),
        edgeEleId = "edge" + currentGraph.edges[i].id1 + "" + currentGraph.edges[i].id2,
        edgeEleClass1 = currentGraph.edges[i].id1 + "edge",
        edgeEleClass2 = currentGraph.edges[i].id2 + "edge";

    edgeEle.setAttribute("id", edgeEleId);
    edgeEle.classList.add("edge", edgeEleClass1, edgeEleClass2);
    edgeEle.setAttribute("x1", currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id1]].cx);
    edgeEle.setAttribute("y1", currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id1]].cy);
    edgeEle.setAttribute("x2", currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id2]].cx);
    edgeEle.setAttribute("y2", currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id2]].cy);

    svg.appendChild(edgeEle);
  }

  // Adds node group elements and menus
  for (var i = 0; i < currentGraph.nodes.length; i++) {
    // Creates and appends node with text element
    var nodeShape, nodeId, nodeText, nodeG;

    //draws intersections
    if(currentGraph.nodes[i].type == "UnpoweredIntersection" || currentGraph.nodes[i].type == "PoweredIntersection"){
    //creating the node
      nodeShape = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
      nodeId = "node" + currentGraph.nodes[i].id;
      nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
      nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

      //the node's attributes
      nodeShape.setAttribute("id", nodeId);
      nodeShape.classList.add("node");
      nodeShape.setAttribute("cx", currentGraph.nodes[i].cx);
      nodeShape.setAttribute("cy", currentGraph.nodes[i].cy);
      nodeShape.setAttribute("r", "30");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }

    //draws borders
    else if(currentGraph.nodes[i].type == "Border"){
      //creating the node
      nodeShape = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
      nodeId = "node" + currentGraph.nodes[i].id;
      nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
      nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

      //the node's attributes
      nodeShape.setAttribute("id", nodeId);
      nodeShape.classList.add("node");
      nodeShape.setAttribute("cx", currentGraph.nodes[i].cx);
      nodeShape.setAttribute("cy", currentGraph.nodes[i].cy);
      nodeShape.setAttribute("r", "15");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }

    //draws access points
    else if(currentGraph.nodes[i].type == "AccessPoint"){
      //creating the node
      nodeShape = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
      nodeId = "node" + currentGraph.nodes[i].id;
      nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
      nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

      //the node's attributes
      nodeShape.setAttribute("id", nodeId);
      nodeShape.classList.add("node");
      nodeShape.setAttribute("cx", currentGraph.nodes[i].cx);
      nodeShape.setAttribute("cy", currentGraph.nodes[i].cy);
      nodeShape.setAttribute("r", "20");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }

    //draws squares
    else {
      //creating the node
          nodeShape = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
          nodeId = "node" + currentGraph.nodes[i].id;
          nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
          nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

      //the node's attributes
      nodeShape.setAttribute("id", nodeId);
      nodeShape.classList.add("node");
      nodeShape.setAttribute("x", parseInt(currentGraph.nodes[i].cx) - 35);
      nodeShape.setAttribute("y", parseInt(currentGraph.nodes[i].cy) - 35);
      nodeShape.setAttribute("width", "70");
      nodeShape.setAttribute("height", "70");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }


/*
    //draws ellipses
    else if (currentGraph.nodes[i].type == "AccessPoint"){
      //creating the node
          nodeShape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse"),
          nodeId = "node" + currentGraph.nodes[i].id;
          nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
          nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

      //the node's attributes
      nodeShape.setAttribute("id", nodeId);
      nodeShape.classList.add("node");
      nodeShape.setAttribute("cx", currentGraph.nodes[i].cx);
      nodeShape.setAttribute("cy", currentGraph.nodes[i].cy);
      nodeShape.setAttribute("rx", "50");
      nodeShape.setAttribute("ry", "25");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }
*/

    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].id;

    nodeG.appendChild(nodeShape);
    nodeG.appendChild(nodeText);

    svg.appendChild(nodeG);
    // Creates Menu Div Template
    var menuTemplate = document.createElement("div"),
        menuId = "node" + currentGraph.nodes[i].id + "Menu",
        innerP = document.createElement("p"),
        bound = nodeShape.getBoundingClientRect(),
        boundCenter;

    innerP.innerHTML = "Status Uninitialized";
    menuTemplate.setAttribute("id", menuId);
    menuTemplate.classList.add("menu");
    boundCenter = (bound.right - bound.left) / 2;
    menuTemplate.style.left = (bound.left + boundCenter + 40) + "px";
    menuTemplate.style.top = (bound.top - 10) + "px";
    menuMove(currentGraph.nodes[i].id);
    menuTemplate.appendChild(innerP);

    // Appends Buttons to Menu Div Template
    for (var j = 0; j < currentGraph.buttons.length; j++) {
      var eleButton = document.createElement("button"),
          eleButtonId = currentGraph.nodes[i].id + "" + currentGraph.buttons[j].name;
      eleButton.setAttribute("id", eleButtonId);
      eleButton.setAttribute("type", "button");
      eleButton.classList.add("menuButton", currentGraph.buttons[j].name);
      eleButton.innerHTML = "Uninitialized";
      currentGraph.buttons[j].listenerAssign(eleButton);
      menuTemplate.appendChild(eleButton);
    }
    body.appendChild(menuTemplate);
  }
}

function menuMove(id) {
  window.addEventListener("resize", function() {
    var nodeEle = document.getElementById("node" + id),
        menuEle = document.getElementById("node" + id + "Menu"),
        nodeBox, nodeCenterVal;

    nodeBox = nodeEle.getBoundingClientRect();
    nodeCenterVal = (nodeBox.right - nodeBox.left) / 2;
    menuEle.style.left = (nodeBox.left + nodeCenterVal + 40) + "px";
    menuEle.style.top = nodeBox.top + "px";
  })
}
