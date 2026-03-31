/**
 * legacy-stub.js
 *
 * Webpack alias target for packages used ONLY by the old Vite src/ files
 * (react-router-dom, react-i18next, i18next).
 *
 * These stubs allow the legacy pages to compile without installing those
 * packages. The old pages are not served by the new Next.js App Router
 * and exist only as inactive Pages Router routes.
 *
 * DO NOT import this in new App Router code.
 */
'use strict'

function Passthrough(props) {
  return (props && props.children) || null
}

function noopT(key) {
  return key
}

const noopI18n = { t: noopT, language: 'pt', changeLanguage: function () {} }

// react-router-dom
exports.Link = Passthrough
exports.NavLink = Passthrough
exports.Routes = Passthrough
exports.Route = Passthrough
exports.BrowserRouter = Passthrough
exports.Router = Passthrough
exports.Outlet = function () { return null }
exports.useLocation = function () {
  return { pathname: '/', search: '', hash: '', state: null, key: 'default' }
}
exports.useNavigate = function () {
  return function () {}
}
exports.useParams = function () {
  return {}
}
exports.Navigate = function () {
  return null
}

// react-i18next
exports.useTranslation = function () {
  return [noopT, noopI18n]
}
exports.Trans = Passthrough
exports.initReactI18next = { type: '3rdParty', init: function () {} }
exports.withTranslation = function () {
  return function (Component) {
    return Component
  }
}

// i18next
exports.use = function () {
  return exports
}
exports.init = function () {
  return Promise.resolve()
}
exports.t = noopT
exports.language = 'pt'
exports.changeLanguage = function () {
  return Promise.resolve()
}

// ES module interop
exports.__esModule = true
exports.default = exports
