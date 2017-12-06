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
    console.log(readVariables(global_clauses))
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
function readVariables(arrayC){
    arrayV = []
    var b = false
    for(i = 0; i < arrayC.length; i++){
      for(e = 0; e < arrayC[i].length; e++){
        if(arrayV.length == 0){
          arrayV[0] = Math.abs(arrayC[i][e]) 
        } else {
          var n = Math.abs(arrayC[i][e])
        arrayV.forEach(function(value, index){
          if(n != value){
            b = true
            console.log(value)
          }
        })
        if(b){
        arrayV.push(n)
        b = false
      }
    }
      }
    }
    return arrayV
}