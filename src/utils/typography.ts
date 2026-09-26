/** Format display copy, never permalinks, code blocks, or stored Markdown. */
export function displayText(value: string): string {
  return value
    .replace(/[—–]/g, '--')
    .replace(/([\p{Script=Han}])([A-Za-z0-9])/gu, '$1 $2')
    .replace(/([A-Za-z0-9])([\p{Script=Han}])/gu, '$1 $2');
}
