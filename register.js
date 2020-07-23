const core = require('@actions/core');
const github = require('@actions/github');

try {
  
  const workflowFile = core.getInput('workflow-file');
  const apiUser = core.getInput('api-user');
  const apiToken = core.getInput('api-token');
  var result = workflowFile + ", "+apiUser+", "+apiToken;
  core.setOutput("result", result);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
