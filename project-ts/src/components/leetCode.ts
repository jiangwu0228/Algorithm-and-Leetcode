function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map) {
            stack.push(char);
        }
        if (char in map) {
            if (map[char] !== stack.pop()) {
                return false;
            }
        }

    }
    return stack.length === 0;
};

console.log(isValid('([{}])'));

export {};