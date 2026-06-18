/**
 * ⚠️ MÓDULO DE DEMONSTRAÇÃO — REMOÇÃO TRIVIAL
 *
 * Dados 100% fictícios usados pelas rotas `/memorial/demo` (em memória) e
 * `/memorial/demo/em-vida` (em vida) para mostrar a versão "completa" do
 * memorial a prospects. NÃO toca a API nem o banco.
 *
 * Imagens são de serviços públicos (picsum.photos, randomuser.me) só para o demo.
 *
 * Para remover a feature de demo por completo, apague:
 *   1. este arquivo (`src/lib/demo-memorial.ts`)
 *   2. a pasta `src/app/memorial/demo/`
 *   3. a entrada `'demo'` em RESERVED_MEMORIAL_SLUGS
 *      (apps/agent/.../dto/set-memorial-slug.dto.ts)
 * Nada mais referencia este módulo.
 */
import type { PublicMemorialData } from './memorial-api';

/** Memorial de pessoa falecida — datas em anos (1942 – 2024). */
export const DEMO_MEMORIAL_DECEASED: PublicMemorialData = {
  user: {
    name: 'João Bezerra da Silva',
    birthCity: 'Belo Horizonte, MG',
    birthDate: '1942-03-12',
    deceasedAt: '2024-11-08',
    isDeceased: true,
    epitaph: 'Pai, avô, contador de histórias e eterno torcedor.',
    coverImageUrl: 'https://picsum.photos/seed/joao-memorial-cover/1200/500',
  },
  plan: { tier: 'paid', hasTimeline: true },
  totalPublicMemories: 4,
  memories: [
    {
      id: 'demo-1',
      title: 'O fusca azul',
      category: 'familia',
      visibility: 'public',
      isSealed: false,
      content:
        'Comprei meu primeiro carro, um fusca azul 1971, com o primeiro salário da fábrica. ' +
        'Levei a Dona Cida pra namorar na beira da represa naquele mesmo dia. Aquele carro ' +
        'viu nascer nossos três filhos.',
      createdAt: '2024-02-10T12:00:00.000Z',
    },
    {
      id: 'demo-2',
      title: 'A padaria da esquina',
      category: 'trabalho',
      visibility: 'public',
      isSealed: false,
      content:
        'Trabalhei 30 anos na padaria do seu Antônio. Aprendi que pão bom é pão feito com ' +
        'paciência, de madrugada, quando a cidade ainda dorme.',
      createdAt: '2024-03-05T12:00:00.000Z',
    },
    {
      id: 'demo-3',
      title: 'O título de 1976',
      category: 'conquistas',
      visibility: 'public',
      isSealed: false,
      content:
        'Estava no Mineirão no dia do título. Abracei estranhos como se fossem irmãos. ' +
        'Voltei pra casa rouco e feliz, carregando o Pedrinho nos ombros.',
      createdAt: '2024-04-18T12:00:00.000Z',
    },
    {
      id: 'demo-4',
      title: 'Conselho para os netos',
      category: 'valores',
      visibility: 'public',
      isSealed: false,
      content:
        'Trabalhem com honestidade, amem com coragem e nunca tenham vergonha de chorar. ' +
        'A vida é curta demais pra guardar mágoa.',
      createdAt: '2024-06-22T12:00:00.000Z',
    },
  ],
  chapters: [
    {
      title: 'Infância em Minas',
      period: '1942–1958',
      summary:
        'Cresceu no interior de Minas, o mais velho de cinco irmãos. Desde cedo aprendeu o ' +
        'valor do trabalho e o gosto por uma boa história ao pé do fogão a lenha.',
      category: 'infancia',
    },
    {
      title: 'O casamento com Cida',
      period: '1968',
      summary:
        'Conheceu Maria Aparecida num baile de São João. Casaram-se um ano depois e ' +
        'construíram juntos uma família de três filhos e sete netos.',
      category: 'familia',
    },
    {
      title: 'Os anos na padaria',
      period: '1965–1995',
      summary:
        'Três décadas dedicadas ao ofício de padeiro, tornando-se uma figura querida do ' +
        'bairro — sempre com um pão quente e um conselho na ponta da língua.',
      category: 'trabalho',
    },
    {
      title: 'Aposentadoria e legado',
      period: '1995–2024',
      summary:
        'Dedicou os últimos anos aos netos, ao futebol e ao jardim. Partiu deixando ' +
        'histórias que a família guarda com carinho.',
      category: 'legado',
    },
  ],
  tributes: [
    {
      id: 'trib-d-1',
      authorName: 'Marina Silva',
      relationship: 'Filha',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      type: 'phrase',
      message:
        'Pai, sua risada ainda ecoa em cada almoço de domingo. Obrigada por cada história. ' +
        'Saudade eterna.',
      mediaUrl: null,
      createdAt: '2024-11-12T12:00:00.000Z',
    },
    {
      id: 'trib-d-2',
      authorName: 'Antônio Pereira',
      relationship: 'Amigo de infância',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
      type: 'photo',
      message: 'Nossa pescaria de 1979, na represa. Que dia bom aquele, João.',
      mediaUrl: 'https://picsum.photos/seed/joao-pescaria/800/600',
      createdAt: '2024-11-15T12:00:00.000Z',
    },
    {
      id: 'trib-d-3',
      authorName: 'Pedro Silva',
      relationship: 'Neto',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
      type: 'video',
      message: 'Vovô cantando no meu aniversário de 10 anos. Guardo esse vídeo pra sempre.',
      mediaUrl: 'https://picsum.photos/seed/joao-video/800/450',
      createdAt: '2024-11-20T12:00:00.000Z',
    },
  ],
};

