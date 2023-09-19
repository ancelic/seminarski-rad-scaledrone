function randomColor() {
  const randomHex = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  return '#' + randomHex;
  }
  
  export default randomColor;