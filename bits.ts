type Zero = {
    __type: 'zero',
}

type One = {
    __type: 'one'
}

type Bit = Zero | One;

type BitNot <T extends Bit> = T extends Zero ? One : Zero;
type BitAnd <LHS extends Bit, RHS extends Bit> = LHS extends One ? RHS extends One ? One : Zero : Zero;
type BitOr <LHS extends Bit, RHS extends Bit> = LHS extends Zero ? RHS extends Zero ? Zero : One : One;
type BitXor <LHS extends Bit, RHS extends Bit> = LHS extends Zero ? RHS extends One ? One : Zero : RHS extends Zero ? One : Zero;
