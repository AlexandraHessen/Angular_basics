const { fromEvent } = Rx;
const { map, throttleTime } = RxOperators;

fromEvent(document, 'mousemove').pipe(
  map(event => event.clientX),
  throttleTime(300)
)