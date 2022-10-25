const mul1_1: AreEqual<Mul<ONE_BYTE, ONE_BYTE>, ONE_BYTE> = true
const mul1_0: AreEqual<Mul<ONE_BYTE, ZERO_BYTE>, ZERO_BYTE> = true
const mul0_1: AreEqual<Mul<ZERO_BYTE, ONE_BYTE>, ZERO_BYTE> = true
const mul1_test: AreEqual<Mul<ONE_BYTE, TEST_BYTE>, TEST_BYTE> = true
const multest_1: AreEqual<Mul<TEST_BYTE, ONE_BYTE>, TEST_BYTE> = true
const mul2_2: AreEqual<Mul<TWO, TWO>, FOUR> = true

type three = [Zero, Zero, Zero, Zero, Zero, Zero, One, One]
type five = [Zero, Zero, Zero, Zero, Zero, One, Zero, One]

const mul3_3: AreEqual<Mul<three, three>, [Zero, Zero, Zero, Zero, One, Zero, Zero, One]> = true
const mul5_3: AreEqual<Mul<five, three>, [Zero, Zero, Zero, Zero, One, One, One, One]> = true
const mul3_5: AreEqual<Mul<three, five>, [Zero, Zero, Zero, Zero, One, One, One, One]> = true

type ten = [Zero, Zero, Zero, Zero, One, Zero, One, Zero]
type fifty = [Zero, Zero, One, One, Zero, Zero, One, Zero]
type hundred = [Zero, One, One, Zero, Zero, One, Zero, Zero]

const mul10_10: AreEqual<Mul<ten, ten>, hundred> = true
const mul10_5: AreEqual<Mul<ten, five>, fifty> = true
