/// <reference path="java.lang.d.ts" />
/// <reference path="java.util.d.ts" />
/// <reference path="java.io.d.ts" />
declare module '@afterburnerhq/java.math' { 
import { Enum, Comparable, Class, String, Number } from '@afterburnerhq/java.lang'
import { Random } from '@afterburnerhq/java.util'
import { Serializable } from '@afterburnerhq/java.io'
export class BigDecimal extends Number implements Comparable<BigDecimal> {
static ZERO:BigDecimal
static ONE:BigDecimal
static TEN:BigDecimal
static ROUND_UP:number
static ROUND_DOWN:number
static ROUND_CEILING:number
static ROUND_FLOOR:number
static ROUND_HALF_UP:number
static ROUND_HALF_DOWN:number
static ROUND_HALF_EVEN:number
static ROUND_UNNECESSARY:number
constructor(arg0: String[], arg1: number, arg2: number);
constructor(arg0: String[], arg1: number, arg2: number, arg3: MathContext);
constructor(arg0: String[]);
constructor(arg0: String[], arg1: MathContext);
constructor(arg0: String);
constructor(arg0: String, arg1: MathContext);
constructor(arg0: number);
constructor(arg0: number, arg1: MathContext);
constructor(arg0: BigInteger);
constructor(arg0: BigInteger, arg1: MathContext);
constructor(arg0: BigInteger, arg1: number);
constructor(arg0: BigInteger, arg1: number, arg2: MathContext);
constructor(arg0: number);
constructor(arg0: number, arg1: MathContext);
constructor(arg0: number);
constructor(arg0: number, arg1: MathContext);

static valueOf(arg0: number, arg1: number): BigDecimal;

static valueOf(arg0: number): BigDecimal;

static valueOf(arg0: number): BigDecimal;

add(arg0: BigDecimal): BigDecimal;

add(arg0: BigDecimal, arg1: MathContext): BigDecimal;

subtract(arg0: BigDecimal): BigDecimal;

subtract(arg0: BigDecimal, arg1: MathContext): BigDecimal;

multiply(arg0: BigDecimal): BigDecimal;

multiply(arg0: BigDecimal, arg1: MathContext): BigDecimal;

divide(arg0: BigDecimal, arg1: number, arg2: number): BigDecimal;

divide(arg0: BigDecimal, arg1: number, arg2: RoundingMode): BigDecimal;

divide(arg0: BigDecimal, arg1: number): BigDecimal;

divide(arg0: BigDecimal, arg1: RoundingMode): BigDecimal;

divide(arg0: BigDecimal): BigDecimal;

divide(arg0: BigDecimal, arg1: MathContext): BigDecimal;

divideToIntegralValue(arg0: BigDecimal): BigDecimal;

divideToIntegralValue(arg0: BigDecimal, arg1: MathContext): BigDecimal;

remainder(arg0: BigDecimal): BigDecimal;

remainder(arg0: BigDecimal, arg1: MathContext): BigDecimal;

divideAndRemainder(arg0: BigDecimal): BigDecimal[];

divideAndRemainder(arg0: BigDecimal, arg1: MathContext): BigDecimal[];

sqrt(arg0: MathContext): BigDecimal;

pow(arg0: number): BigDecimal;

pow(arg0: number, arg1: MathContext): BigDecimal;

abs(): BigDecimal;

abs(arg0: MathContext): BigDecimal;

negate(): BigDecimal;

negate(arg0: MathContext): BigDecimal;

plus(): BigDecimal;

plus(arg0: MathContext): BigDecimal;

signum(): number;

scale(): number;

precision(): number;

unscaledValue(): BigInteger;

round(arg0: MathContext): BigDecimal;

setScale(arg0: number, arg1: RoundingMode): BigDecimal;

setScale(arg0: number, arg1: number): BigDecimal;

setScale(arg0: number): BigDecimal;

movePointLeft(arg0: number): BigDecimal;

movePointRight(arg0: number): BigDecimal;

scaleByPowerOfTen(arg0: number): BigDecimal;

stripTrailingZeros(): BigDecimal;

compareTo(arg0: BigDecimal): number;

equals(arg0: Object): boolean;

min(arg0: BigDecimal): BigDecimal;

max(arg0: BigDecimal): BigDecimal;

hashCode(): number;
toString(): string;

toEngineeringString(): String;

toPlainString(): String;

toBigInteger(): BigInteger;

toBigIntegerExact(): BigInteger;

longValue(): number;

longValueExact(): number;

intValue(): number;

intValueExact(): number;

shortValueExact(): number;

byteValueExact(): number;

floatValue(): number;

doubleValue(): number;

ulp(): BigDecimal;
 }

export class BigInteger extends Number implements Comparable<BigInteger> {
static ZERO:BigInteger
static ONE:BigInteger
static TWO:BigInteger
static TEN:BigInteger
constructor(arg0: number[], arg1: number, arg2: number);
constructor(arg0: number[]);
constructor(arg0: number, arg1: number[], arg2: number, arg3: number);
constructor(arg0: number, arg1: number[]);
constructor(arg0: String, arg1: number);
constructor(arg0: String);
constructor(arg0: number, arg1: Random);
constructor(arg0: number, arg1: number, arg2: Random);

static probablePrime(arg0: number, arg1: Random): BigInteger;

nextProbablePrime(): BigInteger;

static valueOf(arg0: number): BigInteger;

add(arg0: BigInteger): BigInteger;

subtract(arg0: BigInteger): BigInteger;

multiply(arg0: BigInteger): BigInteger;

divide(arg0: BigInteger): BigInteger;

divideAndRemainder(arg0: BigInteger): BigInteger[];

remainder(arg0: BigInteger): BigInteger;

pow(arg0: number): BigInteger;

sqrt(): BigInteger;

sqrtAndRemainder(): BigInteger[];

gcd(arg0: BigInteger): BigInteger;

abs(): BigInteger;

negate(): BigInteger;

signum(): number;

mod(arg0: BigInteger): BigInteger;

modPow(arg0: BigInteger, arg1: BigInteger): BigInteger;

modInverse(arg0: BigInteger): BigInteger;

shiftLeft(arg0: number): BigInteger;

shiftRight(arg0: number): BigInteger;

and(arg0: BigInteger): BigInteger;

or(arg0: BigInteger): BigInteger;

xor(arg0: BigInteger): BigInteger;

not(): BigInteger;

andNot(arg0: BigInteger): BigInteger;

testBit(arg0: number): boolean;

setBit(arg0: number): BigInteger;

clearBit(arg0: number): BigInteger;

flipBit(arg0: number): BigInteger;

getLowestSetBit(): number;

bitLength(): number;

bitCount(): number;

isProbablePrime(arg0: number): boolean;

compareTo(arg0: BigInteger): number;

equals(arg0: Object): boolean;

min(arg0: BigInteger): BigInteger;

max(arg0: BigInteger): BigInteger;

hashCode(): number;

toString(arg0: number): String;
toString(): string;

toByteArray(): number[];

intValue(): number;

longValue(): number;

floatValue(): number;

doubleValue(): number;

longValueExact(): number;

intValueExact(): number;

shortValueExact(): number;

byteValueExact(): number;
 }

export class MathContext implements Serializable {
static UNLIMITED:MathContext
static DECIMAL32:MathContext
static DECIMAL64:MathContext
static DECIMAL128:MathContext
constructor(arg0: number);
constructor(arg0: number, arg1: RoundingMode);
constructor(arg0: String);

getPrecision(): number;

getRoundingMode(): RoundingMode;

equals(arg0: Object): boolean;

hashCode(): number;
toString(): string;
 }

export class RoundingMode extends Enum<RoundingMode> {
static UP:RoundingMode
static DOWN:RoundingMode
static CEILING:RoundingMode
static FLOOR:RoundingMode
static HALF_UP:RoundingMode
static HALF_DOWN:RoundingMode
static HALF_EVEN:RoundingMode
static UNNECESSARY:RoundingMode

static values(): RoundingMode[];

static valueOf(arg0: String): RoundingMode;

static valueOf(arg0: number): RoundingMode;
/**
* DO NOT USE
*/
static valueOf<T extends Enum<T>>(arg0: Class<T>, arg1: String): T;
 }

}
