// function untuk membuat function sendiri

//function kali2 (a,b){
//    document.write(a*b)
//}
// kali2(5,3)
//
// // kata "kali2" memiliki fungsi perkalian

 
var p = prompt('masukan panjang');
var l = prompt('masukan lebar')

function luper(p,l){
   document.write(p * l)
}
luper(p,l)

//var p = prompt('masukan panjang');
//var l = prompt('masukan lebar');
//var t = prompt('masukan tinggi');
//
//function vlb(p,l,t){
//    document.write(p*l*t)
//}
//
//vlb(p,l,t)



//for (var y = 1; y < 10; y++) {
//    for (var x = 1; x < 10; x++) {
//        if (x <= y && x <= 9 - (y - 1)) {
//            document.write("x ")
//        } else if (x >= y && x >= 9 - (y - 1)){
//            document.write("x ")
//        } 
//        else {
//            document.write("_ ")
//        }
//    }
//    document.write("<br/>")
//}


for (var y = 1; y < 10; y++) {
    for (var x = 1; x < 10; x++) {
        if (x > y && x > 9 - (y - 1)) {
            document.write("_ ")
        } else if (x < y && x < 9 - (y - 1)){
            document.write("_ ")
        } 
        else {
            document.write("x ")
        }
    }
    document.write("<br/>")
}