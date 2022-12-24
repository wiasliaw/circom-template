pragma circom 2.0.2;

template Addition() {
    signal input a;
    signal input b;
    signal output c;

    c <== a + b;
}
