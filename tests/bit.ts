const not0: AreEqual<BitNot<Zero>, One> = true
const not1: AreEqual<BitNot<One>, Zero> = true

const and00: AreEqual<BitAnd <Zero, Zero>, Zero> = true
const and01: AreEqual<BitAnd <Zero, One>, Zero> = true
const and10: AreEqual<BitAnd <One, Zero>, Zero> = true
const and11: AreEqual<BitAnd <One, One>, One> = true

const or00: AreEqual<BitOr<Zero, Zero>, Zero> = true
const or01: AreEqual<BitOr<Zero, One>, One> = true
const or10: AreEqual<BitOr<One, Zero>, One> = true
const or11: AreEqual<BitOr<One, One>, One> = true

const xor00: AreEqual<BitXor<Zero, Zero>, Zero> = true
const xor01: AreEqual<BitXor<Zero, One>, One> = true
const xor10: AreEqual<BitXor<One, Zero>, One> = true
const xor11: AreEqual<BitXor<One, One>, Zero> = true