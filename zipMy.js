const { Observable } = Rx;
const { interval } = Rx;
const { take } = RxOperators;
const { zip, map } = RxOperators;

const { take } = RxOperators;
const interval$ = Rx.Observable.interval(1000);

Rx.Observable
.zip(
    interval$,
    interval$.take(3)
)

.subscribe('zip')


const interval$ = interval;
const interval$ = Observable.interval(1000);

Observable
.zip(
    interval$,
    interval$.take(3)
)

.subscribe('zip')


const { interval } = Rx;
const { take } = RxOperators;

interval(1000).pipe(
  take(4)
)


const { Observable } = Rx;
const { interval } = Rx;
const { take } = RxOperators;
const { zip, map } = RxOperators;
const interval$ = Observable.interval(1000);

Rx.Observable
.zip(
    interval$,
    interval$.take(3)
)

.subscribe('zip')

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


const { interval } = Rx;
const { take } = RxOperators;
const { Observable } = Rx;

const int$1 = interval(1000)
const int$2 = interval(2000)

Observable.combineLatest(
  int$1,
  int$2
  ).subscribe(all=>console.log(all))
 

  const { Observable } = Rx;

Observable.create


const int$1 = interval(1000)
const int$2 = interval(2000)

Rx.Observable
.combineLatest(int$1, int$2)