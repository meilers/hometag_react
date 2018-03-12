/**
 *
 * WaterUnitPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWaterUnitPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class WaterUnitPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let id = this.props.match.params.name
    console.log("CALISS")
    return (
      <div>
        <Helmet>
          <title>WaterUnitPage</title>
          <meta name="description" content="Description of WaterUnitPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

WaterUnitPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  waterunitpage: makeSelectWaterUnitPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'waterUnitPage', reducer });
const withSaga = injectSaga({ key: 'waterUnitPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WaterUnitPage);
