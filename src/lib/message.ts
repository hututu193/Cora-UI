import { h, render } from 'vue'
import Message from './Message.vue'



type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading'
type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center'

interface MessageItem {
    wrapper: HTMLDivElement
    height: number
}

// 修复 containers 的类型定义
const containers: Partial<Record<Position, HTMLElement>> = {}
const queues: Record<Position, MessageItem[]> = {
    'top-left': [],
    'top-right': [],
    'bottom-left': [],
    'bottom-right': [],
    'top-center': [],
}

export function showMessage(
    message: string,
    type?: MessageType,
    duration?: number,
    position: Position = 'top-center'
) {
    // 创建容器
    if (!containers[position]) {
        const container = document.createElement('div')
        container.style.position = 'fixed'
        container.style.zIndex = '9999'
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.pointerEvents = 'none'
        container.style.gap = '8px'

        if (position.includes('top')) {
            container.style.top = '20px'
        } else {
            container.style.bottom = '20px'
        }

        if (position === 'top-center') {
            container.style.left = '50%'
            container.style.transform = 'translateX(-50%)'
            container.style.alignItems = 'center'
        } else if (position.includes('left')) {
            container.style.left = '20px'
        } else {
            container.style.right = '20px'
        }

        document.body.appendChild(container)
        containers[position] = container
    }

    // 确保队列存在
    if (!queues[position]) {
        queues[position] = []
    }

    const container = containers[position]
    if (!container) return () => { } // 如果容器不存在，返回空函数

    const wrapper = document.createElement('div')
    container.appendChild(wrapper)

    const vnode = h(Message, {
        message,
        type,
        duration,
        onDestroy: () => {
            render(null, wrapper)
            wrapper.remove()
            const queue = queues[position]
            if (queue) {
                const index = queue.findIndex(item => item.wrapper === wrapper)
                if (index > -1) {
                    queue.splice(index, 1)
                }
                reposition(position)
            }
        },
    })

    render(vnode, wrapper)

    // 等 DOM 渲染完
    requestAnimationFrame(() => {
        const height = wrapper.offsetHeight
        const queue = queues[position]
        if (queue) {
            queue.push({ wrapper, height })
            reposition(position)
        }
    })

    // 返回关闭函数（兼容加载提示）
    const close = () => {
        render(null, wrapper)
        wrapper.remove()
        const queue = queues[position]
        if (queue) {
            const index = queue.findIndex(item => item.wrapper === wrapper)
            if (index > -1) {
                queue.splice(index, 1)
                reposition(position)
            }
        }
    }

    return close
}

// 重新排列消息
function reposition(position: Position) {
    const queue = queues[position]
    // 添加安全检查
    if (!queue) return

    let offset = 0

    if (position.startsWith('bottom')) {
        // 从底部开始
        for (let i = queue.length - 1; i >= 0; i--) {
            const item = queue[i]!

            const { wrapper, height } = item
            wrapper.style.transform = `translateY(-${offset}px)`
            offset += height + 8
        }
    } else {
        // 从顶部开始
        queue.forEach((item) => {
            // 添加空值检查
            if (!item) return
            const { wrapper, height } = item
            wrapper.style.transform = `translateY(${offset}px)`
            offset += height + 8
        })
    }
}