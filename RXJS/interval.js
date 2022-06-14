const { interval } = Rx;
const { take } = RxOperators;

interval(1000).pipe(
  take(4)
)
