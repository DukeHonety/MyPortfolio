export interface projectProp {
    title: string;
    year: string;
    role: string;
    range: string;
    stacks: string[];
    thumbnail: string;
    subTitle: string;
    content: string;
    images: string[];
}
export const myProjects: projectProp[] = [
    {
      title: 'Cairn Accounting',
      year: '2022',
      role: 'SENIOR ERP ENGINEER',
      range: '12.2021 ~ 06.2022',
      stacks: ['React.Js', 'TailwindCSS', 'Nest.Js', 'ERP', 'PostgresSQL', 'AWS', 'GitHub(CICD)'],
      thumbnail: 'assets/images/projects/bc1.png',
      subTitle: '',
      content: `-Developed and maintained Accounting Company WebSite-Developed and build ERP Logistics`,
      images: [
        'assets/images/projects/bc1.png',
        'assets/images/projects/bc2.png',
      ]
    },
    {
      title: 'GovSpend',
      year: '2021',
      role: 'SENIOR FRONTEND & BLOCKCHAIN DEVELOPER',
      range: '05.2020 ~ 10.2021',
      stacks: ['Solana', 'Rust(Anchor)', 'Solidity', 'React.Js', 'Solana/Web3.Js', 'PostgreSQL', 'AWS', 'GitHub(CICD)'],
      thumbnail: 'assets/images/projects/df1.png',
      subTitle: '',
      content: `- Developed and maintained frontend part of two websites using React.js and Vue.js.
      - Developed and worked on various products based on Blockchain (Ethereum & Terra & Avalanche)`,
      images: [
        'assets/images/projects/df1.png',
        'assets/images/projects/df2.png'
      ]
    },
    {
      title: 'Incent One',
      year: '2020',
      role: 'SENIOR FRONTEND DEVELOPER',
      range: '11.2018 ~ 04.2020',
      stacks: ['Angular 9,13', 'Bootstrap 4', 'Material UI', 'Next.Js', 'TailwindCSS', 'Jest', 'Nest.Js', 'PostgresSQL', 'AWS', 'GitHub'],
      thumbnail: 'assets/images/projects/uh1.png',
      subTitle: '',
      content: `Developing and maintaining frontend parts of the two projects written in React.js and Vue.js`,
      images: [
        'assets/images/projects/uh1.png',
        'assets/images/projects/uh2.png'
      ]
    },
    {
      title: 'Sycous Ltd',
      year: '2018',
      role: 'SENIOR FULL STACK DEVELOPER',
      range: '10.2016 ~ 08.2018',
      stacks: ['Django(Python)', 'React.Js', 'ElasticSearch', 'Material UI', 'NestJS', 'PostgreSQL', 'AWS'],
      thumbnail: 'assets/images/projects/vs1.png',
      subTitle: '',
      content: `Developing and maintaining an e-commerce website written in Django and React.js`,
      images: [
        'assets/images/projects/vs1.png',
        'assets/images/projects/vs2.png',
      ]
    },
]