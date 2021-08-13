import http from "http";

import { DataService } from "./services/DataService";
import { EmailGenerateService } from "./services/EmailGenerateService";

const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    try {
        const names = DataService.getNames();
        const domain = DataService.getDomain();

        const listEmployee = EmailGenerateService.generateEmails(names, domain);

        let html = "";

        listEmployee.forEach((employee) => {
            html = `${html}<div>${employee.name} <a href="${employee.email}">${employee.email}</a></div>`;
        });

        res.write(html);
        res.end();
    } catch (error) {
        res.end(error);
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
