function TemplateProcessor(template) {
    this.template = template;
    this.fillIn = function (dictionary) {
        let propertiesWithBracketsRegex = /\{\{\w+\}\}/g;
        let propertiesRegex = /\w+/g;
        let rawProperties = this.template.match(propertiesWithBracketsRegex);
        let originalProperties = [];
        rawProperties.forEach((element) => {
            originalProperties.push(element.match(propertiesRegex)[0]);
        })
        for (let i = 0; i < originalProperties.length; i++)
            if (dictionary.hasOwnProperty(originalProperties[i]))
                this.template = this.template.replace(rawProperties[i], dictionary[originalProperties[i]]);
            else
                this.template = this.template.replace(rawProperties[i], '');
        return this.template;
    }
}