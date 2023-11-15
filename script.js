
document.addEventListener("DOMContentLoaded", function() {
    const overdiv1 = document.querySelector(".overdiv1");
    const submitButton = document.getElementById("submit");

    // Show the overlay divs initially
    overdiv1.style.display = "flex";

    // Function to hide the overlay divs
    function hideOverlay() {
        overdiv1.style.display = "none";
        // Additional logic to handle form submission can be added here
    }

    // Hide the overlay divs when the submit button is clicked
    submitButton.addEventListener("click", function() {
        hideOverlay();
    });
});

var text = 
` 
1	James	4,625,363	Mary	3,054,624
2	Robert	4,357,620	Patricia	1,551,159
3	John	4,354,502	Jennifer	1,469,664
4	Michael	4,345,849	Linda	1,448,284
5	David	3,564,272	Elizabeth	1,403,790
6	William	3,484,904	Barbara	1,385,994
7	Richard	2,423,956	Susan	1,102,248
8	Joseph	2,300,049	Jessica	1,047,635
9	Thomas	2,134,536	Sarah	987,732
10	Christopher	2,049,683	Karen	986,072
11	Charles	2,037,956	Lisa	965,306
12	Daniel	1,905,388	Nancy	960,589
13	Matthew	1,620,154	Betty	886,110
14	Anthony	1,409,172	Sandra	873,576
15	Mark	1,349,030	Margaret	867,664
16	Donald	1,308,961	Ashley	852,892
17	Steven	1,284,623	Kimberly	842,541
18	Andrew	1,257,112	Emily	839,846
19	Paul	1,252,337	Donna	819,879
20	Joshua	1,231,302	Michelle	813,985
21	Kenneth	1,204,693	Carol	803,285
22	Kevin	1,178,755	Amanda	773,876
23	Brian	1,170,328	Melissa	755,534
24	George	1,085,858	Deborah	740,449
25	Timothy	1,074,172	Stephanie	739,354
26	Ronald	1,071,731	Dorothy	735,900
27	Jason	1,043,551	Rebecca	729,249
28	Edward	1,041,890	Sharon	720,831
29	Jeffrey	977,308	Laura	711,837
30	Ryan	952,133	Cynthia	705,803
31	Jacob	947,952	Amy	683,154
32	Gary	900,434	Kathleen	679,592
33	Nicholas	899,086	Angela	660,294
34	Eric	882,217	Shirley	651,356
35	Jonathan	857,270	Brenda	606,300
36	Stephen	837,588	Emma	600,812
37	Larry	801,849	Anna	596,649
38	Justin	783,529	Pamela	592,701
39	Scott	770,424	Nicole	591,425
40	Brandon	765,418	Samantha	584,239
41	Benjamin	758,472	Katherine	565,185
42	Samuel	721,821	Christine	556,599
43	Gregory	708,305	Helen	552,703
44	Alexander	691,200	Debra	548,274
45	Patrick	666,181	Rachel	545,644
46	Frank	660,209	Carolyn	537,523
47	Raymond	646,002	Janet	535,102
48	Jack	633,602	Maria	530,981
49	Dennis	610,563	Catherine	527,338
50	Jerry	600,515	Heather	524,158
51	Tyler	597,268	Diane	515,002
52	Aaron	592,045	Olivia	514,993
53	Jose	568,068	Julie	507,070
54	Adam	560,808	Joyce	496,038
55	Nathan	558,970	Victoria	492,988
56	Henry	552,968	Ruth	492,514
57	Zachary	545,562	Virginia	478,066
58	Douglas	545,422	Lauren	472,870
59	Peter	535,380	Kelly	472,293
60	Kyle	482,820	Christina	471,271
61	Noah	464,528	Joan	463,668
62	Ethan	462,185	Evelyn	453,238
63	Jeremy	442,079	Judith	449,653
64	Walter	441,463	Andrea	439,496
65	Christian	438,912	Hannah	439,385
66	Keith	430,292	Megan	438,548
67	Roger	425,514	Cheryl	436,892
68	Terry	422,214	Jacqueline	420,029
69	Austin	421,556	Martha	408,819
70	Sean	421,344	Madison	404,874
71	Gerald	418,373	Teresa	403,495
72	Carl	411,580	Gloria	402,354
73	Harold	408,283	Sara	399,548
74	Dylan	397,475	Janice	398,076
75	Arthur	392,380	Ann	397,270
76	Lawrence	391,246	Kathryn	395,600
77	Jordan	390,269	Abigail	395,172
78	Jesse	386,986	Sophia	388,604
79	Bryan	385,005	Frances	384,820
80	Billy	374,725	Jean	381,720
81	Bruce	374,490	Alice	380,182
82	Gabriel	373,275	Judy	377,385
83	Joe	370,795	Isabella	376,977
84	Logan	366,868	Julia	376,489
85	Alan	353,230	Grace	374,617
86	Juan	351,173	Amber	371,731
87	Albert	348,721	Denise	371,274
88	Willie	347,731	Danielle	369,890
89	Elijah	341,144	Marilyn	368,240
90	Wayne	333,019	Beverly	367,097
91	Randy	328,589	Charlotte	366,983
92	Vincent	323,905	Natalie	363,042
93	Mason	320,453	Theresa	362,271
94	Roy	320,261	Diana	361,781
95	Ralph	312,806	Brittany	359,479
96	Bobby	312,771	Doris	356,209
97	Russell	312,092	Kayla	342,898
98	Bradley	309,375	Alexis	342,478
99	Philip	309,217	Lori	337,992
100	Eugene	308,677	Marie	337,979`

const ord = text.split("\t");

var förnamn =
    ord.filter(function(element) {
        return /^[A-Z]/.test(element)
        
    });

siffra = Math.floor(Math.random() * 200);


