import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import WaterListItem from 'containers/WaterListItem';

function WaterList({ firebase, loading, error, water }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  console.log(loading);
  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (water !== false) {
    const waterItems = []

    Object.keys(water).forEach(function(key) {
      water[key].id = key
      water[key].firebase = firebase
      waterItems.push(water[key]);
    })

    return <List items={waterItems} component={WaterListItem} />;
  }

  return null;
}

WaterList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  water: PropTypes.any,
};

export default WaterList;
