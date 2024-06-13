# GraphQL: Criando APIs Profissionais e Flexíveis

## Sobre

Este repositório tem como objetivo registrar os conceitos básicos de GraphQL que aprendi durante os módulos iniciais do curso [GraphQL: Criando APIs Profissionais e Flexíveis](https://www.udemy.com/course/graphql-criando-apis-profissionais-e-flexiveis). Nele, adaptei os conhecimentos para TypeScript, explorando tópicos como schemas, queries e mutations.

## O que é GraphQL?

GraphQL é uma linguagem de consulta para APIs e um tempo de execução para executar essas consultas com seus dados existentes. Desenvolvido internamente pelo Facebook em 2012 e lançado publicamente em 2015, GraphQL oferece uma maneira mais eficiente, poderosa e flexível de trabalhar com APIs em comparação aos métodos tradicionais como REST.

## Características do GraphQL

1. **Consulta Declarativa**: Permite que os clientes solicitem exatamente os dados de que precisam, nada mais.
2. **Endpoint Único**: Todas as operações (consultas, mutações e assinaturas) são enviadas para um único endpoint.
3. **Tipos Fortes**: O esquema de GraphQL é fortemente tipado, o que facilita a validação e documentação automática.
4. **Resolução Hierárquica**: As consultas são resolvidas em uma estrutura hierárquica que corresponde ao gráfico de dados.
5. **Agregação de Dados**: GraphQL permite obter dados de várias fontes em uma única chamada.
6. **Documentação Automática**: Com o esquema fortemente tipado, a documentação é auto-gerada e sempre atualizada.

## Vantagens do GraphQL

1. **Eficiência de Dados**: Evita over-fetching e under-fetching, permitindo aos clientes pedir exatamente os dados de que precisam.
2. **Flexibilidade e Agilidade**: Os clientes podem evoluir rapidamente sem depender de mudanças no servidor.
3. **Documentação Automática**: A documentação é gerada automaticamente a partir do esquema e está sempre sincronizada.
4. **Ferramentas de Desenvolvimento**: Ferramentas como GraphiQL facilitam o desenvolvimento e depuração de consultas.
5. **Evolução de API**: Facilita a evolução das APIs sem quebrar a compatibilidade com versões anteriores.

## Desvantagens do GraphQL

1. **Complexidade Inicial**: A curva de aprendizado pode ser mais acentuada devido à necessidade de entender o esquema e a linguagem de consultas.
2. **Overhead no Servidor**: Pode introduzir overhead no servidor, especialmente em consultas complexas ou mal formuladas.
3. **Cacheamento**: Implementar cache é mais complexo em GraphQL do que em REST, pois as consultas podem ser altamente dinâmicas.
4. **Ferramentas de Monitoramento**: Algumas ferramentas de monitoramento e logging podem precisar de adaptações para funcionar com GraphQL.
5. **Segurança**: É necessário gerenciar cuidadosamente o acesso aos dados para evitar exposições indevidas, especialmente em consultas profundamente aninhadas.

## Diferenças entre GraphQL e REST

1. **Estrutura de Consulta**:
   - **GraphQL**: Clientes definem a estrutura da resposta através de uma única consulta.
   - **REST**: Estrutura da resposta é definida pelo servidor e distribuída em vários endpoints.
2. **Over-fetching e Under-fetching**:
   - **GraphQL**: Evita over-fetching e under-fetching permitindo consultas específicas.
   - **REST**: Pode resultar em over-fetching (dados extras) ou under-fetching (necessidade de múltiplas chamadas).
3. **Endpoint**:
   - **GraphQL**: Um único endpoint para todas as operações.
   - **REST**: Múltiplos endpoints para diferentes recursos.
4. **Tipos de Operações**:
   - **GraphQL**: Suporta consultas (query), mutações (mutation) e assinaturas (subscription).
   - **REST**: Usa métodos HTTP como GET, POST, PUT, DELETE.
5. **Evolução da API**:
   - **GraphQL**: Facilita a evolução da API sem quebrar clientes existentes.
   - **REST**: Alterações na API podem exigir versões diferentes.
6. **Documentação**:
   - **GraphQL**: Documentação auto-gerada e sempre atualizada com o esquema.
   - **REST**: Documentação manual e pode ficar desatualizada.
7. **Cacheamento**:
   - **GraphQL**: Mais complexo devido à natureza dinâmica das consultas.
   - **REST**: Mais simples, pois as respostas estão associadas a endpoints específicos.
