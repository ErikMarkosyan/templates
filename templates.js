// templates

// variables` var, let, const // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

var name1 = 'Mike';
let name2 = 'George';
const name3 = 'Grno';

name1 = name2; // name 1 darav name 2, const i jamanak chenq kara poxenq

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// data types` // // // // // // // // // // // // // // // // // // // // // // // // // //// // // //// // // //// // // //// // // //// // // 

// number
// bigint
// string
// boolean
// null
// undefined
// object
// symbol

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Number, in number we have +∞ -∞ (infinity), BigInt and NaN.

// let num1 = 56;
// let num2 = 0.01;

// ∞ we can get it as a result of division by zero

// (Infinity === 1/0); // infinity // true

// NaN isn't equal to anything even to NaN. 
// NaN represents a computational error. 
// NaN is a result of an incorrect or an undefined mathematical operation - Not a Number
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.

// ('some text' / (2+5)) // NaN
// ('some string' / 3) // NaN

// BigInt type was recently added to the language to represent integers of arbitrary length.

// let bigInt = 1234567890123456789012345678901234567890n // typeof bigint

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`; // sa log a anelu ` can embed another Hello

// Double and single quotes are “simple” quotes. 
// There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. 
// They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

// console.log( `the result is ${1 + 2}` ); // the result is 3 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean

// The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1; // true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Null պրծած զուքարանի թուղթ
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null;
// It’s just a special value which represents "nothing", "empty" or "value unknown".

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Undefined որ զուքարանի թողթ չկա 

// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is "value is not assigned".
// If a variable is declared, but not assigned, then its value is undefined:

let x;
console.log(x); // undefined
// Technically, it is possible to assign undefined to any variable:

let x = undefined;
// …But we don’t recommend doing that. Normally, we use null to assign an "empty" or "unknown" value to a variable,
//  and we use undefined for checks like seeing if a variable has been assigned.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object 

//let obj = {}

// The object type is special. (reference type)
// All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). 
// In contrast, objects are used to store collections of data and more complex entities. 
// We’ll deal with them later in the chapter Objects after we learn more about primitives.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Symbol
// The symbol type is used to create unique identifiers for objects. 
// We mention it here for completeness, but we’ll study it after objects.

let id = Symbol('id');

const id1 = Symbol("id1");
const id2 = Symbol("id2");

let user1 = {
  name: "John",
  surname: "Wick",
  [id1]: 0123456789,
  [id2]: 9876543210,
};
//console.log(user1[id1]); // 0123456789
//console.log(user1[id2]); // 9876543210

const globalSymbol1 = Symbol.for("glob1");
const globalSymbol2 = Symbol.for("glob2");
const globalSymbol3 = Symbol.for("glob3");

//console.log(Symbol.keyFor(globalSymbol1)); // glob1
//console.log(Symbol.keyFor(globalSymbol2)); // glob2
//console.log(Symbol.keyFor(globalSymbol3)); // glob3

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The typeof operator
// The typeof operator returns the type of the argument. 
// It’s useful when we want to process values of different types differently or just want to do a quick check.

// It supports two forms of syntax:

// As an operator: typeof x.
// As a function: typeof(x).
// The call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof null // "object"

typeof function() {} // "function"

// The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, 
// kept for compatibility. Of course, null is not an object. 
// It is a special value with a separate type of its own. So, again, this is an error in the language.

// Summary
// There are 8 basic data types in JavaScript.

// number for numbers of any kind: integer or floating-point, integers are limited by ±253.
// bigint is for integer numbers of arbitrary length.
// string for strings. A string may have one or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.
// The typeof operator allows us to see which type is stored in a variable.

// Two forms: typeof x or typeof(x).
// Returns a string with the name of the type, like "string" or "number".
// For null returns "object" – this is an error in the language, it’s not actually an object.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type Conversions // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// String conversion

// String Conversion – Occurs when we output something. Can be performed with String(value). 
// The conversion to string is usually obvious for primitive values.
// String conversion happens when we need the string form of a value.
// For example, alert(value) does it to show the value.
// We can also call the String(value) function to convert a value to a string:

