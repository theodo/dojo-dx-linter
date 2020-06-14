Dojo DX: Linter
===

## 1. Ajout d'ESLint

**Objectifs**: Trouver des erreurs dans le code grace à des outils d'analyse statique.

### Probleme:

Le code n'est pas consistant. On a par exemple des string avec des single et double quotes.
En plus de cela, en lancant le projet, on voit une erreur en console !!
Le client nous demande de résoudre le problème et de faire en sorte que ca ne se reproduise plus ...

### Analyser la base de code

Plutôt que de lire le code et de passer du temps à essayer de corriger ou formatter le code à la main, on va utiliser ESLint.

[ESLint](https://eslint.org/) est un outil qui permet à la base d'analyser une base de code JavaScript. Dans notre cas, nous avons un projet TS et il va donc falloir s'adapter un peu.

Installation des dépendances:

```bash
yarn add eslint -D
```

Un outil comme ESLint est entièrement défini par son fichier de configuration `.eslintrc`. Pour résumer, cette configuration contient différents champs:
- `rules`: Objet contenant l'ensemble des règles ESLint du projet (ex: `max-len` définit le nombre de caracteres max par ligne)
- `extends`: Liste contenant des ensembles de règles prédéfinies (ex: `eslint:recommended` contient l'ensemble des règles recommandées JS https://eslint.org/docs/rules/),
- `plugins`: paquet NPM contenant des regles spécifiques ESLint (ex: `eslint-plugin-react`)

Ajoutons quelques dépendances afin d'adapter la configuration ESLint pour TypeScript.

```bash
yarn add @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

On ajoute un parser ESLint permettant de lire du TypeScript et un plugin TS pour ajouter des regles spécifiques à TS.

Notre fichier `.eslintrc` ressemble à la fin à cela:

```JSON
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "env": {
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
}
```

- On utilise les regles recommandées par ESLint et celles du plugin TS qu'on a installé précedemment. Pour l'instant, on ne va pas utiliser de regles custom.

Afin de lancer ESLint sur notre projet, on peut utiliser la commande suivante:

```bash
npx eslint ./src/**/*.ts
```

### Ajouter une regle ESLint

L'un des problemes du projet est le manque de consistance entre les fichiers notammenent sur les strings.

On va forcer les développeurs à utiliser des double quotes grace à ESLint. Pour cela, on va ajouter une regle: https://eslint.org/docs/rules/quotes

Ajoutons la regle dans le champ `rules` du fichier `.eslintrc`. On veut des double quote. `'quotes': ['error', 'double'],`

En lancant ESLint, on voit qu'il nous propose d'utiliser l'option `--fix` pour automatiquement corriger les erreurs !!

## 2. Afficher les erreurs dans l'IDE

On a vu qu'ESLint permet de détecter mais aussi corriger automatiquement des erreurs. Integrons maintenant ESLint dans notre IDE afin de ne plus avoir à utiliser le terminal.

Tous les outils de formatage ou d'analyse statique de code peuvent être intégré à un IDE via des extensions ou des plugins.

Installons si ce n'est pas déjà fait l'extension ESLint sur VSCode.

Dans le projet, nous avons une configuration VSCode dans le fichier `.vscode/settings.json`. Modifions la afin d'activer ESLint.

Nous pouvons aussi activer la correction automatique à a sauvegarde. Nous recommandons cette option afin de pouvoir formater le code à chaque sauvegarde.

## 3. Integrer d'autres outils de formatage à ESLint

On a vu qu'ESLint pouvait être personnalisée avec d'autres regles avec des plugins. On va maintenant utiliser l'outil prettier pour formatter notre code.

```bash
yarn add prettier -D
```

Prettier est un outil avec un ensemble de regles de formatage préétablis. On peut toutefois personnaliser ces regles via un fichier de configuration `.prettierrc`. Dans notre cas, nous allons utiliser la configuration de base.
