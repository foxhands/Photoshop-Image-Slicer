# Photoshop Image Slicer

## Описание
Этот скрипт для Adobe Photoshop позволяет разрезать активное изображение на заданное количество частей по горизонтали и вертикали, а затем сохранить их в формате PNG.

## Возможности
- Разделение изображения на заданное количество частей
- Выбор папки для сохранения
- Автоматическое именование файлов

## Установка
1. Откройте Adobe Photoshop.
2. Перейдите в `Файл` -> `Сценарии` -> `Редактор сценариев`.
3. Вставьте код из файла `sliceImage.jsx`.
4. Сохраните скрипт в формате `.jsx`.

## Использование
1. Откройте изображение в Photoshop.
2. Запустите скрипт через `Файл` -> `Сценарии` -> `Запустить сценарий`.
3. Введите количество частей по горизонтали и вертикали.
4. Выберите папку для сохранения фрагментов.
5. Дождитесь завершения процесса.

## Пример кода
```javascript
#target photoshop  

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

            var slice = doc.duplicate();  
            slice.crop([xPos, yPos, xPos + sliceWidth, yPos + sliceHeight]);  

            var fileName = "slice_" + (y + 1) + "_" + (x + 1) + ".png";  
            var filePath = new File(folderPath + "/" + fileName);  

            var options = new PNGSaveOptions();  
            slice.saveAs(filePath, options, true);  
            slice.close(SaveOptions.DONOTSAVECHANGES);  
        }  
    }  
    alert("Разделение завершено!");  
}  

var cols = parseInt(prompt("Введите количество частей по горизонтали:", "2"), 10);  
var rows = parseInt(prompt("Введите количество частей по вертикали:", "2"), 10);  

if (!isNaN(cols) && !isNaN(rows) && cols > 0 && rows > 0) {  
    sliceImage(rows, cols);  
} else {  
    alert("Ошибка! Введите корректные числа.");  
}  
```

## Лицензия
Этот проект распространяется под лицензией MIT.

## Автор
[Foxhand](https://foxhands.pp.ua)

