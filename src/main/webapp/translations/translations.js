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
        gettextCatalog.setStrings('ru', {"Address":"Адрес","Change cheque №":"Изменить расписку №","notes":"Специальные отметки","new cheques":"Новые расписки","Customer":"Заказчик","Email":"Почта","Guarantee":"Гарантия","help":"Помощь","Home":"Главная","Id":"№","Inspector":"Принял","Introduced":"Прием","IntroducedFrom":"Принят с","IntroducedTo":"Принят по","Issued":"Выдан","Kits":"Комплект","Malfunction":"Неисправность","master":"Инженер","Model":"Модель","Modify Check":"Править","Name of Product":"Наименование","No":"Нет","Number of pages":"Количество страниц","Phone":"Телефон","profile":"Профиль","Purchaser":"Сдал","Ready":"Готов","Repair Period":"Срок ремонта","Send":"Добавить","Serial Number":"Серийный номер","settings":"Настройки","Special Notes":"Особые отметки","diagnostics":"Диагностика","Yes":"Да","Filters":"Фильтры", "Checks":"Расписки", "Create":"Создать", "Change cheque":"Изменить расписку", "Now":"Сейчас", "Cancel":"Закрыть", "save":"Применить", "Cheque":"Расписка", "added":"добавлена", "modified":"изменена", "deleted":"удалена", "Has guarantee": "Есть гарантия", "Has no guarantee":"Нет гарантии", "Not ready":"Не готов", "Not issued":"Не выдан", "Rows per page:":"Строк на странице:", "of":"из", "tasks":"Задачи", "login":"Войти", "logout":"Выйти", "tasks":"Задачи", "analytics":"Аналитика", "synchronize":"Синхронизировать", "synchronized":"синхронизирована", "enter date":"Введите дату", "cheque":"Расписка", "paid":"Оплачен", "not paid":"Не оплачен", "payment":"Оплата", "repair":"Ремонт", "zip":"ЗИП", "deliver":"Доставка", "prepayment":"Предоплата", "type":"Тип", "description":"Описание", "cost":"Стоимость", "currency":"Валюта", "sum":"Сумма", "sum with prepayment":"Сумма с предоплатой", "estimated cost":"Ориентировочная цена", "currency rates":"Курс валют", "show more":"Показать ещё", "roll up":"Свернуть", "authorization":"Авторизация", "username":"Логин", "password":"Пароль", "users":"Пользователи", "cheques with delay":"Расписки с просрочкой", "new cheque":"Новая расписка", "photographies":"Фотографии", "drop photographies here":"Поместите фотографии сюда", "would you like to continue without saving changes?":"Выйти без сохранения изменений?", "if you do not save your changes, then all the information will be lost":"Если не сохранить изменения, то вся информация будет потеряна", "continue":"Продолжить", "cancel":"Отмена", "would you like to delete payment?":"Удалить счет?", "deleted payment can not be recovered":"Удаленный счет невозможно восстановить", "delete":"Удалить", "would you like to delete comment?":"Удалить комментарий?", "deleted comment can not be recovered":"Удаленный комментарий невозможно восстановить", "would you like to delete cheque?":"Удалить расписку?", "deleted cheque can not be recovered":"Удаленную расписку невозможно восстановить", "would you like to delete photo?":"Удалить фото?", "deleted photo can not be recovered":"Удаленное фото невозможно восстановить", "payments synchronized":"Оплата синхронизирована", "cheque has been changed":"Расписка была изменена другим пользователем", "cheque has been changed by another user, please refresh the cheque and enter your changes again.":"Пожалуйста, обновите расписку и внесите свои изменения снова", "find":"Найти", "fullname":"Полное имя", "new password":"Новый пароль", "admin password":"Пароль администратора", "enabled":"Включен", "server connection lost title":"Соединение с сервером потеряно", "server connection lost content":"Случилось страшное: сервер не отвечает на запросы. Попробуйте обновить страницу через несколько минут.", "receipt":"принята", "returnedToClientFrom":"Выдан с", "returnedToClientTo":"Выдан по"  });
/* jshint +W100 */
    }]);