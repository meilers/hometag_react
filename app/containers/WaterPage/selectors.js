import { createSelector } from 'reselect';

/**
 * Direct selector to the waterPage state domain
 */
const selectWaterPageDomain = (state) => state.get('waterPage');

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

export default makeSelectWaterPage;
export {
  selectWaterPageDomain,
};
