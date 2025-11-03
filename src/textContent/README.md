# Text Content

Conteúdos centralizados em JSON em `public/data/`. Atualizações sem rebuild.

## Uso

```typescript
import { loadTextContent } from "@/textContent";
const data = await loadTextContent("ourStory");
```

## Mapeamento

- `ourStory.json` → WhoWeAre/OurStory
- `testimonials.json` → Home/Testimonials
- `partners.json` → Partners
- `localOrg.json` → Map + Articulations
- `media.json` → BikeAnjoInTheMedia/Timeline
- `faq.json` → TakeOurCourse/Accordion
- `team.json` → WhoWeAre/OurTeamCard
- `courseModules.json` → TakeOurCourse/Accordion

## Workflow

1. Editar JSON em `public/data/`
2. Deploy ou sync
3. Atualiza sem rebuild
