(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash/upperFirst'), require('lodash/camelCase')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash/upperFirst', 'lodash/camelCase'], factory) :
    (factory((global['formalism-vue'] = {}),global.vue,global.upperFirst,global.camelCase));
}(this, (function (exports,vue,upperFirst,camelCase) { 'use strict';

    vue = vue && vue.hasOwnProperty('default') ? vue['default'] : vue;
    upperFirst = upperFirst && upperFirst.hasOwnProperty('default') ? upperFirst['default'] : upperFirst;
    camelCase = camelCase && camelCase.hasOwnProperty('default') ? camelCase['default'] : camelCase;

    var requireComponent = require.context(
        // The relative path of the components folder
        "./components",
        // Whether or not to look in subfolders
        false,
        // The regular expression used to match base component filenames
        /Base[A-Z]\w+\.(vue|js)$/
    );

    // Declare install function executed by Vue.use()
    function install(Vue) {
        if (install.installed) { return }
        install.installed = true;

        requireComponent.keys().forEach(function (fileName) {
            // Get component config
            var componentConfig = requireComponent(fileName);

            // Get PascalCase name of component
            var componentName = upperFirst(
                camelCase(
                    // Gets the file name regardless of folder depth
                    fileName
                        .split("/")
                        .pop()
                        .replace(/\.\w+$/, "")
                )
            );

            // Register component globally
            Vue.component(
                componentName,
                // Look for the component options on `.default`, which will
                // exist if the component was exported with `export default`,
                // otherwise fall back to module's root.
                componentConfig.default || componentConfig
            );
        });
    }

    // Create module definition for Vue.use()
    var plugin = {
        install: install,
    };

    // Auto-install when vue is found (eg. in browser via <script> tag)
    var GlobalVue = null;
    if (typeof window !== "undefined") {
        GlobalVue = window.Vue;
    } else if (typeof global !== "undefined") {
        GlobalVue = global.Vue;
    }
    if (GlobalVue) {
        GlobalVue.use(plugin);
    }

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
