import React, { Component } from 'react';
import { inject } from 'mobx-react';
import DownloadIcon from 'react-icons2/mdi/download';
import {
  Footer as FooterList,
  FooterRight,
} from './PageList.styles';

import PageListPaginator from './PageListPaginator';
import Button from '../Button';

@inject('listStore')
class ListFooter extends Component {
  render() {
    const {
      listStore,
    } = this.props;
    return (
      <FooterList>
        <Button
          view="text"
          iconLeft={<DownloadIcon />}
          onClick={listStore.download}
        >
          Скачть XLSX
        </Button>
        <Button
          view="text"
          iconLeft={<DownloadIcon />}
          onClick={listStore.download}
        >
          list
        </Button>
        <FooterRight>
          <PageListPaginator />
        </FooterRight>
      </FooterList>
    );
  }
}

export default ListFooter;
