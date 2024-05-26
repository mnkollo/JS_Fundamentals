// #1 For loop in Javascript

const nemo = ['nemo']
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'grill','bloat', 'nigel', 'squirt','darla','hank']
const large = new Array(1000).fill('nemo')

function findNemo(array){
    for(let i =0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!')
        }
    }
}

findNemo(everyone)