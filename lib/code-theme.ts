// Shiki themes in ElectroDromos's palette: cyan is the only accent in code too.
// Used by MDX code blocks (source.config.ts) and DynamicCodeBlock.

const scopes = {
  comment: ['comment', 'punctuation.definition.comment'],
  keyword: ['keyword', 'storage', 'storage.type', 'storage.modifier', 'keyword.control', 'constant.language', 'variable.language'],
  annotation: ['storage.type.annotation', 'punctuation.definition.annotation', 'meta.declaration.annotation'],
  type: ['entity.name.type', 'entity.name.class', 'support.class', 'support.type', 'storage.type.java', 'storage.type.object'],
  func: ['entity.name.function', 'support.function', 'meta.method-call entity.name.function'],
  string: ['string', 'punctuation.definition.string'],
  number: ['constant.numeric'],
  tag: ['entity.name.tag', 'meta.tag', 'support.type.property-name'],
};

function theme(name: string, type: 'dark' | 'light', c: Record<keyof typeof scopes | 'fg' | 'bg', string>) {
  return {
    name,
    type,
    colors: { 'editor.background': c.bg, 'editor.foreground': c.fg },
    tokenColors: [
      { settings: { foreground: c.fg, background: c.bg } },
      ...(Object.keys(scopes) as (keyof typeof scopes)[]).map((key) => ({
        scope: scopes[key],
        settings: { foreground: c[key], ...(key === 'comment' ? { fontStyle: 'italic' } : {}) },
      })),
    ],
  };
}

export const dromosDark = theme('electrodromos-dark', 'dark', {
  bg: '#111317',
  fg: '#D7DDE1',
  comment: '#6B7580',
  keyword: '#19E3E8',
  annotation: '#19E3E8',
  type: '#F4F6F7',
  func: '#8FEFF2',
  string: '#B8C4CB',
  number: '#F4F6F7',
  tag: '#19E3E8',
});

export const dromosLight = theme('electrodromos-light', 'light', {
  bg: '#FFFFFF',
  fg: '#1C2126',
  comment: '#6E7881',
  keyword: '#007A80',
  annotation: '#007A80',
  type: '#0B0D10',
  func: '#005A5E',
  string: '#4F5861',
  number: '#0B0D10',
  tag: '#007A80',
});

export const dromosThemes = { themes: { light: dromosLight, dark: dromosDark } };
