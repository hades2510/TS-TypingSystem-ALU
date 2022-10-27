const eq1_1: AreEqual<EQ<ONE_BYTE, ONE_BYTE>, true> = true
const eq1_0: AreEqual<EQ<ONE_BYTE, ZERO_BYTE>, false> = true
const eq0_0: AreEqual<EQ<ZERO_BYTE, ZERO_BYTE>, true> = true
const eq_2_4: AreEqual<EQ<TWO, FOUR>, false> = true

const bitltb1_1: AreEqual<BitLTB<Zero, Zero>, "undecided"> = true
const bitltb1_0: AreEqual<BitLTB<One, Zero>, false> = true
const bitltb0_0: AreEqual<BitLTB<Zero, Zero>, "undecided"> = true
const bitltb0_1: AreEqual<BitLTB<Zero, One>, true> = true

const bitlt0_1: AreEqual<LT<ZERO_BYTE, ONE_BYTE>, true> = true
const bitlt1_0: AreEqual<LT<ONE_BYTE, ZERO_BYTE>, false> = true
const bitlt2_0: AreEqual<LT<TWO, ZERO_BYTE>, false> = true
const bitlt2_4: AreEqual<LT<TWO, FOUR>, true> = true
const bitlt2_2: AreEqual<LT<TWO, TWO>, false> = true
const bitlt1_1: AreEqual<LT<ONE_BYTE, ONE_BYTE>, false> = true
const bitlt4_0: AreEqual<LT<FOUR, ZERO_BYTE>, false> = true
const bitlt0_4: AreEqual<LT<ZERO_BYTE, FOUR>, true> = true

const bitlte0_1: AreEqual<LTE<ZERO_BYTE, ONE_BYTE>, true> = true
const bitlte1_0: AreEqual<LTE<ONE_BYTE, ZERO_BYTE>, false> = true
const bitlte2_0: AreEqual<LTE<TWO, ZERO_BYTE>, false> = true
const bitlte2_4: AreEqual<LTE<TWO, FOUR>, true> = true
const bitlte2_2: AreEqual<LTE<TWO, TWO>, true> = true
const bitlte1_1: AreEqual<LTE<ONE_BYTE, ONE_BYTE>, true> = true
const bitlte4_0: AreEqual<LTE<FOUR, ZERO_BYTE>, false> = true
const bitlte0_4: AreEqual<LTE<ZERO_BYTE, FOUR>, true> = true
