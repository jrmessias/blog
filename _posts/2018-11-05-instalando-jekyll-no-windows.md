---
layout: post
title: "Instalando Jekyll no Windows"
date: 2018-11-05 12:00:00
author: jrmessias
categories: [ jekyll, tutorial ]
tags: [jekyll, ruby, gems, bundler, windows, site]
image: assets/images/03keyboard.jpg
image_credit: Photo by freestocks.org on Unsplash
last: false
hidden: false
---

# Jekyl, mas afinal, o que é o Jekyll?

Jekyll é, simplesmente, um gerador de site estático. É necessário somente um diretório que contenha os arquivos de texto nos formatos que rodam no conversor (como Markdown) ou Liquid, e então são gerados arquivos estáticos prontos para publicação no seu servidor web favorito. Jekyll é o motor por trás do GitHub Pages, assim você pode hospedar seu projeto, página, blog ou site Jekyll gratuitamente no GitHub. (Fonte: [Jekyll](https://jekyllrb.com/docs/home/) - Tradução própria)

#### Instalação do Ruby - [Download](http://rubyinstaller.org/downloads/) :arrow_down:
Para este tutorial, estou utilizando a versão 2.3.1 do instalador (rubyinstaller-2.3.1-x64.exe).

**Detalhes:**

Quando solicitar o caminho da instalação:
- Utilizar `C:\Ruby` e marcar as opções
- Marcar a opção `Add Ruby to your PATH`

Via linha de comando, digite `ruby -v`, aparecerá a seguinte mensagem `ruby 2.3.1p112 (2016-04-26 revision 54768) [x64-mingw32]`.

Até aqui, Ruby.

#### Instalação do RubyDevKit - [Download](http://rubyinstaller.org/downloads/) :arrow_down:
Para este tutorial, estou utilizando a versão 4.7.2-20130224-1432 do pacote (DevKit-mingw64-64-4.7.2-20130224-1432-sfx).

Siga os seguintes passos:
- Extraia este pacote para o diretório `C:\RubyDevKit\`.
- Via linha de comando entre no diretório criado `cd C:\RubyDevKit`.
- Agora vamos detectar a instalação do Ruby para a o próxima configuração, digite `ruby dk.rb init`, aaparecerá a seguinte mensagem `[INFO] found RubyInstaller v2.3.1 at C:/Ruby`.
- Então vamos vincular a instalação do DevKit com o Ruby, digite `ruby dk.rb install`, aparecerá a seguinte mensagem `[INFO] Installing 'C:/Ruby/lib/ruby/site_ruby/devkit.rb'`.

Até aqui, Ruby e Ruby DevKit.

#### Instalação do Bundler
Abra o seu programa de linha de comando e digite `gem install bundler`.

\* É um gerenciador de dependências, pacotes gem, para Ruby.

Até aqui, Ruby, Ruby DevKit e Bundler.

#### Instalação do Jekyll
Abra o seu programa de linha de comando e digite `gem install jekyll`.

Até aqui, Ruby, Ruby DevKit, Bundler e Jekyll.

### Para rodar o projeto Jekyll
As dependências deste projeto estão no arquivo Gemfile, para baixá-las, na linha de comando, digite `bundler install`, estas dependencias também estão no arquivo `_config.yml` que é o arquivo de configuração do jekyll.

Para poder visualizar o site, utilize o comando `jekyll serve`. Na linha `Server address` será exibida a url local do site, algo como `Server address: http://127.0.0.1:4000/`.

Para saber mais comandos e informações sobre o jekyll, acesse o site oficial https://jekyllrb.com/.

Até aqui, seu site Jekyll funcionando. :smile:
 
**Agora você pode colaborar com outros blogs e ter o seu próprio, gratuitamente** :smile:

### Sites com templates Jekyll
- [Themeforest](https://themeforest.net/category/static-site-generators/jekyll)
- [Jekyll Themes](http://jekyllthemes.org/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [Jekyll Themes](http://themes.jekyllrc.org/)
- [Jekyll Tips](http://jekyll.tips/templates/)
- [GitHub](https://github.com/jekyll/jekyll/wiki/themes)

<p><strong>Valeu! :thumbsup:</strong></p>