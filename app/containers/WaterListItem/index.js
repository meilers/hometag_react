/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import { Link } from 'react-router-dom';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

import A from 'components/A';

export class WaterListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
        // <RepoLink href={item.html_url} target="_blank">
        //   {nameprefix + item.name}
        // </RepoLink>
        // <IssueLink href={`${item.html_url}/issues`} target="_blank">
        //   <IssueIcon />
        //   <FormattedNumber value={item.open_issues_count} />
        // </IssueLink>

  componentDidMount() {

    const item = this.props.item;
    const firebase = item.firebase;
    const storageRef = firebase.storage().ref()

    const { videos } = item
    let test = videos[0]
    let id = item.id
    let url = '531262325/water/' + id + '/videos/' + test
    var starsRef = storageRef.child(url);

    // Get the download URL
    // starsRef.getDownloadURL().then(function(url) {
    //   // Insert url into an <img> tag to "download"
    //   console.log('url', url)

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
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <Wrapper>
        {item.description}
      </Wrapper>
    );

    let unitUrl = '/water/' + item.id

    // Render the content into a list item
    return (
      <Link to={unitUrl}>
        <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
      </Link>
    );
  }
}

WaterListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
}))(WaterListItem);
