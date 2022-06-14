const { interval } = Rx;
const { groupBy } = RxOperators;

interval(1000).pipe(
  groupBy(n => n % 2)
)
