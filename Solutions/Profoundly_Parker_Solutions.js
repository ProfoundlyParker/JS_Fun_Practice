// Write a function identity that takes an argument and returns the argument
const identity = data => data;

//Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

//Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

//Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

//Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => (a < b ? a : b);

//Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => (a > b ? a : b);

//Write a function add that is generalized for any amount of arguments


module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecurse,
    mulRecurse,
    minRecurse,
    maxRecurse,
    not,
    acc,
    accPartial,
    accRecurse,
    fill,
    fillRecurse,
    set,
    identityf,
    addf,
    liftf,
    pure,
    curryb,
    curry,
    inc,
    twiceUnary,
    doubl,
    square,
    twice,
    reverseb,
    reverse,
    composeuTwo,
    composeu,
    composeb,
    composeTwo,
    compose,
    limitb,
    limit,
    genFrom,
    genTo,
    genFromTo,
    elementGen,
    element,
    collect,
    filter,
    filterTail,
    concatTwo,
    concat,
    concatTail,
    gensymf,
    gensymff,
    fibonaccif,
    counter,
    revocableb,
    revocable,
    extract,
    m,
    addmTwo,
    addm,
    liftmbM,
    liftmb,
    liftm,
    exp,
    expn,
    addg,
    liftg,
    arrayg,
    continuizeu,
    continuize,
    vector,
    exploitVector,
    vectorSafe,
    pubsub,
    mapRecurse,
    filterRecurse,
};