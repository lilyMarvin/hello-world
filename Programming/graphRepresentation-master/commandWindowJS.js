var commands = [
  { name: "help",
    numArgs: [0, 1],
    error: "Failed to get help",
    help: "Returns either a list of all commands<br>   or details of a given command",
    handler: function(args) {
      if (args.length == 1) {
        var returnString = "Available commands: ",
            lengthSinceBr = returnString.length;
        for (var i = 0; i < commands.length; i++) {
          if (lengthSinceBr + commands[i].name.length > 45) {
            returnString += "<br>";
            lengthSinceBr = commands[i].name.length + 2;
          } else {
            lengthSinceBr += commands[i].name.length + 2;
          }
          returnString += commands[i].name;
          if (i < commands.length - 1) { returnString += ", " };
        }
        return returnString;
      } else {
        for (var i = 0; i < commands.length; i++) {
          if (commands[i].name.toLowerCase() == args[1].toLowerCase()) {
            var returnString = args[1] + ": " + commands[i].help;
            return returnString;
          }
        }
        return "Could not find command: '" + args[1] + "'";
      }
    }
  },

  { name: "exit",
    numArgs: [0],
    error: "Command failed: exit'",
    help: "Exits command window",
    handler: function(args) {
      exitCommandWindow();
    }
  },

  { name: "clear",
    numArgs: [0],
    error: "Command failed: clear",
    help: "Clears",
    handler: function(args) {
      var outputWindow = document.getElementById("outputText");
      outputWindow.innerHTML = "";
    }
  },

  { name: "loadgraph",
    numArgs: [1],
    error: "Command failed: loadgraph [graph]",
    help: "Loads given graph<br>   loadgraph [graph]",
    handler: function(args) {
      var graphArr = graphDict, i = 0, cg;
      for (; i < graphArr.length; i++) {
        if (args[1].toLowerCase() == graphArr[i].name.toLowerCase()) {
          cg = graphArr[i].g;
          break;
        }
      }
      if (i == graphArr.length) { return "Graph '" + args[1] + "' not found"; };
      setGraph(cg);
      setTheme(theme);
      initializeListeners();
      return "Graph Loaded: " + graphArr[i].name;
    }
  },

  { name: "add",
    numArgs: [3, 4],
    error: "Command failed: add",
    help: "Adds an element with given parameters<br>   add node [name] [x] [y]<br>   add edge [node1 id] [node2 id]",
    handler: function(args) {
      if (args[1].toLowerCase() == "node") {
        var cg = currentGraph,
                 nodeAdd = {},
                 nodeIdStr, nodeIdInt, nameVal, argX, argY;
        nodeIdStr = cg.nodes[cg.nodes.length - 1].id;
        nodeIdInt = parseInt(nodeIdStr);

        if (nodeIdInt == 999 || nodeIdStr.length > 3) { return "add node error: node limit reached"; };
        nodeIdInt++;
        nodeIdStr = "" + nodeIdInt;
        while (nodeIdStr.length < 3) { nodeIdStr = "0" + nodeIdStr; }
        nameVal = args[2];

        var err = "";

        argX = parseInt(args[3]);
        if (isNaN(argX)) {
          err += "<br>  '" + args[3] + "' is not a valid integer";
        } else if (argX > 100 || argX < 0) {
          err += "<br>  '" + args[3] + "' is out of bounds [0,100]";
        }
        argX += "%";

        argY = parseInt(args[4]);
        if (isNaN(argY)) {
          err += "<br>  '" + args[4] + "' is not a valid integer";
        } else if (argY > 100 || argY < 0) {
          err += "<br>  '" + args[4] + "' is out of bounds [0,100]";
        }
        argY += "%";

        if (err) {
          err = "add node value error:" + err;
          return err;
        }

        nodeAdd.name = nameVal;
        nodeAdd.id = nodeIdStr;
        nodeAdd.value = "";
        nodeAdd.cx = argX;
        nodeAdd.cy = argY;
        cg.nodes.push(nodeAdd);

        setGraph(cg);
        setTheme(theme);
        initializeListeners();

        return "Node Added: { name:\"" + args[2] + "\", id:" + nodeIdStr + " }";
      } else if (args[1].toLowerCase() == "edge") {
        var cg = currentGraph,
            edgeAdd = {},
            err = "",
            node1Id, node2Id, node1Found, node2Found;

        if (args[2] == args[3]) { return "add edge error: edges cannot be reflexive" }

        for (var i = 0; i < cg.edges.length; i++) {
          if ((args[2] == cg.edges[i].id1 || args[2] == cg.edges[i].id2)
              && (args[3] == cg.edges[i].id1 || args[3] == cg.edges[i].id1)) {
            return "add edge error: edge already exists";
          }
        }

        for (var i = 0; i < cg.nodes.length; i++) {
          if (cg.nodes[i].id == args[2]) { node1Found = 1 }
          if (cg.nodes[i].id == args[3]) { node2Found = 1 }
        }

        if (!node1Found) { return "add edge error: no node with id \"" + args[2] + "\""; }
        if (!node2Found) { return "add edge error: no node with id \"" + args[3] + "\""; }

        edgeAdd.id1 = args[2];
        edgeAdd.id2 = args[3];

        cg.edges.push(edgeAdd);
        setGraph(cg);
        setTheme(theme);
        initializeListeners();

        return "Edge Added: { id1:" + args[2] + ", id2:" + args[3] + " }";
      } else {
        return "Invalid element type: '" + args[1] + "'";
      }
    }
  },

  { name: "remove",
    numArgs: [2, 3, 4],
    error: "Command failed: remove",
    help: "Removes specified element<br>   remove node [node id] [graph]<br>   remove edge [node1 id] [node2 id] [graph]",
    handler: function(args) {
      if (args[1].toLowerCase() == "node") {
        var graphIn, graphName;
        if (args.length == 4) {
          var graphNotFound = 1,
              i = 0;
          for (; i < graphDict.length; i++) {
            if (graphDict[i].name.toLowerCase() == args[3].toLowerCase()) {
              graphNotFound = 0;
              break;
            }
          };

          if (graphNotFound) {
            return "Graph '" + args[3] + "' does not exist.";
          }

          graphIn = graphDict[i].g;
          graphName = graphDict[i].name;
        } else {
          graphIn = currentGraph;
          graphName = "currentGraph";
        }

        var intId = parseInt(args[2]);
        if (args[2].length != 3 || isNaN(intId) || intId < 0) {
          return "remove node error: invalid id: '" + args[2] + "'";
        } else if (typeof graphIn.idToIndex[args[2]] == "undefined") {
          return "remove node error: no node with id '" + args[2] + "'";
        }

        graphIn.nodes.splice(graphIn.idToIndex[args[2]], 1);
        var edgeIter = 0;
        while (edgeIter < graphIn.edges.length) {
          if (graphIn.edges[edgeIter].id1 == args[2] || graphIn.edges[edgeIter].id2 == args[2]) {
            graphIn.edges.splice(edgeIter, 1);
          } else {
            edgeIter++;
          }
        }

        var nodeMenu = document.getElementById("node" + args[2] + "Menu");
        nodeMenu.parentNode.removeChild(nodeMenu);

        var node = document.getElementById("node" + args[2]).parentNode;
        node.parentNode.removeChild(node);

        var respEdges = document.getElementsByClassName(args[2] + "edge");
        while (respEdges[0]) {
          respEdges[0].parentNode.removeChild(respEdges[0]);
        }

        return "Node " + args[2] + " and respesctive edges removed";
      } else if (args[1].toLowerCase() == "edge") {

        var graphIn, graphName;
        if (args.length == 5) {
          var graphNotFound = 1,
              i = 0;
          for (; i < graphDict.length; i++) {
            if (graphDict[i].name.toLowerCase() == args[4].toLowerCase()) {
              graphNotFound = 0;
              break;
            }
          };

          if (graphNotFound) {
            return "Graph '" + args[4] + "' does not exist.";
          }

          graphIn = graphDict[i].g;
          graphName = graphDict[i].name;
        } else {
          graphIn = currentGraph;
          graphName = "currentGraph";
        }

        var intId = parseInt(args[2]);
        if (args[2].length != 3 || isNaN(intId) || intId < 0) {
          return "remove edge error: invalid id: '" + args[2] + "'";
        }

        intId = parseInt(args[3]);
        if (args[3].length != 3 || isNaN(intId) || intId < 0) {
          return "remove edge error: invalid id: '" + args[3] + "'";
        }

        var edgeIter = 0, edge1, edge2;
        while (edgeIter < graphIn.edges.length) {
          if ((graphIn.edges[edgeIter].id1 == args[2] && graphIn.edges[edgeIter].id2 == args[3])
              || (graphIn.edges[edgeIter].id2 == args[2] && graphIn.edges[edgeIter].id1 == args[3])) {
            edge1 = graphIn.edges[edgeIter].id1;
            edge2 = graphIn.edges[edgeIter].id2;
            graphIn.edges.splice(edgeIter, 1);
            break;
          }
          i++;
        }

        if (edgeIter == graphIn.edges.length) { return "No edges exists between " + args[2] + " and " + args[3]; }

        var edgeElement = document.getElementById("edge" + edge1 + edge2);
        edgeElement.parentNode.removeChild(edgeElement);

        console.log("hi mom");
        return "Edge between " + args[2] + " and " + args[3] + " removed";

      } else {
        return "remove error: invalid element type: '" + args[1] + "'";
      }
    }
  },

  { name: "get",
    numArgs: [1, 2, 3],
    error: "Command failed: get [edges/nodes/node/graphs]",
    help: "Returns specified values of current or <br>specified graph<br>" +
      "   get edges [graph]<br>   get graphs<br>   get node [node name] [graph]<br>   get nodes [graph]",
    handler : function(args) {
      if (args[1].toLowerCase() == "edges") {
        var graphIn, graphName;
        if (args.length == 3) {
          var graphNotFound = 1,
              i = 0;
          for (; i < graphDict.length; i++) {
            if (graphDict[i].name.toLowerCase() == args[2].toLowerCase()) {
              graphNotFound = 0;
              break;
            }
          };

          if (graphNotFound) {
            return "Graph '" + args[2] + "' does not exist.";
          }

          graphIn = graphDict[i].g;
          graphName = graphDict[i].name;
        } else {
          graphIn = currentGraph;
          graphName = "currentGraph";
        }

        var returnString = "Edges for " + graphName,
            argEdges, name1, name2;
        if (!graphIn) { return "Graph '" + graphName + "' is null"; }
        argEdges = graphIn.edges;
        if (!graphIn.edges) { return "Graph '" + graphName + "' has no edges"}
        returnString += ", " + argEdges.length + " total:<br>";

        for (var j = 0; j < argEdges.length; j++) {
          name1 = graphIn.nodes[graphIn.idToIndex[argEdges[j].id1]].name;
          name2 = graphIn.nodes[graphIn.idToIndex[argEdges[j].id2]].name;
          returnString += "    { (\"" + name1 + "\", " + argEdges[j].id1 + ") to (\"" + name2 + "\", " + argEdges[j].id2 + ") }<br>";
        }

        return returnString;

      } else if (args[1].toLowerCase() == "nodes") {
        var graphIn, graphName;

        if (args.length == 3) {
          var graphNotFound = 1,
              i = 0;
          for (; i < graphDict.length; i++) {
            if (graphDict[i].name.toLowerCase() == args[2].toLowerCase()) {
              graphNotFound = 0;
              break;
            }
          }

          if (graphNotFound) {
            return "Graph '" + args[2] + "' does not exist.";
          }

          graphIn = graphDict[i].g;
          graphName = graphDict[i].name;
        } else {
          graphIn = currentGraph;
          graphName = "currentGraph";
        }

        var returnString = "Nodes for " + graphName,
            argNodes;
        if (!graphIn) { return "Graph '" + graphName + "' is null"; };
        argNodes = graphIn.nodes;
        if (!graphIn.nodes) { return "Graph '" + graphName + "' has no nodes"}
        returnString += ", " + argNodes.length + " total:<br>"
        for (var j = 0; j < argNodes.length; j++) {
          returnString += "   { name:\"" + argNodes[j].name + "\", id:" + argNodes[j].id + ", cx:"
            + argNodes[j].cx.substr(0, 2) + ", cy:" + argNodes[j].cy.substr(0, 2) + " }<br>";
        }

        return returnString;

      } else if (args[1].toLowerCase() == "node") {
        var graphIn, graphName, foundNodes = [];;
        if (args.length == 4) {
          var graphNotFound = 1,
              i = 0;
          for (; i < graphDict.length; i++) {
            if (graphDict[i].name.toLowerCase() == args[3].toLowerCase()) {
              graphNotFound = 0;
              break;
            }
          }

          if (graphNotFound) {
            return "Graph '" + args[3] + "' does not exist.";
          }

          graphIn = graphDict[i].g;
          graphName = graphDict[i].name;
        } else {
          graphIn = currentGraph;
          graphName = "currentGraph";
        }

        for (var i = 0; i < graphIn.nodes.length; i++) {
          if (graphIn.nodes[i].name == args[2]) {
            foundNodes.push(graphIn.nodes[i]);
          }
        }

        switch (foundNodes.length) {
          case 0:
            return "No nodes found with name '" + args[2] + "'";
          case 1:
            return "Node '" + args[2] + "' in " + graphName + ":<br>   { name:\"" + foundNodes[0].name + "\", id:" + foundNodes[0].id + ", cx:"
              + foundNodes[0].cx.substr(0, 2) + ", cy:" + foundNodes[0].cy.substr(0, 2) + " }";
          default:
            var returnString = "Nodes with name '" + args[2] + "' in " + graphName + ":"
            for (var i = 0; i < foundNodes.length; i++) {
              returnString += "<br>   { name:\"" + foundNodes[i].name + "\", id:" + foundNodes[i].id + ", cx:"
                + foundNodes[i].cx.substr(0, 2) + ", cy:" + foundNodes[i].cy.substr(0, 2) + " }";
            }
            return returnString;
        }

      } else if (args[1].toLowerCase() == "graphs") {
        var graphArr = graphDict, returnString = "Loaded graphs: ";
        for (var i = 0; i < graphArr.length; i++) {
          returnString += graphArr[i].name;
          if ( i < graphArr.length - 1) {
            returnString += ", "
          }
        }
        return returnString;
      } else {
        return "Invalid element type: '" + args[1] + "'";
      }
    }
  }
];

