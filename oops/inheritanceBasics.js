class A {
    constructor() {
        console.log("In class A constructor");
    }
    hello() {
        console.log("Hello");
    }
}

class B extends A {
    constructor() {
        super(A);
        console.log("In class B constructor");
    }
}

class C extends B {
    constructor() {
        super(A);
    }
}

b1 = new C();
b1.hello();
