function liczenie(){
    const c_z60 = 4.5;
    const c_z32 = 1.2;
    const cyr = 12.4;
    const lnij = 7.2;

    const wstaw = document.getElementById('wynik');

    let liczba = document.getElementById('cena').value;
    let przedmiot = document.getElementById('co').value;

    let wynik = 0;

    //  alert (przedmiot);
    //  alert(wynik);
    //  alert(liczba);

    if(przedmiot == "z60"){
       wynik = c_z60 * liczba;
       wstaw.innerHTML = "wynik wynosi: " + wynik;
       
    }
    if(przedmiot == "z32"){
        wynik = c_z32 * liczba;
        wstaw.innerHTML = "wynik wynosi: " + wynik;
        
     }
     if(przedmiot == "cyr"){
        wynik = cyr * liczba;
        wstaw.innerHTML = "wynik wynosi: " + wynik;
        
     }
     if(przedmiot == "lni"){
        wynik = lnij * liczba;
        wstaw.innerHTML = "wynik wynosi: " + wynik;
        
     }

    
}

function czerwony(){
    let w = document.getElementsByClassName('kolory');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'red';

    }
}
function zielony(){
    let w = document.getElementsByClassName('kolory');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'green';

    }
}
function niebieski(){
    let w = document.getElementsByClassName('kolory');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'blue';

    }
}
function pomaranczowy(){
    let w = document.getElementsByTagName('table');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'orange';

    }
}
function fioletowy(){
    let w = document.getElementsByTagName('table');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'purple';

    }
}
function czarny(){
    let w = document.getElementsByTagName('table');
    let ilosc = w.length;
    
    for(i=0; i<ilosc; i++){
        w[i].style.color = 'black';

    }
}
function czarno_bialy(){
    let w = document.getElementsByTagName('table');
    let s = document.querySelectorAll('td','tr');
    let ilosc = s.length;

    w[0].style.borderColor = 'black';
    w[0].style.backgroundColor = 'white';
    
    for(i=0; i<ilosc; i++){
        
        s[i].style.borderColor = 'black';
        

    }
}
function zielono_zolty(){
    let w = document.getElementsByTagName('table');
    let s = document.querySelectorAll('td','tr');
    let ilosc = s.length;

     w[0].style.borderColor = 'green';
     w[0].style.backgroundColor = 'yellow';
    
    for(i=0; i<ilosc; i++){
        s[i].style.borderColor = 'green';
       
        

    }
}
function fioletowo_zielony(){
    let w = document.getElementsByTagName('table');
    let s = document.querySelectorAll('td','tr');
    let ilosc = s.length;

    w[0].style.borderColor = 'purple';
    w[0].style.backgroundColor = 'green';
    
    for(i=0; i<ilosc; i++){
        
        s[i].style.borderColor = 'purple';    

    }
}


