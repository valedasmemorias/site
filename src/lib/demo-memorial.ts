/**
 * ⚠️ MÓDULO DE DEMONSTRAÇÃO — REMOÇÃO TRIVIAL
 *
 * Dados 100% fictícios usados pela rota `/memorial/demo` para mostrar a versão
 * "completa" do memorial (todos os recursos destravados) a prospects. NÃO toca a
 * API nem o banco.
 *
 * Para remover a feature de demo por completo, apague:
 *   1. este arquivo (`src/lib/demo-memorial.ts`)
 *   2. a pasta `src/app/memorial/demo/`
 *   3. a entrada `'demo'` em RESERVED_MEMORIAL_SLUGS
 *      (apps/agent/.../dto/set-memorial-slug.dto.ts)
 * Nada mais referencia este módulo.
 */
import type { PublicMemorialData } from './memorial-api';

export const DEMO_MEMORIAL: PublicMemorialData = {
  user: {
    name: 'João Bezerra da Silva',
    birthCity: 'Belo Horizonte, MG',
    birthDate: '1942-03-12',
    deceasedAt: '2024-11-08',
    isDeceased: true,
    epitaph: 'Pai, avô, contador de histórias e eterno torcedor.',
    coverImageUrl: null,
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
};
