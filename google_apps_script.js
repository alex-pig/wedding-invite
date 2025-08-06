function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Отладочная информация - логируем все параметры
  console.log('Полученные параметры:', e.parameter);
  
  // Получаем все параметры из формы
  var timestamp = new Date();
  var name = e.parameter.name || '';
  var willAttend = e.parameter.willAttend || '';
  var allergies = e.parameter.allergies || '';
  var creative = e.parameter.creative || '';
  var drink = e.parameter.drink || '';
  var children = e.parameter.childrenCount || '';
  var childrenAge = e.parameter.childrenAge || '';
  
  // Логируем обработанные данные
  console.log('Обработанные данные:', {
    timestamp: timestamp,
    name: name,
    willAttend: willAttend,
    allergies: allergies,
    creative: creative,
    drink: drink,
    children: children,
    childrenAge: childrenAge
  });
  
  // Дополнительная отладка для поля children
  console.log('=== ОТЛАДКА GOOGLE APPS SCRIPT ===');
  console.log('Параметр childrenCount получен:', e.parameter.childrenCount);
  console.log('Параметр childrenAge получен:', e.parameter.childrenAge);
  console.log('Все параметры:', JSON.stringify(e.parameter));
  
  // Проверяем все параметры по отдельности
  console.log('Проверка всех параметров:');
  for (let key in e.parameter) {
    console.log(`${key}: ${e.parameter[key]}`);
  }
  console.log('=== КОНЕЦ ОТЛАДКИ GOOGLE APPS SCRIPT ===');
  
  // Создаем массив данных для записи
  var rowData = [
    timestamp,        // Время отправки
    name,            // Имя и фамилия
    willAttend,      // Статус участия
    allergies,       // Аллергии
    creative,        // Творческое поздравление
    drink,           // Предпочтения по напиткам
    children,        // Количество детей
    childrenAge      // Возраст детей
  ];
  
  // Логируем финальный массив данных
  console.log('Данные для записи в таблицу:', rowData);
  
  // Добавляем строку с данными
  sheet.appendRow(rowData);
  
  console.log('Данные успешно добавлены в таблицу');
  return ContentService.createTextOutput("OK");
}

// Функция для создания заголовков таблицы (запустите один раз)
function createHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Устанавливаем заголовки столбцов
  sheet.getRange(1, 1, 1, 8).setValues([
    ['Время отправки', 'Имя и фамилия', 'Статус участия', 'Аллергии', 'Творческое поздравление', 'Напиток', 'Количество детей', 'Возраст детей']
  ]);
  
  // Делаем заголовки жирными
  sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
  
  // Автоматически подгоняем ширину столбцов
  sheet.autoResizeColumns(1, 8);
  
  console.log('Заголовки таблицы созданы');
}

// Функция для тестирования (запустите для проверки)
function testFunction() {
  console.log('Google Apps Script работает корректно');
  return 'OK';
} 