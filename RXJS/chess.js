const { of, interval } = Rx;
const { zip, map } = RxOperators;

const timer$ = interval(1000);
const pieces$ = of('', '♞', '', '♞', '♘', '♞');
const columns$ = of('e', 'c', 'g', 'd', 'e', 'f');
const rows$ = of('4', '6', '4', '4', '2', '3');

timer$.pipe(
  zip(
    pieces$,
    columns$,
    rows$
  ),
  map(([_, piece, column, row]) => `${piece}${column}${row}`)
)
