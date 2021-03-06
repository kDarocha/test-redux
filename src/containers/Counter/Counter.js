import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {
    render () {
        return (
            <div>
              <CounterOutput value={this.props.counter} />
              <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
              <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
              <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
              <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
              <hr />
              <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store result</button>
              <ul>
                {
                  this.props.results.map(result => {
                    return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                  })
                }
              </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ counter, results }) => {
  return {
    counter: counter.counter,
    results: results.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: (value) => dispatch(actionCreators.add(value)),
    onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
