const plants = [

  {
    nom: "Tomate",
    nom_scientifique: "Solanum lycopersicum",
    categorie: "Fruit légume",
    description: "Plante annuelle cultivée pour ses fruits rouges riches en vitamines.",
    conseils: "Exposition plein soleil, arrosage régulier sans mouiller le feuillage.",
    itineraire: "Semis en pépinière → repiquage après 4 semaines → paillage → tuteurage → récolte après 3 mois."
  },
  {
    nom: "Carotte",
    nom_scientifique: "Daucus carota subsp. sativus",
    categorie: "Racine",
    description: "Légume-racine riche en bêta-carotène.",
    conseils: "Sol meuble, sans cailloux. Éviter l'excès d'eau.",
    itineraire: "Semis direct → éclaircissage → arrosage modéré → récolte après 2-3 mois."
  },
  {
    nom: "Oignon",
    nom_scientifique: "Allium cepa",
    categorie: "Bulbe",
    description: "Condiment très utilisé en cuisine, à bulbe blanc, rouge ou jaune.",
    conseils: "Sol léger et bien drainé, en plein soleil.",
    itineraire: "Semis ou plantation de bulbilles → entretien régulier → récolte quand les feuilles jaunissent."
  },
  {
    nom: "Piment",
    nom_scientifique: "Capsicum spp",
    categorie: "Fruit légume",
    description: "Plante vivace en climat chaud, cultivée pour ses fruits épicés.",
    conseils: "Chaleur, soleil, arrosage modéré, éviter l’excès d’azote.",
    itineraire: "Semis → repiquage → paillage → récolte dès que les fruits sont colorés."
  },
  {
    nom: "Aubergine",
    nom_scientifique: "Solanum melongena",
    categorie: "Fruit légume",
    description: "Plante potagère à gros fruits violets.",
    conseils: "Soleil, chaleur, terre fertile et bien drainée.",
    itineraire: "Semis → repiquage → arrosage régulier → récolte au bout de 4 mois."
  },
  {
    nom: "Concombre",
    nom_scientifique: "Cucumis sativus",
    categorie: "Fruit légume",
    description: "Légume-fruit frais et croquant, très riche en eau.",
    conseils: "Sol riche, arrosage régulier, exposition ensoleillée.",
    itineraire: "Semis direct ou en godets → repiquage → palissage → récolte en continu."
  },
  {
    nom: "Courgette",
    nom_scientifique: "Cucurbita pepo",
    categorie: "Fruit légume",
    description: "Légume tendre consommé jeune.",
    conseils: "Soleil, arrosage régulier sans mouiller les feuilles.",
    itineraire: "Semis direct ou en godets → repiquage → récolte 2 mois plus tard."
  },
  {
    nom: "Laitue",
    nom_scientifique: "Lactuca sativa",
    categorie: "Feuille",
    description: "Salade croquante et tendre.",
    conseils: "Climat frais, arrosage régulier, éviter les excès de chaleur.",
    itineraire: "Semis → éclaircissage → récolte 30 à 50 jours après semis."
  },
  {
    nom: "Chou",
    nom_scientifique: "Brassica oleracea",
    categorie: "Feuille",
    description: "Plante à grosses feuilles compactes ou pommées.",
    conseils: "Sol riche, arrosage régulier, attention aux chenilles.",
    itineraire: "Semis → repiquage → traitements → récolte selon variété (3-6 mois)."
  },
  {
    nom: "Épinard",
    nom_scientifique: "Spinacia oleracea",
    categorie: "Feuille",
    description: "Légume riche en fer et facile à cultiver.",
    conseils: "Sol riche, exposition mi-ombre, climat frais.",
    itineraire: "Semis direct → éclaircissage → récolte feuilles jeunes et tendres."
  },

  // Ajout de 30 autres plantes :

  {
    nom: "Navet",
    nom_scientifique: "Brassica rapa",
    categorie: "Racine",
    description: "Racine ronde blanche ou violette, douce.",
    conseils: "Climat frais, sol léger.",
    itineraire: "Semis direct → arrosage → récolte après 2 mois."
  },
  {
    nom: "Betterave",
    nom_scientifique: "Beta vulgaris",
    categorie: "Racine",
    description: "Racine rouge sucrée et riche en nutriments.",
    conseils: "Soleil, sol fertile, arrosage régulier.",
    itineraire: "Semis direct → éclaircissage → récolte après 3 mois."
  },
  {
    nom: "Haricot vert",
    nom_scientifique: "Phaseolus vulgaris",
    categorie: "Légumineuse",
    description: "Gousse longue et fine, riche en fibres.",
    conseils: "Soleil, semis en ligne ou poquets, arrosage modéré.",
    itineraire: "Semis → binage → récolte après 50 jours."
  },
  {
    nom: "Pois",
    nom_scientifique: "Pisum sativum",
    categorie: "Légumineuse",
    description: "Graines riches en protéines.",
    conseils: "Climat frais, support pour grimpantes.",
    itineraire: "Semis direct → tuteurage → récolte 2-3 mois après."
  },
  {
    nom: "Radis",
    nom_scientifique: "Raphanus sativus",
    categorie: "Racine",
    description: "Petit légume-racine piquant.",
    conseils: "Semis échelonnés, sol léger.",
    itineraire: "Semis direct → arrosage → récolte en 3-4 semaines."
  },
  {
    nom: "Céleri",
    nom_scientifique: "Apium graveolens",
    categorie: "Tige",
    description: "Légume aux tiges croquantes.",
    conseils: "Arrosage fréquent, semis long à lever.",
    itineraire: "Semis → repiquage → paillage → récolte après 4 mois."
  },
  {
    nom: "Poireau",
    nom_scientifique: "Allium ampeloprasum",
    categorie: "Tige",
    description: "Tige blanche allongée, goût doux.",
    conseils: "Sol profond, arrosage régulier.",
    itineraire: "Semis → repiquage → buttage → récolte après 5-6 mois."
  },
  {
    nom: "Patate douce",
    nom_scientifique: "Ipomoea batatas",
    categorie: "Racine",
    description: "Tubercule sucré apprécié en tropique.",
    conseils: "Chaleur, sol léger, bouturage.",
    itineraire: "Plantation → binage → récolte après 4-5 mois."
  },
  {
    nom: "Igname",
    nom_scientifique: "Dioscorea spp.",
    categorie: "Racine",
    description: "Tubercule vivrier en climat tropical.",
    conseils: "Plantation par morceaux, sol meuble.",
    itineraire: "Plantation → paillage → récolte après 6-8 mois."
  },
  {
    nom: "Chou chinois",
    nom_scientifique: "Brassica rapa subsp. pekinensis",
    categorie: "Feuille",
    description: "Légume asiatique tendre.",
    conseils: "Semis direct ou pépinière, arrosage constant.",
    itineraire: "Semis → repiquage → récolte rapide (40-60 jours)."
  },
  {
    nom: "Gombo",
    nom_scientifique: "Abelmoschus esculentus",
    categorie: "Fruit légume",
    description: "Fruit mucilagineux typique des zones chaudes.",
    conseils: "Sol riche, chaleur, arrosage régulier.",
    itineraire: "Semis direct → sarclage → récolte continue."
  },
  {
    nom: "Basilic",
    nom_scientifique: "Ocimum basilicum",
    categorie: "Feuille condimentaire",
    description: "Aromatique très appréciée en cuisine.",
    conseils: "Plein soleil, arrosage sans excès.",
    itineraire: "Semis → pincement → récolte régulière."
  },
  {
    nom: "Menthe",
    nom_scientifique: "Mentha spp.",
    categorie: "Feuille condimentaire",
    description: "Plante aromatique envahissante.",
    conseils: "Sol frais, mi-ombre.",
    itineraire: "Plantation → arrosage régulier → récolte feuilles tendres."
  },
  {
    nom: "Persil",
    nom_scientifique: "Petroselinum crispum",
    categorie: "Feuille condimentaire",
    description: "Aromatique vivace.",
    conseils: "Semis en place, arrosage constant.",
    itineraire: "Semis → éclaircissage → récolte à la demande."
  },
  {
    nom: "Coriandre",
    nom_scientifique: "Coriandrum sativum",
    categorie: "Feuille condimentaire",
    description: "Plante aromatique utilisée fraîche ou en graine.",
    conseils: "Semis successifs, peu de chaleur.",
    itineraire: "Semis direct → récolte feuilles ou graines."
  },
  {
    nom: "Chou-fleur",
    nom_scientifique: "Brassica oleracea var. botrytis",
    categorie: "Inflorescence",
    description: "Légume à pomme blanche comestible.",
    conseils: "Sol fertile, arrosage constant.",
    itineraire: "Semis → repiquage → paillage → récolte 3-4 mois plus tard."
  },
  {
    nom: "Brocoli",
    nom_scientifique: "Brassica oleracea var. italica",
    categorie: "Inflorescence",
    description: "Légume à bouquets verts.",
    conseils: "Sol riche, climat doux.",
    itineraire: "Semis → repiquage → récolte 70-90 jours après semis."
  },
  {
    nom: "Poivron",
    nom_scientifique: "Capsicum annuum",
    categorie: "Fruit légume",
    description: "Fruit doux de différentes couleurs.",
    conseils: "Semis en pépinière, repiquage sous abri.",
    itineraire: "Semis → repiquage → récolte 3-4 mois après."
  },
  {
    nom: "Pâtisson",
    nom_scientifique: "Cucurbita pepo var. ovifera",
    categorie: "Fruit légume",
    description: "Courge décorative comestible.",
    conseils: "Plein soleil, arrosage sans excès.",
    itineraire: "Semis direct → récolte 3 mois plus tard."
  },
  {
    nom: "Courge",
    nom_scientifique: "Cucurbita maxima",
    categorie: "Fruit légume",
    description: "Plante coureuse à gros fruits.",
    conseils: "Sol riche, espace suffisant.",
    itineraire: "Semis → arrosage → récolte à maturité complète."
  },
  {
    nom: "Céleri",
    nom_scientifique: "Apium graveolens",
    categorie: "Feuilles",
    description: "Plante aromatique dont on consomme les tiges et parfois les feuilles.",
    conseils: "Demande beaucoup d’eau et un sol riche.",
    itineraire: "Semis en pépinière, repiquage puis récolte après 3-4 mois."
  },
  {
    nom: "Pastèque",
    nom_scientifique: "Citrullus lanatus",
    categorie: "Fruits",
    description: "Fruit juteux et sucré, très apprécié en période chaude.",
    conseils: "Demande chaleur, sol léger et arrosage maîtrisé.",
    itineraire: "Semis direct ou en poquet. Récolte après 3-4 mois."
  },
  {
    nom: "Melon",
    nom_scientifique: "Cucumis melo",
    categorie: "Fruits",
    description: "Fruit sucré à chair orange ou verte.",
    conseils: "Soleil et sol bien drainé. Arrosage régulier.",
    itineraire: "Semis en godet ou direct. Récolte après 3 mois."
  },
  {
    nom: "Taro",
    nom_scientifique: "Colocasia esculenta",
    categorie: "Tubercules",
    description: "Plante vivrière cultivée pour ses gros tubercules riches en amidon et ses feuilles comestibles.",
    conseils: "Sol humide,riche et bien drainé.Climat chaud et humide.",
    itineraire: "Plantation, arrosage,entrtien,récolte après 6 à 9 mois."
  },
  {
    nom: "Pois chiche",
    nom_scientifique: "Cicer arietinum",
    categorie: "Légumineuses",
    description: "Légumineuse cultivée pour ses graines riches en protéines.",
    conseils: "Sol bien drainé, peu d’arrosage nécessaire.",
    itineraire: "Semis direct, récolte après 3-5 mois."
  },
  {
    nom: "Topinambour",
    nom_scientifique: "Helianthus tuberosus",
    categorie: "Tubercules",
    description: "Plante vivace produisant des tubercules comestibles.",
    conseils: "Plantez en plein soleil, sol meuble.",
    itineraire: "Plantation de tubercules, récolte après 4-5 mois."
  },
  {
    nom: "Radis noir",
    nom_scientifique: "Raphanus sativus var. niger",
    categorie: "Racines",
    description: "Radis à peau noire et chair piquante.",
    conseils: "Semis en sol meuble, arrosage régulier.",
    itineraire: "Semis direct, récolte après 2 mois."
  },
  {
    nom: "Chou-rave",
    nom_scientifique: "Brassica oleracea var. gongylodes",
    categorie: "Feuilles",
    description: "Légume à tige renflée comestible, goût doux.",
    conseils: "Arrosage constant, bonne lumière.",
    itineraire: "Semis en pépinière, repiquage, récolte après 2 mois."
  },
  {
    nom: "Patate douce",
    nom_scientifique: "Ipomoea batatas",
    categorie: "Tubercules",
    description: "Tubercule sucré riche en énergie.",
    conseils: "Soleil, chaleur, sol bien drainé.",
    itineraire: "Bouturage ou plants, récolte après 4-5 mois."
  },
  {
    nom: "Cresson alénois",
    nom_scientifique: "Lepidium sativum",
    categorie: "Feuilles",
    description: "Feuille piquante souvent utilisée en salade.",
    conseils: "Croissance rapide, peu exigeant.",
    itineraire: "Semis direct, récolte après 3-4 semaines."
  },
  {
    nom: "Maïs doux",
    nom_scientifique: "Zea mays saccharata",
    categorie: "Graminées",
    description: "Grain sucré cultivé pour être mangé frais.",
    conseils: "Exige du soleil et beaucoup d’eau.",
    itineraire: "Semis direct, récolte après 3-4 mois."
  },
  {
    nom: "Fève",
    nom_scientifique: "Vicia faba",
    categorie: "Légumineuses",
    description: "Plante grimpante à grandes gousses.",
    conseils: "Sol fertile, arrosage régulier.",
    itineraire: "Semis direct, récolte après 3 mois."
  },
  {
    nom: "Panais",
    nom_scientifique: "Pastinaca sativa",
    categorie: "Racines",
    description: "Racine blanche à goût sucré.",
    conseils: "Sol profond, récolte après les premières gelées.",
    itineraire: "Semis direct, récolte après 4 mois."
  },
  {
    nom: "Salsifis",
    nom_scientifique: "Tragopogon porrifolius",
    categorie: "Racines",
    description: "Racine comestible à chair blanche.",
    conseils: "Sol meuble, récolte après 5 mois.",
    itineraire: "Semis direct, arrosage léger."
  },
  {
    nom: "Scarole",
    nom_scientifique: "Cichorium endivia var. latifolia",
    categorie: "Feuilles",
    description: "Salade croquante, légèrement amère.",
    conseils: "Semis en été pour récolte automnale.",
    itineraire: "Semis direct, éclaircissage, récolte après 2 mois."
  },
  {
    nom: "Cardon",
    nom_scientifique: "Cynara cardunculus",
    categorie: "Tiges",
    description: "Plante rustique proche de l'artichaut.",
    conseils: "Sol riche, soleil, paillage.",
    itineraire: "Semis au printemps, récolte en automne."
  },
  {
    nom: "Courge spaghetti",
    nom_scientifique: "Cucurbita pepo",
    categorie: "Fruits",
    description: "Courge dont la chair forme des filaments.",
    conseils: "Sol riche, soleil, arrosage modéré.",
    itineraire: "Semis en godet, repiquage, récolte après 4 mois."
  },
  {
    nom: "Bette à carde",
    nom_scientifique: "Beta vulgaris var. cicla",
    categorie: "Feuilles",
    description: "Feuilles larges aux nervures colorées.",
    conseils: "Sol frais, arrosage régulier.",
    itineraire: "Semis direct, récolte continue."
  },
  {
    nom: "Chervis",
    nom_scientifique: "Sium sisarum",
    categorie: "Racines",
    description: "Ancien légume racine sucré.",
    conseils: "Sol humide, récolte hivernale.",
    itineraire: "Semis printanier, récolte après 5-6 mois."
  },
  {
  nom: "Pomme de terre",
  nom_scientifique: "Solanum tuberosum",
  categorie: "Racine",
  description: "Tubercule riche en amidon, base alimentaire importante.",
  conseils: "Sol meuble, exposition ensoleillée, buttage des plants.",
  itineraire: "Plantation de tubercules germés → buttage → arrosage modéré → récolte après jaunissement du feuillage."
},
{
  nom: "Amarante",
  nom_scientifique: "Amaranthus spp.",
  categorie: "Feuille",
  description: "Plante feuillue tropicale très nutritive et riche en fer.",
  conseils: "Semis direct, arrosage régulier, récolte fréquente des feuilles.",
  itineraire: "Semis → éclaircissage → arrosage → récolte continue des jeunes feuilles."
},
{
  nom: "Grande morelle",
  nom_scientifique: "Solanum macrocarpon",
  categorie: "Fruit légume",
  description: "Légume-fruit africain, souvent utilisé comme aubergine locale.",
  conseils: "Soleil, arrosage régulier, récolte avant maturité complète.",
  itineraire: "Semis → repiquage → arrosage → récolte des fruits tendres."
},
{
  nom: "Crin-crin",
  nom_scientifique: "Corchorus olitorius",
  categorie: "Feuille",
  description: "Feuille mucilagineuse très utilisée en cuisine africaine.",
  conseils: "Semis en ligne, arrosage régulier, récolte jeune.",
  itineraire: "Semis → éclaircissage → arrosage → récolte continue des feuilles."
},
{
  nom: "Bettes",
  nom_scientifique: "Beta vulgaris subsp. cicla",
  categorie: "Feuille",
  description: "Légume-feuille aux côtes charnues, proche de la betterave.",
  conseils: "Sol riche, arrosage fréquent, récolte en continu.",
  itineraire: "Semis direct ou en godets → repiquage → récolte des feuilles selon les besoins."
},
{
  nom: "Haricot grimpant",
  nom_scientifique: "Phaseolus vulgaris var. communis",
  categorie: "Graine",
  description: "Variété de haricot qui grimpe sur des supports, très productive.",
  conseils: "Aime les sols riches, exposition ensoleillée, nécessite un support.",
  itineraire: "Semis direct, récolte 60 à 75 jours après semis."
},
{
  nom: "Pois sucré",
  nom_scientifique: "Pisum sativum",
  categorie: "Graine",
  description: "Légume à gousses tendres comestibles, souvent consommé entier.",
  conseils: "Températures fraîches, sol meuble et drainé.",
  itineraire: "Semis direct, récolte environ 60 jours après semis."
},
{
  nom: "Laitue romaine",
  nom_scientifique: "Lactuca sativa var. longifolia",
  categorie: "Feuille",
  description: "Laitue à feuilles longues et croquantes, idéale en salade.",
  conseils: "Semis successifs pour récoltes échelonnées.",
  itineraire: "Semis direct ou en pépinière, récolte 45 à 60 jours après semis."
},
{
  nom: "Piment oiseau",
  nom_scientifique: "Capsicum frutescens",
  categorie: "Fruit",
  description: "Petit piment très piquant, utilisé en assaisonnement.",
  conseils: "Sol léger, plein soleil, arrosage régulier sans excès.",
  itineraire: "Semis en pépinière, repiquage après 6 semaines, récolte 3 mois après."
},
{
  nom: "Fenouil bulbeux",
  nom_scientifique: "Foeniculum vulgare var. azoricum",
  categorie: "Tige",
  description: "Plante aromatique dont le bulbe est utilisé en cuisine.",
  conseils: "Sol profond et meuble, exposition ensoleillée.",
  itineraire: "Semis direct ou pépinière, récolte 3 mois après semis."
},
{
  nom: "Oseille",
  nom_scientifique: "Rumex acetosa",
  categorie: "Feuille",
  description: "Feuille acidulée utilisée comme condiment ou légume.",
  conseils: "Aime les sols frais et riches, exposition mi-ombre.",
  itineraire: "Semis direct, récolte continue des feuilles jeunes."
},
{
  nom: "Courge musquée",
  nom_scientifique: "Cucurbita moschata",
  categorie: "Fruit",
  description: "Courge au goût sucré, chair orangée et ferme.",
  conseils: "Demande chaleur et espace, arrosage au pied.",
  itineraire: "Semis direct, récolte 4 à 5 mois après semis."
},
{
  nom: "Ail",
  nom_scientifique: "Allium sativum",
  categorie: "Bulbes",
  description: "Plante herbacée cultivée pour ses gousses aromatiques,largement utilisées en cusine pour leurs propriétés culinaires et médécinales.",
  conseils: "Sol léger,bien drainé,ensoleillée et cultivé en automne ou au printemps selon le climat.",
  itineraire: "Plantation,arrosage,entretien,récolte 8 à 10 mois après plantation."
},
{
  nom: "Navet blanc",
  nom_scientifique: "Brassica rapa var. rapa",
  categorie: "Racine",
  description: "Racine ronde à chair blanche, douce et croquante.",
  conseils: "Sol meuble et frais, arrosage régulier.",
  itineraire: "Semis direct, récolte 50 à 60 jours après semis."
},
{
  nom: "Betterave rouge",
  nom_scientifique: "Beta vulgaris",
  categorie: "Racine",
  description: "Racine sucrée à chair rouge, riche en antioxydants.",
  conseils: "Sol léger, sans cailloux, semis clairsemé.",
  itineraire: "Semis direct, récolte 3 mois après semis."
},
{
  nom: "Persil plat",
  nom_scientifique: "Petroselinum crispum var. neapolitanum",
  categorie: "Feuille",
  description: "Plante aromatique aux feuilles plates et parfumées.",
  conseils: "Sol riche, arrosage modéré, mi-ombre ou plein soleil.",
  itineraire: "Semis direct ou en pot, récolte continue."
},
{
  nom: "Courgette ronde",
  nom_scientifique: "Cucurbita pepo var. ronde",
  categorie: "Fruit",
  description: "Variété de courgette en forme de boule, idéale à farcir.",
  conseils: "Sol fertile, arrosage régulier, plein soleil.",
  itineraire: "Semis direct ou en pépinière, récolte 2 mois après semis."
},
{
  nom: "Chou palmiste",
  nom_scientifique: "Brassica oleracea var. acephala",
  categorie: "Feuille",
  description: "Chou sans pomme, aux feuilles tendres et nutritives.",
  conseils: "Tolérant à la chaleur, récolte progressive des feuilles.",
  itineraire: "Semis en pépinière, repiquage, récolte continue."
},
{
  nom: "Aubergine africaine",
  nom_scientifique: "Solanum aethiopicum",
  categorie: "Fruit",
  description: "Petit fruit rond consommé cuit ou séché, typique en Afrique.",
  conseils: "Sol riche, arrosage régulier, climat chaud.",
  itineraire: "Semis en pépinière, repiquage après 4 semaines, récolte après 3 mois."
},
{
  nom: "Chou de Chine pak choï",
  nom_scientifique: "Brassica rapa subsp. chinensis",
  categorie: "Feuille",
  description: "Chou asiatique à croissance rapide, croquant et doux.",
  conseils: "Sol humide, mi-ombre ou soleil léger.",
  itineraire: "Semis direct ou pépinière, récolte 40 à 50 jours après semis."
},
{
  nom: "Menthe verte",
  nom_scientifique: "Mentha spicata",
  categorie: "Feuille",
  description: "Plante aromatique très parfumée, utilisée en cuisine et infusion.",
  conseils: "Culture facile, préfère les sols humides et mi-ombre.",
  itineraire: "Plantation par bouture ou éclat de souche, récolte continue."
},
{
  nom: "Rutabaga",
  nom_scientifique: "Brassica napobrassica",
  categorie: "Racine",
  description: "Légume racine rustique à chair jaune, saveur douce.",
  conseils: "Climat frais, sol profond et ameubli.",
  itineraire: "Semis direct, récolte 3 à 4 mois après semis."
},
{
  nom: "Chou rave",
  nom_scientifique: "Brassica oleracea var. gongylodes",
  categorie: "Tige",
  description: "Chou formant une tige globuleuse, douce et croquante.",
  conseils: "Sols riches et légers, arrosage régulier.",
  itineraire: "Semis direct ou pépinière, récolte 2 mois après semis."
},
{
  nom: "Piment doux",
  nom_scientifique: "Capsicum annuum",
  categorie: "Fruit",
  description: "Fruit allongé et coloré, doux au goût sucré.",
  conseils: "Soleil, chaleur, sol riche, arrosage modéré.",
  itineraire: "Semis en pépinière, repiquage après 6 semaines, récolte après 3 mois."
},
{
  nom: "Basilic tropical",
  nom_scientifique: "Ocimum basilicum",
  categorie: "Feuille",
  description: "Plante aromatique au parfum puissant, très utilisée en cuisine.",
  conseils: "Soleil, arrosage régulier, éviter l’excès d’eau.",
  itineraire: "Semis en pot ou plein champ, récolte dès 30 jours après semis."
},
{
    nom: "Moringa",
    nom_scientifique: "Moringa oleifera",
    categorie: "Vivrière",
    description: "Arbre aux feuilles très nutritives, utilisé comme légume ou complément alimentaire.",
    conseils: "Planter en plein soleil, sol bien drainé. Arroser modérément.",
    itineraire: "Semis direct en poquet ou en pépinière. Repiquage après 3-4 semaines. Récolte des feuilles dès 1 mois après plantation."
},
{
    nom: "Échalote",
    nom_scientifique: "Allium ascalonicum",
    categorie: "Potagère",
    description: "Bulbe proche de l’oignon, utilisé en cuisine pour son goût fin.",
    conseils: "Planter en sol léger et fertile, en plein soleil. Éviter l’excès d’humidité.",
    itineraire: "Plantation de bulbilles entre novembre et janvier. Récolte 4 à 5 mois plus tard, quand les feuilles jaunissent."
},
{
    nom: "Potiron",
    nom_scientifique: "Cucurbita maxima",
    categorie: "Potagère",
    description: "Plante rampante produisant de gros fruits comestibles riches en bêta-carotène.",
    conseils: "Exige chaleur et compost. Arroser au pied sans mouiller les feuilles.",
    itineraire: "Semis en poquet en saison chaude. Récolte 3 à 4 mois après semis, à maturité complète."
},
{
    nom: "Cerfeuil",
    nom_scientifique: "Anthriscus cerefolium",
    categorie: "Aromatique",
    description: "Plante herbacée aromatique utilisée comme condiment.",
    conseils: "Sol frais et mi-ombragé. Arroser régulièrement.",
    itineraire: "Semis direct en lignes. Récolte des feuilles 6 à 8 semaines après semis."
},
{
    nom: "Kakao",
    nom_scientifique: "Theobroma cacao",
    categorie: "Vivrière",
    description: "Arbre tropical dont les fèves servent à fabriquer le chocolat.",
    conseils: "Sol riche, ombragé au départ. Besoin de chaleur et d’humidité.",
    itineraire: "Repiquage de plants issus de pépinière. Entretien régulier. Première récolte 3 à 5 ans après plantation."
},
{
    nom: "Chou de Bruxelles",
    nom_scientifique: "Brassica oleracea var. gemmifera",
    categorie: "Potagère",
    description: "Légume formant de petites pommes le long d’une tige.",
    conseils: "Climat frais. Sol riche et bien drainé.",
    itineraire: "Semis en pépinière, repiquage après 5-6 semaines. Récolte 3 à 4 mois plus tard."
},
{
    nom: "Câpre",
    nom_scientifique: "Capparis spinosa",
    categorie: "Aromatique",
    description: "Plante méditerranéenne dont les boutons floraux sont consommés.",
    conseils: "Sol sec et rocailleux. Exposition ensoleillée.",
    itineraire: "Multiplication par bouturage. Récolte des boutons avant floraison."
},
{
    nom: "Salicorne",
    nom_scientifique: "Salicornia europaea",
    categorie: "Aromatique",
    description: "Plante halophile comestible, croquante et salée, appréciée en salade.",
    conseils: "Sol salin ou bord de mer. Bonne humidité.",
    itineraire: "Semis ou repiquage. Récolte jeune avant lignification des tiges."
},
{
    nom: "Quinoa",
    nom_scientifique: "Chenopodium quinoa",
    categorie: "Céréalière",
    description: "Pseudo-céréale riche en protéines, cultivée pour ses graines.",
    conseils: "Sol bien drainé, peu fertile. Tolère la sécheresse.",
    itineraire: "Semis direct. Récolte 3 à 4 mois après semis, quand les graines sont mûres. Battage et séchage nécessaires."
  },
  {
    nom: "Jicama",
    nom_scientifique: "Pachyrhizus erosus",
    categorie: "Vivrière",
    description: "Plante légumineuse cultivée pour ses racines comestibles croquantes et sucrées.",
    conseils: "Climat chaud, sol léger bien drainé. Plein soleil.",
    itineraire: "Semis direct après les dernières pluies. Récolte 5 à 9 mois après semis, lorsque les racines sont bien formées."
  },
  {
    nom: "Lentilles",
    nom_scientifique: "Lens culinaris",
    categorie: "Céréalière",
    description: "Plante légumineuse cultivée pour ses graines riches en protéines.",
    conseils: "Sol léger, pauvre et bien drainé. Exposition ensoleillée.",
    itineraire: "Semis direct. Récolte 3 à 4 mois après semis, lorsque les gousses sont sèches."
  },
  {
    nom: "Sésame",
    nom_scientifique: "Sesamum indicum",
    categorie: "Oléagineuse",
    description: "Plante cultivée pour ses graines riches en huile et en nutriments.",
    conseils: "Sol sablonneux, bien drainé, en plein soleil.",
    itineraire: "Semis direct en ligne. Récolte environ 90 à 120 jours après semis, quand les capsules sont sèches."
  },
  {
    nom: "Artichaut",
    nom_scientifique: "Cynara scolymus",
    categorie: "Potagère",
    description: "Plante vivace cultivée pour ses fleurs comestibles non épanouies.",
    conseils: "Climat tempéré, sol profond et fertile.",
    itineraire: "Plantation par œilletons ou semis. Récolte 8 à 12 mois après. Tailler après floraison."
  },
  {
    nom: "Fève de soja",
    nom_scientifique: "Glycine max",
    categorie: "Légumineuse",
    description: "Plante annuelle cultivée pour ses graines riches en protéines et en huile.",
    conseils: "Sol meuble, chaud et bien drainé. Plein soleil.",
    itineraire: "Semis direct. Récolte 3 à 5 mois après, selon l’usage (vert ou sec)."
  },
  {
    nom: "Pomme grenade",
    nom_scientifique: "Punica granatum",
    categorie: "Fruitière",
    description: "Arbuste fruitier produisant des fruits juteux riches en antioxydants.",
    conseils: "Sol bien drainé, supporte la sécheresse. Exposition ensoleillée.",
    itineraire: "Multiplication par bouture ou greffe. Récolte 5 à 7 mois après floraison."
  },
  {
    nom: "Tige de maïs",
    nom_scientifique: "Zea mays",
    categorie: "Céréalière",
    description: "Plante herbacée cultivée pour ses grains. Les tiges peuvent être utilisées comme fourrage.",
    conseils: "Sol riche, arrosage régulier. Besoin de chaleur.",
    itineraire: "Semis direct en lignes. Récolte des épis à maturité, tiges récoltées pour fourrage ou paillage."
  },
  {
    nom: "Sarrasin",
    nom_scientifique: "Fagopyrum esculentum",
    categorie: "Céréalière",
    description: "Pseudo-céréale cultivée pour ses graines sans gluten.",
    conseils: "Sol pauvre, léger. Climat tempéré à chaud.",
    itineraire: "Semis direct. Récolte 70 à 90 jours après, avant que les graines ne tombent."
  },
  {
    nom: "Pêche de vigne",
    nom_scientifique: "Prunus persica var. platycarpa",
    categorie: "Fruitière",
    description: "Variété ancienne de pêche à chair rouge, très parfumée.",
    conseils: "Sol profond, fertile et bien drainé. Climat tempéré.",
    itineraire: "Greffage sur porte-greffe. Récolte en fin d’été, 2 à 3 ans après plantation."
  },
  {
    nom: "Arugula (Roquette)",
    nom_scientifique: "Eruca vesicaria",
    categorie: "Aromatique",
    description: "Plante feuillue au goût poivré, utilisée en salade.",
    conseils: "Sol frais et bien drainé. Semer par temps frais.",
    itineraire: "Semis en ligne ou à la volée. Récolte 3 à 5 semaines après semis, avant la montée en graine."
 },
 {
  nom: "Citrouilles",
  nom_scientifique: "Cucurbita maxima",
  categorie: "Fruit légume",
  description: "Gros fruit comestible souvent utilisé en purée ou en soupe.",
  conseils: "Sol riche, grand espace, arrosage régulier.",
  itineraire: "Semis direct ou en poquets → arrosage → surveillance des maladies → récolte à maturité."
}
];

