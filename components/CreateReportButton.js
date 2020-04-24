import React from 'react';

'use strict';

const e = React.createElement;

class CreateReportButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    render() {
        if (this.state.clicked) {
            return 'You clicked this.';
        }

        return e(
            'button',
            {onClick: () => this.setState({clicked: true})},
            'Create Report'
        );
    }
}

export default CreateReportButton;