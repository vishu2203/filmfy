const search = () => {
    const search_item = document.getElementById('search-box').value.toUpperCase();
    const items = document.getElementById('m');
    const box = document.getElementsByClassName('box');
    const heading = items.getElementsByTagName('p');
    
    if (search_item == heading[0].innerHTML.toUpperCase()) {
        box[0].style.display = 'block';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[1].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'block';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[2].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'block';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[3].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'block';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[4].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'block';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[5].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'block';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[6].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'block';
        box[7].style.display = 'none';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[7].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'block';
        box[8].style.display = 'none';
    }

    else if(search_item == heading[10].innerHTML.toUpperCase()) {
        box[0].style.display = 'none';
        box[1].style.display = 'none';
        box[2].style.display = 'none';
        box[3].style.display = 'none';
        box[4].style.display = 'none';
        box[5].style.display = 'none';
        box[6].style.display = 'none';
        box[7].style.display = 'none';
        box[8].style.display = 'block';
    }

    else {
        
    }
};
