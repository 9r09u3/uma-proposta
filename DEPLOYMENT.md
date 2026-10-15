# Publicação na Vercel

O projeto utiliza TanStack Start com o preset `vercel` do Nitro. A compilação gera o formato Vercel Build Output em `.vercel/output`. A configuração gerenciada do Lovable continua preservada.

1. Envie o repositório para seu provedor Git e importe-o na Vercel.
2. Selecione o framework **Other**, caso a detecção automática não configure o Nitro.
3. Use **bun install --frozen-lockfile** para instalação e **bun run build** para compilação.
4. Não configure `dist` como diretório de saída: o preset Nitro produz `.vercel/output`, que a Vercel reconhece como Build Output API.
5. Use Node.js 22 e publique.

A página não exige contas, variáveis secretas ou serviços de armazenamento. A publicação efetiva na Vercel não foi executada neste ambiente; depende da importação do repositório na sua conta.

A imagem de abertura é uma ilustração gerada, não um registro de uma manifestação específica. A referência à IN nº 148/2026 aponta para seu texto oficial.