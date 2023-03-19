// Step 1 -> Red -> Green
/* export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    return true; // This is the simplest thing!
  }
} */

// Step 3 -> Red -> Green
/* export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return reversed === str;
  }
} */

// Step 4 -> Red -> Green
/* export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return reversed.toLowerCase() === str.toLowerCase();
  }
} */

// Step 6 -> Red -> Green
/* export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return (
      reversed.toLowerCase().split(' ').join('') ===
      str.toLowerCase().split(' ').join('')
    );
  }
} */

// Step 7 -> Refactor
export class PalindromeChecker {
  private getReversedString = (str: string) => str.split('').reverse().join('');

  private getStripedSpacesAndCaseOff = (str: string) =>
    str.split(' ').join('').toLowerCase();

  isAPalindrome(str: string): boolean {
    const reversed = this.getReversedString(str);
    return (
      this.getStripedSpacesAndCaseOff(reversed) ===
      this.getStripedSpacesAndCaseOff(str)
    );
  }
}
