# Looping festival .. or ?

This exercise can turn into a looping festival if we don't pay attention to performance!
The suggested data structure helps reduce loops by providing an O(1) access time when marking numbers.
The below is an example of how one board is represented:

```js
'0': {
    numbers: {
    '5': [ 2, 0, false ],
    '6': [ 2, 4, false ],
    '10': [ 1, 2, false ],
    '12': [ 1, 3, false ],
    '23': [ 0, 1, false ],
    '25': [ 2, 3, false ],
    '26': [ 1, 4, false ],
    '27': [ 1, 0, false ],
    '29': [ 3, 3, false ],
    '32': [ 4, 3, false ],
    '33': [ 4, 0, false ],
    '34': [ 2, 1, false ],
    '40': [ 3, 1, false ],
    '41': [ 4, 2, false ],
    '53': [ 1, 1, false ],
    '54': [ 3, 4, false ],
    '56': [ 3, 0, false ],
    '65': [ 0, 2, false ],
    '68': [ 4, 1, false ],
    '73': [ 3, 2, false ],
    '78': [ 0, 3, false ],
    '82': [ 4, 4, false ],
    '83': [ 2, 2, false ],
    '85': [ 0, 0, false ],
    '93': [ 0, 4, false ]
  },
    rowsCounters: [ 0, 0, 0, 0, 0 ],
    colsCounters: [ 0, 0, 0, 0, 0 ],
    winner: false
  },
```

This an example of the first board:

- board number is 0
- board numbers are keys
- each key has an array as its value and this array contains the following info:
  - which row the number belongs to
  - which col the number belongs to
  - whether the number is marked or not (initialized to `false`)
- `rowsCounters` and `colsCounters` are updated whenever a value is marked and once an element reaches 5, we know the board is a winner.
- `winner` stating if the board is a winner or not yet, also initialized to `false` and turned into `true` once it wins so we avoid checking it in the future to also help perfomance.
