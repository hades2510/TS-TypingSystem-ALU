type EQ<LHS extends Byte, RHS extends Byte> = ZERO_BYTE extends ByteXOR<LHS, RHS> ? true : false