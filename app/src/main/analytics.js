import firstRun from 'first-run';
import Insight from 'insight';

const pkg = require('../package');

const trackingCode = 'UA-84705099-2';

const insight = new Insight({trackingCode, pkg});

function init() {
  if (firstRun()) {
    insight.track('install');
  }

  if (firstRun({name: `${pkg.name}-${pkg.version}`})) {
    insight.track(`install/${pkg.version}`);
  }
}

function track(...paths) {
  insight.track(...paths);
}

exports.init = init;
exports.track = track;
