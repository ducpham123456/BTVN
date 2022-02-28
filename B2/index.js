function checkPrime(num){
    let flag = true;

    if (num < 2) {
        flag = false;
    } else {
        for (let i = 2; i < num - 1; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
    }
    // ktra bien flag
    if (flag == true) {
        return true;
    } else {
        return false;
    }            
}

function listPrime() {
    let prime = [];
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    
        for(let i = a; i <= b; i++){
            if (checkPrime(i) == true){
                  prime.push(i);
            
            }
        }
    document.querySelector('#result').innerHTML = prime;
    
}
document.querySelector('#btn').addEventListener("click", listPrime);