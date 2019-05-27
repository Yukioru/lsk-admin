import React, { Component } from 'react';
import autobind from '@lskjs/autobind';
import Remove from 'react-icons2/mdi/close-circle-outline';
import If from 'react-if';
import Box from '../Box';
import fileTypes from '../fileTypes';
import Typography from '../Typography';
import {
  containerStyle,
  typeStyle,
  urlStyle,
  PreviewImage,
  RemoveButton,
  PreviewContainer,
  Info,
  centerFile,
} from './GridFile.styles';

class GridFile extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.src !== nextProps.src;
  }

  @autobind
  remove() {
    const { onRemove, key, src } = this.props;

    if (onRemove) {
      onRemove({ key, src });
    }
  }

  render() {
    const { src = '', title, image, type, onRemove } = this.props;
    const Icon = fileTypes[type] || fileTypes.other;
    return (
      <Box
        componentClass="div"
        className={containerStyle}
      >
        <PreviewContainer>
          { image
            ? (
              <PreviewImage
                src={src}
                alt={title}
              />
            )
            : (
              <Icon
                size={64}
                className={centerFile}
              />
            )}
        </PreviewContainer>
        <Info>
          <Typography
            color="#9b9b9b"
            variant="caption"
            className={typeStyle}
          >
            {type}
          </Typography>
          <Typography className={urlStyle}>{title}</Typography>
        </Info>
        <If condition={onRemove}>
          <RemoveButton>
            <Remove onClick={this.remove} />
          </RemoveButton>
        </If>
      </Box>
    );
  }
}

export default GridFile;