var text2 = 
`
SMITH – A smith is a craftsman, and was used for as an occupational title for many different crafts.
JOHNSON – Son of John.
WILLIAMS – Son or family of William.
BROWN – Surname from a nickname for someone with a dark complexion or hair.
JONES – From the family of Jon/John.
GARCIA – Of unknown meaning.
MILLER – Occupational surname for someone who worked in a mill. Grain, wood, etc.
DAVIS – Son of David.
RODRIGUEZ – Son of Rodrigo.
MARTINEZ – Son of Martin.
HERNANDEZ – Son of Hernando.
LOPEZ – Son of Lope/Lobe, meaning “wolf.”
GONZALEZ – Son of Gonzalo.
WILSON – Son of William.
ANDERSON – Son of Andrew.
THOMAS – Son of Thomas.
TAYLOR – From the family of the tailor.
MOORE – A family who lived near a marsh or bog.
JACKSON – Son of Jack/John.
MARTIN – From the god of Mars.
LEE – Family who lived in or near an open meadow or clearing.
PEREZ – Son of Pedro (Pedrez/Perez).
THOMPSON – Son of Thomas.
WHITE – A family of light complexion or hair.
HARRIS – Son of Harry.
SANCHEZ – Son of Sancho.
CLARK – Occupational surname for a clerk.
RAMIREZ – Son of Ramiro.
LEWIS – Son or family of Lewis.
ROBINSON – Son of Robin, a nickname for Robert.
WALKER – Occupational surname for a person who walked on damp cloth in order to thicken it.
YOUNG – Meaning “the younger.” Surname given to a son of a man, when they had the same name.
ALLEN – Little rock.
KING – Ruler of the area.
WRIGHT – Occupational surname meaning a craftsman.
SCOTT – From Scotland.
TORRES – Family who lived near a tower.
NGUYEN – Someone who played a stringed instrument, similar to a lute.
HILL – Family who lived near or on a hill.
FLORES – Son of Floro.
GREEN – Occupational surname for a groundskeeper or family that lived near an open green.
ADAMS – Family of Adam.
NELSON – Son of Neil.
BAKER – Occupational surname for family of a baker.
HALL – Occupational or place surname for a person who lived or worked in a hall.
RIVERA – From the shore or bank of a river.
CAMPBELL – From the Latin De Bello Campo meaning “from the beautiful field.” Could also be from a Scottish/Gaelic nickname (cam béul) meaning “crooked or sassy mouth.”
MITCHELL – Variation on the name Michael, meaning “Who is like God?”
CARTER – Occupational surname for a cart driver.
ROBERTS – Family of Robert.
GOMEZ – Man
PHILLIPS – Family of Phillip.
EVANS – Family of Evan.
TURNER – Occupational surname for someone who worked with a lathe.
DIAZ – Son of Diego
PARKER – Occupational surname for someone worked as a park keeper or game keeper.
CRUZ – Of the Cross – relating to Jesus Christ
EDWARDS – Family of Edward
COLLINS – Family of Coilean
REYES – Literally translated to “Kings,” it refers to the phrase “La Virgen de los Reyes,” meaning the Virgin of the Kings.
STEWART – Occupational surname for someone who was a steward.
MORRIS – Dark-skinned, from the Moors.
MORALES – By the mulberry tree
MURPHY – Irish surname meaning “Descendant of Murchadh.”
COOK – Occupational surname for a cook/chef.
ROGERS – Family of Roger
GUTIERREZ – Son of Gutierre.
ORTIZ – Son of Orti
MORGAN – Welsh surname meaning “by the sea.”
COOPER – Occupational surname for a barrel maker.
PETERSON – Son of Peter.
BAILEY – Occupational surname for a bailiff.
REED – Red – person with reddish complexion.
KELLY – Irish surname meaning “bright headed” or red-headed. From Ó Ceallaigh.
HOWARD – Occupational surname for a “ewe herder.”
RAMOS – Family from the wooded area. From the latin “ramus” meaning “branch.”
KIM – Korean surname meaning “gold.”
COX – Occupational surname, a derivative of “Cook”
WARD – Guardian
RICHARDSON – Son of Richard.
WATSON – Son of Walter. (Watt was a nickname for Walter)
BROOKS – Family who lived by or near a brook (creek).
CHAVEZ – Occupational surname for a key maker.
WOOD – Lives in or near the woods.
JAMES – Family of James (Supplanter).
BENNETT – Family of Benedict (Blessed).
GRAY – From a nickname for someone with gray hair or house.
MENDOZA – People who live near or are from the village of Mendoza, Spain. Basque term meaning “Cold Mountain.”
RUIZ – Son of Ruy or Roy.
HUGHES – Family of Hugh.
PRICE – Family of Rhys.
ALVAREZ – Family of Alvaro.
CASTILLO – Lives in or near the Castle.
SANDERS – Family of Alexander.
PATEL – Indian/Gujarati surname meaning “Landowner.”
MYERS – Occupational surname for a Mayor.
LONG – Surname from a nickname for someone who was tall.
ROSS – Scottish surname indicating someone who lived on or near a point of high land that juts out into a large body of water.
FOSTER – Occupational surname, a contraction of “Forester.”
JIMENEZ – Son of Jim/James.
POWELL – Son of Hywell.
JENKINS – Son of John.
PERRY – Son of Harry.
RUSSELL – Little Red one.
SULLIVAN – Irish surname from descendant of Ó Súileabhán (Little Dark Eyes)
BELL – Occupational surname for a bell-ringer/news announcer. “Hear ye! Hear ye!”
COLEMAN – Son of Colum.
BUTLER – Occupational surname for a butler/wine steward.
HENDERSON – Son of Hendrick/Hendry.
BARNES – Someone who lived or worked in or near a barn.
GONZALES – Son/Family of Gonzalo.
FISHER – Occupational surname for fisherman.
VASQUEZ – Son of Vasco.
SIMMONS – Family of Simon.
ROMERO – From or traveler to Rome.
JORDAN – From the area of the River Jordan.
PATTERSON – Son of Patrick.
ALEXANDER – Defending Men – possibly an occupational surname for a soldier.
HAMILTON – From the crooked hill.
GRAHAM – People who lived in or near a “gravelly homestead” – a contraction of the name Grantham (like Downton Abbey)
REYNOLDS – Family or son of Reginald, or the King (rey).
GRIFFIN – Mythological creature with the body, tail, and back legs of a lion.
WALLACE – Welsh or Foreigner.
MORENO – Brown-skinned.
WEST – From the West.
COLE – From the word “coal” indicating a coal miner or possibly someone with darker skin.
HAYES – Lives in or near an enclosure.
BRYANT – Family of Brian.
HERRERA – Occupational surname for an iron worker (ferrier).
GIBSON – Son of Gilbert (nicknamed Gib).
ELLIS – Son or Famiy of Elijah/Elias
TRAN – Vietnamese surname meaning old, ancient.
MEDINA – From the city.
AGUILAR – From a place name, meaning “Eagle.”
STEVENS – Son of Steven.
MURRAY – Scottish place name from the area of Moray, meaning “seaboard settlement.”
FORD – Lives by a shallow place in the river.
CASTRO – Portuguese/Spanish surname meaning “Castle.”
MARSHALL – Occupational surname for someone who is a lawman or takes care of horses.
OWENS – Son of Owen.
HARRISON – Son of harry.
FERNANDEZ – Son of Fernando
McDONALD – Son/family of Donald
WOODS – Family who lived in or near the woods.
WASHINGTON – From the area belonging to Wassa’s people. Wassa was a feminine Anglo-Saxon given name.
KENNEDY – Irish surname, from Ó Cinnéidigh, meaning Misshapen or ugly head – might be derived from someone who wore a helmet so much their head was misshapen.
WELLS – From the well spring or water hole.
VARGAS – From the pasture.
HENRY – Ruler of the Home.
CHEN – Chinese surname meaning “morning.”
FREEMAN – A person who was not owned or ruled by another.
WEBB – Occupational surname from the name webber, meaning “weaver.”
TUCKER – Occupational surname for someone for a “cloth thickener.”
GUZMAN – Lived in or near the town of Guzmán, Spain.
BURNS – Lives by the stream. From Old English word, burna.
CRAWFORD – By the river/ford crossing
OLSON – Son of Olaf.
SIMPSON – Son of Simon.
PORTER – Occupational surname for someone who transported items.
HUNTER – Occupational surname for an animal hunter/trapper.
GORDON – Scottish surname meaning “spacious fort or home.”
MENDEZ – Contraction of Menendez, meaning son of Mendo.
SILVA – Portuguese surname meaning by the woods or forest.
SHAW – Family who lived near a dense wooded area.
SNYDER – Occupational surname for a clothing tailor.
MASON – Occupational surname for a bricklayer.
DIXON – Son of Dick/Richard.
MUÑOZ – Son of Muño, a personal name that means “hill.”
HUNT – Hunter.
HICKS – Family of Richard.
HOLMES – Lives near a small island or islet.
PALMER – Pilgrim.
WAGNER – Occupational surname for a wagon maker.
BLACK – Person who is darker in complexion.
ROBERTSON – Son of Robert.
BOYD – Scottish surname, from the Celtic term “boidhe” meaning fair or yellow.
ROSE – Lives near the roses.
STONE – Occupational surname for someone who worked with stone, or a family who lived near a stony area.
SALAZAR – From Salazar, Spain. Salazar literally translates to “old hall.”
FOX – Cunning like a fox, or a person with red hair.
WARREN – Lives near a warren/animal enclosure.
MILLS – Occupational surname for one who lived near or worked in a mill.
MEYER – Mayor.
RICE – Welsh surname meaning “fiery warrior” based on the name Rhys.
SCHMIDT – Occupational surname, German form of Smith – meaning ironworker or tradesman.
GARZA – The heron bird.
DANIELS – Family of Daniel.
FERGUSON – Son of Fergus.
NICHOLS – Family of Nicholas.
STEPHENS – Family of Stephen.
SOTO – Lives in or near the small forest.
WEAVER – Occupational surname for a weaver of cloth.
RYAN – Irish surname and given name meaning “descendant of a follower of Rían”
GARDNER – Occupational surname for a gardener/groundskeeper.
PAYNE – Originally meaning pagan.
GRANT – Large, great.
DUNN – Dark or brown in complexion.
KELLEY – Irish surname meaning “bright headed” or red-headed. From Ó Ceallaigh.
SPENCER – Occupational surname for a butler or steward of a manor.
HAWKINS – From the hawk’s place.
ARNOLD – Power of the Eagle.
PIERCE – Family of Peter.
VAZQUEZ – Son of Vasco.
HANSEN – Son of Hans.
PETERS – Family o Peter.
SANTOS – Saints or Family of Santo.
HART – Irish surname, from the Gaelic Ó hAirt meaning ‘descendant of Art.’
BRADLEY – From the broad meadow.
KNIGHT – Occupational surname for a knight or someone who worked in a knight’s household.
ELLIOTT – Family of Elias.
CUNNINGHAM – Scottish surname from the Gaelic Ó Cuinneagáin meaning “descendant of the leader.”
DUNCAN – Irish surname from the Gaelic meaning “brown chief.”
ARMSTRONG – Literally means strong man.
HUDSON – Son of Hugh.
CARROLL – Irish surname from the Gaelic “O Cearbhaill” meaning “fierce in battle.”
LANE – Irish surname from O’Laighin, meaning the descendant of Laighean.
RILEY – From the rye clearing.
ANDREWS – Family of Andrew.
ALVARADO – From the white land.
RAY – Ray of sunshine, or King.
DELGADO – Slender, skinny.
BERRY – From the fortress, castle.
PERKINS – Son of Peter.
HOFFMAN – German occupational surname meaning property manager.
JOHNSTON – From John’s town.
MATTHEWS – Son of Matthew.
PEÑA – Lives near the rock or cliff.
RICHARDS – Family of Richard.
CONTRERAS – From the town of Contreras, Spain. Liiterally means “opposite.”
WILLIS – Family of William.
CARPENTER – Occupational surname for a carpenter.
LAWRENCE – Family of Lawrence or from an area named Laurence.
SANDOVAL – From Sandoval, Spain. Literally means “land of forest.”
GUERRERO – Soldier, warrior.
GEORGE – Family of George (Farmer).
CHAPMAN – Occupational surname meaning tradesperson or merchant.
RIOS – Person who lived near the river.
ESTRADA – Literally means “street” or “way”
ORTEGA – From Ortega, Spain.
WATKINS – Family of Walter/Watt
GREENE – Lives in or near a green area.
NUÑEZ – Son of Nuño
WHEELER – Occupational surname for a person who made wagon wheels.
VALDEZ – Son of Valdo/Waldo.
HARPER – Occupational surname for someone who played or made harps.
BURKE – From the burg (town) of the castle.
LARSON – Son of Lars.
SANTIAGO – Of the Saint Tiago/Diego.
MALDONADO – Ill-favored.
MORRISON – Son of Morris.
FRANKLIN – Free man.
CARLSON – Son of Carl.
AUSTIN – Family of Augustin/Augustine.
DOMINGUEZ – Son of Domingo
CARR – From an area of wet, rough ground
LAWSON – Son of Lawrence
JACOBS – Family of Jacobs
O’BRIEN – Of the Family of Brien
LYNCH – Anglicized version of the Irish surname Ó Loingsigh, meaning “descendant of the mariner.”
SINGH – Lion-like.
VEGA – From the plain, meadow.
BISHOP – Occupational surname for a bishop.
MONTGOMERY – From a mountain name in France.
OLIVER – Elf Army
JENSEN – Son of Jens
HARVEY – Worthy of Battle.
WILLIAMSON – Son of William
GILBERT – Bright Pledge.
DEAN – From the valley.
SIMS – Family of Simon.
ESPINOZA – From the thorny area.
HOWELL – Anglicized form of the Welsh Hywel, meaning “eminent.”
LI – Chinese surname meaning Plum or Plum Tree.
WONG – Variation of the Korean surname Huang, which literally means “shiny” or “yellow.”
REID – Red-headed or had a ruddy complexion.
HANSON – Son of Hans.
LE – Vietnamese surname meaning lives near a pear tree.
McCOY – Anglicized form of a Scottish surname meaning son of Aodh.
GARRETT – Family of Gerald.
BURTON – From the fortified town.
FULLER – Occupational surname for someone who washed cloth in the clothmaking process.
WANG – Chinese surname meaning “king.”
WEBER – German occupational surname for a weaver.
WELCH – From the same root as “Welsh,” meaning foreigner.
ROJAS – Red-headed or ruddy complexion.
LUCAS – From Lucania, Italy.
MARQUEZ – Son of Marco.
FIELDS – Lived in or near the fields.
PARK – Korean surname, meaning “gourd.”
YANG – Chinese surname meaning “willow tree or aspen.”
LITTLE – Surname from a nick name meaning little man.
BANKS – Lives near hillside or ridge.
PADILLA – Place name, literally means “saucepan or little pot.”
DAY – From the family of David.
WALSH – Welsh, foreigner, stranger – referring to Celt.
BOWMAN – Occupational surname for an archer.
SCHULTZ – Occupational surname for a judge or mayor.
LUNA – From one of the towns named Luna in Spain. Literally means “moon.”
FOWLER – Occupational surname for someone who works with fowl (birds).
MEJIA – Unknown meaning, might be a religious surname referring to the Messiah.
DAVIDSON – Son of David.
ACOSTA – From the coastal region.
BREWER – Occupational surname for a brewer (beer or ale maker).
MAY – Family of Matthew.
HOLLAND – From the Netherlands/Holland.
JUAREZ – Son of Suero. Variation of Suarez.
NEWMAN – Stranger, newcomer.
PEARSON – Son of Piers.
CURTIS – Person with manners. Courteous.
CORTÉZ – Person with manners. Courteous.
DOUGLAS – From the dark or green river.
SCHNEIDER – Occupational surname for a tailor.
JOSEPH – He will add.
BARRETT – Warlike person, quarrelsome.
NAVARRO – Person from Navarre, France.
FIGUEROA – Lives near the fig tree.
KELLER – German occupational surname for a winemaker.
ÁVILA – From the city of Avila, Spain.
WADE – By the ford.
MOLINA – Occupational surname for a miller.
STANLEY – Lives near the stone clearing.
HOPKINS – From the family of Hob (nickname for Robert).
CAMPOS – Lives in or near the countryside.
BARNETT – From the place near the clearing (burned place).
BATES – Son of Bartholomew.
CHAMBERS – Occupational surname, servant who worked the bedrooms or chambers.
CALDWELL – Lives by the cold well.
BECK – Leaves by the stream.
LAMBERT – From the bright land.
MIRANDA – Place name, meaning a family who had a great (physical) view or outlook.
BYRD – Occupational surname for someone who worked with birds.
CRAIG – Lives near the outcropping of rocks.
AYALA – Lives near the hillside or pasture.
LOWE – Lives on or near the prominent, small hill.
FRAZIER – Scottish clan surname, meaning varies but possibly “near the strawberry field.”
POWERS – A person or family who came from the town of Poix in France.
NEAL – Son of Niall, literally meaning “cloud” or “champion.”
LEONARD – With the strength of a lion.
GREGORY – Possibly from “Gregorian” monks, literally means “watchful, awake.”
CARRILLO – Spanish surname, literally means “cheek.” From cart/wagon, so it may be occupational.
SUTTON – From the South.
FLEMING – Flemish (Belgian/Dutch) person or from Flanders, Belgium.
RHODES – From a clearing in the woods
SHELTON – From the ledge/enclosure. Place name.
SCHWARTZ – Person of dark or swarthy complexion. Literally means “black.”
NORRIS – From the North. Northerner.
JENNINGS – Family of “little” John.
WATTS – Family of Walter.
DURAN – Literally means durable, hard. Perhaps to describe a person who is steadfast or stubborn.
WALTERS – Family of Walter.
COHEN – Occupational Hebrew surname for a priest.
McDANIEL – Son of Daniel.
MORAN – Sea Warriors.
PARKS – Living in or near a green area, or occupational surname for a groundskeeper.
STEELE – Occupational name for a foundry/steel worker.
VAUGHN – From the Welsh “fychan” meaning small, little
BECKER – Either an occupational surname meaning “baker” or used for a family who lived by a stream.
HOLT – Lives by or near the woodlands.
DELEON – Family of Leon.
BARKER – Occupational surname for someone who either tanned leather (from the bark of a tree), or from the Old French Berchier, which was a shepherd.
TERRY – Power of the Theudo people.
HALE – From the remote valley.
LEON – Lion-like.
HAIL – From the remote valley.
BENSON – Son of Benjamin.
HAYNES – Enclosure.
HORTON – From the farm on muddy soil.
MILES – Son of Mile.
LYONS – Son or family of Lyon.
PHAM – Vietnamese surame meaning “extensive.”
GRAVES – Occupational surname for a steward, from from Middle English word “greyve.”
BUSH – Lives near the bush or thicket.
THORNTON – Lives in or near the town with thorns.
WOLFE – Wolf or Wolf-like.
WARNER – Guard.
CABRERA – From the place of goats.
McKINNEY – Form of the Gaelic “Mac Cionaodha” meaning son of Cionaodha (pagan god of fire).
MANN – Strong, manly.
ZIMMERMAN – Occupational surname for a master carpenter.
DAWSON – Son of David. Daw was a nickname for David.
LARA – Spanish geographical surname for someone who came from Lara de los Infantes, a small community in the province of Burgos, Spain.
FLETCHER – Folk army.
PAGE – English occupational surname for a page.
McCARTHY – Form of the Gaelic “Mac Carthaigh” meaning son of Carthach (loving).
LOVE – From the French “louve” meaning a female wolf.
ROBLES – From the village of Robles, in the province of Leon, Spain. Literally means “oak.”
CERVANTES – From old Spanish meaning “servant” or the word ciervo, meaning “stag” or a “woman’s man.”
SOLIS – From the village or town of Soler.
ERICKSON – Son of Eric.
REEVES – Occupational surname meaning sheriff or local official.
CHANG – Chinese surname with many meanings. One being an occupational surname for a bow maker.
KLEIN – Small.
SALINAS – Lives in a large building or fortress.
FUENTES – Fountains.
BALDWIN – Brave friend.
DANIEL – God is my judge.
SIMON – One who harkens.
VELASQUEZ – Son of Velasco.
HARDY – Bold, Courageous.
HIGGINS – From the Irish surname Ó Huiginn meaning “descendant of Uigin” (Viking).
AGUIRRE – From a prominent place.
LIN – Chines surname meaning “from the forest.”
CUMMINGS – Possibly from the French town Comines.
CHANDLER – Occupational surname for a candle-maker.
SHARP – Smart person.
BARBER – Occupational surname for a barber.
BOWEN – Welsh surname meaning Son of Owain.
OCHOA – Basque surname meaning “The wolf.”
DENNIS – Family of Dennis.
ROBBINS – Family of Robin.
LIU – Chinese surnmae meaning “to kill, destroy.”
RAMSEY – geographical surname from the town of Ramsey, UK.
FRANCIS – Person from France or “free man.”
GRIFFITH – Leader with a strong Grip.
PAUL – Small.
BLAIR – Battlefield.
O’CONNOR – Son of Connor.
CARDENAS – From the land of thorns.
PACHECO – Noble one, or person from France.
CROSS – geographical for someone who lived near a crossing, or occupational for someone who carried a cross in church.
CALDERON – Spanish occupational surname for one who makes or sells cooking vessels (i.e. cauldrons).
QUINN – An Anglicized form of the Gaelic surname O’ Cuinn, meaning “counsel.”
MOSS – A contraction of the name Moses, meaning “born of a god.”
SWANSON – Son of Swan or an occupational surname for a herdsman (swain).
CHAN – Chinese surname literally meaning field or plain.
RIVAS – From the sea side or river bank.
KHAN – Chief, ruler.
RODGERS – Family of Roger.
SERRANO – Lives near a mountain ridge or collection of hills.
FITZGERALD – Son of Gerald.
ROSALES – From the place of roses.
STEVENSON – Son of Steven.
CHRISTENSEN – Son of Christian.
MANNING – Strong, valiant.
GILL – Nickname for William.
CURRY – geographical surname for families from a town named Curry.
McLAUGHLIN – Son of Lochlann, meaning “lake land.”
HARMON – Form of the name Herman, meaning “army man.”
McGEE – Gaelic surname meaning “Son of Aodh,” meaning “fire.”
GROSS – Big, large.
DOYLE – Irish surname from the Gaelic “Dhubh-ghall” meaning “dark stranger.”
GARNER – Contraction of Gardener or occupational surname for someone who was in charge of the storehouse (granary).
NEWTON – From the new town.
BURGESS – Free man of a fortified town.
REESE – From the given name Rhys, meaning “enthusiasm, passion.”
WALTON – From the walled town.
BLAKE – White complected or white haired.
TRUJILLO – Family from the city of Trujillo, Spain. Literally means citadel of Julian (Turro-Julio).
ADKINS – Family or son of Adam.
BRADY – Possibly from the Gaelic surname “Mac Bradaigh” son of the thief, or from the early English “brad-eage” meaning “broad eye” or someone with excellent eyesight.
GOODMAN – Man of god, or landowner.
ROMAN – Person from Rome, Italy.
WEBSTER – Occupational surname for a weaver.
GOODWIN – Good friend.
FISCHER – Fisherman.
HUANG – Chinese surname that means “bright” or “yellow.”
POTTER – Occupational surname for someone who made pottery.
DELACRUZ – Literally translates to “of the cross.”
MONTOYA – From the hills and valleys.
TODD – Fox.
WU – Chinese surname meaning “gateway to heaven.”
HINES – Occupational surname for a deer keeper or tender.
MULLINS – French occupational surname for someone who worked in a mill.
CASTANEDA – Literally translates to “chestnut,” and might have been used to describe a person with reddish-brown hair or worked a chestnut grove.
MALONE – From the Gaelic surname “O’Maoileoin” meaning follower of St. John.
CANNON – Occupational surname for someone who worked at a house of clergy.
TATE – Cheerful person.
MACK – Son of…
SHERMAN – Literally translates to “shear man,” an occupational surname for someone who trimmed pills off the surface of fine cloth.
HUBBARD – Variation of the name Hubert, meaning “bright heart.”
HODGES – Family of Roger.
ZHANG – Chinese surname meaning “archer.”
GUERRA – Literally means “war,” used for a stubborn person or soldier.
WOLF – Son of Wolfgang.
VALENCIA – From Valencia, Spain. Means “valor, courage.”
SAUNDERS – Family of Alexander.
FRANCO – Person from France.
ROWE – geographical surname of someone who lived by a “row” of something, or from Rowland, meaning “Renowned Wolf.”
GALLAGHER – Irish surname meaning descendant of Gallchobhair. Literally means “foreign help.”
FARMER – Occupational surname for a person who worked a farm.
HAMMOND – From the Norse Viking name “Hamundr,” meaning “high protection.”
HAMPTON – From the town near the water meadow.
TOWNSEND – From the end of the town (town’s end).
INGRAM – People from England.
WISE – Wise or educated person.
GALLEGOS – Foreigners.
CLARKE – Occupational surname for a clerk.
BARTON – From the barley town.
SCHROEDER – German occupational surname for a tailor.
MAXWELL – From Mack’s stream, pool, or well.
WATERS – From the place near the water, or family of Walter.
LOGAN – From the Irish surname O’Leoghain, meaning “descendant of the warrior.”
CAMACHO – Twisted or disfigured.
STRICKLAND – From the cow pasture.
NORMAN – From the northern region of France.
PERSON – Son of Per/Peter.
COLÓN – Contraction of the name Colombo, meaning “dove.”
PARSONS – Occupational surname for a parson or priest.
FRANK – Person from France.
HARRINGTON – From the town of stony ground.
GLOVER – Occupational surname for a glove maker or glove merchant.
OSBORNE – Viking name, literally meaning “Bear God”
BUCHANAN – geographical surname from the area of Buchanan in Stirlingshire, UK. From the Gaelic “buth,” meaning house, and “Chanain” meaning of the canon.
CASEY – Irish surname from the Gaelic “O’Cathasaigh,” meaning “son of Cathasach”
FLOYD – From the Welsh Lloyd or Llwyd, meaning “grey.”
PATTON – Son of Pat.
IBARRA – From the valley or hillside.
BALL – Descriptive surname for a bald man.
TYLER – Occupational surname for a tailor.
SUAREZ – From the southern army.
BOWERS – Occupational surname for a worker.
OROZCO – geographical name from Orozco, Spain. Literally means “Son of bringer of wisdom.”
SALAS – Literally means “room, hall.” Could be geographical or occupational for someone who worked in a mansion.
COBB – Nickname meaning “lump” or a short form of the name Jacob.
GIBBS – Family of Gilbert (Gib was a nickname for Gilbert).
ANDRADE – geographical name for people who lived in the small parish of San Martiño de Andrade in the town of Pontedeume, Galicia in Spain.
BAUER – Occupational surname for a worker.
CONNER – An occupational surname for an inspector of weights and measures. Or a form of the Irish/Celtic name Conchobhair, meaning “Descendant of the Hound/Desire” – possibly meaning “wolf lover.”
MOODY – One of brave spirit.
ESCOBAR – geographical surname for someone who lived in or near a place overgrown with broom (a shrub with long, thin green stems).
McGUIRE – From the Irish surname “Mag Uidhir” meaning “son of Odhar” which literally means “pale-complected.”
LLOYD – From the Welsh Llwyd, meaning “grey.”
MUELLER – German occupational surname for a miller or one who works in a mill.
HARTMAN – Dutch surname used for a “hardy/strong man.”
FRENCH – Person from France.
KRAMER – Occupational surname for a merchant or shopkeeper.
McBRIDE – Son of the servant of Brighid.
POPE – Occupational surname. Although it currently means the religious leader of the Catholic church, it was a title used for clergy of any rank.
LINDSEY – From Lincolnshire or Lincoln Island.
VELAZQUEZ – Son of Velasco.
NORTON – From the north town, north settlement.
McCORMICK – Son of Cormac.
SPARKS – Originally a Norse nickname given to someone with dynamic character, full of life.
FLYNN – From the Gaelic surname “O Floinn,” literally meaning ruddy or red-haired.
YATES – Occupational or geographical surname for someone who was a gate-keeper, or lived near a prominent gate.
HOGAN – From the Irish “O Hogain” meaning “descendent of Ógán.”
MARSH – Family who lived near the marshland.
MACIAS – Spanish/Jewish surname meaning “Messiah.”
VILLANUEVA – From the new town.
ZAMORA – Family from the ancient city of Zamora in North West Spain. Literally means “wild olives.”
PRATT – From the Old English word “praett” meaning a trick (like pratfall). Probably used as a nickname for a magician or jokester.
STOKES – From the Old English “stoc” meaning trunk of a tree. Probably a geographical surname for a family who lived near tree stumps.
OWEN – Lives by the yew tree, or person who appears youthful.
BALLARD – Nickname for a person who had a bald head.
LANG – Nickname for a person who was tall.
BROCK – Badger or mischievous person.
VILLARREAL – From the royal estate/village.
CHARLES – Free man.
DRAKE – Dragon. Most probably used for someone who was brave and formidable in battle.
BARRERA – Family that lived near muddy area or ground of clay.
CAIN – Hebrew name meaning “acquired.”
PATRICK – Nobleman.
PIÑEDA – geographical surname from several places in Spain. Literally means “forest of pines.”
BURNETT – Descriptive surname for someone with brown hair (brunette).
MERCADO – Occupational surname for someone who works in a market.
SANTANA – Follower of St. Anna.
SHEPHERD – Occupational surname for a herder of sheep.
BAUTISTA – Baptist or baptized.
ALI – Exalted, revered.
SHAFFER – German occupational surname for someone who was a household manager or steward.
LAMB – Occupational surname for a herder of sheep.
TREVINO – Lives in a house on a boundary, or where boundaries meet.
McKENZIE – Scottish Gaelic clan name meaning “Son of Coinneach,” literally meaning “fair one.”
HESS – Person with hood/helmet. Used for families from the region of Hesse, in Germany.
BEIL – From the German “bil” meaning axe. Most likely an occupational surname for someone who made axes or used them (like a lumberjack).
OLSEN – Son of Olaf.
COCHRAN – Scottish surname for a family who lived near the lowlands of Cochrane.
MORTON – Scottish surname meaning “from the big hill.”
NASH – From the place near the ash tree.
WILKINS – Family of William.
PETERSEN – Son of Peter.
BRIGGS – Variation of the name Bridges – could be geographical for someone who lived near a bridge or occupational for someone who built bridges.
SHAH – Persian surname meaning “king.”
ROTH – German surname meaning “red,” used for a person with red hair.
NICHOLSON – Son of Nicholas.
HOLLOWAY – Lives near the holy spring.
LOZANO – Italian-Swiss surname for people from the city of Locarno, Switzerland.
RANGEL – Spanish/Portuguese surname, meaning unknown.
FLOWERS – Occupational surname for someone who works flowers – like a gardener – or with a bow & arrow. The latter derived from the Middle English “flo/fla” meaning arrow, with the addition of the suffix “er” (one who does or works with).
HOOVER – From the German Huber, meaning “plot of land or farm.”
SHORT – Nickname for a short person.
ARIAS – Occupational surname either from the Latin “aro” meaning farmer, or a craftsman from the Latin “ars” meaning skill.
MORA – Blackberry.
VALENZUELA – geographical surname from several places named Valenzuela in Spain. Literally means “Little Valencia” and Valencia means “bravery, strength.”
BRYAN – High, Noble.
MEYERS – Occupational surname for a mayor.
WEISS – German surname element meaning fair hair or pale complected.
UNDERWOOD – Literally means “below the trees of a forest,” and could be a geographical surname.
BASS – Big/tall or an occupational surname for someone who caught or sold fish.
GREER – From the family of Gregory.
SUMMERS – Occupational surname for a “sumpter” a person who drove pack mules or horses.
HOUSTON – From Hugh’s town.
CARSON – Probably a form of Karsten, or a created name meaning Son of Carr/Kerr.
MORROW – From the row of cottages on the moor.
CLAYTON – From the village of clay (on clay ground).
WHITAKER – From the white field or from the wheat field.
DECKER – Occupational surname for a thatcher or roofer.
YODER – Swiss surname meaning son or family of Theodore.
COLLIER – Occupational surname for someone who sells or burns charcoal.
ZUNIGA – From the town of Estuniga, Spain. Meaning near the water channel, strait.
CAREY – Welsh surname meaning “from the fort on the hill.”
WILCOX – Son of William.
MELENDEZ – Visigoth surname meaning “Entire Gift.”
POOLE – Lives near a small lake or stream.
ROBERSON – Son of Robert.
LARSEN – Son of Lars.
CONLEY – From the Gaelic surname “O’Conghaile,” meaning “son of the brave hound.”
DAVENPORT – geographical surname of families from Davenport in Cheshire, UK. Literally means lives by the stream that leads to the port or bay.
COPELAND – Bought land.
MASSEY – Matthew’s land.
LAM – Chinese surname meaning “Forest.”
HUFF – Lives by a ridge or hollow.
ROCHA – Portuguese surname based on the French surname Roche, which means “lives by the rocky crag.”
CAMERON – Nickname surname meaning “bent nose.”
JEFFERSON – Son of Jeffery.
HOOD – Scottish occupational surname for a maker of hoods or nickname for someone who wore one.
MONROE – Scottish clan name possibly meaning “Man from the river Roe” referring to an Irish place name.
ANTHONY – Unknown meaning.
PITTMAN – Lives by a quarry or pit.
HUYNH – Korean surname meaning “bright” or “yellow.”
RANDALL – Son of Rand/Rande. Literally means “little shield.”
SINGLETON – geographical surname of people who lived in a town named Singleton or in or near a burnt clearing.
KIRK – Literally means “church” and could be a geographical surname for someone who lived near a church or occupational for someone who worked in a church, like a pastor.
COMBS – LIves near a small valley (“cumb”).
MATHIS – Family of Matthew.
CHRISTIAN – Follower of Christ.
SKINNER – Occupational surname for someone who made hides or pelts.
BRADFORD – From the broad or big ford.
RICHARD – Brave ruler.
GALVAN – Nickname for someone who had a receding hairline or was going bald.
WALL – Lives near a city wall or enclosure.
BOONE – Good person or from Bohon, France.
KIRBY – Lives near the Church/Farm.
WILKINSON – Son of William.
BRIDGES – Lives near a bridge or a bridge builder.
BRUCE – From various place names in Normandy, France.
ATKINSON – Family or son of Adam.
VELEZ – Visigoth surname meaning “vigilant people.”
MEZA – Lives in or near a mesa, plateau.
ROY – Royal, Kingly.
VINCENT – Conqueror.
YORK – From the ancient city or county of York, UK. Literally means “yew tree.”
HODGE – Pet form of the name Roger.
VILLA – Homestead.
ABBOTT – Occupational surname for someone employed by or who served as an abbott.
ALLISON – Unknown meaning, but possibly “son of Alan.”
TAPIA – Lives in or behind a mud wall.
GATES – Lives in or behind a gated area.
CHASE – Nickname given to a skilled huntsman.
SOSA – Portuguese surname meaning “from the salt water” (salsa agua)
SWEENEY – From the Scottish/Gaelic surname “Mac Suibhne” literally meaning “young warrior from another land.”
FARRELL – From the Irish surname,”O’ Fearghail” literally means “Descendant of the brave man.”
WYATT – Brave warrior.
DALTON – From the town near the valley, dale.
HORN – An occupational surname for someone who either played a horn instrument or made small articles, like spoons, out of animal horn.
BARRON – Occupational surname for someone with the title of Baron, or a nickname for someone who acts “higher than his station.”
PHELPS – Family of Phillip.
YU – Various meanings.
DICKERSON – Son of Richard.
HEATH – Lives in or near a heath (open, unculivated land) or from a town named Heath.
FOLEY – From the old Gaelic surname, “O’Foghladha,” meaning “Descendant of the pirate.”
ATKINS – Family of Adam.
MATHEWS – Family of Matthew.
BONILLA – Lives in or near Bonilla in the province of Cuenca, Spain. Literally means “Good little one.”
ACEVEDO – Spanish surname meaning someone who lives near or in a grove of holly trees or hollywood.
BENITEZ – Son of Benito.
ZAVALA – From Zawada or Zawady, literally meaning “fortress.”
HENSLEY – geographical surname for someone who lived in or near Hensley, UK. Literally means “a woody clearing.”
GLENN – Lives in or near a valley.
CISNEROS – From Cisneros in the province of Palencia, Spain. Literally means “place of swans.”
HARRELL – Nickname for someone with a good head of thick hair.
SHIELDS – From a shed or shelter.
RUBIO – Red-headed or someone with a ruddy complexion.
HUFFMAN – Man/Steward of a farm.
CHOI – Korean surname meaning “one who oversees the land and the mountain.”
BOYER – Bow maker.
GARRISON – Son of Gerard or Gerald.
ARROYO – geographical surname from any of numerous places named Arroyo, literally meaning “water channel or irrigation channel.”
BOND – Landowner who is bound by loyalty to the local lord.
KANE – From the town of Caen, in Normandy, France. Literally means “battlefield.”
HANCOCK – Son of John.
CALLAHAN – From the Gaelic surname “O Ceallachain.”
DILLON – From or near Dilwyn in Herefordshire, UK. Or a respelling of the Irish “O’Duilleain”, meaning “descendant of the blind one.”
CLINE – From the German “klein” meaning little, small.
WIGGINS – Son of the high noble or warrior.
GRIMES – Viking surname meaning “masked person, fierce.”
ARELLANO – geographical surname for a family from Arellano, spain. Originally from the Latin Aurelianus, which referred to the farm or estate of Aurelius.
MELTON – From the middle settlement.
O’NEILL – Son of Neill.
SAVAGE – Nickname surname for someone who was wild.
HO – Chinese surname with several meanings, descriptive of a chin waddle or characteristic “long-lasting.”
BELTRAN – Spanish surname meaning “bright raven.”
PITTS – Lives near a hollow or pit.
PARRISH – Someone who lives near Paris, France or near a particular “parish” – a geographical area defined by religion.
PONCE – Derived from the name Pontius, from the Greek “pontos” meaning ocean.
RICH – Wealthy or family of Richard.
BOOTH – Lives near a stall or hut.
KOCH – German occupational surname for a cook or kitchen manager.
GOLDEN – Nickname surname for a blonde person, someone with “golden hair.”
WARE – Occupational surname for someone who was employed at a weir or dam, or geographical surname for someone who lived near one.
BRENNAN – From the Irish surname “O Braonáin,” meaning “descendant of Braonán.” Literally means “raindrop or drop of moisture.”
McDOWELL – From the old Gaelic surname, “MacDubhghaill” meaning son of the dark one.
MARKS – Family of Mark or Marcus.
CANTU – Occupational surname for a singer or cantor.
HUMPHREY – From the name elements “hun” meaning “bear cub” and “fried” meaning “peace.” Interpreted as “peaceful warrior.”
BAXTER – Occupational surname meaning a female baker.
SAWYER – Occupational surname for a woodsman or someone who worked with a saw.
CLAY – Occupational or geographical surname for someone who worked with clay or lived on clay land.
TANNER – Occupational surname for someone who tanned hides.
HUTCHINSON – Son of hugh, or son of the close, beloved relative.
KAUR – Sikh surname meaning “Princess.”
BERG – From the mountain.
WILEY – geographical surname for families who came from a number of towns in the U.K. named Wiley. Literally translates to the willow woods.
GILMORE – From the Celtic surname “MacGille Mhoire,” meaning servant of the Virgin Mary.
RUSSO – Descriptive surname for someone who was a red-head or had a ruddy complexion.
VILLEGAS – From the house near the village.
HOBBS – From the family of Hobb, a nickname for Robert.
KEITH – Nickname for an offspring or young person.
WILKERSON – Kin or son of William.
AHMED – Muslim surname meaning “extremely praiseworthy.”
BEARD – Descriptive surname for a man with a very distinct beard.
McCLAIN – Scottish clan name, originally “Mac Gille Eathain,” meaning “son of the servant of Saint John.”
MONTES – geographical surname for someone who lived on or near a hill/mountain.
MATA – geographical name derived from a number of towns in Spain and Portugal. Literally means “Forest land.”
ROSARIO – Contraction of the Spanish “María del Rosario,” given to a girl who was born on the festival of Our Lady of the Rosary, celebrated on the first Sunday in October.
VANG – Scandinavian surname, probably geographical – from a number of farmsteads and other places. Literally means “meadow” or “field.”
WALTER – Family of Walter.
HENSON – Son of Henry.
O’NEAL – Son of Neal.
MOSLEY – geographical surname for a family that came from any number of towns named Mosley in the U.K. Unknown meaning.
McCLURE – From the Gaelic surname “M’Ill’uidhir,” which literally translates as “Son of Ordar’s follower.”
BEASLEY – From the bent grass clearing.
STEPHENSON – Son of Stephen.
SNOW – Descriptive surname for someone with very pale skin or light blonde hair.
HUERTA – Lives by the top of a hill or near a fortress.
PRESTON – From the village with the priest. Literally “Priest’s Town.”
VANCE – From a low marshland.
BARRY – From the Gaelic surname “O’ Baire,” meaning the male descendant of Fionnbharr, or fair-haired one.
JOHNS – Family of John.
EATON – From any number of towns called Eaton in the U.K. Literally means “River enclosure.”
BLACKWELL – Lives near the black stream.
DYER – Occupational surname for someone who dyed either cloth or hair or hide.
PRINCE – Nickname surname for someone who acted royal or “above their station.”
MACDONALD – Son of Donald.
SOLOMON – Peaceful one, from the Hebrew “Shalom.”
GUEVARA – From Guevara, Spain. Literally means “prominent.”
STAFFORD – From the landing by the ford.
ENGLISH – Person from England.
HURST – Someone who lives by a wooded hill.
WOODARD – Contraction of “Woodward” meaning ward or caretaker of the woods.
CORTES – Courteous, refined.
SHANNON – From the Gaelic “O’Sionain,” an occupational surname for someone who worked with straw.
KEMP – Champion. Given to a person who was a champion of a competition such as jousting.
NOLAN – From the Gaelic surname “O’Nullain,” meaning “son or descendent of the King’s herald.”
McCULLOUGH – From the Scottish clan name, “MacCullaich” meaning “son of the boar,” where the boar represented a brave man.
MERRITT – geographical surname for a family who came from Merriott in Somerset, UK. Literally means “the gate at the boundary.”
MURILLO – Lives near a boundary or wall.
MOON – Either from the French word “moun” meaning a monk or someone who lives a monastic lifestyle, or from the Cornish word “mon,” meaning “thin” applied to a person who was skinny. Most probably had nothing to do with the actual moon.
SALGADO – Galician and Portuguese nickname surname for someone who was witty or wry, from the word salgado meaning “salty.”
STRONG – Descriptive surname for a person who was physically strong.
KLINE – German nickname surname given to someone who was small.
CORDOVA – geographical surname for a family from the ancient city of Córdoba, Spain. Literal meaning unknown.
BARAJAS – geographical surname for a family from any number of villages of that name. Literally means “the watering place.”
ROACH – From the French surname “Roches,” meaning “lives near a rocky crag.”
ROSAS – geographical surname for someone who lived near roses, or occupational surname for someone who was a florist or grew roses.
WINTERS – Nickname surname for someone who was literally cold or unemotional.
JACOBSON – Son of Jacob.
LESTER – From Leicester, U.K. or the county town of Leicestershire. Might go back to meaning “campers on the river Legra.”
KNOX – Near a round-topped hill (cnoc)
BULLOCK – From the English word “bullock” meaning young steer. Given to a young person who was excitable or energetic.
KERR – From the word “kjarr”, meaning wet ground covered with brush.
LEACH – Either an occupational surname for someone who worked with leaches (like a doctor) o from the word “loecc/loch” meaning water or lake for someone who lived near one.
MEADOWS – Lives in or near the meadow.
ORR – Lives near a slope or shore.
DAVILA – From the village.
WHITEHEAD – Descriptional surname for someone with white or very light blonde hair.
PRUITT – From the Old French “proux” meaning valiant or brave one.
KENT – From Kent, England or literally “from the coast.”
CONWAY – Irish surname from “Mac Connmhaigh,” a descriptional surname meaning “Head Smasher” or “Mac Connbhuidhe,” meaning “yellow hound”
McKEE – From the Gaelic surname”Mac Aodh,” literally meaning “son of the fiery one.”
BARR – From the great hill.
DAVID – Beloved.
DEJESUS – Follower of Jesus Christ.
MARIN – Family of Marino or “lives near the sea.”
BERGER – Either Swedish surname for someone who lived near a hill or mountain, or French for a shepherd (Bergere).
McINTYRE – Son of the carpenter or craftsman.
BLANKENSHIP – From the hill with a cairn.
GAINES – Nickname surname for someone who was very clever. From the word engaingne (ingenuity).
PALACIOS – Spanish surname for someone who lived in a palace or worked in a palace.
CUEVAS – geographical surname for someone who lived in or near caves.
BARTLETT – Son or family of Bartholomew.
DURHAM – geographical surname for a family from Durham, U.K. literally meaning “by the hill.”
DORSEY – From the village of Arcy in La Manche, France.
McCALL – From Gaelic surname “Mac Cathmhaoil,” literally meaning “son of the battle chief.”
O’DONNELL – Family of Donnell/Donald.
STEIN – Family of Stephen.
BROWNING – Descriptive surname from the Olde English “brun” meaning someone with brown hair or skin.
STOUT – Bold one.
LOWERY – Family of Lawrence.
SLOAN – From the old Gaelic given name “Sluaghadhan,” meaning a leader of a military expedition.
McLEAN – From the old Gaelic name “Mac gille Eoin,” literally meaning “son of the devotee of Saint John.”
HENDRICKS – Family of Hendrick/Heinrich.
CALHOUN – Variant of the Scottish surname, Colquhoun, meaning “nook” or “corner.”
SEXTON – Occupational surname for someone who worked as a sexton, a warden of a church.
CHUNG – Chinese/Korean surname literally meaning “hanging bell flower.”
GENTRY – Born of high status.
HULL – Either a geographical surname for someone who lived on or near a hill, or from the given name Hulle, which was a nickname for Hugh.
DUARTE – A prosperous guardian.
ELLISON – Son of Ellis/Elias/Elijah.
NIELSEN – Son of Niel.
GILLESPIE – From the Gaelic “Mac giolla Easpuig,” meaning “son of the bishop’s servant.”
BUCK – Either descriptive or occupational surname for someone who resembled a male deer, or someone who traded in them.
MIDDLETON – From anyone of the places named Middleton in the UK, literally meaning “the middle town.”
SELLERS – Occupational surname for someone who was a merchant/seller.
LEBLANC – French surname for someone who was pale or had very blond hair.
ESPARZA – Occupational surname for a professional swordsman/soldier.
HARDIN – geographical surname for families from any number of towns in England named Harden/Hardin. Literally means “valley of the hare.”
BRADSHAW – From the broad grove.
McINTOSH – Son of the chief, leader.
HOWE – Lives near a man-made mound or burial mound.
LIVINGSTON – From the town founded by Leving (given name). Scottish clan name.
FROST – Nickname surname for a person who had white hair or who had a ‘frosty’ disposition.
GLASS – Occupational surname for a glass blower.
MORSE – Family of Maurice. Literally means dark or swarthy person (from Moor).
KNAPP – Hilltop.
HERMAN – Army man.
STARK – Unwielding, steady, firm.
BRAVO – Brave, proven in battle.
NOBLE – From nobility. High born.
SPEARS – Occupational surname for a keeper of the Watch, which was an early form of a police officer.
WEEKS – Is from or works in a dairy farm, from the old English word “wic.”
CORONA – Literally means crown, but could mean several occupations: someone who made helmets or hats, someone who was going bald, or a follower of Christianity referring to the crown of thorns.
FREDERICK – Peace ruler.
BUCKLEY – Lives near the goat clearing.
McFARLAND – Scottish surname from the Gaelic “MacPharlain” meaning “son of Parlan.”
HEBERT – Illustrious soldier.
ENRIQUEZ – Son of Enrique.
HICKMAN – Occupational surname for a servant of a man called Hick.
QUINTERO – Spanish surname meaning “fifth” or a person from Quintero in Ourense province, from the word quinteiro, meaning “farmstead.”
RANDOLPH – Shield Wolf.
SCHAEFER – German occupational surname from the word “schäfer” which means “shepherd.”
WALLS – Someone who lived near or behind a big wall.
TREJO – geographical Spanish surname, for someone from Trexo, a place in Asturias in northwest Spain.
HOUSE – geographical or occupational surname for someone who either owned a big mansion or worked in one.
REILLY – Gaelic name from O’Reilly, meaning son or descendent of Raghailligh.
PENNINGTON – From the town with a livestock enclosure.
MICHAEL – Who is like god?
CONRAD – Brave counsel.
GILES – Holy man or one who does good.
BENJAMIN – Son of my right hand.
CROSBY – Lives by the cross or crossing.
FITZPATRICK – Son of Patrick
DONOVAN – From the Irish surname Donnabhain, a diminutive/nickname for someone with darker skin or wore brown.
MAYS – Either family of Matthew or a nickname for a guy who is a good friend.
MAHONEY – From the Gaelic surname “O’Mathghamhana” meaning “son of Mathghamhain,” literally meaning “bear.”
VALENTINE – Strong, healthy, valiant.
RAYMOND – Counsel protection.
MEDRANO – Abundance.
HAHN – German surname from the word “hane” meaning “rooster,” applied as a nickname for a conceited or sexually active man.
McMILLAN – From the Gaelic surname “Macghillemhaoil,” meaning son of the monk’s servant.
SMALL – Person who is short or small.
BENTLEY – From the clearing overgrown with bent-grass.
FELIX – Originally a term of endearment, meant “happy one.”
PECK – Occupational surname for someone who dealt in “pekkes”–a medieval measure of dry goods equal to pounds.
LUCERO – Light or evening star.
BOYLE – From the Gaelic surname “O’Baoighill,” meaning “family of the rash or angry person.”
HANNA – From the Gaelic “O’hannaigh,” meaning “descendant of Annach” literally meaning “iniquity.”
PACE – The peaceful one. Could have been used as a cynical nickname for someone who was not.
RUSH – From the place with reeds or occupational surname for someone who worked with reeds.
HURLEY – From the village on cleared land.
HARDING – Son of the hardened one. Hardened meaning battled in war.
McCONNELL – From the Gaelic “MacDhomhnuill” meaning son of Donald/Donal.
BERNAL – Spanish surname meaning “son of Baruch.”
NAVA – geographical surname from many towns named Nava in Spain, literally meaning “treeless plateau.”
AYERS – Heir to a fortune or land.
EVERETT – Herd of wild boars.
VENTURA – Foundling or deserted child – used for someone who was innocent or gullible.
AVERY – Elf king.
PUGH – Welsh surname from “ap Hugh” meaning “son of Hugh.”
MAYER – Occupational surname for a mayor of a village or town.
BENDER – German occupational surname for a barrel maker.
SHEPARD – Occupational surname for a shepherd.
McMAHON – From the Gaelic surname “Mac Mathghamha,” which means “son of the Bear.”
LANDRY – Land ruler.
CASE – Occupational surname for someone who makes boxes, cases, or chests.
SAMPSON – The sun.
MOSES – Born of a god.
MAGANA – geographical name from either of the villages named Magaña, in Soria and Córdoba provinces in Spain.
BLACKBURN – Lives near the dark colored stream.
DUNLAP – From the fort by the muddy place.
GOULD – Descriptional surname for someone with “golden” hair or occupational for someone who worked with gold, like a jewelry maker or gilder.
DUFFY – From the Gaelic surname “Mac Dhubhshith” meaning “son of the peaceful black one.”
VAUGHAN – Welsh descriptional surname meaning “small, little.”
HERRING – Occupational surname for a fisher or seller of herring (fish).
McKAY – From the Gaelic surname “MacAodh,” literally meaning “son of fire.”
ESPINOSA – Lives by the thorn bushes or a person with a “prickly” character.
RIVERS – Lives by the river.
FARLEY – geographical surname for one who is from any of the many English towns called Farley or Farleigh. Literally means “fern-covered clearing.”
BERNARD – Bold as a bear.
ASHLEY – From the ash wood or clearing.
FRIEDMAN – Servant of god or friend.
POTTS – Family of Philpott, an early form of the name Phillip.
TRUONG – Vietnamese surname meaning “drawing a bow” or archer.
COSTA – Someone from the coast or a bank of a river.
CORREA – Occupational surname for someone who made or sold leather straps.
BLEVINS – Welsh surname from the word “Blaid” meaning wolf.
NIXON – Son of Nick/Nicholas.
CLEMENTS – Family of Clement.
FRY – Born free.
DELAROSA – From the family of Rose, or from an area where wild roses grew.
BEST – Occupational surname for someone who was a cattle-herder or dealer. From the old English “beste” meaning “beast.”
BENTON – From the town with the bent grass.
LUGO – geographical surname for families from the town of Lugo in Galicia, Spain. Literally means “from the wood grove of Augustus.”
PORTILLO – Spanish/Castilian surname meaning “small port.”
DOUGHERTY – From the Gaelic surname “O’Dochartaigh,” meaning “descendent of the hurtful one.”
CRANE – Nickname surname given to a man who was tall and thin like a crane (bird).
HALEY – From the hay clearing.
PHAN – Vietnamese surname of unknown meaning.
VILLALOBOS – From the town of Villalobos, Spain, meaning “the village of wolves.”
BLANCHARD – With white hair or pale complexion.
HORNE – Occupational surname for someone who carved objects out of horn, or made musical horns (usually made out of animal horn at the time).
FINLEY – From the Gaelic surname “Fionlagh,” meaning “fair hero.”
QUINTANA – Country house.
LYNN – Most likely a geographical surname from the Welsh word “llyn” meaning “lake.”
ESQUIVEL – Behind the lime tree.
BEAN – Either from the word “bene” meaning “friend, good person” or occupational for someone who literally grew or sold beans.
DODSON – Son of Dodd.
MULLEN – Lives at or near a mill.
XIONG – Chinese surname meaning “bear.”
HAYDEN – From the hedge enclosure, down hill.
CANO – Spanish/Portugal surname referring to a cave, or a French/Italian occupational surname occupational for someone who supplied cane/reeds for thatching.
LEVY – From the family of Levi.
HUBER – German surname for the word “hide,” a unit of farm land.
RICHMOND – geographical surname from any of the towns in England or northern France with that name. Literally means “From the rich hill or mount.”
MOYER – From the ancient Gaelic surname “Mac an Mhaoir” meaning “steward, assistant, right-hand man.”
LIM – Chinese surname meaning “forest.”
FRYE – Born free.
SHEPPARD – Occupational surname for a shepherd.
McCARTY – From the Gaelic surname “Mac Carthaigh” meaning “son of the loving one.”
AVALOS – Spanish geographical surname for someone from Ábalos, Spain. Unknown meaning.
BOOKER – Occupational surname for someone who bound, wrote, or sold books.
WALLER – Either a geographical surname for someone who lived near a stone wall, or occupational for someone who built walls/was a mason.
PARRA – Spanish/Portuguese surname, meaning “grapevine/trellis.” Possibly used for someone who grew grapes or had a winery.
WOODWARD – Ward of the forest/woods.
JARAMILLO – Spanish Habitatonal surname for someone from the south of Castilla, Spain, literally referring to a “jaramago tree.”
KRUEGER – German occupational surname for someone who made or sold glass/pottery “kruog,” or ran an inn “krug.”
RASMUSSEN – Danish/Norwegian surname, meaning “son of Rasmus.”
BRANDT – Family of Brando, literally meaning “hot-tempered.”
PERALTA – geographical surname for someone from any number of places named Peralta in Spain. Literally means “high rock.”
DONALDSON – Son of Donald.
STUART – Occupational surname for someone who worked as a steward/assistant.
FAULKNER – Occupational surname for a falconer or someone who trained hawks/falcons.
MAYNARD – Strength, strong.
GALINDO – Spanish surname of unknown meaning.
COFFEY – From the Gaelic surname “O Cobhthaigh” meaning “descendant of the victorious.”
ESTES – From the East.
SANFORD – From the sandy ford.
BURCH – Lives near the birch tree or grove.
MADDOX – From the ancient Welsh male name “Matoc” meaning “good fortune.”
VO – Vietnamese surname meaning “fighter/soldier.”
O’CONNELL – Descendant of Conaill.
VU – Vietnamese surname meaning “fighter/soldier.”
ANDERSEN – Son of Anders/Andrew.
SPENCE – Occupational surname for someone in charge of a pantry/goods in an estate.
McPHERSON – From the Gaelic surname “Mac an Phearsain,” meaning “son of the parson.”
CHURCH – Someone who worked in a church or lived near a church.
SCHMITT – German occupational surname for a smith/metalworker.
STANTON – From the village on stony ground.
LEAL – Loyal one.
CHERRY – Occupational surname for someone who grew or sold cherries.
COMPTON – From the valley farm.
DUDLEY – From “Dudda’s clearing” – Dudda was a nickname for a rotund/heavy person.
SIERRA – Spanish surname meaning “mountain range” used for families living in or near the Galicia and Asturias regions of northern Spain.
POLLARD – Strong descendent of Paul.
ALFARO – Spanish geographical surname for someone from Alfaro, Spain in the Logroño province. Literally means “the beacon/lighthouse.”
HESTER – Either lives by the beech tree, or an occupational surname for a herald/town crier.
PROCTOR – Occupational surname for a proctor/manager/attorney.
LU – Chinese surname of unknown meaning.
HINTON – From the high enclosure/settlement.
NOVAK – The newcomer/new one.
GOOD – Respected/good person.
MADDEN – From the Irish surname “O’Madain,” meaning “descendant of the son of the hound.”
McCANN – From the Gaelic surname “MacCana,” meaning “descendant of the wolf cub.”
TERRELL – Stubborn one.
JARVIS – From the given name Gervase meaning “spear” or “spear/valley.”
DICKSON – Son of Richard.
REYNA – From the French surname “Rainer” meaning “army counsel.”
CANTRELL – Occupational surname for a bell ringer (someone who rang the Chanterelles) or who sang in a choir.
MAYO – From the family of Matthew.
BRANCH – Possibly a geographical surname for someone from Branch, a land division in Wiltshire, U.K. or from Branches Park, a former country mansion in West Suffolk, U.K.
HENDRIX – Family of Heinrich.
ROLLINS – Family of Rollo.
ROWLAND – From the renowned land.
WHITNEY – From the land surrounded by streams.
DUKE – Leader (of an army or troops).
ODOM – Son-in-law of a prominent person.

`

