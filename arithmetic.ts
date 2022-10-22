type CarryFlag = Bit;
type BitWithCarry = {
    cf: CarryFlag
    value: Bit
}

type PartialAddOne<T extends Bit[]> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero ] : [...U, One] : []
type AddOne<T extends Byte> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero] : [...U, One] : []
//                                                                                                                                      1 1 1                   1 1 0                                           1 0 1                   1 0 0                                                    0 1 1                      0 1 0                                     0 0 1                     0 0 0 
type AddOneWithCarry<LHS extends Bit, RHS extends Bit, CF extends CarryFlag = Zero> = LHS extends One ? RHS extends One ? CF extends One ? { value: One, cf: One } : {value: Zero, cf: One} : CF extends One ? { value: Zero, cf: One } : { value: One, cf: Zero} : RHS extends One ? CF extends One ? { value: Zero, cf: One } : {value: One, cf: Zero} : CF extends One ? {value: One, cf: Zero} : {value: Zero, cf: Zero}