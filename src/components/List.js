import React, { PropTypes } from 'react';

import Icon from './Icon';

function getLinkIcon(link) {
  if (/https:\/\/github.com/.test(link)) {
    return <Icon name="github" />;
  }

  return null;
}

const List = ({ id, name, thumb, date, description, links, style }) => {

  // FIXME links.demo is undefined
  let thumbBlock = null;
  let descBlock = null;
  let linksBlock = null;

  if(thumb) {
    thumbBlock = (
      <div className="card__thumb">
        <img src={thumb} alt={name} />
      </div>
    );
  }

  descBlock = description.map((d, id) => {
    return <p key={ id }>{ d }</p>;
  });

  if (links) {
    linksBlock = Object.keys(links).map((k, id) => {
      let icon = getLinkIcon(links[k]);
      return <a key={ id } href={ links[k] }>
              { icon }
              { k }
             </a>;
    });
  }

  console.log(style);

  return (
    <div className="card" style={style}>
      { thumbBlock }
      <div className="card__content">
        <div className="card__header">
          <h3>
            <a href={links.demo}>{name}</a>
          </h3>
        </div>

        <div className="card__description">
          { descBlock }
        </div>

        <div className="card__links">
          { linksBlock }
        </div>
      </div>
    </div>
  );
}

List.propTypes = {
  name: PropTypes.string.isRequired
};

export default List;