const names = text2.split('\n');

const efternamn = names.map(name => {
  const surname = name.split(' – ')[0];
  return surname;
});

function changelabel() {
    var label = document.getElementById('namn1')
    var label2 = document.getElementById('namn2')
    var label3 = document.getElementById('namn3')
    var label4 = document.getElementById('namn4')

    var label5 = document.getElementById('namn5')
    var label7 = document.getElementById('namn7')
    var label8 = document.getElementById('namn8')

    label.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
    siffra = Math.floor(Math.random() * 200);
    label2.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
    siffra = Math.floor(Math.random() * 200);
    label3.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
    siffra = Math.floor(Math.random() * 200);
    label4.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);

    label5.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
    siffra = Math.floor(Math.random() * 200);
    label7.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
    siffra = Math.floor(Math.random() * 200);
    label8.innerHTML = (förnamn[siffra]) +" " + (efternamn[siffra]);
}

changelabel();


const born = 1930;
const died = 2000;
const siffraBorn = 0;
const currentYear = new Date().getFullYear();

function randomYear() {
    const ifYear = 80;
    year = Math.floor(Math.random()*100);
    if (year > 90) {
        return ifYear;
    } else {
        return year;
    }    
}


function changeYear () {
    var born1 = document.getElementById('born1')

    born1.innerHTML = born + randomYear();
    born2.innerHTML = born + randomYear();
    born3.innerHTML = born + randomYear();
    born4.innerHTML = born + randomYear();
    born5.innerHTML = born + randomYear();
    born7.innerHTML = born + randomYear();
    born8.innerHTML = born + randomYear();
}

