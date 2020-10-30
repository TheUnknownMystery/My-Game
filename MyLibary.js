function isTouching(p1, p2) {
    if (p1.x - p2.x < p2.width / 2 + p1.width / 2
      && p2.x - p1.x < p2.width / 2 + p1.width / 2
      && p1.y - p2.y < p2.height / 2 + p1.height / 2
      && p2.y - p1.y < p2.height / 2 + p1.height / 2) {
  
      return true;
    }
    else {
  
      return false;
  
    }
  
  
  }
  