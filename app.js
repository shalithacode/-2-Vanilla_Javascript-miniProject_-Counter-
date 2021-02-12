//set initial count
let count=0;

//select 3 buttons & value
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener("click", function(b){
        const styles = b.currentTarget.classList;
        if (styles.contains('decrease')) count--;
        else if (styles.contains('reset')) count =0;
        else if (styles.contains('increase')) count++;
        value.innerHTML = count; //or use .textcontant
    });
}

);
