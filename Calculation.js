class Calculation {
    constructor(athletes){
        this.athletes = athletes;
    };

    sortArrays(){
        let athletesSort = this.athletes.sort(function (a, b){
            const nomeA = a.nome.toUpperCase();
            const nomeB = b.nome.toUpperCase();

            if(nomeA < nomeB){
                return -1;
            } else if (nomeA > nomeB){
                return 1;
            }
            return 0;
        });
        let athletesAge = athletesSort.sort((a, b) => a.idade - b.idade);
        console.log(athletesAge);
    }

    getThreeNotes(){
        for(let i = 0; i < this.athletes.length; i++){
            const number = this.athletes[i].notas;

            const minimalNumber = Math.min(...number);
            const maxiumNumber = Math.max(...number);

                const indiceParaRemoverMin = this.athletes[i].notas.indexOf(minimalNumber);
                const indiceParaRemoverMax = this.athletes[i].notas.indexOf(maxiumNumber);
                
                if (indiceParaRemoverMin > -1) { 
                    this.athletes[i].notas.splice(indiceParaRemoverMin, 1); 
                }
                if (indiceParaRemoverMax > -1){
                    this.athletes[i].notas.splice(indiceParaRemoverMax, 1);
                }

        };
        return this.athletes;
    }

    calculationNotes(){
        let sums =  this.athletes.map(function (athlete) {
            return athlete.notas.reduce(function(total, nota){
                total += nota;
                return total
            })
        });
        let mediums = sums.map(function (sum){
            return sum / 3;
        });
        let endResults = this.athletes.flatMap(function (athlete, index){
            return  {nome: athlete.nome,
                        media: mediums[index]
                };
        });
        return endResults;
    }

    /*result(){
        let names = this.athletes.map(function (athlete){
            mediums.map(function ( medium){
                return {nome: athlete.nome,
                        média: medium 
                };
            })
        });
        
        return results;
    }*/

}
module.exports = Calculation;