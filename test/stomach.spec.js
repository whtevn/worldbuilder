import { Map, List } from 'immutable';
import  *  as stomach from '../lib/stomach';
import { assert } from 'chai';

describe("a stomach", () => {
  const nutrients = List([4, 9, 16, 25, 36, 49, 64, 81])
  const food = List([3]);
  const nutrient_list = List([4, 9, 16]);
  const nutrient_rich = List([...food, ...nutrient_list]);
  const contents = List([3, 1, 5]);
  it("should be able to assess the available nutrients", ()=>{
    assert(stomach.nutrients_in(nutrient_rich, nutrients).equals(nutrient_list));
  })
  it("consume should merge and flatten the stomach and the contents", () => {
    assert(stomach.ingest(contents, food).equals(List([...contents, ...food])));
  })
})
