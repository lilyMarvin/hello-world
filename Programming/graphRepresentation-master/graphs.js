// File To Store Graphs, ID VALUES MUST BE A 3-DIGIT INT
var testingGraph = {
  //19 nodes, 10 intersections, 6 access points, 3 buildings
  nodes: [
    //level 1
    { name: "Intersection" , id: "000" , cx: "75px" , cy: "475px" },
    { name: "Intersection" , id: "001" , cx: "600px" , cy: "475px" },
    { name: "Intersection" , id: "002" , cx: "1200px" , cy: "475px" },
    { name: "Intersection" , id: "003" , cx: "1500px" , cy: "475px" },
    { name: "Intersection" , id: "004" , cx: "1800px" , cy: "475px" },
    //level 2
    { name: "Intersection" , id: "005" , cx: "150px" , cy: "650px" },
    { name: "Intersection" , id: "006" , cx: "600px" , cy: "650px" },
    //level 3
    { name: "Intersection" , id: "007" , cx: "600px" , cy: "900px" },
    { name: "Intersection" , id: "008" , cx: "1200px" , cy: "900px" },
    { name: "Intersection" , id: "009" , cx: "1500px" , cy: "900px" },

    //coffee shop
    { name: "AccessPoint" , id: "010" , cx: "700px" , cy: "475px" },
    //hospital
    { name: "AccessPoint" , id: "011" , cx: "1500px" , cy: "350px" },
    { name: "AccessPoint" , id: "012" , cx: "1600px" , cy: "475px" },
    //school
    { name: "AccessPoint" , id: "013" , cx: "1500px" , cy: "750px" },
    { name: "AccessPoint" , id: "014" , cx: "1500px" , cy: "825px" },
    { name: "AccessPoint" , id: "015" , cx: "1600px" , cy: "900px" },

    //coffee shop
    { name: "Building" , id: "016" , x: "665px" , y: "350px" },
    //hospital
    { name: "Building" , id: "017" , x: "1565px" , y: "320px" },
    //school
    { name: "Building" , id: "018" , x: "1565px" , y: "765px" }
  ],
  //28 edges
  edges: [
    //railroad    _I_I_
    { x1: "0px" , y1: "320px" , x2: "75px" , y2: "475px" },
    { x1: "75px" , y1: "475px" , x2: "150px" , y2: "650px" },
    { x1: "150px" , y1: "650px" , x2: "300px" , y2: "1000px" },
    //hstreet 1    _I_I_AC_I_I_AC_I_
    { x1: "0px" , y1: "475px" , x2: "75px" , y2: "475px" },
    { x1: "75px" , y1: "475px" , x2: "600px" , y2: "475px" },
    { x1: "600px" , y1: "475px" , x2: "700px" , y2: "475px" },
    { x1: "700px" , y1: "475px" , x2: "1200px" , y2: "475px" },
    { x1: "1200px" , y1: "475px" , x2: "1500px" , y2: "475px" },
    { x1: "1500px" , y1: "475px" , x2: "1600px" , y2: "475px" },
    { x1: "1600px" , y1: "475px" , x2: "1800px" , y2: "475px" },
    { x1: "1800px" , y1: "475px" , x2: "2000px" , y2: "475px" },
    //hstreet 2   _I_I
    { x1: "0px" , y1: "650px" , x2: "150px" , y2: "650px" },
    { x1: "150px" , y1: "650px" , x2: "600px" , y2: "650px" },
    //hstreet 3   I_I_I_AC_
    { x1: "600px" , y1: "900px" , x2: "1200px" , y2: "900px" },
    { x1: "1200px" , y1: "900px" , x2: "1500px" , y2: "900px" },
    { x1: "1500px" , y1: "900px" , x2: "1600px" , y2: "900px" },
    { x1: "1600px" , y1: "900px" , x2: "2000px" , y2: "900px" },
    //vstreet1    _I_I_I_
    { x1: "600px" , y1: "0px" , x2: "600px" , y2: "475px" },
    { x1: "600px" , y1: "475px" , x2: "600px" , y2: "600px" },
    { x1: "600px" , y1: "600px" , x2: "600px" , y2: "900px" },
    { x1: "600px" , y1: "900px" , x2: "600px" , y2: "1000px" },
    //vstreet2    _I_I_
    { x1: "1200px" , y1: "0px" , x2: "1200px" , y2: "475px" },
    { x1: "1200px" , y1: "475px" , x2: "1200px" , y2: "900px" },
    { x1: "1200px" , y1: "900px" , x2: "1200px" , y2: "1000px" },
    //vstreet3    _AC_I_AC_AC_I_
    { x1: "1500px" , y1: "0px" , x2: "1500px" , y2: "350px" },
    { x1: "1500px" , y1: "350px" , x2: "1500px" , y2: "475px" },
    { x1: "1500px" , y1: "475px" , x2: "1500px" , y2: "750px" },
    { x1: "1500px" , y1: "750px" , x2: "1500px" , y2: "825px" },
    { x1: "1500px" , y1: "825px" , x2: "1500px" , y2: "900px" },
    { x1: "1500px" , y1: "900px" , x2: "1500px" , y2: "1000px" },
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
    edgeEle.setAttribute("x1", currentGraph.edges[i].x1);
    edgeEle.setAttribute("y1", currentGraph.edges[i].y1);
    edgeEle.setAttribute("x2", currentGraph.edges[i].x2);
    edgeEle.setAttribute("y2", currentGraph.edges[i].y2);

    svg.appendChild(edgeEle);
  }





  // Adds node group elements and menus
  for (var i = 0; i < currentGraph.nodes.length; i++) {
    // Creates and appends node with text element
    //draws circles
    if(currentGraph.nodes[i].name == "Intersection"){
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

/*
    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;
    */

    nodeG.appendChild(nodeCircle);
    nodeG.appendChild(nodeText);

    svg.appendChild(nodeG);
  }
  //draws squares
  else if(currentGraph.nodes[i].name == "Building"){
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

/*
    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;
*/

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

/*
    //node text label
    nodeText.classList.add("nodeLabel");
    nodeText.setAttribute("x", currentGraph.nodes[i].cx);
    nodeText.setAttribute("y", currentGraph.nodes[i].cy);
    nodeText.setAttribute("fill", "rgb(0, 0, 0)");
    nodeText.innerHTML = currentGraph.nodes[i].name;
*/

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
