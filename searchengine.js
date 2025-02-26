function search(){
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.recipe');
    let l = document.getElementsByTagName('a');

    for (var i=0; i<=l.length;i++){
    let a = item[i].getElementsByTagName('a')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toLocaleUpperCase().indexOf(filter)>-1){
        item[i].style.display="";
    }
    else{
        item[i].style.display="none";
    }
    }
}

