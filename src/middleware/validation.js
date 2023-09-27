import { validationResult } from 'express-validator';

export function validate(...schemas) {
    return async (req, res, next) => {
        for (const schema of schemas) {
            const errors = validationResult(schema);
    
            if (!errors.isEmpty()) {
                return res.status(400,{
                    errors 
                });
            }
        }
        next();
    }
}