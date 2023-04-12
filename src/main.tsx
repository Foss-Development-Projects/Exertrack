import { render } from 'preact'
import { App } from './app'
import './assets/scss/main.scss'

render(<App />, document.getElementById('app') as HTMLElement)