/** Memorial de pessoa viva — "Nascido em <data por extenso>", sem ano de falecimento. */
export const DEMO_MEMORIAL_LIVING: PublicMemorialData = {
  user: {
    name: 'Lúcia Andrade',
    birthCity: 'Salvador, BA',
    birthDate: '1958-09-03',
    deceasedAt: null,
    isDeceased: false,
    epitaph: 'Professora aposentada, avó coruja e contadora de causos baianos.',
    coverImageUrl: 'https://picsum.photos/seed/lucia-vida-cover/1200/500',
  },
  plan: { tier: 'paid', hasTimeline: true },
  totalPublicMemories: 3,
  memories: [
    {
      id: 'demo-v-1',
      title: 'Minha primeira sala de aula',
      category: 'trabalho',
      visibility: 'public',
      isSealed: false,
      content:
        'Em 1979 entrei pela primeira vez numa sala de aula como professora. Trinta e dois ' +
        'pares de olhos me encarando. Foi paixão à primeira vista — segui por 38 anos.',
      createdAt: '2025-01-15T12:00:00.000Z',
    },
    {
      id: 'demo-v-2',
      title: 'O Carnaval de 1985',
      category: 'amor',
      visibility: 'public',
      isSealed: false,
      content:
        'Conheci o Roberto atrás do trio elétrico. Ele pisou no meu pé três vezes dançando, ' +
        'mas tinha o sorriso mais bonito da Bahia. Casamos no ano seguinte.',
      createdAt: '2025-02-20T12:00:00.000Z',
    },
    {
      id: 'demo-v-3',
      title: 'A receita da minha avó',
      category: 'familia',
      visibility: 'public',
      isSealed: false,
      content:
        'Guardo até hoje o caderno de receitas da minha avó. O bolo de aipim dela é o ' +
        'cheiro da minha infância — agora ensino para os meus netos.',
      createdAt: '2025-03-10T12:00:00.000Z',
    },
  ],
  chapters: [
    {
      title: 'Raízes na Bahia',
      period: '1958–1976',
      summary:
        'Cresceu numa casa cheia de música e comida em Salvador, a caçula de uma família ' +
        'de professores. Cedo decidiu que também ensinaria.',
      category: 'infancia',
    },
    {
      title: 'A vida na escola',
      period: '1979–2017',
      summary:
        'Quase quatro décadas alfabetizando crianças. Tornou-se diretora e marcou gerações ' +
        'de alunos que ainda a visitam.',
      category: 'trabalho',
    },
    {
      title: 'Avó e contadora de histórias',
      period: '2010–hoje',
      summary:
        'Hoje dedica seus dias aos cinco netos, ao bordado e a registrar os causos da ' +
        'família para que nada se perca.',
      category: 'legado',
    },
  ],
  tributes: [
    {
      id: 'trib-v-1',
      authorName: 'Roberto Andrade',
      relationship: 'Marido',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
      type: 'phrase',
      message: '40 anos depois, ainda é o sorriso mais bonito da Bahia. Te amo, Lú.',
      mediaUrl: null,
      createdAt: '2025-03-15T12:00:00.000Z',
    },
    {
      id: 'trib-v-2',
      authorName: 'Camila Andrade',
      relationship: 'Neta',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      type: 'photo',
      message: 'Vó ensinando a gente a fazer o bolo de aipim no Natal passado. ❤️',
      mediaUrl: 'https://picsum.photos/seed/lucia-bolo/800/600',
      createdAt: '2025-03-18T12:00:00.000Z',
    },
  ],
};
