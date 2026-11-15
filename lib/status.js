export function statusLine(...parts) {
  if (parts.length === 0) return 'No components';
  return `${parts.join(' + ')} running`;
}
