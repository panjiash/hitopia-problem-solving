const highestPalindrome = (string, k) => {
  if (k === 0) return string;

  const len = string.length;
  if (len === 1) return "9";

  const firstHalf = string.slice(0, Math.floor(len / 2));
  let secondHalf = string
    .slice(Math.ceil(len / 2))
    .split("")
    .reverse()
    .join("");

  if (len % 2 !== 0) {
    secondHalf = secondHalf.slice(1);
  }

  if (firstHalf === secondHalf) {
    return string;
  }

  const midChar = len % 2 === 0 ? "" : string[Math.floor(len / 2)];
  const maxChar = Math.max(string[0], string[len - 1]);

  return highestPalindrome(
    maxChar + firstHalf.slice(1) + maxChar + midChar + maxChar + secondHalf,
    k - 1
  );
};

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("3943", 2));
console.log(highestPalindrome("12921", 2));
