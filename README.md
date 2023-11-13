# **Hyrule castle**

# Gameplay

Welcome Hero,

To play this game you'll need few commands. Your goal is to defeat the enemies and the boss to save the kingdom of Hyrule.
Here are a few commands to use youre character's powers:

The key 1️⃣ is your attack command, using the power of the hero and your sword you'll damage the enemy up to your strength capacity.

The key 2️⃣ is your heal command, using the grace of the princess Zelda, you'll be able to heal yourself by half your maximum life points.

The boss is hidden in the 10th floor of a tower, you'll have to slay the enemies on your path and be carefull not to die, some enemies are strong and you're the last chance to save the kingdom.

# Explication du code:

Nous avons utilisé de l'héritage pour ordonner notre code. Ainsi nous avons créé une classe Entity nous permettant de créer d'autres classes possédant les mêmes caractéristiques et ainsi les faire interargir les unes avec les autres.
Les fonctions inhérentes à l'affichage et et la méchanique du jeu sont stockées dans tools.ts tandis que la base du jeu est dans hyrule_castle.ts.
Nous avons un fichier "mère" nomé entity utilisant l'héritage sur enemy, player et boss afin de pouvoir utiliser nos fonctions d'action tel que attaquer ou soigner sur tous. Ces fonctions sont stockées dans entity.
Enfin, nous avons le fichier colors qui nous permet d'afficher des couleurs dans le terminal afin de rendre le jeu plus interractif.

Pour lancer le jeu il vous faudra faire la commande suivante : ts-node hyrule_castle.ts
