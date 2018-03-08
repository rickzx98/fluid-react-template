import { Page } from '../../common/';
import React from 'react';
import { SearchResult } from '../../SearchResult/';
import { getLabel } from '../../../utils';

export const RecordHomeBody = () => {
  return (<Page label={getLabel('appName')} icon="search" banner="home-banner.jpg">
    <SearchResult />
  </Page>);
};
