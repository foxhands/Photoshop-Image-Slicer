#target photoshop  

// Функция разрезания изображения  
function sliceImage(rows, cols) {  
    var doc = app.activeDocument;  
    var docWidth = doc.width;  
    var docHeight = doc.height;  
    var sliceWidth = docWidth / cols;  
    var sliceHeight = docHeight / rows;  

    var folderPath = Folder.selectDialog("Выберите папку для сохранения");  
    if (!folderPath) return;  

    for (var y = 0; y < rows; y++) {  
        for (var x = 0; x < cols; x++) {  
            var xPos = x * sliceWidth;  
            var yPos = y * sliceHeight;  

            // Создаём копию  
            var slice = doc.duplicate();  
            slice.crop([xPos, yPos, xPos + sliceWidth, yPos + sliceHeight]);  

            // Имя файла  
            var fileName = "slice_" + (y + 1) + "_" + (x + 1) + ".png";  
            var filePath = new File(folderPath + "/" + fileName);  

            // Сохранение  
            var options = new PNGSaveOptions();  
            slice.saveAs(filePath, options, true);  
            slice.close(SaveOptions.DONOTSAVECHANGES);  
        }  
    }  
    alert("Разделение завершено!");  
}  

// Запрос количества частей  
var cols = parseInt(prompt("Введите количество частей по горизонтали:", "2"), 10);  
var rows = parseInt(prompt("Введите количество частей по вертикали:", "2"), 10);  

if (!isNaN(cols) && !isNaN(rows) && cols > 0 && rows > 0) {  
    sliceImage(rows, cols);  
} else {  
    alert("Ошибка! Введите корректные числа.");  
}  
