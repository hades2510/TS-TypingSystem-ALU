type CarryFlag = Bit;
type BitWithCarry = {
    cf: CarryFlag
    value: Bit
}

type PartialAddOne<T extends Bit[]> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero ] : [...U, One] : []
type AddOne<T extends Byte> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero] : [...U, One] : []
//                                                                                                                                      1 1 1                   1 1 0                                           1 0 1                   1 0 0                                                    0 1 1                      0 1 0                                     0 0 1                     0 0 0 
type AddBitsWithCarry<LHS extends Bit, RHS extends Bit, CF extends CarryFlag = Zero> = LHS extends One ? RHS extends One ? CF extends One ? { value: One, cf: One } : {value: Zero, cf: One} : CF extends One ? { value: Zero, cf: One } : { value: One, cf: Zero} : RHS extends One ? CF extends One ? { value: Zero, cf: One } : {value: One, cf: Zero} : CF extends One ? {value: One, cf: Zero} : {value: Zero, cf: Zero}

type PartialAdd<LHS extends Bit[], RHS extends Bit[], CF extends CarryFlag = Zero> = LHS extends [...infer LHSU extends Bit[], infer LHSR extends Bit] ? RHS extends [...infer RHSU extends Bit[], infer RHSR extends Bit] ? [...PartialAdd<LHSU, RHSU, AddBitsWithCarry<LHSR, RHSR, CF>['cf']>, AddBitsWithCarry<LHSR, RHSR, CF>['value']] : [] : []
type Add<LHS extends Byte, RHS extends Byte> = LHS extends [...infer LHSU extends Bit[], infer LHSR extends Bit] ? RHS extends [...infer RHSU extends Bit[], infer RHSR extends Bit] ? [...PartialAdd<LHSU, RHSU, AddBitsWithCarry<LHSR, RHSR>['cf']>, AddBitsWithCarry<LHSR, RHSR>['value']] : [] : []

type Byte2Complement<T extends Byte> = AddOne<ByteNot<T>>

type Subtract<LHS extends Byte, RHS extends Byte> = Add<LHS, Byte2Complement<RHS>>
