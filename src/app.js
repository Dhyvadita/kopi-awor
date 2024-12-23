document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Eskimo Kiss',       img: 'Eskimo Kiss.jpg',deskripsi :'Espresso Mixed With Sweet Palm Sugar, Condesed Milk, Cream And Cold Fresh Milk. Everyone Favorite', price: 20000},
            {id: 2, name: 'Palmeira',          img: 'Palmeira.jpg',deskripsi :'Espresso, Cold Fresh Milk, Mixed With Cream And Palm Sugar. Simple, Sweet And Strong', price: 21000},
            {id: 3, name: 'Bianca',            img: 'Bianca.jpg',deskripsi :'Awor newest es kopi susu. your daily dose if smooth and creamy latte', price: 23000},
            {id: 4, name: 'Stevia Latte',      img: 'Stevia Latte.jpg',deskripsi :'Stevia Latte with extra low calorie. stevia latte, its sweeter but healthier', price: 20000},
            {id: 5, name: 'Black Summer',      img: 'Black Summer.jpg',deskripsi :'EA Beauty In Ipanema Sunshine', price: 21000},
            {id: 6, name: 'Irish Blood',       img: 'Irish Blood.jpg',deskripsi :'Doppio, Irish Cream, Shake With Ice', price: 25000},
            {id: 7, name: 'Awor Coffee Cream', img: 'Awor Coffee Cream.jpg',deskripsi :'Ice Cream Vanilla, Espresso And Hazelnut, A Treat For Soul', price: 28000},
            {id: 8, name: 'Affogato',          img: 'Affogato.jpg',deskripsi :'Ice Cream And Espresso, Is Affogato A Drink To Dessert', price: 30000},
            {id: 9, name: 'Monte Bianco',      img: 'Monte Bianco.jpg',deskripsi :'Awor Signature Hazelnut Coffee Blend, Top With Ice Cream And Sprinkle Of Chocolate', price: 31000},
            {id: 10, name: 'Hazel Oreo',       img: 'Hazel Oreo.jpg',deskripsi :'Hazelnut And Oreo Blend With Ice Cream On Top', price: 28000},
            {id: 11, name: 'Matcha Blend',     img: 'Matcha Blend.jpg',deskripsi :'A Matcha Blend, Sweet And Bitter, A Life', price: 28000},
            {id: 12, name: 'Orange Blast',     img: 'Orange Blast.jpg',deskripsi :'Orange Fresh Blend', price: 20000},
            {id: 13, name: 'Milkshake Oreo',   img: 'Milkshake Oreo.jpg',deskripsi :'Old School Vanilla Milkshake With Oreo, Ice Cream Attack', price: 24000},
            {id: 14, name: 'Red Velvet',       img: 'Red Velvet.jpg',deskripsi :'A Birthday Party In Your Mouth', price: 23000},
            {id: 15, name: 'Greentea Latte',   img: 'Greentea Latte.jpg',deskripsi :'Real Matcha With Cold Fresh Milk', price: 25000},
            {id: 16, name: 'Taro Latee',       img: 'Taro Latee.jpg',deskripsi :'Something Good, Something Different, A Talas, Sweet Creamy Drink', price: 24000},
            {id: 17, name: 'Spesial Thai Tea', img: 'Spesial Thai Tea.jpg',deskripsi :'Freshly Brewed Original Thai Tea With Creamy Milk', price: 24000},
            {id: 18, name: 'French Croissant', img: 'French Croissant.jpg',deskripsi :'Made With Real French Butter, Authentic Taste And Texture Of Croissants From Parisian Bakeries', price: 23000},
            {id: 19, name: 'Cinnamon Swirl Pastry', img: 'Cinnamon Swirl Pastry.jpg',deskripsi :'Made With a Butter pastry with Cinnamon added and shaped in a Spiral', price: 24000},
            {id: 20, name: '2 Croffle',             img: '2 Croffle.jpg',deskripsi :'2pcs crunchy and buttery waffle, a croffle. The trendiest treat around', price: 20000},
            {id: 21, name: 'Grilled Cheese',        img: 'Grilled Cheese.jpg',deskripsi :'Toasted sandwich with Red ceddar and mozzarella.', price: 24000},
            {id: 22, name: 'French Fries',          img: 'French Fries.jpg',deskripsi :'Deep fried potatoes, a chips', price: 28000},
            {id: 23, name: 'Loaded Fries',          img: 'Loaded Fries.jpg',deskripsi :'Easy French fries cover with warm Bolognese, fresh mustard, and creamy mayonnaise. Comforting starter to share with friends', price: 28000},
            {id: 24, name: 'Bolognese',             img: 'Bolognese.jpg',deskripsi :'Slowly cooked genuine beef ragu alla Bolognese pasta with sprinkle of parmesan and chopped fresh parsley. Very comforting for your daily choice of menu', price: 28000},
            {id: 25, name: 'Carbonara',             img: 'Carbonara.jpg',deskripsi :'Creamy pasta dish with Cheddar and parmesan with shredded smoked beef and chopped fresh parsley', price: 28000},
            {id: 26, name: 'Aglio Olio',            img: 'Aglio Olio.jpg',deskripsi :'Everyones favorite simple Aglio e Olio pasta', price: 26000},
            {id: 27, name: 'Creamy Mushroom Pasta', img: 'Creamy Mushroom Pasta.jpg',deskripsi :'Creamy pasta dish with Cheddar and parmesan with Mushroom and chopped fresh parsley', price: 33000},
            {id: 28, name: 'Curry Cube',            img: 'Curry Cube.jpg',deskripsi :'Buttery Saikoro with delicious Japanese curry served with steamy rice and a bit of mayonnaise and mustard to make it more delicious', price: 31000},
            {id: 29, name: 'Fish & Chips',          img: 'Fish & Chips.jpg',deskripsi :'The authentic fried fish in special crispy batter served with French fries, fresh salad with honey mustard dressing, and our special eggy Tartar. Very mouth-watering', price: 35000},
            {id: 30, name: 'Chicken Nanban',        img: 'Chicken Nanban.jpg',deskripsi :'Chicken Karaage soaked in fresh Ponzu-Nanban sauce over steamy rice, flooded with creamy yet fresh Japanese Tartar. Complex taste and will make your tummy happy', price: 31000},
   
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            //cek apakah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            //jika belum ada / cart masih kosong
            if(!cartItem){
                this.items.push({...newItem, quantity: 1, total: newItem.price});
                this.quantity++;
                this.total += newItem.price;
            }else{
                //jika barang sudah ada, cek apakahbarang beda atau sama dengan yg ada di cart
                this.items = this.items.map((item) => {
                    if (item.id !== newItem.id){
                        return item;
                    }else {
                        //jika barang sudah ada, tambah wuantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id){
            //ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            //jika item lebih dari 1
            if(cartItem.quantity > 1) {
                //telusuri 1 1
                this.items = this.items.map((item) => {
                    //jika bukan barang yang di klik 
                    if(item.id != id){
                        return item;
                    }else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            }else if (cartItem.quantity === 1){
                //jika barangnya sisa 1 
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        },
    });
});

//form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');

form.addEventListener('keyup', function(){
    for(let i=0; i < form.elements.length; i++){
        if(form.elements[i].value.length !== 0){
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled');
        }else{
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
});

//kirim data ketika tombol checkout diklik
checkoutButton.addEventListener('click', async function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    // const message = formatMessage(objData);
    // window.open('http://wa.me/62895377044585?text=' + encodeURIComponent(message));

    //minta transaction token menggunakan ajax / fetch
    try{
        const response = await fetch('php/placeOrder.php', {
            method: 'POST',
            body: data,
        });
        const token = await response.text();
        //console.log(token);
        window.snap.pay(token);
    } catch(err) {
        console.log(err.message);
    }
});

//format pesan whatsapp
const formatMessage = (obj) => {
    return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
Data Pesanan 
${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
TOTAL: ${rupiah(obj.total)}
Terima kasih.`;
};

//konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0, 
    }).format(number);
};


