// Step 1 -> Red
/* describe('palindrome checker', () => {
  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ❌
  });
}); */

// Step 2 -> Green
/* import { PalindromeChecker } from './palindrome';

describe('palindrome checker', () => {
  it('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ✅
  });
}); */

// Step 3 -> Refactor (nothing yet) -> Red -> Green
/* import { PalindromeChecker } from './palindrome';

describe('palindrome checker', () => {
  it('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ✅
  });

  it("should be able to tell that 'bill' isn't a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy(); // ❌ -> ✅
  });
}); */

// Step 4 -> Refactor (rule of three) -> Red -> Green
/* import { PalindromeChecker } from './palindrome';

describe('palindrome checker', () => {
  it('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ✅
  });

  it("should be able to tell that 'bill' isn't a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy(); // ✅
  });

  it('should still detect a palindrome even if the casing is off', () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy(); // ❌ -> ✅
  });
}); */

// Step 5 -> Refactor
/* import { PalindromeChecker } from './palindrome';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ✅
  });

  it("should be able to tell that 'bill' isn't a palindrome", () => {
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy(); // ✅
  });

  it('should still detect a palindrome even if the casing is off', () => {
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy(); // ✅
  });
}); */

// Step 6 -> Red -> Green
import { PalindromeChecker } from './palindrome';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy(); // ✅
  });

  it("should be able to tell that 'bill' isn't a palindrome", () => {
    expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy(); // ✅
  });

  it('should still detect a palindrome even if the casing is off', () => {
    expect(palindromeChecker.isAPalindrome('Mom')).toBeTruthy(); // ✅
  });

  it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Was It A Rat I Saw')).toBeTruthy(); // ❌ -> ✅
  });

  // Step 8
  it('should be able to tell that "Never Odd or Even" is palindrome', () => {
    expect(palindromeChecker.isAPalindrome('Never Odd or Even')).toBeTruthy(); // ✅
  });
});
