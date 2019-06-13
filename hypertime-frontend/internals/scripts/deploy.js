const shelljs = require('shelljs');

shelljs.exec(
  'az storage blob upload-batch -s /var/lib/jenkins/workspace/Hypertime_jenkinsfile/hypertime-frontend/build --destination=$web --account-name=hypertime',
);
