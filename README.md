# Aula 8

- Styled components
  - Continuação da aula 7
  - Como estilizar um componente que já foi estilizado com `styled-components`
  - Estilos globais com `createGlobalStyle` do `styled-components`
- Pasta `útils` para armazenar funções genéricas
  - Fizemos o exemplo para formatação monetária
- React router dom
  - Instalação da lib
  - BrowserRouter
  - Routes
  - Route
    - `element` = elemento que irá aparecer na rota que foi colocada no `to`
    - `to` = rota que o `element` irá aparecer
  - Partes fixas da aplicação (`<Header />`) e partes dinâmicas da aplicação (conteúdo)
  - Navegação entre telas
    - Link
    - useNavigation

# Aula 9

- Revisão da aplicação de página
- React router dom
  - Navegação entre telas com useNavigation
  - Voltar a tela com useNavigation
  - Passar parâmetros dinâmicos por rotas, no nosso caso foi o id
- Refatoramos a aplicação de filmes
  - Adicionamos o roteamento entre Home e Details
  - Navegação para Details, passando o id pela URL
  - Página de Details dinâmica recebendo o id da URL
