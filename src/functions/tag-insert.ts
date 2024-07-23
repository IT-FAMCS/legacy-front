export function tagInsert({ tag }: { tag: string }) {
  const input = document.activeElement;

  if (input instanceof HTMLInputElement) {
    const startPosition = input.selectionStart || 0;
    const endPosition = input.selectionStart || 0;
    const text = input.value.substring(startPosition, endPosition);
    input.value =
      input.value.substring(0, startPosition) +
      `[${tag}]${text}[/${tag}]` +
      input.value.substring(endPosition, input.value.length);
  }
}