changeYear();

document.getElementById('submit').addEventListener('click', function() {
    var nameInput = document.getElementById('name').value;
    var nameLabel = document.getElementById('userName');
    
    // Split the input by spaces
    var nameParts = nameInput.split(' ');
    
    // Capitalize only the last part
    if (nameParts.length > 1) {
        nameParts[nameParts.length - 1] = nameParts[nameParts.length - 1].toUpperCase();
    }
    
    // Reconstruct the string
    var formattedName = nameParts.join(' ');
    nameLabel.textContent = formattedName;

    var yearInput = document.getElementById("year").value;
    var yearLabel = document.getElementById("userBorn");
    yearLabel.textContent = yearInput;

    var mottoInput = document.getElementById("motto").value;
    var mottoLabel = document.getElementById("userMotto");
    mottoLabel.textContent = mottoInput;

    var relativesInput = document.getElementById("relatives").value;
    var relativesLabel = document.getElementById("userRelatives");
    relativesLabel.textContent = relativesInput;

});


document.getElementById("submit").onclick = function () {
    var valueTemp = document.getElementById("year").value;
    valueX = Number(valueTemp) + 79;
    var labelX = document.getElementsByClassName('died');
    for (i=0; i < labelX.length; i++) {
        labelX[i].textContent = valueX;
    }
}


