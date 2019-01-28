import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ThreadList = props => (
  <tbody>
    {props.threads.map((t, i) => {
      console.log(t);
      return (
        <tr key={i}>
          <td>
            <Link to={{ pathname: `/forum/thread/${t.get('id')}` }}>
              {t.get('subject')}
            </Link>
          </td>
          <td>{t.get('userName')}</td>
          <td>{t.get('category')}</td>
          <td>{t.get('replies')}</td>
          <td>{t.get('subs')}</td>
          <td>{t.get('date') ? t.get('date').slice(0, 10) : ''}</td>
        </tr>
      );
    })}
  </tbody>
);

ThreadList.propTypes = {
  threads: PropTypes.object,
};

export default ThreadList;
