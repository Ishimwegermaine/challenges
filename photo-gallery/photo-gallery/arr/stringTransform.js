function transformString(str) {
    const length = str.length;
    
    if (length % 15 === 0) {
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    if (length % 3 === 0) {
        return str.split('').reverse().join('');
    }
    if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    
    return str;
}

// Example usage:
console.log(transformString("Hamburger")); // "regrubmaH"
console.log(transformString("Pizza")); // "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // "eikooCpihCetalocohC"
