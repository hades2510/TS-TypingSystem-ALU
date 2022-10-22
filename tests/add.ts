let carr000: AreEqual<AddOneWithCarry<Zero, Zero, Zero>, {value: Zero, cf: Zero}> = true
let carr100: AreEqual<AddOneWithCarry<One, Zero, Zero>, {value: One, cf: Zero}> = true
let carr110: AreEqual<AddOneWithCarry<One, One, Zero>, {value: Zero, cf: One}> = true
let carr010: AreEqual<AddOneWithCarry<Zero, One, Zero>, {value: One, cf: Zero}> = true
let carr001: AreEqual<AddOneWithCarry<Zero, Zero, One>, {value: One, cf: Zero}> = true
let carr011: AreEqual<AddOneWithCarry<Zero, One, One>, {value: Zero, cf: One}> = true
let carr101: AreEqual<AddOneWithCarry<One, Zero, One>, {value: Zero, cf: One}> = true
let carr111: AreEqual<AddOneWithCarry<One, One, One>, {value: One, cf: One}> = true