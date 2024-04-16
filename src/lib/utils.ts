export const getQuery = (key: string) => {
  const search = window.location.search;
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const r = search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};