import React from 'react';
import PropTypes from 'prop-types';
import Right from 'react-icons2/fa/arrow-circle-right';
import A from '@lskjs/general/A';

const propTypes = {
  count: PropTypes.string,
  countSign: PropTypes.string,
  title: PropTypes.string,
  iconClasses: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  url: PropTypes.string,
  urlText: PropTypes.string,
  color: PropTypes.string,
};

function renderIcon(icon) {
  if (typeof icon === 'string') {
    return <i className={icon} />;
  }
  return icon;
}

function StatBox({
  count, countSign, title,
  iconClasses, url, urlText, color,
}) {
  return (
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>
          {count}
          <sup style={{ fontSize: 20 }}>{countSign}</sup>
        </h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        {renderIcon(iconClasses)}
      </div>
      <A href={url} className="small-box-footer">
        {urlText} <Right />
      </A>
    </div>
  );
}

StatBox.propTypes = propTypes;

export default StatBox;
