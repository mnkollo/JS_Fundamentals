
function convertLength(length, from, to) {
    if (from === 'km' && to === 'miles') {
        return `${length / 1.6} miles`
    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} km`;
    } else if ( from === to){
        return `${length} ${to}`
    }
}

// You can also do if (from === 'km' && to === 'km) { ... }
        // if (from === to) is a trick you can use to save some code.

console.log(convertLength(50, 'miles', 'km'))
console.log(convertLength(32, 'km', 'miles'))
console.log(convertLength(50, 'km', 'km'))