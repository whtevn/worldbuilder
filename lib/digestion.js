import { Map, List } from 'immutable';

export const cycle        = (stomach) => stomach.shift().push(stomach.first())  ;
export const uncycle      = (stomach) => stomach.pop().unshift(stomach.last())  ;
export const add          = (stomach) => stomach.shift().update(0, c => c+stomach.first()) ;
export const multiply     = (stomach) => stomach.shift().update(0, c => c*stomach.first()) ;
export const subtract     = (stomach) => stomach.shift().update(0, c => stomach.first()-c) ;
export const absolute     = (stomach) => stomach.update(0, c => c<0?c*-1:c ) ;
export const negate       = (stomach) => stomach.update(0, c => c*-1 ) ;
export const sort         = (stomach) => stomach.sort()    ;
export const reverse      = (stomach) => stomach.reverse() ;

export const chain = (stomach, ...events) => chain_skeleton(operations, stomach, ...events);

function chain_skeleton(definition, stomach, step, ...remaining){
  if(step) return chain_skeleton(definition, definition.get(step)(stomach), ...remaining);
  return stomach
}

export const operations = Map({
  cycle,
  uncycle,
  add,
  multiply,
  subtract,
  absolute,
  negate,
  sort,
  reverse
});
