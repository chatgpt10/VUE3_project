<template>
    <div class="treeContainer">
        <!-- 这里书属性接口的测试区域 -->
        <h1>Tab+树形结构</h1>
        <!-- tabs栏 -->
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">
                <!-- 树形控件 -->
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
                    <template #default="{ node, data }">
                        <span class="custom-tree-node">
                            <span>{{ data.func_name }}</span>
                        </span>
                    </template>
                </el-tree>
                <!-- 树形控件end -->
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>

        <el-button type="primary" @click="btnClick">点击</el-button>
    </div>
</template>  

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')
// tab栏点击事件
function handleClick(e: any) {
    // console.log(e);~

}

interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}
// const data: Tree[] = [
//     {
//         label: 'Level one 1',
//         children: [
//             {
//                 label: 'Level two 1-1',
//                 children: [
//                     {
//                         label: 'Level three 1-1-1',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         label: 'Level one 2',
//         children: [
//             {
//                 label: 'Level two 2-1',
//                 children: [
//                     {
//                         label: 'Level three 2-1-1',
//                     },
//                 ],
//             },
//             {
//                 label: 'Level two 2-2',
//                 children: [
//                     {
//                         label: 'Level three 2-2-1',
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         label: 'Level one 3',
//         children: [
//             {
//                 label: 'Level two 3-1',
//                 children: [
//                     {
//                         label: 'Level three 3-1-1',
//                     },
//                 ],
//             },
//             {
//                 label: 'Level two 3-2',
//                 children: [
//                     {
//                         label: 'Level three 3-2-1',
//                     },
//                 ],
//             },
//         ],
//     },
// ]

const data: any[] = [
    {
        "id": 1,
        "func_name": "应用",
        "func_pid": null,
        "addinfo": [
            {
                "id": 12,
                "func_name": "app-a",
                "func_pid": 1,
                "addinfo": []
            }
        ]
    },
    {
        "id": 2,
        "func_name": "中间件",
        "func_pid": null,
        "addinfo": [
            {
                "id": 5,
                "func_name": "mysql",
                "func_pid": 2,
                "addinfo": [
                    {
                        "id": 15,
                        "func_name": "redis-a",
                        "func_pid": 5
                    }
                ]
            },
            {
                "id": 6,
                "func_name": "redis",
                "func_pid": 2,
                "addinfo": [
                    {
                        "id": 14,
                        "func_name": "redis-a",
                        "func_pid": 6
                    }
                ]
            },
            {
                "id": 7,
                "func_name": "mongo",
                "func_pid": 2,
                "addinfo": []
            },
            {
                "id": 8,
                "func_name": "mq",
                "func_pid": 2,
                "addinfo": []
            },
            {
                "id": 9,
                "func_name": "oracle",
                "func_pid": 2,
                "addinfo": []
            },
            {
                "id": 13,
                "func_name": "app-b",
                "func_pid": 2,
                "addinfo": []
            }
        ]
    },
    {
        "id": 3,
        "func_name": "其他",
        "func_pid": null,
        "addinfo": [
            {
                "id": 10,
                "func_name": "其他-a",
                "func_pid": 3,
                "addinfo": []
            },
            {
                "id": 11,
                "func_name": "其他-b",
                "func_pid": 3,
                "addinfo": []
            }
        ]
    },
    {
        "id": 16,
        "func_name": "哈哈",
        "func_pid": null,
        "addinfo": []
    },
    {
        "id": 17,
        "func_name": "56",
        "func_pid": null,
        "addinfo": []
    },
    {
        "id": 18,
        "func_name": "业务",
        "func_pid": null,
        "addinfo": []
    },
    {
        "id": 19,
        "func_name": "喜喜",
        "func_pid": null,
        "addinfo": []
    },
    {
        "id": 20,
        "func_name": "22",
        "func_pid": null,
        "addinfo": []
    }
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

function btnClick() {
    const getData = data.find((item) => {
        item.id == 1
        return item

    })
    console.log(getData);



}
</script>

<style lang="scss" scoped>
.treeContainer {
    padding: 20px;
}
.demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>