function firstWord(s) {
  if (!s) return "";
  let trimmed = s.trim();
  if (!trimmed) return "";
  let idx = trimmed.indexOf(" ");
  return idx === -1 ? trimmed : trimmed.substring(0, idx);
}