/**
 * This file contains only translation data for i18n.
 * At this moment available english as default and ru sa translation.
 *
 * @version 1.0
 * @author Dmitry
 * @since 04.09.2015
 */
angular.module('gettext')
    .run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
        gettextCatalog.setStrings('ru', {"Address":"Адрес","Change cheque №":"Изменить расписку №","notes":"Специальные отметки","Create New Check":"Новая расписка","Customer":"Заказчик","Email":"Почта","Guarantee":"Гарантия","help":"Помощь","Home":"Главная","Id":"№","Inspector":"Принял","Introduced":"Прием","IntroducedFrom":"Принят с","IntroducedTo":"Принят по","Issued":"Выдан","Kits":"Комплект","Malfunction":"Неисправность","Master":"Инженер","Model":"Модель","Modify Check":"Править","Name of Product":"Наименование","No":"Нет","Number of pages":"Количество страниц","Phone":"Телефон","profile":"Профиль","Purchaser":"Сдал","Ready":"Готов","Repair Period":"Срок ремонта","Send":"Добавить","Serial Number":"Серийный номер","settings":"Настройки","Special Notes":"Особые отметки","diagnostics":"Диагностика","Yes":"Да","Filters":"Фильтры", "Checks":"Расписки", "Create":"Создать", "Change cheque":"Изменить расписку", "Now":"Сейчас", "Cancel":"Закрыть", "Save":"Ок", "Cheque":"Расписка", "added":"добавлена", "modified":"изменена", "deleted":"удалена", "Has guarantee": "Есть гарантия", "Has no guarantee":"Нет гарантии", "Not ready":"Не готов", "Not issued":"Не выдан", "Rows per page:":"Строк на странице:", "of":"из", "tasks":"Задачи", "login":"Войти", "dashboard":"Рабочий стол", "analytics":"Аналитика", "synchronize":"Синхронизировать", "enter date":"Введите дату", "cheque":"Расписка"});
/* jshint +W100 */
    }]);