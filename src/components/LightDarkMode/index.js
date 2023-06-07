import Component from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  change = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  getButtonText = () => {
    const {mode} = this.state
    return mode ? 'LightMode' : 'DarkMode'
  }

  getCon = () => {
    const {mode} = this.state
    return mode ? 'lightCon' : 'darkCon'
  }

  getHead = () => {
    const {mode} = this.state
    return mode ? 'lightHead' : 'darkHead'
  }

  render() {
    const buttonContent = this.getButtonText()
    const con = this.getCon()
    const head = this.getHead()
    return (
      <div className={con}>
        <h1 className={head}>Click To change Mode</h1>
        <button onClick={this.change} className="but">
          {buttonContent}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
