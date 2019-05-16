"use strict";

const Frameworks = {
    sam: "sam",
    serverless: "serverless",
    getYamlFile: function (framework) {
        switch (framework.toLowerCase()) {
            case this.serverless:
                return "serverless.yml";
            default:
                return "template.yaml";
        }
    }
};


module.exports = Frameworks;