import { App } from 'Vue'
import { Layout, Button, Input } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const components = [
  Layout,
  Button,
  Input
]
export function setupAntd(app: App) {
  components.forEach(component => app.use(component))
}