const fib1: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, Zero, Zero, One]>, ONE_BYTE> = true
const fib2: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, Zero, One, Zero]>, ONE_BYTE> = true
const fib3: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, Zero, One, One]>, [Zero, Zero, Zero, Zero, Zero, Zero, One, Zero]> = true
const fib4: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, One, Zero, Zero]>, [Zero, Zero, Zero, Zero, Zero, Zero, One, One]> = true
const fib5: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, One, Zero, One]>, [Zero, Zero, Zero, Zero, Zero, One, Zero, One]> = true
const fib6: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, One, One, Zero]>, [Zero, Zero, Zero, Zero, One, Zero, Zero, Zero]> = true
const fib7: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, Zero, One, One, One]>, [Zero, Zero, Zero, Zero, One, One, Zero, One]> = true
const fib8: AreEqual<FIBONACCI<[Zero, Zero, Zero, Zero, One, Zero, Zero, Zero]>, [Zero, Zero, Zero, One, Zero, One, Zero, One]> = true