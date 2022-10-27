type EQ<LHS extends Byte, RHS extends Byte> = ZERO_BYTE extends ByteXOR<LHS, RHS> ? true : false

//                                                                                   01      00                               11           10
type BitLTB<LHS extends Bit, RHS extends Bit> = Zero extends LHS ? One extends RHS ? true : "undecided" : One extends RHS ? "undecided" : false

type LTPartial<LHS extends Bit[], RHS extends Bit[]> =  LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? true extends BitLTB<LHSU, RHSU> ? true : false extends BitLTB<LHSU, RHSU> ? false : "undecided" extends BitLTB<LHSU, RHSU> ? LTPartial<LHSR, RHSR> : false : false : false
type LT<LHS extends Byte, RHS extends Byte> = LHS extends [infer LHSU extends Bit, ...infer LHSR extends Bit[]] ? RHS extends [infer RHSU extends Bit, ...infer RHSR extends Bit[]] ? true extends BitLTB<LHSU, RHSU> ? true : false extends BitLTB<LHSU, RHSU> ? false : "undecided" extends BitLTB<LHSU, RHSU> ? LTPartial<LHSR, RHSR> : never : never : never
type LTE<LHS extends Byte, RHS extends Byte> = true extends LT<LHS, RHS> ? true : EQ<LHS, RHS>

type GT<LHS extends Byte, RHS extends Byte> = LT<RHS, LHS>
type GTE<LHS extends Byte, RHS extends Byte> = LTE<RHS, LHS>
