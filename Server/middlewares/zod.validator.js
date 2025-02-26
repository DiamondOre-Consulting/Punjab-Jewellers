import { z } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
      const validatedData = schema.parse(req.body); 
      req.validatedData = validatedData;
      next(); 
  } catch (error) {
      if (error instanceof z.ZodError) {
          return res.status(400).json({
              success: false,
              errors: error.errors.map(err => ({
                  field: err.path[0],
                  message: err.message
              }))
          });
      }
      next(error); 
  }
};

export default validate;
