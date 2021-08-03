const MESES = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI', 
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
]

const PREFIXO = "DESCONTO"
const hoje = new Date();
const mes = hoje.getMonth()

const CUPOMDOMES = PREFIXO + MESES[hoje.getMonth()] + hoje.getFullYear();

function redirectComCupom(url){
    const fullURL = url + '?couponCode=' + CUPOMDOMES;
    window.open(fullURL, '_blank');
    return false;
}

const links = {
    "FSNEXT" : 'https://www.udemy.com/course/fullstack-nextjs-spring-boot-react-ts-e-jasper-reports',
    "FSANG" : 'https://www.udemy.com/course/full-stack-angular9-spring-boot',
    "FSREACT" : 'https://www.udemy.com/course/desenvolva-aplicacoes-completas-com-spring-boot-e-react-js',
    "DESIGN" : 'https://www.udemy.com/course/design-de-apis-restful-com-tdd-spring-boot-e-junit-5',
    "SPRING" : 'https://www.udemy.com/course/spring-boot-expert',
    "FSA10" : 'https://www.udemy.com/course/angular-10-spring-boot-com-deploy-no-heroku-e-github-pages',
    "REACT" : 'https://www.udemy.com/course/domine-react-com-redux-2020-bootstrap-material-ui-e-apis-rest',
}

function redirectFSNEXT(){
    return redirectComCupom(links.FSNEXT)
}

function redirectFSANG(){
    return redirectComCupom(links.FSANG)
}

function redirectFSREACT(){
    return redirectComCupom(links.FSREACT)
}

function redirectDESIGN(){
    return redirectComCupom(links.DESIGN)
}

function redirectSPRING(){
    return redirectComCupom(links.SPRING)
}

function redirectFSA10(){
    return redirectComCupom(links.FSA10)
}

function redirectREACT(){
    return redirectComCupom(links.REACT)
}
