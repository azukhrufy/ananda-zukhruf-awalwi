import {Service} from './Service';

export class GithubService extends Service{
    constructor(){
        super('https://api.github.com')
    }

    getUserData(user: string) {
        return this.get(`/users/${user}`, this.response).catch((exception) => this.catch(exception));
    }
}