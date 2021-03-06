angular
    .module('app.translate.module')
    .config(translateConfig);

translateConfig.$inject = ['$translateProvider'];

/* @ngInject */
function translateConfig ($translateProvider) {
  $translateProvider.translations('en', {


    // Admin
    'HEADER_ADMIN_LOGIN': 'Login',
    'HEADER_ADMIN_ACCOUNT': 'Account',
    'BTN_ADMIN_LOGOUT': 'Logout',
    'BTN_ADMIN_CREATE': 'Create',
    'BTN_ADMIN_UPDATE': 'Update record',
    'BTN_ADMIN_DECLINE': 'Cancel update',
    'BTN_ADMIN_LOGIN': 'Login',
    'BTN_ADMIN_CLEAR': 'Clear',
    'HEADER_PANEL_EDIT': 'Edit object #',

    // Footer
    'FOOTER_ABOUT_COMPANY_TITLE': 'About us',
    'FOOTER_ABOUT_COMPANY_TEXT': '[En]Лорем ипсум долор сит амет, не дицит легере еос, ' +
    'еос еу волутпат цомпрехенсам, не хас долор омиттам! При утамур сингулис адиписцинг ' +
    'не, не алии ехерци дуо. Тота игнота алияуандо ан яуо, хабео яуидам хендрерит те яуо.',
    'FOOTER_NAVIGATION': 'Navigation',
    'FOOTER_SUBSCRIBE_TITLE': 'Subscribe to our news',
    'FOOTER_SUBSCRIBE_YOUTUBE': 'YouTube',
    'FOOTER_SUBSCRIBE_FACEBOOK': 'Facebook',
    'FOOTER_SUBSCRIBE_INST': 'Instagram',
    'FOOTER_SUBSCRIBE_TWEETER': 'Tweeter',
    'FOOTER_SUBSCRIBE_GOOGLEPLUS': 'Google Plus',
    'FOOTER_DEVELOPER': 'Developed by',

    // Main menu items
    'NAV_HOME': 'Home',
    'NAV_CONDITIONS': 'Vehicle Lease Terms',
    'NAV_INSURANCE': 'Types of Insurance',
    'NAV_CARS': 'Cars',
    'NAV_DISCOUNT': 'Discount card',
    'NAV_SALES': 'Sales',
    'NAV_QA': 'Q&A',
    'NAV_SERVICES': 'Services',
    'NAV_CONTACTS': 'Contacts',
    'NAV_REQ_BUTTON': 'Make request',

    // Filter form items
    'PANEL_HEADER': 'Choose',
    'LBL_DEAL': 'Deal type',
    'LBL_OBJ': 'Object type',
    'LBL_SHOW': 'Show object',
    'LBL_HOME': 'Place at home page',
    'LBL_CITY': 'City',
    'LBL_ROOM': 'Number of rooms',
    'LBL_OBJ_NUM': 'Object number',
    'LBL_YOUTUBE': 'YouTube',
    'OBJ_NUM_PLACEHOLDER': 'Object #',
    'OBJ_YOUTUBE_PLACEHOLDER': 'YouTube',
    'BTN_FIND': 'Find',
    'BTN_CLR': 'Clear',
    'AV_REQ': 'reqEn',

    // Callback or request forms
    'LBL_FIELD_OBJ': 'Object',
    'LBL_FIELD_DATE_START': 'Date start',
    'LBL_FIELD_DATE_END': 'Date end',
    'LBL_FIELD_NAME': 'Your name',
    'LBL_FIELD_EMAIL': 'Email',
    'LBL_FIELD_PHONE': 'Phone',
    'LBL_FIELD_SKYPE': 'Skype',
    'LBL_FIELD_WHATSAPP': 'WhatsApp',
    'LBL_FIELD_TELEGRAM': 'Telegram',
    'LBL_FIELD_VIBER': 'Viber',
    'LBL_FIELD_ADDINFO': 'Additional Info',
    'LBL_FIELD_INFO': 'Message',
    'HEADER_INFO_SHORT': 'Short term rent information request',
    'HEADER_INFO_LONG': 'Long term rent information request',
    'HEADER_INFO_LET': 'Let property information submission',
    'HEADER_INFO_BUY': 'Buy property information request',
    'HEADER_INFO_SELL': 'Sell property information submission',
    'HEADER_INFO_GENERAL': 'Send message',
    'FIELD_NAME_ERR': 'nameErrEn',
    'FIELD_EMAIL_ERR': 'emailErrEn',
    'BTN_SUBMIT': 'Submit',
    'HEADER_INFO_MODAL_FOOTER_CLOSE_BUTTON': 'Close',


    // Home - Main
    'NEW_DESIGN_TEXT': 'New Design Coming Soon...',
    'HOME_TITLE_01': 'Camel Car Hire',
    'HOME_SUBTITLE_01': 'We will not disappoint you',
    'HOME_TITLE_02': 'Camel Car Hire - we\'ll do our best for you',
    'HOME_SUBTITLE_02': 'If you ask our clients they reply: the perfect cars for the reasonable price',
    'HOME_THUMB_01_TITLE': 'No downpayment',
    'HOME_THUMB_01_TEXT': 'Just fill in a form or give us a call',
    'HOME_THUMB_02_TITLE': 'New cars',
    'HOME_THUMB_02_TEXT': 'Our fleet consist of just bright new cars',
    'HOME_THUMB_03_TITLE': 'Free delivery to airport',
    'HOME_THUMB_03_TEXT': 'We provide you with a car at Paphos airport free of charge',
    'HOME_TITLE_04': 'Our cars',
    'HOME_SUBTITLE_04': 'Please select the car you like and press "Book" button',
    'LBL_PRICE_FROM': 'Price: from',
    'BTN_KNOWMORE': 'MORE INFO',
    'BTN_BOOK': 'BOOK NOW!',
    'BTN_BOOK_CAR': 'BOOK THIS CAR',
    'BTN_CAR_SHOW_DETAILS': 'MORE INFO',
    'BTN_CAR_HIDE_DETAILS': 'GO BACK',
    'BTN_BOOK_PERFORM': 'BOOK THIS CAR',
    'HOME_TITLE_06': 'CAR BOOKING',
    'HOME_SUBTITLE_06': 'Fill in the form providing the necessary information and we\'ll contact you to setup details',
    'HOME_TITLE_05': 'Our Customers Say We Are Awesome :)',
    'DATEPICKER_DATE': 'Enter date',
    'DATEPICKER_TIME': 'Time',
    'LBL_CAR': 'Car type',
    'LBL_FIELD_P_LOCATION': 'Pick-up location',
    'LBL_FIELD_D_LOCATION': 'Drop-off location',
    'HOME_TITLE_07': 'Our offices',
    'HOME_SUBTITLE_07_01': 'Poseidonas Avenue, 52A, Shop1, 8042, Paphos',
    'HOME_SUBTITLE_07_02': 'Poseidonas Avenue, 52A, Shop2, 8042, Paphos',
    'HOME_SUBTITLE_07_A': '(click the "bouncing" sign for additional information)',
    'HOME_SEASON': 'Season',
    'HOME_HIGH_SEASON': 'High season',
    'HOME_LOW_SEASON': 'Low season',
    'HOME_1D': 'day',
    'HOME_2D': 'days',
    'HOME_5D': 'days',
    'BLOCK_02_PIC_02': '/images/block02-2-en.png',
    'BLK_07_CONTACT_FORM_TITLE': 'Contact us',
    'BTN_CONTACT_US': 'SEND',
    'LBL_COMMENT_TYPE': 'Comment type',
    'LBL_COMMENT_BODY': 'Message',

    // Booking terms
    'BOOK_HEADER': 'Vehicle lease terms',
    'BOOK_001': 'The people between 21 and 70 years old who have the driving experience of at least 3 yearly period may be the clients of Camel Car Rentals.',
    'BOOK_002': 'Any vehicle reservation procedure shall be rated against the vehicle category but not a particular vehicle brand.',
    'BOOK_003': 'Any payments shall be made to the rates established by the company in cash or n account. Prices are to be charged in Euro, inclusive of VAT.',
    'BOOK_004': 'The vehicle lease value includes as follows:',
    'BOOK_004_1': 'Delivering the vehicle to the place within the area of a city wherein the office is located.',
    'BOOK_004_2': 'Unlimited mileage',
    'BOOK_004_3': 'Insurance T.P.I-(Third Party Insurance) OSAGO and franchise. The sum of such franchise shall be rated against the leased vehicle category.',
    'BOOK_005': 'The vehicle shall be returned with its fuel tank fully primed. Fuel shall not be subject to the lease value but paid out additionally. Fuel charges may be refunded to the client in full provided that the latter will return the vehicle with its fuel tank fully primed',
    'BOOK_005_1': '(a partially filled fuel tank will not be repaid).',
    'BOOK_006': 'If the vehicle leasing period is to be extended, the client shall notify the company within 24 hours prior to termination.',
    'BOOK_007': 'If the vehicle is returned before the appointed date, the demand balance will not be refunded, in particular:',
    'BOOK_007_1': 'With the vehicle being taken on lease for maximum 7 days – a balance for the last 2 days.',
    'BOOK_007_2': 'With the vehicle being taken on lease for the period exceeding 7 days – a half of the value rated for the remaining lease period.',
    'BOOK_008': 'Comprehensive F.C.D.W-(Full Collision Damage Waiver), CASCO without franchise, shall not be provided to the client under the age of 23 years old other than C.D.W-(Collision Damage Waiver with reduce excess), OSAGO and reduced franchise.',
    'BOOK_009': 'The client shall pay for parking and make charges for any vehicle operating penalties.',
    'BOOK_010': 'Should a vehicle ignition key be lost, the client shall pay its value.',
    'BOOK_011': 'Any information about extended services and optional equipment prices (i.e. proving an additional driver, delivering the vehicle to an airport, using GPS, child car seat etc.) may be received from a representative of Camel Car Rentals.',

    // Insurance
    'INS_HEADER': 'Types of Insurance',
    'INS_001': 'T.P.I-(Third Party Insurance) – OSAGO and franchise (third party liability insurance coverage), inclusive of rental charges',
    'INS_001_1': 'This type of insurance does not cover a vehicle underside (crankcase), tires, and windscreen. Franchise value is to be rated against the category of the leased vehicle and is to be duly specified in this agreement.',
    'INS_001_H1': 'Group',
    'INS_001_H2': 'Excess',
    'INS_001_R1_1': 'A, B',
    'INS_001_R1_2': '600',
    'INS_001_R2_1': 'C, D, E, F',
    'INS_001_R2_2': '1000',
    'INS_002': 'C.D.W-(Collision Damage Waiver with reduce excess) – OSAGO and reduced franchise',
    'INS_002_1': 'This type of insurance covers failures of a vehicle underside (crankcase), tires, and windscreen. It is subject to extra charge. The sum insured is to be rated against the category of the leased vehicle and is to be specified in this agreement.',
    'INS_002_H1': 'Group',
    'INS_002_H2': 'Price per day',
    'INS_002_H3': 'Excess',
    'INS_002_R1_1': 'A, B',
    'INS_002_R1_2': '4',
    'INS_002_R1_3': '300',
    'INS_002_R2_1': 'C, D, E, F',
    'INS_002_R2_2': '5',
    'INS_002_R2_3': '500',
    'INS_003': 'F.C.D.W-(Full Collision Damage Waiver) – CASCO without franchise',
    'INS_003_1': 'It is subject to extra charge. It includes all the above-listed types of insurance (T.P.I and С.D.I). The sum insured is to be rated against the category of the leased vehicle and is to be specified in this agreement.',
    'INS_003_H1': 'Group',
    'INS_003_H2': 'Price per day',
    'INS_003_H3': 'Excess',
    'INS_003_R1_1': 'A, B',
    'INS_003_R1_2': '8',
    'INS_003_R1_3': 'no',
    'INS_003_R2_1': 'C, D, E, F',
    'INS_003_R2_2': '10',
    'INS_003_R2_3': 'no',
    'INS_004': 'Neither type of insurance (T.P.I/C.D.W/F.C.D.W) may cover losses incurred as a result of the activities listed below. All the insurance agreements concerned will be cancelled in the events as follows:',
    'INS_004_1': 'The client leaves the scene of an accident without notice of the company’s representative.',
    'INS_004_2': 'The client drives the vehicle under the influence of a drug or alcohol.',
    'INS_004_3': 'The client drives the vehicle in rough terrain conditions and along difficult earth roads.',
    'INS_004_4': 'The client enters the territory of North Cyprus.',


    // Discount card
    'DISCOUNT_HEADER': 'DISCOUNT CARD',



    // General
    'GENERAL_ELEM_OBJ': 'Object #',
    'GENERAL_ELEM_MORE_DETAILS': 'More details...',
    'GENERAL_FOUND_NOTHING_HEADER': 'Nothing found...',
    'GENERAL_FOUND_NOTHING': 'Nothing found. Change search criteria and try again.',
    'GENERAL_LOADING_SPINNER': 'Loading...',





    // Q&A
    'QA_PAGE_HEADER_TITLE': '[En]Вопросы и ответы',
    'QA_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',

    // Services
    'SERVICES_PAGE_HEADER_TITLE': '[En]Дополнительные услуги',
    'SERVICES_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',

    // Contacts
    'CONTACTS_PAGE_HEADER_TITLE': '[En]Наши контакты',
    'CONTACTS_PAGE_HEADER_SUBTITLE': '[En]Несколько слов...',


  });

  $translateProvider.translations('ru', {

    // Header
    'HEADER_OFFICE_PHONE': 'Офис',
    'HEADER_MOBILE_PHONE': 'Мобильный',
    'HEADER_SKYPE_PHONE': 'Skype',
    'HEADER_SEND_MESSAGE_1': 'Отправить',
    'HEADER_SEND_MESSAGE_2': 'сообщение',

    // Admin
    'HEADER_ADMIN_LOGIN': 'Вход',
    'HEADER_ADMIN_ACCOUNT': 'Профиль',
    'BTN_ADMIN_LOGOUT': 'Выход',
    'BTN_ADMIN_CREATE': 'Создать',
    'BTN_ADMIN_UPDATE': 'Обновить объект',
    'BTN_ADMIN_DECLINE': 'Отменить редактирование объекта',
    'BTN_ADMIN_LOGIN': 'Вход',
    'BTN_ADMIN_CLEAR': 'Очистить',
    'LBL_OBJ_EXCLUSIVE': 'Эксклюзивный объект',
    'LBL_OBJ_SHOW': 'Объект открыт для показа',
    'LBL_OBJ_HOME': 'Размещать объект на главной странице',
    'LBL_TAG': 'Тег',
    'LBL_IMG_MAIN_LABEL_01': 'Выберите файл для основного изображения',
    'LBL_IMG_MAIN_LABEL_02': 'Загрузка основного изображения',
    'LBL_IMG_MAIN_LABEL_03': 'Прогресс загрузки файла основного изображения:',
    'LBL_IMG_GALLERY_LABEL_01': 'Выберите файлы для галлереи',
    'LBL_IMG_GALLERY_LABEL_02': 'Загрузка изображений галлереи',
    'LBL_IMG_GALLERY_LABEL_03': 'Прогресс загрузки файлов галлереи:',
    'LBL_IMG_GALLERY_LABEL_04': 'Кол-во файлов галлереи:',
    'LBL_IMG_MAIN_BTN_REMOVE': 'Удалить',
    'LBL_IMG_MAIN_BTN_REMOVE_ALL': 'Удалить все изображения галлереи',
    'LBL_IMG_TBL_LABEL_NAME': 'Имя файла',
    'LBL_IMG_TBL_LABEL_SIZE': 'Размер',
    'LBL_IMG_TBL_LABEL_PROGRESS': 'Прогресс',
    'LBL_IMG_TBL_LABEL_STATUS': 'Статус',
    'LBL_IMG_TBL_LABEL_ACTION': 'Действие',
    'HEADER_PANEL_EDIT': 'Редактирование объекта #',


    // Footer
    'FOOTER_ABOUT_COMPANY_TITLE': 'О нас',
    'FOOTER_ABOUT_COMPANY_TEXT': 'Лорем ипсум долор сит амет, не дицит легере еос, ' +
    'еос еу волутпат цомпрехенсам, не хас долор омиттам! При утамур сингулис адиписцинг ' +
    'не, не алии ехерци дуо. Тота игнота алияуандо ан яуо, хабео яуидам хендрерит те яуо.',
    'FOOTER_NAVIGATION': 'Навигация',
    'FOOTER_SUBSCRIBE_TITLE': 'Подписаться на новости',
    'FOOTER_SUBSCRIBE_YOUTUBE': 'YouTube',
    'FOOTER_SUBSCRIBE_FACEBOOK': 'Facebook',
    'FOOTER_SUBSCRIBE_INST': 'Instagram',
    'FOOTER_SUBSCRIBE_TWEETER': 'Tweeter',
    'FOOTER_SUBSCRIBE_GOOGLEPLUS': 'Google Plus',
    'FOOTER_DEVELOPER': 'Разработано',

    // Main menu items
    'NAV_HOME': 'Главная',
    'NAV_CONDITIONS': 'Условия аренды автомобиля',
    'NAV_INSURANCE': 'Виды страхования',
    'NAV_CARS': 'Автомобили',
    'NAV_DISCOUNT': 'Дисконтная карта',
    'NAV_SALES': 'Продажа',
    'NAV_QA': 'Вопросы',
    'NAV_SERVICES': 'Доп. услуги',
    'NAV_CONTACTS': 'Контакты',
    'NAV_REQ_BUTTON': 'Оставить заявку',

    // Filter form items
    'PANEL_HEADER': 'Задайте условия поиска',
    'LBL_DEAL': 'Тип сделки',
    'LBL_OBJ': 'Тип объекта',
    'LBL_SHOW': 'Показывать объект',
    'LBL_HOME': 'Размещать на главной странице',
    'LBL_CITY': 'Город',
    'LBL_ROOM': 'Кол-во комнат',
    'LBL_OBJ_NUM': 'Номер объекта',
    'LBL_YOUTUBE': 'YouTube',
    'LBL_ADDRESS': 'Адрес',
    'LBL_BATHROOM': 'Сан. узел',
    'LBL_POOL': 'Бассейн',
    'LBL_PRICE': 'Стоимость',
    'LBL_DESCRIPTION': 'Описание',
    'LBL_INFO': 'Доп. информация',
    'OBJ_NUM_PLACEHOLDER': '№ объекта',
    'OBJ_YOUTUBE_PLACEHOLDER': 'YouTube',
    'OBJ_ADDRESS_PLACEHOLDER': 'Введите адрес объекта',
    'OBJ_BATHROOM_PLACEHOLDER': 'Введите описание сан. узла объекта',
    'OBJ_POOL_PLACEHOLDER': 'Введите описание бассейна объекта',
    'OBJ_PRICE_PLACEHOLDER': 'Введите стоимость аренды объекта',
    'OBJ_DESCRIPTION_PLACEHOLDER': 'Введите общее объекта',
    'OBJ_INFO_PLACEHOLDER': 'Введите дополнительную информацию по объекту',
    'BTN_FIND': 'Найти',
    'BTN_CLR': 'Очистить форму',
    'AV_REQ': 'reqRu',

    // Callback or request forms
    'LBL_FIELD_OBJ': 'Объект',
    'LBL_FIELD_DATE_START': 'Дата начала',
    'LBL_FIELD_DATE_END': 'Дата окончания',
    'LBL_FIELD_NAME': 'Ваше имя',
    'LBL_FIELD_EMAIL': 'Email',
    'LBL_FIELD_PHONE': 'Телефон',
    'LBL_FIELD_SKYPE': 'Skype',
    'LBL_FIELD_WHATSAPP': 'WhatsApp',
    'LBL_FIELD_TELEGRAM': 'Telegram',
    'LBL_FIELD_VIBER': 'Viber',
    'LBL_FIELD_ADDINFO': 'Доп. информация',
    'LBL_FIELD_INFO': 'Сообщение',
    'HEADER_INFO_SHORT': 'Запрос информации по краткосрочной аренде',
    'HEADER_INFO_LONG': 'Запрос информации по долгосрочной аренде',
    'HEADER_INFO_LET': 'Предложение по сдаче недвижимости в аренду',
    'HEADER_INFO_BUY': 'Запрос информации по покупке недвижимости',
    'HEADER_INFO_SELL': 'Предложение по продаже недвижимости',
    'HEADER_INFO_GENERAL': 'Отправка сообщения',
    'FIELD_NAME_ERR': 'nameErrRu',
    'FIELD_EMAIL_ERR': 'emailErrRu',
    'BTN_SUBMIT': 'Отправить',
    'HEADER_INFO_MODAL_FOOTER_CLOSE_BUTTON': 'Закрыть',



    // Home - Main
    'NEW_DESIGN_TEXT': 'Скоро будет готов новый дизайн...',
    'HOME_TITLE_01': 'Camel Car Hire',
    'HOME_SUBTITLE_01': 'Мы не разочаруем вас',
    'HOME_TITLE_02': 'Camel Car Hire - лучшее для Вас!',
    'HOME_SUBTITLE_02': 'Спросите наших клиентов о Camel Car Hire и они вам ответят: разумные цены при безупречном качестве',
    'HOME_THUMB_01_TITLE': 'Без предоплаты',
    'HOME_THUMB_01_TEXT': 'Просто заполните онлайн-форму или позвоните',
    'HOME_THUMB_02_TITLE': 'Новые автомобили',
    'HOME_THUMB_02_TEXT': 'В нашем автопарке только самые свежие автомобили',
    'HOME_THUMB_03_TITLE': 'В аэропорт бесплатно',
    'HOME_THUMB_03_TEXT': 'Доставим автомобиль в аэропорт г.Пафос бесплатно',
    'HOME_TITLE_04': 'Наш автопарк',
    'HOME_SUBTITLE_04': 'Выберите понравившейся вам автомобиль и нажмике кнопку "Забронировать"',
    'LBL_PRICE_FROM': 'Цена: от',
    'BTN_KNOWMORE': 'УЗНАТЬ БОЛЬШЕ',
    'BTN_BOOK': 'ЗАБРОНИРОВАТЬ',
    'BTN_BOOK_CAR': 'ЗАБРОНИРОВАТЬ',
    'BTN_CAR_SHOW_DETAILS': 'УЗНАТЬ БОЛЬШЕ',
    'BTN_CAR_HIDE_DETAILS': 'ВЕРНУТЬСЯ',
    'BTN_BOOK_PERFORM': 'ЗАБРОНИРОВАТЬ',
    'HOME_TITLE_06': 'Бронирование автомобиля',
    'HOME_SUBTITLE_06': 'Заполните форму, указав необходимую информацию и мы свяжемся с Вами для уточнения деталей',
    'HOME_TITLE_05': 'Наши заказчики говорят, что мы лучшие :)',
    'DATEPICKER_DATE': 'Укажите дату',
    'DATEPICKER_TIME': 'Время',
    'LBL_CAR': 'Тип автомобиля',
    'LBL_FIELD_P_LOCATION': 'Место подачи',
    'LBL_FIELD_D_LOCATION': 'Место возврата',
    'HOME_TITLE_07': 'Наши офисы',
    'HOME_SUBTITLE_07_01': 'Poseidonas Avenue, 52A, Shop1, 8042, Paphos',
    'HOME_SUBTITLE_07_02': 'Poseidonas Avenue, 52A, Shop2, 8042, Paphos',
    'HOME_SUBTITLE_07_A': '(кликните на "прыгающий" указатель для дополнительной информации)',
    'HOME_SEASON': 'Сезон',
    'HOME_HIGH_SEASON': 'Лето',
    'HOME_LOW_SEASON': 'Зима',
    'HOME_1D': 'день',
    'HOME_2D': 'дня',
    'HOME_5D': 'дней',
    'BLOCK_02_PIC_02': '/images/block02-2-ru.png',
    'BLK_07_CONTACT_FORM_TITLE': 'Свяжитесь с нами',
    'BTN_CONTACT_US': 'ОТПРАВИТЬ',
    'LBL_COMMENT_TYPE': 'Тип сообщения',
    'LBL_COMMENT_BODY': 'Сообщение',

    // Booking terms
    'BOOK_HEADER': 'Условия аренды автомобиля',
    'BOOK_001': 'Клиентами компании  «Camel Car Rentals» могут быть лица в возрасте от 21  до 70 лет, с водительским  стажем не менее 3 лет.',
    'BOOK_002': 'Бронирование происходит по категории, а не по конкретной марке автомобиля.',
    'BOOK_003': 'Оплата услуг производится по тарифам компании, наличным или безналичным расчетом. Цены указаны в Евро с учетом НДС.',
    'BOOK_004': 'В стоимость аренды автомобиля входит:',
    'BOOK_004_1': 'Доставка автомобиля в любую точку, в пределах города, где расположен наш офис.',
    'BOOK_004_2': 'Неограниченный пробег.',
    'BOOK_004_3': 'Страховка T.P.I-(Third Party Insurance) ОСАГО с франшизой. Сумма франшизы зависит от категории арендуемого автомобиля.',
    'BOOK_005': 'Автомобиль сдается с полным топливным баком. Топливо не входит в  стоимость аренды автомобиля и оплачивается дополнительно.  Денежные  средства за топливо возвращаются клиенту полностью, только при сдаче автомобиля  с полным баком',
    'BOOK_005_1': '(за частично заполненный  топливный бак деньги не возвращаются).',
    'BOOK_006': 'При продлении срока аренды автомобиля, клиент должен сообщить представителю  компании не позднее, чем за 24 часа до окончания срока аренды.',
    'BOOK_007': 'При досрочной сдаче клиентом автомобиля, остаток денежных средств не возвращается:',
    'BOOK_007_1': 'При аренде до 7 дней, за последние 2 дня.',
    'BOOK_007_2': 'При аренде свыше 7 дней, половина от стоимости за оставшиеся дни аренды.',
    'BOOK_008': 'Полное страхование  F.C.D.W-(Full Collision Damage Waiver) КАСКО без франшизы не оформляется на клиентов до 23 лет, за исключением страховки C.D.W-(Collision Damage Waiver with reduce excess) ОСАГО с уменьшенной франшизой.',
    'BOOK_009': 'Клиент обязан за свой счет оплачивать парковку и любые штрафы, наложенные в процессе эксплуатации автомобиля.',
    'BOOK_010': 'В случае утери ключа от автомобиля,  клиент обязан оплатить его стоимость.',
    'BOOK_011': 'Информацию о ценах на дополнительные услуги и оборудование (дополнительный водитель, доставка автомобиля в аэропорт, GPS, детское кресло и. т. п.)  можно получить у представителя компании «Camel Car Rentals».',

    // Insurance
    'INS_HEADER': 'Виды страхования',
    'INS_001': 'T.P.I-(Third Party Insurance) ОСАГО с франшизой - (обязательное страхование гражданской ответственности транспортного средства)',
    'INS_001_1': 'Включено в стоимость аренды. Не покрывает повреждения днища автомобиля (картер), шин и лобового стекла. Сумма франшизы зависит от категории арендуемого автомобиля и указывается в договоре.',
    'INS_001_H1': 'Группа автомобиля',
    'INS_001_H2': 'Франшиза',
    'INS_001_R1_1': 'A, B',
    'INS_001_R1_2': '600',
    'INS_001_R2_1': 'C, D, E, F',
    'INS_001_R2_2': '1000',
    'INS_002': 'C.D.W-(Collision Damage Waiver with reduce excess) ОСАГО с уменьшенной франшизой',
    'INS_002_1': 'Покрывает повреждения днища автомобиля (картер), шин и лобового стекла. Оплачивается дополнительно. Сумма страхования  зависит от категории арендуемого автомобиля и указывается в договоре.',
    'INS_002_H1': 'Группа автомобиля',
    'INS_002_H2': 'Цена страхования в день',
    'INS_002_H3': 'Франшиза',
    'INS_002_R1_1': 'A, B',
    'INS_002_R1_2': '4',
    'INS_002_R1_3': '300',
    'INS_002_R2_1': 'C, D, E, F',
    'INS_002_R2_2': '5',
    'INS_002_R2_3': '500',
    'INS_003': 'F.C.D.W-(Full Collision Damage Waiver) КАСКО без франшизы',
    'INS_003_1': 'Оплачивается дополнительно. Включает в себя выше перечисленные виды страхования  (T.P.I и С.D.I). Сумма страхования зависит от категории арендуемого автомобиля и указывается в договоре.',
    'INS_003_H1': 'Группа автомобиля',
    'INS_003_H2': 'Цена страхования в день',
    'INS_003_H3': 'Франшиза',
    'INS_003_R1_1': 'A, B',
    'INS_003_R1_2': '8',
    'INS_003_R1_3': 'нет',
    'INS_003_R2_1': 'C, D, E, F',
    'INS_003_R2_2': '10',
    'INS_003_R2_3': 'нет',
    'INS_004': 'Ни один из видов страхования (T.P.I/ C.D.W/ F.C.D.W) не покрывает ниже перечисленные пункты. Страховые договоренности будут аннулированы в случае:',
    'INS_004_1': 'Уезда клиента с места происшествия, без уведомления представителя компании.',
    'INS_004_2': 'Вождения автомобиля в алкогольном или наркотическом опьянении.',
    'INS_004_3': 'Вождения автомобиля по бездорожью и грунтовым дорогам.',
    'INS_004_4': 'Выезда на территорию Северного Кипра.',

    // Discount card
    'DISCOUNT_HEADER': 'ДИСКОНТНАЯ ПРОГРАММА',



    // General
    'GENERAL_ELEM_OBJ': 'Объект №',
    'GENERAL_ELEM_MORE_DETAILS': 'Подробнее...',
    'GENERAL_FOUND_NOTHING_HEADER': 'Ничего не найдено...',
    'GENERAL_FOUND_NOTHING': 'По вашему запросу ничего не найдено. Измените условия и повторите поиск.',
    'GENERAL_LOADING_SPINNER': 'Информация загружается...',



    // Q&A
    'QA_PAGE_HEADER_TITLE': 'Вопросы и ответы',
    'QA_PAGE_HEADER_SUBTITLE': 'Несколько слов...',

    // Services
    'SERVICES_PAGE_HEADER_TITLE': 'Дополнительные услуги',
    'SERVICES_PAGE_HEADER_SUBTITLE': 'Несколько слов...',

    // Contacts
    'CONTACTS_PAGE_HEADER_TITLE': 'Наши контакты',
    'CONTACTS_PAGE_HEADER_SUBTITLE': 'Несколько слов...',


  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}