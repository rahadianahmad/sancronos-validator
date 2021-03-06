const sixtyEx = require("./regexs/sixty");
const hoursEx = require("./regexs/hour");
const dayMonthEx = require("./regexs/dayM");
const monthEx = require("./regexs/month");
const dayWeekEx = require("./regexs/dayW");
const yearEx = require("./regexs/year");

const isoDateRE = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+[Z]?)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\d)/;

const clasicEx = sixtyEx+" "+hoursEx+" "+dayMonthEx+" "+monthEx+" "+dayWeekEx;
const extend6_1Ex = sixtyEx+" "+clasicEx;
const extend6_2Ex = clasicEx+" "+yearEx;
const extendEx = sixtyEx+" "+clasicEx+" "+yearEx;

module.exports = {
  clasicTabRE: new RegExp("^"+clasicEx),
  extendedTabRE: new RegExp("^"+extendEx),
  extendedTab_2_RE: new RegExp("^(("+extend6_2Ex+")|("+extend6_1Ex+"))"),
  isoDateRE
};
