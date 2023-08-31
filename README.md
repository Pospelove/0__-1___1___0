# 0__-1___1___0
Running the program:
```
node cli.js input.csv > output.csv
```

## Implementation Notes

+ Use NodeJS streams to transform data incrementally, with hope to be able to process files larger than our RAM
+ To rotate a square, for each cell we determine expected X and Y speed (both from -1 to 1) and just move values to expected positions (current pos + speed)

## Testing Notes

I written some unit tests while working on this program (you can `npm run test`)

+ [src/transform.test.ts](src/transform.test.ts) - row transformation tests including test cases from pdf and some corner cases
+ [src/mathUtils.test.ts](src/mathUtils.test.ts) - tests for underlying math

I've also played with `input.csv` for a bit to test bad CSVs handling (not automated)
+ "id,jsonn" header
+ missing \n at the end
+ missing json value

## What Would I Improve

At least these points
+ `InputRow` interface is not really type safe. All fields should be optional and code should be fixed to compile with such interface. However it can make the code uglier and/or less efficient. So, at this moment it's a pretty good tradeoff
+ `MathUtils.getCellSpeedY` could be simplier
+ `JSON.parse/JSON.stringify` is slow, we could use [simdjson_nodejs](https://github.com/luizperes/simdjson_nodejs). In case of not being able to load simdjson, we could fall back to JSON.parse. Hand-crafted JSON string could be faster than JSON.stringify as well
