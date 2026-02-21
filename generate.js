// Static Site Generator for SNS Allied Health Science
// Imports the Hono app, calls every route, and saves HTML files to public_html/
import { mkdir, writeFile, cp } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Import the built app
import app from './dist/index.js'

const OUTPUT_DIR = '.'

// All routes to pre-render
const ROUTES = [
    { path: '/', file: 'index.html' },
    { path: '/courses/cardiac-technology', file: 'courses/cardiac-technology/index.html' },
    { path: '/courses/physician-assistant', file: 'courses/physician-assistant/index.html' },
    { path: '/courses/radiography', file: 'courses/radiography/index.html' },
    { path: '/courses/operation-theatre', file: 'courses/operation-theatre/index.html' },
    { path: '/facilities', file: 'facilities/index.html' },
    { path: '/innovation', file: 'innovation/index.html' },
    { path: '/about', file: 'about/index.html' },
    { path: '/contact', file: 'contact/index.html' },
    { path: '/mandatory-disclosure', file: 'mandatory-disclosure/index.html' },
    { path: '/admissions', file: 'admissions/index.html' },
    { path: '/gallery', file: 'gallery/index.html' },
    { path: '/sports-clubs', file: 'sports-clubs/index.html' },
    { path: '/brochure', file: 'brochure/index.html' },
    { path: '/transport', file: 'transport/index.html' },
    { path: '/events', file: 'events/index.html' },
    { path: '/success-stories', file: 'success-stories/index.html' },
    { path: '/stanford-pathway', file: 'stanford-pathway/index.html' },
]

async function generate() {
    console.log('🏗️  Starting static site generation...\n')

    // Create output directory
    await mkdir(OUTPUT_DIR, { recursive: true })

    let success = 0
    let failed = 0

    // Render each route
    for (const route of ROUTES) {
        try {
            const req = new Request(`http://localhost${route.path}`)
            const res = await app.fetch(req)
            const html = await res.text()

            const outPath = path.join(OUTPUT_DIR, route.file)
            const outDir = path.dirname(outPath)

            await mkdir(outDir, { recursive: true })
            await writeFile(outPath, html, 'utf-8')

            console.log(`  ✅ ${route.path} → ${route.file}`)
            success++
        } catch (err) {
            console.error(`  ❌ ${route.path} → FAILED: ${err.message}`)
            failed++
        }
    }

    // Copy public assets (images, etc.) if they exist
    if (existsSync('./public')) {
        try {
            await cp('./public', OUTPUT_DIR, { recursive: true })
            console.log('\n  📁 Copied /public assets')
        } catch (err) {
            console.warn('  ⚠️  Could not copy public assets:', err.message)
        }
    }

    // Create a .htaccess for clean URLs (no .html extension needed)
    const htaccess = `Options -Indexes
ErrorDocument 404 /404.html

# Handle clean URLs - try file, then directory, then .html extension
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # If the request is for a real file or directory, serve it
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Try adding /index.html
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^ %{REQUEST_URI}/index.html [L]

  # Try adding .html
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^ %{REQUEST_URI}.html [L]
</IfModule>
`
    await writeFile(path.join(OUTPUT_DIR, '.htaccess'), htaccess, 'utf-8')
    console.log('  📝 Created .htaccess for clean URLs\n')

    console.log(`\n✨ Done! ${success} pages generated, ${failed} failed.`)
    console.log(`📂 Output: ${path.resolve(OUTPUT_DIR)}\n`)

    if (failed > 0) {
        process.exit(1)
    }
}

generate().catch(err => {
    console.error('Fatal error:', err)
    process.exit(1)
})
