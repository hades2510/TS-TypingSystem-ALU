const shiftZeroRight: AreEqual<ShiftRight<ZERO_BYTE>, ZERO_BYTE> = true
const shiftOneRight: AreEqual<ShiftRight<ONE>, ZERO_BYTE> = true
const shiftThreeRight: AreEqual<ShiftRight<THREE>, ONE> = true
const shiftFourRight: AreEqual<ShiftRight<FOUR>, TWO> = true
const shiftFourRightTWICE: AreEqual<ShiftRight<ShiftRight<FOUR>>, ONE> = true

const shiftTestRight: AreEqual<ShiftRight<TEST_BYTE>, [Zero, Zero, One, One, Zero, One, Zero, Zero]> = true

const shiftZeroLeft: AreEqual<ShiftLeft<ZERO_BYTE>, ZERO_BYTE> = true
const shiftOneLeft: AreEqual<ShiftLeft<ONE>, TWO> = true
const shiftTwoLeft: AreEqual<ShiftLeft<TWO>, FOUR> = true
const shiftThreeLeft: AreEqual<ShiftLeft<THREE>, [Zero, Zero, Zero, Zero, Zero, One, One, Zero]> = true

const shiftTestLeft: AreEqual<ShiftLeft<TEST_BYTE>, [One, One, Zero, One, Zero, Zero, One, Zero]> = true
