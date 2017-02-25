import { Map, List } from 'immutable';
export const ingest       = (stomach, contents) => List([...stomach, ...contents]) ;
export const nutrients_in = (stomach, nutrients) => stomach.filter(content => nutrients.includes(content)) ;

