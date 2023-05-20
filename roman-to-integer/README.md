# Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

## Problem Description

Given a Roman numeral, convert it to an integer.

Roman numerals are usually written largest to smallest from left to right. However, there are cases where subtraction is used. For example, the number four is not written as IIII but as IV. The principle is that if a smaller number appears before a larger one, it is subtracted from the larger number. There are six instances of subtraction:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.

## Examples

### Example 1:

Input: "III"
Output: 3
Explanation: III is equivalent to 3.

### Example 2:

Input: "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3. The total value is 50 + 5 + 3 = 58.

### Example 3:

Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, and IV = 4. The total value is 1000 + 900 + 90 + 4 = 1994.

## Constraints

- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid Roman numeral in the range [1, 3999].
