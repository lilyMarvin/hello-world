// File To Store Graphs, ID VALUES MUST BE A 3-DIGIT INT
var testingGraph = {
  //41 nodes, 10 intersections, 6 access points, 3 buildings
  nodes: [
    //level 1
    { name: "" , id: "000" , cx: "75px" , cy: "475px", type: "PoweredIntersection" },
    { name: "" , id: "001" , cx: "600px" , cy: "475px", type: "PoweredIntersection" },
    { name: "" , id: "002" , cx: "1200px" , cy: "475px", type: "PoweredIntersection" },
    { name: "" , id: "003" , cx: "1500px" , cy: "475px", type: "UnpoweredIntersection" },
    { name: "" , id: "004" , cx: "1800px" , cy: "475px", type: "UnpoweredIntersection" },
    //level 2
    { name: "" , id: "005" , cx: "150px" , cy: "650px", type: "PoweredIntersection" },
    { name: "" , id: "006" , cx: "600px" , cy: "650px", type: "PoweredIntersection" },
    //level 3
    { name: "" , id: "007" , cx: "600px" , cy: "900px", type: "UnpoweredIntersection" },
    { name: "" , id: "008" , cx: "1200px" , cy: "900px", type: "UnpoweredIntersection" },
    { name: "" , id: "009" , cx: "1500px" , cy: "900px", type: "UnpoweredIntersection" },

    //coffee shop
    { name: "" , id: "010" , cx: "700px" , cy: "475px", type: "AccessPoint" },
    //hospital
    { name: "" , id: "011" , cx: "1500px" , cy: "350px", type: "AccessPoint" },
    { name: "" , id: "012" , cx: "1600px" , cy: "475px", type: "AccessPoint" },
    //middle school
    { name: "" , id: "013" , cx: "1500px" , cy: "750px", type: "AccessPoint" },
    { name: "" , id: "014" , cx: "1500px" , cy: "825px", type: "AccessPoint" },
    { name: "" , id: "015" , cx: "1600px" , cy: "900px", type: "AccessPoint" },
    //power station
    { name: "" , id: "016" , cx: "380px" , cy: "475px", type: "AccessPoint" },
    { name: "" , id: "017" , cx: "600px" , cy: "300px", type: "AccessPoint" },
    //train station
    { name: "" , id: "018" , cx: "300px" , cy: "650px", type: "AccessPoint" },
    { name: "" , id: "019" , cx: "215px" , cy: "810px", type: "AccessPoint" },
    //USM
    { name: "" , id: "020" , cx: "900px" , cy: "900px", type: "AccessPoint" },
    { name: "" , id: "021" , cx: "1200px" , cy: "650px", type: "AccessPoint" },


    { name: "" , id: "022" , cx: "300px" , cy: "740px", type: "TrainStation" },

    { name: "" , id: "023" , cx: "375px" , cy: "300px", type: "PowerStation" },

    //CoffeeShop
    { name: "" , id: "024" , cx: "700px" , cy: "350px", type: "Business" },
    //Hospital
    { name: "" , id: "025" , cx: "1600px" , cy: "350px", type: "Business" },
    //MiddleSchool
    { name: "" , id: "026" , cx: "1600px" , cy: "800px", type: "Business" },
    //USM
    { name: "" , id: "027" , cx: "900px" , cy: "650px", type: "Business" },

    { name: "" , id: "028" , cx: "0px"    , cy: "300px"  , type: "Border" },
    { name: "" , id: "029" , cx: "300px"  , cy: "1000px" , type: "Border" },
    { name: "" , id: "030" , cx: "0px"    , cy: "475px"  , type: "Border" },
    { name: "" , id: "031" , cx: "2000px" , cy: "475px"  , type: "Border" },
    { name: "" , id: "032" , cx: "0px"    , cy: "650px"  , type: "Border" },
    { name: "" , id: "033" , cx: "2000px" , cy: "900px"  , type: "Border" },
    { name: "" , id: "034" , cx: "600px"  , cy: "0px"    , type: "Border" },
    { name: "" , id: "035" , cx: "600px"  , cy: "1000px" , type: "Border" },
    { name: "" , id: "036" , cx: "1200px" , cy: "0px"    , type: "Border" },
    { name: "" , id: "037" , cx: "1200px" , cy: "1000px" , type: "Border" },
    { name: "" , id: "038" , cx: "1500px" , cy: "0px"    , type: "Border" },
    { name: "" , id: "039" , cx: "1500px" , cy: "1000px" , type: "Border" },
    { name: "" , id: "040" , cx: "1800px" , cy: "0px"    , type: "Border" }
  ],


  //39 edges
  edges: [
    //RAILROADS
    //Diagonal Lines
    { id1: "028" , id2: "000" , type: "Railroad" },
    { id1: "000" , id2: "005" , type: "Railroad" },
    { id1: "005" , id2: "019" , type: "Railroad" },
    { id1: "019" , id2: "029" , type: "Railroad" },

    //POWERLINES
    { id1: "023" , id2: "016" , type: "PowerLine" },
    { id1: "016" , id2: "000" , type: "PowerLine" },
    { id1: "000" , id2: "030" , type: "PowerLine" },
    { id1: "016" , id2: "001" , type: "PowerLine" },
    { id1: "001" , id2: "006" , type: "PowerLine" },
    { id1: "006" , id2: "018" , type: "PowerLine" },
    { id1: "018" , id2: "005" , type: "PowerLine" },
    { id1: "005" , id2: "032" , type: "PowerLine" },
    { id1: "001" , id2: "010" , type: "PowerLine" },
    { id1: "010" , id2: "002" , type: "PowerLine" },
    { id1: "002" , id2: "012" , type: "PowerLine" },
    { id1: "006" , id2: "027" , type: "PowerLine" },
    { id1: "002" , id2: "027" , type: "PowerLine" },
    { id1: "022" , id2: "007" , type: "PowerLine" },
    { id1: "007" , id2: "015" , type: "PowerLine" },

    //ROADS
    // Vertical Lines
    { id1: "034" , id2: "017" , type: "Road" },
    { id1: "017" , id2: "001" , type: "Road" },
    { id1: "001" , id2: "006" , type: "Road" },
    { id1: "006" , id2: "007" , type: "Road" },
    { id1: "007" , id2: "035" , type: "Road" },

    { id1: "036" , id2: "002" , type: "Road" },
    { id1: "002" , id2: "021" , type: "Road" },
    { id1: "021" , id2: "008" , type: "Road" },
    { id1: "008" , id2: "037" , type: "Road" },

    { id1: "038" , id2: "011" , type: "Road" },
    { id1: "011" , id2: "003" , type: "Road" },
    { id1: "003" , id2: "013" , type: "Road" },
    { id1: "013" , id2: "014" , type: "Road" },
    { id1: "014" , id2: "009" , type: "Road" },
    { id1: "009" , id2: "039" , type: "Road" },

    // Horizontal Lines
    { id1: "030" , id2: "000" , type: "Road" },
    { id1: "000" , id2: "016" , type: "Road" },
    { id1: "016" , id2: "001" , type: "Road" },
    { id1: "001" , id2: "010" , type: "Road" },
    { id1: "010" , id2: "002" , type: "Road" },
    { id1: "002" , id2: "003" , type: "Road" },
    { id1: "003" , id2: "012" , type: "Road" },
    { id1: "012" , id2: "004" , type: "Road" },
    { id1: "004" , id2: "031" , type: "Road" },

    { id1: "032" , id2: "005" , type: "Road" },
    { id1: "005" , id2: "018" , type: "Road" },
    { id1: "018" , id2: "006" , type: "Road" },

    { id1: "007" , id2: "020" , type: "Road" },
    { id1: "020" , id2: "008" , type: "Road" },
    { id1: "008" , id2: "009" , type: "Road" },
    { id1: "009" , id2: "015" , type: "Road" },
    { id1: "015" , id2: "033" , type: "Road" },

    // Access Points
    //power station
    { id1: "016" , id2: "023" , type: "Road" },
    { id1: "017" , id2: "023" , type: "Road" },
    //train station
    { id1: "018" , id2: "022" , type: "Road" },
    { id1: "019" , id2: "022" , type: "Road" },
    //coffee shop
    { id1: "010" , id2: "024" , type: "Road" },
    //hospital
    { id1: "011" , id2: "025" , type: "Road" },
    { id1: "012" , id2: "025" , type: "Road" },
    //USM
    { id1: "020" , id2: "027" , type: "Road" },
    { id1: "021" , id2: "027" , type: "Road" },
    //middle school
    { id1: "013" , id2: "026" , type: "Road" },
    { id1: "014" , id2: "026" , type: "Road" },
    { id1: "015" , id2: "026" , type: "Road" }
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
    //drawing roads
    if(currentGraph.edges[i].type == "PowerLine"){
      var edgeEle = document.createElementNS("http://www.w3.org/2000/svg", "line"),
          edgeEleId = "edge" + currentGraph.edges[i].id1 + "" + currentGraph.edges[i].id2,
          edgeEleClass1 = currentGraph.edges[i].id1 + "edge",
          edgeEleClass2 = currentGraph.edges[i].id2 + "edge";

      edgeEle.setAttribute("id", edgeEleId);
      edgeEle.classList.add("edge", edgeEleClass1, edgeEleClass2);
      edgeEle.setAttribute("x1", parseInt(currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id1]].cx) - 15);
      edgeEle.setAttribute("y1", parseInt(currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id1]].cy) - 15);
      edgeEle.setAttribute("x2", parseInt(currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id2]].cx) - 15);
      edgeEle.setAttribute("y2", parseInt(currentGraph.nodes[currentGraph.idToIndex[currentGraph.edges[i].id2]].cy) - 15);
      edgeEle.style.stroke = "rgb(255, 127, 0)";

      svg.appendChild(edgeEle);
    }
    else if(currentGraph.edges[i].type == "Railroad"){
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
      edgeEle.setAttribute("stroke-dasharray", "25,15");

      svg.appendChild(edgeEle);
    }
    else{
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

    //draws power stations
    else if(currentGraph.nodes[i].type == "PowerStation"){
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
      nodeShape.setAttribute("width", "140");
      nodeShape.setAttribute("height", "140");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }

    //draws train stations
    else if(currentGraph.nodes[i].type == "TrainStation"){
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
      nodeShape.setAttribute("width", "140");
      nodeShape.setAttribute("height", "70");
      nodeShape.setAttribute("stroke", "rgb(0, 0, 0)");
      nodeShape.setAttribute("stroke-width", "3");
      nodeShape.setAttribute("fill", "rgb(255, 255, 255)");
    }

    //draws businesses
    else if(currentGraph.nodes[i].type == "Business"){
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
