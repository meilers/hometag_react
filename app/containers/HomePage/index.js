/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import A from 'components/A';
import messages from './messages';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    // Create a reference to the file we want to download
    // const { firebase: { storage } } = this.props;
    // const storageRef = storage().ref()
    // var starsRef = storageRef.child('water/images/water.jpg');

    // // Get the download URL
    // starsRef.getDownloadURL().then(function(url) {
    //   // Insert url into an <img> tag to "download"
    // }).catch(function(error) {

    //   // A full list of error codes is available at
    //   // https://firebase.google.com/docs/storage/web/handle-errors
    //   switch (error.code) {
    //     case 'storage/object_not_found':
    //       // File doesn't exist
    //       console.log("OH NO 1")
    //       break;

    //     case 'storage/unauthorized':
    //     console.log("OH NO 2")
    //       // User doesn't have permission to access the object
    //       break;

    //     case 'storage/canceled':
    //     console.log("OH NO 3")
    //       // User canceled the upload
    //       break;

    //     case 'storage/unknown':
    //     console.log("OH NO 4")
    //       // Unknown error occurred, inspect the server response
    //       break;
    //   }
    // });

  }
  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
        <A href="/water">
          Water
        </A>
      </h1>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const HomePageComposed = compose(
  withConnect,
)(HomePage);

export default firebaseConnect()(HomePageComposed);
