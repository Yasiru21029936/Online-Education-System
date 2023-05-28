import React from "react";
import { ReportBuilder } from "react-report-builder";
import { PeekdataApi } from "peekdata-datagateway-api-sdk";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-table/react-table.css";
import "react-report-builder/lib/main.css";

const peekdataApi = new PeekdataApi({
  baseUrl: "https://demo.peekdata.io:8443/datagateway/v1",
  timeout: 60000,
});

function Report() {
  return (
    <div>Report</div>
  )
}

export default Report