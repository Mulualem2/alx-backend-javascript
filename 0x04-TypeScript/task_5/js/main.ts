interface MinorCredits {
  brand: 'minor';
  credit: number;
}

interface MajorCredits {
  brand: 'major';
  credit: number;
}


function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MajorCredits = { credit: sum, brand: "major", };
  return obj;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credit + subject2.credit;
  const obj: MinorCredits = { credit: sum, brand: "minor", };
  return obj;
}
