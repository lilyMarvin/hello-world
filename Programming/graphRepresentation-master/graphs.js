// File To Store Graphs, ID VALUES MUST BE A 3-DIGIT INT
var testingGraph = {
  nodes: [
    { name: "A" , id: "000" , cx: "20%" , cy: "25%" , x: "17.75%" , y: "20%" },
    { name: "B" , id: "001" , cx: "75%" , cy: "20%" , x: "72.75%" , y: "15%" },
    { name: "C" , id: "002" , cx: "50%" , cy: "45%" , x: "47.75%" , y: "40%" },
    { name: "D" , id: "003" , cx: "25%" , cy: "65%" , x: "22.75%" , y: "60%" },
    { name: "E" , id: "004" , cx: "65%" , cy: "75%" , x: "62.75%" , y: "70%" },
    { name: "F" , id: "005" , cx: "85%" , cy: "60%" , x: "82.75%" , y: "55%" }
  ],
  edges: [
    { id1: "000" , id2: "001" },
    { id1: "001" , id2: "002" },
    { id1: "001" , id2: "004" },
    { id1: "001" , id2: "005" },
    { id1: "002" , id2: "003" },
    { id1: "002" , id2: "004" },
    { id1: "003" , id2: "005" }
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
  {name: "twoGraph",     g: twoGraph},
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
    // edgeEle.setAttribute("value", currentGraph.edges[i].value);
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
    //draws circles
    if((i%3) == 2){
    //creating the node
    var nodeCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        nodeId = "node" + currentGraph.nodes[i].id;
        nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

    //the node's attributes
    nodeCircle.setAttribute("id", nodeId);
    nodeCircle.classList.add("node");
    nodeCircle.setAttribute("cx", currentGraph.nodes[i].cx);
    nodeCircle.setAttribute("cy", currentGraph.nodes[i].cy);
    nodeCircle.setAttribute("r", "35");
    nodeCircle.setAttribute("stroke", "rgb(0, 0, 0)");
    nodeCircle.setAttribute("stroke-width", "3");
    nodeCircle.setAttribute("fill", "rgb(255, 255, 255)");

    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;

    nodeG.appendChild(nodeCircle);
    nodeG.appendChild(nodeText);

    svg.appendChild(nodeG);
  }
  //draws squares
  else if((i%3) ==1){
    //creating the node
    var nodeRect = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
        nodeId = "node" + currentGraph.nodes[i].id;
        nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

    //the node's attributes
    nodeRect.setAttribute("id", nodeId);
    nodeRect.classList.add("node");
    nodeRect.setAttribute("x", currentGraph.nodes[i].x);
    nodeRect.setAttribute("y", currentGraph.nodes[i].y);
    nodeRect.setAttribute("width", "70");
    nodeRect.setAttribute("height", "70");
    nodeRect.setAttribute("stroke", "rgb(0, 0, 0)");
    nodeRect.setAttribute("stroke-width", "3");
    nodeRect.setAttribute("fill", "rgb(255, 255, 255)");

    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;

    nodeG.appendChild(nodeRect);
    nodeG.appendChild(nodeText);

    svg.appendChild(nodeG);
  }
  //draws ellipses
  else{
    //creating the node
    var nodeEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse"),
        nodeId = "node" + currentGraph.nodes[i].id;
        nodeText = document.createElementNS("http://www.w3.org/2000/svg", "text"),
        nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");

    //the node's attributes
    nodeEllipse.setAttribute("id", nodeId);
    nodeEllipse.classList.add("node");
    nodeEllipse.setAttribute("cx", currentGraph.nodes[i].cx);
    nodeEllipse.setAttribute("cy", currentGraph.nodes[i].cy);
    nodeEllipse.setAttribute("rx", "50");
    nodeEllipse.setAttribute("ry", "25");
    nodeEllipse.setAttribute("stroke", "rgb(0, 0, 0)");
    nodeEllipse.setAttribute("stroke-width", "3");
    nodeEllipse.setAttribute("fill", "rgb(255, 255, 255)");

    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;

    nodeG.appendChild(nodeEllipse);
    nodeG.appendChild(nodeText);

    svg.appendChild(nodeG);
  }

    // Creates Menu Div Template
    var menuTemplate = document.createElement("div"),
        menuId = "node" + currentGraph.nodes[i].id + "Menu",
        innerP = document.createElement("p");
    innerP.innerHTML = "Status Uninitialized";
    menuTemplate.setAttribute("id", menuId);
    menuTemplate.classList.add("menu");
    menuTemplate.style.left = "calc(" + currentGraph.nodes[i].cx + " + 55px)";
    menuTemplate.style.top = "calc(" + currentGraph.nodes[i].cy + " - 15px)";
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
