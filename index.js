function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function printPageArea(areaID) {
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

// printDivCSS = new String('<link href="style.css" rel="stylesheet" type="text/css">')

// function printDiv(divId) {
//     window.frames["print_frame"].document.body.innerHTML = printDivCSS + document.getElementById(divId).innerHTML;
//     window.frames["print_frame"].window.focus();
//     window.frames["print_frame"].window.print();
// }