function generateRandomRoboUrl() {
    // Generiraj slučajni broj od 1 do 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
  
    // Stvori URL na temelju slučajnog broja
    const roboUrl = `https://robohash.org/stefan-${randomNumber}`;
  
    return roboUrl.toString();
  }
  
  export default generateRandomRoboUrl;
  