type Bit = Zero | One;
type CarryFlag = Bit;
type BitWithCarry = {
    cf: CarryFlag
    value: Bit
}

type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

type BitNot <T extends Bit> = T extends Zero ? One : Zero;
type BitAnd <LHS extends Bit, RHS extends Bit> = LHS extends One ? RHS extends One ? One : Zero : Zero;
type BitOr <LHS extends Bit, RHS extends Bit> = LHS extends Zero ? RHS extends Zero ? Zero : One : One;
type BitXor <LHS extends Bit, RHS extends Bit> = LHS extends Zero ? RHS extends One ? One : Zero : RHS extends Zero ? One : Zero;

type PartialByteNot<T extends Bit[]>  = T extends [infer U extends Bit, ...infer R extends Bit[]] ? [BitNot<U>, ...PartialByteNot<R>] : []
type ByteNot <T extends Byte> = T extends [infer U extends Bit, ...infer R extends Bit[]] ? [BitNot<U>, ...PartialByteNot<R>] : []

type PartialByteXOR<LHS extends Bit[], RHS extends Bit[]> = LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? [BitXor<LHSU, RHSU>, ...PartialByteXOR<LHSR, RHSR>] : [] : []
type ByteXOR <LHS extends Byte, RHS extends Byte> = LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? [BitXor<LHSU, RHSU>, ...PartialByteXOR<LHSR, RHSR>] : [] : []

type PartialAddOne<T extends Bit[]> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero ] : [...U, One] : []
type AddOne<T extends Byte> = T extends [...infer U extends Bit[], infer R extends Bit] ? R extends One ? [...PartialAddOne<U>, Zero] : [...U, One] : []
//                                                                                                                                      1 1 1                   1 1 0                                           1 0 1                   1 0 0                                                    0 1 1                      0 1 0                                     0 0 1                     0 0 0 
type AddOneWithCarry<LHS extends Bit, RHS extends Bit, CF extends CarryFlag = Zero> = LHS extends One ? RHS extends One ? CF extends One ? { value: One, cf: One } : {value: Zero, cf: One} : CF extends One ? { value: Zero, cf: One } : { value: One, cf: Zero} : RHS extends One ? CF extends One ? { value: Zero, cf: One } : {value: One, cf: Zero} : CF extends One ? {value: One, cf: Zero} : {value: Zero, cf: Zero}