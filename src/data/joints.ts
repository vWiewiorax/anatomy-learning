// Stawy i więzadła: ilustracje wyrenderowane z BodyParts3D 4.0 (DBCLS, CC BY-SA 2.1 JP), więzadła dorysowane schematycznie na modelu 3D.
import type { Card } from "./cards";

export type Detail = { title: string; items: string[] };
export type JointView = { image: string; ligaments: string[]; hotspots: Record<string, number[]> };
export type Joint = {
  id: string;
  latin: string;
  polish: string;
  info: string;
  details: Detail[];
  group: string;
  groupSlug: string;
  subgroup: string;
  subgroupSlug: string;
  image: string | null;
  views: JointView[];
  ligaments: string[];
};
export type Ligament = { id: string; jointId: string; latin: string; polish: string; info: string; image: string };

export const JOINTS: Joint[] = [
  {
    "id": "j-tmj",
    "latin": "Articulatio temporomandibularis",
    "polish": "Staw skroniowo-żuchwowy",
    "info": "Umożliwia opuszczanie i unoszenie żuchwy (otwieranie i zamykanie ust), wysuwanie i cofanie oraz ruchy żucia na boki. Ma krążek stawowy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony (zawiasowo-ślizgowy), parzysty, z krążkiem stawowym"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa żuchwy",
          "dół żuchwowy i guzek stawowy kości skroniowej",
          "krążek stawowy dzieli jamę stawu na piętro górne i dolne"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło boczne stawu skroniowo-żuchwowego",
          "Więzadło rylcowo-żuchwowe",
          "Więzadło klinowo-żuchwowe",
          "Krążek stawowy stawu skroniowo-żuchwowego"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "opuszczanie i unoszenie żuchwy",
          "wysuwanie i cofanie",
          "ruchy żucia na boki"
        ]
      }
    ],
    "group": "Czaszka",
    "groupSlug": "czaszka",
    "subgroup": "16. Połączenia kości czaszki",
    "subgroupSlug": "rozdzial-16",
    "image": "/stawy/j-tmj__tmj_right.webp",
    "views": [
      {
        "image": "/stawy/j-tmj__tmj_right.webp",
        "ligaments": [
          "lig-laterale-tmj",
          "lig-stylomandibulare",
          "discus-articularis-tmj"
        ],
        "hotspots": {
          "lig-laterale-tmj": [
            53.8,
            63.6
          ],
          "lig-stylomandibulare": [
            54.7,
            78.3
          ],
          "discus-articularis-tmj": [
            52.1,
            61.0
          ]
        }
      },
      {
        "image": "/stawy/j-tmj__tmjmed_left.webp",
        "ligaments": [
          "lig-sphenomandibulare"
        ],
        "hotspots": {
          "lig-sphenomandibulare": [
            44.7,
            71.4
          ]
        }
      }
    ],
    "ligaments": [
      "lig-laterale-tmj",
      "lig-stylomandibulare",
      "lig-sphenomandibulare",
      "discus-articularis-tmj"
    ]
  },
  {
    "id": "j-atlantoax",
    "latin": "Articulatio atlantoaxialis",
    "polish": "Staw szczytowo-obrotowy",
    "info": "Umożliwia obrót głowy razem z kręgiem szczytowym wokół zęba kręgu obrotowego (ruch przeczenia).",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony, obrotowy (jednoosiowy)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw szczytowo-obrotowy pośrodkowy: ząb kręgu obrotowego z dołkiem zęba łuku przedniego kręgu szczytowego i więzadłem poprzecznym",
          "stawy szczytowo-obrotowe boczne: powierzchnie stawowe dolne kręgu szczytowego z górnymi kręgu obrotowego"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło poprzeczne kręgu szczytowego",
          "Więzadła skrzydłowate",
          "Więzadło wierzchołka zęba",
          "Więzadło krzyżowe kręgu szczytowego",
          "Błona szczytowo-potyliczna tylna",
          "Błona pokrywająca",
          "Błona szczytowo-potyliczna przednia"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "obrót głowy w prawo i w lewo"
        ]
      }
    ],
    "group": "Kręgosłup",
    "groupSlug": "kregoslup",
    "subgroup": "27-28. Połączenia kręgosłupa",
    "subgroupSlug": "rozdzial-27-28",
    "image": "/stawy/j-atlantoax__atlas_top.webp",
    "views": [
      {
        "image": "/stawy/j-atlantoax__atlas_top.webp",
        "ligaments": [
          "lig-transversum-atlantis"
        ],
        "hotspots": {
          "lig-transversum-atlantis": [
            50.0,
            42.0
          ]
        }
      },
      {
        "image": "/stawy/j-atlantoax__craniovert_back.webp",
        "ligaments": [
          "ligg-alaria",
          "lig-apicis-dentis",
          "lig-cruciforme-atlantis",
          "membrana-tectoria"
        ],
        "hotspots": {
          "ligg-alaria": [
            50.6,
            48.8
          ],
          "lig-apicis-dentis": [
            51.4,
            46.2
          ],
          "lig-cruciforme-atlantis": [
            50.9,
            57.4
          ],
          "membrana-tectoria": [
            50.6,
            55.0
          ]
        }
      },
      {
        "image": "/stawy/j-atlantoax__occatlas_back.webp",
        "ligaments": [
          "membrana-atlantooccipitalis-posterior"
        ],
        "hotspots": {
          "membrana-atlantooccipitalis-posterior": [
            50.0,
            71.0
          ]
        }
      },
      {
        "image": "/stawy/j-atlantoax__occatlas_front.webp",
        "ligaments": [
          "membrana-atlantooccipitalis-anterior"
        ],
        "hotspots": {
          "membrana-atlantooccipitalis-anterior": [
            50.0,
            65.6
          ]
        }
      }
    ],
    "ligaments": [
      "lig-transversum-atlantis",
      "ligg-alaria",
      "lig-apicis-dentis",
      "lig-cruciforme-atlantis",
      "membrana-atlantooccipitalis-posterior",
      "membrana-tectoria",
      "membrana-atlantooccipitalis-anterior"
    ]
  },
  {
    "id": "j-intervert",
    "latin": "Articulationes intervertebrales",
    "polish": "Połączenia międzykręgowe",
    "info": "Łączą trzony kręgów krążkami międzykręgowymi i więzadłami. Amortyzują obciążenia i pozwalają na zginanie, prostowanie, zginanie na boki i skręcanie kręgosłupa.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "połączenia chrzęstne trzonów i stawy międzywyrostkowe"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "trzony kręgów połączone krążkami międzykręgowymi (pierścień włóknisty i jądro miażdżyste)",
          "wyrostki stawowe połączone stawami międzywyrostkowymi (płaskimi)",
          "łuki i wyrostki połączone więzadłami"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło podłużne przednie",
          "Więzadło podłużne tylne",
          "Więzadła żółte",
          "Więzadła międzykolcowe",
          "Więzadło nadkolcowe",
          "Krążek międzykręgowy",
          "Więzadła międzypoprzeczne",
          "Więzadło karkowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zginanie i prostowanie",
          "zginanie na boki",
          "skręcanie"
        ]
      }
    ],
    "group": "Kręgosłup",
    "groupSlug": "kregoslup",
    "subgroup": "27-28. Połączenia kręgosłupa",
    "subgroupSlug": "rozdzial-27-28",
    "image": "/stawy/j-intervert__spine_right.webp",
    "views": [
      {
        "image": "/stawy/j-intervert__spine_right.webp",
        "ligaments": [
          "lig-longitudinale-anterius",
          "lig-longitudinale-posterius",
          "ligg-flava",
          "ligg-interspinalia",
          "lig-supraspinale",
          "discus-intervertebralis"
        ],
        "hotspots": {
          "lig-longitudinale-anterius": [
            75.5,
            47.7
          ],
          "lig-longitudinale-posterius": [
            52.8,
            49.8
          ],
          "ligg-flava": [
            41.5,
            57.4
          ],
          "ligg-interspinalia": [
            30.3,
            58.9
          ],
          "lig-supraspinale": [
            22.3,
            57.9
          ],
          "discus-intervertebralis": [
            68.2,
            48.8
          ]
        }
      },
      {
        "image": "/stawy/j-intervert__spinelat_right.webp",
        "ligaments": [
          "ligg-intertransversaria"
        ],
        "hotspots": {
          "ligg-intertransversaria": [
            44.6,
            45.2
          ]
        }
      },
      {
        "image": "/stawy/j-intervert__neck_right.webp",
        "ligaments": [
          "lig-nuchae"
        ],
        "hotspots": {
          "lig-nuchae": [
            32.3,
            66.7
          ]
        }
      }
    ],
    "ligaments": [
      "lig-longitudinale-anterius",
      "lig-longitudinale-posterius",
      "ligg-flava",
      "ligg-interspinalia",
      "lig-supraspinale",
      "discus-intervertebralis",
      "ligg-intertransversaria",
      "lig-nuchae"
    ]
  },
  {
    "id": "j-costovert",
    "latin": "Articulationes costovertebrales",
    "polish": "Stawy żebrowo-kręgowe",
    "info": "Łączą żebra z kręgami piersiowymi (staw głowy żebra i staw żebrowo-poprzeczny). Umożliwiają unoszenie i obniżanie żeber podczas oddychania.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie, czynnościowo sprzężone"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw głowy żebra: głowa żebra z dołkami żebrowymi trzonów dwóch sąsiednich kręgów",
          "staw żebrowo-poprzeczny: guzek żebra z dołkiem żebrowym wyrostka poprzecznego (żebra I-X)"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło promieniste głowy żebra",
          "Więzadło żebrowo-poprzeczne boczne",
          "Więzadło żebrowo-poprzeczne górne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "obrót żebra wokół osi szyjki: unoszenie i obniżanie żeber przy wdechu i wydechu"
        ]
      }
    ],
    "group": "Klatka piersiowa",
    "groupSlug": "klatka-piersiowa",
    "subgroup": "34. Połączenia stawowe klatki piersiowej",
    "subgroupSlug": "rozdzial-34",
    "image": "/stawy/j-costovert__costov_front.webp",
    "views": [
      {
        "image": "/stawy/j-costovert__costov_front.webp",
        "ligaments": [
          "lig-capitis-costae-radiatum"
        ],
        "hotspots": {
          "lig-capitis-costae-radiatum": [
            51.0,
            31.1
          ]
        }
      },
      {
        "image": "/stawy/j-costovert__costov_back.webp",
        "ligaments": [
          "lig-costotransversarium-laterale",
          "lig-costotransversarium-superius"
        ],
        "hotspots": {
          "lig-costotransversarium-laterale": [
            66.4,
            38.2
          ],
          "lig-costotransversarium-superius": [
            54.3,
            25.5
          ]
        }
      }
    ],
    "ligaments": [
      "lig-capitis-costae-radiatum",
      "lig-costotransversarium-laterale",
      "lig-costotransversarium-superius"
    ]
  },
  {
    "id": "j-sternocost",
    "latin": "Articulationes sternocostales",
    "polish": "Stawy mostkowo-żebrowe",
    "info": "Stawy między chrząstkami żeber II-VII a mostkiem (chrząstka I żebra łączy się z mostkiem chrząstkozrostem). Umożliwiają niewielkie ruchy żeber przy oddychaniu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie (żebra II-VII), chrząstkozrost (żebro I)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "chrząstki żebrowe II-VII z wcięciami żebrowymi mostka"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła mostkowo-żebrowe promieniste",
          "Więzadła żebrowo-mieczykowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe przy oddychaniu"
        ]
      }
    ],
    "group": "Klatka piersiowa",
    "groupSlug": "klatka-piersiowa",
    "subgroup": "34. Połączenia stawowe klatki piersiowej",
    "subgroupSlug": "rozdzial-34",
    "image": "/stawy/j-sternocost__sternum_front.webp",
    "views": [
      {
        "image": "/stawy/j-sternocost__sternum_front.webp",
        "ligaments": [
          "ligg-sternocostalia-radiata",
          "ligg-costoxiphoidea"
        ],
        "hotspots": {
          "ligg-sternocostalia-radiata": [
            50.0,
            35.7
          ],
          "ligg-costoxiphoidea": [
            50.0,
            62.4
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-sternocostalia-radiata",
      "ligg-costoxiphoidea"
    ]
  },
  {
    "id": "j-sternocl",
    "latin": "Articulatio sternoclavicularis",
    "polish": "Staw mostkowo-obojczykowy",
    "info": "Jedyne stawowe połączenie kończyny górnej z tułowiem, ma krążek stawowy. Umożliwia unoszenie i obniżanie, wysuwanie i cofanie barku oraz niewielki obrót obojczyka.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw siodełkowy, czynnościowo kulisty (dzięki krążkowi stawowemu)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "koniec mostkowy obojczyka",
          "wcięcie obojczykowe rękojeści mostka",
          "krążek stawowy"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło mostkowo-obojczykowe przednie",
          "Więzadło międzyobojczykowe",
          "Więzadło żebrowo-obojczykowe",
          "Więzadło mostkowo-obojczykowe tylne",
          "Krążek stawowy stawu mostkowo-obojczykowego"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "unoszenie i obniżanie barku",
          "wysuwanie i cofanie barku",
          "obrót obojczyka"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
    "subgroupSlug": "rozdzial-46",
    "image": "/stawy/j-sternocl__sterncl_front.webp",
    "views": [
      {
        "image": "/stawy/j-sternocl__sterncl_front.webp",
        "ligaments": [
          "lig-sternoclaviculare-anterius",
          "lig-interclaviculare",
          "lig-costoclaviculare",
          "discus-articularis-sternocl"
        ],
        "hotspots": {
          "lig-sternoclaviculare-anterius": [
            41.4,
            33.1
          ],
          "lig-interclaviculare": [
            49.7,
            30.1
          ],
          "lig-costoclaviculare": [
            31.9,
            38.3
          ],
          "discus-articularis-sternocl": [
            42.1,
            33.4
          ]
        }
      },
      {
        "image": "/stawy/j-sternocl__sterncl_back.webp",
        "ligaments": [
          "lig-sternoclaviculare-posterius"
        ],
        "hotspots": {
          "lig-sternoclaviculare-posterius": [
            59.3,
            41.3
          ]
        }
      }
    ],
    "ligaments": [
      "lig-sternoclaviculare-anterius",
      "lig-interclaviculare",
      "lig-costoclaviculare",
      "lig-sternoclaviculare-posterius",
      "discus-articularis-sternocl"
    ]
  },
  {
    "id": "j-acromiocl",
    "latin": "Articulatio acromioclavicularis",
    "polish": "Staw barkowo-obojczykowy",
    "info": "Łączy obojczyk z wyrostkiem barkowym łopatki. Umożliwia niewielkie ruchy ślizgowe i obrotowe łopatki względem obojczyka przy ruchach barku.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "koniec barkowy obojczyka",
          "powierzchnia stawowa wyrostka barkowego łopatki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło barkowo-obojczykowe",
          "Więzadło czworoboczne",
          "Więzadło stożkowate",
          "Więzadło poprzeczne górne łopatki"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe i obrotowe łopatki względem obojczyka"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
    "subgroupSlug": "rozdzial-46",
    "image": "/stawy/j-acromiocl__shoulder_front.webp",
    "views": [
      {
        "image": "/stawy/j-acromiocl__shoulder_front.webp",
        "ligaments": [
          "lig-acromioclaviculare",
          "lig-trapezoideum",
          "lig-conoideum"
        ],
        "hotspots": {
          "lig-acromioclaviculare": [
            40.3,
            7.3
          ],
          "lig-trapezoideum": [
            53.7,
            13.3
          ],
          "lig-conoideum": [
            61.1,
            14.5
          ]
        }
      },
      {
        "image": "/stawy/j-acromiocl__shoulder_top.webp",
        "ligaments": [
          "lig-transversum-scapulae-superius"
        ],
        "hotspots": {
          "lig-transversum-scapulae-superius": [
            56.8,
            60.5
          ]
        }
      }
    ],
    "ligaments": [
      "lig-acromioclaviculare",
      "lig-trapezoideum",
      "lig-conoideum",
      "lig-transversum-scapulae-superius"
    ]
  },
  {
    "id": "j-humeri",
    "latin": "Articulatio humeri",
    "polish": "Staw ramienny",
    "info": "Staw kulisty wolny, najbardziej ruchomy staw człowieka. Zgięcie i prostowanie, odwodzenie i przywodzenie, obrót do wewnątrz i na zewnątrz oraz ruch obwodzenia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty wolny, trójosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa kości ramiennej",
          "panewka łopatki pogłębiona obrąbkiem stawowym"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło kruczo-barkowe",
          "Więzadło kruczo-ramienne",
          "Więzadła obrąbkowo-ramienne",
          "Obrąbek panewki łopatki",
          "Więzadło poprzeczne kości ramiennej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "odwodzenie i przywodzenie",
          "obrót do wewnątrz i na zewnątrz",
          "ruch obwodzenia"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "47. Staw ramienny",
    "subgroupSlug": "rozdzial-47",
    "image": "/stawy/j-humeri__shoulder_front.webp",
    "views": [
      {
        "image": "/stawy/j-humeri__shoulder_front.webp",
        "ligaments": [
          "lig-coracoacromiale",
          "lig-coracohumerale",
          "ligg-glenohumeralia",
          "lig-transversum-humeri"
        ],
        "hotspots": {
          "lig-coracoacromiale": [
            41.0,
            15.4
          ],
          "lig-coracohumerale": [
            34.4,
            19.3
          ],
          "ligg-glenohumeralia": [
            39.4,
            30.0
          ],
          "lig-transversum-humeri": [
            29.2,
            27.0
          ]
        }
      },
      {
        "image": "/stawy/j-humeri__glen_right.webp",
        "ligaments": [
          "labrum-glenoidale"
        ],
        "hotspots": {
          "labrum-glenoidale": [
            59.1,
            25.0
          ]
        }
      }
    ],
    "ligaments": [
      "lig-coracoacromiale",
      "lig-coracohumerale",
      "ligg-glenohumeralia",
      "labrum-glenoidale",
      "lig-transversum-humeri"
    ]
  },
  {
    "id": "j-cubiti",
    "latin": "Articulatio cubiti",
    "polish": "Staw łokciowy",
    "info": "Staw złożony (ramienno-łokciowy, ramienno-promieniowy i promieniowo-łokciowy bliższy). Zgięcie i prostowanie przedramienia oraz udział w nawracaniu i odwracaniu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "ramienno-łokciowy: jednoosiowy, zawiasowy (bloczek k. ramiennej z wcięciem bloczkowym k. łokciowej)",
          "ramienno-promieniowy: kulisty, dwuosiowy (główka k. ramiennej z dołkiem stawowym głowy k. promieniowej)",
          "promieniowo-łokciowy bliższy: jednoosiowy, obrotowy (wcięcie promieniowe k. łokciowej i obwód stawowy głowy k. promieniowej otoczony więzadłem pierścieniowatym)"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło poboczne łokciowe",
          "Więzadło poboczne promieniowe",
          "Więzadło pierścieniowate (obrączkowate) kości promieniowej",
          "Więzadło czworokątne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrotowe: nawracanie i odwracanie"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "48-49. Staw łokciowy",
    "subgroupSlug": "rozdzial-48-49",
    "image": "/stawy/j-cubiti__elbow_front.webp",
    "views": [
      {
        "image": "/stawy/j-cubiti__elbow_front.webp",
        "ligaments": [
          "lig-collaterale-ulnare",
          "lig-collaterale-radiale",
          "lig-anulare-radii",
          "lig-quadratum"
        ],
        "hotspots": {
          "lig-collaterale-ulnare": [
            63.0,
            50.3
          ],
          "lig-collaterale-radiale": [
            37.0,
            50.0
          ],
          "lig-anulare-radii": [
            41.5,
            56.4
          ],
          "lig-quadratum": [
            43.9,
            60.2
          ]
        }
      }
    ],
    "ligaments": [
      "lig-collaterale-ulnare",
      "lig-collaterale-radiale",
      "lig-anulare-radii",
      "lig-quadratum"
    ]
  },
  {
    "id": "j-humeroul",
    "latin": "Articulatio humeroulnaris",
    "polish": "Staw ramienno-łokciowy",
    "info": "Staw zawiasowy. Główna część stawu łokciowego odpowiedzialna za zgięcie i prostowanie przedramienia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw zawiasowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "bloczek kości ramiennej",
          "wcięcie bloczkowe kości łokciowej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "48-49. Staw łokciowy",
    "subgroupSlug": "rozdzial-48-49",
    "image": "/anat/j-humeroul.webp",
    "views": [],
    "ligaments": []
  },
  {
    "id": "j-humerorad",
    "latin": "Articulatio humeroradialis",
    "polish": "Staw ramienno-promieniowy",
    "info": "Staw kulisty o ruchach ograniczonych przez kość łokciową. Uczestniczy w zgięciu i prostowaniu oraz w obrocie kości promieniowej.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty, dwuosiowy (ruchy ograniczone przez kość łokciową)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "główka kości ramiennej",
          "dołek stawowy głowy kości promieniowej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrót kości promieniowej"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "48-49. Staw łokciowy",
    "subgroupSlug": "rozdzial-48-49",
    "image": "/anat/j-humerorad.webp",
    "views": [],
    "ligaments": []
  },
  {
    "id": "j-radioulprox",
    "latin": "Articulatio radioulnaris proximalis",
    "polish": "Staw promieniowo-łokciowy bliższy",
    "info": "Staw obrotowy. Głowa kości promieniowej obraca się we wcięciu promieniowym kości łokciowej podczas nawracania i odwracania przedramienia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw obrotowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "obwód stawowy głowy kości promieniowej",
          "wcięcie promieniowe kości łokciowej",
          "więzadło pierścieniowate"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Błona międzykostna przedramienia"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "nawracanie i odwracanie (razem ze stawem promieniowo-łokciowym dalszym)"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "48-49. Staw łokciowy",
    "subgroupSlug": "rozdzial-48-49",
    "image": "/stawy/j-radioulprox__forearm_front.webp",
    "views": [
      {
        "image": "/stawy/j-radioulprox__forearm_front.webp",
        "ligaments": [
          "membrana-interossea-antebrachii"
        ],
        "hotspots": {
          "membrana-interossea-antebrachii": [
            47.0,
            61.6
          ]
        }
      }
    ],
    "ligaments": [
      "membrana-interossea-antebrachii"
    ]
  },
  {
    "id": "j-radiocarp",
    "latin": "Articulatio radiocarpea",
    "polish": "Staw promieniowo-nadgarstkowy",
    "info": "Staw eliptyczny. Zgięcie dłoniowe i grzbietowe ręki oraz odwodzenie promieniowe i łokciowe.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw eliptyczny, dwuosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia stawowa nadgarstkowa kości promieniowej i krążek stawowy",
          "szereg bliższy nadgarstka: kość łódeczkowata, księżycowata i trójgraniasta"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło poboczne promieniowe nadgarstka",
          "Więzadło poboczne łokciowe nadgarstka",
          "Więzadło promieniowo-nadgarstkowe dłoniowe",
          "Więzadło promieniowo-nadgarstkowe grzbietowe",
          "Troczek zginaczy (więzadło poprzeczne nadgarstka)",
          "Więzadło łokciowo-nadgarstkowe dłoniowe",
          "Więzadło promieniste nadgarstka",
          "Więzadło grochowato-haczykowe",
          "Więzadło grochowato-śródręczne",
          "Więzadła międzynadgarstkowe grzbietowe",
          "Więzadła nadgarstkowo-śródręczne grzbietowe",
          "Więzadła nadgarstkowo-śródręczne dłoniowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie dłoniowe i grzbietowe",
          "odwodzenie promieniowe i łokciowe",
          "ruch obwodzenia"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "50. Stawy ręki",
    "subgroupSlug": "rozdzial-50",
    "image": "/stawy/j-radiocarp__wrist_front.webp",
    "views": [
      {
        "image": "/stawy/j-radiocarp__wrist_front.webp",
        "ligaments": [
          "lig-collaterale-carpi-radiale",
          "lig-collaterale-carpi-ulnare",
          "lig-radiocarpale-palmare",
          "retinaculum-flexorum",
          "lig-ulnocarpale-palmare",
          "lig-carpi-radiatum",
          "lig-pisohamatum",
          "lig-pisometacarpale",
          "ligg-carpometacarpalia-palmaria"
        ],
        "hotspots": {
          "lig-collaterale-carpi-radiale": [
            37.9,
            57.1
          ],
          "lig-collaterale-carpi-ulnare": [
            68.6,
            57.4
          ],
          "lig-radiocarpale-palmare": [
            51.9,
            57.8
          ],
          "retinaculum-flexorum": [
            52.5,
            64.3
          ],
          "lig-ulnocarpale-palmare": [
            62.4,
            57.8
          ],
          "lig-carpi-radiatum": [
            54.5,
            65.6
          ],
          "lig-pisohamatum": [
            65.2,
            66.7
          ],
          "lig-pisometacarpale": [
            68.3,
            69.9
          ],
          "ligg-carpometacarpalia-palmaria": [
            50.3,
            74.6
          ]
        }
      },
      {
        "image": "/stawy/j-radiocarp__wrist_back.webp",
        "ligaments": [
          "lig-radiocarpale-dorsale",
          "ligg-intercarpalia-dorsalia",
          "ligg-carpometacarpalia-dorsalia"
        ],
        "hotspots": {
          "lig-radiocarpale-dorsale": [
            47.5,
            59.6
          ],
          "ligg-intercarpalia-dorsalia": [
            44.7,
            65.9
          ],
          "ligg-carpometacarpalia-dorsalia": [
            45.5,
            74.5
          ]
        }
      }
    ],
    "ligaments": [
      "lig-collaterale-carpi-radiale",
      "lig-collaterale-carpi-ulnare",
      "lig-radiocarpale-palmare",
      "lig-radiocarpale-dorsale",
      "retinaculum-flexorum",
      "lig-ulnocarpale-palmare",
      "lig-carpi-radiatum",
      "lig-pisohamatum",
      "lig-pisometacarpale",
      "ligg-intercarpalia-dorsalia",
      "ligg-carpometacarpalia-dorsalia",
      "ligg-carpometacarpalia-palmaria"
    ]
  },
  {
    "id": "j-radioulndist",
    "latin": "Articulatio radioulnaris distalis",
    "polish": "Staw promieniowo-łokciowy dalszy",
    "info": "Staw obrotowy. Kość promieniowa obraca się wokół głowy kości łokciowej przy nawracaniu i odwracaniu przedramienia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw obrotowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "obwód stawowy głowy kości łokciowej",
          "wcięcie łokciowe kości promieniowej",
          "krążek stawowy oddziela głowę kości łokciowej od nadgarstka"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło promieniowo-łokciowe dłoniowe",
          "Krążek stawowy (trójkątny)"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "nawracanie i odwracanie (razem ze stawem promieniowo-łokciowym bliższym)"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "50. Stawy ręki",
    "subgroupSlug": "rozdzial-50",
    "image": "/stawy/j-radioulndist__hand_front.webp",
    "views": [
      {
        "image": "/stawy/j-radioulndist__hand_front.webp",
        "ligaments": [
          "lig-radioulnare-palmare",
          "discus-articularis-radioulnaris"
        ],
        "hotspots": {
          "lig-radioulnare-palmare": [
            62.7,
            15.6
          ],
          "discus-articularis-radioulnaris": [
            66.3,
            18.1
          ]
        }
      }
    ],
    "ligaments": [
      "lig-radioulnare-palmare",
      "discus-articularis-radioulnaris"
    ]
  },
  {
    "id": "j-mcp",
    "latin": "Articulationes metacarpophalangeae",
    "polish": "Stawy śródręczno-paliczkowe",
    "info": "Stawy kuliste o ruchach ograniczonych przez więzadła. Zgięcie i prostowanie oraz odwodzenie i przywodzenie palców.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy kuliste, czynnościowo dwuosiowe (kciuk: zawiasowy)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowy kości śródręcza",
          "podstawy paliczków bliższych"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła poboczne stawów śródręczno-paliczkowych",
          "Więzadła dłoniowe (płytki dłoniowe)",
          "Więzadło poprzeczne głębokie śródręcza"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i prostowanie palców",
          "odwodzenie i przywodzenie palców"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "50. Stawy ręki",
    "subgroupSlug": "rozdzial-50",
    "image": "/stawy/j-mcp__hand_front.webp",
    "views": [
      {
        "image": "/stawy/j-mcp__hand_front.webp",
        "ligaments": [
          "ligg-collateralia-mcp",
          "ligg-palmaria-mcp",
          "lig-metacarpale-transversum-profundum"
        ],
        "hotspots": {
          "ligg-collateralia-mcp": [
            47.5,
            60.4
          ],
          "ligg-palmaria-mcp": [
            57.3,
            58.7
          ],
          "lig-metacarpale-transversum-profundum": [
            57.3,
            58.6
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-collateralia-mcp",
      "ligg-palmaria-mcp",
      "lig-metacarpale-transversum-profundum"
    ]
  },
  {
    "id": "j-ipm",
    "latin": "Articulationes interphalangeae manus",
    "polish": "Stawy międzypaliczkowe ręki",
    "info": "Stawy zawiasowe. Zgięcie i prostowanie paliczków.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy zawiasowe, jednoosiowe"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa paliczka bliższego lub środkowego",
          "podstawa paliczka położonego dalej"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła poboczne stawów międzypaliczkowych"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i prostowanie"
        ]
      }
    ],
    "group": "Kończyna górna",
    "groupSlug": "konczyna-gorna",
    "subgroup": "50. Stawy ręki",
    "subgroupSlug": "rozdzial-50",
    "image": "/stawy/j-ipm__hand_front.webp",
    "views": [
      {
        "image": "/stawy/j-ipm__hand_front.webp",
        "ligaments": [
          "ligg-collateralia-ipm"
        ],
        "hotspots": {
          "ligg-collateralia-ipm": [
            43.1,
            78.1
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-collateralia-ipm"
    ]
  },
  {
    "id": "pv-sacroil",
    "latin": "Articulatio sacroiliaca",
    "polish": "Staw krzyżowo-biodrowy",
    "info": "Staw płaski, prawie nieruchomy (półścisły). Przenosi ciężar tułowia z kręgosłupa na miednicę i kończyny dolne.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski, półścisły"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia uchowata kości krzyżowej",
          "powierzchnia uchowata kości biodrowej"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła krzyżowo-biodrowe przednie",
          "Więzadła krzyżowo-biodrowe tylne",
          "Więzadło biodrowo-lędźwiowe",
          "Więzadło krzyżowo-guzowe",
          "Więzadło krzyżowo-kolcowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "bardzo małe ruchy kiwania kości krzyżowej"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "54. Połączenia miednicy",
    "subgroupSlug": "rozdzial-54",
    "image": "/stawy/pv-sacroil__pelvis_front.webp",
    "views": [
      {
        "image": "/stawy/pv-sacroil__pelvis_front.webp",
        "ligaments": [
          "ligg-sacroiliaca-anteriora",
          "lig-iliolumbale"
        ],
        "hotspots": {
          "ligg-sacroiliaca-anteriora": [
            32.9,
            40.4
          ],
          "lig-iliolumbale": [
            32.8,
            29.8
          ]
        }
      },
      {
        "image": "/stawy/pv-sacroil__pelvis_back.webp",
        "ligaments": [
          "ligg-sacroiliaca-posteriora",
          "lig-sacrotuberale",
          "lig-sacrospinale"
        ],
        "hotspots": {
          "ligg-sacroiliaca-posteriora": [
            60.1,
            44.4
          ],
          "lig-sacrotuberale": [
            61.5,
            69.2
          ],
          "lig-sacrospinale": [
            59.3,
            67.2
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-sacroiliaca-anteriora",
      "ligg-sacroiliaca-posteriora",
      "lig-iliolumbale",
      "lig-sacrotuberale",
      "lig-sacrospinale"
    ]
  },
  {
    "id": "pv-symph",
    "latin": "Symphysis pubica",
    "polish": "Spojenie łonowe",
    "info": "Chrzęstne połączenie kości łonowych przez krążek międzyłonowy. Zapewnia stabilność obręczy miednicznej i pozwala na minimalne ruchy, nieco większe podczas porodu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "spojenie (połączenie chrzęstne)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnie spojeniowe kości łonowych",
          "krążek międzyłonowy"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło łonowe górne",
          "Więzadło pachwinowe",
          "Więzadło łonowe dolne (łukowate)",
          "Błona zasłonowa",
          "Krążek międzyłonowy"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "minimalne przesunięcia, większe w czasie porodu"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "54. Połączenia miednicy",
    "subgroupSlug": "rozdzial-54",
    "image": "/stawy/pv-symph__pelvis_front.webp",
    "views": [
      {
        "image": "/stawy/pv-symph__pelvis_front.webp",
        "ligaments": [
          "lig-pubicum-superius",
          "lig-inguinale",
          "lig-pubicum-inferius",
          "membrana-obturatoria",
          "discus-interpubicus"
        ],
        "hotspots": {
          "lig-pubicum-superius": [
            50.0,
            69.4
          ],
          "lig-inguinale": [
            30.0,
            65.5
          ],
          "lig-pubicum-inferius": [
            50.0,
            76.5
          ],
          "membrana-obturatoria": [
            38.0,
            77.3
          ],
          "discus-interpubicus": [
            50.0,
            73.3
          ]
        }
      }
    ],
    "ligaments": [
      "lig-pubicum-superius",
      "lig-inguinale",
      "lig-pubicum-inferius",
      "membrana-obturatoria",
      "discus-interpubicus"
    ]
  },
  {
    "id": "j-coxae",
    "latin": "Articulatio coxae",
    "polish": "Staw biodrowy",
    "info": "Staw kulisty panewkowy. Zgięcie i prostowanie, odwodzenie i przywodzenie, obrót uda do wewnątrz i na zewnątrz. Głęboka panewka i mocne więzadła dają dużą stabilność przy przenoszeniu ciężaru ciała.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty panewkowy, trójosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa kości udowej",
          "panewka kości miednicznej (powierzchnia księżycowata) pogłębiona obrąbkiem panewki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło biodrowo-udowe",
          "Więzadło łonowo-udowe",
          "Więzadło kulszowo-udowe",
          "Więzadło głowy kości udowej",
          "Obrąbek panewki",
          "Więzadło poprzeczne panewki",
          "Warstwa okrężna"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "odwodzenie i przywodzenie",
          "obrót do wewnątrz i na zewnątrz",
          "ruch obwodzenia"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "58-59. Staw biodrowy",
    "subgroupSlug": "rozdzial-58-59",
    "image": "/stawy/j-coxae__hip_front.webp",
    "views": [
      {
        "image": "/stawy/j-coxae__hip_front.webp",
        "ligaments": [
          "lig-iliofemorale",
          "lig-pubofemorale",
          "zona-orbicularis"
        ],
        "hotspots": {
          "lig-iliofemorale": [
            40.7,
            50.8
          ],
          "lig-pubofemorale": [
            49.1,
            56.8
          ],
          "zona-orbicularis": [
            40.0,
            53.0
          ]
        }
      },
      {
        "image": "/stawy/j-coxae__hip_back.webp",
        "ligaments": [
          "lig-ischiofemorale"
        ],
        "hotspots": {
          "lig-ischiofemorale": [
            55.0,
            52.5
          ]
        }
      },
      {
        "image": "/stawy/j-coxae__hipopen_front.webp",
        "ligaments": [
          "lig-capitis-femoris"
        ],
        "hotspots": {
          "lig-capitis-femoris": [
            51.4,
            49.6
          ]
        }
      },
      {
        "image": "/stawy/j-coxae__acet_right.webp",
        "ligaments": [
          "labrum-acetabuli",
          "lig-transversum-acetabuli"
        ],
        "hotspots": {
          "labrum-acetabuli": [
            54.9,
            66.4
          ],
          "lig-transversum-acetabuli": [
            54.9,
            74.2
          ]
        }
      }
    ],
    "ligaments": [
      "lig-iliofemorale",
      "lig-pubofemorale",
      "lig-ischiofemorale",
      "lig-capitis-femoris",
      "labrum-acetabuli",
      "lig-transversum-acetabuli",
      "zona-orbicularis"
    ]
  },
  {
    "id": "j-genus",
    "latin": "Articulatio genus",
    "polish": "Staw kolanowy",
    "info": "Największy staw człowieka, staw złożony. Zgięcie i prostowanie podudzia, a przy zgiętym kolanie niewielki obrót. Łąkotki i więzadła zapewniają stabilność.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony, zawiasowo-obrotowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "udowo-piszczelowy: kłykcie kości udowej z kłykciami kości piszczelowej, między nimi łąkotki",
          "udowo-rzepkowy: powierzchnia rzepkowa kości udowej z powierzchnią stawową rzepki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło rzepki",
          "Więzadło poboczne piszczelowe",
          "Więzadło poboczne strzałkowe",
          "Więzadło krzyżowe przednie",
          "Więzadło krzyżowe tylne",
          "Łąkotka przyśrodkowa",
          "Łąkotka boczna",
          "Więzadło podkolanowe skośne",
          "Troczek przyśrodkowy rzepki",
          "Troczek boczny rzepki",
          "Więzadło poprzeczne kolana",
          "Więzadło podkolanowe łukowate",
          "Więzadło łąkotkowo-udowe tylne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrót do wewnątrz i na zewnątrz przy zgiętym kolanie"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "60-61. Staw kolanowy",
    "subgroupSlug": "rozdzial-60-61",
    "image": "/stawy/j-genus__knee_front.webp",
    "views": [
      {
        "image": "/stawy/j-genus__knee_front.webp",
        "ligaments": [
          "lig-patellae",
          "lig-collaterale-tibiale",
          "lig-collaterale-fibulare",
          "retinaculum-patellae-mediale",
          "retinaculum-patellae-laterale"
        ],
        "hotspots": {
          "lig-patellae": [
            47.9,
            57.9
          ],
          "lig-collaterale-tibiale": [
            63.3,
            50.2
          ],
          "lig-collaterale-fibulare": [
            35.1,
            46.9
          ],
          "retinaculum-patellae-mediale": [
            58.4,
            49.1
          ],
          "retinaculum-patellae-laterale": [
            38.3,
            49.7
          ]
        }
      },
      {
        "image": "/stawy/j-genus__knee_back.webp",
        "ligaments": [
          "lig-cruciatum-anterius",
          "lig-cruciatum-posterius",
          "lig-popliteum-obliquum",
          "lig-popliteum-arcuatum",
          "lig-meniscofemorale-posterius"
        ],
        "hotspots": {
          "lig-cruciatum-anterius": [
            49.8,
            45.3
          ],
          "lig-cruciatum-posterius": [
            48.1,
            46.3
          ],
          "lig-popliteum-obliquum": [
            50.0,
            47.5
          ],
          "lig-popliteum-arcuatum": [
            59.6,
            53.1
          ],
          "lig-meniscofemorale-posterius": [
            50.7,
            46.0
          ]
        }
      },
      {
        "image": "/stawy/j-genus__tibtop_top.webp",
        "ligaments": [
          "meniscus-medialis",
          "meniscus-lateralis",
          "lig-transversum-genus"
        ],
        "hotspots": {
          "meniscus-medialis": [
            23.8,
            53.7
          ],
          "meniscus-lateralis": [
            67.4,
            51.6
          ],
          "lig-transversum-genus": [
            45.4,
            32.0
          ]
        }
      }
    ],
    "ligaments": [
      "lig-patellae",
      "lig-collaterale-tibiale",
      "lig-collaterale-fibulare",
      "lig-cruciatum-anterius",
      "lig-cruciatum-posterius",
      "meniscus-medialis",
      "meniscus-lateralis",
      "lig-popliteum-obliquum",
      "retinaculum-patellae-mediale",
      "retinaculum-patellae-laterale",
      "lig-transversum-genus",
      "lig-popliteum-arcuatum",
      "lig-meniscofemorale-posterius"
    ]
  },
  {
    "id": "j-femoropat",
    "latin": "Articulatio femoropatellaris",
    "polish": "Staw udowo-rzepkowy",
    "info": "Rzepka ślizga się po powierzchni rzepkowej kości udowej. Zwiększa ramię działania mięśnia czworogłowego uda przy prostowaniu kolana.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "część stawu kolanowego"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia rzepkowa kości udowej",
          "powierzchnia stawowa rzepki"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "ślizganie się rzepki w górę i w dół przy prostowaniu i zginaniu kolana"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "60-61. Staw kolanowy",
    "subgroupSlug": "rozdzial-60-61",
    "image": "/anat/j-femoropat.webp",
    "views": [],
    "ligaments": []
  },
  {
    "id": "j-tibiofib",
    "latin": "Articulatio tibiofibularis",
    "polish": "Staw piszczelowo-strzałkowy",
    "info": "Staw płaski. Umożliwia niewielkie ruchy strzałki przy ruchach w stawie skokowym.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia stawowa strzałkowa kości piszczelowej",
          "powierzchnia stawowa głowy strzałki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło głowy strzałki przednie",
          "Błona międzykostna goleni"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe strzałki"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "60-61. Staw kolanowy",
    "subgroupSlug": "rozdzial-60-61",
    "image": "/stawy/j-tibiofib__knee_front.webp",
    "views": [
      {
        "image": "/stawy/j-tibiofib__knee_front.webp",
        "ligaments": [
          "lig-capitis-fibulae-anterius"
        ],
        "hotspots": {
          "lig-capitis-fibulae-anterius": [
            36.3,
            55.3
          ]
        }
      },
      {
        "image": "/stawy/j-tibiofib__leg_front.webp",
        "ligaments": [
          "membrana-interossea-cruris"
        ],
        "hotspots": {
          "membrana-interossea-cruris": [
            46.3,
            52.9
          ]
        }
      }
    ],
    "ligaments": [
      "lig-capitis-fibulae-anterius",
      "membrana-interossea-cruris"
    ]
  },
  {
    "id": "j-talocrur",
    "latin": "Articulatio talocruralis",
    "polish": "Staw skokowy górny",
    "info": "Staw zawiasowy. Zgięcie grzbietowe i podeszwowe stopy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw zawiasowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "bloczek kości skokowej",
          "widełki stawu: powierzchnia stawowa dolna kości piszczelowej, kostka przyśrodkowa i kostka boczna"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło skokowo-strzałkowe przednie",
          "Więzadło skokowo-strzałkowe tylne",
          "Więzadło piętowo-strzałkowe",
          "Więzadło trójgraniaste (przyśrodkowe)",
          "Więzadło piszczelowo-strzałkowe przednie",
          "Więzadło piszczelowo-strzałkowe tylne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie grzbietowe i podeszwowe"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "62. Stawy stopy",
    "subgroupSlug": "rozdzial-62",
    "image": "/stawy/j-talocrur__ankle_right.webp",
    "views": [
      {
        "image": "/stawy/j-talocrur__ankle_right.webp",
        "ligaments": [
          "lig-talofibulare-anterius",
          "lig-talofibulare-posterius",
          "lig-calcaneofibulare",
          "lig-tibiofibulare-anterius",
          "lig-tibiofibulare-posterius"
        ],
        "hotspots": {
          "lig-talofibulare-anterius": [
            33.6,
            61.2
          ],
          "lig-talofibulare-posterius": [
            16.8,
            68.6
          ],
          "lig-calcaneofibulare": [
            23.9,
            73.9
          ],
          "lig-tibiofibulare-anterius": [
            33.3,
            52.5
          ],
          "lig-tibiofibulare-posterius": [
            23.0,
            51.9
          ]
        }
      },
      {
        "image": "/stawy/j-talocrur__ankle_left.webp",
        "ligaments": [
          "lig-deltoideum"
        ],
        "hotspots": {
          "lig-deltoideum": [
            63.3,
            61.9
          ]
        }
      }
    ],
    "ligaments": [
      "lig-talofibulare-anterius",
      "lig-talofibulare-posterius",
      "lig-calcaneofibulare",
      "lig-deltoideum",
      "lig-tibiofibulare-anterius",
      "lig-tibiofibulare-posterius"
    ]
  },
  {
    "id": "j-subtal",
    "latin": "Articulatio subtalaris",
    "polish": "Staw skokowy dolny (skokowo-piętowy)",
    "info": "Razem ze stawem skokowo-piętowo-łódkowym umożliwia odwracanie i nawracanie stopy (inwersję i ewersję).",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw walcowaty"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "tylna powierzchnia stawowa piętowa kości skokowej",
          "tylna powierzchnia stawowa skokowa kości piętowej"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło skokowo-piętowe międzykostne",
          "Więzadło skokowo-piętowe boczne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "odwracanie i nawracanie stopy (inwersja i ewersja)"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "62. Stawy stopy",
    "subgroupSlug": "rozdzial-62",
    "image": "/stawy/j-subtal__ankle_right.webp",
    "views": [
      {
        "image": "/stawy/j-subtal__ankle_right.webp",
        "ligaments": [
          "lig-talocalcaneum-interosseum",
          "lig-talocalcaneum-laterale"
        ],
        "hotspots": {
          "lig-talocalcaneum-interosseum": [
            33.3,
            68.3
          ],
          "lig-talocalcaneum-laterale": [
            29.5,
            70.7
          ]
        }
      }
    ],
    "ligaments": [
      "lig-talocalcaneum-interosseum",
      "lig-talocalcaneum-laterale"
    ]
  },
  {
    "id": "j-chopart",
    "latin": "Articulatio tarsi transversa",
    "polish": "Staw poprzeczny stępu (Choparta)",
    "info": "Uczestniczy w odwracaniu i nawracaniu stopy oraz w dopasowaniu stopy do podłoża.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw skokowo-łódkowy: głowa kości skokowej z kością łódkowatą",
          "staw piętowo-sześcienny: kość piętowa z kością sześcienną"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło rozdwojone",
          "Więzadło piętowo-łódkowe podeszwowe (sprężynowe)",
          "Więzadło skokowo-łódkowe",
          "Więzadło piętowo-sześcienne podeszwowe (krótkie podeszwowe)",
          "Więzadło piętowo-sześcienne grzbietowe",
          "Więzadła klinowo-łódkowe grzbietowe",
          "Więzadło podeszwowe długie"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "udział w odwracaniu i nawracaniu stopy"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "62. Stawy stopy",
    "subgroupSlug": "rozdzial-62",
    "image": "/stawy/j-chopart__ankle_right.webp",
    "views": [
      {
        "image": "/stawy/j-chopart__ankle_right.webp",
        "ligaments": [
          "lig-bifurcatum",
          "lig-calcaneocuboideum-dorsale"
        ],
        "hotspots": {
          "lig-bifurcatum": [
            39.5,
            70.0
          ],
          "lig-calcaneocuboideum-dorsale": [
            42.9,
            73.3
          ]
        }
      },
      {
        "image": "/stawy/j-chopart__ankle_left.webp",
        "ligaments": [
          "lig-calcaneonaviculare-plantare",
          "lig-talonaviculare"
        ],
        "hotspots": {
          "lig-calcaneonaviculare-plantare": [
            59.1,
            69.2
          ],
          "lig-talonaviculare": [
            55.0,
            61.8
          ]
        }
      },
      {
        "image": "/stawy/j-chopart__forefoot_bottom.webp",
        "ligaments": [
          "lig-calcaneocuboideum-plantare"
        ],
        "hotspots": {
          "lig-calcaneocuboideum-plantare": [
            56.2,
            68.6
          ]
        }
      },
      {
        "image": "/stawy/j-chopart__forefoot_top.webp",
        "ligaments": [
          "ligg-cuneonavicularia-dorsalia"
        ],
        "hotspots": {
          "ligg-cuneonavicularia-dorsalia": [
            37.3,
            56.5
          ]
        }
      },
      {
        "image": "/stawy/j-chopart__ankle_bottom.webp",
        "ligaments": [
          "lig-plantare-longum"
        ],
        "hotspots": {
          "lig-plantare-longum": [
            55.3,
            57.8
          ]
        }
      }
    ],
    "ligaments": [
      "lig-bifurcatum",
      "lig-calcaneonaviculare-plantare",
      "lig-talonaviculare",
      "lig-calcaneocuboideum-plantare",
      "lig-calcaneocuboideum-dorsale",
      "ligg-cuneonavicularia-dorsalia",
      "lig-plantare-longum"
    ]
  },
  {
    "id": "j-mtp",
    "latin": "Articulationes metatarsophalangeae",
    "polish": "Stawy śródstopno-paliczkowe",
    "info": "Stawy kuliste o ograniczonych ruchach. Zgięcie podeszwowe i grzbietowe palców oraz niewielkie odwodzenie i przywodzenie.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy kuliste, czynnościowo dwuosiowe"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowy kości śródstopia",
          "podstawy paliczków bliższych"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła poboczne stawów śródstopno-paliczkowych",
          "Więzadło poprzeczne głębokie śródstopia"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie podeszwowe i grzbietowe palców",
          "niewielkie odwodzenie i przywodzenie"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "62. Stawy stopy",
    "subgroupSlug": "rozdzial-62",
    "image": "/stawy/j-mtp__forefoot_top.webp",
    "views": [
      {
        "image": "/stawy/j-mtp__forefoot_top.webp",
        "ligaments": [
          "ligg-collateralia-mtp"
        ],
        "hotspots": {
          "ligg-collateralia-mtp": [
            44.2,
            25.0
          ]
        }
      },
      {
        "image": "/stawy/j-mtp__forefoot_bottom.webp",
        "ligaments": [
          "lig-metatarsale-transversum-profundum"
        ],
        "hotspots": {
          "lig-metatarsale-transversum-profundum": [
            41.6,
            33.5
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-collateralia-mtp",
      "lig-metatarsale-transversum-profundum"
    ]
  },
  {
    "id": "j-lisfranc",
    "latin": "Articulationes tarsometatarsales",
    "polish": "Stawy stępowo-śródstopne (Lisfranca)",
    "info": "Mało ruchome stawy. Zapewniają sztywność i sprężystość przedniej części stopy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie, mało ruchome"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "kości klinowate i kość sześcienna z podstawami kości śródstopia I-V"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła stępowo-śródstopne grzbietowe",
          "Więzadło Lisfranca (klinowo-śródstopne międzykostne)",
          "Więzadła stępowo-śródstopne podeszwowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe"
        ]
      }
    ],
    "group": "Kończyna dolna",
    "groupSlug": "konczyna-dolna",
    "subgroup": "62. Stawy stopy",
    "subgroupSlug": "rozdzial-62",
    "image": "/stawy/j-lisfranc__ankle_top.webp",
    "views": [
      {
        "image": "/stawy/j-lisfranc__ankle_top.webp",
        "ligaments": [
          "ligg-tarsometatarsalia-dorsalia"
        ],
        "hotspots": {
          "ligg-tarsometatarsalia-dorsalia": [
            50.5,
            37.3
          ]
        }
      },
      {
        "image": "/stawy/j-lisfranc__forefoot_top.webp",
        "ligaments": [
          "lig-lisfranci"
        ],
        "hotspots": {
          "lig-lisfranci": [
            39.5,
            53.1
          ]
        }
      },
      {
        "image": "/stawy/j-lisfranc__forefoot_bottom.webp",
        "ligaments": [
          "ligg-tarsometatarsalia-plantaria"
        ],
        "hotspots": {
          "ligg-tarsometatarsalia-plantaria": [
            55.6,
            57.4
          ]
        }
      }
    ],
    "ligaments": [
      "ligg-tarsometatarsalia-dorsalia",
      "lig-lisfranci",
      "ligg-tarsometatarsalia-plantaria"
    ]
  }
];

export const LIGAMENTS: Ligament[] = [
  {
    "id": "lig-laterale-tmj",
    "jointId": "j-tmj",
    "latin": "Ligamentum laterale",
    "polish": "Więzadło boczne stawu skroniowo-żuchwowego",
    "info": "Wzmacnia torebkę stawu od boku i ogranicza nadmierne przesunięcie żuchwy do tyłu i w dół.",
    "image": "/stawy/lig-laterale-tmj.webp"
  },
  {
    "id": "lig-stylomandibulare",
    "jointId": "j-tmj",
    "latin": "Ligamentum stylomandibulare",
    "polish": "Więzadło rylcowo-żuchwowe",
    "info": "Biegnie od wyrostka rylcowatego do kąta żuchwy. Ogranicza nadmierne wysuwanie żuchwy do przodu.",
    "image": "/stawy/lig-stylomandibulare.webp"
  },
  {
    "id": "lig-sphenomandibulare",
    "jointId": "j-tmj",
    "latin": "Ligamentum sphenomandibulare",
    "polish": "Więzadło klinowo-żuchwowe",
    "info": "Biegnie po stronie przyśrodkowej od kolca kości klinowej do języczka żuchwy. Podtrzymuje żuchwę i ogranicza jej nadmierne opuszczanie.",
    "image": "/stawy/lig-sphenomandibulare.webp"
  },
  {
    "id": "discus-articularis-tmj",
    "jointId": "j-tmj",
    "latin": "Discus articularis",
    "polish": "Krążek stawowy stawu skroniowo-żuchwowego",
    "info": "Chrząstka włóknista między głową żuchwy a dołem żuchwowym. Dzieli staw na dwa piętra, wyrównuje niezgodność powierzchni i przesuwa się do przodu przy otwieraniu ust.",
    "image": "/stawy/discus-articularis-tmj.webp"
  },
  {
    "id": "lig-transversum-atlantis",
    "jointId": "j-atlantoax",
    "latin": "Ligamentum transversum atlantis",
    "polish": "Więzadło poprzeczne kręgu szczytowego",
    "info": "Przytrzymuje ząb kręgu obrotowego przy łuku przednim kręgu szczytowego. Chroni rdzeń kręgowy przed uciśnięciem przez ząb.",
    "image": "/stawy/lig-transversum-atlantis.webp"
  },
  {
    "id": "ligg-alaria",
    "jointId": "j-atlantoax",
    "latin": "Ligamenta alaria",
    "polish": "Więzadła skrzydłowate",
    "info": "Biegną od zęba kręgu obrotowego do kłykci kości potylicznej. Ograniczają nadmierny obrót głowy i zginanie na boki.",
    "image": "/stawy/ligg-alaria.webp"
  },
  {
    "id": "lig-apicis-dentis",
    "jointId": "j-atlantoax",
    "latin": "Ligamentum apicis dentis",
    "polish": "Więzadło wierzchołka zęba",
    "info": "Łączy wierzchołek zęba kręgu obrotowego z przednim brzegiem otworu wielkiego. Ma małe znaczenie mechaniczne.",
    "image": "/stawy/lig-apicis-dentis.webp"
  },
  {
    "id": "lig-cruciforme-atlantis",
    "jointId": "j-atlantoax",
    "latin": "Ligamentum cruciforme atlantis",
    "polish": "Więzadło krzyżowe kręgu szczytowego",
    "info": "Składa się z więzadła poprzecznego i pęczków podłużnych biegnących do kości potylicznej i trzonu kręgu obrotowego. Utrzymuje ząb na miejscu i chroni rdzeń kręgowy.",
    "image": "/stawy/lig-cruciforme-atlantis.webp"
  },
  {
    "id": "membrana-atlantooccipitalis-posterior",
    "jointId": "j-atlantoax",
    "latin": "Membrana atlantooccipitalis posterior",
    "polish": "Błona szczytowo-potyliczna tylna",
    "info": "Łączy łuk tylny kręgu szczytowego z tylnym brzegiem otworu wielkiego i zamyka od tyłu przestrzeń między czaszką a kręgiem szczytowym. Przebija ją tętnica kręgowa.",
    "image": "/stawy/membrana-atlantooccipitalis-posterior.webp"
  },
  {
    "id": "membrana-tectoria",
    "jointId": "j-atlantoax",
    "latin": "Membrana tectoria",
    "polish": "Błona pokrywająca",
    "info": "Przedłużenie więzadła podłużnego tylnego od trzonu kręgu obrotowego do kości potylicznej. Pokrywa od tyłu ząb i jego więzadła, ogranicza zginanie głowy.",
    "image": "/stawy/membrana-tectoria.webp"
  },
  {
    "id": "membrana-atlantooccipitalis-anterior",
    "jointId": "j-atlantoax",
    "latin": "Membrana atlantooccipitalis anterior",
    "polish": "Błona szczytowo-potyliczna przednia",
    "info": "Łączy łuk przedni kręgu szczytowego z przednim brzegiem otworu wielkiego. Ogranicza odginanie głowy do tyłu.",
    "image": "/stawy/membrana-atlantooccipitalis-anterior.webp"
  },
  {
    "id": "lig-longitudinale-anterius",
    "jointId": "j-intervert",
    "latin": "Ligamentum longitudinale anterius",
    "polish": "Więzadło podłużne przednie",
    "info": "Biegnie po przedniej powierzchni trzonów kręgów. Ogranicza nadmierne prostowanie kręgosłupa.",
    "image": "/stawy/lig-longitudinale-anterius.webp"
  },
  {
    "id": "lig-longitudinale-posterius",
    "jointId": "j-intervert",
    "latin": "Ligamentum longitudinale posterius",
    "polish": "Więzadło podłużne tylne",
    "info": "Biegnie po tylnej powierzchni trzonów, w kanale kręgowym. Ogranicza nadmierne zginanie i chroni przed przemieszczeniem krążka do tyłu.",
    "image": "/stawy/lig-longitudinale-posterius.webp"
  },
  {
    "id": "ligg-flava",
    "jointId": "j-intervert",
    "latin": "Ligamenta flava",
    "polish": "Więzadła żółte",
    "info": "Łączą blaszki łuków sąsiednich kręgów. Są sprężyste, ograniczają zginanie i pomagają w powrocie kręgosłupa do wyprostu.",
    "image": "/stawy/ligg-flava.webp"
  },
  {
    "id": "ligg-interspinalia",
    "jointId": "j-intervert",
    "latin": "Ligamenta interspinalia",
    "polish": "Więzadła międzykolcowe",
    "info": "Łączą sąsiednie wyrostki kolczyste. Ograniczają zginanie kręgosłupa.",
    "image": "/stawy/ligg-interspinalia.webp"
  },
  {
    "id": "lig-supraspinale",
    "jointId": "j-intervert",
    "latin": "Ligamentum supraspinale",
    "polish": "Więzadło nadkolcowe",
    "info": "Biegnie po szczytach wyrostków kolczystych. Ogranicza nadmierne zginanie kręgosłupa.",
    "image": "/stawy/lig-supraspinale.webp"
  },
  {
    "id": "discus-intervertebralis",
    "jointId": "j-intervert",
    "latin": "Discus intervertebralis",
    "polish": "Krążek międzykręgowy",
    "info": "Łączy trzony sąsiednich kręgów. Amortyzuje wstrząsy, rozkłada obciążenia i umożliwia ruchy między kręgami.",
    "image": "/stawy/discus-intervertebralis.webp"
  },
  {
    "id": "ligg-intertransversaria",
    "jointId": "j-intervert",
    "latin": "Ligamenta intertransversaria",
    "polish": "Więzadła międzypoprzeczne",
    "info": "Łączą sąsiednie wyrostki poprzeczne. Ograniczają zginanie kręgosłupa w bok przeciwny.",
    "image": "/stawy/ligg-intertransversaria.webp"
  },
  {
    "id": "lig-nuchae",
    "jointId": "j-intervert",
    "latin": "Ligamentum nuchae",
    "polish": "Więzadło karkowe",
    "info": "Przedłużenie więzadła nadkolcowego w odcinku szyjnym, od guzowatości potylicznej zewnętrznej do wyrostka kolczystego C7. Ogranicza zginanie szyi i jest miejscem przyczepu mięśni karku.",
    "image": "/stawy/lig-nuchae.webp"
  },
  {
    "id": "lig-capitis-costae-radiatum",
    "jointId": "j-costovert",
    "latin": "Ligamentum capitis costae radiatum",
    "polish": "Więzadło promieniste głowy żebra",
    "info": "Łączy głowę żebra z trzonami dwóch sąsiednich kręgów i krążkiem międzykręgowym. Wzmacnia staw głowy żebra.",
    "image": "/stawy/lig-capitis-costae-radiatum.webp"
  },
  {
    "id": "lig-costotransversarium-laterale",
    "jointId": "j-costovert",
    "latin": "Ligamentum costotransversarium laterale",
    "polish": "Więzadło żebrowo-poprzeczne boczne",
    "info": "Łączy guzek żebra ze szczytem wyrostka poprzecznego. Wzmacnia staw żebrowo-poprzeczny.",
    "image": "/stawy/lig-costotransversarium-laterale.webp"
  },
  {
    "id": "lig-costotransversarium-superius",
    "jointId": "j-costovert",
    "latin": "Ligamentum costotransversarium superius",
    "polish": "Więzadło żebrowo-poprzeczne górne",
    "info": "Biegnie od szyjki żebra do wyrostka poprzecznego kręgu leżącego wyżej. Stabilizuje żebro przy kręgosłupie.",
    "image": "/stawy/lig-costotransversarium-superius.webp"
  },
  {
    "id": "ligg-sternocostalia-radiata",
    "jointId": "j-sternocost",
    "latin": "Ligamenta sternocostalia radiata",
    "polish": "Więzadła mostkowo-żebrowe promieniste",
    "info": "Rozchodzą się wachlarzowato od końców chrząstek żebrowych na przednią powierzchnię mostka. Wzmacniają stawy mostkowo-żebrowe.",
    "image": "/stawy/ligg-sternocostalia-radiata.webp"
  },
  {
    "id": "ligg-costoxiphoidea",
    "jointId": "j-sternocost",
    "latin": "Ligamenta costoxiphoidea",
    "polish": "Więzadła żebrowo-mieczykowe",
    "info": "Łączą chrząstkę żebra VII z wyrostkiem mieczykowatym. Stabilizują wyrostek mieczykowaty.",
    "image": "/stawy/ligg-costoxiphoidea.webp"
  },
  {
    "id": "lig-sternoclaviculare-anterius",
    "jointId": "j-sternocl",
    "latin": "Ligamentum sternoclaviculare anterius",
    "polish": "Więzadło mostkowo-obojczykowe przednie",
    "info": "Wzmacnia torebkę stawu od przodu i ogranicza przesunięcie obojczyka do przodu.",
    "image": "/stawy/lig-sternoclaviculare-anterius.webp"
  },
  {
    "id": "lig-interclaviculare",
    "jointId": "j-sternocl",
    "latin": "Ligamentum interclaviculare",
    "polish": "Więzadło międzyobojczykowe",
    "info": "Łączy końce mostkowe obu obojczyków ponad wcięciem szyjnym. Ogranicza nadmierne obniżanie barku.",
    "image": "/stawy/lig-interclaviculare.webp"
  },
  {
    "id": "lig-costoclaviculare",
    "jointId": "j-sternocl",
    "latin": "Ligamentum costoclaviculare",
    "polish": "Więzadło żebrowo-obojczykowe",
    "info": "Łączy obojczyk z pierwszym żebrem. Najsilniejsze więzadło tego stawu, ogranicza unoszenie obojczyka.",
    "image": "/stawy/lig-costoclaviculare.webp"
  },
  {
    "id": "lig-sternoclaviculare-posterius",
    "jointId": "j-sternocl",
    "latin": "Ligamentum sternoclaviculare posterius",
    "polish": "Więzadło mostkowo-obojczykowe tylne",
    "info": "Wzmacnia torebkę stawu od tyłu i ogranicza przesunięcie obojczyka do tyłu.",
    "image": "/stawy/lig-sternoclaviculare-posterius.webp"
  },
  {
    "id": "discus-articularis-sternocl",
    "jointId": "j-sternocl",
    "latin": "Discus articularis",
    "polish": "Krążek stawowy stawu mostkowo-obojczykowego",
    "info": "Dzieli staw na dwie komory i wyrównuje niezgodność powierzchni stawowych. Amortyzuje siły przenoszone z kończyny górnej na mostek.",
    "image": "/stawy/discus-articularis-sternocl.webp"
  },
  {
    "id": "lig-acromioclaviculare",
    "jointId": "j-acromiocl",
    "latin": "Ligamentum acromioclaviculare",
    "polish": "Więzadło barkowo-obojczykowe",
    "info": "Wzmacnia torebkę stawu od góry i stabilizuje staw w płaszczyźnie poziomej.",
    "image": "/stawy/lig-acromioclaviculare.webp"
  },
  {
    "id": "lig-trapezoideum",
    "jointId": "j-acromiocl",
    "latin": "Ligamentum trapezoideum",
    "polish": "Więzadło czworoboczne",
    "info": "Boczna część więzadła kruczo-obojczykowego. Ogranicza przesuwanie się łopatki pod obojczykiem.",
    "image": "/stawy/lig-trapezoideum.webp"
  },
  {
    "id": "lig-conoideum",
    "jointId": "j-acromiocl",
    "latin": "Ligamentum conoideum",
    "polish": "Więzadło stożkowate",
    "info": "Przyśrodkowa część więzadła kruczo-obojczykowego. Ogranicza unoszenie obojczyka względem łopatki.",
    "image": "/stawy/lig-conoideum.webp"
  },
  {
    "id": "lig-transversum-scapulae-superius",
    "jointId": "j-acromiocl",
    "latin": "Ligamentum transversum scapulae superius",
    "polish": "Więzadło poprzeczne górne łopatki",
    "info": "Zamyka od góry wcięcie łopatki, tworząc otwór, przez który przechodzi nerw nadłopatkowy. Nie łączy kości w stawie.",
    "image": "/stawy/lig-transversum-scapulae-superius.webp"
  },
  {
    "id": "lig-coracoacromiale",
    "jointId": "j-humeri",
    "latin": "Ligamentum coracoacromiale",
    "polish": "Więzadło kruczo-barkowe",
    "info": "Tworzy z wyrostkiem barkowym i kruczym sklepienie barku. Chroni głowę kości ramiennej przed przemieszczeniem do góry.",
    "image": "/stawy/lig-coracoacromiale.webp"
  },
  {
    "id": "lig-coracohumerale",
    "jointId": "j-humeri",
    "latin": "Ligamentum coracohumerale",
    "polish": "Więzadło kruczo-ramienne",
    "info": "Wzmacnia torebkę od góry. Ogranicza obrót na zewnątrz i przemieszczenie głowy kości ramiennej w dół.",
    "image": "/stawy/lig-coracohumerale.webp"
  },
  {
    "id": "ligg-glenohumeralia",
    "jointId": "j-humeri",
    "latin": "Ligamenta glenohumeralia",
    "polish": "Więzadła obrąbkowo-ramienne",
    "info": "Trzy pasma (górne, środkowe i dolne) wzmacniające przednią część torebki. Ograniczają obrót na zewnątrz i przemieszczenie głowy do przodu.",
    "image": "/stawy/ligg-glenohumeralia.webp"
  },
  {
    "id": "labrum-glenoidale",
    "jointId": "j-humeri",
    "latin": "Labrum glenoidale",
    "polish": "Obrąbek panewki łopatki",
    "info": "Pierścień włóknisto-chrzęstny na brzegu panewki. Pogłębia i powiększa panewkę, zwiększa stabilność stawu.",
    "image": "/stawy/labrum-glenoidale.webp"
  },
  {
    "id": "lig-transversum-humeri",
    "jointId": "j-humeri",
    "latin": "Ligamentum transversum humeri",
    "polish": "Więzadło poprzeczne kości ramiennej",
    "info": "Przechodzi nad bruzdą międzyguzkową między guzkiem większym a mniejszym. Utrzymuje w bruździe ścięgno głowy długiej mięśnia dwugłowego ramienia.",
    "image": "/stawy/lig-transversum-humeri.webp"
  },
  {
    "id": "lig-collaterale-ulnare",
    "jointId": "j-cubiti",
    "latin": "Ligamentum collaterale ulnare",
    "polish": "Więzadło poboczne łokciowe",
    "info": "Biegnie od nadkłykcia przyśrodkowego do kości łokciowej. Chroni staw przed odchyleniem przedramienia na zewnątrz (koślawiącym).",
    "image": "/stawy/lig-collaterale-ulnare.webp"
  },
  {
    "id": "lig-collaterale-radiale",
    "jointId": "j-cubiti",
    "latin": "Ligamentum collaterale radiale",
    "polish": "Więzadło poboczne promieniowe",
    "info": "Biegnie od nadkłykcia bocznego do więzadła obrączkowatego. Chroni staw przed odchyleniem przedramienia do wewnątrz (szpotawiącym).",
    "image": "/stawy/lig-collaterale-radiale.webp"
  },
  {
    "id": "lig-anulare-radii",
    "jointId": "j-cubiti",
    "latin": "Ligamentum anulare radii",
    "polish": "Więzadło pierścieniowate (obrączkowate) kości promieniowej",
    "info": "Obejmuje głowę kości promieniowej i przytrzymuje ją przy kości łokciowej, umożliwiając jej obrót przy nawracaniu i odwracaniu.",
    "image": "/stawy/lig-anulare-radii.webp"
  },
  {
    "id": "lig-quadratum",
    "jointId": "j-cubiti",
    "latin": "Ligamentum quadratum",
    "polish": "Więzadło czworokątne",
    "info": "Biegnie od dolnego brzegu wcięcia promieniowego kości łokciowej do szyjki kości promieniowej. Wzmacnia od dołu staw promieniowo-łokciowy bliższy i ogranicza nadmierny obrót kości promieniowej.",
    "image": "/stawy/lig-quadratum.webp"
  },
  {
    "id": "membrana-interossea-antebrachii",
    "jointId": "j-radioulprox",
    "latin": "Membrana interossea antebrachii",
    "polish": "Błona międzykostna przedramienia",
    "info": "Łączy trzony kości promieniowej i łokciowej. Przenosi siły z kości promieniowej na łokciową i jest miejscem przyczepu mięśni.",
    "image": "/stawy/membrana-interossea-antebrachii.webp"
  },
  {
    "id": "lig-collaterale-carpi-radiale",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum collaterale carpi radiale",
    "polish": "Więzadło poboczne promieniowe nadgarstka",
    "info": "Biegnie od wyrostka rylcowatego kości promieniowej do kości łódeczkowatej. Ogranicza odwodzenie łokciowe ręki.",
    "image": "/stawy/lig-collaterale-carpi-radiale.webp"
  },
  {
    "id": "lig-collaterale-carpi-ulnare",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum collaterale carpi ulnare",
    "polish": "Więzadło poboczne łokciowe nadgarstka",
    "info": "Biegnie od wyrostka rylcowatego kości łokciowej do kości trójgraniastej i grochowatej. Ogranicza odwodzenie promieniowe ręki.",
    "image": "/stawy/lig-collaterale-carpi-ulnare.webp"
  },
  {
    "id": "lig-radiocarpale-palmare",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum radiocarpale palmare",
    "polish": "Więzadło promieniowo-nadgarstkowe dłoniowe",
    "info": "Wzmacnia staw od strony dłoniowej i ogranicza zgięcie grzbietowe ręki.",
    "image": "/stawy/lig-radiocarpale-palmare.webp"
  },
  {
    "id": "lig-radiocarpale-dorsale",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum radiocarpale dorsale",
    "polish": "Więzadło promieniowo-nadgarstkowe grzbietowe",
    "info": "Wzmacnia staw od strony grzbietowej i ogranicza zgięcie dłoniowe ręki.",
    "image": "/stawy/lig-radiocarpale-dorsale.webp"
  },
  {
    "id": "retinaculum-flexorum",
    "jointId": "j-radiocarp",
    "latin": "Retinaculum musculorum flexorum",
    "polish": "Troczek zginaczy (więzadło poprzeczne nadgarstka)",
    "info": "Rozpięty między wyniosłościami promieniową i łokciową nadgarstka. Zamyka od przodu kanał nadgarstka, w którym biegną ścięgna zginaczy i nerw pośrodkowy.",
    "image": "/stawy/retinaculum-flexorum.webp"
  },
  {
    "id": "lig-ulnocarpale-palmare",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum ulnocarpale palmare",
    "polish": "Więzadło łokciowo-nadgarstkowe dłoniowe",
    "info": "Biegnie od krążka stawowego i wyrostka rylcowatego kości łokciowej do kości księżycowatej i trójgraniastej. Wzmacnia staw od strony dłoniowej i łokciowej.",
    "image": "/stawy/lig-ulnocarpale-palmare.webp"
  },
  {
    "id": "lig-carpi-radiatum",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum carpi radiatum",
    "polish": "Więzadło promieniste nadgarstka",
    "info": "Rozchodzi się promieniście od kości główkowatej do sąsiednich kości nadgarstka po stronie dłoniowej. Wzmacnia staw śródnadgarstkowy.",
    "image": "/stawy/lig-carpi-radiatum.webp"
  },
  {
    "id": "lig-pisohamatum",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum pisohamatum",
    "polish": "Więzadło grochowato-haczykowe",
    "info": "Łączy kość grochowatą z haczykiem kości haczykowatej. Jest przedłużeniem ścięgna mięśnia zginacza łokciowego nadgarstka.",
    "image": "/stawy/lig-pisohamatum.webp"
  },
  {
    "id": "lig-pisometacarpale",
    "jointId": "j-radiocarp",
    "latin": "Ligamentum pisometacarpale",
    "polish": "Więzadło grochowato-śródręczne",
    "info": "Łączy kość grochowatą z podstawą kości śródręcza V. Przenosi siłę mięśnia zginacza łokciowego nadgarstka na śródręcze.",
    "image": "/stawy/lig-pisometacarpale.webp"
  },
  {
    "id": "ligg-intercarpalia-dorsalia",
    "jointId": "j-radiocarp",
    "latin": "Ligamenta intercarpalia dorsalia",
    "polish": "Więzadła międzynadgarstkowe grzbietowe",
    "info": "Łączą sąsiednie kości nadgarstka od strony grzbietowej. Wzmacniają stawy między kośćmi nadgarstka.",
    "image": "/stawy/ligg-intercarpalia-dorsalia.webp"
  },
  {
    "id": "ligg-carpometacarpalia-dorsalia",
    "jointId": "j-radiocarp",
    "latin": "Ligamenta carpometacarpalia dorsalia",
    "polish": "Więzadła nadgarstkowo-śródręczne grzbietowe",
    "info": "Łączą kości szeregu dalszego nadgarstka z podstawami kości śródręcza II-V od strony grzbietowej. Wzmacniają mało ruchome stawy nadgarstkowo-śródręczne.",
    "image": "/stawy/ligg-carpometacarpalia-dorsalia.webp"
  },
  {
    "id": "ligg-carpometacarpalia-palmaria",
    "jointId": "j-radiocarp",
    "latin": "Ligamenta carpometacarpalia palmaria",
    "polish": "Więzadła nadgarstkowo-śródręczne dłoniowe",
    "info": "Łączą kości szeregu dalszego nadgarstka z podstawami kości śródręcza II-V od strony dłoniowej. Wzmacniają stawy nadgarstkowo-śródręczne.",
    "image": "/stawy/ligg-carpometacarpalia-palmaria.webp"
  },
  {
    "id": "lig-radioulnare-palmare",
    "jointId": "j-radioulndist",
    "latin": "Ligamentum radioulnare palmare",
    "polish": "Więzadło promieniowo-łokciowe dłoniowe",
    "info": "Wzmacnia od strony dłoniowej staw promieniowo-łokciowy dalszy i stabilizuje kość promieniową względem łokciowej.",
    "image": "/stawy/lig-radioulnare-palmare.webp"
  },
  {
    "id": "discus-articularis-radioulnaris",
    "jointId": "j-radioulndist",
    "latin": "Discus articularis",
    "polish": "Krążek stawowy (trójkątny)",
    "info": "Chrząstka włóknista między głową kości łokciowej a kośćmi nadgarstka. Łączy dalsze końce kości przedramienia i przenosi część obciążeń z ręki na kość łokciową.",
    "image": "/stawy/discus-articularis-radioulnaris.webp"
  },
  {
    "id": "ligg-collateralia-mcp",
    "jointId": "j-mcp",
    "latin": "Ligamenta collateralia",
    "polish": "Więzadła poboczne stawów śródręczno-paliczkowych",
    "info": "Biegną po bokach stawów od głów kości śródręcza do podstaw paliczków bliższych. Napinają się przy zgięciu i ograniczają ruchy na boki.",
    "image": "/stawy/ligg-collateralia-mcp.webp"
  },
  {
    "id": "ligg-palmaria-mcp",
    "jointId": "j-mcp",
    "latin": "Ligamenta palmaria",
    "polish": "Więzadła dłoniowe (płytki dłoniowe)",
    "info": "Wzmacniają torebki stawów od strony dłoniowej. Ograniczają przeprost palców.",
    "image": "/stawy/ligg-palmaria-mcp.webp"
  },
  {
    "id": "lig-metacarpale-transversum-profundum",
    "jointId": "j-mcp",
    "latin": "Ligamentum metacarpale transversum profundum",
    "polish": "Więzadło poprzeczne głębokie śródręcza",
    "info": "Łączy więzadła dłoniowe stawów śródręczno-paliczkowych II-V. Utrzymuje głowy kości śródręcza razem.",
    "image": "/stawy/lig-metacarpale-transversum-profundum.webp"
  },
  {
    "id": "ligg-collateralia-ipm",
    "jointId": "j-ipm",
    "latin": "Ligamenta collateralia",
    "polish": "Więzadła poboczne stawów międzypaliczkowych",
    "info": "Biegną po bokach stawów międzypaliczkowych. Ograniczają ruchy na boki i stabilizują stawy przy zginaniu.",
    "image": "/stawy/ligg-collateralia-ipm.webp"
  },
  {
    "id": "ligg-sacroiliaca-anteriora",
    "jointId": "pv-sacroil",
    "latin": "Ligamenta sacroiliaca anteriora",
    "polish": "Więzadła krzyżowo-biodrowe przednie",
    "info": "Wzmacniają przednią część stawu krzyżowo-biodrowego.",
    "image": "/stawy/ligg-sacroiliaca-anteriora.webp"
  },
  {
    "id": "ligg-sacroiliaca-posteriora",
    "jointId": "pv-sacroil",
    "latin": "Ligamenta sacroiliaca posteriora",
    "polish": "Więzadła krzyżowo-biodrowe tylne",
    "info": "Bardzo silne więzadła. Utrzymują kość krzyżową między kośćmi biodrowymi i przenoszą ciężar tułowia na miednicę.",
    "image": "/stawy/ligg-sacroiliaca-posteriora.webp"
  },
  {
    "id": "lig-iliolumbale",
    "jointId": "pv-sacroil",
    "latin": "Ligamentum iliolumbale",
    "polish": "Więzadło biodrowo-lędźwiowe",
    "info": "Łączy wyrostek poprzeczny kręgu L5 z grzebieniem biodrowym. Stabilizuje połączenie lędźwiowo-krzyżowe.",
    "image": "/stawy/lig-iliolumbale.webp"
  },
  {
    "id": "lig-sacrotuberale",
    "jointId": "pv-sacroil",
    "latin": "Ligamentum sacrotuberale",
    "polish": "Więzadło krzyżowo-guzowe",
    "info": "Biegnie od kości krzyżowej do guza kulszowego. Ogranicza pochylanie górnej części kości krzyżowej do przodu.",
    "image": "/stawy/lig-sacrotuberale.webp"
  },
  {
    "id": "lig-sacrospinale",
    "jointId": "pv-sacroil",
    "latin": "Ligamentum sacrospinale",
    "polish": "Więzadło krzyżowo-kolcowe",
    "info": "Biegnie od kości krzyżowej do kolca kulszowego. Stabilizuje kość krzyżową i dzieli wcięcie kulszowe na otwór kulszowy większy i mniejszy.",
    "image": "/stawy/lig-sacrospinale.webp"
  },
  {
    "id": "lig-pubicum-superius",
    "jointId": "pv-symph",
    "latin": "Ligamentum pubicum superius",
    "polish": "Więzadło łonowe górne",
    "info": "Biegnie po górnej krawędzi spojenia łonowego i wzmacnia spojenie.",
    "image": "/stawy/lig-pubicum-superius.webp"
  },
  {
    "id": "lig-inguinale",
    "jointId": "pv-symph",
    "latin": "Ligamentum inguinale",
    "polish": "Więzadło pachwinowe",
    "info": "Biegnie od kolca biodrowego przedniego górnego do guzka łonowego. Ogranicza od dołu ścianę brzucha. Nie wzmacnia stawu.",
    "image": "/stawy/lig-inguinale.webp"
  },
  {
    "id": "lig-pubicum-inferius",
    "jointId": "pv-symph",
    "latin": "Ligamentum pubicum inferius",
    "polish": "Więzadło łonowe dolne (łukowate)",
    "info": "Biegnie łukiem pod dolnym brzegiem spojenia łonowego. Najsilniejsze więzadło spojenia, wzmacnia je od dołu.",
    "image": "/stawy/lig-pubicum-inferius.webp"
  },
  {
    "id": "membrana-obturatoria",
    "jointId": "pv-symph",
    "latin": "Membrana obturatoria",
    "polish": "Błona zasłonowa",
    "info": "Zamyka otwór zasłonowy, pozostawiając kanał zasłonowy dla naczyń i nerwu zasłonowego. Jest miejscem przyczepu mięśni zasłaniaczy.",
    "image": "/stawy/membrana-obturatoria.webp"
  },
  {
    "id": "discus-interpubicus",
    "jointId": "pv-symph",
    "latin": "Discus interpubicus",
    "polish": "Krążek międzyłonowy",
    "info": "Chrząstka włóknista łącząca powierzchnie spojeniowe kości łonowych. Amortyzuje obciążenia i umożliwia minimalne ruchy spojenia.",
    "image": "/stawy/discus-interpubicus.webp"
  },
  {
    "id": "lig-iliofemorale",
    "jointId": "j-coxae",
    "latin": "Ligamentum iliofemorale",
    "polish": "Więzadło biodrowo-udowe",
    "info": "Najsilniejsze więzadło ciała. Ogranicza prostowanie (przeprost) w stawie biodrowym i pozwala stać bez pracy mięśni.",
    "image": "/stawy/lig-iliofemorale.webp"
  },
  {
    "id": "lig-pubofemorale",
    "jointId": "j-coxae",
    "latin": "Ligamentum pubofemorale",
    "polish": "Więzadło łonowo-udowe",
    "info": "Ogranicza odwodzenie i obrót uda na zewnątrz.",
    "image": "/stawy/lig-pubofemorale.webp"
  },
  {
    "id": "lig-ischiofemorale",
    "jointId": "j-coxae",
    "latin": "Ligamentum ischiofemorale",
    "polish": "Więzadło kulszowo-udowe",
    "info": "Wzmacnia torebkę od tyłu. Ogranicza obrót uda do wewnątrz i przywodzenie.",
    "image": "/stawy/lig-ischiofemorale.webp"
  },
  {
    "id": "lig-capitis-femoris",
    "jointId": "j-coxae",
    "latin": "Ligamentum capitis femoris",
    "polish": "Więzadło głowy kości udowej",
    "info": "Biegnie od dołu panewki do dołka głowy kości udowej. Prowadzi naczynia odżywiające głowę kości udowej, ma małe znaczenie mechaniczne.",
    "image": "/stawy/lig-capitis-femoris.webp"
  },
  {
    "id": "labrum-acetabuli",
    "jointId": "j-coxae",
    "latin": "Labrum acetabuli",
    "polish": "Obrąbek panewki",
    "info": "Pierścień włóknisto-chrzęstny na brzegu panewki. Pogłębia panewkę i obejmuje głowę kości udowej, zwiększając stabilność stawu.",
    "image": "/stawy/labrum-acetabuli.webp"
  },
  {
    "id": "lig-transversum-acetabuli",
    "jointId": "j-coxae",
    "latin": "Ligamentum transversum acetabuli",
    "polish": "Więzadło poprzeczne panewki",
    "info": "Przechodzi nad wcięciem panewki i uzupełnia obrąbek panewki. Pod nim do stawu wchodzą naczynia.",
    "image": "/stawy/lig-transversum-acetabuli.webp"
  },
  {
    "id": "zona-orbicularis",
    "jointId": "j-coxae",
    "latin": "Zona orbicularis",
    "polish": "Warstwa okrężna",
    "info": "Okrężne włókna torebki stawowej otaczające szyjkę kości udowej. Przytrzymują głowę kości udowej w panewce.",
    "image": "/stawy/zona-orbicularis.webp"
  },
  {
    "id": "lig-patellae",
    "jointId": "j-genus",
    "latin": "Ligamentum patellae",
    "polish": "Więzadło rzepki",
    "info": "Przedłużenie ścięgna mięśnia czworogłowego od rzepki do guzowatości piszczeli. Przenosi siłę mięśnia przy prostowaniu kolana.",
    "image": "/stawy/lig-patellae.webp"
  },
  {
    "id": "lig-collaterale-tibiale",
    "jointId": "j-genus",
    "latin": "Ligamentum collaterale tibiale",
    "polish": "Więzadło poboczne piszczelowe",
    "info": "Po stronie przyśrodkowej, zrośnięte z łąkotką przyśrodkową. Chroni przed koślawieniem kolana.",
    "image": "/stawy/lig-collaterale-tibiale.webp"
  },
  {
    "id": "lig-collaterale-fibulare",
    "jointId": "j-genus",
    "latin": "Ligamentum collaterale fibulare",
    "polish": "Więzadło poboczne strzałkowe",
    "info": "Po stronie bocznej, od nadkłykcia bocznego do głowy strzałki. Chroni przed szpotawieniem kolana.",
    "image": "/stawy/lig-collaterale-fibulare.webp"
  },
  {
    "id": "lig-cruciatum-anterius",
    "jointId": "j-genus",
    "latin": "Ligamentum cruciatum anterius",
    "polish": "Więzadło krzyżowe przednie",
    "info": "Zapobiega przesunięciu piszczeli do przodu względem kości udowej, ogranicza przeprost i obrót do wewnątrz.",
    "image": "/stawy/lig-cruciatum-anterius.webp"
  },
  {
    "id": "lig-cruciatum-posterius",
    "jointId": "j-genus",
    "latin": "Ligamentum cruciatum posterius",
    "polish": "Więzadło krzyżowe tylne",
    "info": "Zapobiega przesunięciu piszczeli do tyłu względem kości udowej. Najsilniejsze więzadło kolana.",
    "image": "/stawy/lig-cruciatum-posterius.webp"
  },
  {
    "id": "meniscus-medialis",
    "jointId": "j-genus",
    "latin": "Meniscus medialis",
    "polish": "Łąkotka przyśrodkowa",
    "info": "Chrząstka włóknista w kształcie litery C. Dopasowuje powierzchnie stawowe, amortyzuje i rozkłada obciążenia. Zrośnięta z więzadłem pobocznym piszczelowym, przez co mniej ruchoma.",
    "image": "/stawy/meniscus-medialis.webp"
  },
  {
    "id": "meniscus-lateralis",
    "jointId": "j-genus",
    "latin": "Meniscus lateralis",
    "polish": "Łąkotka boczna",
    "info": "Prawie okrągła (kształt litery O), bardziej ruchoma od przyśrodkowej. Dopasowuje powierzchnie stawowe i amortyzuje obciążenia.",
    "image": "/stawy/meniscus-lateralis.webp"
  },
  {
    "id": "lig-popliteum-obliquum",
    "jointId": "j-genus",
    "latin": "Ligamentum popliteum obliquum",
    "polish": "Więzadło podkolanowe skośne",
    "info": "Biegnie skośnie po tylnej stronie torebki stawowej jako przedłużenie ścięgna mięśnia półbłoniastego. Wzmacnia torebkę od tyłu i ogranicza przeprost kolana.",
    "image": "/stawy/lig-popliteum-obliquum.webp"
  },
  {
    "id": "retinaculum-patellae-mediale",
    "jointId": "j-genus",
    "latin": "Retinaculum patellae mediale",
    "polish": "Troczek przyśrodkowy rzepki",
    "info": "Pasma włókniste po przyśrodkowej stronie rzepki. Stabilizują rzepkę i chronią ją przed przemieszczeniem na bok.",
    "image": "/stawy/retinaculum-patellae-mediale.webp"
  },
  {
    "id": "retinaculum-patellae-laterale",
    "jointId": "j-genus",
    "latin": "Retinaculum patellae laterale",
    "polish": "Troczek boczny rzepki",
    "info": "Pasma włókniste po bocznej stronie rzepki. Razem z troczkiem przyśrodkowym utrzymują rzepkę w prawidłowym torze ruchu.",
    "image": "/stawy/retinaculum-patellae-laterale.webp"
  },
  {
    "id": "lig-transversum-genus",
    "jointId": "j-genus",
    "latin": "Ligamentum transversum genus",
    "polish": "Więzadło poprzeczne kolana",
    "info": "Łączy przednie rogi łąkotki przyśrodkowej i bocznej. Stabilizuje łąkotki.",
    "image": "/stawy/lig-transversum-genus.webp"
  },
  {
    "id": "lig-popliteum-arcuatum",
    "jointId": "j-genus",
    "latin": "Ligamentum popliteum arcuatum",
    "polish": "Więzadło podkolanowe łukowate",
    "info": "Biegnie łukiem od głowy strzałki do tylnej części torebki stawowej. Wzmacnia tylno-boczną część torebki.",
    "image": "/stawy/lig-popliteum-arcuatum.webp"
  },
  {
    "id": "lig-meniscofemorale-posterius",
    "jointId": "j-genus",
    "latin": "Ligamentum meniscofemorale posterius",
    "polish": "Więzadło łąkotkowo-udowe tylne",
    "info": "Biegnie od rogu tylnego łąkotki bocznej, za więzadłem krzyżowym tylnym, do kłykcia przyśrodkowego kości udowej. Stabilizuje róg tylny łąkotki bocznej.",
    "image": "/stawy/lig-meniscofemorale-posterius.webp"
  },
  {
    "id": "lig-capitis-fibulae-anterius",
    "jointId": "j-tibiofib",
    "latin": "Ligamentum capitis fibulae anterius",
    "polish": "Więzadło głowy strzałki przednie",
    "info": "Łączy głowę strzałki z kłykciem bocznym kości piszczelowej od przodu. Wzmacnia staw piszczelowo-strzałkowy.",
    "image": "/stawy/lig-capitis-fibulae-anterius.webp"
  },
  {
    "id": "membrana-interossea-cruris",
    "jointId": "j-tibiofib",
    "latin": "Membrana interossea cruris",
    "polish": "Błona międzykostna goleni",
    "info": "Łączy trzony kości piszczelowej i strzałkowej. Jest miejscem przyczepu mięśni goleni i oddziela przednią grupę mięśni od tylnej.",
    "image": "/stawy/membrana-interossea-cruris.webp"
  },
  {
    "id": "lig-talofibulare-anterius",
    "jointId": "j-talocrur",
    "latin": "Ligamentum talofibulare anterius",
    "polish": "Więzadło skokowo-strzałkowe przednie",
    "info": "Biegnie od kostki bocznej do szyjki kości skokowej. Ogranicza zgięcie podeszwowe z odwracaniem stopy, najczęściej uszkadzane przy skręceniu stawu skokowego.",
    "image": "/stawy/lig-talofibulare-anterius.webp"
  },
  {
    "id": "lig-talofibulare-posterius",
    "jointId": "j-talocrur",
    "latin": "Ligamentum talofibulare posterius",
    "polish": "Więzadło skokowo-strzałkowe tylne",
    "info": "Biegnie od kostki bocznej do tylnej części kości skokowej. Ogranicza przesunięcie kości skokowej do tyłu.",
    "image": "/stawy/lig-talofibulare-posterius.webp"
  },
  {
    "id": "lig-calcaneofibulare",
    "jointId": "j-talocrur",
    "latin": "Ligamentum calcaneofibulare",
    "polish": "Więzadło piętowo-strzałkowe",
    "info": "Biegnie od kostki bocznej do kości piętowej. Ogranicza odwracanie stopy (inwersję).",
    "image": "/stawy/lig-calcaneofibulare.webp"
  },
  {
    "id": "lig-deltoideum",
    "jointId": "j-talocrur",
    "latin": "Ligamentum deltoideum",
    "polish": "Więzadło trójgraniaste (przyśrodkowe)",
    "info": "Wachlarzowate więzadło od kostki przyśrodkowej do kości łódkowatej, skokowej i piętowej. Ogranicza nawracanie stopy (ewersję).",
    "image": "/stawy/lig-deltoideum.webp"
  },
  {
    "id": "lig-tibiofibulare-anterius",
    "jointId": "j-talocrur",
    "latin": "Ligamentum tibiofibulare anterius",
    "polish": "Więzadło piszczelowo-strzałkowe przednie",
    "info": "Łączy z przodu dolne końce kości piszczelowej i strzałkowej (więzozrost piszczelowo-strzałkowy). Utrzymuje widełki stawu skokowego.",
    "image": "/stawy/lig-tibiofibulare-anterius.webp"
  },
  {
    "id": "lig-tibiofibulare-posterius",
    "jointId": "j-talocrur",
    "latin": "Ligamentum tibiofibulare posterius",
    "polish": "Więzadło piszczelowo-strzałkowe tylne",
    "info": "Łączy z tyłu dolne końce kości piszczelowej i strzałkowej. Razem z więzadłem przednim utrzymuje widełki stawu skokowego.",
    "image": "/stawy/lig-tibiofibulare-posterius.webp"
  },
  {
    "id": "lig-talocalcaneum-interosseum",
    "jointId": "j-subtal",
    "latin": "Ligamentum talocalcaneum interosseum",
    "polish": "Więzadło skokowo-piętowe międzykostne",
    "info": "Leży w zatoce stępu między kością skokową a piętową. Najsilniejsze więzadło stawu skokowego dolnego, ogranicza nadmierne odwracanie stopy.",
    "image": "/stawy/lig-talocalcaneum-interosseum.webp"
  },
  {
    "id": "lig-talocalcaneum-laterale",
    "jointId": "j-subtal",
    "latin": "Ligamentum talocalcaneum laterale",
    "polish": "Więzadło skokowo-piętowe boczne",
    "info": "Łączy kość skokową z kością piętową po stronie bocznej. Wzmacnia staw skokowy dolny.",
    "image": "/stawy/lig-talocalcaneum-laterale.webp"
  },
  {
    "id": "lig-bifurcatum",
    "jointId": "j-chopart",
    "latin": "Ligamentum bifurcatum",
    "polish": "Więzadło rozdwojone",
    "info": "Biegnie od kości piętowej dwoma pasmami do kości łódkowatej i sześciennej. Wzmacnia staw poprzeczny stępu.",
    "image": "/stawy/lig-bifurcatum.webp"
  },
  {
    "id": "lig-calcaneonaviculare-plantare",
    "jointId": "j-chopart",
    "latin": "Ligamentum calcaneonaviculare plantare",
    "polish": "Więzadło piętowo-łódkowe podeszwowe (sprężynowe)",
    "info": "Biegnie od podpórki kości skokowej do kości łódkowatej. Podtrzymuje głowę kości skokowej i łuk podłużny przyśrodkowy stopy.",
    "image": "/stawy/lig-calcaneonaviculare-plantare.webp"
  },
  {
    "id": "lig-talonaviculare",
    "jointId": "j-chopart",
    "latin": "Ligamentum talonaviculare",
    "polish": "Więzadło skokowo-łódkowe",
    "info": "Łączy szyjkę kości skokowej z kością łódkowatą od strony grzbietowej. Wzmacnia staw skokowo-łódkowy.",
    "image": "/stawy/lig-talonaviculare.webp"
  },
  {
    "id": "lig-calcaneocuboideum-plantare",
    "jointId": "j-chopart",
    "latin": "Ligamentum calcaneocuboideum plantare",
    "polish": "Więzadło piętowo-sześcienne podeszwowe (krótkie podeszwowe)",
    "info": "Leży głębiej niż więzadło podeszwowe długie i łączy kość piętową z kością sześcienną. Podtrzymuje łuk podłużny boczny stopy.",
    "image": "/stawy/lig-calcaneocuboideum-plantare.webp"
  },
  {
    "id": "lig-calcaneocuboideum-dorsale",
    "jointId": "j-chopart",
    "latin": "Ligamentum calcaneocuboideum dorsale",
    "polish": "Więzadło piętowo-sześcienne grzbietowe",
    "info": "Łączy kość piętową z kością sześcienną od strony grzbietowej. Wzmacnia staw piętowo-sześcienny.",
    "image": "/stawy/lig-calcaneocuboideum-dorsale.webp"
  },
  {
    "id": "ligg-cuneonavicularia-dorsalia",
    "jointId": "j-chopart",
    "latin": "Ligamenta cuneonavicularia dorsalia",
    "polish": "Więzadła klinowo-łódkowe grzbietowe",
    "info": "Łączą kość łódkowatą z trzema kośćmi klinowatymi od strony grzbietowej. Wzmacniają staw klinowo-łódkowy.",
    "image": "/stawy/ligg-cuneonavicularia-dorsalia.webp"
  },
  {
    "id": "lig-plantare-longum",
    "jointId": "j-chopart",
    "latin": "Ligamentum plantare longum",
    "polish": "Więzadło podeszwowe długie",
    "info": "Biegnie od kości piętowej do kości sześciennej i podstaw kości śródstopia. Podtrzymuje łuk podłużny boczny stopy.",
    "image": "/stawy/lig-plantare-longum.webp"
  },
  {
    "id": "ligg-collateralia-mtp",
    "jointId": "j-mtp",
    "latin": "Ligamenta collateralia",
    "polish": "Więzadła poboczne stawów śródstopno-paliczkowych",
    "info": "Biegną po bokach stawów od głów kości śródstopia do podstaw paliczków bliższych. Ograniczają ruchy na boki.",
    "image": "/stawy/ligg-collateralia-mtp.webp"
  },
  {
    "id": "lig-metatarsale-transversum-profundum",
    "jointId": "j-mtp",
    "latin": "Ligamentum metatarsale transversum profundum",
    "polish": "Więzadło poprzeczne głębokie śródstopia",
    "info": "Łączy głowy kości śródstopia I-V od strony podeszwowej. Utrzymuje je razem i stabilizuje łuk poprzeczny przedstopia.",
    "image": "/stawy/lig-metatarsale-transversum-profundum.webp"
  },
  {
    "id": "ligg-tarsometatarsalia-dorsalia",
    "jointId": "j-lisfranc",
    "latin": "Ligamenta tarsometatarsalia dorsalia",
    "polish": "Więzadła stępowo-śródstopne grzbietowe",
    "info": "Łączą kości klinowate i sześcienną z podstawami kości śródstopia od strony grzbietowej. Wzmacniają stawy stępowo-śródstopne.",
    "image": "/stawy/ligg-tarsometatarsalia-dorsalia.webp"
  },
  {
    "id": "lig-lisfranci",
    "jointId": "j-lisfranc",
    "latin": "Ligamentum cuneometatarsale interosseum",
    "polish": "Więzadło Lisfranca (klinowo-śródstopne międzykostne)",
    "info": "Łączy kość klinowatą przyśrodkową z podstawą kości śródstopia II. Najważniejsze więzadło stabilizujące stawy stępowo-śródstopne.",
    "image": "/stawy/lig-lisfranci.webp"
  },
  {
    "id": "ligg-tarsometatarsalia-plantaria",
    "jointId": "j-lisfranc",
    "latin": "Ligamenta tarsometatarsalia plantaria",
    "polish": "Więzadła stępowo-śródstopne podeszwowe",
    "info": "Łączą kości stępu z podstawami kości śródstopia od strony podeszwowej. Wzmacniają stawy stępowo-śródstopne.",
    "image": "/stawy/ligg-tarsometatarsalia-plantaria.webp"
  }
];

export const JOINT_EXTRA_CARDS: { after: string; card: Omit<Card, "credit"> }[] = [
  {
    "after": "j-tmj",
    "card": {
      "id": "lig-laterale-tmj",
      "latin": "Ligamentum laterale",
      "polish": "Więzadło boczne stawu skroniowo-żuchwowego",
      "system": "kostno-stawowy",
      "group": "Czaszka",
      "groupSlug": "czaszka",
      "subgroup": "16. Połączenia kości czaszki",
      "subgroupSlug": "rozdzial-16",
      "image": "/stawy/lig-laterale-tmj.webp",
      "info": "Wzmacnia torebkę stawu od boku i ogranicza nadmierne przesunięcie żuchwy do tyłu i w dół."
    }
  },
  {
    "after": "lig-laterale-tmj",
    "card": {
      "id": "lig-stylomandibulare",
      "latin": "Ligamentum stylomandibulare",
      "polish": "Więzadło rylcowo-żuchwowe",
      "system": "kostno-stawowy",
      "group": "Czaszka",
      "groupSlug": "czaszka",
      "subgroup": "16. Połączenia kości czaszki",
      "subgroupSlug": "rozdzial-16",
      "image": "/stawy/lig-stylomandibulare.webp",
      "info": "Biegnie od wyrostka rylcowatego do kąta żuchwy. Ogranicza nadmierne wysuwanie żuchwy do przodu."
    }
  },
  {
    "after": "lig-stylomandibulare",
    "card": {
      "id": "lig-sphenomandibulare",
      "latin": "Ligamentum sphenomandibulare",
      "polish": "Więzadło klinowo-żuchwowe",
      "system": "kostno-stawowy",
      "group": "Czaszka",
      "groupSlug": "czaszka",
      "subgroup": "16. Połączenia kości czaszki",
      "subgroupSlug": "rozdzial-16",
      "image": "/stawy/lig-sphenomandibulare.webp",
      "info": "Biegnie po stronie przyśrodkowej od kolca kości klinowej do języczka żuchwy. Podtrzymuje żuchwę i ogranicza jej nadmierne opuszczanie."
    }
  },
  {
    "after": "lig-sphenomandibulare",
    "card": {
      "id": "discus-articularis-tmj",
      "latin": "Discus articularis",
      "polish": "Krążek stawowy stawu skroniowo-żuchwowego",
      "system": "kostno-stawowy",
      "group": "Czaszka",
      "groupSlug": "czaszka",
      "subgroup": "16. Połączenia kości czaszki",
      "subgroupSlug": "rozdzial-16",
      "image": "/stawy/discus-articularis-tmj.webp",
      "info": "Chrząstka włóknista między głową żuchwy a dołem żuchwowym. Dzieli staw na dwa piętra, wyrównuje niezgodność powierzchni i przesuwa się do przodu przy otwieraniu ust."
    }
  },
  {
    "after": "j-atlantoax",
    "card": {
      "id": "lig-transversum-atlantis",
      "latin": "Ligamentum transversum atlantis",
      "polish": "Więzadło poprzeczne kręgu szczytowego",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-transversum-atlantis.webp",
      "info": "Przytrzymuje ząb kręgu obrotowego przy łuku przednim kręgu szczytowego. Chroni rdzeń kręgowy przed uciśnięciem przez ząb."
    }
  },
  {
    "after": "lig-transversum-atlantis",
    "card": {
      "id": "ligg-alaria",
      "latin": "Ligamenta alaria",
      "polish": "Więzadła skrzydłowate",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/ligg-alaria.webp",
      "info": "Biegną od zęba kręgu obrotowego do kłykci kości potylicznej. Ograniczają nadmierny obrót głowy i zginanie na boki."
    }
  },
  {
    "after": "ligg-alaria",
    "card": {
      "id": "lig-apicis-dentis",
      "latin": "Ligamentum apicis dentis",
      "polish": "Więzadło wierzchołka zęba",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-apicis-dentis.webp",
      "info": "Łączy wierzchołek zęba kręgu obrotowego z przednim brzegiem otworu wielkiego. Ma małe znaczenie mechaniczne."
    }
  },
  {
    "after": "lig-apicis-dentis",
    "card": {
      "id": "lig-cruciforme-atlantis",
      "latin": "Ligamentum cruciforme atlantis",
      "polish": "Więzadło krzyżowe kręgu szczytowego",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-cruciforme-atlantis.webp",
      "info": "Składa się z więzadła poprzecznego i pęczków podłużnych biegnących do kości potylicznej i trzonu kręgu obrotowego. Utrzymuje ząb na miejscu i chroni rdzeń kręgowy."
    }
  },
  {
    "after": "lig-cruciforme-atlantis",
    "card": {
      "id": "membrana-atlantooccipitalis-posterior",
      "latin": "Membrana atlantooccipitalis posterior",
      "polish": "Błona szczytowo-potyliczna tylna",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/membrana-atlantooccipitalis-posterior.webp",
      "info": "Łączy łuk tylny kręgu szczytowego z tylnym brzegiem otworu wielkiego i zamyka od tyłu przestrzeń między czaszką a kręgiem szczytowym. Przebija ją tętnica kręgowa."
    }
  },
  {
    "after": "membrana-atlantooccipitalis-posterior",
    "card": {
      "id": "membrana-tectoria",
      "latin": "Membrana tectoria",
      "polish": "Błona pokrywająca",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/membrana-tectoria.webp",
      "info": "Przedłużenie więzadła podłużnego tylnego od trzonu kręgu obrotowego do kości potylicznej. Pokrywa od tyłu ząb i jego więzadła, ogranicza zginanie głowy."
    }
  },
  {
    "after": "membrana-tectoria",
    "card": {
      "id": "membrana-atlantooccipitalis-anterior",
      "latin": "Membrana atlantooccipitalis anterior",
      "polish": "Błona szczytowo-potyliczna przednia",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/membrana-atlantooccipitalis-anterior.webp",
      "info": "Łączy łuk przedni kręgu szczytowego z przednim brzegiem otworu wielkiego. Ogranicza odginanie głowy do tyłu."
    }
  },
  {
    "after": "j-intervert",
    "card": {
      "id": "lig-longitudinale-anterius",
      "latin": "Ligamentum longitudinale anterius",
      "polish": "Więzadło podłużne przednie",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-longitudinale-anterius.webp",
      "info": "Biegnie po przedniej powierzchni trzonów kręgów. Ogranicza nadmierne prostowanie kręgosłupa."
    }
  },
  {
    "after": "lig-longitudinale-anterius",
    "card": {
      "id": "lig-longitudinale-posterius",
      "latin": "Ligamentum longitudinale posterius",
      "polish": "Więzadło podłużne tylne",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-longitudinale-posterius.webp",
      "info": "Biegnie po tylnej powierzchni trzonów, w kanale kręgowym. Ogranicza nadmierne zginanie i chroni przed przemieszczeniem krążka do tyłu."
    }
  },
  {
    "after": "lig-longitudinale-posterius",
    "card": {
      "id": "ligg-flava",
      "latin": "Ligamenta flava",
      "polish": "Więzadła żółte",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/ligg-flava.webp",
      "info": "Łączą blaszki łuków sąsiednich kręgów. Są sprężyste, ograniczają zginanie i pomagają w powrocie kręgosłupa do wyprostu."
    }
  },
  {
    "after": "ligg-flava",
    "card": {
      "id": "ligg-interspinalia",
      "latin": "Ligamenta interspinalia",
      "polish": "Więzadła międzykolcowe",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/ligg-interspinalia.webp",
      "info": "Łączą sąsiednie wyrostki kolczyste. Ograniczają zginanie kręgosłupa."
    }
  },
  {
    "after": "ligg-interspinalia",
    "card": {
      "id": "lig-supraspinale",
      "latin": "Ligamentum supraspinale",
      "polish": "Więzadło nadkolcowe",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-supraspinale.webp",
      "info": "Biegnie po szczytach wyrostków kolczystych. Ogranicza nadmierne zginanie kręgosłupa."
    }
  },
  {
    "after": "lig-supraspinale",
    "card": {
      "id": "discus-intervertebralis",
      "latin": "Discus intervertebralis",
      "polish": "Krążek międzykręgowy",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/discus-intervertebralis.webp",
      "info": "Łączy trzony sąsiednich kręgów. Amortyzuje wstrząsy, rozkłada obciążenia i umożliwia ruchy między kręgami."
    }
  },
  {
    "after": "discus-intervertebralis",
    "card": {
      "id": "ligg-intertransversaria",
      "latin": "Ligamenta intertransversaria",
      "polish": "Więzadła międzypoprzeczne",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/ligg-intertransversaria.webp",
      "info": "Łączą sąsiednie wyrostki poprzeczne. Ograniczają zginanie kręgosłupa w bok przeciwny."
    }
  },
  {
    "after": "ligg-intertransversaria",
    "card": {
      "id": "lig-nuchae",
      "latin": "Ligamentum nuchae",
      "polish": "Więzadło karkowe",
      "system": "kostno-stawowy",
      "group": "Kręgosłup",
      "groupSlug": "kregoslup",
      "subgroup": "27-28. Połączenia kręgosłupa",
      "subgroupSlug": "rozdzial-27-28",
      "image": "/stawy/lig-nuchae.webp",
      "info": "Przedłużenie więzadła nadkolcowego w odcinku szyjnym, od guzowatości potylicznej zewnętrznej do wyrostka kolczystego C7. Ogranicza zginanie szyi i jest miejscem przyczepu mięśni karku."
    }
  },
  {
    "after": "j-costovert",
    "card": {
      "id": "lig-capitis-costae-radiatum",
      "latin": "Ligamentum capitis costae radiatum",
      "polish": "Więzadło promieniste głowy żebra",
      "system": "kostno-stawowy",
      "group": "Klatka piersiowa",
      "groupSlug": "klatka-piersiowa",
      "subgroup": "34. Połączenia stawowe klatki piersiowej",
      "subgroupSlug": "rozdzial-34",
      "image": "/stawy/lig-capitis-costae-radiatum.webp",
      "info": "Łączy głowę żebra z trzonami dwóch sąsiednich kręgów i krążkiem międzykręgowym. Wzmacnia staw głowy żebra."
    }
  },
  {
    "after": "lig-capitis-costae-radiatum",
    "card": {
      "id": "lig-costotransversarium-laterale",
      "latin": "Ligamentum costotransversarium laterale",
      "polish": "Więzadło żebrowo-poprzeczne boczne",
      "system": "kostno-stawowy",
      "group": "Klatka piersiowa",
      "groupSlug": "klatka-piersiowa",
      "subgroup": "34. Połączenia stawowe klatki piersiowej",
      "subgroupSlug": "rozdzial-34",
      "image": "/stawy/lig-costotransversarium-laterale.webp",
      "info": "Łączy guzek żebra ze szczytem wyrostka poprzecznego. Wzmacnia staw żebrowo-poprzeczny."
    }
  },
  {
    "after": "lig-costotransversarium-laterale",
    "card": {
      "id": "lig-costotransversarium-superius",
      "latin": "Ligamentum costotransversarium superius",
      "polish": "Więzadło żebrowo-poprzeczne górne",
      "system": "kostno-stawowy",
      "group": "Klatka piersiowa",
      "groupSlug": "klatka-piersiowa",
      "subgroup": "34. Połączenia stawowe klatki piersiowej",
      "subgroupSlug": "rozdzial-34",
      "image": "/stawy/lig-costotransversarium-superius.webp",
      "info": "Biegnie od szyjki żebra do wyrostka poprzecznego kręgu leżącego wyżej. Stabilizuje żebro przy kręgosłupie."
    }
  },
  {
    "after": "j-sternocost",
    "card": {
      "id": "ligg-sternocostalia-radiata",
      "latin": "Ligamenta sternocostalia radiata",
      "polish": "Więzadła mostkowo-żebrowe promieniste",
      "system": "kostno-stawowy",
      "group": "Klatka piersiowa",
      "groupSlug": "klatka-piersiowa",
      "subgroup": "34. Połączenia stawowe klatki piersiowej",
      "subgroupSlug": "rozdzial-34",
      "image": "/stawy/ligg-sternocostalia-radiata.webp",
      "info": "Rozchodzą się wachlarzowato od końców chrząstek żebrowych na przednią powierzchnię mostka. Wzmacniają stawy mostkowo-żebrowe."
    }
  },
  {
    "after": "ligg-sternocostalia-radiata",
    "card": {
      "id": "ligg-costoxiphoidea",
      "latin": "Ligamenta costoxiphoidea",
      "polish": "Więzadła żebrowo-mieczykowe",
      "system": "kostno-stawowy",
      "group": "Klatka piersiowa",
      "groupSlug": "klatka-piersiowa",
      "subgroup": "34. Połączenia stawowe klatki piersiowej",
      "subgroupSlug": "rozdzial-34",
      "image": "/stawy/ligg-costoxiphoidea.webp",
      "info": "Łączą chrząstkę żebra VII z wyrostkiem mieczykowatym. Stabilizują wyrostek mieczykowaty."
    }
  },
  {
    "after": "j-acromiocl",
    "card": {
      "id": "j-sternocl",
      "latin": "Articulatio sternoclavicularis",
      "polish": "Staw mostkowo-obojczykowy",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/j-sternocl__sterncl_front.webp",
      "info": "Jedyne stawowe połączenie kończyny górnej z tułowiem, ma krążek stawowy. Umożliwia unoszenie i obniżanie, wysuwanie i cofanie barku oraz niewielki obrót obojczyka.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "staw siodełkowy, czynnościowo kulisty (dzięki krążkowi stawowemu)"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "koniec mostkowy obojczyka",
            "wcięcie obojczykowe rękojeści mostka",
            "krążek stawowy"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadło mostkowo-obojczykowe przednie",
            "Więzadło międzyobojczykowe",
            "Więzadło żebrowo-obojczykowe",
            "Więzadło mostkowo-obojczykowe tylne",
            "Krążek stawowy stawu mostkowo-obojczykowego"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "unoszenie i obniżanie barku",
            "wysuwanie i cofanie barku",
            "obrót obojczyka"
          ]
        }
      ]
    }
  },
  {
    "after": "j-sternocl",
    "card": {
      "id": "lig-sternoclaviculare-anterius",
      "latin": "Ligamentum sternoclaviculare anterius",
      "polish": "Więzadło mostkowo-obojczykowe przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-sternoclaviculare-anterius.webp",
      "info": "Wzmacnia torebkę stawu od przodu i ogranicza przesunięcie obojczyka do przodu."
    }
  },
  {
    "after": "lig-sternoclaviculare-anterius",
    "card": {
      "id": "lig-interclaviculare",
      "latin": "Ligamentum interclaviculare",
      "polish": "Więzadło międzyobojczykowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-interclaviculare.webp",
      "info": "Łączy końce mostkowe obu obojczyków ponad wcięciem szyjnym. Ogranicza nadmierne obniżanie barku."
    }
  },
  {
    "after": "lig-interclaviculare",
    "card": {
      "id": "lig-costoclaviculare",
      "latin": "Ligamentum costoclaviculare",
      "polish": "Więzadło żebrowo-obojczykowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-costoclaviculare.webp",
      "info": "Łączy obojczyk z pierwszym żebrem. Najsilniejsze więzadło tego stawu, ogranicza unoszenie obojczyka."
    }
  },
  {
    "after": "lig-costoclaviculare",
    "card": {
      "id": "lig-sternoclaviculare-posterius",
      "latin": "Ligamentum sternoclaviculare posterius",
      "polish": "Więzadło mostkowo-obojczykowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-sternoclaviculare-posterius.webp",
      "info": "Wzmacnia torebkę stawu od tyłu i ogranicza przesunięcie obojczyka do tyłu."
    }
  },
  {
    "after": "lig-sternoclaviculare-posterius",
    "card": {
      "id": "discus-articularis-sternocl",
      "latin": "Discus articularis",
      "polish": "Krążek stawowy stawu mostkowo-obojczykowego",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/discus-articularis-sternocl.webp",
      "info": "Dzieli staw na dwie komory i wyrównuje niezgodność powierzchni stawowych. Amortyzuje siły przenoszone z kończyny górnej na mostek."
    }
  },
  {
    "after": "j-acromiocl",
    "card": {
      "id": "lig-acromioclaviculare",
      "latin": "Ligamentum acromioclaviculare",
      "polish": "Więzadło barkowo-obojczykowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-acromioclaviculare.webp",
      "info": "Wzmacnia torebkę stawu od góry i stabilizuje staw w płaszczyźnie poziomej."
    }
  },
  {
    "after": "lig-acromioclaviculare",
    "card": {
      "id": "lig-trapezoideum",
      "latin": "Ligamentum trapezoideum",
      "polish": "Więzadło czworoboczne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-trapezoideum.webp",
      "info": "Boczna część więzadła kruczo-obojczykowego. Ogranicza przesuwanie się łopatki pod obojczykiem."
    }
  },
  {
    "after": "lig-trapezoideum",
    "card": {
      "id": "lig-conoideum",
      "latin": "Ligamentum conoideum",
      "polish": "Więzadło stożkowate",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-conoideum.webp",
      "info": "Przyśrodkowa część więzadła kruczo-obojczykowego. Ogranicza unoszenie obojczyka względem łopatki."
    }
  },
  {
    "after": "lig-conoideum",
    "card": {
      "id": "lig-transversum-scapulae-superius",
      "latin": "Ligamentum transversum scapulae superius",
      "polish": "Więzadło poprzeczne górne łopatki",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "46. Połączenia stawowe obręczy kończyny górnej",
      "subgroupSlug": "rozdzial-46",
      "image": "/stawy/lig-transversum-scapulae-superius.webp",
      "info": "Zamyka od góry wcięcie łopatki, tworząc otwór, przez który przechodzi nerw nadłopatkowy. Nie łączy kości w stawie."
    }
  },
  {
    "after": "j-humeri",
    "card": {
      "id": "lig-coracoacromiale",
      "latin": "Ligamentum coracoacromiale",
      "polish": "Więzadło kruczo-barkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "47. Staw ramienny",
      "subgroupSlug": "rozdzial-47",
      "image": "/stawy/lig-coracoacromiale.webp",
      "info": "Tworzy z wyrostkiem barkowym i kruczym sklepienie barku. Chroni głowę kości ramiennej przed przemieszczeniem do góry."
    }
  },
  {
    "after": "lig-coracoacromiale",
    "card": {
      "id": "lig-coracohumerale",
      "latin": "Ligamentum coracohumerale",
      "polish": "Więzadło kruczo-ramienne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "47. Staw ramienny",
      "subgroupSlug": "rozdzial-47",
      "image": "/stawy/lig-coracohumerale.webp",
      "info": "Wzmacnia torebkę od góry. Ogranicza obrót na zewnątrz i przemieszczenie głowy kości ramiennej w dół."
    }
  },
  {
    "after": "lig-coracohumerale",
    "card": {
      "id": "ligg-glenohumeralia",
      "latin": "Ligamenta glenohumeralia",
      "polish": "Więzadła obrąbkowo-ramienne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "47. Staw ramienny",
      "subgroupSlug": "rozdzial-47",
      "image": "/stawy/ligg-glenohumeralia.webp",
      "info": "Trzy pasma (górne, środkowe i dolne) wzmacniające przednią część torebki. Ograniczają obrót na zewnątrz i przemieszczenie głowy do przodu."
    }
  },
  {
    "after": "ligg-glenohumeralia",
    "card": {
      "id": "labrum-glenoidale",
      "latin": "Labrum glenoidale",
      "polish": "Obrąbek panewki łopatki",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "47. Staw ramienny",
      "subgroupSlug": "rozdzial-47",
      "image": "/stawy/labrum-glenoidale.webp",
      "info": "Pierścień włóknisto-chrzęstny na brzegu panewki. Pogłębia i powiększa panewkę, zwiększa stabilność stawu."
    }
  },
  {
    "after": "labrum-glenoidale",
    "card": {
      "id": "lig-transversum-humeri",
      "latin": "Ligamentum transversum humeri",
      "polish": "Więzadło poprzeczne kości ramiennej",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "47. Staw ramienny",
      "subgroupSlug": "rozdzial-47",
      "image": "/stawy/lig-transversum-humeri.webp",
      "info": "Przechodzi nad bruzdą międzyguzkową między guzkiem większym a mniejszym. Utrzymuje w bruździe ścięgno głowy długiej mięśnia dwugłowego ramienia."
    }
  },
  {
    "after": "j-cubiti",
    "card": {
      "id": "lig-collaterale-ulnare",
      "latin": "Ligamentum collaterale ulnare",
      "polish": "Więzadło poboczne łokciowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "48-49. Staw łokciowy",
      "subgroupSlug": "rozdzial-48-49",
      "image": "/stawy/lig-collaterale-ulnare.webp",
      "info": "Biegnie od nadkłykcia przyśrodkowego do kości łokciowej. Chroni staw przed odchyleniem przedramienia na zewnątrz (koślawiącym)."
    }
  },
  {
    "after": "lig-collaterale-ulnare",
    "card": {
      "id": "lig-collaterale-radiale",
      "latin": "Ligamentum collaterale radiale",
      "polish": "Więzadło poboczne promieniowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "48-49. Staw łokciowy",
      "subgroupSlug": "rozdzial-48-49",
      "image": "/stawy/lig-collaterale-radiale.webp",
      "info": "Biegnie od nadkłykcia bocznego do więzadła obrączkowatego. Chroni staw przed odchyleniem przedramienia do wewnątrz (szpotawiącym)."
    }
  },
  {
    "after": "lig-collaterale-radiale",
    "card": {
      "id": "lig-anulare-radii",
      "latin": "Ligamentum anulare radii",
      "polish": "Więzadło pierścieniowate (obrączkowate) kości promieniowej",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "48-49. Staw łokciowy",
      "subgroupSlug": "rozdzial-48-49",
      "image": "/stawy/lig-anulare-radii.webp",
      "info": "Obejmuje głowę kości promieniowej i przytrzymuje ją przy kości łokciowej, umożliwiając jej obrót przy nawracaniu i odwracaniu."
    }
  },
  {
    "after": "lig-anulare-radii",
    "card": {
      "id": "lig-quadratum",
      "latin": "Ligamentum quadratum",
      "polish": "Więzadło czworokątne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "48-49. Staw łokciowy",
      "subgroupSlug": "rozdzial-48-49",
      "image": "/stawy/lig-quadratum.webp",
      "info": "Biegnie od dolnego brzegu wcięcia promieniowego kości łokciowej do szyjki kości promieniowej. Wzmacnia od dołu staw promieniowo-łokciowy bliższy i ogranicza nadmierny obrót kości promieniowej."
    }
  },
  {
    "after": "j-radioulprox",
    "card": {
      "id": "membrana-interossea-antebrachii",
      "latin": "Membrana interossea antebrachii",
      "polish": "Błona międzykostna przedramienia",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "48-49. Staw łokciowy",
      "subgroupSlug": "rozdzial-48-49",
      "image": "/stawy/membrana-interossea-antebrachii.webp",
      "info": "Łączy trzony kości promieniowej i łokciowej. Przenosi siły z kości promieniowej na łokciową i jest miejscem przyczepu mięśni."
    }
  },
  {
    "after": "membrana-interossea-antebrachii",
    "card": {
      "id": "j-radiocarp",
      "latin": "Articulatio radiocarpea",
      "polish": "Staw promieniowo-nadgarstkowy",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/j-radiocarp__wrist_front.webp",
      "info": "Staw eliptyczny. Zgięcie dłoniowe i grzbietowe ręki oraz odwodzenie promieniowe i łokciowe.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "staw eliptyczny, dwuosiowy"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "powierzchnia stawowa nadgarstkowa kości promieniowej i krążek stawowy",
            "szereg bliższy nadgarstka: kość łódeczkowata, księżycowata i trójgraniasta"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadło poboczne promieniowe nadgarstka",
            "Więzadło poboczne łokciowe nadgarstka",
            "Więzadło promieniowo-nadgarstkowe dłoniowe",
            "Więzadło promieniowo-nadgarstkowe grzbietowe",
            "Troczek zginaczy (więzadło poprzeczne nadgarstka)",
            "Więzadło łokciowo-nadgarstkowe dłoniowe",
            "Więzadło promieniste nadgarstka",
            "Więzadło grochowato-haczykowe",
            "Więzadło grochowato-śródręczne",
            "Więzadła międzynadgarstkowe grzbietowe",
            "Więzadła nadgarstkowo-śródręczne grzbietowe",
            "Więzadła nadgarstkowo-śródręczne dłoniowe"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "zgięcie dłoniowe i grzbietowe",
            "odwodzenie promieniowe i łokciowe",
            "ruch obwodzenia"
          ]
        }
      ]
    }
  },
  {
    "after": "j-radiocarp",
    "card": {
      "id": "lig-collaterale-carpi-radiale",
      "latin": "Ligamentum collaterale carpi radiale",
      "polish": "Więzadło poboczne promieniowe nadgarstka",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-collaterale-carpi-radiale.webp",
      "info": "Biegnie od wyrostka rylcowatego kości promieniowej do kości łódeczkowatej. Ogranicza odwodzenie łokciowe ręki."
    }
  },
  {
    "after": "lig-collaterale-carpi-radiale",
    "card": {
      "id": "lig-collaterale-carpi-ulnare",
      "latin": "Ligamentum collaterale carpi ulnare",
      "polish": "Więzadło poboczne łokciowe nadgarstka",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-collaterale-carpi-ulnare.webp",
      "info": "Biegnie od wyrostka rylcowatego kości łokciowej do kości trójgraniastej i grochowatej. Ogranicza odwodzenie promieniowe ręki."
    }
  },
  {
    "after": "lig-collaterale-carpi-ulnare",
    "card": {
      "id": "lig-radiocarpale-palmare",
      "latin": "Ligamentum radiocarpale palmare",
      "polish": "Więzadło promieniowo-nadgarstkowe dłoniowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-radiocarpale-palmare.webp",
      "info": "Wzmacnia staw od strony dłoniowej i ogranicza zgięcie grzbietowe ręki."
    }
  },
  {
    "after": "lig-radiocarpale-palmare",
    "card": {
      "id": "lig-radiocarpale-dorsale",
      "latin": "Ligamentum radiocarpale dorsale",
      "polish": "Więzadło promieniowo-nadgarstkowe grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-radiocarpale-dorsale.webp",
      "info": "Wzmacnia staw od strony grzbietowej i ogranicza zgięcie dłoniowe ręki."
    }
  },
  {
    "after": "lig-radiocarpale-dorsale",
    "card": {
      "id": "retinaculum-flexorum",
      "latin": "Retinaculum musculorum flexorum",
      "polish": "Troczek zginaczy (więzadło poprzeczne nadgarstka)",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/retinaculum-flexorum.webp",
      "info": "Rozpięty między wyniosłościami promieniową i łokciową nadgarstka. Zamyka od przodu kanał nadgarstka, w którym biegną ścięgna zginaczy i nerw pośrodkowy."
    }
  },
  {
    "after": "retinaculum-flexorum",
    "card": {
      "id": "lig-ulnocarpale-palmare",
      "latin": "Ligamentum ulnocarpale palmare",
      "polish": "Więzadło łokciowo-nadgarstkowe dłoniowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-ulnocarpale-palmare.webp",
      "info": "Biegnie od krążka stawowego i wyrostka rylcowatego kości łokciowej do kości księżycowatej i trójgraniastej. Wzmacnia staw od strony dłoniowej i łokciowej."
    }
  },
  {
    "after": "lig-ulnocarpale-palmare",
    "card": {
      "id": "lig-carpi-radiatum",
      "latin": "Ligamentum carpi radiatum",
      "polish": "Więzadło promieniste nadgarstka",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-carpi-radiatum.webp",
      "info": "Rozchodzi się promieniście od kości główkowatej do sąsiednich kości nadgarstka po stronie dłoniowej. Wzmacnia staw śródnadgarstkowy."
    }
  },
  {
    "after": "lig-carpi-radiatum",
    "card": {
      "id": "lig-pisohamatum",
      "latin": "Ligamentum pisohamatum",
      "polish": "Więzadło grochowato-haczykowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-pisohamatum.webp",
      "info": "Łączy kość grochowatą z haczykiem kości haczykowatej. Jest przedłużeniem ścięgna mięśnia zginacza łokciowego nadgarstka."
    }
  },
  {
    "after": "lig-pisohamatum",
    "card": {
      "id": "lig-pisometacarpale",
      "latin": "Ligamentum pisometacarpale",
      "polish": "Więzadło grochowato-śródręczne",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-pisometacarpale.webp",
      "info": "Łączy kość grochowatą z podstawą kości śródręcza V. Przenosi siłę mięśnia zginacza łokciowego nadgarstka na śródręcze."
    }
  },
  {
    "after": "lig-pisometacarpale",
    "card": {
      "id": "ligg-intercarpalia-dorsalia",
      "latin": "Ligamenta intercarpalia dorsalia",
      "polish": "Więzadła międzynadgarstkowe grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-intercarpalia-dorsalia.webp",
      "info": "Łączą sąsiednie kości nadgarstka od strony grzbietowej. Wzmacniają stawy między kośćmi nadgarstka."
    }
  },
  {
    "after": "ligg-intercarpalia-dorsalia",
    "card": {
      "id": "ligg-carpometacarpalia-dorsalia",
      "latin": "Ligamenta carpometacarpalia dorsalia",
      "polish": "Więzadła nadgarstkowo-śródręczne grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-carpometacarpalia-dorsalia.webp",
      "info": "Łączą kości szeregu dalszego nadgarstka z podstawami kości śródręcza II-V od strony grzbietowej. Wzmacniają mało ruchome stawy nadgarstkowo-śródręczne."
    }
  },
  {
    "after": "ligg-carpometacarpalia-dorsalia",
    "card": {
      "id": "ligg-carpometacarpalia-palmaria",
      "latin": "Ligamenta carpometacarpalia palmaria",
      "polish": "Więzadła nadgarstkowo-śródręczne dłoniowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-carpometacarpalia-palmaria.webp",
      "info": "Łączą kości szeregu dalszego nadgarstka z podstawami kości śródręcza II-V od strony dłoniowej. Wzmacniają stawy nadgarstkowo-śródręczne."
    }
  },
  {
    "after": "ligg-carpometacarpalia-palmaria",
    "card": {
      "id": "j-radioulndist",
      "latin": "Articulatio radioulnaris distalis",
      "polish": "Staw promieniowo-łokciowy dalszy",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/j-radioulndist__hand_front.webp",
      "info": "Staw obrotowy. Kość promieniowa obraca się wokół głowy kości łokciowej przy nawracaniu i odwracaniu przedramienia.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "staw obrotowy, jednoosiowy"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "obwód stawowy głowy kości łokciowej",
            "wcięcie łokciowe kości promieniowej",
            "krążek stawowy oddziela głowę kości łokciowej od nadgarstka"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadło promieniowo-łokciowe dłoniowe",
            "Krążek stawowy (trójkątny)"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "nawracanie i odwracanie (razem ze stawem promieniowo-łokciowym bliższym)"
          ]
        }
      ]
    }
  },
  {
    "after": "j-radioulndist",
    "card": {
      "id": "lig-radioulnare-palmare",
      "latin": "Ligamentum radioulnare palmare",
      "polish": "Więzadło promieniowo-łokciowe dłoniowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-radioulnare-palmare.webp",
      "info": "Wzmacnia od strony dłoniowej staw promieniowo-łokciowy dalszy i stabilizuje kość promieniową względem łokciowej."
    }
  },
  {
    "after": "lig-radioulnare-palmare",
    "card": {
      "id": "discus-articularis-radioulnaris",
      "latin": "Discus articularis",
      "polish": "Krążek stawowy (trójkątny)",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/discus-articularis-radioulnaris.webp",
      "info": "Chrząstka włóknista między głową kości łokciowej a kośćmi nadgarstka. Łączy dalsze końce kości przedramienia i przenosi część obciążeń z ręki na kość łokciową."
    }
  },
  {
    "after": "discus-articularis-radioulnaris",
    "card": {
      "id": "j-mcp",
      "latin": "Articulationes metacarpophalangeae",
      "polish": "Stawy śródręczno-paliczkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/j-mcp__hand_front.webp",
      "info": "Stawy kuliste o ruchach ograniczonych przez więzadła. Zgięcie i prostowanie oraz odwodzenie i przywodzenie palców.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "stawy kuliste, czynnościowo dwuosiowe (kciuk: zawiasowy)"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "głowy kości śródręcza",
            "podstawy paliczków bliższych"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadła poboczne stawów śródręczno-paliczkowych",
            "Więzadła dłoniowe (płytki dłoniowe)",
            "Więzadło poprzeczne głębokie śródręcza"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "zgięcie i prostowanie palców",
            "odwodzenie i przywodzenie palców"
          ]
        }
      ]
    }
  },
  {
    "after": "j-mcp",
    "card": {
      "id": "ligg-collateralia-mcp",
      "latin": "Ligamenta collateralia",
      "polish": "Więzadła poboczne stawów śródręczno-paliczkowych",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-collateralia-mcp.webp",
      "info": "Biegną po bokach stawów od głów kości śródręcza do podstaw paliczków bliższych. Napinają się przy zgięciu i ograniczają ruchy na boki."
    }
  },
  {
    "after": "ligg-collateralia-mcp",
    "card": {
      "id": "ligg-palmaria-mcp",
      "latin": "Ligamenta palmaria",
      "polish": "Więzadła dłoniowe (płytki dłoniowe)",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-palmaria-mcp.webp",
      "info": "Wzmacniają torebki stawów od strony dłoniowej. Ograniczają przeprost palców."
    }
  },
  {
    "after": "ligg-palmaria-mcp",
    "card": {
      "id": "lig-metacarpale-transversum-profundum",
      "latin": "Ligamentum metacarpale transversum profundum",
      "polish": "Więzadło poprzeczne głębokie śródręcza",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/lig-metacarpale-transversum-profundum.webp",
      "info": "Łączy więzadła dłoniowe stawów śródręczno-paliczkowych II-V. Utrzymuje głowy kości śródręcza razem."
    }
  },
  {
    "after": "lig-metacarpale-transversum-profundum",
    "card": {
      "id": "j-ipm",
      "latin": "Articulationes interphalangeae manus",
      "polish": "Stawy międzypaliczkowe ręki",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/j-ipm__hand_front.webp",
      "info": "Stawy zawiasowe. Zgięcie i prostowanie paliczków.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "stawy zawiasowe, jednoosiowe"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "głowa paliczka bliższego lub środkowego",
            "podstawa paliczka położonego dalej"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadła poboczne stawów międzypaliczkowych"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "zgięcie i prostowanie"
          ]
        }
      ]
    }
  },
  {
    "after": "j-ipm",
    "card": {
      "id": "ligg-collateralia-ipm",
      "latin": "Ligamenta collateralia",
      "polish": "Więzadła poboczne stawów międzypaliczkowych",
      "system": "kostno-stawowy",
      "group": "Kończyna górna",
      "groupSlug": "konczyna-gorna",
      "subgroup": "50. Stawy ręki",
      "subgroupSlug": "rozdzial-50",
      "image": "/stawy/ligg-collateralia-ipm.webp",
      "info": "Biegną po bokach stawów międzypaliczkowych. Ograniczają ruchy na boki i stabilizują stawy przy zginaniu."
    }
  },
  {
    "after": "pv-sacroil",
    "card": {
      "id": "ligg-sacroiliaca-anteriora",
      "latin": "Ligamenta sacroiliaca anteriora",
      "polish": "Więzadła krzyżowo-biodrowe przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/ligg-sacroiliaca-anteriora.webp",
      "info": "Wzmacniają przednią część stawu krzyżowo-biodrowego."
    }
  },
  {
    "after": "ligg-sacroiliaca-anteriora",
    "card": {
      "id": "ligg-sacroiliaca-posteriora",
      "latin": "Ligamenta sacroiliaca posteriora",
      "polish": "Więzadła krzyżowo-biodrowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/ligg-sacroiliaca-posteriora.webp",
      "info": "Bardzo silne więzadła. Utrzymują kość krzyżową między kośćmi biodrowymi i przenoszą ciężar tułowia na miednicę."
    }
  },
  {
    "after": "ligg-sacroiliaca-posteriora",
    "card": {
      "id": "lig-iliolumbale",
      "latin": "Ligamentum iliolumbale",
      "polish": "Więzadło biodrowo-lędźwiowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-iliolumbale.webp",
      "info": "Łączy wyrostek poprzeczny kręgu L5 z grzebieniem biodrowym. Stabilizuje połączenie lędźwiowo-krzyżowe."
    }
  },
  {
    "after": "lig-iliolumbale",
    "card": {
      "id": "lig-sacrotuberale",
      "latin": "Ligamentum sacrotuberale",
      "polish": "Więzadło krzyżowo-guzowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-sacrotuberale.webp",
      "info": "Biegnie od kości krzyżowej do guza kulszowego. Ogranicza pochylanie górnej części kości krzyżowej do przodu."
    }
  },
  {
    "after": "lig-sacrotuberale",
    "card": {
      "id": "lig-sacrospinale",
      "latin": "Ligamentum sacrospinale",
      "polish": "Więzadło krzyżowo-kolcowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-sacrospinale.webp",
      "info": "Biegnie od kości krzyżowej do kolca kulszowego. Stabilizuje kość krzyżową i dzieli wcięcie kulszowe na otwór kulszowy większy i mniejszy."
    }
  },
  {
    "after": "pv-symph",
    "card": {
      "id": "lig-pubicum-superius",
      "latin": "Ligamentum pubicum superius",
      "polish": "Więzadło łonowe górne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-pubicum-superius.webp",
      "info": "Biegnie po górnej krawędzi spojenia łonowego i wzmacnia spojenie."
    }
  },
  {
    "after": "lig-pubicum-superius",
    "card": {
      "id": "lig-inguinale",
      "latin": "Ligamentum inguinale",
      "polish": "Więzadło pachwinowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-inguinale.webp",
      "info": "Biegnie od kolca biodrowego przedniego górnego do guzka łonowego. Ogranicza od dołu ścianę brzucha. Nie wzmacnia stawu."
    }
  },
  {
    "after": "lig-inguinale",
    "card": {
      "id": "lig-pubicum-inferius",
      "latin": "Ligamentum pubicum inferius",
      "polish": "Więzadło łonowe dolne (łukowate)",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/lig-pubicum-inferius.webp",
      "info": "Biegnie łukiem pod dolnym brzegiem spojenia łonowego. Najsilniejsze więzadło spojenia, wzmacnia je od dołu."
    }
  },
  {
    "after": "lig-pubicum-inferius",
    "card": {
      "id": "membrana-obturatoria",
      "latin": "Membrana obturatoria",
      "polish": "Błona zasłonowa",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/membrana-obturatoria.webp",
      "info": "Zamyka otwór zasłonowy, pozostawiając kanał zasłonowy dla naczyń i nerwu zasłonowego. Jest miejscem przyczepu mięśni zasłaniaczy."
    }
  },
  {
    "after": "membrana-obturatoria",
    "card": {
      "id": "discus-interpubicus",
      "latin": "Discus interpubicus",
      "polish": "Krążek międzyłonowy",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "54. Połączenia miednicy",
      "subgroupSlug": "rozdzial-54",
      "image": "/stawy/discus-interpubicus.webp",
      "info": "Chrząstka włóknista łącząca powierzchnie spojeniowe kości łonowych. Amortyzuje obciążenia i umożliwia minimalne ruchy spojenia."
    }
  },
  {
    "after": "j-coxae",
    "card": {
      "id": "lig-iliofemorale",
      "latin": "Ligamentum iliofemorale",
      "polish": "Więzadło biodrowo-udowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/lig-iliofemorale.webp",
      "info": "Najsilniejsze więzadło ciała. Ogranicza prostowanie (przeprost) w stawie biodrowym i pozwala stać bez pracy mięśni."
    }
  },
  {
    "after": "lig-iliofemorale",
    "card": {
      "id": "lig-pubofemorale",
      "latin": "Ligamentum pubofemorale",
      "polish": "Więzadło łonowo-udowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/lig-pubofemorale.webp",
      "info": "Ogranicza odwodzenie i obrót uda na zewnątrz."
    }
  },
  {
    "after": "lig-pubofemorale",
    "card": {
      "id": "lig-ischiofemorale",
      "latin": "Ligamentum ischiofemorale",
      "polish": "Więzadło kulszowo-udowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/lig-ischiofemorale.webp",
      "info": "Wzmacnia torebkę od tyłu. Ogranicza obrót uda do wewnątrz i przywodzenie."
    }
  },
  {
    "after": "lig-ischiofemorale",
    "card": {
      "id": "lig-capitis-femoris",
      "latin": "Ligamentum capitis femoris",
      "polish": "Więzadło głowy kości udowej",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/lig-capitis-femoris.webp",
      "info": "Biegnie od dołu panewki do dołka głowy kości udowej. Prowadzi naczynia odżywiające głowę kości udowej, ma małe znaczenie mechaniczne."
    }
  },
  {
    "after": "lig-capitis-femoris",
    "card": {
      "id": "labrum-acetabuli",
      "latin": "Labrum acetabuli",
      "polish": "Obrąbek panewki",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/labrum-acetabuli.webp",
      "info": "Pierścień włóknisto-chrzęstny na brzegu panewki. Pogłębia panewkę i obejmuje głowę kości udowej, zwiększając stabilność stawu."
    }
  },
  {
    "after": "labrum-acetabuli",
    "card": {
      "id": "lig-transversum-acetabuli",
      "latin": "Ligamentum transversum acetabuli",
      "polish": "Więzadło poprzeczne panewki",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/lig-transversum-acetabuli.webp",
      "info": "Przechodzi nad wcięciem panewki i uzupełnia obrąbek panewki. Pod nim do stawu wchodzą naczynia."
    }
  },
  {
    "after": "lig-transversum-acetabuli",
    "card": {
      "id": "zona-orbicularis",
      "latin": "Zona orbicularis",
      "polish": "Warstwa okrężna",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "58-59. Staw biodrowy",
      "subgroupSlug": "rozdzial-58-59",
      "image": "/stawy/zona-orbicularis.webp",
      "info": "Okrężne włókna torebki stawowej otaczające szyjkę kości udowej. Przytrzymują głowę kości udowej w panewce."
    }
  },
  {
    "after": "j-genus",
    "card": {
      "id": "lig-patellae",
      "latin": "Ligamentum patellae",
      "polish": "Więzadło rzepki",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-patellae.webp",
      "info": "Przedłużenie ścięgna mięśnia czworogłowego od rzepki do guzowatości piszczeli. Przenosi siłę mięśnia przy prostowaniu kolana."
    }
  },
  {
    "after": "lig-patellae",
    "card": {
      "id": "lig-collaterale-tibiale",
      "latin": "Ligamentum collaterale tibiale",
      "polish": "Więzadło poboczne piszczelowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-collaterale-tibiale.webp",
      "info": "Po stronie przyśrodkowej, zrośnięte z łąkotką przyśrodkową. Chroni przed koślawieniem kolana."
    }
  },
  {
    "after": "lig-collaterale-tibiale",
    "card": {
      "id": "lig-collaterale-fibulare",
      "latin": "Ligamentum collaterale fibulare",
      "polish": "Więzadło poboczne strzałkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-collaterale-fibulare.webp",
      "info": "Po stronie bocznej, od nadkłykcia bocznego do głowy strzałki. Chroni przed szpotawieniem kolana."
    }
  },
  {
    "after": "lig-collaterale-fibulare",
    "card": {
      "id": "lig-cruciatum-anterius",
      "latin": "Ligamentum cruciatum anterius",
      "polish": "Więzadło krzyżowe przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-cruciatum-anterius.webp",
      "info": "Zapobiega przesunięciu piszczeli do przodu względem kości udowej, ogranicza przeprost i obrót do wewnątrz."
    }
  },
  {
    "after": "lig-cruciatum-anterius",
    "card": {
      "id": "lig-cruciatum-posterius",
      "latin": "Ligamentum cruciatum posterius",
      "polish": "Więzadło krzyżowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-cruciatum-posterius.webp",
      "info": "Zapobiega przesunięciu piszczeli do tyłu względem kości udowej. Najsilniejsze więzadło kolana."
    }
  },
  {
    "after": "lig-cruciatum-posterius",
    "card": {
      "id": "meniscus-medialis",
      "latin": "Meniscus medialis",
      "polish": "Łąkotka przyśrodkowa",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/meniscus-medialis.webp",
      "info": "Chrząstka włóknista w kształcie litery C. Dopasowuje powierzchnie stawowe, amortyzuje i rozkłada obciążenia. Zrośnięta z więzadłem pobocznym piszczelowym, przez co mniej ruchoma."
    }
  },
  {
    "after": "meniscus-medialis",
    "card": {
      "id": "meniscus-lateralis",
      "latin": "Meniscus lateralis",
      "polish": "Łąkotka boczna",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/meniscus-lateralis.webp",
      "info": "Prawie okrągła (kształt litery O), bardziej ruchoma od przyśrodkowej. Dopasowuje powierzchnie stawowe i amortyzuje obciążenia."
    }
  },
  {
    "after": "meniscus-lateralis",
    "card": {
      "id": "lig-popliteum-obliquum",
      "latin": "Ligamentum popliteum obliquum",
      "polish": "Więzadło podkolanowe skośne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-popliteum-obliquum.webp",
      "info": "Biegnie skośnie po tylnej stronie torebki stawowej jako przedłużenie ścięgna mięśnia półbłoniastego. Wzmacnia torebkę od tyłu i ogranicza przeprost kolana."
    }
  },
  {
    "after": "lig-popliteum-obliquum",
    "card": {
      "id": "retinaculum-patellae-mediale",
      "latin": "Retinaculum patellae mediale",
      "polish": "Troczek przyśrodkowy rzepki",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/retinaculum-patellae-mediale.webp",
      "info": "Pasma włókniste po przyśrodkowej stronie rzepki. Stabilizują rzepkę i chronią ją przed przemieszczeniem na bok."
    }
  },
  {
    "after": "retinaculum-patellae-mediale",
    "card": {
      "id": "retinaculum-patellae-laterale",
      "latin": "Retinaculum patellae laterale",
      "polish": "Troczek boczny rzepki",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/retinaculum-patellae-laterale.webp",
      "info": "Pasma włókniste po bocznej stronie rzepki. Razem z troczkiem przyśrodkowym utrzymują rzepkę w prawidłowym torze ruchu."
    }
  },
  {
    "after": "retinaculum-patellae-laterale",
    "card": {
      "id": "lig-transversum-genus",
      "latin": "Ligamentum transversum genus",
      "polish": "Więzadło poprzeczne kolana",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-transversum-genus.webp",
      "info": "Łączy przednie rogi łąkotki przyśrodkowej i bocznej. Stabilizuje łąkotki."
    }
  },
  {
    "after": "lig-transversum-genus",
    "card": {
      "id": "lig-popliteum-arcuatum",
      "latin": "Ligamentum popliteum arcuatum",
      "polish": "Więzadło podkolanowe łukowate",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-popliteum-arcuatum.webp",
      "info": "Biegnie łukiem od głowy strzałki do tylnej części torebki stawowej. Wzmacnia tylno-boczną część torebki."
    }
  },
  {
    "after": "lig-popliteum-arcuatum",
    "card": {
      "id": "lig-meniscofemorale-posterius",
      "latin": "Ligamentum meniscofemorale posterius",
      "polish": "Więzadło łąkotkowo-udowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-meniscofemorale-posterius.webp",
      "info": "Biegnie od rogu tylnego łąkotki bocznej, za więzadłem krzyżowym tylnym, do kłykcia przyśrodkowego kości udowej. Stabilizuje róg tylny łąkotki bocznej."
    }
  },
  {
    "after": "j-tibiofib",
    "card": {
      "id": "lig-capitis-fibulae-anterius",
      "latin": "Ligamentum capitis fibulae anterius",
      "polish": "Więzadło głowy strzałki przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/lig-capitis-fibulae-anterius.webp",
      "info": "Łączy głowę strzałki z kłykciem bocznym kości piszczelowej od przodu. Wzmacnia staw piszczelowo-strzałkowy."
    }
  },
  {
    "after": "lig-capitis-fibulae-anterius",
    "card": {
      "id": "membrana-interossea-cruris",
      "latin": "Membrana interossea cruris",
      "polish": "Błona międzykostna goleni",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "60-61. Staw kolanowy",
      "subgroupSlug": "rozdzial-60-61",
      "image": "/stawy/membrana-interossea-cruris.webp",
      "info": "Łączy trzony kości piszczelowej i strzałkowej. Jest miejscem przyczepu mięśni goleni i oddziela przednią grupę mięśni od tylnej."
    }
  },
  {
    "after": "j-talocrur",
    "card": {
      "id": "lig-talofibulare-anterius",
      "latin": "Ligamentum talofibulare anterius",
      "polish": "Więzadło skokowo-strzałkowe przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-talofibulare-anterius.webp",
      "info": "Biegnie od kostki bocznej do szyjki kości skokowej. Ogranicza zgięcie podeszwowe z odwracaniem stopy, najczęściej uszkadzane przy skręceniu stawu skokowego."
    }
  },
  {
    "after": "lig-talofibulare-anterius",
    "card": {
      "id": "lig-talofibulare-posterius",
      "latin": "Ligamentum talofibulare posterius",
      "polish": "Więzadło skokowo-strzałkowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-talofibulare-posterius.webp",
      "info": "Biegnie od kostki bocznej do tylnej części kości skokowej. Ogranicza przesunięcie kości skokowej do tyłu."
    }
  },
  {
    "after": "lig-talofibulare-posterius",
    "card": {
      "id": "lig-calcaneofibulare",
      "latin": "Ligamentum calcaneofibulare",
      "polish": "Więzadło piętowo-strzałkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-calcaneofibulare.webp",
      "info": "Biegnie od kostki bocznej do kości piętowej. Ogranicza odwracanie stopy (inwersję)."
    }
  },
  {
    "after": "lig-calcaneofibulare",
    "card": {
      "id": "lig-deltoideum",
      "latin": "Ligamentum deltoideum",
      "polish": "Więzadło trójgraniaste (przyśrodkowe)",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-deltoideum.webp",
      "info": "Wachlarzowate więzadło od kostki przyśrodkowej do kości łódkowatej, skokowej i piętowej. Ogranicza nawracanie stopy (ewersję)."
    }
  },
  {
    "after": "lig-deltoideum",
    "card": {
      "id": "lig-tibiofibulare-anterius",
      "latin": "Ligamentum tibiofibulare anterius",
      "polish": "Więzadło piszczelowo-strzałkowe przednie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-tibiofibulare-anterius.webp",
      "info": "Łączy z przodu dolne końce kości piszczelowej i strzałkowej (więzozrost piszczelowo-strzałkowy). Utrzymuje widełki stawu skokowego."
    }
  },
  {
    "after": "lig-tibiofibulare-anterius",
    "card": {
      "id": "lig-tibiofibulare-posterius",
      "latin": "Ligamentum tibiofibulare posterius",
      "polish": "Więzadło piszczelowo-strzałkowe tylne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-tibiofibulare-posterius.webp",
      "info": "Łączy z tyłu dolne końce kości piszczelowej i strzałkowej. Razem z więzadłem przednim utrzymuje widełki stawu skokowego."
    }
  },
  {
    "after": "j-subtal",
    "card": {
      "id": "lig-talocalcaneum-interosseum",
      "latin": "Ligamentum talocalcaneum interosseum",
      "polish": "Więzadło skokowo-piętowe międzykostne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-talocalcaneum-interosseum.webp",
      "info": "Leży w zatoce stępu między kością skokową a piętową. Najsilniejsze więzadło stawu skokowego dolnego, ogranicza nadmierne odwracanie stopy."
    }
  },
  {
    "after": "lig-talocalcaneum-interosseum",
    "card": {
      "id": "lig-talocalcaneum-laterale",
      "latin": "Ligamentum talocalcaneum laterale",
      "polish": "Więzadło skokowo-piętowe boczne",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-talocalcaneum-laterale.webp",
      "info": "Łączy kość skokową z kością piętową po stronie bocznej. Wzmacnia staw skokowy dolny."
    }
  },
  {
    "after": "j-chopart",
    "card": {
      "id": "lig-bifurcatum",
      "latin": "Ligamentum bifurcatum",
      "polish": "Więzadło rozdwojone",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-bifurcatum.webp",
      "info": "Biegnie od kości piętowej dwoma pasmami do kości łódkowatej i sześciennej. Wzmacnia staw poprzeczny stępu."
    }
  },
  {
    "after": "lig-bifurcatum",
    "card": {
      "id": "lig-calcaneonaviculare-plantare",
      "latin": "Ligamentum calcaneonaviculare plantare",
      "polish": "Więzadło piętowo-łódkowe podeszwowe (sprężynowe)",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-calcaneonaviculare-plantare.webp",
      "info": "Biegnie od podpórki kości skokowej do kości łódkowatej. Podtrzymuje głowę kości skokowej i łuk podłużny przyśrodkowy stopy."
    }
  },
  {
    "after": "lig-calcaneonaviculare-plantare",
    "card": {
      "id": "lig-talonaviculare",
      "latin": "Ligamentum talonaviculare",
      "polish": "Więzadło skokowo-łódkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-talonaviculare.webp",
      "info": "Łączy szyjkę kości skokowej z kością łódkowatą od strony grzbietowej. Wzmacnia staw skokowo-łódkowy."
    }
  },
  {
    "after": "lig-talonaviculare",
    "card": {
      "id": "lig-calcaneocuboideum-plantare",
      "latin": "Ligamentum calcaneocuboideum plantare",
      "polish": "Więzadło piętowo-sześcienne podeszwowe (krótkie podeszwowe)",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-calcaneocuboideum-plantare.webp",
      "info": "Leży głębiej niż więzadło podeszwowe długie i łączy kość piętową z kością sześcienną. Podtrzymuje łuk podłużny boczny stopy."
    }
  },
  {
    "after": "lig-calcaneocuboideum-plantare",
    "card": {
      "id": "lig-calcaneocuboideum-dorsale",
      "latin": "Ligamentum calcaneocuboideum dorsale",
      "polish": "Więzadło piętowo-sześcienne grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-calcaneocuboideum-dorsale.webp",
      "info": "Łączy kość piętową z kością sześcienną od strony grzbietowej. Wzmacnia staw piętowo-sześcienny."
    }
  },
  {
    "after": "lig-calcaneocuboideum-dorsale",
    "card": {
      "id": "ligg-cuneonavicularia-dorsalia",
      "latin": "Ligamenta cuneonavicularia dorsalia",
      "polish": "Więzadła klinowo-łódkowe grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/ligg-cuneonavicularia-dorsalia.webp",
      "info": "Łączą kość łódkowatą z trzema kośćmi klinowatymi od strony grzbietowej. Wzmacniają staw klinowo-łódkowy."
    }
  },
  {
    "after": "ligg-cuneonavicularia-dorsalia",
    "card": {
      "id": "lig-plantare-longum",
      "latin": "Ligamentum plantare longum",
      "polish": "Więzadło podeszwowe długie",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-plantare-longum.webp",
      "info": "Biegnie od kości piętowej do kości sześciennej i podstaw kości śródstopia. Podtrzymuje łuk podłużny boczny stopy."
    }
  },
  {
    "after": "lig-plantare-longum",
    "card": {
      "id": "j-mtp",
      "latin": "Articulationes metatarsophalangeae",
      "polish": "Stawy śródstopno-paliczkowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/j-mtp__forefoot_top.webp",
      "info": "Stawy kuliste o ograniczonych ruchach. Zgięcie podeszwowe i grzbietowe palców oraz niewielkie odwodzenie i przywodzenie.",
      "details": [
        {
          "title": "Rodzaj",
          "items": [
            "stawy kuliste, czynnościowo dwuosiowe"
          ]
        },
        {
          "title": "Budowa",
          "items": [
            "głowy kości śródstopia",
            "podstawy paliczków bliższych"
          ]
        },
        {
          "title": "Więzadła",
          "items": [
            "Więzadła poboczne stawów śródstopno-paliczkowych",
            "Więzadło poprzeczne głębokie śródstopia"
          ]
        },
        {
          "title": "Ruchy",
          "items": [
            "zgięcie podeszwowe i grzbietowe palców",
            "niewielkie odwodzenie i przywodzenie"
          ]
        }
      ]
    }
  },
  {
    "after": "j-mtp",
    "card": {
      "id": "ligg-collateralia-mtp",
      "latin": "Ligamenta collateralia",
      "polish": "Więzadła poboczne stawów śródstopno-paliczkowych",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/ligg-collateralia-mtp.webp",
      "info": "Biegną po bokach stawów od głów kości śródstopia do podstaw paliczków bliższych. Ograniczają ruchy na boki."
    }
  },
  {
    "after": "ligg-collateralia-mtp",
    "card": {
      "id": "lig-metatarsale-transversum-profundum",
      "latin": "Ligamentum metatarsale transversum profundum",
      "polish": "Więzadło poprzeczne głębokie śródstopia",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-metatarsale-transversum-profundum.webp",
      "info": "Łączy głowy kości śródstopia I-V od strony podeszwowej. Utrzymuje je razem i stabilizuje łuk poprzeczny przedstopia."
    }
  },
  {
    "after": "j-lisfranc",
    "card": {
      "id": "ligg-tarsometatarsalia-dorsalia",
      "latin": "Ligamenta tarsometatarsalia dorsalia",
      "polish": "Więzadła stępowo-śródstopne grzbietowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/ligg-tarsometatarsalia-dorsalia.webp",
      "info": "Łączą kości klinowate i sześcienną z podstawami kości śródstopia od strony grzbietowej. Wzmacniają stawy stępowo-śródstopne."
    }
  },
  {
    "after": "ligg-tarsometatarsalia-dorsalia",
    "card": {
      "id": "lig-lisfranci",
      "latin": "Ligamentum cuneometatarsale interosseum",
      "polish": "Więzadło Lisfranca (klinowo-śródstopne międzykostne)",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/lig-lisfranci.webp",
      "info": "Łączy kość klinowatą przyśrodkową z podstawą kości śródstopia II. Najważniejsze więzadło stabilizujące stawy stępowo-śródstopne."
    }
  },
  {
    "after": "lig-lisfranci",
    "card": {
      "id": "ligg-tarsometatarsalia-plantaria",
      "latin": "Ligamenta tarsometatarsalia plantaria",
      "polish": "Więzadła stępowo-śródstopne podeszwowe",
      "system": "kostno-stawowy",
      "group": "Kończyna dolna",
      "groupSlug": "konczyna-dolna",
      "subgroup": "62. Stawy stopy",
      "subgroupSlug": "rozdzial-62",
      "image": "/stawy/ligg-tarsometatarsalia-plantaria.webp",
      "info": "Łączą kości stępu z podstawami kości śródstopia od strony podeszwowej. Wzmacniają stawy stępowo-śródstopne."
    }
  }
];