const plantList = document.getElementById("plant-list");

// Affichage
function afficherPlantes() {
  plantList.innerHTML = "";

  plants.forEach(plant => {
    const card = document.createElement("div");
    card.className = "plant-card";

    card.innerHTML = `
      <h2 class="plant-nom">${plant.nom}</h2>
      <p class="plant-nom-scientifique">${plant.nom_scientifique}</p>
      <p><strong>Catégorie :</strong> ${plant.categorie}</p>
      <p><strong>Description :</strong> ${plant.description}</p>
      <p><strong>Conseils :</strong> ${plant.conseils}</p>
      <p><strong>Itinéraire technique :</strong><br>${plant.itineraire}</p>
    `;

    plantList.appendChild(card);
  });
   
 document.getElementById("sortSelect").addEventListener("change", function () {
  const sortType = this.value;

  if (sortType === "az") {
    plants.sort((a, b) => a.nom.localeCompare(b.nom));
  } else if (sortType === "za") {
    plants.sort((a, b) => b.nom.localeCompare(a.nom));
  }

  afficherPlantes(plants);
  });
}

// Recherche
function filtrerPlantes() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".plant-card");

  cards.forEach(card => {
    const nom = card.querySelector(".plant-nom").textContent.toLowerCase();
    const nomScientifique = card.querySelector(".plant-nom-scientifique").textContent.toLowerCase();

    if (nom.includes(input) || nomScientifique.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
   

const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');

menuButton.onclick = () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
};

window.onclick = function(event) {
  if (!event.target.matches('#menuButton')) {
    dropdownMenu.style.display = 'none';
  }
};

function sortPlants(order) {
  if (order === 'asc') {
    plants.sort((a, b) => a.nom.localeCompare(b.nom));
  } else if (order === 'desc') {
    plants.sort((a, b) => b.nom.localeCompare(a.nom));
  }
  afficherPlantes(plants); // Recharge la liste triée
};


function showAbout() {
  modalText.innerHTML = `<h2>À propos</h2>
    <p>JardinExpress est une application de planification de jardin tropical créée par Baudler-Fiacre Gbenou-Fanou, étudiant en horticulture.</p>`;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sort-select').addEventListener('change', function () {
    const sortOrder = this.value;
    if (sortOrder === 'none') return;

    const container = document.getElementById('plants-container');
    const items = Array.from(container.querySelectorAll('.plant-card'));

    items.sort((a, b) => {
      const nameA = a.querySelector('h3').textContent.toUpperCase();
      const nameB = b.querySelector('h3').textContent.toUpperCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    container.innerHTML = '';
    items.forEach(item => container.appendChild(item));
  });
});

// Initialisation
afficherPlantes();