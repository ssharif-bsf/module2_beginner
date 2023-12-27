function reverseWord() {
    var input = document.getElementById('userInput').value;
    var reversed = input.split('').reverse().join('');
    document.getElementById('result').textContent = reversed;
}

function printMultiplesTable(){
   var number = document.getElementById('userNumberInput').value;
  var table = '<table>';
  let count = 0;
  
   for (let i = 0; i < 4; i++) {
                table += '<tr>'; 
                for (let j = 0; j < 5; j++) {
                    count++;
                    table += '<td>' + (number * count) + '</td>';
                }
                table += '</tr>';
            }

            table += '</table>';
            document.getElementById('tablePlaceHolder').innerHTML = table;
        }