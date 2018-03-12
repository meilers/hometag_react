import { createSelector } from 'reselect';

/**
 * Direct selector to the waterUnitPage state domain
 */
const selectWaterUnitPageDomain = (state) => state.get('waterUnitPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WaterUnitPage
 */

const makeSelectWaterUnitPage = () => createSelector(
  selectWaterUnitPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectWaterUnitPage;
export {
  selectWaterUnitPageDomain,
};
