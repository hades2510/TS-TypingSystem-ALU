let carr000: AreEqual<AddBitsWithCarry<Zero, Zero, Zero>, {value: Zero, cf: Zero}> = true
let carr100: AreEqual<AddBitsWithCarry<One, Zero, Zero>, {value: One, cf: Zero}> = true
let carr110: AreEqual<AddBitsWithCarry<One, One, Zero>, {value: Zero, cf: One}> = true
let carr010: AreEqual<AddBitsWithCarry<Zero, One, Zero>, {value: One, cf: Zero}> = true
let carr001: AreEqual<AddBitsWithCarry<Zero, Zero, One>, {value: One, cf: Zero}> = true
let carr011: AreEqual<AddBitsWithCarry<Zero, One, One>, {value: Zero, cf: One}> = true
let carr101: AreEqual<AddBitsWithCarry<One, Zero, One>, {value: Zero, cf: One}> = true
let carr111: AreEqual<AddBitsWithCarry<One, One, One>, {value: One, cf: One}> = true

const onePlusThree: AreEqual<Add<ONE, THREE>, FOUR> = true
const twoPlusTwo: AreEqual<Add<TWO, TWO>, FOUR> = true
const threePlusThree: AreEqual<Add<THREE, THREE>, [Zero, Zero, Zero, Zero, Zero, One, One, Zero]> = true
const zeroPlusZero: AreEqual<Add<ZERO_BYTE, ZERO_BYTE>, ZERO_BYTE> = true
const fourPlusFour: AreEqual<Add<FOUR, FOUR>, ShiftLeft<ShiftLeft<ShiftLeft<ONE>>>> = true