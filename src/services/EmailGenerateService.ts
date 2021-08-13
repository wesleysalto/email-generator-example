export class EmailGenerateService {
    static generateEmails(names: string[], domain: string): { name: string; email: string }[] {
        if (!names.length) throw new Error("Não foi encontrado o nome para a geração de email.");
        if (!domain) throw new Error("Não foi encontrado o domínio para a geração de email.");

        const list: { name: string; email: string }[] = [];

        names.forEach((name) => {
            const [firstName, lastName] = name.toLowerCase().split(" ");
            let initNumberEmail = 1;
            let email = `${lastName}.${firstName.charAt(1)}.${lastName.charAt(0)}${initNumberEmail}@${domain}`;

            list.push({ name, email });
        });

        return list;
    }
}
