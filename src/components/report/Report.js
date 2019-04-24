import React from 'react';

const Report = props => {
  return (
    <div>
      <a
        className="ratingButton waves-effect waves-light btn modal-trigger"
        href="#report"
      >
        Report
      </a>

      <div id="report" className="modal">
        <div className="modal-content">
          <div className="row">
            <form onSubmit={props.onSubmit} className="col s12" id="reportForm">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    value={props.reported_reason}
                    onChange={props.onChange}
                    name="reported_reason"
                    id="textarea1"
                    className="materialize-textarea"
                  />
                  <label htmlFor="textarea1">Report Article</label>
                </div>
              </div>
              <button
                className="reportSubmit btn waves-effect waves-light modal-close"
                type="submit"
                form="reportForm"
                value="Report"
              >
                Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
