const shelljs = require('shelljs');

shelljs.exec(
  'az storage blob upload-batch -s /var/lib/jenkins/workspace/Hypertime_jenkinsfile/hypertime-frontend/build --destination=$web --connection-string=DefaultEndpointsProtocol=https;AccountName=hypertime;AccountKey=/hKquqMB4jLoma30s9HdVXJhiCIf++3loLZQe2nz0RPjPXiMs7xd8B96vFGsvr8lPVpMMVyp7rbBXBQ9+R+XYA==;EndpointSuffix=core.windows.net',
);
