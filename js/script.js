const ModalTitulo = document.getElementById('Titulo')

const modalTexto = document.getElementById('Texto')

const descri = [
    {
        title: 'Quem sou',
        description: 'Sou Mel Letícia, estudante de TI com foco em desenvolvimento de software, dedicada e curiosa. Tenho mente aberta, gosto de aprender, resolver problemas e trabalhar em equipe. Estou em busca da minha primeira oportunidade para ingressar no mercado de tecnologia como desenvolvedora de software, aplicando meus conhecimentos e crescendo profissionalmente.'
    },
    {
        title: 'Habilidade',
        description: 'Tenho conhecimento em desenvolvimento web utilizando HTML, CSS e JavaScript, além de experiência prática com a linguagem Python em nível intermediário. Atualmente estou aprofundando meus estudos em front-end, mas também tenho interesse em áreas como back-end, UX/UI, cibersegurança e infraestrutura. Me destaco pela boa comunicação, trabalho em equipe, pensamento lógico e criatividade. Sou uma pessoa com facilidade de adaptação e motivada por desafios constantes que me permitem evoluir e aprender novas tecnologias.'
    }
    ,
    {
        title: 'Cursos',
        description: 'Tenho me dedicado à formação na área de Tecnologia da Informação, com foco em desenvolvimento de software. Iniciei meus estudos com Lógica de Programação, essencial para a construção do pensamento computacional. Em seguida, aprofundei meus conhecimentos em Fundamentos de TI com foco em front-end, onde aprendi os conceitos básicos de desenvolvimento web. Também realizei um curso introdutório de Programação em Python, que me deu base para trabalhar com lógica, estruturas de repetição, condicionais e funções. Atualmente, estou cursando Desenvolvimento Web, estudando HTML, CSS e JavaScript, além de seguir uma trilha contínua voltada ao desenvolvimento de software, buscando fortalecer minhas habilidades técnicas e práticas para atuar como desenvolvedora.'
    },
    {
        title: 'Contato',
        description: 'Resido em Jandira, São Paulo, e estou disponível para oportunidades presenciais, híbridas ou remotas. Meu contato principal é via e-mail: melleticia.assis@gmail.com e também estou disponível no WhatsApp pelo número: +55 11 97041-1977. Para acompanhar meus projetos ou entrar em contato profissionalmente, você pode acessar meu LinkedIn e GitHub: melleticiaassis.'
    }
]
function trocaDescri(param) {
    if (!descri[param]) return

    ModalTitulo.innerHTML = descri[param].title
    modalTexto.innerHTML = descri[param].description
}
