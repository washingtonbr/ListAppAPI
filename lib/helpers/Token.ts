import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import Config from '../Config';
import { IRequest } from '../interfaces/RequestInterface';

export class Token {
  public verify (request: IRequest, response: express.Response, next: express.NextFunction) {
    const token = request.get('x-access-token');

    if (!token) {
      return response.status(403).send({ auth: false, message: 'No token provided.' });
    }

    jwt.verify(token, Config.secretKey, function(err, decoded) {
      if (err) {
        return response.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
      }

      request.params._user = decoded.id;
      next();
    });
  }
}
