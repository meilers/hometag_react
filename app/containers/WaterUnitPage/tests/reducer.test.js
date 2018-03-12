
import { fromJS } from 'immutable';
import waterUnitPageReducer from '../reducer';

describe('waterUnitPageReducer', () => {
  it('returns the initial state', () => {
    expect(waterUnitPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