//eulogier
var eulo = `In the neighborhood, kindness quietly stitched the community together, leaving an imprint on every doorstep, a pillar of support.
At the local diner, the air was seasoned with laughter and stories, leaving a taste of warmth in every cup, brought by a familiar presence.
In every sense, silent deeds spoke louder than words, lifting burdens from shoulders with a gentle touch, a helper to all.
The park bench became a small haven for all seeking solace, created by wise nods and friendly hellos, a fixture of comfort.
Streets were painted with blooms by a backyard gardener, bringing color to the lives of passersby, a vibrant touch to the community.
At the shelter, tireless efforts fed more than stomachs, nourishing spirits with empathy and care, a volunteer's selfless dedication.
The local library bore witness to a steadfast presence, as quiet assistance filled shelves and minds, sowing seeds of knowledge.
With a tool belt and a ready smile, repairs mended not just fences but also fractured moments, a handyman of both things and hearts.
Shared memories were woven at the porch swing, creating a fabric of unity through anecdotes, a storyteller of communal tales.
Soft-spoken but impactful, a faithful attendee at town meetings influenced decisions made for the common good, their voice resonating.
On the bustling streets, a painter of goodwill quietly intertwined the community, leaving a mosaic of support and kindness at every turn.
Within the cafe's walls, the atmosphere was enriched with laughter and tales, seasoning every interaction with a sprinkle of familiarity and comfort.
Amid daily challenges, actions spoke volumes, offering a helping hand that lifted burdens with a touch of compassion and understanding.
Beneath the sprawling branches, a silent guardian of the park bench extended greetings and nods, crafting a serene refuge for those in need.
Across the landscapes, a gardener's nurturing touch painted the town with a kaleidoscope of blooms, infusing life with vibrant hues.
In the shelter's embrace, tireless dedication nourished not just bodies but souls, serving up empathy and care in abundance.
Between the shelves of wisdom, a beacon of assistance quietly enriched minds and souls, cultivating a garden of knowledge within the library.
Amid the tools and smiles, mended fences and hearts alike, a handyman's repairs mended not just the tangible but also the intangible.
Around the gathering circle, a weaver of tales spun a tapestry of shared experiences, binding the community in a vibrant quilt of unity.
At town meetings, a soft yet resounding voice echoed, leaving an indelible mark on decisions made for the collective welfare.`

