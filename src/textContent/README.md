# 📝 Text Content

Conteúdos centralizados em JSON.

## 🎯 Objetivo

Separar conteúdo de código. JSONs em `public/data/` podem ser atualizados SEM rebuild!

Todos os arquivos estão na mesma pasta `public/data/` para facilitar:

- **Live updates** (sem rebuild)
- Migração futura para CMS
- Cada import foi documentado indicando qual componente alimenta

## 📋 Mapeamento JSON → Componente

- `ourStory.json` | `/pages/WhoWeAre/sections/OurStory/data.ts`
- `testimonials.json` | `/pages/Home/sections/Testimonials/index.tsx`
- `partners.json` | `/components/Partners/index.tsx`
- `localOrg.json` | `Map + FindLocalArticulation (3 pages)`
- `media.json` | `/pages/BikeAnjoInTheMedia/components/Timeline/` (15 anos, 369 itens)
- `faq.json` | `/pages/TakeOurCourse/components/Accordion/`
- `team.json` | `/pages/WhoWeAre/components/OurTeamCard/index.tsx`
- `courseModules.json` | `/pages/TakeOurCourse/components/Accordion/`

**Não extraído:**

- `about` (FAQ Home `/pages/Home/sections/FAQ/`) - Contém componentes React (`<Link>`), mantido hardcoded.

## 🔧 Como Usar

```typescript
import { loadTextContent } from "@/textContent";

// No componente (async):
const data = await loadTextContent("ourStory");
```

**Antes (hardcoded):**

```typescript
const data = [ { year: 2010, description: "..." }, ... ];
```

**Depois (JSON centralizado):**

```typescript
import { loadTextContent } from "@/textContent";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadTextContent("ourStory").then(setData);
  }, []);

  // Use data...
}
```

## 🔄 Workflow

1. Editar JSON em `public/data/`
2. Testar localmente se necessário (`npm run dev` ou Docker)
3. Subir pro servidor (commit+deploy OU direto via `scp`/`rsync`)
4. Atualiza na hora! (sem rebuild)
