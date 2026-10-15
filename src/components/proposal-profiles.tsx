import { useState } from "react";
import { Users, Building2, HardHat, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleProfile, type ProfileId } from "@/lib/profiles";

const profiles = [
  {
    id: "usuarios" as const,
    title: "Sou usuário dos serviços públicos",
    subtitle: "Quem estuda, se trata ou é atendido nesses espaços",
    icon: Users,
    intro: "Um serviço público de qualidade depende das condições de quem trabalha nele. Você pode apoiar a mudança respeitando a autonomia e a segurança dos trabalhadores.",
    steps: [
      ["Escute antes de propor.", "Converse com os trabalhadores, respeitando seu tempo e sua vontade de participar. Não exponha nomes, imagens ou relatos sem consentimento. Mesmo sem poder participar de ações que os exponham, os trabalhadores são quem colaboram com informações e relatos fundamentais para a luta. Construa relações com esses trabalhadores. Não se acanhe: troque zap!"],
      ["Leve a pauta aos espaços coletivos.", "Organize o debate em centros acadêmicos, associações de usuários e outros grupos. Se não houver, construa um com quem tem interesse de levar a proposta. Muitos trabalhadores desses serviços podem ter medo de exposição e não podem participar diretamente das ações, é importante entender isso e não colocar o trabalhador em risco."],
      ["Agite pela pauta.", "Crie materiais e divulgue. Imprima materiais e cole nas paredes da instituição, faça atos, crie páginas e divulgue nas redes sociais. Se for possível, articule com outros grupos de dentro e fora da instituição para criar uma rede de apoio nessa luta."],
    ],
  },
  {
    id: "diretos" as const,
    title: "Sou servidor ou funcionário direto",
    subtitle: "Quem tem vínculo direto com a instituição",
    icon: Building2,
    intro: "Seu vínculo é diferente do vínculo dos terceirizados. A solidariedade começa por reconhecer essa diferença, sem substituir a voz de quem enfrenta a escala 6x1.",
    steps: [
      ["Construa pontes.", "Mapeie seu local de trabalho, levantando quais são os setores que se encontram nessa escala. Procure conversar diretamente com esses trabalhadores, buscando entender os problemas e as dificuldades que passam."],
      ["Transforme o apoio em uma demanda concreta.", "Proponha reuniões e, se possível, monte um grupo com os colegas que estão dispostos a apoiar essa luta. Converse com os usuários, colegas de outras instituições, e tente expandir essa rede."],
      ["Agite pela pauta.", "Crie materiais e divulgue. Se você tiver mais abertura, elabore materiais com a rede de apoio criada, imprima materiais e cole nas paredes da instituição. Caso não seja possível, incentive apoiadores e usuários a fazerem isso, eles podem se expor mais. Articulem, se possível, atos, crie páginas e divulgue nas redes sociais. Se for possível, articule com outros grupos de dentro e fora da instituição para criar uma rede de apoio nessa luta. Uma forma de evitar exposição excessiva no seu ambiente de trabalho, é combinar com colegas de outra instituição para atuarem um na instituição do outro."],
    ],
  },
  {
    id: "terceirizados" as const,
    title: "Sou trabalhador terceirizado",
    subtitle: "Quem é contratado por uma empresa prestadora de serviços",
    icon: HardHat,
    intro: "Sua experiência deve estar no centro da proposta. A organização coletiva precisa considerar a sua condição de trabalho e o risco de se expor excessivamente.",
    steps: [
      ["Converse com colegas de confiança.", "Identifiquem a escala praticada, os horários e as principais dificuldades. Definam juntos o que desejam reivindicar, sem divulgar dados pessoais ou documentos de colegas sem autorização. Não se exponha sozinho: a luta é coletiva. Comece com quem você confia e construa uma rede de apoio. Pense em outros trabalhadores e usuários que possam apoiar e expanda essa rede de apoio para além dos seus colegas imediatos."],
      ["Transforme o apoio em uma demanda concreta.", "Procure outros trabalhadores e usuários para apoiar essa luta. Monte um grupo de whatsapp e coloque apenas pessoas de confiança que possam auxiliar nessa luta. Lembre-se de não se expor, e incentive os que não correm risco de demissão, como os usuários, a colarem cartazes, denunciarem e fazerem manifestações."],
      ["Agite pela pauta.", "Se possível, organize atos e divulgue nas redes sociais. Articule com outros grupos de dentro e fora da instituição para criar uma rede de apoio nessa luta, pressionando os gestores das instituições."],
    ],
  },
];

export function ProposalProfiles() {
  const [open, setOpen] = useState<ProfileId | null>(null);
  return (
    <div className="profile-list">
      {profiles.map((profile) => {
        const expanded = open === profile.id;
        const Icon = profile.icon;
        return (
          <div className="profile-item" key={profile.id}>
            <h3>
              <Button variant="profile" id={`trigger-${profile.id}`} aria-expanded={expanded} aria-controls={`content-${profile.id}`} onClick={() => setOpen((current) => toggleProfile(current, profile.id))}>
                <span className="profile-heading">
                  <Icon className="profile-icon" aria-hidden="true" />
                  <span><span className="profile-name">{profile.title}</span><span className="profile-subtitle">{profile.subtitle}</span></span>
                </span>
                {expanded ? <Minus className="expand-icon" aria-hidden="true" /> : <Plus className="expand-icon" aria-hidden="true" />}
              </Button>
            </h3>
            <div id={`content-${profile.id}`} role="region" aria-labelledby={`trigger-${profile.id}`} hidden={!expanded}>
              {expanded && <div className="profile-content"><p>{profile.intro}</p><ol>{profile.steps.map(([title, detail]) => <li key={title}><strong>{title}</strong> {detail}</li>)}</ol></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}