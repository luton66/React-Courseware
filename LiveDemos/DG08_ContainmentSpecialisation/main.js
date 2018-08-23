
import React from 'react';
import ReactDOM from 'react-dom';

const ContainmentComponent = (props) => (
    <div className={`conStyle conStyle-${props.color}`}>
        {/* value is determined from what is defined between ContainmentComponent
        from any component that uses it */}
        {props.children}
    </div>
);

const ParentComponent = () => (
    <React.Fragment>
        <ContainmentComponent color="blue">
            <h1 className="title">Welcome</h1>
            <p className="message">Thank you for coming!</p>
        </ContainmentComponent>
        <SplitterComponent left={<LeftSplit />} right={<RightSplit />} />
    </React.Fragment>
);

const LeftSplit = () => (
    <div className="LeftSplit">I am the left pane</div>
);

const RightSplit = () => (
    <div className="RightSplit">I am a right pane</div>
);

const SplitterComponent = (props) => (
    <div className="SplitterComponent">
        <div className="SplitterComponent-left">
            {props.left}
        </div>
        <div className="SplitterComponent-right">
            {props.right}
        </div>
    </div>
)

ReactDOM.render(
    <ParentComponent />,
    document.querySelector('#app')
);