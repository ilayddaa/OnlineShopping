const products = [
    // Kahvaltılık Kategorisi
    { id: 1, name: 'Peynir', price: 150, category: 'Kahvaltılık', image: '/images/peynir.jpg' },
    { id: 2, name: 'Zeytin', price: 100, category: 'Kahvaltılık', image: '/images/zeytin.jpg' },
    { id: 3, name: 'Tereyağı', price: 60, category: 'Kahvaltılık', image: '/images/tereyagi.jpg' },
    { id: 4, name: 'Bal', price: 300, category: 'Kahvaltılık', image: '/images/bal.jpg' },
    { id: 5, name: 'Yumurta', price: 150, category: 'Kahvaltılık', image: '/images/yumurta.jpg' },
    { id: 6, name: 'Reçel', price: 60, category: 'Kahvaltılık', image: '/images/recel.jpg' },
    { id: 7, name: 'Simit', price: 30, category: 'Kahvaltılık', image: '/images/simit.jpg' },
    { id: 8, name: 'Sucuk', price: 160, category: 'Kahvaltılık', image: '/images/sucuk.jpg' },

    // Ara Öğün Kategorisi
    { id: 9, name: 'Meyve', price: 100, category: 'Ara Öğün', image: '/images/meyve.jpg' },
    { id: 10, name: 'Börek', price: 50, category: 'Ara Öğün', image: '/images/borek.jpg' },
    { id: 11, name: 'Ceviz', price: 200, category: 'Ara Öğün', image: '/images/ceviz.jpg' },
    { id: 12, name: 'Fındık', price: 100, category: 'Ara Öğün', image: '/images/fındık.jpg' },
    { id: 13, name: 'Sandviç', price: 100, category: 'Ara Öğün', image: '/images/sandvic.jpg' },
    { id: 14, name: 'Bisküvi', price: 40, category: 'Ara Öğün', image: '/images/biskuvi.jpg' },
    { id: 15, name: 'Kuruyemiş Karışımı', price: 400, category: 'Ara Öğün', image: '/images/kuryemiş.jpg' },
    { id: 16, name: 'Yoğurt', price: 50, category: 'Ara Öğün', image: '/images/yogurt.jpg' },

    // Akşam Yemeği Kategorisi
    { id: 17, name: 'Et', price: 500, category: 'Akşam Yemeği', image: '/images/et.jpg' },
    { id: 18, name: 'Makarna', price: 30, category: 'Akşam Yemeği', image: '/images/makarna.jpg' },
    { id: 19, name: 'Lahmacun', price: 200, category: 'Akşam Yemeği', image: '/images/lahmacun.jpg' },
    { id: 20, name: 'Tavuk', price: 200, category: 'Akşam Yemeği', image: '/images/tavuk.jpg' },
    { id: 21, name: 'Köfte', price: 250, category: 'Akşam Yemeği', image: '/images/kofte.jpg' },
    { id: 22, name: 'Salata', price: 150, category: 'Akşam Yemeği', image: '/images/salata.jpg' },
    { id: 23, name: 'Çorba', price: 30, category: 'Akşam Yemeği', image: '/images/corba.jpg' },
    { id: 24, name: 'Pizza', price: 200, category: 'Akşam Yemeği', image: '/images/pizza.jpg' },

    // Atıştırmalık Kategorisi
    { id: 25, name: 'Patates Kızartması', price: 50, category: 'Atıştırmalık', image: '/images/patates.jpg' },
    { id: 26, name: 'Cips', price: 50, category: 'Atıştırmalık', image: '/images/cips.jpg' },
    { id: 27, name: 'Çikolata', price: 30, category: 'Atıştırmalık', image: '/images/cikolata.jpg' },
    { id: 28, name: 'Mısır Gevreği', price: 60, category: 'Atıştırmalık', image: '/images/misirgevregi.jpg' },
    { id: 29, name: 'Fıstık Ezmesi', price: 120, category: 'Atıştırmalık', image: '/images/fistikezmesi.jpg' },
    { id: 30, name: 'Paket Kurabiye', price: 70, category: 'Atıştırmalık', image: '/images/kurabiye.jpg' },
    { id: 31, name: 'Kek', price: 60, category: 'Atıştırmalık', image: '/images/kek.jpg' },
    { id: 32, name: 'Tuzlu Kraker', price: 20, category: 'Atıştırmalık', image: '/images/kraker.jpg' },

    // İçecekler Kategorisi
    { id: 33, name: 'Kola', price: 50, category: 'İçecekler', image: '/images/kola.jpg' },
    { id: 34, name: 'Su', price: 10, category: 'İçecekler', image: '/images/su.jpg' },
    { id: 35, name: 'Ayran', price: 40, category: 'İçecekler', image: '/images/ayran.jpg' },
    { id: 36, name: 'Meyve Suyu', price: 50, category: 'İçecekler', image: '/images/meyvesuyu.jpg' },
    { id: 37, name: 'Çay', price: 200, category: 'İçecekler', image: '/images/cay.jpg' },
    { id: 38, name: 'Soda', price: 60, category: 'İçecekler', image: '/images/soda.jpg' },
    { id: 39, name: 'Kahve', price: 60, category: 'İçecekler', image: '/images/kahve.jpg' },
    { id: 40, name: 'Fanta', price: 50, category: 'İçecekler', image: '/images/fanta.jpg' },
];

export default products; // Burada default olarak export edilmelidir.