export const JOINT_INFO: Record<string, { image: string | null; info: string; details?: Detail[] }> = {
  "j-tmj": {
    "image": "/stawy/j-tmj__tmj_right.webp",
    "info": "Umożliwia opuszczanie i unoszenie żuchwy (otwieranie i zamykanie ust), wysuwanie i cofanie oraz ruchy żucia na boki. Ma krążek stawowy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony (zawiasowo-ślizgowy), parzysty, z krążkiem stawowym"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa żuchwy",
          "dół żuchwowy i guzek stawowy kości skroniowej",
          "krążek stawowy dzieli jamę stawu na piętro górne i dolne"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło boczne stawu skroniowo-żuchwowego",
          "Więzadło rylcowo-żuchwowe",
          "Więzadło klinowo-żuchwowe",
          "Krążek stawowy stawu skroniowo-żuchwowego"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "opuszczanie i unoszenie żuchwy",
          "wysuwanie i cofanie",
          "ruchy żucia na boki"
        ]
      }
    ]
  },
  "j-atlantoax": {
    "image": "/stawy/j-atlantoax__atlas_top.webp",
    "info": "Umożliwia obrót głowy razem z kręgiem szczytowym wokół zęba kręgu obrotowego (ruch przeczenia).",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony, obrotowy (jednoosiowy)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw szczytowo-obrotowy pośrodkowy: ząb kręgu obrotowego z dołkiem zęba łuku przedniego kręgu szczytowego i więzadłem poprzecznym",
          "stawy szczytowo-obrotowe boczne: powierzchnie stawowe dolne kręgu szczytowego z górnymi kręgu obrotowego"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło poprzeczne kręgu szczytowego",
          "Więzadła skrzydłowate",
          "Więzadło wierzchołka zęba",
          "Więzadło krzyżowe kręgu szczytowego",
          "Błona szczytowo-potyliczna tylna",
          "Błona pokrywająca",
          "Błona szczytowo-potyliczna przednia"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "obrót głowy w prawo i w lewo"
        ]
      }
    ]
  },
  "j-intervert": {
    "image": "/stawy/j-intervert__spine_right.webp",
    "info": "Łączą trzony kręgów krążkami międzykręgowymi i więzadłami. Amortyzują obciążenia i pozwalają na zginanie, prostowanie, zginanie na boki i skręcanie kręgosłupa.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "połączenia chrzęstne trzonów i stawy międzywyrostkowe"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "trzony kręgów połączone krążkami międzykręgowymi (pierścień włóknisty i jądro miażdżyste)",
          "wyrostki stawowe połączone stawami międzywyrostkowymi (płaskimi)",
          "łuki i wyrostki połączone więzadłami"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło podłużne przednie",
          "Więzadło podłużne tylne",
          "Więzadła żółte",
          "Więzadła międzykolcowe",
          "Więzadło nadkolcowe",
          "Krążek międzykręgowy",
          "Więzadła międzypoprzeczne",
          "Więzadło karkowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zginanie i prostowanie",
          "zginanie na boki",
          "skręcanie"
        ]
      }
    ]
  },
  "j-costovert": {
    "image": "/stawy/j-costovert__costov_front.webp",
    "info": "Łączą żebra z kręgami piersiowymi (staw głowy żebra i staw żebrowo-poprzeczny). Umożliwiają unoszenie i obniżanie żeber podczas oddychania.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie, czynnościowo sprzężone"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw głowy żebra: głowa żebra z dołkami żebrowymi trzonów dwóch sąsiednich kręgów",
          "staw żebrowo-poprzeczny: guzek żebra z dołkiem żebrowym wyrostka poprzecznego (żebra I-X)"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło promieniste głowy żebra",
          "Więzadło żebrowo-poprzeczne boczne",
          "Więzadło żebrowo-poprzeczne górne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "obrót żebra wokół osi szyjki: unoszenie i obniżanie żeber przy wdechu i wydechu"
        ]
      }
    ]
  },
  "j-sternocost": {
    "image": "/stawy/j-sternocost__sternum_front.webp",
    "info": "Stawy między chrząstkami żeber II-VII a mostkiem (chrząstka I żebra łączy się z mostkiem chrząstkozrostem). Umożliwiają niewielkie ruchy żeber przy oddychaniu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie (żebra II-VII), chrząstkozrost (żebro I)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "chrząstki żebrowe II-VII z wcięciami żebrowymi mostka"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła mostkowo-żebrowe promieniste",
          "Więzadła żebrowo-mieczykowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe przy oddychaniu"
        ]
      }
    ]
  },
  "j-acromiocl": {
    "image": "/stawy/j-acromiocl__shoulder_front.webp",
    "info": "Łączy obojczyk z wyrostkiem barkowym łopatki. Umożliwia niewielkie ruchy ślizgowe i obrotowe łopatki względem obojczyka przy ruchach barku.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "koniec barkowy obojczyka",
          "powierzchnia stawowa wyrostka barkowego łopatki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło barkowo-obojczykowe",
          "Więzadło czworoboczne",
          "Więzadło stożkowate",
          "Więzadło poprzeczne górne łopatki"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe i obrotowe łopatki względem obojczyka"
        ]
      }
    ]
  },
  "j-humeri": {
    "image": "/stawy/j-humeri__shoulder_front.webp",
    "info": "Staw kulisty wolny, najbardziej ruchomy staw człowieka. Zgięcie i prostowanie, odwodzenie i przywodzenie, obrót do wewnątrz i na zewnątrz oraz ruch obwodzenia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty wolny, trójosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa kości ramiennej",
          "panewka łopatki pogłębiona obrąbkiem stawowym"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło kruczo-barkowe",
          "Więzadło kruczo-ramienne",
          "Więzadła obrąbkowo-ramienne",
          "Obrąbek panewki łopatki",
          "Więzadło poprzeczne kości ramiennej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "odwodzenie i przywodzenie",
          "obrót do wewnątrz i na zewnątrz",
          "ruch obwodzenia"
        ]
      }
    ]
  },
  "j-cubiti": {
    "image": "/stawy/j-cubiti__elbow_front.webp",
    "info": "Staw złożony (ramienno-łokciowy, ramienno-promieniowy i promieniowo-łokciowy bliższy). Zgięcie i prostowanie przedramienia oraz udział w nawracaniu i odwracaniu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "ramienno-łokciowy: jednoosiowy, zawiasowy (bloczek k. ramiennej z wcięciem bloczkowym k. łokciowej)",
          "ramienno-promieniowy: kulisty, dwuosiowy (główka k. ramiennej z dołkiem stawowym głowy k. promieniowej)",
          "promieniowo-łokciowy bliższy: jednoosiowy, obrotowy (wcięcie promieniowe k. łokciowej i obwód stawowy głowy k. promieniowej otoczony więzadłem pierścieniowatym)"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło poboczne łokciowe",
          "Więzadło poboczne promieniowe",
          "Więzadło pierścieniowate (obrączkowate) kości promieniowej",
          "Więzadło czworokątne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrotowe: nawracanie i odwracanie"
        ]
      }
    ]
  },
  "j-humeroul": {
    "image": "/anat/j-humeroul.webp",
    "info": "Staw zawiasowy. Główna część stawu łokciowego odpowiedzialna za zgięcie i prostowanie przedramienia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw zawiasowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "bloczek kości ramiennej",
          "wcięcie bloczkowe kości łokciowej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost"
        ]
      }
    ]
  },
  "j-humerorad": {
    "image": "/anat/j-humerorad.webp",
    "info": "Staw kulisty o ruchach ograniczonych przez kość łokciową. Uczestniczy w zgięciu i prostowaniu oraz w obrocie kości promieniowej.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty, dwuosiowy (ruchy ograniczone przez kość łokciową)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "główka kości ramiennej",
          "dołek stawowy głowy kości promieniowej"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrót kości promieniowej"
        ]
      }
    ]
  },
  "j-radioulprox": {
    "image": "/stawy/j-radioulprox__forearm_front.webp",
    "info": "Staw obrotowy. Głowa kości promieniowej obraca się we wcięciu promieniowym kości łokciowej podczas nawracania i odwracania przedramienia.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw obrotowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "obwód stawowy głowy kości promieniowej",
          "wcięcie promieniowe kości łokciowej",
          "więzadło pierścieniowate"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Błona międzykostna przedramienia"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "nawracanie i odwracanie (razem ze stawem promieniowo-łokciowym dalszym)"
        ]
      }
    ]
  },
  "pv-sacroil": {
    "image": "/stawy/pv-sacroil__pelvis_front.webp",
    "info": "Staw płaski, prawie nieruchomy (półścisły). Przenosi ciężar tułowia z kręgosłupa na miednicę i kończyny dolne.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski, półścisły"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia uchowata kości krzyżowej",
          "powierzchnia uchowata kości biodrowej"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła krzyżowo-biodrowe przednie",
          "Więzadła krzyżowo-biodrowe tylne",
          "Więzadło biodrowo-lędźwiowe",
          "Więzadło krzyżowo-guzowe",
          "Więzadło krzyżowo-kolcowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "bardzo małe ruchy kiwania kości krzyżowej"
        ]
      }
    ]
  },
  "pv-symph": {
    "image": "/stawy/pv-symph__pelvis_front.webp",
    "info": "Chrzęstne połączenie kości łonowych przez krążek międzyłonowy. Zapewnia stabilność obręczy miednicznej i pozwala na minimalne ruchy, nieco większe podczas porodu.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "spojenie (połączenie chrzęstne)"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnie spojeniowe kości łonowych",
          "krążek międzyłonowy"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło łonowe górne",
          "Więzadło pachwinowe",
          "Więzadło łonowe dolne (łukowate)",
          "Błona zasłonowa",
          "Krążek międzyłonowy"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "minimalne przesunięcia, większe w czasie porodu"
        ]
      }
    ]
  },
  "j-coxae": {
    "image": "/stawy/j-coxae__hip_front.webp",
    "info": "Staw kulisty panewkowy. Zgięcie i prostowanie, odwodzenie i przywodzenie, obrót uda do wewnątrz i na zewnątrz. Głęboka panewka i mocne więzadła dają dużą stabilność przy przenoszeniu ciężaru ciała.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw kulisty panewkowy, trójosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "głowa kości udowej",
          "panewka kości miednicznej (powierzchnia księżycowata) pogłębiona obrąbkiem panewki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło biodrowo-udowe",
          "Więzadło łonowo-udowe",
          "Więzadło kulszowo-udowe",
          "Więzadło głowy kości udowej",
          "Obrąbek panewki",
          "Więzadło poprzeczne panewki",
          "Warstwa okrężna"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "odwodzenie i przywodzenie",
          "obrót do wewnątrz i na zewnątrz",
          "ruch obwodzenia"
        ]
      }
    ]
  },
  "j-genus": {
    "image": "/stawy/j-genus__knee_front.webp",
    "info": "Największy staw człowieka, staw złożony. Zgięcie i prostowanie podudzia, a przy zgiętym kolanie niewielki obrót. Łąkotki i więzadła zapewniają stabilność.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony, zawiasowo-obrotowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "udowo-piszczelowy: kłykcie kości udowej z kłykciami kości piszczelowej, między nimi łąkotki",
          "udowo-rzepkowy: powierzchnia rzepkowa kości udowej z powierzchnią stawową rzepki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło rzepki",
          "Więzadło poboczne piszczelowe",
          "Więzadło poboczne strzałkowe",
          "Więzadło krzyżowe przednie",
          "Więzadło krzyżowe tylne",
          "Łąkotka przyśrodkowa",
          "Łąkotka boczna",
          "Więzadło podkolanowe skośne",
          "Troczek przyśrodkowy rzepki",
          "Troczek boczny rzepki",
          "Więzadło poprzeczne kolana",
          "Więzadło podkolanowe łukowate",
          "Więzadło łąkotkowo-udowe tylne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie i wyprost",
          "obrót do wewnątrz i na zewnątrz przy zgiętym kolanie"
        ]
      }
    ]
  },
  "j-femoropat": {
    "image": "/anat/j-femoropat.webp",
    "info": "Rzepka ślizga się po powierzchni rzepkowej kości udowej. Zwiększa ramię działania mięśnia czworogłowego uda przy prostowaniu kolana.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "część stawu kolanowego"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia rzepkowa kości udowej",
          "powierzchnia stawowa rzepki"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "ślizganie się rzepki w górę i w dół przy prostowaniu i zginaniu kolana"
        ]
      }
    ]
  },
  "j-tibiofib": {
    "image": "/stawy/j-tibiofib__knee_front.webp",
    "info": "Staw płaski. Umożliwia niewielkie ruchy strzałki przy ruchach w stawie skokowym.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw płaski"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "powierzchnia stawowa strzałkowa kości piszczelowej",
          "powierzchnia stawowa głowy strzałki"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło głowy strzałki przednie",
          "Błona międzykostna goleni"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe strzałki"
        ]
      }
    ]
  },
  "j-talocrur": {
    "image": "/stawy/j-talocrur__ankle_right.webp",
    "info": "Staw zawiasowy. Zgięcie grzbietowe i podeszwowe stopy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw zawiasowy, jednoosiowy"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "bloczek kości skokowej",
          "widełki stawu: powierzchnia stawowa dolna kości piszczelowej, kostka przyśrodkowa i kostka boczna"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło skokowo-strzałkowe przednie",
          "Więzadło skokowo-strzałkowe tylne",
          "Więzadło piętowo-strzałkowe",
          "Więzadło trójgraniaste (przyśrodkowe)",
          "Więzadło piszczelowo-strzałkowe przednie",
          "Więzadło piszczelowo-strzałkowe tylne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "zgięcie grzbietowe i podeszwowe"
        ]
      }
    ]
  },
  "j-subtal": {
    "image": "/stawy/j-subtal__ankle_right.webp",
    "info": "Razem ze stawem skokowo-piętowo-łódkowym umożliwia odwracanie i nawracanie stopy (inwersję i ewersję).",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw walcowaty"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "tylna powierzchnia stawowa piętowa kości skokowej",
          "tylna powierzchnia stawowa skokowa kości piętowej"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło skokowo-piętowe międzykostne",
          "Więzadło skokowo-piętowe boczne"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "odwracanie i nawracanie stopy (inwersja i ewersja)"
        ]
      }
    ]
  },
  "j-chopart": {
    "image": "/stawy/j-chopart__ankle_right.webp",
    "info": "Uczestniczy w odwracaniu i nawracaniu stopy oraz w dopasowaniu stopy do podłoża.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "staw złożony"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "staw skokowo-łódkowy: głowa kości skokowej z kością łódkowatą",
          "staw piętowo-sześcienny: kość piętowa z kością sześcienną"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadło rozdwojone",
          "Więzadło piętowo-łódkowe podeszwowe (sprężynowe)",
          "Więzadło skokowo-łódkowe",
          "Więzadło piętowo-sześcienne podeszwowe (krótkie podeszwowe)",
          "Więzadło piętowo-sześcienne grzbietowe",
          "Więzadła klinowo-łódkowe grzbietowe",
          "Więzadło podeszwowe długie"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "udział w odwracaniu i nawracaniu stopy"
        ]
      }
    ]
  },
  "j-lisfranc": {
    "image": "/stawy/j-lisfranc__ankle_top.webp",
    "info": "Mało ruchome stawy. Zapewniają sztywność i sprężystość przedniej części stopy.",
    "details": [
      {
        "title": "Rodzaj",
        "items": [
          "stawy płaskie, mało ruchome"
        ]
      },
      {
        "title": "Budowa",
        "items": [
          "kości klinowate i kość sześcienna z podstawami kości śródstopia I-V"
        ]
      },
      {
        "title": "Więzadła",
        "items": [
          "Więzadła stępowo-śródstopne grzbietowe",
          "Więzadło Lisfranca (klinowo-śródstopne międzykostne)",
          "Więzadła stępowo-śródstopne podeszwowe"
        ]
      },
      {
        "title": "Ruchy",
        "items": [
          "niewielkie ruchy ślizgowe"
        ]
      }
    ]
  },
  "p-staw-biodrowy-budowa-2": {
    "image": "/stawy/labrum-acetabuli.webp",
    "info": "Pierścień włóknisto-chrzęstny na brzegu panewki. Pogłębia panewkę i obejmuje głowę kości udowej, zwiększając stabilność stawu."
  },
  "p-staw-biodrowy-budowa-3": {
    "image": "/stawy/lig-capitis-femoris.webp",
    "info": "Biegnie od dołu panewki do dołka głowy kości udowej. Prowadzi naczynia odżywiające głowę kości udowej, ma małe znaczenie mechaniczne."
  },
  "p-staw-biodrowy-budowa-4": {
    "image": "/stawy/lig-iliofemorale.webp",
    "info": "Najsilniejsze więzadło ciała. Ogranicza prostowanie (przeprost) w stawie biodrowym i pozwala stać bez pracy mięśni."
  },
  "p-staw-biodrowy-budowa-5": {
    "image": "/stawy/lig-pubofemorale.webp",
    "info": "Ogranicza odwodzenie i obrót uda na zewnątrz."
  },
  "p-staw-biodrowy-budowa-6": {
    "image": "/stawy/lig-ischiofemorale.webp",
    "info": "Wzmacnia torebkę od tyłu. Ogranicza obrót uda do wewnątrz i przywodzenie."
  }
};
