var editor = $(parent.document.body)

editor.find("div").css({background:"black"})
var topbar = $(parent.parent.document.body).find("#topbar")
topbar.css({background: "grey"})
topbar.append("<div></div>")
//
var nukerussia = $(parent.parent.document.body).find("#topbar:nth-child(4)")
nukerussia.html("CLICK THIS TO NUKE RUSSIA")
var allDivsInTheEditor = editor.find("div")



// Now try to
// 1. add a button to the topbar
// 2. change the title above the file list
// 3. change some borders in the editor
// 4. Make all this happen when a button is clicked