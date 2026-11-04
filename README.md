# Aurora · Homepage em React

Tela de acesso e apresentação de uma experiência financeira fictícia. Implementação do desafio **Criando a Homepage do Dio Bank com React**, da Formação TypeScript Fullstack Developer da DIO.

O projeto usa React, TypeScript e Chakra UI, com identidade Aurora, temas escuro e claro, ilustração vetorial de cartão e layout responsivo. O acesso é uma simulação no navegador; não existe autenticação real, movimentação bancária nem integração com o banco de dados do outro projeto Aurora.

## Executar

Requer Node.js 24 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço mostrado no terminal, normalmente `http://127.0.0.1:5174/`.

```sh
npm test
npm run build
```

## Experimentar

Use **Preencher acesso de demonstração** e depois **Entrar na Aurora**. A conta fictícia é `demo@aurora.app`, com a senha pública `Aurora2026!`. Ao enviar, aparece o alerta de boas-vindas exigido pelo desafio e uma confirmação na própria interface. **Voltar ao acesso** limpa os campos. O botão no cabeçalho alterna os temas; o ícone ao lado da senha alterna sua visibilidade. Entradas diferentes da conta de demonstração exibem uma orientação.

Não use credenciais reais. Os valores dos campos permanecem apenas no estado em memória do React: não são enviados, registrados no console ou persistidos. A página importa fontes do Google Fonts; se elas não carregarem, utiliza as fontes de sistema configuradas.

## Requisitos do desafio

| Requisito | Implementação |
| --- | --- |
| Cabeçalho com título | `src/components/Header.tsx` |
| Botão com a propriedade onClick | `src/components/ActionButton.tsx` |
| Formulário encapsulado em Card | `src/components/Card.tsx`; a página chama somente `<Card />` |
| Alerta de boas-vindas ao clicar | `src/services/welcome.ts`, chamado pelo envio válido do formulário |
| Teste unitário da função | `src/services/welcome.test.ts` |
| Componentes Chakra UI | Provider, Box, Input e Button |

O código usa Vite e Chakra UI 3. A referência do curso utiliza Create React App e Chakra UI 2; a estrutura foi reimplementada, preservando os objetivos do desafio sem reproduzir a configuração antiga. Referência para as diferenças do Chakra: [migração oficial](https://chakra-ui.com/docs/get-started/migration).

## Validação

Seis testes automatizados aprovados: função de boas-vindas, encaminhamento de onClick, alternância de temas, visibilidade da senha, recusa de dados incorretos e fluxo completo de demonstração com retorno ao formulário. Compilação TypeScript e build de produção aprovados. Instalação auditada pelo npm sem vulnerabilidades na data da preparação, 26/10/2026.

Revisão visual realizada no desktop nos dois temas. Em viewport de 390 × 844, a medição DOM não apresentou rolagem horizontal. A captura móvel e a finalização manual do alerta ficaram limitadas por falhas da conexão de controle do navegador; não são apresentadas como verificações visuais completas. Os testes de interação automatizados em jsdom passaram, mas não substituem testes em dispositivos reais.

## Créditos e escopo

Base educacional: [Nathally Souza](https://github.com/nathyts), [DIO — desafio02-ts](https://github.com/digitalinnovationone/desafio02-ts), referência consultada no commit `22e0889c32837f301c7c41e20a67d23a81ea4409`. A organização por componentes, a função de boas-vindas e o teste atendem ao enunciado desse material. Identidade visual e implementação Aurora preparadas para este portfólio. Ícones: Lucide. Fontes: DM Sans e Manrope, com alternativas de sistema.

Esta entrega é independente do projeto de operações bancárias `aurora-bank`. Não representa uma instituição financeira nem um produto pronto para operar com dados e dinheiro reais. Publicado em https://github.com/EVI-DEV1/dio-aurora-home-react em 04/11/2026. Entrega confirmada na DIO em 04/11/2026, com o estado PROJETO ENTREGUE.
