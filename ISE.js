javascript: (function() {

  function getColumn(col) {
    //var tab = document.getElementById(table_id);
    var path='//*[@id="historicalData"]/table';
    var tab = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var n = tab.rows.length;
    var i, s = null, tr, td;

    var arr=[];

    // First check that col is not less then 0
    if (col < 0) {
        return null;
    }

    for (i = 0; i < n; i++) {
        tr = tab.rows[i];
        if (tr.cells.length > col) { // Check that cell exists before you try
            td = tr.cells[col];      // to access it.
            s += ' ' + td.innerText;
            arr.push(td.innerText);
        } // Here you could say else { return null; } if you want it to fail
          // when requested column is out of bounds. It depends.
    }
    return arr;
  }




  document.getElementById("symbol").value="TATAPOWER";
  document.getElementById("dateRange").selectedIndex="5";
  document.getElementById("get").click();


  var custom_array = getColumn(13);
  concole.log(custom_array);

  //*[@id="historicalData"]






})();
