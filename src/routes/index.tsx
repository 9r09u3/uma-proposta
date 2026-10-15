import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import mobilizacao from "@/assets/mobilizacao.jpg";
import { ProposalProfiles } from "@/components/proposal-profiles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uma proposta de luta contra a 6x1" },
      { name: "description", content: "Nos serviços públicos federais. Uma proposta de mobilização coletiva de usuários, servidores e trabalhadores terceirizados contra a escala 6x1." },
      { property: "og:title", content: "Uma proposta de luta contra a 6x1" },
      { property: "og:description", content: "Nos serviços públicos federais. Diferentes vínculos, uma luta coletiva por tempo e dignidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* <div className="editorial masthead" aria-hidden="true"><span className="eyebrow">Trabalho, tempo e dignidade</span><span className="eyebrow">Uma luta coletiva</span></div> */}
      <div className="editorial-top">
        <section className="narrative-section section-layout" id="inicio" aria-labelledby="proposta-heading">
          <div className="section-label"><span className="section-number">00</span><span className="eyebrow">Como estamos</span></div>
          <div className="section-content">
            <h2 id="proposta-heading">A PEC DO FIM DA 6X1 PASSOU!</h2>
            <p className="lead-text">Mas será que é hora de comemorar?</p>
            {/* <p></p> */}
            <p>As últimas eleições elegeram um número grande de políticos na Câmara e no Senado que já demonstraram ser contra a PEC do fim da escala 6x1. Esses políticos já sinalizaram para um novo projeto visando garantir trabalho por hora, que na prática destrói o fim da escala 6x1 e abre possibilidades pra 7x0, além de tornar ainda mais precárias as condições de trabalho. </p>
            <p>Além disso, nós também aprendemos a desconfiar das vitórias institucionais.</p>
            <p>Vocês se lembram do <strong>caso Zaffari</strong>, onde a empresa aproveitou uma brecha juridica para colocar os trabalhadores em <strong>escala 10x1</strong>? Isso sem contar que no dia-a-dia do trabalho o descumprimento às leis e aos nossos direitos já se tornou regra, não exceção. Salários atrasados, vales que não caem, golpe no FGTS e até carga horária excessiva, <a className="button" href="https://www.instagram.com/invisiveistrabalhador" target="_blank" rel="noopener noreferrer"><strong>como nos mostra as diversas denúncias do Coletivo Invisíveis sobre a terceirização no Rio de Janeiro.</strong></a></p>
            <p>O que fica pra gente é lutar pelo imediato, aqui e agora, tentando aproveitar a aprovação da PEC do fim da 6x1 para pressionar por sua adoção <strong>IMEDIATA</strong> nos nossos locais de trabalho e demais espaços onde haja trabalhadores sob essas condições. </p>
            <p>A situação atual nos é favorável para isso, a PEC acabou de passar. Mas ano que vem tudo pode mudar, e se não conquistarmos agora poderemos nem viver essa conquista. É necessária a pressão, agora mais do que nunca.</p>
            <p>A melhor propaganda contra o fim da escala 6x1 é o seu fim imediato, onde for possível. É o que tornará possível manter a chama da pauta acesa.</p>
            <p></p>
            <p><strong>Pensando em tudo isso, queremos compartilhar uma proposta focada nos serviços públicos federais.</strong></p>
          </div>
        </section>
      </div>

      <div className="editorial-top">
        <div className="hero-separator"></div>
      </div>
      <header className="proposal-hero">
        <img className="hero-image" src={mobilizacao} alt="Imagem ilustrativa de uma mobilização coletiva, com punhos erguidos em Brasília." width={1536} height={1024} fetchPriority="high" />
        <div className="hero-content">
          {/* <p className="eyebrow hero-kicker">Organizar para transformar</p> */}
          <h1 className="proposal-title">Uma proposta de<br />luta contra a <span className="title-muted">6x1</span></h1>
          <p className="hero-subtitle">Pelo fim <strong>IMEDIATO</strong> da 6x1 para os terceirizados dos serviços públicos federais!</p>
          <a className="hero-bottom" href="#proposta"><ArrowDown size={15} aria-hidden="true" /> Como começar?</a>
        </div>
      </header>
      <div className="editorial">
        <section className="narrative-section section-layout" id="proposta" aria-labelledby="proposta-heading">
          <div className="section-label"><span className="section-number">01</span><span className="eyebrow">O ponto de partida</span></div>
          <div className="section-content">
            <h2 id="proposta-heading">O serviço é público,<br />e a luta também.</h2>
            <p className="lead-text">Quem mantém os serviços públicos funcionando precisa de tempo para viver — não apenas para trabalhar.</p>
            <p>A escala 6x1 organiza o trabalho em seis dias, com um dia de descanso. Acabar com isso nos serviços públicos federais precisa ser uma ação conjunta entre quem usa os serviços e quem trabalha no espaço como servidor público ou terceirizado, considerando que cada um vai contribuir como pode.</p>
            <p><strong>A proposta é construir uma mobilização coletiva pelo fim da 6x1, por mais descanso e sem redução salarial aproveitando a Instrução Normativa SEGES/MGI nº 148/2026.</strong></p>
            <p>Começar em cada instituição: organizar, discutir, reunir apoios e pressionar a gestão para antecipar a adoção da norma pressionando pela mudança da escala. De forma geral, as gestões dos serviços públicos, principalmente das universidades federais se manifestam publicamente a favor do fim da 6x1. Então, é importante que sejam coerentes e cumpram isso nos seus espaços de trabalho.</p>
            <div className="normative-note">
              <p><strong>Uma norma não substitui a mobilização.</strong> A Instrução Normativa SEGES/MGI nº 148/2026 altera a IN nº 190/2024, a qual determina a redução de jornada dos trabalhadores no âmbito da administração pública federal. Reduz a jornada de 44 para 40 horas semanais em contratos com dedicação exclusiva de mão de obra, observadas suas condições e períodos de implementação. Isso não garante automaticamente o fim da 6x1 nem a adoção da 5x2 para todos os trabalhadores terceirizados. Jornada semanal e distribuição dos dias de trabalho são questões diferentes, mas é possível associar ambas as coisas através da luta.</p>
              <p><a className="text-link" href="https://www.gov.br/compras/pt-br/acesso-a-informacao/legislacao/instrucoes-normativas/instrucao-normativa-seges-mgi-no-148-de-13-de-abril-de-2026" target="_blank" rel="noreferrer">Consultar o texto oficial da IN nº 148/2026 ↗</a></p>
            </div>
            <p className="lead-text">Essa proposta não deve bastar-se em si mesma. Devemos partir das conquistas em cada instituição para fortalecer a campanha mais ampla pelo fim da 6x1 em escala nacional.</p>
          </div>
        </section>
        <section className="narrative-section section-layout" aria-labelledby="perfis-heading">
          <div className="section-label"><span className="section-number">02</span><span className="eyebrow">Seu lugar nessa luta</span></div>
          <div className="section-content">
            <h2 id="perfis-heading">Vínculos diferentes,<br />luta comum.</h2>
            <p>O caminho não é igual para todo mundo. Cada pessoa pode contribuir a partir da sua realidade, com respeito à autonomia e à segurança de quem trabalha.</p>
            <ProposalProfiles />
          </div>
        </section>
        <section className="narrative-section section-layout" aria-labelledby="mobilizacao-heading">
          <div className="section-label"><span className="section-number">03</span><span className="eyebrow">Realidade e possibilidades</span></div>
          <div className="section-content">
            <h2 id="mobilizacao-heading">Relatos<br />e experiências.</h2>
            <p>A Instrução Normativa 148/2026 já se encontra aplicada em diversas instituições, mas isso não significa o fim da 6x1. Mesmo com a redução da jornada para 40 horas, em alguns locais, os trabalhadores ainda se encontram na jornada 6x1. Alem disso há casos de trabalhadores já na 5x2 porém trabalhando 44 horas e isso pode ser diminuido.</p>
            <div className="action-sequence">
              <div className="action-step"><span>01</span><div><h3>"Na Universidade Federal Fluminense, a gestão já se adequou e colocou a galera nas 40h, e aí muitos estão na 5x2, mas não parece algo definido. Se a gestão precisar, os trabalhadores têm que fazer a 6x1."</h3><p>- Coletivo de apoio entre trabalhadores: terceirizados, estudantes, servidores e informais</p></div></div>
              <div className="action-step"><span>02</span><div><h3>"No Instituto Federal daqui havia um movimento junto com os terceirizados divulgando os problemas da categoria colando relatos dos terceirizados nas paredes do instituto. Em certo momento falaram dessa coisa da 6x1, chegaram até a cobrar a reitoria em rede social. Mais tarde, fiquei sabendo que a reitoria botou a galera toda no 5x2, fizeram uma reunião com os terceirizados e anunciaram a mudança."</h3><p>- Estudante do IFG</p></div></div>
              <div className="action-step"><span>03</span><div><h3>"Na Universidade Federal de Goiás (UFG),  os terceirizados da limpeza (APC Facilities) estão na 5x2, porém ainda estão cumprindo 44 horas semanais. Já os terceirizados do Restaurante Universitário (Real Food) estão fazendo 44 horas semanais, intercalando: uma semana na 6x1 e outra na 5x2."</h3><p>- Estudante da UFG</p></div></div>
              {/* <div className="action-step"><span>03</span><div><h3>Manter a mobilização</h3><p>Fortalecer cada vez mais essa pauta, aproximando mais gente, grupos e apoiadores. Há a possibilidade de unir iniciativas entre serviços e fortalecer a mobilização. Fazer atos na porta das instituições divulgando relatos e pressionando pela pauta também pode ser uma boa forma de se fazer ser ouvido. Busquem sempre construir coletivamente, deixando no centro dessa construção os trabalhadores que sofrem com a escala. Nenhum resultado é automático: a proposta é organizar a luta.</p></div></div> */}
            </div>
            <p></p>
            <p className="lead-text">Quer compartilhar alguma experiência, relato, denúncia ou entrar em contato?</p>
            <p className="lead-text"><a className="button" href="https://forms.gle/FFTQMMEkxaD3zPSi7" target="_blank" rel="noopener noreferrer">Clique aqui e responda o formulário!</a></p>
          </div>
        </section>
        <section className="closing section-layout" aria-labelledby="closing-heading">
          <div className="section-label"><span className="eyebrow">A proposta é esta</span></div>
          <div><h2 id="closing-heading">Menos isolamento.<br />Mais organização.<br />Tempo para viver.</h2><p>Transformar uma dificuldade sofrida individualmente em uma reivindicação coletiva. Recompor nossas forças e constituir comunidades de luta.</p></div>
        </section>
      </div>
    </main>
  );
}
