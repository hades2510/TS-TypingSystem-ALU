
type Byte = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

type PartialByteNot<T extends Bit[]>  = T extends [infer U extends Bit, ...infer R extends Bit[]] ? [BitNot<U>, ...PartialByteNot<R>] : []
type ByteNot <T extends Byte> = T extends [infer U extends Bit, ...infer R extends Bit[]] ? [BitNot<U>, ...PartialByteNot<R>] : []

type PartialByteXOR<LHS extends Bit[], RHS extends Bit[]> = LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? [BitXor<LHSU, RHSU>, ...PartialByteXOR<LHSR, RHSR>] : [] : []
type ByteXOR <LHS extends Byte, RHS extends Byte> = LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? [BitXor<LHSU, RHSU>, ...PartialByteXOR<LHSR, RHSR>] : [] : []

type ShiftLeft<T extends Byte> = T extends [infer U extends Bit, ...infer R extends Bit[]] ? [...R, Zero] : never
type ShiftRight<T extends Byte> = T extends [...infer U extends Bit[], infer R extends Bit] ? [Zero, ...U] : never