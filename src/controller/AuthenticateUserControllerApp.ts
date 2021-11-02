import {Request,Response} from 'express';
import {AuthenticateUserServiceApp} from '../services/AuthenticateUserServiceApp';

class AuthenticateUserControllerApp {
    async handle(request: Request,response: Response){
        const {code} = request.body;

        const service = new AuthenticateUserServiceApp();
        try {
            const result = await service.execute(code);
            return response.json(result);
            
        } catch (error) {
            return response.json(error.message)
        }
    }
}

export{AuthenticateUserControllerApp};