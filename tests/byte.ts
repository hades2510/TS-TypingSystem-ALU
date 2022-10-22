type TEST_BYTE = [Zero, One, One, Zero, One, Zero, Zero, One]
type ZERO_BYTE = [Zero, Zero, Zero, Zero, Zero, Zero, Zero, Zero]
type ONLY_ONE = [One, One, One, One, One, One, One, One]

type ONE = AddOne<ZERO_BYTE>
type TWO = AddOne<ONE>
type THREE = AddOne<AddOne<AddOne<ZERO_BYTE>>>
type FOUR = AddOne<THREE>

const one: AreEqual<ONE, [Zero, Zero, Zero, Zero, Zero, Zero, Zero, One]> = true
const two: AreEqual<TWO, [Zero, Zero, Zero, Zero, Zero, Zero, One, Zero]> = true
const three: AreEqual<THREE, [Zero, Zero, Zero, Zero, Zero, Zero, One, One]> = true
const four: AreEqual<FOUR, [Zero, Zero, Zero, Zero, Zero, One, Zero, Zero]> = true

const NOT_TEST_BYTE: AreEqual<ByteNot<TEST_BYTE>, [One, Zero, Zero, One, Zero, One, One, Zero]> = true

const byteXOR1: AreEqual<ByteXOR<TEST_BYTE, TEST_BYTE>, ZERO_BYTE> = true
const byteXOR2: AreEqual<ByteXOR<TEST_BYTE, ByteNot<TEST_BYTE>>, ONLY_ONE> = true
