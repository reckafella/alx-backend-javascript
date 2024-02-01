const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
  
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
  
    if (type === 'DIVIDE') {
      const a_rounded = Math.round(a);
  
      const b_rounded = Math.round(b);
  
      if (b_rounded === 0) {
        return 'Error';
      }
      return a_rounded / b_rounded;
    }
  }
}

module.exports = Utils;
