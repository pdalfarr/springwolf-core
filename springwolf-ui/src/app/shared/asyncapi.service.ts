import { AsyncApi } from './models/asyncapi.model';
import { Server } from './models/server.model';

export class AsyncApiService {

    public getAsyncApi(): AsyncApi {
        return {
            info: {
                title: 'Example AsyncAPI Document',
                version: '1.0.0',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            servers: new Map<String, Server>([
                ["kafka", { url: "kafka:9092", protocol: "kafka" }]
            ])
        }
    }

}