let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string "true"
console.log(typeof value); // string

// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Numeric conversion

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
// Numeric Conversion happens in mathematical functions and expressions automatically.

// For example, when division / is applied to non-numbers:

// console.log("6" / "2") // 3, strings are converted to numbers
// but console.log("4"+"1") // 41
// console.log(1+'5') // 15
// We can use the Number(value) function to explicitly convert a value to a number:

// let str = "123";
// console.log(typeof str); // string

// let num = Number(str); // becomes a number 123

// console.log(typeof num); // number
// Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

// let age = Number("an arbitrary string instead of a number");

// console.log(age); // NaN, conversion failed
// Numeric conversion rules:
// undefined becomes NaN
// null becomes 0
// true and false becomes 1 and 0
// string - Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
// console.log( Number("   123   ") ); // 123
// console.log( Number("123z") );      // NaN (error reading a number at "z")
// console.log( Number(true) );        // 1
// console.log( Number(false) );       // 0
// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean Conversion
// Boolean Conversion is the simplest one.
// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// It happens in logical operations (later we’ll meet condition tests and other similar things) 
// but can also be performed explicitly with a call to Boolean(value).

// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
// For instance:

// console.log( Boolean(1) ); // true
// console.log( Boolean(0) ); // false
// console.log( Boolean("hello") ); // true
// console.log( Boolean("") ); // false
// BUT console.log(Boolean(" ")) // true
// console.log( Boolean(null) ); // false
// console.log( Boolean(undefined) ); // false
// Please note: the string with zero "0" is true

// console.log( Boolean("0") ); // true
// console.log( Boolean(" ") ); // spaces, also true (any non-empty string is true)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operators` +, -, *, /

// Unary, Binary, Operand

// An operand – is what operators are applied to. 
// For instance, in the multiplication of 5 * 2 there are two operands: 
// the left operand is 5 and the right operand is 2.
// Sometimes, people call these "arguments" instead of "operands".

// An operator is unary if it has a single operand. 
// For example, the unary negation - reverses the sign of a number:

// Unary

let x = 1;

x = -x;
console.log( x ); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:

let a = 1, b = 3;
console.log( b - a ); // 2, binary minus subtracts values

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String concatenation, binary +

// Usually, the plus operator + sums numbers.

// But, if the binary + is applied to strings, it merges (concatenates) them:

let s = "my" + "string";
console.log(s); // mystring

// Note that if one of the operands is a string, the other one is converted to a string too.

console.log( '1' + 2 ); // 12
console.log( 2 + '1' ); // 21
console.log('1' + '1'); // 2

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log(2 + 2 + '1' + 1 + 1); // "4111"

// String concatenation and conversion is a special feature of the binary plus +.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

// For instance, subtraction and division:

console.log( 2 - '1' ); // 1
console.log( '6' / '2' ); // 3

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, 
// doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

// No effect on numbers
let c = 1;
console.log( +c ); // 1

