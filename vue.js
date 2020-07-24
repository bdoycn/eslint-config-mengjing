module.exports = {
  extends: [
    'plugin:vue/essential',
    './javascript.js',
  ],
  rules: {
    // 必须遵守
    // 在 JSX 中禁止出现未使用过的变量(使 no-unused-vars 检测到作为组件出现的变量, 如果不使用 jsx 可以取消该规则)
    'vue/jsx-uses-vars': 'error',
    // 只允许使用同步的计算属性(因为异步的计算属性可能导致不可预期的异常)
    'vue/no-async-in-computed-properties': 'error',
    // 禁止在同一 VM 实例中出现相同的键名
    'vue/no-dupe-keys': 'error',
    // 禁止在同一元素上出现相同属性
    'vue/no-duplicate-attributes': ['error', {
      'allowCoexistClass': true, // 允许普通的 class 和 v-bind:class 共存
      'allowCoexistStyle': true, // 允许普通的 style 和 v-bind:style 共存
    }],
    // 禁止错误的模版语法
    'vue/no-parsing-error': 'error',
    // 禁止覆盖保留值(如 $el $on 等)
    'vue/no-reserved-keys': 'error',
    // 组件的 data 属性必须是函数
    'vue/no-shared-component-data': 'error',
    // 计算属性必须是纯函数(无副作用的)
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止在 <template> 元素上设置 key 属性(需要放在真实的元素上)
    'vue/no-template-key': 'error',
    // 禁止在 <textarea> 元素中使用 Mustache 语法(双大括号)
    'vue/no-textarea-mustache': 'error',
    // 禁止注册在模版中未使用的组件
    'vue/no-unused-components': 'error',
    // 禁止出现没有使用过的变量(如 v-for 中生成的变量)
    'vue/no-unused-vars': 'error',
    // 禁止在同一元素上使用 v-for 和 v-if
    'vue/no-use-v-if-with-v-for': 'error',
    // 必须在 <component> 组件上使用动态绑定的 is 属性
    'vue/require-component-is': 'error',
    // prop 验证的类型必须是构造函数(null 和 undefined 除外)
    'vue/require-prop-type-constructor': 'error',
    // render 函数必须始终有返回值
    'vue/require-render-return': 'error',
    // 必须在使用 v-for 的组件上使用动态绑定的 key
    'vue/require-v-for-key': 'error',
    // 对象/数组类型的 prop 的默认值必须由函数返回
    'vue/require-valid-default-prop': 'error',
    // 计算属性必须始终有返回值
    'vue/return-in-computed-property': 'error',
    // 在同一元素上存在多个同种事件绑定的时候 必须在没有修饰符的事件上使用 exact 修饰符
    'vue/use-v-on-exact': 'error',
    // 使用正确的模版根(1. 必须存在根元素 2. 根元素不能是文本 3. 只能存在一个根元素 4. 根元素不能为 tempalte 或 slot)
    'vue/valid-template-root': 'error',
    // 正确的使用 v-bind(1. 指令没有属性值 2. 指令具有无效的修饰符)
    'vue/valid-v-bind': 'error',
    // 正确的使用 v-cloak(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3.指令不可以设置属性值)
    'vue/valid-v-cloak': 'error',
    // 正确的使用 v-else-if(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值 4. 上一个兄弟元素必须有 v-if 或 v-else-if 指令 5. 不能在同一元素上使用 v-if 或 v-else 指令)
    'vue/valid-v-else-if': 'error',
    // 正确的使用 v-else(类似 v-else-if)
    'vue/valid-v-else': 'error',
    // 正确的使用 v-if(类似 v-else-if 但是不需要上一个兄弟元素中有特定的指令)
    'vue/valid-v-if': 'error',
    // 正确的使用 v-for(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值 4. 在自定义组件上必须存在 key 5. v-bind:key 的值必须是 v-for 指令定义的值)
    'vue/valid-v-for': 'error',
    // 正确的使用 v-html(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-html': 'error',
    // 正确的使用 v-model(1. 指令不可以设置参数 2. 指令不可以设置不支持的修饰符 3. 指令必须有属性值 4. 指令的值必须是作为LHS有效的值 5. 该指令不能用于 input 类型为 file 的元素上 6. 该指令的值不能为迭代变量)
    'vue/valid-v-model': 'error',
    // 正确的使用 v-on(1. 必须存在事件名称 2. 指令不可以设置不支持的修饰符 3. 指令必须有属性值)
    'vue/valid-v-on': 'error',
    // 正确的使用 v-once(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令不可以设置属性值)
    'vue/valid-v-once': 'error',
    // 正确的使用 v-pre(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令不可以设置属性值)
    'vue/valid-v-pre': 'error',
    // 正确的使用 v-show(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-show': 'error',
    // 正确的使用 v-text(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-text': 'error',

    // 强烈推荐
    // 自定义组件上的属性名称必须使用连字符格式
    'vue/attribute-hyphenation': ['error', 'always'],
    // 单行标签的左括号前不需要换行
    // 多行标签的右括号之前需要换行
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never', // 单行元素不需要换行
      'multiline': 'always', // 多行元素需要换行
    }],
    // 开始标签和结束标签的左括号前不需要空格
    // 自闭标签的左括号(包括 /)前需要空格
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never', // 开始标签不需要空格
      'endTag': 'never', // 结束标签不需要空格
      'selfClosingTag': 'always', // 自闭标签需要空格
    }],
    // 标签必须闭合
    'vue/html-end-tags': 'error',
    // 模版中使用两个空格的缩进
    'vue/html-indent': ['error', 2, {
      'attribute': 1, // 属性缩进 1 倍
      'baseIndent': 1, // 顶级语句缩进 1 倍
      'closeBracket': 0, // 右括号缩进 0 倍
      'alignAttributesVertically': true, // 在有多行属性的情况下 所有属性应和第一个属性垂直对齐
    }],
    // 标签属性的引号必须是双引号
    'vue/html-quotes': ['error', 'double'],
    // 没有内容的元素 必须使用自动闭合
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always', // 空元素需要使用自动闭合
        'normal': 'always', // 正常的 html 元素需要使用自动闭合
        'component': 'always', // 组件需要使用自动闭合
      },
      'svg': 'always', // svg 元素需要使用自动闭合
      'math': 'always', // MathML 元素需要使用自动闭合
    }],
    // 单行元素上每行最多存在 3 个属性
    // 多行元素上每行最多存在 1 个属性
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3, // 单行元素上最多存在 3 个属性
      'multiline': {
        'max': 1, // 多行元素上最多存在 1 个属性
        'allowFirstLine': false, // 不允许属性与标签在同一行
      },
    }],
    // 多行元素的内容前后需要换行(pre/textarea/行内元素 可以不用换行)
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true, // 在元素没有内容的时候禁止报错
      // 'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS], // pre/textarea/行内元素 可以不用换行
      'allowEmptyLines': false, // 不允许内容周围有空行
    }],
    // 统一 Mustache 插值中表达式与大括号的间距为 1 个空格
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // 组件的 name 属性值必须是大驼峰格式
    'vue/name-property-casing': ['error', 'PascalCase'],
    // 单行标签中的属性间距应该只有一个空格
    'vue/no-multi-spaces': 'error',
    // 标签属性等号周围不应该有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 禁止在模版中声明在父作用域中已声明的变量
    'vue/no-template-shadow': 'error',
    // prop 的名称必须是小驼峰格式
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 如果 prop 的 required = false 则必须存在默认值
    'vue/require-default-prop': 'error',
    // 每个 prop 都必须使用类型定义
    'vue/require-prop-types': 'error',
    // 单行元素的内容前后不需要换行
    'vue/singleline-html-element-content-newline': ['off', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
    }],
    // 必须使用简写形式的 v-bind
    'vue/v-bind-style': ['error', 'shorthand'],
    // 必须使用简写形式的 v-on
    'vue/v-on-style': ['error', 'shorthand'],
    // 检测 v-slot 是否有效
    'vue/valid-v-slot': 'error',
    // 制定 v-slot 的样式
    'vue/v-slot-style': 'error',

    // 推荐
    // 标签中使用固定的属性声明顺序
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    }],
    // 允许使用 v-html(但需要注意 xss 攻击)
    'vue/no-v-html': 'off',
    // 组件中使用固定的属性声明顺序
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'setup',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // 禁止在模版中使用 this
    'vue/this-in-template': ['error', 'never'],

    // 适用于 template 的核心规则
    // 在数组括号内使用统一的间距
    'vue/array-bracket-spacing': ['error', 'never', {
      'singleValue': false,
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],
    // 箭头函数的前后必须有一个空格
    'vue/arrow-spacing': ['error', {
      'before': true,
      'after': true,
    }],
    // 语句块的前后必须有空格
    'vue/block-spacing': ['error', 'always'],
    // 使用统一的大括号风格 brace-style
    'vue/brace-style': ['error', '1tbs'],
    // 变量名强制使用驼峰写法
    'vue/camelcase': ['error', {
      'properties': 'always',
    }],
    // 必须在对象/导入/导出/函数参数的尾部使用逗号
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    // 在成员表达式中必须在点号之前换行
    'vue/dot-location': ['error', 'property'],
    // 必须使用全等和全不等
    'vue/eqeqeq': ['error', 'always', {
      'null': 'ignore', // 不对 null 应用此规则 可以用于判断 null 和 undefined
    }],
    // 制定对象字面量中键和值之间的间距(键和冒号之前没有空格 冒号和值之间有一个空格)
    'vue/key-spacing': ['error', {
      'beforeColon': false, // 键和冒号之间没有空格
      'afterColon': true, // 冒号和值之间至少有一个空格
      'mode': 'strict', // 强制冒号前后只有一个空格
    }],
    // 关键字前后必须有一个空格
    'vue/keyword-spacing': ['error', {
      'before': true, // 关键字前至少有一个空格
      'after': true, // 关键字后至少有一个空格
    }],
    // 禁止出现空解构
    'vue/no-empty-pattern': 'error',
    // 花括号内的间距必须一致
    'vue/object-curly-spacing': ['error', 'always'],
    // 制定 script 的缩进为两个空格
    'vue/script-indent': ['error', 2, {
      'baseIndent': 0, // 顶级语句缩进 0
      'switchCase': 1, // case/default 缩进 0
    }],
    // 运算符周围需要有空格
    'vue/space-infix-ops': ['error', {
      'int32Hint': false,
    }],
    // 制定一元表达式前后空格
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false,
    }],


    // 其他
    // 模版中的元素名称必须使用 kebab-case 格式
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 组件名必须与文件名相同
    'vue/match-component-file-name': ['error', {
      'extensions': ['vue', 'jsx'],
      'shouldMatchCase': false,
    }],
    // 禁止使用 scope 属性
    'vue/no-deprecated-scope-attribute': 'error',
    // 必须直接导出组件
    'vue/require-direct-export': 'error',
    // 规定模版中函数的调用方式(没有参数的情况下 不加小括号)
    'vue/v-on-function-call': ['error', 'never'],
  },
};
