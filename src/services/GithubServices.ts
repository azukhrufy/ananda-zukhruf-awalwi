import {Service} from './Service';

export class GithubService extends Service{
    constructor(){
        super('https://api.github.com')
    }

    getUserData() {
        return this.get('/users/azukhrufy', this.response).catch((exception) => this.catch(exception));
    }
}