import { createSelector } from 'reselect';

/**
 * Direct selector to the waterPage state domain
 */
const selectWaterPageDomain = (state) => state.get('waterPage');
const selectFirestore = (state) => state.get('firestore');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WaterPage
 */

const makeSelectWaterPage = () => createSelector(
  selectWaterPageDomain,
  (substate) => substate.toJS()
);

const makeSelectWater = () => createSelector(
  selectFirestore,
  (state) => state
);

export default makeSelectWaterPage;
export {
  selectWaterPageDomain,
  makeSelectWater,
};
