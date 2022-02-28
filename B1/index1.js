function createTable(){
    let row = document.getElementById('row');
    let column = document.getElementById('column');
    let container = document.getElementById('container');
    let countRow = parseInt(row.value);
    let countColumn = parseInt(column.value);
    let tagTable = document.createElement('table');
    tagTable.border = 1;
    for (let i = 0; i < countRow; i++){
        let tagRow = document.createElement('tr');
        tagTable.appendChild(tagRow);
        for (let j = 0; j < countColumn; j++){
            let tagColumn = document.createElement('td');
            tagRow.appendChild(tagColumn);
        }
    }
    container.appendChild(tagTable);

}