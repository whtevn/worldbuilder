import { Map, List } from 'immutable';
import  *  as digestion from '../lib/digestion';
import { assert } from 'chai';

describe("during digestion", () => {
  const stomach = List([3, 1, 5]);
  const neg_stomach = List([-3, -1, -5]);
  it("cycle should move the first item to the end of the list", () => {
    assert(digestion.cycle(stomach).equals(List([1, 5, 3])));
  })
  it("uncycle should move the last item to the beginning of the list", () => {
    assert(digestion.uncycle(stomach).equals(List([5, 3, 1])));
  })
  it("should be able to reduce the stomach by adding the front items", ()=>{
    assert(digestion.add(stomach).equals(List([4, 5])));
  })
  it("should be able to reduce the stomach by multiplying the front items", ()=>{
    assert(digestion.subtract(stomach).equals(List([2, 5])));
  })
  it("should be able to alter the stomach by finding the aboslute value of the front item", ()=>{
    assert(digestion.absolute(stomach).equals(stomach));
    assert(digestion.absolute(neg_stomach).equals(List([3, -1, -5])));
  })
  it("should be able to alter the stomach by finding the negative value of the front item", ()=>{
    assert(digestion.negate(stomach).equals(List([-3,  1,  5])));
    assert(digestion.negate(neg_stomach).equals(List([3, -1, -5])));
  })
  it("should be able to alter the stomach by sorting the contents", ()=>{
    assert(digestion.sort(stomach).equals(List([1, 3, 5])));
  })
  it("should be able to alter the stomach by reversing the contents", ()=>{
    assert(digestion.reverse(stomach).equals(List([5, 1, 3])));
  })
  it("should be able to chain these events together", ()=>{
    assert(digestion.chain(stomach, "cycle", "reverse", "add").equals(List([8, 1])));
  })
});


