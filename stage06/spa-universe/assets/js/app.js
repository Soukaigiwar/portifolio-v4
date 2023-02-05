import { Router } from './router.js'

const router = new Router()

router.add('/', '/stage06/spa-universe/pages/home.html')
router.add('/o-universo', '/stage06/spa-universe/pages/o-universo.html')
router.add('/exploracao', '/stage06/spa-universe/pages/exploracao.html')
router.add(404, '/stage06/spa-universe/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
