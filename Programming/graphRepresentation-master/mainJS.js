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







//setting the color for the node
function setColor(nodeId, val) {
  var menu = document.getElementById("node" + nodeId + "Menu");
  var node = document.getElementById("node" + nodeId);
  menu.firstElementChild.innerHTML = "Status: " + theme.levelNam[val];
  currentGraph.nodeStates[nodeId] = val;
  node.setAttribute("fill", theme.nodeFill[val]);
  node.setAttribute("stroke", theme.nodeBord[val]);
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

    //actually drawing the nodes and choosing the color
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

      nodeEle.setAttribute("r", "35");
      if((menuId%3) == 0){
      nodeEle.setAttribute("rx", "50");
      nodeEle.setAttribute("ry", "25");
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
  var par = node.parentElement;
  var text = node.nextElementSibling;
  par.addEventListener("mouseover", function() {
    node.setAttribute("r","45");

    if((nodeId%3) == 0){
    node.setAttribute("rx", "70");
    node.setAttribute("ry", "35");
  }

    node.setAttribute("width", "90");
    node.setAttribute("height", "90");
    text.style.fontSize = "65px";
    text.style.transform = "translateY(21px)";
  });

  var menu = document.getElementById(node.id + "Menu");
  menu.style.visibility = "hidden";
  par.addEventListener("mouseout", function() {
    if(menu.style.visibility == "hidden") {
      node.setAttribute("r", "35");

      if((nodeId%3) == 0){
      node.setAttribute("rx", "50");
      node.setAttribute("ry", "25");
    }
      node.setAttribute("width", "70");
      node.setAttribute("height", "70");
      text.style.fontSize = "40px";
      text.style.transform = "translateY(12px)";
    }
  });
  par.addEventListener("click", function() {
    if(menu.style.visibility == "hidden") {
      menu.style.visibility = "visible";
    } else {
      menu.style.visibility = "hidden";
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