function RandomEulo() {
    const euloArr = eulo.split("\n").sort();
    const euloRandom = Math.floor(Math.random() * 19) + 1;
    const euloOutput = euloArr[euloRandom];
    euloArr.splice(euloRandom, 1);
    return euloOutput;
    
    
}

RandomEulo();

let mottoArray = "";

function changeMotto(){
    mottoArray = document.getElementsByClassName("motto");
    for (var i=0; i < mottoArray.length; i++) {
        mottoArray[i].textContent =  RandomEulo();

    }
    
}

changeMotto();


const imageUrls = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
    'image11.png',
    'image12.png',
    'image13.png',
    'image14.png',
    'image15.png',
    'image16.png',
    'image17.png',
    'image18.png',
    // Add more image URLs here
];

console.log(imageUrls.length)

window.onload = function() {
    // Iterate through the image elements and assign random URLs
    for (let i = 0; i < imageUrls.length; i++) {
        const imageElement = document.getElementById('image' + (i + 1)); // Assuming ids are 'image1', 'image2', etc.
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        imageElement.src = imageUrls[randomIndex];

        // Remove the chosen URL from the array to avoid repetition
        imageUrls.splice(randomIndex, 1);
    }
};

randomPersonCount = Math.floor(Math.random * 7);

let relTemp = document.getElementsByClassName("relLabel");
for (let i = 0; i < relTemp.length; i++) {
    let elements = [];
    for (let j = 0; j < Math.floor((Math.random() * 6) + 1); j++) {
        let siffra = Math.floor(Math.random() * 200);
        elements.push(förnamn[siffra]);
    }

    if (elements.length > 1) {
        let result = elements.slice(0, -1).join(", ") + " and " + elements.slice(-1) + ".";
        relTemp[i].append(result);
    } else if (elements.length === 1) {
        relTemp[i].append(elements[0] + ".");
    }
}

console.log(relTemp);



