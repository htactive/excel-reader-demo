const XLSX = require('xlsx');
const workbook = XLSX.readFile('names.xlsx')
const sheet_name_list = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))