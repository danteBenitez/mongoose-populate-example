// @ts-check
import { validationResult } from "express-validator";

/** 
 * @param {import('express-validator').ValidationChain[]} schemas
 * @returns {import("express").RequestHandler}
 */
export function validate(...schemas) {
  return async (req, res, next) => {
    for (const schema of schemas) {
        if (Array.isArray(schema)) {
            for (const validation of schema) {
                await validation.run(req);
            }
        } else {
            await schema.run(req);
        }
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors
            });
        }
    }
    next();
  };
}
