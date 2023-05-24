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
