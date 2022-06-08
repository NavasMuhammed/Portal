import '../styles/globals.scss'
import '../styles/test.scss'
import '../styles/topbar.scss'
import '../styles/leftMenu.scss'
import LeftMenu from './components/leftMenu/LeftMenu'
import Topbar from './components/Topbar/Topbar.js'


import Test from './Test'

function MyApp() {
  return (
    <div className="tab">
      {/* <Test /> */}
      <Topbar />
      <div className="mainBody">
        <LeftMenu />
      </div>
    </div>
  )
}

export default MyApp
