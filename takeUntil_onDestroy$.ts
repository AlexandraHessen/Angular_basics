private readonly onDestroy$ = new Subject<void>();

  constructor(public store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store
      .select(getOrder)
      .pipe(
        take(1),
        takeUntil(this.onDestroy$),
      )
      .subscribe((order) => {
        console.log('ORDERED!', order);
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }