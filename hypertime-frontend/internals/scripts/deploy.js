const shelljs = require('shelljs');

const workspace = `${process.env.WORKSPACE}/hypertime-frontend/build`;
const connectionString =
  'DefaultEndpointsProtocol=https;AccountName=hypertime;AccountKey=/hKquqMB4jLoma30s9HdVXJhiCIf++3loLZQe2nz0RPjPXiMs7xd8B96vFGsvr8lPVpMMVyp7rbBXBQ9+R+XYA==;EndpointSuffix=core.windows.net';
// shelljs.exec(
//   'echo az storage blob upload-batch -s /var/lib/jenkins/workspace/Hypertime_jenkinsfile/hypertime-frontend/build --destination=$web --connection-string=hDefaultEndpointsProtocol=https;AccountName=hypertime;AccountKey=/hKquqMB4jLoma30s9HdVXJhiCIf++3loLZQe2nz0RPjPXiMs7xd8B96vFGsvr8lPVpMMVyp7rbBXBQ9+R+XYA==;EndpointSuffix=core.windows.net',
// );
shelljs.exec(
  `echo az storage blob upload-batch -s ${workspace} --destination=$web --connection-string=${connectionString}`,
);
