export const autoCompleteFilter = (
  inputValue: string,
  option: { value: string; label: string } | undefined
): boolean =>
  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
