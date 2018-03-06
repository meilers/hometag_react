/**
*
* WaterListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function WaterListItem() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

WaterListItem.propTypes = {

};

export default WaterListItem;
