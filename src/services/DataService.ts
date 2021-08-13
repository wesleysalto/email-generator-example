import fs from "fs";
import path from "path";

export class DataService {
    private static readDataFile(): { employeeNames: string; domainName: string } {
        try {
            const data = fs.readFileSync(path.resolve("src", "source", "data.txt"), "utf-8");

            const [employeeNames, domainName] = data.toString().replace(/\r\n/g, "\n").split("\n");

            return { employeeNames, domainName };
        } catch (error) {
            throw new Error("Erro ao ler o arquivo.");
        }
    }

    static getNames(): string[] {
        const { employeeNames } = this.readDataFile();
        const [_, names] = employeeNames.split(":");

        const arrNames = names.split(",").map((name) => {
            return name.trim();
        });

        return arrNames;
    }

    static getDomain(): string {
        const { domainName } = this.readDataFile();
        const [_, domain] = domainName.split(":");

        return domain.trim();
    }
}
