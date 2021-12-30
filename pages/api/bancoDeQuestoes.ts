import QuestaoModel from '../../model/questao'
import RespostaModel from '../../model/resposta'

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, 'Qual bicho transmite a doença de Chagas?', [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Pulga'),
    RespostaModel.certa('Barbeiro')
  ]),
  new QuestaoModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada('Caju'),
      RespostaModel.errada('Côco'),
      RespostaModel.errada('Chuchu'),
      RespostaModel.certa('Abóbora')
    ]
  ),
  new QuestaoModel(203, 'Qual é o coletivo de cães?', [
    RespostaModel.errada('Manada'),
    RespostaModel.errada('Alcateia'),
    RespostaModel.errada('Rebanho'),
    RespostaModel.certa('Matilha')
  ]),
  new QuestaoModel(
    204,
    'Qual é o triângulo que tem todos os lados diferentes?',
    [
      RespostaModel.errada('Equilátero'),
      RespostaModel.errada('Isósceles'),
      RespostaModel.errada('Trapézio'),
      RespostaModel.certa('Escaleno')
    ]
  ),
  new QuestaoModel(245, 'Quem compôs o Hino da Independência?', [
    RespostaModel.errada('Manuel Bandeira'),
    RespostaModel.errada('Carlos Gomes'),
    RespostaModel.errada('Castro Alves'),
    RespostaModel.certa('Dom Pedro I')
  ]),
  new QuestaoModel(246, 'Que nome se dá à purificação por meio da água?', [
    RespostaModel.errada('Abolição'),
    RespostaModel.errada('Abrupção'),
    RespostaModel.errada('Abnegação'),
    RespostaModel.certa('Ablução')
  ]),
  new QuestaoModel(
    247,
    'Seguindo a sequência do baralho, qual carta vem depois do dez?',
    [
      RespostaModel.errada('Valete'),
      RespostaModel.errada('Nove'),
      RespostaModel.errada('Às'),
      RespostaModel.certa('Reis')
    ]
  ),
  new QuestaoModel(248, 'A compensação por perda é chamada de...', [
    RespostaModel.errada('Indébito'),
    RespostaModel.errada('Indexação'),
    RespostaModel.errada('Déficit'),
    RespostaModel.certa('Indenização')
  ]),
  new QuestaoModel(249, 'Qual o antônimo de "malograr"?', [
    RespostaModel.errada('Desprezar'),
    RespostaModel.errada('Perder'),
    RespostaModel.errada('Fracassar'),
    RespostaModel.certa('Conseguir')
  ]),
  new QuestaoModel(
    250,
    'Que personagem do folclore brasileiro tem uma perna só?',
    [
      RespostaModel.errada('Curupira'),
      RespostaModel.errada('Boitatá'),
      RespostaModel.errada('Cuca'),
      RespostaModel.certa('Saci-pererê')
    ]
  )
]

export default questoes
