const div2_1: AreEqual<Div<TWO, ONE>, {q: TWO, r: ZERO_BYTE}> = true
const div3_2: AreEqual<Div<THREE, TWO>, {q: ONE, r: ONE}> = true
const div3_0: AreEqual<Div<THREE, ZERO_BYTE>, "Division by 0"> = true
const div0_0: AreEqual<Div<ZERO_BYTE, ZERO_BYTE>, "Division by 0"> = true
const div10_2: AreEqual<Div<[Zero, Zero, Zero, Zero, One, Zero, One, Zero], TWO>, {q:[Zero, Zero, Zero, Zero, Zero, One, Zero, One], r: ZERO_BYTE}> = true
const div2_10: AreEqual<Div<TWO, [Zero, Zero, Zero, Zero, One, Zero, One, Zero]>, {q:ZERO_BYTE, r: TWO}> = true