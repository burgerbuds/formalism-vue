import Vue from "vue"
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"

const requireComponent = require.context(
    // The relative path of the components folder
    "./components",
    // Whether or not to look in subfolders
    false,
    // The regular expression used to match base component filenames
    /Base[A-Z]\w+\.(vue|js)$/
)

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return
    install.installed = true

    requireComponent.keys().forEach(fileName => {
        // Get component config
        const componentConfig = requireComponent(fileName)

        // Get PascalCase name of component
        const componentName = upperFirst(
            camelCase(
                // Gets the file name regardless of folder depth
                fileName
                    .split("/")
                    .pop()
                    .replace(/\.\w+$/, "")
            )
        )

        // Register component globally
        Vue.component(
            componentName,
            // Look for the component options on `.default`, which will
            // exist if the component was exported with `export default`,
            // otherwise fall back to module's root.
            componentConfig.default || componentConfig
        )
    })
}

// Create module definition for Vue.use()
const plugin = {
    install,
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== "undefined") {
    GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}

// To allow use as module (npm/webpack/etc.) export component
export default component
