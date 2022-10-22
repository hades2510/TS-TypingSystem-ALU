const minus0: AreEqual<Byte2Complement<ZERO_BYTE>, ZERO_BYTE> = true
const minus127: AreEqual<Byte2Complement<ONE>, ONLY_ONE> = true

const subtractXFromX: AreEqual<Subtract<TEST_BYTE, TEST_BYTE>, ZERO_BYTE> = true
const subtract0from0: AreEqual<Subtract<ZERO_BYTE, ZERO_BYTE>, ZERO_BYTE> = true
const subtract6from8: AreEqual<Subtract<[Zero, Zero, Zero, Zero, One, Zero, Zero, Zero], [Zero, Zero, Zero, Zero, Zero, One, One, Zero]>, TWO> = true
const substract1from2: AreEqual<Subtract<TWO, ONE>, ONE> = true