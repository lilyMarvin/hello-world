/*
  Main Javascript for the page, handles initialization of dynamic elements and manages most event listeners;

  Function overview:


 */

var currentGraph,
    theme,
    defaultGraph = testingGraph,
    defaultTheme = testingTheme;


function getCurrentGraph() {
  return currentGraph;
}

function getCurrentTheme() {
  return theme;
}

window.onload = function() {
  setGraph(defaultGraph);
  setTheme(defaultTheme);
  initializeListeners();
  initializeCmd();
  iconCanvas();
}

function initializeListeners() {
  var nodeList = document.getElementsByClassName("node");
  for (var i = 0; i < nodeList.length; i++) {
    addNodeHover(i, nodeList[i]);
  }

  var menuButtonList = document.getElementsByClassName("menuButton");
  for (var i = 0; i < menuButtonList.length; i++) {
    addMenuButtonHover(menuButtonList[i]);
  }

    // "RESOURCES" DROPDOWN
  // "Reset" Button
  document.getElementById("resetButton").addEventListener("click", function() {
    resetToDefault();
  });
  // "Command Window" Button
  document.getElementById("cmdButton").addEventListener("click", function() {
    document.getElementById("cmdWindow").style.visibility = "visible";
  });
  // "Toggle Edges" Button
  document.getElementById("toggleEdgesButton").addEventListener("click", function() {
        toggleEdges();
  });




    // "THEMES" DROPDOWN
  // "Default" Theme Button
  document.getElementById("setDefaultTheme").addEventListener("click", function() {
    setTheme(defaultTheme);
  });
  // "Blue" Theme Button
  document.getElementById("setBlueTheme").addEventListener("click", function() {
    setTheme(blueTheme);
  });
  // "Clear" Theme Button
  document.getElementById("setClearTheme").addEventListener("click", function() {
    setTheme(clearTheme);
  });
}




//toggling the edges
function toggleEdges() {
  var edges = document.getElementsByClassName("edge");
    for (var i = 0; i < edges.length; i++) {
      if(edges[i].style.visibility == "hidden") {
        edges[i].style.visibility = "visible";
      }
      else {
        edges[i].style.visibility = "hidden";
      }
    }
}


//setting the color for the node
function setColor(nodeId, val) {
  var menu = document.getElementById("node" + nodeId + "Menu");
  var node = document.getElementById("node" + nodeId);
  menu.firstElementChild.innerHTML = "Status: " + theme.levelNam[val];
  currentGraph.nodeStates[nodeId] = val;

  //switch statement to set color
  if (node.type == "Intersection") {
    node.setAttribute("fill", "rgb(255,0,0)");
    node.setAttribute("stroke", "rgb(0,0,0)");
  }
  else if (node.type == "Border"){
      node.setAttribute("fill", "rgb(0,255,0)");
      node.setAttribute("stroke", "rgb(0,0,0)");
    }
    else if (node.type == "AccessPoint"){
      node.setAttribute("fill", "rgb(0,0,255)");
      node.setAttribute("stroke", "rgb(0,0,0)");
    }
    else{
      node.setAttribute("fill", "rgb(175,175,175)");
      node.setAttribute("stroke", "rgb(0,0,0)");
    }

  node.nextElementSibling.setAttribute("fill", theme.fontFill[val]);

  setAdjEdgeColors(nodeId, val);
}


//sets the colors for the node's adjacent edges
function setAdjEdgeColors(nodeId, colorPri) {
  var edges = document.getElementsByClassName(nodeId + "edge"),
      otherNodeId, otherNodePri;

  for (var i = 0; i < edges.length; i++) {
    //finding the other node's id number
    if(edges[i].id.substr(4,3) == nodeId){
      otherNodeId = edges[i].id.substr(7,3);
    }
    else{
      otherNodeId = edges[i].id.substr(4,3);
    }
    //setting otherNodePri depending on the color of that node
    switch (currentGraph.nodeStates[otherNodeId]) {
      case 2 :
        otherNodePri = 2;
        break;
      case 1 :
        otherNodePri = 1;
        break;
      default:
        otherNodePri = 0;
        break;
    }
    //setting pattern
    if((colorPri == 1 && colorPri > otherNodePri) || (otherNodePri == 1 && otherNodePri > colorPri)){
      edges[i].setAttribute("stroke-dasharray", "10,5");
      }
    else if((colorPri == 2 && colorPri > otherNodePri) || (otherNodePri == 2 && otherNodePri > colorPri)){
      edges[i].setAttribute("stroke-dasharray", "100,10");
      }
    else{
      edges[i].setAttribute("stroke-dasharray", "0,0");
    }
    //setting the color
    edges[i].style.stroke = theme.edgeFill[Math.max(colorPri, otherNodePri)];
  }
}



