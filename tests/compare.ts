const eq1_1: AreEqual<EQ<ONE_BYTE, ONE_BYTE>, true> = true
const eq1_0: AreEqual<EQ<ONE_BYTE, ZERO_BYTE>, false> = true
const eq0_0: AreEqual<EQ<ZERO_BYTE, ZERO_BYTE>, true> = true
const eq_2_4: AreEqual<EQ<TWO, FOUR>, false> = true