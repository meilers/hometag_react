import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import WaterListItem from 'components/WaterListItem';

function WaterList({ loading, error, water }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  console.log(water);
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (water !== false) {
    return <List items={water} component={WaterListItem} />;
  }

  return null;
}

WaterList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  water: PropTypes.any,
};

export default WaterList;
