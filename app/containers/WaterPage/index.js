/**
 *
 * WaterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import 'firebase/firestore'; // add this to use Firestore

import WaterList from 'components/WaterList';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

export class WaterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { water } = this.props;
    const waterListProps = {
      water,
    };

    console.log(this.props);
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
  water: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withFirestoreConnect = connect((state) => ({
  water: state.get('firestore').data,
}));

const withReducer = injectReducer({ key: 'waterPage', reducer });
const withSaga = injectSaga({ key: 'waterPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withFirestoreConnect,
  firestoreConnect([
    {
      collection: 'users/531262325/water',
    },
  ]),
  // firestoreConnect((props) => [
  //   {
  //     collection: 'users/531262325/water',
  //     // where: ['user.uid', '==', props.auth.uid],
  //   },
  // ]),
)(WaterPage);
