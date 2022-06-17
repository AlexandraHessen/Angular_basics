const { interval } = Rx;
const { take } = RxOperators;
const { Observable } = Rx;

const int$1 = interval(1000)
const int$2 = interval(2000)

Observable.combineLatest(
  int$1,
  int$2
  ).subscribe(all=>console.log(all))