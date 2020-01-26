import React from 'react';
import './App.css';
import Calc from './operations';

class App extends React.Component {
  state = {
    val: "",
    val1: "",
    val2: "",
    flag: 0
  };
  showAnswer = answer => {
    this.setState({
      val: answer,
      val1: answer,
      val2: "",
      flag: 1
    });
  };
  changeFlag = data => {
    console.log(this.state.val1, this.state.val2);
    this.setState({
      val: "",
      flag: data
    });
  };

  plusOrMinus = () => {
    console.log("Called");
    if (!this.state.flag) {
      if (Number(this.state.val) < 0) {
        this.setState({
          val: Math.abs(Number(this.state.val)),
          val1: Math.abs(Number(this.state.val1))
        })
      } else {
        this.setState({
          val: "-" + this.state.val,
          val1: "-" + this.state.val1,
        })
      }
    } else {
      if (Number(this.state.val) < 0) {
        this.setState({
          val: Math.abs(Number(this.state.val)),
          val2: Math.abs(Number(this.state.val2))
        })
      }
      else {
        this.setState({
          val: "-" + this.state.val,
          val2: "-" + this.state.val2,
        })
      }
    }
  }

  clearState = () => {
    this.setState({
      val: '',
      val1: '',
      val2: '',
      flag: 0
    })
  }
  inputValue = event => {
    if (this.state.flag === 0) {
      this.setState({
        val: this.state.val + event.target.value,
        val1: this.state.val1 + event.target.value
      });
    } else {
      this.setState({
        val: this.state.val + event.target.value,
        val2: this.state.val2 + event.target.value
      });
    }
  };


  render() {
    return (

      <div>
        <div className="row">
          <div className="col">
            <input type="text" value={this.state.val} className="form-control" disabled />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-light calcButton" onClick={(e) => this.plusOrMinus(e)}>-/+	</button></div>
          <div className="col">
            <button value="1" className="btn btn-light calcButton" onClick={e => this.inputValue(e)}>
              1
        </button></div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="2"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              2
        </button></div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="3"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              3
        </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn calcButton btn-light"
              value="4"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              4
        </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="5"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              5
        </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="6"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              6
        </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="7"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              7
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn calcButton btn-light"
              value="8"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              8
             </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="9"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              9
            </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="0"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              0
            </button>
          </div>
          <div className="col">
            <button className="btn calcButton btn-light"
              value="00"
              onClick={e => {
                this.inputValue(e);
              }}
            >
              00
            </button>
          </div>
        </div>
        <Calc
          v1={this.state.val1}
          v2={this.state.val2}
          callbackFun={this.changeFlag}
          showans={this.showAnswer}
          clearData={this.clearState}
        />
      </div>
    );
  }
}

export default App;
