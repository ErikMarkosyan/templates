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

// Loops

// We often need to repeat actions.
// Loops are a way to repeat the same code multiple times.

// While loop

// The while loop has the following syntax:

// while (condition) {
  // code
  // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

// let a = 0;
// while (a < 3) { // shows 0, then 1, then 2
//   console.log( a );
//   a++;
// }

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
// }

// Curly braces are not required for a single-line body

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Do…while loop
// The condition check can be moved below the loop body using the do..while syntax:

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

// For loop
// The for loop is the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
  // ... loop body ...
// }

// Let’s learn the meaning of these parts by example. The loop below runs console.log(i) 
// for d from 0 up to (but not including) 3:

// for (let d = 0; d < 3; d++) { // shows 0, then 1, then 2
//   console.log(d);
// }

// Let’s examine the for statement part-by-part:

// begin i = 0 Executes once upon entering the loop.
// condition i < 3 Checked before every loop iteration. If false, the loop stops.
// body console.log(i) Runs again and again while the condition is truthy.
// step i++ Executes after the body on each iteration.
// The general loop algorithm works like this:

// Run begin
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → (if condition → run body and run step)
// → ...
// That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Inline variable declaration
// Here, the "counter" variable i is declared right in the loop. 
// This is called an “inline” variable declaration. Such variables are visible only inside the loop.

let e = 0;
for (let e = 0; e < 3; e++) {
  // console.log(e); // 0, 1, 2
}
// console.log(e); // error, no such variable
// Instead of defining a variable, we could use an existing one:

// let e = 0;

for (e = 0; e < 3; e++) { // use an existing variable
  // console.log(e); // 0, 1, 2
}

// console.log(e); // 3, visible, because declared outside of the loop

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

//  Skipping parts

// Any part of for can be skipped.
// For example, we can omit begin if we don’t need to do anything at the loop start.
// Like here:

let f = 0; // we have f already declared and assigned

for (; f < 3; f++) { // no need for "begin"
  // console.log( f ); // 0, 1, 2
}
console.log(f); // 3 
// We can also remove the step part:

// let f = 0;

for (; f < 3;) { // here we removed f = 0; and f++;
  // console.log( f++ );
}

// console.log(f);

/*This makes the loop identical to while (f < 3).

We can actually remove everything, creating an infinite loop:

for (;;) {
  // repeats without limits
}
Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error. */

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Breaking the loop
// // Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

// For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );
// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. 
// It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

// The combination "infinite loop + break as needed" is great for situations when a loop’s 
// condition must be checked not in the beginning or end of the loop, but in the middle or 
// even in several places of its body.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Continue to the next iteration
// The continue directive is a "lighter version" of break. It doesn’t stop the whole loop. Instead, 
// it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let g = 0; g < 10; g++) {

  // if true, skip the remaining part of the body
  if (g % 2 == 0) continue;

  console.log(g); // 1, then 3, 5, 7, 9
}
// For even values of g, the continue directive stops executing the body and passes 
// control to the next iteration of for (with the next number). So the console.log is only called for odd values.

//The continue directive helps decrease nesting
for (let g = 0; g < 10; g++) {
  if (g % 2) {
    alert( g );
  }
}

/* From a technical point of view, this is identical to the example above. 
Surely, we can just wrap the code in an if block instead of using continue.

But as a side-effect, this created one more level of nesting (the console.log call inside the curly braces). 
If the code inside of if is longer than a few lines, that may decrease the overall readability.

No break/continue to the right side of '?'*/

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Labels for break/continue
// Sometimes we need to break out from multiple nested loops at once.

// For example, in the code below we loop over i and j, prompting for the coordinates (h, i) from (0,0) to (2,2):

