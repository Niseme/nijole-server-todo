class Head {
    constructor(title) {
        this.title = title;
    }

    render() {
        let headTitle = 'TODO';
        if (this.title) {
            headTitle = `${this.title} | TODO`;
        }
        return `<head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${headTitle}</title>
                <link rel="stylesheet" href="/css/main.css">
                <link rel="stylesheet" href="/css/footer.css">
                <link rel="stylesheet" href="/css/header.css">
            </head>`;
    }
}
export { Head };
