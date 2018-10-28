import * as next from 'next'
import * as express from 'express'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const expressApp = express();


app.prepare()
.then(() => {
  
  expressApp.get('*', (req, res) => {
    return handle(req, res);
  })

  expressApp.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
  })


})
