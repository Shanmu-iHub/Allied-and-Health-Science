import { serve } from '@hono/node-server'
import app from './dist/index.js'

const port = Number(process.env.PORT) || 3000

console.log(`🚀 SNS Allied Health Science server starting on port ${port}`)

serve({
    fetch: app.fetch,
    port,
    hostname: '0.0.0.0'
})

console.log(`✅ Server is running at http://0.0.0.0:${port}`)
