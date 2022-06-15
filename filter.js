const { fromEvent } = Rx;
const { map, filter } = RxOperators;

const input = document.createElement('input');

input.setAttribute('placeholder', 'Type something');

// `output` represents the right hand pane.
// You can prepend/append elements to it.
output.prepend(input);

input.focus();

fromEvent(input, 'keydown').pipe(
  map(e => e.key),
  filter(key => key !== ' ')
)