let d = -2;
console.log( +d ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
console.log( +"3" );   // 3
console.log( +"hello" );   // NaN

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

console.log( apples + oranges ); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

let apples1 = "2";
let oranges1 = "3";

// both values converted to numbers before the binary plus
console.log( +apples1 + +oranges1 ); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operator precedence
// If an expression has more than one operator, the execution order is defined by their precedence, 
// or, in other words, the default priority order of operators.

// From school, we all know that the multiplication in the expression 1 + 2 * 2 should be calculated before 
// the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence 
// than the addition.

// Parentheses override any precedence, so if we’re not satisfied with the default order, 
// we can use them to change it. For example, write (1 + 2) * 2.

// There are many operators in JavaScript. Every operator has a corresponding precedence number. 
// The one with the larger number executes first. If the precedence is the same, 
// the execution order is from left to right.

// Here’s an extract from the precedence table (you don’t need to remember this, 
//   but note that unary operators are higher than corresponding binary ones):
// unicode

// 17 unary plus +
// 17 unary negation -
// 15 multiplication *
// 15 division /
// 13 addition +
// 13 subtraction -
// 3 assignment =
// As we can see, the "unary plus" has a priority of 17 which is higher than the 13 of "addition" (binary plus). 
// That’s why, in the expression +apples + +oranges, unary pluses work before the addition.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Assignment
// Let’s note that an assignment = is also an operator. 
// It is listed in the precedence table with the very low priority of 3.

// That’s why, when we assign a variable, like x = 2 * 2 + 1, 
// the calculations are done first and then the = is evaluated, storing the result in x.

// let x = 2 * 2 + 1;

// console.log( x ); // 5
// It is possible to chain assignments:

// let a, b, c;

// a = b = c = 2 + 2;

// console.log( a ); // 4
// console.log( b ); // 4
// console.log( c ); // 4

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and 
// then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// The assignment operator "=" returns a value

// An operator always returns a value. That’s obvious for most of them like addition + or multiplication *. 
// But the assignment operator follows this rule too.

// The call x = value writes the value into x and then returns it.

// Here’s a demo that uses an assignment as part of a more complex expression:

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// console.log( a ); // 3
// console.log( c ); // 0
// In the example above, the result of expression (a = b + 1) is the value which was assigned to a (that is 3). 
// It is then used for further evaluations.

// Funny code, isn’t it? We should understand how it works, because sometimes we see it in JavaScript libraries, 
// but shouldn’t write anything like that ourselves. Such tricks definitely don’t make code clearer or readable.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Remainder %

// The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

// For instance:

// console.log( 5 % 2 ); // 1 is a remainder of 5 divided by 2
// console.log( 8 % 3 ); // 2 is a remainder of 8 divided by 3
// console.log( 6 % 3 ); // 0 is a remainder of 6 divided by 3
// Exponentiation **
// The exponentiation operator ** is a recent addition to the language.

// For a natural number b, the result of a ** b is a multiplied by itself b times.

// For instance:

// console.log( 2 ** 2 ); // 4  (2 * 2)
// console.log( 2 ** 3 ); // 8  (2 * 2 * 2)
// console.log( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
// The operator works for non-integer numbers as well.

// For instance:

// console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
// console.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// Increment/decrement

// Increasing or decreasing a number by one is among the most common numerical operations.

// So, there are special operators for it:

// Increment ++ increases a variable by 1:
// let counter = 2;
// counter++; // works the same as counter = counter + 1, but is shorter
// console.log( counter ); // 3
// Decrement -- decreases a variable by 1:
// let counter = 2;
// counter--; // works the same as counter = counter - 1, but is shorter
// console.log( counter ); // 1
// Important: Increment/decrement can only be applied to variables. 
// Trying to use it on a value like 5++ will give an error.

// The operators ++ and -- can be placed either before or after a variable.

// When the operator goes after the variable, it is in "postfix form": counter++.
// The "prefix form" is when the operator goes before the variable: ++counter.
// Both of these statements do the same thing: increase counter by 1.

// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

// Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. 
// The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

// To see the difference, here’s an example:

// prefix ++1 becomes 2 on the same line
// postfix 1++ will become 2 when we call it

// let counter = 1;
// let a = ++counter; // (*)

// console.log(a); // 2
// In the line (*), the prefix form ++counter increments counter and returns the new value, 2. 
// So, the console.log shows 2.

// Now, let’s use the postfix form:

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++
// a will be 1 but as we call it it will be 2


// console.log(a); // 1
// In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment).
// So, the console.log shows 1.

// To summarize:

// If the result of increment/decrement is not used, there is no difference in which form to use:
// let counter = 0;
// counter++;
// ++counter;
// console.log( counter ); // 2, the lines above did the same
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
// let counter = 0;
// console.log( ++counter ); // 1
// If we’d like to increment a value but use its previous value, we need the postfix form:
// let counter = 0;
// console.log( counter++ ); // 0

// let h = 1;
// console.log(++h);

// console.log(++h);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Modify-in-place
// We often need to apply an operator to a variable and store the new result in that same variable.

// For example:

// let n = 2;
// n = n + 5;
// n = n * 2;
// This notation can be shortened using the operators+= and *=:

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// console.log( n ); // 14
// Short "modify-and-assign" operators exist for all arithmetical and bitwise operators: /=, -=, etc.

// Such operators have the same precedence as a normal assignment, so they run after most other calculations:

// let n = 2;

// n *= 3 + 5;

// console.log( n ); // 16  (right part evaluated first, same as n *= 8)

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Comma

// The comma operator , is one of the rarest and most unusual operators. 
// Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
// Each of them is evaluated but only the result of the last one is returned.

// For example:

// let a = (1 + 2, 3 + 4);

// console.log( a ); // 7 (the result of 3 + 4)
// Here, the first expression 1 + 2 is evaluated and its result is thrown away. 
// Then, 3 + 4 is evaluated and returned as the result.

// Comma has a very low precedence

// Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, 
// then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.

// Why do we need an operator that throws away everything except the last expression?

// Sometimes, people use it in more complex constructs to put several actions in one line.

// For example:

// // three operations in one line
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//  ...
// }
// Such tricks are used in many JavaScript frameworks. That’s why we’re mentioning them. 
// But usually they don’t improve code readability so we should think well before using them.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Comparisons

// Comparisons
// We know many comparison operators from maths:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b (please note the double equals sign =. A single symbol a = b would mean an assignment).
// Not equals. In maths the notation is ≠, but in JavaScript it’s written as 
// an assignment with an exclamation sign before it: a != b.
// Boolean is the result
// Like all other operators, a comparison returns a value. In this case, the value is a boolean.

// true – means "yes", "correct" or "the truth". false – means "no", "wrong" or "not the truth". For example:

// console.log( 2 > 1 );  // true (correct)
// console.log( 2 == 1 ); // false (wrong)
// console.log( 2 != 1 ); // true (correct)
// A comparison result can be assigned to a variable, just like any value:

// let result = 5 > 4; // assign the result of the comparison
// console.log( result ); // true
// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called "dictionary" or
// "lexicographical" order.

// In other words, strings are compared letter-by-letter.

// For example:

// console.log( 'Z' > 'A' ); // true
// console.log( 'Glow' > 'Glee' ); // true
// console.log( 'Bee' > 'Be' ); // true
// The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, 
// then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// In the examples above, the comparison 'Z' > 'A' gets to a result at the first step while the strings 
// "Glow" and "Glee" are compared character-by-character:

// G is the same as G. l is the same as l. o is greater than e. Stop here. The first string is greater.

// Not a real dictionary, but Unicode order

// The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books,
//  but it’s not exactly the same.

// For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? 
// The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table
//  JavaScript uses (Unicode). We’ll get back to specific details and consequences of this in the chapter Strings.

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to numbers.

// console.log( '2' > 1 ); // true, string '2' becomes a number 2
// console.log( '01' == 1 ); // true, string '01' becomes a number 1
// For boolean values, true becomes 1 and false becomes 0.

// For example:

// console.log( true == 1 ); // true
// console.log( false == 0 ); // true
// A funny consequence

// It is possible that at the same time:
// Two values are equal. One of them is true as a boolean and the other one is false as a boolean.
// let a = 0;
// console.log( Boolean(a) ); // false

// let b = "0";
// console.log( Boolean(b) ); // true

// console.log(a == b); // true!
// From JavaScript’s standpoint, this result is quite normal. 
// An equality check converts values using the numeric conversion (hence "0" becomes 0), 
// while the explicit Boolean conversion uses another set of rules.

// Strict equality
// A regular equality check == has a problem. It cannot differentiate 0 from false:

// console.log( 0 == false ); // true
// The same thing happens with an empty string:

// console.log( '' == false ); // true
// This happens because operands of different types are converted to numbers by the equality operator ==.
// An empty string, just like false, becomes a zero.

// What to do if we’d like to differentiate 0 from false?

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately 
// returns false without an attempt to convert them.

// Let’s try it:

// console.log( 0 === false ); // false, because the types are different
// There is also a "strict non-equality" operator !== analogous to !=.

// The strict equality operator is a bit longer to write, but makes it obvious 
// what’s going on and leaves less room for errors.

// Comparison with null and undefined
// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===

// These values are different, because each of them is a different type.

// console.log( null === undefined ); // false
// For a non-strict check ==

// There’s a special rule. These two are a "sweet couple": they equal each other (in the sense of ==), 
// but not any other value.

// console.log( null == undefined ); // true
// For maths and other comparisons < > <= >=

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// Now let’s see some funny things that happen when we apply these rules. 
// And, what’s more important, how to not fall into a trap with them.

// Strange result: null vs 0
// Let’s compare null with a zero:

// console.log( null > 0 );  // (1) false
// console.log( null == 0 ); // (2) false
// console.log( null >= 0 ); // (3) true
// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", 
// so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. 
// Comparisons convert null to a number, treating it as 0. 
// That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, 
// without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

// console.log( undefined > 0 ); // false (1)
// console.log( undefined < 0 ); // false (2)
// console.log( undefined == 0 ); // false (3)
// Why does it dislike zero so much? Always false!

// We get these results because:

// Comparisons (1) and (2) return false because undefined gets converted to NaN 
// and NaN is a special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.
// Evade problems
// Why did we go over these examples? Should we remember these peculiarities all the time? 
// Well, not really. Actually, these tricky things will gradually become familiar over time, 
// but there’s a solid way to evade problems with them:

// Just treat any comparison with undefined/null except the strict equality === with exceptional care.

// Don’t use comparisons >= > < <= with a variable which may be null/undefined, 
// unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the "dictionary" order.
// When values of different types are compared, they get converted to numbers 
// (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. 
// Checking for null/undefined separately is a good idea.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Conditional operators: if, '?'

// Sometimes, we need to perform different actions based on different conditions.
// To do that, we can use the if statement and the conditional operator ?, that’s also called a "question mark" operator.

// The "if" statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

let year = 2015;

if (year == 2015) {
  console.log('right year')
}
// In the example above, the condition is a simple equality check (year == 2015), but it can be much more complex.

// We can write without curly braces:

// if (year == 2015) console.log('right year')
// But we recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute.
// Doing so improves readability.

// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

// Let’s recall the conversion rules from the chapter Type Conversions:

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called "falsy" values.
// Other values become true, so they are called "truthy".
// So, the code under this condition would never execute:

if (0) { // 0 is falsy
  ...
}
// …and inside this condition – it always will:

if (1) { // 1 is truthy
  ...
}
// We can also pass a pre-evaluated boolean value to if, like this:

// let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
  ...
}
// The "else" clause
// The if statement may contain an optional "else" block. It executes when the condition is false.

