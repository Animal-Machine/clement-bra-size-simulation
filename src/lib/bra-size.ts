import { BreastSize, CupLetter } from "./types";

interface CupSizeDefinition {
  [waistSize: BreastSize]: Array<{
    /** Min number in the interval */
    min: number;
    /** Max number in the interval */
    max: number;
    /** Corresponding cup size letter */
    letter: CupLetter;
  }>;
}
const asymetricCupSizesDefinition: CupSizeDefinition = {
  "80": [
    { min: 16, max: 17, letter: "A" },
    { min: 17, max: 18, letter: "B" },
    { min: 18, max: 19, letter: "C" },
    { min: 19, max: 20, letter: "D" },
    { min: 20, max: 21, letter: "E" },
    { min: 21, max: 22, letter: "F" },
    { min: 22, max: 23, letter: "G" },
  ],
  "85": [
    { min: 17, max: 18, letter: "A" },
    { min: 18, max: 19, letter: "B" },
    { min: 19, max: 20, letter: "C" },
    { min: 20, max: 21, letter: "D" },
    { min: 21, max: 22, letter: "E" },
    { min: 22, max: 23, letter: "F" },
    { min: 23, max: 24, letter: "G" },
  ],
  "90": [
    { min: 18, max: 19, letter: "A" },
    { min: 19, max: 20, letter: "B" },
    { min: 20, max: 21, letter: "C" },
    { min: 21, max: 22, letter: "D" },
    { min: 22, max: 23, letter: "E" },
    { min: 23, max: 24, letter: "F" },
    { min: 24, max: 25, letter: "G" },
  ],
  "95": [
    { min: 19, max: 20, letter: "A" },
    { min: 20, max: 21, letter: "B" },
    { min: 21, max: 22, letter: "C" },
    { min: 22, max: 23, letter: "D" },
    { min: 23, max: 24, letter: "E" },
    { min: 24, max: 25, letter: "F" },
    { min: 25, max: 26, letter: "G" },
  ],
  "100": [
    { min: 20, max: 21, letter: "A" },
    { min: 21, max: 22, letter: "B" },
    { min: 22, max: 23, letter: "C" },
    { min: 23, max: 24, letter: "D" },
    { min: 24, max: 25, letter: "E" },
    { min: 25, max: 26, letter: "F" },
    { min: 26, max: 27, letter: "G" },
  ],
  "105": [
    { min: 21, max: 22, letter: "A" },
    { min: 22, max: 23, letter: "B" },
    { min: 23, max: 24, letter: "C" },
    { min: 24, max: 25, letter: "D" },
    { min: 25, max: 26, letter: "E" },
    { min: 26, max: 27, letter: "F" },
    { min: 27, max: 28, letter: "G" },
  ],
  "110": [
    { min: 22, max: 23, letter: "A" },
    { min: 23, max: 24, letter: "B" },
    { min: 24, max: 25, letter: "C" },
    { min: 25, max: 26, letter: "D" },
    { min: 26, max: 27, letter: "E" },
    { min: 27, max: 28, letter: "F" },
    { min: 28, max: 29, letter: "G" },
  ],
  "115": [
    { min: 23, max: 24, letter: "A" },
    { min: 24, max: 25, letter: "B" },
    { min: 25, max: 26, letter: "C" },
    { min: 26, max: 27, letter: "D" },
    { min: 27, max: 28, letter: "E" },
    { min: 28, max: 29, letter: "F" },
    { min: 29, max: 30, letter: "G" },
  ],
  "120": [
    { min: 24, max: 25, letter: "A" },
    { min: 25, max: 26, letter: "B" },
    { min: 26, max: 27, letter: "C" },
    { min: 27, max: 28, letter: "D" },
    { min: 28, max: 29, letter: "E" },
    { min: 29, max: 30, letter: "F" },
    { min: 30, max: 31, letter: "G" },
  ],
};
/*eslint-disable*/
const symetricCupSizesDefinition: CupSizeDefinition = {
  "80": [
    { min: 77, max: 80, letter: "A" },
    { min: 80, max: 83, letter: "B" },
    { min: 83, max: 86, letter: "C" },
    { min: 86, max: 89, letter: "D" },
    { min: 89, max: 92, letter: "E" },
    { min: 92, max: 95, letter: "F" },
    { min: 95, max: 98, letter: "G" },
  ],
  "85": [
    { min: 82,  max: 85,  letter: "A" },
    { min: 85,  max: 88,  letter: "B" },
    { min: 88,  max: 91,  letter: "C" },
    { min: 91,  max: 94,  letter: "D" },
    { min: 94,  max: 97,  letter: "E" },
    { min: 97,  max: 100, letter: "F" },
    { min: 100, max: 103, letter: "G" },
  ],
  "90": [
    { min: 87,  max: 90,  letter: "A" },
    { min: 90,  max: 93,  letter: "B" },
    { min: 93,  max: 96,  letter: "C" },
    { min: 96,  max: 99,  letter: "D" },
    { min: 99,  max: 102, letter: "E" },
    { min: 102, max: 105, letter: "F" },
    { min: 105, max: 108, letter: "G" },
  ],
  "95": [
    { min: 92,  max: 95,  letter: "A" },
    { min: 95,  max: 98,  letter: "B" },
    { min: 98,  max: 101, letter: "C" },
    { min: 101, max: 104, letter: "D" },
    { min: 104, max: 107, letter: "E" },
    { min: 107, max: 110, letter: "F" },
    { min: 110, max: 113, letter: "G" },
  ],
  "100": [
    { min: 97,  max: 100, letter: "A" },
    { min: 100, max: 103, letter: "B" },
    { min: 103, max: 106, letter: "C" },
    { min: 106, max: 109, letter: "D" },
    { min: 109, max: 112, letter: "E" },
    { min: 112, max: 115, letter: "F" },
    { min: 115, max: 118, letter: "G" },
  ],
  "105": [
    { min: 102, max: 105, letter: "A" },
    { min: 105, max: 108, letter: "B" },
    { min: 108, max: 111, letter: "C" },
    { min: 111, max: 114, letter: "D" },
    { min: 114, max: 117, letter: "E" },
    { min: 117, max: 120, letter: "F" },
    { min: 120, max: 123, letter: "G" },
  ],
  "110": [
    { min: 107, max: 110, letter: "A" },
    { min: 110, max: 113, letter: "B" },
    { min: 113, max: 116, letter: "C" },
    { min: 116, max: 119, letter: "D" },
    { min: 119, max: 122, letter: "E" },
    { min: 122, max: 125, letter: "F" },
    { min: 125, max: 128, letter: "G" },
  ],
  "115": [
    { min: 112, max: 115, letter: "A" },
    { min: 115, max: 118, letter: "B" },
    { min: 118, max: 121, letter: "C" },
    { min: 121, max: 124, letter: "D" },
    { min: 124, max: 127, letter: "E" },
    { min: 127, max: 130, letter: "F" },
    { min: 130, max: 133, letter: "G" },
  ],
  "120": [
    { min: 117, max: 120, letter: "A" },
    { min: 120, max: 123, letter: "B" },
    { min: 123, max: 126, letter: "C" },
    { min: 126, max: 129, letter: "D" },
    { min: 129, max: 132, letter: "E" },
    { min: 132, max: 135, letter: "F" },
    { min: 135, max: 138, letter: "G" },
  ],
};
/*eslint-enable*/
const normalizedBreastSizeDefinition = [
  { min: 63, max: 68, size: "80" },
  { min: 68, max: 73, size: "85" },
  { min: 73, max: 78, size: "90" },
  { min: 78, max: 83, size: "95" },
  { min: 83, max: 88, size: "100" },
  { min: 88, max: 93, size: "105" },
  { min: 93, max: 98, size: "110" },
  { min: 98, max: 103, size: "115" },
  { min: 103, max: 108, size: "120" },
];

