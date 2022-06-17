describe("Multiple spies created with createSpyObj()", function() {
    var ball;

    beforeEach(function() {
      ball = jasmine.createSpyObj('ball', ['roll', 'bounce', 'stop']);
      ball.roll();
      ball.bounce(4);
      ball.stop();
    });

  it('should track the invoked spy methods', function() {
      expect(ball.roll).toHaveBeenCalled();
      expect(ball.bounce).toHaveBeenCalled();
      expect(ball.stop).toHaveBeenCalled();
  });
});