// For example:

// let year = 2020;

// if (year == 2015) {
//   console.log( 'You guessed it right!' );
// } else {
//   console.log( 'How can you be so wrong?' ); // any value except 2015
// }
// Several conditions: "else if"
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

// For example:

// let year = 2020

// if (year < 2015) {
//   console.log( 'Too early...' );
// } else if (year > 2015) {
//   console.log( 'Too late' );
// } else {
//   console.log( 'Exactly!' );
// }
// In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last console.log.

// There can be more else if blocks. The final else is optional.

// Conditional operator "?"
// Sometimes, we need to assign a variable depending on a condition.

// For instance:

// let accessAllowed;
// let age = 19;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed); // true
// The so-called "conditional" or "question mark" operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called "ternary", because the operator has three operands. 
// It is actually the one and only operator in JavaScript which has that many.

// The syntax is:

// let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

// For example:

let result = (age > 18) ? true : false;
// Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

// This example will do the same thing as the previous one:

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
// But parentheses make the code more readable, so we recommend using them.

// Please note: In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same
// let accessAllowed = age > 18;
// Multiple "?"
// A sequence of question mark operators ? can return a value that depends on more than one condition.

// For instance:

let age = 18;

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message )
// It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘":"’, checking age < 18.
// If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100.
// If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'.
// Here’s how this looks using if..else:

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
// The purpose of the question mark operator ? is to return one value or another depending on its condition. 
// Please use it for exactly that. Use if when you need to execute different branches of code.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Logical operators

// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// Although they are called "logical", they can be applied to values of any type, not only boolean. 
// Their result can also be of any type.

// Let’s see the details.

// || (OR)
// || returns the first truthy value if there is no any truthy value it will return the last falsy value
// The "OR" operator is represented with two vertical line symbols:

// let result = a || b;
// In classical programming, the logical OR is meant to manipulate boolean values only. 
// If any of its arguments are true, it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and more powerful. 
// But first, let’s see what happens with boolean values.

// There are four possible logical combinations:

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
// As we can see, the result is always true except for the case when both operands are false.

// If an operand is not a boolean, it’s converted to a boolean for the evaluation.

// For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}
// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

// For example:

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}
// We can pass more conditions:

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}
// OR "||" finds the first truthy value
// The logic described above is somewhat classical. Now, let’s bring in the "extra" features of JavaScript.

// The extended algorithm works as follows.

// Given multiple OR’ed values:

// let result = value1 || value2 || value3;
// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, 
// stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// In other words, a chain of OR "||" returns the first truthy value or the last one if no truthy value is found.

// For instance:

// console.log( 1 || 0 ); // 1 (1 is truthy)
// console.log( true || 'no matter what' ); // (true is truthy)

// console.log( null || 1 ); // 1 (1 is the first truthy value)
// console.log( null || 0 || 1 ); // 1 (the first truthy value)
// console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
// This leads to some interesting usage compared to a "pure, classical, boolean-only OR".

