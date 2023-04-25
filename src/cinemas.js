import arenaTheMall from './images/arena_the_mall.jpg';
import arenaGrandMallVarna from './images/arena_grand_mall_varna.jpeg';
import arenaDeluxeBulgariaMall from './images/arena_deluxe_bulgaria_mall.jpg';
import arenaMolVarna from './images/arena_mol_varna.jpg';
import arenaMolMarkovoTepePlovdiv from './images/arena_mol_markovo_tepe_plovdiv.jpg';

const CINEMAS = [
    {
        id: 1,
        image: arenaTheMall,
        name: "КИНО АРЕНА THE MALL",
        address: "гр. София, бул. Цариградско шосе 115 Търговски център The MALL",
        phone: "02 4047 121",
        city:"София",
    },
    {
        id: 2,
        image: arenaGrandMallVarna,
        name: "КИНО АРЕНА GRAND MALL ВАРНА",
        address: "гр. Варна, ул. Акад. Андрей Сахаров Търговски център Grand Mall",
        phone: "02 4047 133",
        city:"Варна",
    },
    {
        id: 3,
        image: arenaDeluxeBulgariaMall,
        name: "КИНО АРЕНА BULGARIA MALL",
        address: "гр. София, бул. България 69 Търговски център Bulgaria Mall",
        phone: "02 4047 123",
        city:"София",
    },
    {
        id: 4,
        image: arenaMolVarna,
        name: "КИНО АРЕНА МОЛ ВАРНА",
        address: "гр. Варна, бул. Владислав Варненчик 186 Търговски център Мол Варна",
        phone: "02 4047 131",
        city:"Варна",
    },
    {
        id: 5,
        image: arenaMolMarkovoTepePlovdiv,
        name: "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ",
        address: "гр. Пловдив, бул. Руски 54 Търговски център Мол Марково Тепе",
        phone: "02 4047 125",
        city:"Пловдив",
    }
]

export default CINEMAS;