var prevCommands = [""];
var currIndex = 0;
function readInput() {
  var input = document.getElementById("cmdIn"),
      outWindow = document.getElementById("outputText"),
      val = input.value;

  // var output = commandHandler(rawInput);

  prevCommands[prevCommands.length - 1] = val;
  prevCommands.push("");
  currIndex = prevCommands.length - 1;
  var out = commandHandler(val);
  if (out) { outWindow.innerHTML = "<p>" + out + "</p>" + outWindow.innerHTML; };
  input.value = "";
}

function commandHandler(rawInput) {
  var args = rawInput.split(/\s+/),
      comIn;

  comIn = args[0].toLowerCase();
  for (var i = 0; i < commands.length; i++) {
    if (comIn == commands[i].name.toLowerCase()) {
      for (var a = 0; a < commands[i].numArgs.length; a++) {
        if (args.length - 1 == commands[i].numArgs[a] || (commands[i].numArgs.length == 1 && commands.numArgs[a] == 0)) {
          return commands[i].handler(args);
        }
      }
      return commands[i].error;
    }
  }
  return comIn + ": command not found";
}

function initializeCmd() {
  var input = document.getElementById("cmdIn");
  input.onkeydown = function(e) {
      if (e.keyCode == '38') {
        if(currIndex > 0) {
          currIndex--;
          input.value = prevCommands[currIndex];
        }
      } else if (e.keyCode == '40') {
        if (currIndex < prevCommands.length - 1) {
          currIndex++;
          input.value = prevCommands[currIndex];
        }
      }
  }

  var cmd = document.getElementById("cmdMovBar");
  cmd.onmousedown =  function(e) {
    movingCmd(e);
  };
  cmd.onmouseup =  function() {
    stopMovingCmd();
  };

  drawExitButton();
  var ext = document.getElementById("exitButton");
  ext.onclick = function() {
    exitCommandWindow();
  };
}

