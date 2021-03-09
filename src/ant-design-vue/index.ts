import { App } from 'Vue'
import { Layout, Button, Input,Menu } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const components = [
  Layout,
  Button,
  Input,
  Menu
]
export function setupAntd(app: App) {
  components.forEach(component => app.use(component))
}