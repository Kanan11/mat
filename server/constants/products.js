const products = [
  {
    id: 1,
    api_id: "price_1KIupQKM0qNX2m1Ef1CDKERY",
    category: "Pasta",
    name: "Truffle Pasta",
    description: "Tryffle pasta med svenska svampar och gräddsås",
    price: 75,
    image:
      'https://whereismyspoon.co/wp-content/uploads/2021/02/truffle-pasta2-1-735x1088.jpg.webp'
  },
  {
    id: 2,
    api_id: "price_1KIv32KM0qNX2m1EQuq3042O",
    category: "Pasta",
    name: "Spahetti Bolonese",
    description: "Spagetti Bolonese på svenskt vis",
    price: 70,
    image:
      'https://images.aftonbladet-cdn.se/v2/images/d22c924a-1b57-41f8-b325-2499c029e76f?fit=crop&format=auto&h=429&q=50&w=700&s=9e32a1dd4a92ded2f5f284bf534ffe0ad2179b43'
  },
  {
    id: 3,
    api_id: "price_1KIvJeKM0qNX2m1Eb8WsAG9K",
    category: "Förrätter",
    name: "Toast Skagen",
    description: "Svensk klassiker Toast Skagen, handskalade svenska räkor med löjrom, nybakat surdegsbröd",
    price: 70,
    image:
      'https://img.koket.se/standard-mega/fra-sch-toast-skagen.jpg.webp'
  },
  {
    id: 4,
    api_id: "price_1KIvR7KM0qNX2m1Ev2doUpUk",
    category: "Förrätter",
    name: "Vitlökspizza",
    description: "Vitlök, ost, basilika och oregano toppad med olivolja och parmesan",
    price: 50,
    image:
      'https://thumb.mp-farm.com/1717702/preview.jpg'
  },
  {
    id: 5,
    api_id: "price_1KIvfaKM0qNX2m1EscfpVfg2",
    category: "Kött",
    name: "Stekt renskalv",
    description: "Stekt renskalv serveras med hemlagad potatismos, kantarellsås och enbar",
    price: 80,
    image:
      'https://img.koket.se/standard-mega/helstekt-kalvfile-grundrecept.jpg.webp'
  },
  {
    id: 6,
    api_id: "price_1KIvqLKM0qNX2m1ENOdYIcsM",
    category: "Kött",
    name: "Köttbullar",
    description: "Svenska köttbullar serveras med potatismos, pressgurka, rårörda lingon från svenska skogar och brunsås",
    price: 75,
    image:
      'https://cdn-rdb.arla.com/Files/arla-se/3776820023/44d39292-0f40-46d6-a91c-0ff5931476e0.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790'
  },
  {
    id: 7,
    api_id: "price_1KIwBrKM0qNX2m1ECIWFORLt",
    category: "Kött",
    name: "Pyttipanna med köttfärs",
    description: "Svensk klassiker. Gjord på nypotatis och högrevsköttfärs, serveras med stekt ägg och rödbetor",
    price: 65,
    image:
      'https://www.lisaelmqvist.se/plugins/liteshop/265/images/p19497-88961.jpg'
  },
  {
    id: 8,
    api_id: "price_1KIwQfKM0qNX2m1EO7uFDkdH",
    category: "Fisk",
    name: "Bakpotatis fylld med tonfiskröra",
    description: "Svensk bakpotatis med krämig tonfiskröra och persilja, serveras med sallad",
    price: 65,
    image:
      'https://i1.wp.com/media.zeinaskitchen.se/2017/06/04012016-IMG_2777-01.jpeg?w=1333&ssl=1'
  },
  {
    id: 9,
    api_id: "price_1KIwk8KM0qNX2m1EEJiTxwT5",
    category: "Fisk",
    name: "Korvstroganoff",
    description: "Korvstroganoff med ris",
    price: 65,
    image:
      'https://usercontent.one/wp/www.zontho.se/wp-content/uploads/2020/07/korvstroganoff-768x768.jpg'
  },
  {
    id: 10,
    api_id: "price_1KIxfBKM0qNX2m1E3na3UjIO",
    category: "Fisk",
    name: "Torsk",
    description: "Torsk från västkusten med potatismos ärtor och dill",
    price: 70,
    image:
      'https://receptfavoriter.se/sites/default/files/ugnsbakad_torsk_med_pepparrot_och_skiratsmor_980.jpg'
  },
  {
    id: 11,
    api_id: "price_1KIxkIKM0qNX2m1EKECgEKMe",
    category: "Kött",
    name: "Pannbiffar",
    description: "Pannbiffar med nypotatis lingon och sockerärtor",
    price: 70,
    image:
      'https://theresematochbak.se/wp-content/uploads/2017/04/DSC_3406-01-2048x1362.jpeg'
  },
  {
    id: 12,
    api_id: "price_1KIyJAKM0qNX2m1EFM28a09H",
    category: "Kött",
    name: "Entrecote",
    description: "Svensk entrecote med hemmalagade pommes frites, serveras med rödvinssky på sidan",
    price: 95,
    image:
      'https://www.gastronaut.nu/wp-content/uploads/2017/10/Grillad-entrecote-med-67graders-%C3%A4gg-och-yuzudressing.jpg'
  },
  {
    id: 13,
    api_id: "price_1KIyWdKM0qNX2m1ER4xEgFl4",
    category: "Pasta",
    name: "Spagetti Marinara",
    description: "Svenska pilgrimsmusslor med chili och vitlök i vitvinssås",
    price: 85,
    image:
      'https://img.bestrecipes.com.au/u6zxQB0z/w643-h428-cfill-q90/br/2020/10/spaghetti-marinara-960532-1.jpg'
  },
  {
    id: 14,
    api_id: "price_1KIydDKM0qNX2m1E46CVZUS0",
    category: "Soppa",
    name: "Pumpasoppa",
    description: "Krämig, smakrik och söt pumpasoppa, toppas med gräddfil, örter och chili",
    price: 55,
    image:
      'https://res.cloudinary.com/hh7ya2nn2/image/upload/c_fill,dpr_1.0/lehjsj9lqggub3akiya8'
  },
  {
    id: 15,
    api_id: "price_1KIyidKM0qNX2m1EewBXqDTW",
    category: "Soppa",
    name: "Tomat och championsoppa",
    description: "Smakrik tomat och championsoppa, med en hint utav vitlök, citron och chili",
    price: 70,
    image:
      'https://media.hemmahosandrea.se/2013/01/IMG_08871.jpg'
  }
];

module.exports = products;

