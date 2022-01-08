import * as core from '@actions/core'
import dotenv from 'dotenv'

class configLoader {
    constructor(){
        let configPath = new URL('', import.meta.url).pathname.replace('lib/config.js', '.env')
        dotenv.config({path: configPath}).parsed
        
        this.org = this.getConfig('organization')
        this.action = this.getConfig('action')
        this.repo_names = this.getConfig('repos').split(',')
        this.secret_names = this.getConfig('secrets').split(',')    
        this.pat = this.getConfig('pat')  
        core.setSecret(this.getConfig('pat'))  
    }

    getConfig(key){
        return key in process.env ? process.env[key] : core.getInput(key)
    }
    

}
const config = new configLoader()
export {config}