var csInterface = new CSInterface();

var setColumnBtn = window.document.getElementById("setColumn");

setColumnBtn.onclick = function() {
    
    var col = window.document.getElementById("number").value;
    
    if (col == "") {
        col = 1;
        window.document.getElementById("number").value = 1;
    }
    
    var colg = window.document.getElementById("gutter").value;
    
    if (colg == "") {
        colg = 0;
        window.document.getElementById("gutter").value = 0;
    }
    
    csInterface.evalScript('setColumn('+col+', '+colg+')');
}


