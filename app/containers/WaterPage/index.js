/**
 *
 * WaterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import 'firebase/firestore' // add this to use Firestore

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWater from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import WaterList from 'components/WaterList';

export class WaterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(firestoreConnect)

    const { water } = this.props;
    const waterListProps = {
      water,
    };

    console.log(this.props)
    return (
      <div>
        <Helmet>
          <title>WaterPage</title>
          <meta name="description" content="Description of WaterPage" />
        </Helmet>
        <WaterList {...waterListProps} />
      </div>
    );
  }
}

WaterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectWater(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'waterPage', reducer });
const withSaga = injectSaga({ key: 'waterPage', saga });

export default compose(
  firestoreConnect({ collection: 'users' }),
  withReducer,
  withSaga,
  withConnect,
)(WaterPage);
