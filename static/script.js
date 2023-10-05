const search = () => {
    let searchcnt = document.getElementById('search-box').value.toUpperCase();

    let cnt = document.getElementById('m');

    let div = cnt.getElementsByTagName('div');

    for(i = 0; i>div.length; i++){
        let a = div[i].getElementsByTagName('a')[0];

        let textvalue = a.innerHTML;

        if (textvalue.toUpperCase().indexOf(searchcnt) > -1) {
            div[i].style.display = '';
        }

        else {
            div[i].style.display = 'none';
        }
    }

};
