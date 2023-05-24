// My solution.
function longestCommonPrefix(strs: string[]): string {
  const firstElement: string = strs[0];

  let commonPrefix: string = "";

  for (let i = 0; i < firstElement.length; i++) {
    commonPrefix += firstElement.charAt(i);
    for (let j = 1; j < strs.length; j++) {
      if (commonPrefix[i] === strs[j].charAt(i)) {
        continue;
      } else {
        return commonPrefix.substring(0, i);
      }
    }
  }
  return commonPrefix;
}

/*

After completing the challenge, I discovered an improved solution
in the LeetCode problem solutions section that I really liked.
I thought it would be beneficial to share it with all of you.
*/
function longestCommonPrefixLeetCode(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }

    if (prefix === "") {
      return prefix;
    }
  }

  return prefix;
}