class OutOfBoundCupSizeError extends Error {
  constructor() {
    super("Given sizes are out of bounds");

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, OutOfBoundCupSizeError.prototype);
  }
}

const createComputeCupSizeFromFedinitions =
  (definitions: CupSizeDefinition) =>
  (waistSize: number | undefined, chestSize: number | undefined) => {
    const normalizedWaistSize = computeNormalizedWaistSize(waistSize);
    const possibleCupSizes = definitions[normalizedWaistSize];

    if (!possibleCupSizes) {
      throw new OutOfBoundCupSizeError();
    }

    // For chest sizes
    const cupSize = possibleCupSizes.find(
      ({ min, max }) => (chestSize || 0) < max && (chestSize || 0) >= min
    );
    if (!cupSize) {
      throw new OutOfBoundCupSizeError();
    }

    return cupSize.letter;
  };

export const computeAsymetricCupSize = createComputeCupSizeFromFedinitions(
  asymetricCupSizesDefinition
);

export const computeCupSize = createComputeCupSizeFromFedinitions(
  symetricCupSizesDefinition
);

export const computeNormalizedWaistSize = (waistSize: number | undefined) => {
  const normalizedWaistSize = normalizedBreastSizeDefinition.find(
    ({ min, max }) => (waistSize || 0) < max && (waistSize || 0) >= min
  );
  if (!normalizedWaistSize) {
    throw new OutOfBoundCupSizeError();
  }

  return normalizedWaistSize.size;
};
