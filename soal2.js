const isBalanced = (expression) => {
  const stack = [];
  const pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let char of expression) {
    if (pairs[char]) {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (pairs[stack.pop()] !== char) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
};

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{(([])[])[]}"));
