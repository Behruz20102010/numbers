let summa = 310000;
let raqam = 5;
let nechtaligi = 10;
let narx;
let nom;

if (raqam == 1) {
    narx = 8000;
    nom = "Cola";
}
else if (raqam == 2) {
    narx = 12000;
    nom = "Snikers";
}
else if (raqam == 3) {
    narx = 15000; 
    nom = "Pepsi";
}
else if (raqam == 4) {
    narx = 10000;
    nom = "Fusetea";
}
else if (raqam == 5) {
    narx = 11000;
    nom = "Lipton";
}
else if (raqam == 6) {
    narx = 5000;
    nom = "Olma";
}
else if (raqam == 7) {
    narx = 7000;
    nom = "Banan";
}
else if (raqam == 8) {
    narx = 9000;
    nom = "Twice";
}
else if (raqam == 9) {
    narx = 3000;
    nom = "Kango";
}
else if (raqam == 10) {
    narx = 20000;
    nom = "Sandwich";
}
else {
    console.log("Noto'g'ri summa!");
}

// === Yangi qo'shilgan qism ===
if (narx) {
    let jami = narx * nechtaligi;  // nechta olishing
     
    if (summa >= jami) {
        console.log(`${nom} ${nechtaligi} ta olur`);
    } else {
        console.log(`Summa yetmaydi! ${nom} ${nechtaligi} ta uchun ${jami} so'm kerak`);
    }
}
