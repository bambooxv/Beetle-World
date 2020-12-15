let link = ["https://1.bp.blogspot.com/-0xgEwrIGW-4/XKIVTauckII/AAAAAAAABJw/-WpvmTst654EG08pT8o7xOe1CdCrODmrQCLcBGAs/s1600/emerald-ash-borer-jhahn.jpg", "https://www.renderhub.com/3dstudio/hercules-beetle/hercules-beetle-01.jpg", "https://eunis.eea.europa.eu/images/species//221/39f2ce9ea6b09b68b7b06e4f8dfdccba.jpg"];
var item;

console.log(link);

link.forEach(function(item){
$('.list').append('<img class="picture" src="' + item + '">');
});

function addItemToList() {
     item = $(".inner").val();
    $(".list").append('<img class="picture" src="' + item + '">');
}


function clearInput() {
    $(".inner").val("");
}

$(".add").click(function() {
addItemToList() ;
    link.push(item);
    clearInput();
});