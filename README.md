# TS-TypingSystem-ALU

This is an implementation of a simple ALU in the TS (TypeScript) typing system.

We are only relying on the TS typing system to implement some ALU operations.

## Project structure
You can find all of the implementation in the root folder.

You should start with `bits` and `bytes` and then move to `helpers`.

Finally you can look over `aritmethic` and `compare` in any order as they don't depend on each other.

In `experiments` there's an implementation of fibonacci if you are interested in what you could do with the `alu` implementation.

### Testing
Calling it testing is a strech, but there are some files that help with checking that the operations do what they should.

In `tests/utils` you can see a type called `AreEqual` that is used in all the test cases.

All tests follow the same principle:
- test a use case for an operation
- create a variable that has the type that use `AreEqual` and get the value of `true`
- because `AreEqual` resolves to either `true` or `false` an assignment of `true` to the type `false` would result in an error

## Implemented operations
- bit not
- bit or
- bit and
- bit xor
- byte not
- byte xor
- shift left
- shift right
- byte equality
- byte less then
- byte less then or equal
- byte greater than
- byte greater than or equal
- byte increment
- byte decrement
- bytes addition
- bytes subtraction
- byte multiplication

## Notes
- all computation is done at build time (compile time)
- there is (almost) no JS code generated, as everything is just typing
- to be able to use it you can use an editor that can hint to the type of a variable
