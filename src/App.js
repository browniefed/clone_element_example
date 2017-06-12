import React, { Component } from 'react';

const AddPunctuation = ({ text, punctuation, ...props}) => <span {...props}>{text}{punctuation}</span>

const Emphasize = ({ times, children }) => {
  return React.cloneElement(children, {
    style: {
      fontWeight: "bold"
    },
    punctuation: children.props.punctuation.repeat(times)
  })
}

class App extends Component {
  render() {
    return (
      <div>
        <Emphasize times={10}>
          <AddPunctuation
            text="Hello World"
            punctuation="!"
          />
        </Emphasize>
      </div>
    );
  }
}

export default App;