//resets everything to its default
function resetToDefault() {
  var nodes = document.getElementsByClassName("node");
  for (var i = 0; i < nodes.length; i++) {
    setColor(nodes[i].id.substr(4,3), 0);
  }

  var menus = document.getElementsByClassName("menu");
  for (var i = 0; i < menus.length; i++) {
    if(menus[i].style.visibility == "visible") {
      menus[i].style.visibility = "hidden";
      var menuId = menus[i].id.substr(4,3);
      var nodeEle = document.getElementById("node" + menuId);

      if(currentGraph.nodes[i].type == "Intersection"){
      nodeEle.setAttribute("r", "35");
      }
      if(currentGraph.nodes[i].type == "Border"){
      nodeEle.setAttribute("r", "15");
      }
      else{
      nodeEle.setAttribute("r", "25");
      }

      nodeEle.setAttribute("width", "70");
      nodeEle.setAttribute("height", "70");

      nodeEle.nextElementSibling.style.fontSize = "40px";
      nodeEle.nextElementSibling.style.transform = "translateY(12px)";
    }
  }
}


//makes the nodes change size during/after mouseover
function addNodeHover(nodeId, node) {
  var par = node.parentElement,
      // text = node.nextElementSibling,
      incVal = 10; // Value that hovering will change the size of the element by\
      var menu = document.getElementById(node.id + "Menu");

  par.addEventListener("mouseover", function() {
    if(menu.style.visibility != "visible") {
      if (currentGraph.nodes[nodeId].type == "AccessPoint" || currentGraph.nodes[nodeId].type == "Intersection" || currentGraph.nodes[nodeId].type == "Border") {
        node.setAttribute("r", parseInt(node.getAttribute("r")) + incVal);
      }
      else {
        var width = parseInt(node.getAttribute("width"));
        node.setAttribute("x", parseInt(node.getAttribute("x")) - incVal);
        node.setAttribute("y", parseInt(node.getAttribute("y")) - incVal);
        node.setAttribute("height", width + 2 * incVal);
        node.setAttribute("width", width + 2 * incVal);
      }
      // text.style.fontSize = "65px";
      // text.style.transform = "translateY(21px)";
    }
  });

  par.addEventListener("mouseout", function() {
    if(menu.style.visibility != "visible") {
      if (currentGraph.nodes[nodeId].type == "AccessPoint" || currentGraph.nodes[nodeId].type == "Intersection" || currentGraph.nodes[nodeId].type == "Border") {
        node.setAttribute("r", parseInt(node.getAttribute("r")) - incVal);
      }
      else {
        var width = parseInt(node.getAttribute("width"));
        node.setAttribute("x", parseInt(node.getAttribute("x")) + incVal);
        node.setAttribute("y", parseInt(node.getAttribute("y")) + incVal);
        node.setAttribute("height", width - 2 * incVal);
        node.setAttribute("width", width - 2 * incVal);
      }
      // text.style.fontSize = "40px";
      // text.style.transform = "translateY(12px)";
    }
  });

  par.addEventListener("click", function() {
    if(menu.style.visibility == "visible") {
      menu.style.visibility = "hidden";
    } else {
      menu.style.visibility = "visible";
    }
  });
}



//changes the color of the node menu buttons
function addMenuButtonHover(menuButton) {
  menuButton.addEventListener("mouseover", function() {
    menuButton.style.backgroundColor = theme.menuColo.buttonHover;
  });
  menuButton.addEventListener("mouseout", function() {
    menuButton.style.backgroundColor = theme.menuColo.button;
  });
}



function checkFast() {
  var svg = document.getElementById("svgBody");
  var input = document.getElementById("searchInput");
  var inputVal = input.value.toUpperCase();
  if(inputVal.indexOf("GO") != -1 && inputVal.indexOf("FAST") != -1) {
    svg.style.backgroundImage = "url(http://vignette4.wikia.nocookie.net/sonic/images/7/7d/Spin_Attack_in_Sonic_Generations.png/revision/latest?cb=20160108144808), radial-gradient(white, pink, purple)";
  } else {
    svg.style.backgroundImage = "";
  }
  input.value = "";
}

function iconCanvas() {
  var iconCanvas = document.getElementById("ohNo");
  var cnv = iconCanvas.getContext("2d");

  cnv.strokeStyle="#b3ccb3";
  cnv.shadowBlur = 8;
  cnv.shadowColor = "black";
  cnv.shadowOffsetX = 2;
  cnv.shadowOffsetY = 2;

  cnv.beginPath();
  cnv.linewidth = 4;
  cnv.arc(24,20,14,0,2*Math.PI);
  cnv.strokeStyle="#b3ccb3";
  cnv.stroke();

  cnv.beginPath();
  cnv.arc(24,20,13,0,2*Math.PI);
  cnv.fillStyle="#f9fbf9";
  cnv.fill();

  cnv.shadowBlur = 3;
  cnv.shadowColor="#666";
  cnv.shadowOffsetX = 1;
  cnv.shadowOffsetY = 1;
  cnv.font ="Italic 22px 'Courier'";
  cnv.fillStyle ="#000";
  cnv.fillText('B', 17.5, 26.5);
}

var navOn = false;
function toggleNav() {
    document.getElementById("openButton").classList.toggle("active");
  if (navOn) {
    document.getElementById("accBar").style.transform = "translateX(-100%)";
    navOn = false;
  } else {
    document.getElementById("accBar").style.transform = "translateX(0%)";
    navOn = true;
  }
}

function drop(ele) {
  ele.classList.toggle("active");
  ele.nextElementSibling.classList.toggle("active");
}

// File To Store Graphs, ID VALUES MUST BE EXACTLY 3 CHARACTERS LONG
