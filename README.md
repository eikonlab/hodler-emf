# EMF Holder

[hodler.emf.ch](https://hodler.emf.ch)

## Prérequis

- Git installé
- NPM installé

## Installation

Cloner le repository git

```
git clone git@github.com:eikonlab/hodler-emf.git
```

Se rendre dans le dossier du projet, puis installer les dépendances avec NPM

```
cd hodler-emf
npm install
```

## Commandes

Compiler la SCSS, aggréger le JS, lancer le serveur et écouter les changements

```
npm run dev
```

Compiler pour la production

```
npm run build
```

## Déploiement

1. Compiler le code avec `npm run build`
2. Connection en FTP et se rendre dans le répertoire `subdomains/emf/hodler/public`
3. Remplacer le contenu du répertoire par celui se trouvant dans le dossier `/dist`

### Extend Artiste

Mettre les infos dans les locals ainsi que le lien de la video youtube

Pour les images, utiliser la nommencalture _nom de famille de l'artiste_-work.jpg ou -portrait.jpg
