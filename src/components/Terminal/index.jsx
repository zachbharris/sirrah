import React from 'react';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: props.isRunning,
    };
  }

  render() {
    const { isRunning } = this.state;

    return (
      <section className="terminal">
        <header className="terminal-header">
          <div className="terminal-controls">
            <span />
            <span />
            <span />
          </div>
        </header>
        <div className="terminal-body">
          <p>potato</p>
        </div>
      </section>
    );
  }
}

export default Terminal;
