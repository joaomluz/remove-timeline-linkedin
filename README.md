# LinkedIn Sem Feed 🧘

Uma extensão para o Google Chrome que **esconde a timeline do LinkedIn** para você usar a rede sem se perder em rolagem infinita.

Você continua com tudo o que importa: **notificações, mensagens, vagas, perfil, rede de contatos** e até a caixa para criar uma publicação. Só os posts do feed somem.

---

## O que ela faz

- Esconde os posts da página inicial do LinkedIn (`linkedin.com/feed`).
- Mantém a caixa "Começar publicação" para você poder postar.
- Mostra a mensagem *"Feed oculto 🧘"* no lugar dos posts.
- Pode ser ligada e desligada com um clique, sem recarregar a página.
- Não coleta nenhum dado e não envia nada para a internet.

## Requisitos

- Google Chrome (ou outro navegador baseado em Chromium, como Edge, Brave ou Opera).

## Instalação

A extensão ainda não está na Chrome Web Store, então a instalação é manual. Leva cerca de um minuto.

1. **Baixe o projeto.** Nesta página do GitHub, clique em **Code → Download ZIP**.
2. **Descompacte** o arquivo ZIP em uma pasta de sua preferência. Não apague essa pasta depois, porque o Chrome precisa dela.
3. No Chrome, digite `chrome://extensions` na barra de endereços e pressione Enter.
4. Ative o **Modo do desenvolvedor** (interruptor no canto superior direito).
5. Clique em **Carregar sem compactação**.
6. Selecione a pasta que você descompactou (aquela que contém o arquivo `manifest.json`).
7. Pronto! A extensão aparece na lista.

> 💡 **Dica:** clique no ícone de quebra-cabeça 🧩 na barra do Chrome e no alfinete 📌 ao lado de "LinkedIn Sem Feed" para deixar o ícone sempre visível.

## Como usar

1. Acesse [linkedin.com/feed](https://www.linkedin.com/feed/). A timeline já estará escondida.
2. Para ligar ou desligar, **clique no ícone da extensão** e marque ou desmarque **"Esconder a timeline"**.
3. A mudança vale na hora, sem precisar recarregar a página.

| Quero... | Faça isto |
|---|---|
| Esconder o feed | Marque "Esconder a timeline" |
| Ver o feed novamente | Desmarque "Esconder a timeline" |

A sua escolha fica salva e é sincronizada entre os computadores em que você usa o mesmo login do Chrome.

## Perguntas frequentes

**A extensão esconde mensagens, notificações ou vagas?**
Não. Ela só atua nos posts da página `/feed`. O resto do LinkedIn funciona normalmente.

**Ainda vejo alguns posts. O que fazer?**
O LinkedIn muda o visual do site com frequência. Tente recarregar a página (`Ctrl + R`). Se continuar, abra uma *issue* neste repositório.

**Ela é segura? Que permissões usa?**
Usa só duas:
- `storage`: para lembrar se você deixou o feed ligado ou desligado.
- Acesso a `linkedin.com`: para poder esconder os posts naquele site.

Ela não lê suas mensagens, não coleta dados e não faz conexões externas. O código é aberto e tem poucas linhas, então você pode conferir tudo.

**Como desinstalar?**
Vá em `chrome://extensions`, encontre "LinkedIn Sem Feed" e clique em **Remover**.

**Como atualizar para uma nova versão?**
Baixe o ZIP novamente, substitua os arquivos da pasta e, em `chrome://extensions`, clique no botão de recarregar (🔄) da extensão.

## Para desenvolvedores

Estrutura do projeto:

| Arquivo | Função |
|---|---|
| `manifest.json` | Configuração da extensão (Manifest V3) |
| `content.js` | Detecta e esconde os posts na página do LinkedIn |
| `hide.css` | Regras de estilo que ocultam o feed |
| `popup.html` / `popup.js` | Janelinha com o botão de ligar/desligar |

Para testar alterações, edite os arquivos e clique em recarregar (🔄) na extensão em `chrome://extensions`.

## Aviso

Este é um projeto independente e **não tem vínculo com o LinkedIn nem com a Microsoft**. "LinkedIn" é marca registrada de seus respectivos donos.
