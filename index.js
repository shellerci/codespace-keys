import {config} from 'codespace-keys/config'
import {client} from 'codespace-keys/client'
/**
 * Run the job
 */
async function run() {
  
  // Assemble repo list
  let  repos = []
  if (config.repo_names.includes('all')){repos = await client.getCodespaceRepos(config.org)} 
  else {repos = await client.repoNamesToIds(config.repo_names)}

  // Assenmle secrets list
  let secrets = []
  if (config.secret_names.includes('all')){secrets = await client.getSecretNames()}
  else {secrets = config.secret_names}

  // Iterate over secrets list and update
  for(let secret of secrets){
    if (config.action == 'update'){client.updatePermissions(secret, repos)}
    else {client.setPermissions(secret)}
  }
}

run();
