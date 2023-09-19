function generateRandomRoboUrl() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const roboUrl = `https://robohash.org/stefan-${randomNumber}`;
  
    return roboUrl.toString();
  }
  
  export default generateRandomRoboUrl;
  