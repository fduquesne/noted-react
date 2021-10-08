import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Tag } from '../../../components';

class NoteItem extends React.Component {
  render() {
    const { note, selected } = this.props;

    const formatDate = timestamp => {
      const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEB', 'OCT', 'NOV', 'DEC'];
      const currentYear = new Date(Date.now()).getFullYear();

      const date = new Date(Number(timestamp));
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const month = months[date.getMonth()];

      if (date.getFullYear() !== currentYear) return `${day} ${month} ${date.getFullYear()}`;
      return `${day} ${month}`;
    };

    return (
      <div className={cx('note-item', { selected })}>
        <div className="note-item-updated-at">{formatDate(note.updatedAt)}</div>
        <div className="note-item-title">{note.title}</div>
        <div className="note-item-content">{note.content}</div>
        <div className="note-item-tags">
          {note.tags.map(label => (
            <Tag key={label} label={label} />
          ))}
        </div>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};

export default NoteItem;
