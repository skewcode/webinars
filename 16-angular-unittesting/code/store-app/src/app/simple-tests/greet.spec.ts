import { greet } from './greet';

xdescribe('greet', () => {
  it('should include the name in the message', () => {
    const name = 'hari';

    expect(greet(name)).toContain(name);
  });
});
