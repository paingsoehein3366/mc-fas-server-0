const { z } = require('zod');

module.exports = z.object({
      PORT: z.coerce.number().optional(),
      DATABASE: z.string({
            required_error: 'DATABAE is missing'
      }),
})