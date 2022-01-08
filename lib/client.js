import * as core from '@actions/core'
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling"
import { config } from 'codespace-keys/config'
class Client {

    constructor(){
         let OctoThrottle = Octokit.plugin(throttling)
         this.client = new OctoThrottle({
            auth: config.pat,
            throttle: {
            onRateLimit: (retryAfter, options, octokit) => {
                octokit.log.warn(`Rate Limited on ${options.method} ${options.url}`);
                if (options.request.retryCount === 0) {
                octokit.log.info(`Retrying after ${retryAfter} seconds!`);
                return true;
                }
            },
            onAbuseLimit: (retryAfter, options, octokit) => {octokit.log.warn(`Abuse: ${options.method} ${options.url}`);}
            },
        });
    }
  
  
  /**
   * Translate a list of repository names to IDs
   * @param {string[]} repo_names Names of the repositoris to update
   * @returns {number[]} array of repository IDs to update
   */
   async repoNamesToIds(repo_names){
    let repos = []
    for(let repo of repo_names){
       repos.push(await this.client 
        .request(`GET /repos/${repo}`)
        .then((resp) => resp.id))
    }
    core.info(`Retrieved repo ids from supplied names `.concat(repos.join(',')))
    return repos
  }
  
  /**
   * Retrieve a list of repository IDs for the specificed 
   * organization with codespace configurations
   * 
   * @param {string} organization 
   * @returns {number[]} repository IDs with codespaces configured
   */
  async getCodespaceRepos(organization){
    let repos = await this.client
      .request("GET /search/code", {q: `org:${organization} filename:devcontainer.json`})
      .then((resp) => resp.data.items.map((i) => i.repository))
    let names = repos.map((i) => i.full_name)
    let ids = repos.map((i) => i.id)
    core.info(`Retrieved codespace repositories for ${organization}`.concat(names.join(',')))
    return ids
  }
  
  /**
   * Retrieve the names of all configured codespace secrets for this user
   * 
   * @returns {string[]} List of codespace secret names
   */
  async getSecretNames (){
    let secrets = await this.client
      .request("GET /user/codespaces/secrets")
      .then((resp) => resp.data.secrets.map((i) => i.name))
    core.info(`Retrieved codespace keys `.concat(secrets.join(',')))
    return secrets
  }
  
  
  /**
   * Set permissions for this codespace secret, preserving existing permissions
   * @param {string} secret_name Secret name to update
   * @param {number[]} update_list List of existing IDs
   * @returns 
   */
  async updatePermissions(secret_name, update_list){
    let existing = await this.client
      .request(`GET /user/codespaces/secrets/${secret_name}/repositories`)
      .then((resp) => resp.data.repositories.map((r) => r.id))
    core.info(`Retrieved existing permissions for ${secret_name} `.concat(existing.join(',')))
    return await this.setPermissions(secret_name,  new Set([...existing.concat(update_list)]))
  }
  
  /**
   * Set permissions for this codespace secret
   * @param {string} secret_name name of secret to update
   * @param {number[]} update_list list of repository ids to grant access
   * @returns 
   */
    async setPermissions(secret_name, update_list){
      update_list = [...new Set(update_list)] // Make sure we don't have any duplicates
      let response = await this.client
        .request(`PUT /user/codespaces/secrets/${secret_name}/repositories`, {"selected_repository_ids" : update_list})
      core.info(response.status === 204 ? `Successfully set permissions for ${secret_name}` : `Failed to set permissions for  ${secret_name}`)  
      return response
    }    
}

const client = new Client()
export {client}