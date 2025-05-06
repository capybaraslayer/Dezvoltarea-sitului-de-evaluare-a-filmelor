function esteValid(s) {
    let stack = [];
    let paranteze = {')': '(', '}': '{', ']': '['};
    
    for (let char of s) {
        if (Object.values(paranteze).includes(char)) {
            stack.push(char);
        } else if (char in paranteze) {
            if (!stack.length || stack.pop() !== paranteze[char]) {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
}

// Exemple de test
console.log(esteValid("()"));       // true
console.log(esteValid("()[]{}"));   // true
console.log(esteValid("(]"));       // false
console.log(esteValid("([])"));     // true