// && (AND)
// The AND operator is represented with two ampersands &&:
// when all values are true it returns the last one, when one of the values is false it returns the first one

// let result = a && b;
// In classical programming, AND returns true if both operands are truthy and false otherwise:

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
// An example with if:

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
// Just as with OR, any value is allowed as an operand of AND:

if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}

// AND "&&" finds the first falsy value
// Given multiple AND’ed values:

// let result = value1 && value2 && value3;
// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, 
// stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

// Precedence of AND && is higher than OR || Just like OR, the AND && operator can sometimes replace if.

// let x = 1;

// (x > 0) && console.log( 'Greater than zero!' );

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

// The syntax is pretty simple:

// let result = !value;
// The operator accepts a single argument and does the following:

// Converts the operand to boolean type: true/false.
// Returns the inverse value.
// For instance:

// console.log( !true ); // false
// console.log( !0 ); // true
// A double NOT !! is sometimes used for converting a value to boolean type:

// console.log( !!"non-empty string" ); // true
// console.log( !!null ); // false
// That is, the first NOT converts the value to boolean and returns the inverse, 
// and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

// console.log( Boolean("non-empty string") ); // true
// console.log( Boolean(null) ); // false
// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loop 

// Loops are a way to repeat the same code multiple times.

// While loop

// let i = 0;
// while(i<10){
//  i++
//  console.log(i)
// } // 1,2,3,4,5,6,7,8,9,10

// but if we call console.log(i) before i++ we well see 0,1,2,3,4,5,6,7,8,9

// A single execution of the loop body is called an iteration. 
// The loop in the example above makes three iterations.

// If a++ was missing from the example above, the loop would repeat (in theory) forever. 
// In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: 
// the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (a != 0) is while (a):

// let b = 3;
// while (b) { // when b becomes 0, the condition becomes falsy, and the loop stops
//   console.log( b );
//   b--;
// } 3,2,1 because we call console.log(b) before b--

// Curly braces are not required for a single-line body

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Do While
// do while makes a step anywhay the result is true or false
// The condition check can be moved below the loop body using the do..while syntax:

// let x = 4;
// do{
  // console.log(x)
//  x++
// }while(x<3) // will log 4 if we call console.log(x) after x++ would log 5

// do {
//   // loop body
// } while (condition)

// The loop will first execute the body, then check the condition, and, while it’s truthy, 
// execute it again and again.

// For example:

// let c = 0;
// do {
//   console.log( c );
//   c++;
// } while (c < 3);

// This form of syntax should only be used when you want the body of the loop to 
// execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// FOR 

