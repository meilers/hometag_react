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

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import Wrapper from './Wrapper';

export class WaterListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
        // <RepoLink href={item.html_url} target="_blank">
        //   {nameprefix + item.name}
        // </RepoLink>
        // <IssueLink href={`${item.html_url}/issues`} target="_blank">
        //   <IssueIcon />
        //   <FormattedNumber value={item.open_issues_count} />
        // </IssueLink>

  render() {
    const item = this.props.item;

    // Put together the content of the repository
    const content = (
      <Wrapper>
        {item.description}
      </Wrapper>
    );

    // Render the content into a list item
    return (
      // <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />

    );
  }
}

WaterListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};

export default connect(createStructuredSelector({
}))(WaterListItem);
