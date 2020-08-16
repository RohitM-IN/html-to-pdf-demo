function makeid(id) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 7; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
    result = "UID" + result;
   //document.getElementById(id).innerHTML = "UID"+result;
    return result;
}


window.addEventListener('load', (event) => {
    let a = makeid()
 document.getElementById("unique-id").innerHTML = a
    docid("order_id").value = a
});

//window.addEventListener('keyup', ()=> {
//    var item1 = parseFloat(docid("item1-val").value),
//        item2 = parseFloat(docid("item2-val").value),
//        total = docid("total-val");
//
//
//    total.innerHTML = item1 + item2
//});

function onchangetotal() {
    var item1 = parseFloat(docid("item1-val").value) || 0,
        item2 = parseFloat(docid("item2-val").value) || 0,
        total = docid("total-val");


    total.innerHTML = item1 + item2
}


function docid(id) {
    return document.getElementById(id);
}

