function modulo(){
  let nbr1 = document.getElementById('firstNumber').value;
  let nbr2 = document.getElementById('secondNumber').value;
  let result = nbr1 % nbr2;
// "%" est la formule modulo pour indiquer le reste d'une division
  if(isNaN(nbr1) || isNaN(nbr2)){
    alert('Mettez des nombres !');
  }
  else {
    alert(result);
  }
}
