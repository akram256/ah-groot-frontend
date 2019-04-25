import React, { Component } from 'react';
import Report from '../../components/report/Report';
import { articleReporting } from '../../actions/report/reportingActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.js';

export class ReportingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reported_reason: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    if (this.state.reported_reason === '') {
      M.toast({ html: 'Please enter a report reason', classes: 'green' });
      return false;
    }
    e.preventDefault();
    const slug = this.props.slug;
    const reportData = {
      reported_reason: this.state.reported_reason,
    };
    this.props.articleReporting(reportData, slug);
  };

  render() {
    return (
      <div>
        <Report
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          reported_reason={this.state.reported_reason}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { articleReporting }
)(ReportingContainer);
