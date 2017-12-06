fs = require('fs')
var problema = fs.readFileSync('../sat-master/hole1.cnf', 'utf8')
problema = problema.split('\n')
  for(i = 0; i < problema.length; i++){
        if(problema[i][0] == 'p'){
            quant = problema[i].split(' ')
            var quantC = quant[3]
            var quantV = quant[2]
        }
    }

var global_clauses = readClauses(problema)
console.log(global_clauses)
function readClauses(problema){
    arrayC = []
    clauses = []
    var act = ""
    for(var i = 0; i < problema.length; i++){
        if(problema[i][0] != 'c' && problema[i][0] != 'p' && problema[i] !== null){
            if(problema[i].endsWith(0)){
              for(var e = 0; e < (problema[i].length)-1; e++){
                if(problema[i][e] !== " "){
                  if(problema[i][e] == "-"){
                    act += problema[i][e]
                  }
                  else{
                    act += problema[i][e]
                    clauses.push(act)
                    act = ""
                  }
                }
              }
              arrayC.push(clauses)
              var clauses = []
            }
            else{
              for(var e = 0; e < (problema[i].length); e++){
                if(problema[i][e] !== " "){
                  if(problema[i][e] == "-"){
                    act += problema[i][e]                     
                  }
                  else{
                    act += problema[i][e]
                    clauses.push(act)
                    act = ""
                  }
                }
              }
            }
          }
        }
        return arrayC
    }
function isInArray(n, array){
  for(k = 0; k < array.length; k++){
    if(array[k] === n){
      return true;
    }
  }
  return false;
}


function readVariables(clauses){
  var vars = []
  for(i = 0; i < clauses.length; i++){
    for(e = 0; e < clauses[i].length; e++){
      var n = Math.abs(clauses[i][e])
      if(!(isInArray(n, vars))){
        vars.push(n)
      }
    }
  }
  newvars = []
  for(j = 0; j < vars.length; j++){
    newvars[j] = 0
  }
  return newvars;
}
console.log(readVariables(global_clauses))
