import React from "react";
import "./App.css";

class Calc extends React.Component {
    state = {
        vl1: "",
        vl2: "",
        operation: "+",
        ans: ""
    };
    componentWillReceiveProps(nextProps) {
        //console.log("called");
        this.setState({ vl1: nextProps.v1 });
        this.setState({ vl2: nextProps.v2 });
    }

    perOperation = op => {
        const { vl1, vl2 } = this.state;

        switch (op) {
            case "+":
                console.log(vl1 + vl2);
                this.setState({ ans: Number(vl1) + Number(vl2) }, () => this.props.showans(this.state.ans));

                break;
            case "-":
                this.setState({ ans: Number(vl1) - Number(vl2) }, () => this.props.showans(this.state.ans));
                break;
            case "*":
                this.setState({ ans: Number(vl1) * Number(vl2) }, () => this.props.showans(this.state.ans));
                break;
            case "/":
                this.setState({ ans: Number(vl1) / Number(vl2) }, () => this.props.showans(this.state.ans));
                break;

        }
        console.log(">>", this.state.ans);
    };
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <button className="btn calcButton btn-success"
                            onClick={e => {
                                this.setState({ operation: "+" });
                                this.props.callbackFun(1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn calcButton btn-success"
                            onClick={e => {
                                this.setState({ operation: "-" });
                                this.props.callbackFun(1);
                            }}
                        >
                            -
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn calcButton btn-success"
                            onClick={e => {
                                this.setState({ operation: "*" });
                                this.props.callbackFun(1);
                            }}
                        >
                            *
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn calcButton btn-success"
                            onClick={e => {
                                this.setState({ operation: "/" });
                                this.props.callbackFun(1);
                            }}
                        >
                            /
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-dark calcButton btn-success"
                            onClick={() => {
                                this.perOperation(this.state.operation);

                                // this.props.showans(this.state.ans);

                            }}>
                            =
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-dark calcButton" onClick={this.props.clearData}>Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;