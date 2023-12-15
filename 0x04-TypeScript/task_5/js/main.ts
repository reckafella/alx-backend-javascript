export interface MajorCredits {
  credits: number;
  brand: string;
}


export interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MajorCredits;
}


function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits
  } as MinorCredits;
}

/* Example usage */
const mathMajor: MajorCredits = {
  credits: 5,
  brand: 'Math Major'
}

const historyMajor: MajorCredits = {
  credits: 3,
  brand: 'History Major'
}


const mathMinor: MinorCredits = {
  credits: 1,
  brand: 'Math Minor'
}

const historyMinor: MinorCredits = {
  credits: 4,
  brand: 'History Minor'
}

console.log(sumMajorCredits(mathMajor, historyMajor));
console.log(sumMinorCredits(mathMinor, historyMinor));
