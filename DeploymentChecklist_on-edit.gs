function onEdit(e){

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[ss.getSheetId()];
  var range = e.range;
  var activeRow = range.getRow();
  var activeCol = range.getColumn();

  //EDIT THESE PROPERTIES FOR SHEET
  var doneColumn = 1;  //Edit with "Done" Column in Spreadsheet, Columns start at 1 and go +1
  var inProgressColumn = "D"; //Edit with Actual Column for In Progress by column letter
  var completedColumn = "E";  //Edit with Actual Column for Modified by column letter
  var lastModifiedColumn = "F"; //Edit with Actual Column for Modified by column letter


  if(activeCol == doneColumn){
    if(range.getValue() != "x" && range.getValue() != "X" && range.getValue() != "?" && range.getValue() != ">"){
      ss.toast("Expected Values:x,?,>","Invalid Input",1);
    }

    if((range.getValue() == "x" || range.getValue() == "X") && sheet.getRange(completedColumn + activeRow).getValue() == ""){
      sheet.getRange(completedColumn + activeRow).setValue('Completed by: ' + e.user + "\n" + new Date());
    } else if(range.getValue() == ">" && sheet.getRange(inProgressColumn + activeRow).getValue() == ""){
      sheet.getRange(inProgressColumn + activeRow).setValue('In Progress: ' + e.user + "\n" + new Date());
    }
    sheet.getRange(lastModifiedColumn + activeRow).setValue('Last modified: ' + e.user + "\n" + new Date());
  }
}