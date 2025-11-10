// 导入样式
import './gulu.scss'

// 导入组件
import Switch from './Switch.vue'
import Select from './Select.vue'
import Option from './Option.vue'
import Message from './Message.vue'
import Input from './Input.vue'
import Checkbox from './Checkbox.vue'
import CheckboxGroup from './CheckboxGroup.vue'
import Dialog from './Dialog.vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
import Button from './Button.vue'
import { openDialog } from './openDialog.ts'
import { showMessage } from './message.ts'
// 导出所有组件和工具函数
export {
    Switch,
    Select,
    Option,
    Message,
    showMessage,
    Input,
    Checkbox,
    CheckboxGroup,
    Dialog,
    Tab,
    Tabs,
    Button,
    openDialog
}
