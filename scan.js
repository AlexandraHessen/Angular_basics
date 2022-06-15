const { interval } = Rx;
const { scan, pluck, groupBy } = RxOperators;

interval(1000).pipe(
  scan(
    ({ secondLast, last }) => ({
      secondLast: last,
      last: last + secondLast
    }),
    { secondLast: 0, last: 1 }
  ),
  pluck("secondLast"),
  groupBy(n => Math.floor(Math.log10(n)))
)

