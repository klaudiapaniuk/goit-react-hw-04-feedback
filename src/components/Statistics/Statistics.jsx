import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul>
      <li>
        <span className={styles.statistics_item}>Good: </span>
        {good}
      </li>
      <li>
        <span className={styles.statistics_item}>Neutral: </span>
        {neutral}
      </li>
      <li>
        <span className={styles.statistics_item}>Bad: </span>
        {bad}
      </li>
      <li>
        <span className={styles.statistics_item}>Total: </span>
        {total}
      </li>
      <li>
        <span className={styles.statistics_itemFinal}>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
