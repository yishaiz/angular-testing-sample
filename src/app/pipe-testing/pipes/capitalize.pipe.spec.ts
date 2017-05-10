import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {

  let pipe : CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('Should capitalize all words in a string', () => {
    let result : string = pipe.transform('golden retriever', null);

    expect(result).toEqual('Golden Retriever');


  });
});