function moveCmd(x, y) {
  var cmd = document.getElementById("cmdWindow");
  cmd.style.left = x + "px";
  cmd.style.top = y + "px";
}

function movingCmd(e) {
  var x = e.clientX,
      y = e.clientY,
      cmd = document.getElementById("cmdWindow"),
      cmdWidth = parseInt(cmd.style.width),
      cmdHeight = parseInt(cmd.style.height),
      cmdTop = cmd.style.top.replace("px", ""),
      cmdLeft = cmd.style.left.replace("px", ""),
      winWidth = document.clientWidth,
      winHeight = document.clientHeight;
  var dispX = x - cmdLeft,
      dispY = y - cmdTop;

  window.onmousemove = function(ev) {
    var eX = ev.clientX,
        eY = ev.clientY,
        moveX = eX - dispX,
        moveY = eY - dispY;
    if (moveX < 0) { moveX = 0; };
    if (moveY < 0) { moveY = 0; };
    if (moveX + cmdWidth > winWidth) { moveX = winWidth - cmdWidth};
    if (moveY + cmdHeight > winHeight) { moveY = winHeight - cmdHeight};
    moveCmd(moveX, moveY);
  };
}

function stopMovingCmd() {
  window.onmousemove = function() {};
}

function exitCommandWindow() {
  var win = document.getElementById("cmdWindow");
  win.style.visibility = "hidden";
  win.style.top = "48px";
  win.style.left = "0px";
}

function drawExitButton() {
  var buttonCanvas = document.getElementById("exitButton");
  var cnv = buttonCanvas.getContext("2d");

  cnv.strokeStyle = "rgb(60, 60, 60)";
  cnv.lineWidth = 3.0;
  cnv.moveTo(4, 4);
  cnv.lineTo(16, 16);
  cnv.stroke();
  cnv.moveTo(16, 4);
  cnv.lineTo(4, 16);
  cnv.stroke();
}
