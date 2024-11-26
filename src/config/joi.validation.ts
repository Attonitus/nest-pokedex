import * as Joi from 'joi'

export const JoiValidation = Joi.object({
    MONGODB: Joi.required(),
    DEFAULT_LIMIT: Joi.number().default(15),
    PORT: Joi.number().default(3005),
});