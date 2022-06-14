const { Observable } = Rx;

Observable.create(observer => {
  let n = 1;

  const intervalId = setInterval(() => {
    if (Math.random() < 0.8 && n < 9) {
      observer.next(n * n);
      n += 1;
    } else {
      observer.error('Oh no...');
    }
  }, 1000);

  return () => clearInterval(intervalId);
})
