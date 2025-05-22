import datas from "../datas/datas.json"

export const commands = {
  help: [
    "Available commands:",
    "about - Who am I?",
    "projects - My projects",
    "contact - How to reach me",
    "sumfetch - Summary dashboard",
    "clear - Clear terminal",
  ],
  about: ["Hi, I'm Your Name. I'm a full-stack developer passionate about building web apps."],
  projects: [
    "1. Intellecta → https://github.com/yourusername/intellecta",
    "2. Baby Products Ecom → https://github.com/yourusername/babyProductsEcom",
    "3. Swapit Ecom → https://github.com/yourusername/swapitEcom",
  ],
  contact: [
    "Email: your.email@example.com",
    "GitHub: https://github.com/yourusername",
    "LinkedIn: https://linkedin.com/in/yourprofile",
  ],
  sumfetch: [
`
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${datas.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${datas.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${datas.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓           > S H A D I L         ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${datas.email}" target="_blank">${datas.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${datas.social.github}" target="_blank">github.com/${datas.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${datas.social.linkedin}" target="_blank">linkedin.com/in/${datas.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             PROJECTS 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               ✦ Type <span class="text-green">intellecta</span>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  ✦ Type <span class="text-green">babyProducts</span>
                                            ✦ Type <span class="text-green">swapit</span>
`
  ],
  banner: [
  `███╗   ███╗██╗   ██╗██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗███████╗██████╗     ███████╗██╗  ██╗ █████╗ ██████╗ ██╗██╗     `,
  `████╗ ████║██║   ██║██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔════╝██╔══██╗    ██╔════╝██║  ██║██╔══██╗██╔══██╗██║██║     `,
  `██╔████╔██║██║   ██║███████║███████║██╔████╔██║██╔████╔██║█████╗  ██║  ██║    ███████╗███████║███████║██║  ██║██║██║     `,
  `██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══╝  ██║  ██║    ╚════██║██╔══██║██╔══██║██║  ██║██║██║     `,
  `██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║███████╗██████╔╝    ███████║██║  ██║██║  ██║██████╔╝██║███████╗`,
  `╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚══════╝╚═════╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚══════╝`,`
  Type 'help' to see the list of available commands.
  Type 'sumfetch' to display summary.
  Type 'repo' or click here for the Github repository.
  `
  ],

}
