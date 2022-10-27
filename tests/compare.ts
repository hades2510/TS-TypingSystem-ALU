const eq1_1: AreEqual<EQ<ONE_BYTE, ONE_BYTE>, true> = true
const eq1_0: AreEqual<EQ<ONE_BYTE, ZERO_BYTE>, false> = true
const eq0_0: AreEqual<EQ<ZERO_BYTE, ZERO_BYTE>, true> = true
const eq_2_4: AreEqual<EQ<TWO, FOUR>, false> = true

const bitltb1_1: AreEqual<BitLTB<Zero, Zero>, "undecided"> = true
const bitltb1_0: AreEqual<BitLTB<One, Zero>, false> = true
const bitltb0_0: AreEqual<BitLTB<Zero, Zero>, "undecided"> = true
const bitltb0_1: AreEqual<BitLTB<Zero, One>, true> = true

const bytelt0_1: AreEqual<LT<ZERO_BYTE, ONE_BYTE>, true> = true
const bytelt1_0: AreEqual<LT<ONE_BYTE, ZERO_BYTE>, false> = true
const bytelt2_0: AreEqual<LT<TWO, ZERO_BYTE>, false> = true
const bytelt2_4: AreEqual<LT<TWO, FOUR>, true> = true
const bytelt2_2: AreEqual<LT<TWO, TWO>, false> = true
const bytelt1_1: AreEqual<LT<ONE_BYTE, ONE_BYTE>, false> = true
const bytelt4_0: AreEqual<LT<FOUR, ZERO_BYTE>, false> = true
const bytelt0_4: AreEqual<LT<ZERO_BYTE, FOUR>, true> = true

const bytelte0_1: AreEqual<LTE<ZERO_BYTE, ONE_BYTE>, true> = true
const bytelte1_0: AreEqual<LTE<ONE_BYTE, ZERO_BYTE>, false> = true
const bytelte2_0: AreEqual<LTE<TWO, ZERO_BYTE>, false> = true
const bytelte2_4: AreEqual<LTE<TWO, FOUR>, true> = true
const bytelte2_2: AreEqual<LTE<TWO, TWO>, true> = true
const bytelte1_1: AreEqual<LTE<ONE_BYTE, ONE_BYTE>, true> = true
const bytelte4_0: AreEqual<LTE<FOUR, ZERO_BYTE>, false> = true
const bytelte0_4: AreEqual<LTE<ZERO_BYTE, FOUR>, true> = true

const bytegte0_1: AreEqual<GTE<ZERO_BYTE, ONE_BYTE>, false> = true
const bytegte1_0: AreEqual<GTE<ONE_BYTE, ZERO_BYTE>, true> = true
const bytegte2_0: AreEqual<GTE<TWO, ZERO_BYTE>, true> = true
const bytegte2_4: AreEqual<GTE<TWO, FOUR>, false> = true
const bytegte2_2: AreEqual<GTE<TWO, TWO>, true> = true
const bytegte1_1: AreEqual<GTE<ONE_BYTE, ONE_BYTE>, true> = true
const bytegte4_0: AreEqual<GTE<FOUR, ZERO_BYTE>, true> = true
const bytegte0_4: AreEqual<GTE<ZERO_BYTE, FOUR>, false> = true

const bytegt0_1: AreEqual<GT<ZERO_BYTE, ONE_BYTE>, false> = true
const bytegt1_0: AreEqual<GT<ONE_BYTE, ZERO_BYTE>, true> = true
const bytegt2_0: AreEqual<GT<TWO, ZERO_BYTE>, true> = true
const bytegt2_4: AreEqual<GT<TWO, FOUR>, false> = true
const bytegt2_2: AreEqual<GT<TWO, TWO>, false> = true
const bytegt1_1: AreEqual<GT<ONE_BYTE, ONE_BYTE>, false> = true
const bytegt4_0: AreEqual<GT<FOUR, ZERO_BYTE>, true> = true
const bytegt0_4: AreEqual<GT<ZERO_BYTE, FOUR>, false> = true
