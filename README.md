# excel-reader-demo
Demo đoạn code sử dụng xlsx library để đọc file excel

## Code demo

```
const XLSX = require('xlsx');
const workbook = XLSX.readFile('names.xlsx')
const sheet_name_list = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
```

## Chạy

```
npm install
npm start
```

## Kết quả

```
> excel-draf@1.0.0 start D:\draf\excel-draf
> node index.js

[ { Serial: 'SN-091-OIUX-P918', Name: 'SG Device' },
  { Serial: 'SN-091-OIUX-P919', Name: 'HN Device' },
  { Serial: 'SN-091-OIUX-P920', Name: 'DN Device' } ]
```
