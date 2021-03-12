import { App } from 'Vue'
import { Form, Input, Button, Layout, Menu, Row, Col, Dropdown, Avatar, Tabs, Table } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const components = [
  Form,
  Input,
  Button,
  Layout,
  Menu,
  Row,
  Col,
  Dropdown,
  Avatar,
  Tabs,
  Table
]
export function setupAntd(app: App) {
  components.forEach(component => app.use(component))
}