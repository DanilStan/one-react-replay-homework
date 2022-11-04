import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul>
        {stats.map(({ label, percentage, id }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
