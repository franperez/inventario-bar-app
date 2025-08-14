// Contenido del archivo CSV adjunto, incrustado como una cadena de texto.
// Puedes actualizar esta cadena si tu archivo CSV cambia.
const CSV_DATA = `StorageLocation,Item,UofM,Qty,UofM2,Qty2,UofM3,Qty3
BEER BTL,BEER DRAFT Peroni,Gallon,0,,0,,0
BEER BTL,BEER DRAFT Bud Light,Gallon,0,,0,,0
BEER BTL,BEER DRAFT VS La Yuma,Gallon,0,,0,,0
BEER BTL,BEER DRAFT Goose Ipa Draft,Gallon,0,,0,,0
BEER BTL,BEER BTL Fat Tire,Bottle (12 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Lagunitas Ipa,Bottle (12 OZ-fl),0,,0,,0
BEER BTL,BEER BTL La Rubia,Bottle (12 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Heineken,Bottle (12 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Estrella Damm,Bottle (11.2 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Peroni 00,Bottle (11.2 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Funky Buddha Floridian,Bottle (12 OZ-fl),0,,0,,0
BEER BTL,BEER BTL Peroni,Bottle (11.2 OZ-fl),0,,0,,0
BEER BTL,BEER DRAFT Stella Artois,Gallon,0,Liter,0,,0
BEER BTL,BEER BTL Michelob Ultra,Bottle (12 OZ-fl),0,Bottle (16 OZ-fl),0,,0
BEER BTL,BEER BTL Modelo Especial,Bottle (12 OZ-fl),0,Bottle (7 OZ-fl),0,,0
BEER BTL,BEER BTL Corona,Bottle (12 OZ-fl),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),0,Bottle (187 mL),0,,0
CHAMP/SPARK,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK Della Vite Pros,Bottle (750 ML),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK Gioiosa Prosecco,Bottle (750 ML),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK Le Contesse Prosecco,Bottle (750 ML),0,,0,,0
CHAMP/SPARK,CHAMP/SPARK House Sparkling,Bottle (750 ML),0,,0,,0
CON BAR,CON BAR Mix Bloody Mary,Bottle (32 OZ-fl),0,Can (7.5 OZ-fl),0,,0
CON BAR,SODAS Diet Coke Can,Can (12 OZ-fl),0,Can (7 OZ-fl),0,,0
CON BAR,SODAS Diet Coke Btl,Bottle (8 OZ-fl),0,,0,,0
CON BAR,SODAS Coke Btl,Bottle (8 OZ-fl),0,,0,,0
CON BAR,SODAS Sprite Btl,Bottle (8 OZ-fl),0,Bottle (12 OZ-fl),0,,0
CON BAR,CON BAR Grapefruit Soda,Bottle (6.7 OZ-fl),0,Bottle (12 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,SODAS Ginger Ale,Can (12 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (6.7 OZ-fl),0
CON BAR,CON BAR Ginger Beer,Bottle (6.7 OZ-fl),0,Bottle (16.9 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,CON BAR Tonic Water,Bottle (6.7 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (12 OZ-fl),0
CON BAR,CON BAR Club Soda,Bottle (6.7 OZ-fl),0,Bottle (12 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,SODAS Red Bull,Bottle (8.4 OZ-fl),0,Bottle (12 OZ-fl),0,,0
CON BAR,SODAS Red Bull Sugar Free,Bottle (8.4 OZ-fl),0,Bottle (12 OZ-fl),0,,0
CON BAR,SODAS Red Bull Yellow,Bottle (8.4 OZ-fl),0,,0,,0
CON BAR,WATER BTL Panna Water Lg,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
CON BAR,WATER BTL San Pellegrino Lg,Bottle (1 Litre),0,,0,,0
CON BAR,CON BAR Mix Strawberry,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,,0
CON BAR,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),0,Bottle (17 OZ-fl),0,,0
CON BAR,CON BAR Mix Mango,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (1 Litre),0
CON BAR,CON BAR Mix Peach,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0,,0
CON BAR,CON BAR Mix Kiwi,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,,0
CON BAR,CON BAR Mix Rose Syrup,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CON BAR,COFFEE Syrup Vanilla,Litre,0,Bottle (16.9 OZ-fl),0,,0
CON BAR,COFFEE Syrup Hazelnut,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CON BAR,COFFEE Syrup Chocolate,Bottle (24 OZ-fl),0,Bottle (16 OZ-fl),0,Bottle (64 OZ-fl),0
CON BAR,CON BAR Mix Citrus,Bottle (1 Litre),0,Bottle (64 OZ-fl),0,Bottle (32 OZ-fl),0
CON BAR,CON BAR Mix Pina Colada,Bottle (64 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0
CON BAR,CON BAR Nectar Agave,Jug (114 OZ-fl),0,lb,0,Gallon,0
CON BAR,CON BAR Queen Olives,Gal,0,Pack (64 OZ-wt),0,,0
CON BAR,CON BAR Black Cherries,Bottle (44 OZ-fl),0,0.5 Gallon,0,Case - 8 OZ-wt,0
CON BAR,CON BAR Lychee In Heavy Syrup,Bottle (20 OZ-fl),0,,0,,0
CON BAR,CON BAR Mint,lb,0,,0,,0
CON BAR,CON BAR Garnish Lime,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Garnish Lemon,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Garnish Orange,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Garnish Pineapple,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Garnish Grapefruit,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Garnish Strawberry,SLICE,0,Bag - 500 Slices,0,,0
CON BAR,CON BAR Bitter Aromatic,Bottle (4 OZ-fl),0,Bottle (16 OZ-fl),0,Bottle (6.7 OZ-fl),0
CON BAR,CON BAR Bitter Orange,Bottle (200 mL),0,Bottle (4 OZ-fl),0,,0
CON BAR,CON BAR Bitter Peychaud's,Bottle (200 mL),0,,0,,0
CON BAR,CON BAR Fee Foam,Bottle (150 mL),0,Bottle (200 mL),0,,0
CON BAR,CON BAR Mix Peach,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0,,0
CON BAR,CAN DRY Vanilla Extract,Bottle (32 OZ-fl),0,Gallon,0,,0
CON BAR,CAN DRY Tajin,Jar - 5.3 OZ-wt,0,,0,,0
CON BAR,CON BAR Mix Rose Water,Bottle (10 OZ-fl),0,,0,,0
CON BAR,CON BAR Garnish Drink Topper,PC,0,,0,,0
CON BAR,CON BAR Olive Brine,Bottle (12 OZ-fl),0,,0,,0
CON BAR,CON BAR Mix Kiwi,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,,0
CON BAR,CON BAR Rose Petals,Case - 1000 PC,0,,0,,0
CON BAR,CON BAR Mix Mango,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (1 Litre),0
CON BAR,CON BAR Mix Pomegranate Basil,Bottle (1 Litre),0,Bottle (200 mL),0,,0
CON BAR,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),0,Bottle (17 OZ-fl),0,,0
CON BAR,CON BAR Mix Orange Tangerine,Bottle (1 Litre),0,,0,,0
CON BAR,PROD/FRT Orange,Orange,0,,0,,0
CON BAR,CON BAR Mix Grenadine,Bottle (1 Litre),0,,0,,0
CON BAR,CON BAR Puree Lychee,Bottle (16.9 OZ-fl),0,lb,0,Bottle (16.9 OZ-fl),0
CON BAR,SODAS Coke Can,Can (12 OZ-fl),0,,0,,0
CON BAR,SODAS Coke Can,Can (12 OZ-fl),0,,0,,0
CORDIALS,CORDIALS Lillet Blanc,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Lillet Rose,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Grand Marnier,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Cointreau,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS,CORDIALS Disaronno Amaretto,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS,CORDIALS Frangelico,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Luxardo Maraschino,Bottle (750 ML),,,0,,0
CORDIALS,CORDIALS Italicus Rosolio Bergamoto,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Creme De Mure,Bottle (750 ML),0,Bottle (700 mL),0,,0
CORDIALS,CORDIALS Fernet Branca,Bottle (750 ML),,,0,,0
CORDIALS,CORDIALS Sambuca Ramazzotti,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Chartreuse Green,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Caravedo Pisco Puro,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Campari Aperitivo,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
CORDIALS,CORDIALS Aperol Aperitivo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS,CORDIALS Giffard Banana Du Brazil,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Chinola Passion Fruit,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Creme De Pamplemousse,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Lo - Fi Amaro,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Botanical Rockey,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS,CORDIALS Mandarine Napoleon,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Amaro Montenegro,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS,CORDIALS Liqueur Triple Sec,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Schnapps Peach,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
CORDIALS,CORDIALS Vermouth Rosso/Rouge,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1.5 Litre),0
CORDIALS,CORDIALS Vermouth Dry,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Remy Martin 1738,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Hennessy VS,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (375 mL),0
CORDIALS,CORDIALS Kahlua,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Creme De Cacao,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Ancho Reyes Poblano Chile,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Ancho Reyes Ancho Chile,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Baileys Irish Cream,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Benedictine,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS Licor 43,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS,CORDIALS St Germain,Bottle (750 ML),0,,0,,0
CORDIALS,CORDIALS Blue Curacao,Bottle (1 Litre),0,,0,,0
GIN,GIN House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
GIN,GIN Atian,Bottle (750 ML),0,,0,,0
GIN,GIN Bombay Dry Gin,Bottle (1itre),0,Bottle (1.75 Litre),0,,0
GIN,GIN Bombay Sapphire,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
GIN,GIN Harry Blus,Bottle (750 ML),0,,0,,0
GIN,GIN Hendricks,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
GIN,GIN Tanqueray,Bottle (1 Litre),0,,0,,0
GIN,GIN Fords,Bottle (750 ML),0,Bottle (1 Litre),0,,0
GIN,GIN Monkey 47,Bottle (1 Litre),0,,0,,0
GIN,GIN Gray Whale,Bottle (750 ML),0,Bottle (1 Litre),0,,0
GIN,GIN London No.3,Bottle (750 ML),0,Bottle (1 Litre),0,,0
INFUSION,INFUSION Blueberry Hibiscus,Tea Bag,0,,0,,0
INFUSION,INFUSION Chamomile Tea,Tea Bag,0,lb,0,,0
INFUSION,INFUSION English Breakfast,Tea Bag,0,,0,,0
INFUSION,INFUSION Jasmine Tea,Tea Bag,0,lb,0,,0
INFUSION,INFUSION Matcha (tea bg),Tea Bag,0,,0,,0
INFUSION,INFUSION Turmeric Ginger Tea,Tea Bag,0,,0,,0
INFUSION,COFFEE Matcha (lb),lb,0,Case - 2.2 LB,0,,0
INFUSION,INFUSION Iced Tea Org Black,Bag - 3 OZ-wt,0,,0,,0
WINE,RED WINE Cab Sauv Bonanza,Bottle (750 ML),0,,0,,0
WINE,RED WINE P Noir Elouan,Bottle (750 ML),0,,0,,0
WINE,RED WINE Malbec Aruma,Bottle (750 ML),0,,0,,0
WINE,RED WINE P Noir Belle Glos Las Alturas,Bottle (750 ML),0,,0,,0
WINE,RED WINE Red Blend Prisoner,Bottle (750 ML),0,,0,,0
WINE,RED WINE Merlot Decoy by Duckhorn,Bottle (750 ML),0,,0,,0
WINE,RED WINE Chianti Classico Collazzi,Bottle (750 ML),0,,0,,0
WINE,RED WINE Cab Sauv The Quilt Rsv,Bottle (750 ML),0,,0,,0
WINE,ROSE WINE The Pale Rose,Bottle (750 ML),0,,0,,0
WINE,ROSE Wine Whispering Angel,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Chardonnay Sea Sun,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Gavi Villa Sparina,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Riesling Chateau St Michelle,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Sauv Blanc Justin,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Sauv Blanc Dashwood,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Moscato D Asti  Saracco,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Chardonnay Landmark Sonoma,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE P Grigio La Vis,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),0,,0,,0
WINE,RED WINE Malbec Antigal Uno,Bottle (750 ML),0,,0,,0
WINE,RED WINE Merlot Ca Donini,Bottle (750 ML),0,,0,,0
WINE,RED WINE P Noir Sea Sun,Bottle (750 ML),0,,0,,0
WINE,RED WINE Malbec Rsv Terraza,Bottle (750 ML),0,,0,,0
WINE,RED WINE Marques De Riscal Proximo,Bottle (750 ML),0,,0,,0
WINE,RED WINE Cab Sauv Justin,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Albarino Lusco,Bottle (750 ML),0,,0,,0
WINE,CHAMP/SPARK Veuve Du Vernay Brut Rose,Bottle (750 ML),0,,0,,0
WINE,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),0,Bottle (187 mL),0,,0
WINE,CHAMP/SPARK Chandon Sparkling,Bottle (750 ML),0,,0,,0
WINE,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),0,,0,,0
WINE,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),0,,0,,0
WINE,RED WINE Chianti Cafaggio,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Sauv Blanc Vavasour,Bottle (750 ML),0,,0,,0
WINE,RED WINE Tempranillo Numanthia Termes,Bottle (750 ML),0,,0,,0
WINE,WHITE WINE Chardonnay Elouan,Bottle (750 ML),0,,0,,0
RUM,RUM House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM,RUM Bacardi Superior,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle - 750 ML,0
RUM,RUM Flor De Cana 4Yr Anejo Oro,Bottle (1 Litre),0,,0,,0
RUM,RUM Copalli Cacao,Bottle (750 ML),0,,0,,0
RUM,RUM Santa Teresa 1796,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM,RUM Sailor Jerry Spiced Rum,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1.75 Litre),0
RUM,RUM Coconut Cartel,Bottle (750 ML),0,,0,,0
RUM,RUM Leblon Cachaca,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM,RUM Plantation Pineapple,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM,RUM Zacapa Rum Cent 23Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM,RUM Bacardi 10 Yr,Bottle (750 ML),0,,0,,0
RUM,RUM Brugal 1888,Bottle (750 ML),0,,0,,0
RUM,RUM Bacardi Anejo 4 Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM,RUM Piras 51 Cachaca,Bottle (1 Litre),0,,0,,0
RUM,RUM Flor De Cana 4Yr White Extra Seco,Bottle (1 Litre),0,,0,,0
RUM,RUM Nusa Cana Spiced,Bottle (700 mL),0,,0,,0
RUM,RUM Nusa Cana Tropical,Bottle (700 mL),0,,0,,0
RUM,RUM Bacardi Coco,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA,TEQUILA Gran Coramino Reposado,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA,TEQUILA Jimador Silver,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA,TEQUILA 512 Blanco,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA 512 Reposado,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA 512 Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Casamigos Blanco,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1 Litre),0
TEQUILA,TEQUILA Casamigos Reposado,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA Casamigos Anejo,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA,TEQUILA Don Julio Blanco,Bottle (750 ML),0,Bottle (375 mL),0,,0
TEQUILA,TEQUILA Don Julio Reposado,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Don Julio Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Don Julio 1942,Bottle (750 ML),0,Bottle (1.75 Litre),0,,0
TEQUILA,TEQUILA Herradura Silver,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA,TEQUILA Herradura Reposado,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA,TEQUILA Herradura Anejo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA Herradura Ultra Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Patron Silver,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA Patron Reposado,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Patron Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Tromba Blanco,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA Dahlia Cristalino,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Mezcal Joven Ilegal,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA,TEQUILA Mezcal Del Maguey Vida,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Mezcal El Silencio,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Jose Cuervo Reserva Familia Extra Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Mezcal Ojo de Tigre,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA,TEQUILA 21 Seeds Cucumber Jalapeno,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA 21 Seeds Grapefruit Hibiscus,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA 21 Seeds Valencia Orange,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Volcan Tierra Blanco,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Volcan Tierra Rep,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Volcan Tierra Tahona,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Volcan Tierra XA,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Astral Anejo,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Astral Blanco,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Astral Reposado,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Pierde Almas Mezcal Espadin,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Pierde Almas Mezcal Purita,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Don Julio 1942 Alma Miel,Bottle (750 ML),0,,0,,0
TEQUILA,TEQUILA Gran Coramino Cristalino Reposado,Bottle (750 ML),0,,0,,0
VODKA,VODKA House,Bottle (750 ML),0,Bottle (750 ML),0,,0
VODKA,VODKA Albani,Bottle (1 Litre),0,,0,,0
VODKA,VODKA Grey Goose,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA,VODKA Titos,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA,VODKA Harry Blus,Bottle (750 ML),0,,0,,0
VODKA,VODKA Ketel One,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA,VODKA Ketel One Citroen,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA,VODKA Organika Vodka,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA,VODKA Belvedere,Bottle (1 Litre),0,,0,,0
VODKA,VODKA Absolut,Bottle (1 Litre),0,,0,,0
VODKA,VODKA Smirnoff Orange,Bottle (1 Litre),0,,0,,0
WHISKEY,WHISKEY Woodford Reserve,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Old Forester Brbn 86,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Jack Daniels Single Barrel Rye,Bottle (1 Litre),0,,0,,0
WHISKEY,WHISKEY Jack Daniels Old 7 Blk,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Jack Daniels Fire,Bottle (750 ML),0,,0,,0
WHISKEY,WHISKEY Crown Royal Canadian,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Crown Royal Apple,Bottle (1 Litre),0,,0,,0
WHISKEY,WHISKEY Jameson,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Slane Irish,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
WHISKEY,WHISKEY Angels Envy Bourbon,Bottle (750 ML),0,Bottle (1 Litre),0,,0
WHISKEY,WHISKEY Angels Envy Rye,Bottle (750 ML),0,,0,,0
WHISKEY,WHISKEY Dewars White,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY J Walker Black,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Balvenie Scotch 12 Yr Doublewood,Bottle (750 ML),0,,0,,0
WHISKEY,WHISKEY Makers Mark,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Buchanans 12 Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
WHISKEY,WHISKEY Chivas Regal 12 Yr,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Old Parr Scotch 12 Yr,Bottle (750 ML),0,,0,,0
WHISKEY,WHISKEY Glenfiddich 12 Yr,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY,WHISKEY Glenlivet 12 Yr,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
WHISKEY,WHISKEY Macallan 12 Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
Bar Prep,PREP NEWS - Frozzie Rosie,QT,0,OZ-fl,0,,0
Bar Prep,PREP NEWS - Just Like 1988,QT,0,,0,,0
Bar Prep,PREP NEWS - Spicy Agave,OZ-fl,0,QT,0,,0
Bar Prep,PREP NEWS - Blue Citrus Reduction,QT,0,OZ-fl,0,,0
Bar Prep,PREP NEWS - Demerara Syrup,OZ-fl,0,QT,0,,0
Bar Prep,PREP MRB - Simple Syrup,Bottle (32 OZ-fl),0,Bottle (1 Litre),0,,0
Juices,CAN DRY Juice Lime,Bottle (59 OZ-fl),0,Bottle (59 OZ-fl),0,Bottle (750 ML),0
Juices,CAN DRY Juice Lemon,Bottle (59 OZ-fl),0,Gal,0,Bottle (750 ML),0
Juices,JUICES Juice Orange,Bottle (59 OZ-fl),0,Gal,0,Gallon,0
Juices,CON BAR Juice Grapefruit,Bottle (32 OZ-fl),0,Gal,0,Bottle (32 OZ-fl),0
Juices,CON BAR Juice Cranberry,Bottle (32 OZ-fl),0,Bottle (64 OZ-fl),0,Bottle (5.5 OZ-fl),0
Juices,JUICES Juice Apple,Bottle (32 OZ-fl),0,Gal,0,Bottle (46 OZ-fl),0
Juices,CON BAR Juice Pineapple,Can (6 OZ-fl),0,Bottle (46 OZ-fl),0,Can (5.5 OZ-fl),0
Juices,JUICES Juice Unbeetable Cold Pressed,Bottle (12 OZ-fl),0,,0,,0
Juices,JUICES Juice Sunset Cold Pressed,Bottle (12 OZ-fl),0,,0,,0
Juices,JUICES Juice Green Lover Cold Pressed,Bottle (12 OZ-fl),0,,0,,0
Coffee,COFFEE Milk Soy,Bottle (32 OZ-fl),0,Bottle (64 OZ-fl),0,,0
Coffee,COFFEE Milk Oat,Bottle (32 OZ-fl),0,,0,,0
Coffee,COFFEE Milk Almond,Bottle (32 OZ-fl),0,Gal,0,Bottle (64 OZ-fl),0
Coffee,COFFEE Milk Whole,Gal,0,Bottle (32 OZ-fl),0,Gallon,0
Coffee,COFFEE Half n Half,0.5 Gallon,0,,0,,0
Coffee,COFFEE Kimbo Decaf Coffee Filtro Ground,Pack (8 OZ-wt),0,Packet (2.25 OZ-wt),0,,0
Coffee,COFFEE Kimbo Coffee Filtro Ground,Pack (8 OZ-wt),0,Packet (2.25 OZ-wt),0,,0
Coffee,COFFEE Kimbo Decaf Espresso Beans,lb,0,,0,,0
Coffee,COFFEE Kimbo Extra Cream Espresso Beans,lb,0,,0,,0
Coffee,PREP MRB - Caramel Syrup,OZ-fl,0,,0,,0
Coffee,COFFEE Syrup Caramel,Bottle (44 OZ-fl),0,Bottle (64 OZ-fl),0,Bottle (1 Litre),0
BEER Taco Shop,BEER BTL Blue Moon,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Corona,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Corona Light,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Dos Xx Amber,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Dos Xx Lager,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Heineken,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Lagunitas Ipa,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Modelo Especial,Bottle (12 OZ-fl),0,Bottle (7 OZ-fl),0,,0
BEER Taco Shop,BEER BTL Negra Modelo,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Pacifico,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Tecate Can,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Tecate Light Can,Bottle (12 OZ-fl),0,,0,,0
BEER Taco Shop,BEER BTL Victoria,Bottle (12 OZ-fl),0,,0,,0
BAR CONS Taco Shop,CAN DRY Coconut Shredded Sweetened,lb,0,,0,,0
BAR CONS Taco Shop,CAN DRY Juice Lemon,Bottle (59 OZ-fl),0,Gal,0,Bottle (750 ML),0
BAR CONS Taco Shop,CAN DRY Juice Lime,Bottle (59 OZ-fl),0,Bottle (59 OZ-fl),0,Bottle (750 ML),0
BAR CONS Taco Shop,CAN DRY Tajin,Jar - 5.3 OZ-wt,0,,0,,0
BAR CONS Taco Shop,CON BAR Agua Tamarindo,Bottle (32 OZ-fl),0,,0,,0
BAR CONS Taco Shop,CON BAR Bitter Aromatic,Bottle (4 OZ-fl),0,Bottle (16 OZ-fl),0,Bottle (6.7 OZ-fl),0
BAR CONS Taco Shop,CON BAR Bitter Orange,Bottle (200 mL),0,Bottle (4 OZ-fl),0,,0
BAR CONS Taco Shop,CON BAR Bitter Peychaud's,Bottle (200 mL),0,,0,,0
BAR CONS Taco Shop,CON BAR Black Cherries,Bottle (44 OZ-fl),0,0.5 Gallon,0,Case - 8 OZ-wt,0
BAR CONS Taco Shop,CON BAR Chamoy,Bottle (1 Litre),0,,0,,0
BAR CONS Taco Shop,CON BAR Cherry Maraschino,Gallon,0,Can - 3 Kg,0,Case - 8 OZ-wt,0
BAR CONS Taco Shop,CON BAR Coconut Water,Bottle (11.1 OZ-fl),0,Bottle (1 Litre),0,,0
BAR CONS Taco Shop,CON BAR Coke Bib,Gallon,0,Keg (2.5 Gl),0,,0
BAR CONS Taco Shop,CON BAR Dragon Fruit Chunks,lb,0,,0,,0
BAR CONS Taco Shop,CON BAR Edible Flowers,Flower,0,,0,,0
BAR CONS Taco Shop,CON BAR Fee Foam,Bottle (150 mL),0,Bottle (200 mL),0,,0
BAR CONS Taco Shop,CON BAR Garnish Dragonfruit,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Garnish Grapefruit,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Garnish Kiwi,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Garnish Lime,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Garnish Orange,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Garnish Pineapple,SLICE,0,Bag - 500 Slices,0,,0
BAR CONS Taco Shop,CON BAR Ginger Beer,Bottle (6.7 OZ-fl),0,Bottle (16.9 OZ-fl),0,Can (7.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Juice Clamato,Bottle (1 Litre),0,Bottle (8 OZ-fl),0,,0
BAR CONS Taco Shop,CON BAR Juice Cranberry,Bottle (32 OZ-fl),0,Bottle (64 OZ-fl),0,Bottle (5.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Juice Cranberry Bib,Gallon,0,Keg (2.5 Gl),0,,0
BAR CONS Taco Shop,CON BAR Juice Pineapple,Can (6 OZ-fl),0,Bottle (46 OZ-fl),0,Can (5.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Maggi Seasoning Liquid,Bottle (27 OZ-fl),0,,0,,0
BAR CONS Taco Shop,CON BAR Mint,lb,0,,0,,0
BAR CONS Taco Shop,CON BAR Mix Bloody Mary,Bottle (32 OZ-fl),0,Can (7.5 OZ-fl),0,,0
BAR CONS Taco Shop,CON BAR Mix Grenadine,Bottle (1 Litre),0,,0,,0
BAR CONS Taco Shop,CON BAR Mix Mango,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (1 Litre),0
BAR CONS Taco Shop,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),0,Bottle (17 OZ-fl),0,,0
BAR CONS Taco Shop,CON BAR Mix Pina Colada,Bottle (64 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0
BAR CONS Taco Shop,CON BAR Mix Strawberry,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,,0
BAR CONS Taco Shop,CON BAR Nectar Agave,Jug (114 OZ-fl),0,lb,0,Gallon,0
BAR CONS Taco Shop,CON BAR Queen Olives,Gal,0,Pack (64 OZ-wt),0,,0
BAR CONS Taco Shop,CON BAR Sprite Bib,Gallon,0,Keg (2.5 Gl),0,Keg (3 Gal),0
BAR CONS Taco Shop,CON BAR Sugar Cane,Stick,0,Sugar Cane Small,0,Sugar Cane Large,0
BAR CONS Taco Shop,CON BAR Tamarindo Stick,Each,0,,0,,0
BAR CONS Taco Shop,CON BAR Tonic Water,Bottle (6.7 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (12 OZ-fl),0
BAR CONS Taco Shop,CON BAR Tonic Water Bib,Gallon,0,,0,,0
BAR CONS Taco Shop,PREP OM - Sangrita,Litre,0,,0,,0
JUICES Taco Shop,JUICES Agua De Horchata,Bottle (32 OZ-fl),0,,0,,0
JUICES Taco Shop,JUICES Juice Orange,Bottle (59 OZ-fl),0,Gal,0,Gallon,0
JUICES Taco Shop,JUICES Juice Tomato,Can (46 OZ-fl),0,,0,,0
FRUIT Taco Shop,PROD/FRT Blueberry,Case - 6 OZ-wt,0,lb,0,,0
FRUIT Taco Shop,PROD/FRT Lime,Lime,0,,0,,0
FRUIT Taco Shop,PROD/FRT Orange,Orange,0,,0,,0
FRUIT Taco Shop,FROZEN Pulp Mamey,Pack (14 OZ-wt),0,,0,,0
SODAS Taco Shop,SODAS Coke Mexican Btl,Bottle (12 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Diet Coke Btl,Bottle (8 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Diet Coke Can,Can (12 OZ-fl),0,Can (7 OZ-fl),0,,0
SODAS Taco Shop,SODAS Ginger Ale,Can (12 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (6.7 OZ-fl),0
SODAS Taco Shop,SODAS Jarrito Limon,Bottle (13.5 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Jarritos Mandarina,Bottle (13.5 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Jarritos Tamarindo,Bottle (13.5 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Jarritos Toronja,Bottle (13.5 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Red Bull,Bottle (8.4 OZ-fl),0,Bottle (12 OZ-fl),0,,0
SODAS Taco Shop,SODAS Red Bull Sugar Free,Bottle (8.4 OZ-fl),0,Bottle (12 OZ-fl),0,,0
SODAS Taco Shop,SODAS Sangria Senorial,Bottle (11.16 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Sidral Mundet,Bottle (12 OZ-fl),0,,0,,0
SODAS Taco Shop,SODAS Sprite Mexican Btl,Bottle (12 OZ-fl),0,,0,,0
SODAS Taco Shop,SUPPLIES CO2 BIB CON BAR,KEG,0,,0,,0
WATER BTL Taco Shop,WATER BTL Panna Water Lg,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
WATER BTL Taco Shop,WATER BTL Topo Chico Sm,Can (12 OZ-fl),0,,0,,0
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Decaff,Capsule,0,,0,,0
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Napoli,Capsule,0,,0,,0
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Napoli Double,Capsule,0,,0,,0
COFFEE Taco Shop,COFFEE Milk Whole,Gal,0,Bottle (32 OZ-fl),0,Gallon,0
CORDIALS Taco Shop,CORDIALS Amaro Montenegro,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS Taco Shop,CORDIALS Aperol Aperitivo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS Taco Shop,CORDIALS Baileys Irish Cream,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Campari Aperitivo,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
CORDIALS Taco Shop,CORDIALS Cointreau,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS Taco Shop,CORDIALS Courvoisier Vs,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Creme De Pamplemousse,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Disaronno Amaretto,Bottle (750 ML),0,Bottle (1 Litre),0,,0
CORDIALS Taco Shop,CORDIALS Fernet Branca,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Frangelico,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Grand Marnier,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Hennessy VS,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (375 mL),0
CORDIALS Taco Shop,CORDIALS Jagermeister,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS JF Hadens Espresso,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Kahlua,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Licor 43,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Lillet Blanc,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Liqueur Triple Sec,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Lo - Fi Amaro,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Luxardo Maraschino,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Nixta,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Remy Martin Vsop,Bottle (1 Litre),0,,0,,0
CORDIALS Taco Shop,CORDIALS Sambuca Romana Black,Bottle (750 ML),0,,0,,0
CORDIALS Taco Shop,CORDIALS Schnapps Peach,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
CORDIALS Taco Shop,CORDIALS Schnapps Sour Apple,Bottle (1 Litre),0,,0,,0
CORDIALS Taco Shop,CORDIALS Vermouth Dry,Bottle (1 Litre),0,Bottle (750 ML),0,,0
CORDIALS Taco Shop,CORDIALS Vermouth Rosso/Rouge,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1.5 Litre),0
GIN Taco Shop,GIN Bombay Dry Gin,Bottle (1 Litre),0,Bottle (1.75 Litre),0,,0
GIN Taco Shop,GIN Bombay Sapphire,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
GIN Taco Shop,GIN Harry Blus,Bottle (750 ML),0,,0,,0
GIN Taco Shop,GIN Hendricks,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
GIN Taco Shop,GIN House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
GIN Taco Shop,GIN Tanqueray,Bottle (1 Litre),0,,0,,0
RUM Taco Shop,RUM Piras 51 Cachaca,Bottle (1 Litre),0,,0,,0
RUM Taco Shop,RUM Bacardi 10 Yr,Bottle (750 ML),0,,0,,0
RUM Taco Shop,RUM Bacardi Anejo 4 Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM Taco Shop,RUM Bacardi Superior,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle - 750 ML,0
RUM Taco Shop,RUM Brugal 1888,Bottle (750 ML),0,,0,,0
RUM Taco Shop,RUM Captain Morgan Spiced,Bottle (1 Litre),0,,0,,0
RUM Taco Shop,RUM Castillo Gold,Bottle (1 Litre),0,,0,,0
RUM Taco Shop,RUM Coconut Cartel,Bottle (750 ML),0,,0,,0
RUM Taco Shop,RUM Copalli Cacao,Bottle (750 ML),0,,0,,0
RUM Taco Shop,RUM Flor De Cana 4Yr Anejo Oro,Bottle (1 Litre),0,,0,,0
RUM Taco Shop,RUM House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM Taco Shop,RUM Leblon Cachaca,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM Taco Shop,RUM Malibu Coconut,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM Taco Shop,RUM Plantation Pineapple,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM Taco Shop,RUM Sailor Jerry Spiced Rum,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1.75 Litre),0
RUM Taco Shop,RUM Santa Teresa 1796,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM Taco Shop,RUM Zacapa Rum Cent 23Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
RUM Taco Shop,RUM Bacardi Coco,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RUM Taco Shop,RUM Nusa Cana Spiced,Bottle (700 mL),0,,0,,0
RUM Taco Shop,RUM Nusa Cana Tropical,Bottle (700 mL),0,,0,,0
TEQUILA Taco Shop,TEQUILA 1800 Anejo,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA 1800 Cristalino Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA 1800 Milenio Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA 1800 Reposado,Bottle (1 Litre),0,,0,,0
TEQUILA Taco Shop,TEQUILA 1800 Silver,Bottle (1 Litre),0,,0,,0
TEQUILA Taco Shop,TEQUILA 400 Conejos Cuishe,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA 400 Conejos Joven Mezcal,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA 512 Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA 512 Blanco,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA 512 Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Astral Blanco,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Casa Dragones Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Casa Dragones Blanco,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Casa Dragones Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Casamigos Anejo,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Casamigos Blanco,Bottle (1 Litre),0,Bottle - 750 ML,0,Bottle (1 Litre),0
TEQUILA Taco Shop,TEQUILA Casamigos Cristalino,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Casamigos Mezcal Joven 80,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Casamigos Reposado,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Cincoro Teq Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Clase Azul Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Clase Azul Plata,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Clase Azul Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Dahlia Cristalino,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Don Julio 1942,Bottle (750 ML),0,Bottle (1.75 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Don Julio 70,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Don Julio Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Don Julio Blanco,Bottle (750 ML),0,Bottle (375 mL),0,,0
TEQUILA Taco Shop,TEQUILA Don Julio Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA El Mayor Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA El Mayor Silver,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Espolon Anejo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Espolon Rep,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Espolon Silver,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Herradura Anejo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Herradura Reposado,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Herradura Sel Suprema,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Herradura Silver,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA Taco Shop,TEQUILA Herradura Ultra Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA House,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Jimador Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Jimador Reposado,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Jimador Silver,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA Taco Shop,TEQUILA Jose Cuervo Reserva Familia Extra Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Komos Rep Rosa,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Lobos 1707 Joven,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Lobos 1707 Mezcal Artesanal,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Lobos 1707 Reposado,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Maestro Dobel Diamante,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Maestro Dobel Silver,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Akul Cirial,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Akul Espadin Joven,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Amaras Cupreata,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Anejo Ilegal,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Del Maguey Pechuga,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Del Maguey Vida,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal El Silencio,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Joven Ilegal,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Montelobos Joven,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Ojo de Tigre,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Reposado Ilegal,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Sacrum Ensamble,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Mezcal Union Joven,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Milagro Anejo,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Milagro Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Milagro Silver,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Ocho Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Ocho Plata,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Ocho Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Patron Anejo,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Patron Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Patron Silver,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Siete Leguas Anejo,Bottle (750 ML),0,Bottle (700 mL),0,,0
TEQUILA Taco Shop,TEQUILA Siete Leguas Reposado,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Siete Leguas Silver,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Sotol Por Siempre,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Teremana Anejo,Bottle (1 Litre),0,,0,,0
TEQUILA Taco Shop,TEQUILA Teremana Blanco,Bottle (1 Litre),0,,0,,0
TEQUILA Taco Shop,TEQUILA Teremana Reposado,Bottle (1 Litre),0,,0,,0
TEQUILA Taco Shop,TEQUILA Tromba Anejo,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Tromba Blanco,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Tromba Rep,Bottle (750 ML),0,Bottle (1 Litre),0,,0
TEQUILA Taco Shop,TEQUILA Volcan Tierra Blanco,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Milagro Silver,Bottle (1 Litre),0,Bottle (750 ML),0,,0
TEQUILA Taco Shop,TEQUILA Gran Coramino Reposado,Bottle (750 ML),0,,0,,0
TEQUILA Taco Shop,TEQUILA Gran Coramino Cristalino Reposado,Bottle (750 ML),0,,0,,0
VODKA Taco Shop,VODKA Absolut,Bottle (1 Litre),0,,0,,0
VODKA Taco Shop,VODKA Albani,Bottle (1 Litre),0,,0,,0
VODKA Taco Shop,VODKA Belvedere,Bottle (1 Litre),0,,0,,0
VODKA Taco Shop,VODKA Grey Goose,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA Taco Shop,VODKA Harry Blus,Bottle (750 ML),0,,0,,0
VODKA Taco Shop,VODKA House,Bottle (750 ML),0,Bottle (750 ML),0,,0
VODKA Taco Shop,VODKA Ketel One,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA Taco Shop,VODKA Ketel One Citroen,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA Taco Shop,VODKA Organika Vodka,Bottle (1 Litre),0,Bottle (750 ML),0,,0
VODKA Taco Shop,VODKA Smirnoff Orange,Bottle (1 Litre),0,,0,,0
VODKA Taco Shop,VODKA Titos,Bottle (1 Litre),0,Bottle (1.75 Litre),0,Bottle (750 ML),0
WHISKEY Taco Shop,WHISKEY Abasolo,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Angels Envy Bourbon,Bottle (750 ML),0,Bottle (1 Litre),0,,0
WHISKEY Taco Shop,WHISKEY Angels Envy Rye,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Balvenie Scotch 12 Yr Doublewood,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Buchanans 12 Yr,Bottle (1 Litre),0,Bottle (1 Litre),0,,0
WHISKEY Taco Shop,WHISKEY Bulleit Bourbon,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Chivas Regal 12 Yr,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Crown Royal Apple,Bottle (1 Litre),0,,0,,0
WHISKEY Taco Shop,WHISKEY Crown Royal Canadian,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Dewars White,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Dusse Cognac VSOP,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Glenfiddich 12 Yr,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Glenlivet 12 Yr,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
WHISKEY Taco Shop,WHISKEY J Walker Black,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY J Walker Red,Bottle (1 Litre),0,,0,,0
WHISKEY Taco Shop,WHISKEY Jack Daniels Fire,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Jack Daniels Old 7 Blk,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Jameson,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Macallan 12 Yr,Bottle (750 ML),0,Bottle (1 Litre),0,,0
WHISKEY Taco Shop,WHISKEY Makers Mark,Bottle (1 Litre),0,Bottle (750 ML),0,,0
WHISKEY Taco Shop,WHISKEY Old Forester Brbn 86,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY Taco Shop,WHISKEY Old Parr Scotch 12 Yr,Bottle (750 ML),0,,0,,0
WHISKEY Taco Shop,WHISKEY Slane Irish,Bottle (1 Litre),0,Bottle - 750 ML,0,,0
WHISKEY Taco Shop,WHISKEY Woodford Reserve,Bottle (1 Litre),0,Bottle (750 ML),0,,0
RED WINE Taco Shop,RED WINE Cab Sauv Bonanza,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Cab Sauv Los Vascos,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Malbec Antigal Uno,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Malbec Aruma,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE P Noir Robert Mondavi,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE P Noir Sea Sun,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Cab Sauv The Quilt Rsv,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Chianti Cafaggio,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Malbec Rsv Terraza,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Tempranillo Numanthia Termes,Bottle (750 ML),0,,0,,0
RED WINE Taco Shop,RED WINE Merlot Ca Donini,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Chardonnay Elouan,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Chardonnay Los Vascos,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE P Grigio Lagaria,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Sauv Blanc Vavasour,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Riesling Chateau St Michelle,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Sauv Blanc Justin,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,WHITE WINE Moscato D Asti  Saracco,Bottle (750 ML),0,,0,,0
WHITE WINE Taco Shop,ROSE Wine Whispering Angel,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Gioiosa Prosecco,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK House Sparkling,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Veuve Du Vernay Brut,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Chandon Sparkling,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),0,,0,,0
SPARK WINE Taco Shop,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),0,Bottle (187 mL),0,,0
`;
 // Tu CSV completo aquí

let sortableInstances = {};

document.addEventListener('DOMContentLoaded', () => {
    window.inventoryItems = processCSV(CSV_DATA);
    const categories = [...new Set(window.inventoryItems.map(item => item.StorageLocation))];

    populateCategorySelect(document.getElementById('category-select-location1'), categories);
    populateCategorySelect(document.getElementById('category-select-location2'), categories);

    document.getElementById('category-select-location1').value = categories[0];
    filterAndDisplayForm('location1');
    filterAndDisplayForm('location2');

    // --- LÓGICA DE MENÚ MANUAL ELIMINADA ---
    // El botón ahora funciona con los atributos de Bootstrap, no se necesita JS extra.

    // Lógica para el interruptor de arrastrar y soltar
    const dragDropSwitch = document.getElementById('drag-drop-switch');
    dragDropSwitch.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        for (const key in sortableInstances) {
            sortableInstances[key].option('disabled', !enabled);
        }
        document.querySelectorAll('.sortable-list').forEach(list => {
            list.classList.toggle('disabled', !enabled);
        });
    });

    initializeSortable('location1');
    initializeSortable('location2');
    
    dragDropSwitch.dispatchEvent(new Event('change'));
});

// ... El resto del archivo script.js permanece sin cambios ...