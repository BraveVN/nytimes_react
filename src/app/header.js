var React = require('react');

var styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

module.exports = React.createClass({
  render: function () {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank" rel="noopener noreferrer">
            Fountain Generator
          </a>
        </p>
        <p style={styles.date}>
          Generated with FountainJS v1.0.0 on Thu May 17 2018 12:32:55 GMT+0700 (+07)
        </p>
      </header>
    );
  }
});
