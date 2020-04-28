import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { Category } from './category'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb()  { 
    const products: Product[] = [
      {
        id:1,
        name: 'Органайзер для косметики',
        price: 19500.00,
        description: 'Очень качественная и функциональная двухэтажная шкатулка для украшений. Когда вы возьмете ее в руки, то сразу ощутите ее добротность исполнения. Она достаточно вместительна, благодаря продуманной компановке внутренних отсеков, внутри можно расположить большое количесво украшений и бижатерии. Эта шкатулка станет приятным подарком для девушек и женщин.',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/shkatulki/luiza/shkat1-420x420.jpg'],
        categoryId:2,
         
        sale: true,
      },
      {
        id:2,
        name: 'Аромалампа',
        price: 4500.00,
        description: 'Аромалампа за 5 000 тг. из категории Ночники, светильники',
        Image:['https://exclusive-shop.kz/image/cache/catalog/no4niki/Aromalamp/T2g40RXt0XXXXXXXXX_%21%2177794848-420x420.jpg'],
        categoryId:2,
         
        sale: false,
      },
      {
        id:3,
        name: 'Зарядная док-станция',
        price: 13000.00,
        description: 'Эта зарядная док-станция, которая также может быть использована как подставка, подойдет на подарок любителям продукции Apple. Для удобства размещения проводов (не входят в комплект) в подставке сделаны специальные отверствия.Очень удобная и компактная вещь, которая будет очень удобна в использовании.Материал изготовления: бамбук.',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/gadgeti/dokiphonewatch/podstavka_dlya_iphone_iwatch-250x250.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:4,
        name: 'Дорожный органайзер',
        price: 5000.00,
        description: 'Для многих деловых людей очень важно иметь опрятный внешний вид после любых поездок, ведь часто такие поездки сразу сопровождаются бизнес-встречами. При помощи переносного органайзера ваши вещи не помнутся в багаже, к тому же вы можете взять данный кейс с собой в ручную кладь.',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/biznes/organaizerdlyarubashek/dorozhnii_organaizer_dlya_rubashek-420x420.jpg'],
        categoryId:1,
         
        sale: true,
      },
      {
        id:5,
        name: 'Подарочные часы Мечеть',
        price: 295000.00,
        description: 'Это по-настоящему хороший и эксклюзивный сувенир в виде мечети из натурального камня (змеевик), который украсит любой дом или офис. Для такого дорогого подарка в комплекте идет подарочная упаковка из дерева, обшитая текстурным кожзамом серого цвета. ',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Suveniri%20iz%20kamnya/mechet/podarochnie_chasi_mechet-420x420.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:6,
        name: 'Зарядная док-станция',
        price: 12500.00,
        description: 'При помощи данной зарядной док-станции можно компактно организовать место для удобной зарядки iPhone, Apple Watch и AirPods. Продуманная конструкция позволяет очень плотно разместить провода (не идут в комплекте), и в дальнейшем их не нужно будет даже поправлять. Замечательный подарок любителям продукции Apple. ',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/gadgeti/doc3/docstanciya_dlya_iphone_iwatch_airpods_1-420x420.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:7,
        name: 'Мужской настольный органайзер',
        price: 14500.00,
        description: 'Данный органайзер направлен на мужскую аудитории. Он помогает удобно и компакто разместить телефон (имеется вырез под зарядку), несколько наручных часов, портмоне или бумажник, очки, элементы бижутерии и различную мелочь, которая обычно валяется по всему дому.',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/gadgeti/muzhskojnastolnyjorganajzer/Mujskoi_nastolnii_organizer-420x420.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:8,
        name: 'Подарочный ремень Calvin Klein',
        price: 19000.00,
        description: 'Данный подарочный набор является репликой знаменитого бренда. Он состоит из фирменного подарочного пакета, кожанного ремня (длина 105см, ширина 3,5 см) и двух пряжек в фирменной упаковке. Сам ремень двусторонний (одна сторона черная, другая - коричневая) и может быть перевернут по желанию (на каждой пряжке есть специальный вращающийся механизм, который поварачивает вокруг своей оси)',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/CK/remen_ck-420x420.jpg'],
        categoryId:1,
         
        sale: true,
      },
      {
        id:9,
        name: 'Зонт-катана',
        price: 4600.00,
        description: 'Зонт-катана это подарок для настоящего мужчины. Наш магазин подарков предлагает Вам купить зонт только оригинального качества.',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/zonti/katana/katana4-420x420.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:10,
        name: 'Будильник "Колесо"',
        price: 3200.00,
        description: 'Самый стильный будильник за лучшую цену',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/4asi/Budilniki/budilnik%20koleso/T2qbc2XrhaXXXXXXXX_%21%21405355457-420x420.jpg'],
        categoryId:1,
         
        sale: false,
      },
      {
        id:12,
        name: 'Fujifilm instax mini',
        price: 29000.00,
        description: 'Моментальные снимки с помощью Fujifilm instax mini 9. Компактные размеры и море эмоций, хороший подарок на любой повод.',
        Image:['https://exclusive-shop.kz/image/cache/catalog/fuji/instax_mini9_vse_cveta-420x420.jpg'],
        categoryId:2,
         
        sale: true,
      },
      {
        id:13,
        name: 'Зонт-сердце',
        price: 5000.00,
        description: 'Данный стильный подарок точно удивит любую женщину',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/zonti/serdce/zont_serdce-420x420.jpg'],
        categoryId:2,
         
        sale: false,
      },
      {
        id:14,
        name: 'Живая бабочка в банке',
        price: 6000.00,
        description: 'Хотите подарить самые яркие эмоции? Уверены, что живая бабочка дома точно ее удивит',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Raznie/buterf/1-420x420.jpg'],
        categoryId:2,
         
        sale: true,
      },
      {
        id:15,
        name: 'Сумка для йоги с ковриком',
        price: 13500.00,
        description: 'Данный стильный подарок точно удивит любую женщину',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Raznie/sumka_dlya_iogi/Sumka_dlya_iogi_1-420x420.jpg'],
        categoryId:2,
         
        sale: true,
      },
      {
        id:16,
        name: 'Тубус для украшений',
        price: 3500.00,
        description: 'Данный стильный подарок точно удивит любую женщину',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/shkatulki/tubus-dlya-ukrashenii1_cr-420x420.jpg'],
        categoryId:2,
         
        sale: false,
      },
      {
        id:17,
        name: 'Шкатулка для часов',
        price: 5000.00,
        description: 'Данный стильный подарок точно удивит любую женщину',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/_organaizeri_chasi_ochki/organizer_na_12_chasov_derevo/shkatulka_dlya_3_chasov_derevo-420x420.jpg'],
        categoryId:2,
         
        sale: false,
      },
      {
        id:18,
        name: '3D ручки',
        price: 500.00,
        description: 'Порадуйте своего малыша с этим подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/dlya_detei/3d_ruchki_almaty_astana_kazakhstan_1-420x420.jpg'],
        categoryId:4,
         
        sale: false,
      },
      {
        id:19,
        name: 'LCD-планшет для рисования',
        price: 3500.00,
        description: 'Порадуйте своего малыша с этим подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/biznes/planshet_dlya_risovaniya/LCD_planshet_dlya_risovaniya_i_zametok_4-420x420.jpg'],
        categoryId:4,
         
        sale: false,
      },
      {
        id:20,
        name: 'Игрушки Лео и Тиг',
        price: 6000.00,
        description: 'Порадуйте своего малыша с этим подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/myagkie_igrushki/myagkie_igrushki_leo_i_tig-420x420.jpg'],
        categoryId:4,
         
        sale: false,
      },
      {
        id:20,
        name: 'Проектор черепаха',
        price: 7000.00,
        description: 'Порадуйте своего малыша с этим подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/proector/cherepaha%20i%20korovka/4erep-420x420.jpg'],
        categoryId:4,
         
        sale: false,
      },
      {
        id:21,
        name: 'Часы Евро',
        price: 19000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Suveniri%20iz%20kamnya/chasi_evro-420x420.jpg'],
        categoryId:3,
         
        sale: true,
      },
      {
        id:22,
        name: 'Набор Бизнес',
        price: 19000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/biznes/ruchka_fleshka_powerbank_vizitnica/podarochnii_nabor_usb_powerbank_ruchka-420x420.jpg'],
        categoryId:3,
         
        sale: false,
      },
      {
        id:23,
        name: 'Письменный набор',
        price: 58000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Suveniri%20iz%20kamnya/sdf8726_enl-420x420.jpg'],
        categoryId:3,
         
        sale: false,
      },
      {
        id:24,
        name: 'Ручка Паркер',
        price: 15000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Parker/10/IMG_20190824_212734-600x600.jpg'],
        categoryId:3,
         
        sale: false,
      },
      {
        id:25,
        name: 'Письменный набор',
        price: 41000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Suveniri%20iz%20kamnya/zelen1-420x420.jpg'],
        categoryId:3,
         
        sale: false,
      },
      {
        id:25,
        name: 'Часы Арыстан',
        price: 84000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Suveniri%20iz%20kamnya/sdf8709_enl-420x420.jpg'],
        categoryId:3,
         
        sale: true,
      },
      {
        id:26,
        name: 'Рюкзак-стул',
        price: 30000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/Raznie/rukzak-stul/Rukzak-stul-420x420.jpg'],
        categoryId:3,
         
        sale: false,
      },
      {
        id:27,
        name: 'Тубус для часов',
        price: 84000.00,
        description: 'Порадуйте своего делового партнера, начальника или коллег с этим крутым подарком',
        Image: ['https://exclusive-shop.kz/image/cache/catalog/_organaizeri_chasi_ochki/tubus/tubus_organizer_dlya_chasov_2-420x420.jpg'],
        categoryId:3,
        sale: false,
      },
    ];

    const categories: Category[] = [
      {id: 1, name: "Для мужчин"},
      {id: 2, name: "Для женщин"},
      {id: 3, name: "Деловые подарки"},
      {id: 4, name: "Для детей"},

    ];
    return {products, categories};
  }
 }
