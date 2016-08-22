const myBeverage = {
	delicious: true,
	sour: false,
};

describe('my beverage', function () {
  it('is delicious', function () {
    expect(myBeverage.delicious).toBeTruthy();
  });

  it('is not sour', function () {
    expect(myBeverage.sour).toBeFalsy();
  });
});
