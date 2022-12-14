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
type SubtractOne<LHS extends Byte> = Subtract<LHS, ONE_BYTE>

type Mul<LHS extends Byte, RHS extends Byte, Result extends Byte = RHS> = ONE_BYTE extends LHS ? Result : ZERO_BYTE extends LHS ? ZERO_BYTE : Mul<SubtractOne<LHS>, RHS, Add<Result, RHS>>

type DivInternal<LHS extends Byte, RHS extends Byte, Q extends Byte = ZERO_BYTE> = true extends LT<LHS, RHS> ? {
    q: Q,
    r: LHS
} : DivInternal<Subtract<LHS, RHS>, RHS, AddOne<Q>>

type Div<LHS extends Byte, RHS extends Byte> = ZERO_BYTE extends RHS ? "Division by 0" : DivInternal<LHS, RHS>
