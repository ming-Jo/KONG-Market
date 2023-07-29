//입력값 길이 제한 함수
const limitLength = (value: string, maxLength: number) => {
  if (value.length > maxLength) {
    value = value.substring(0, maxLength);
  }
  return value;
};

export default limitLength;