for (let h = 0; h < 3; h++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${h},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

console.log('Done!');

/*We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient–labels, come to the rescue!

A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}
The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
console.log('Done!');
In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

So the control goes straight from (*) to console.log('Done!').

We can also move the label onto a separate line:

outer:
for (let i = 0; i < 3; i++) { ... }
The continue directive can also be used with a label. In this case, 
code execution jumps to the next iteration of the labeled loop.

Labels do not allow to "jump" anywhere
Labels do not allow us to jump into an arbitrary place in the code.

For example, it is impossible to do this:

break label; // doesn't jumps to the label below

label: for (...)
A call to break/continue is only possible from inside a loop and the label must be somewhere above the directive.

Summary
We covered 3 types of loops:

while – The condition is checked before each iteration.

do..while – The condition is checked after each iteration.

for (;;) – The condition is checked before each iteration, additional settings available.

To make an "infinite" loop, usually the while(true) construct is used. 
Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, 
we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to 
escape a nested loop to go to an outer one.


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
/*
The "switch" statement
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The syntax

The switch has one or more case blocks and an optional default.

It looks like this:

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
The value of x is checked for a strict equality to the value from the first case (that is, value1) 
then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, 
until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).
An example
An example of switch (the executed code is highlighted):

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too large' );
    break;
  default:
    console.log( "I don't know such values" );
}
Here the switch starts to compare a from the first case variant that is 3. The match fails.

Then 4. That’s a match, so the execution starts from case 4 until the nearest break.

If there is no break then the execution continues with the next case without any checks.

An example without break:

let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
  default:
    console.log( "I don't know such values" );
}
In the example above we’ll see sequential execution of three console.log-s:

console.log( 'Exactly!' );
console.log( 'Too big' );
console.log( "I don't know such values" );
Any expression can be a switch/case argument

Both switch and case allow arbitrary expressions.

For example:

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    console.log("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}
Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code is executed.

Grouping of "case"
Several variants of case which share the same code can be grouped.

For example, if we want the same code to run for case 3 and case 5:

let a = 2 + 2;

switch (a) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}
Now both 3 and 5 show the same message.

The ability to "group" cases is a side-effect of how switch/case works without break. 
Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break.

Type matters
Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

For example, let’s consider the code:

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    console.log( 'One or zero' );
    break;

  case '2':
    console.log( 'Two' );
    break;

  case 3:
    console.log( 'Never executes!' );
    break;
  default:
    console.log( 'An unknown value' );
}
For 0, 1, the first console.log runs.
For 2 the second console.log runs.
But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. 
So we’ve got a dead code in case 3! The default variant will execute.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Functions <3

// Function declaration, function expression, arrow function 

// Function expression

let someF = function(){
    console.log("i'm an function expression")
} // this function can't be used befor it's intialization 

// Arrrow function 

hello = function() {
  return "Hello World!";
};

hello = () => {
  return "Hello World!";
};

hello = () => "Hello World!";

sum = (a,b) => a+b;

console.log(sum(1,1)) // 2

// Function declaration,we can call a declared function before it's declaration

function myFunction(){
  console.log("Hi!");
}

// myFunction();

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Local variables 

// A variable declared inside a function is only visible inside that function.

function someMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  console.log( message );
}

// someMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function```

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Outer variables
// A function can access an outer variable as well, for example:

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

// showMessage(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.

let someName = 'John';

function showMessage() {
  someName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + someName;
  console.log(message);
}

// console.log( someName ); // John before the function call

// showMessage();

// console.log( someName ); // Bob, the value was modified by the function

// The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. 
// For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName1 = 'John';

function showMessage() {
  let userName1 = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName1; // Bob
  console.log(message);
}

// the function will create and use its own userName1
showMessage();

console.log( userName1 ); // John, unchanged, the function did not access the outer variable



// Global variables

// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. 
// Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Parameters
// We can pass arbitrary data to functions using parameters (also called function arguments) .

// In the example below, the function has two parameters: from and text.

function showMessage3(from, text) { // arguments: from, text
  console.log(from + ': ' + text);
}

showMessage3('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage3('Ann', "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text.
// Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. 
// Please note: the function changes from, but the change is not seen outside, 
// because a function always gets a copy of the value:

function showMessage4(from, text) {
  from = '*' + from + '*'; // make "from" look nicer
  console.log( from + ': ' + text );
}

let from = "Ann";

showMessage4(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Default values
// If a parameter is not provided, then its value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:



// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Function expressions
// In JavaScript, a function is not a "magical language structure", but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function sayHi() {
  console.log( "Hello" );
}
// There is another syntax for creating a function that is called a Function Expression.

It looks like this:

let sayHi = function() {
  console.log( "Hello" );
};

// Here, the function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, 
// it’s just a value stored in the variable sayHi.

// The meaning of these code samples is the same: "create a function and put it into the variable sayHi".

// We can even print out that value using console.log:

function sayHi() {
  console.log( "Hello" );
}

console.log( sayHi ); // shows the function code
// Please note that the last line does not run the function, because there are no parentheses after sayHi. 
// There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. 
// The code above shows its string representation, which is the source code.

// Surely, a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
// Here’s what happens above in detail:

// The Function Declaration (1) creates the function and puts it into the variable named sayHi.
// Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. 
// If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
// Now the function can be called as both sayHi() and func().
// Note that we could also have used a Function Expression to declare sayHi, in the first line:

let sayHi = function() {
  alert( "Hello" );
};

let func = sayHi;
// ..
// Everything would work the same.

// Why is there a semicolon at the end?

// You might wonder, why does Function Expression have a semicolon ; at the end, but Function Declaration does not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
The answer is simple:

// There’s no need for ; at the end of code blocks and syntax structures that use them like if { ... }, for { }, function f { } etc.
// A Function Expression is used inside the statement: let sayHi = ...;, as a value. 
// It’s not a code block, but rather an assignment. The semicolon ; is recommended at the end of statements, no matter what the value is. 
// So the semicolon here is not related to the Function Expression itself, it just terminates the statement.
// Callback functions
// Let’s look at more examples of passing functions as values and using function expressions.

// We’ll write a function ask(question, yes, no) with three parameters:

// question Text of the question

// yes Function to run if the answer is “Yes”

// no Function to run if the answer is “No”

// The function should ask the question and, depending on the user’s answer, call yes() or no():

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

function showOk() {
  console.log( "You agreed." );
}

function showCancel() {
  console.log( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);
// In practice, such functions are quite useful. The major difference between a real-life ask and the example above is 
// that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, 
// such function usually draws a nice-looking question window. But that’s another story.

// The arguments showOk and showCancel of ask are called callback functions or just callbacks.

// The idea is that we pass a function and expect it to be “called back” later if necessary. 
// In our case, showOk becomes the callback for "yes" answer, and showCancel for "no" answer.

// We can use Function Expressions to write the same function much shorter:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { console.log("You agreed."); },
  function() { console.log("You canceled the execution."); }
);
// Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. 
// Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

// Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

// A function is a value representing an "action"

// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

// We can pass it between variables and run when we want.

// Function Expression vs Function Declaration
// Let’s formulate the key differences between Function Declarations and Expressions.

// First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, in the main code flow.
// // Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the "assignment expression" =:
// // Function Expression
// let sum = function(a, b) {
//   return a + b;
// };
// The more subtle difference is when a function is created by the JavaScript engine.

// A Function Expression is created when the execution reaches it and is usable only from that moment.

// Once the execution flow passes to the right side of the assignment let sum = function… – here we go, 
// the function is created and can be used (assigned, called, etc. ) from now on.

// Function Declarations are different.

// A Function Declaration can be called earlier than it is defined.

// For example, a global Function Declaration is visible in the whole script, no matter where it is.

// That’s due to internal algorithms. When JavaScript prepares to run the script, 
// it first looks for global Function Declarations in it and creates the functions. We can think of it as an "initialization stage".

// And after all Function Declarations are processed, the code is executed. So it has access to these functions.

// For example, this works:

sayHi("John"); // Hello, John

function sayHi(name) {
  console.log( `Hello, ${name}` );
}
// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

// …If it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  console.log( `Hello, ${name}` );
};
// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

// Another special feature of Function Declarations is their block scope.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. 
// And then we plan to use it some time later.

// If we use Function Declaration, it won’t work as intended:

// let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    console.log("Hello!");
  }

} else {

  function welcome() {
    console.log("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined
// That’s because a Function Declaration is only visible inside the code block in which it resides.

// Here’s another example:

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    console.log("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    console.log("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable 
// that is declared outside of if and has the proper visibility.

// This code works as intended:

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}

welcome(); // ok now
// Or we could simplify it even further using a question mark operator ?:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
// When to choose Function Declaration versus Function Expression?

// As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax. 
// It gives more freedom in how to organize our code, because we can call such functions before they are declared.

// That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. 
// Function Declarations are more "eye-catching".

// …But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), 
// then Function Expression should be used.

// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a "Function Declaration".
// If the function is created as a part of an expression, it’s called a "Function Expression".
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. 
// That gives us more flexibility in code organization, and is usually more readable.

// So we should use a Function Expression only when a Function Declaration is not fit for the task. 
// We’ve seen a couple of examples of that in this chapter, and will see more in the future.

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called "arrow functions", because it looks like this:

let func = (arg1, arg2, ...argN) => expression
// …This creates a function func that accepts arguments arg1..argN, 
// then evaluates the expression on the right side with their use and returns its result.

// In other words, it’s the shorter version of:

let func = function(arg1, arg2, ...argN) {
  return expression;
};
Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

console.log( sum(1, 2) ); // 3
// As you can, see (a, b) => a + b means a function that accepts two arguments named a and b. 
// Upon the execution, it evaluates the expression a + b and returns the result.

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

console.log( double(3) ); // 6
// If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => console.log("Hello!");

sayHi();
// Arrow functions can be used in the same way as Function Expressions.

// For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome(); // ok now
// Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.

// They are very convenient for simple one-line actions, when we’re just too lazy to write many words.

Multiline arrow functions
// The examples above took arguments from the left of => and evaluated the right-side expression with them.

// Sometimes we need something a little bit more complex, like multiple expressions or statements. 
// It is also possible, but we should enclose them in curly braces. Then use a normal return within them.

Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.log( sum(1, 2) ); // 3
// More to come Here we praised arrow functions for brevity. But that’s not all!

// Arrow functions have other interesting features.

// To study them in-depth, we first need to get to know some other aspects of JavaScript, so we’ll return to arrow functions later in the chapter Arrow functions revisited.

// Summary
// Arrow functions are handy for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, 
// but we need an explicit return to return something.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////