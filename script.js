// Contenido del archivo CSV adjunto, incrustado como una cadena de texto.
// Puedes actualizar esta cadena si tu archivo CSV cambia.
const CSV_DATA = `StorageLocation,Item,UofM,Qty,UofM2,Qty2,UofM3,Qty3
BEER BTL,BEER DRAFT Peroni,Gallon,19.2,,,,
BEER BTL,BEER DRAFT Bud Light,Gallon,16.48,,,,
BEER BTL,BEER DRAFT VS La Yuma,Gallon,0,,,,
BEER BTL,BEER DRAFT Goose Ipa Draft,Gallon,12.7,,,,
BEER BTL,BEER BTL Fat Tire,Bottle (12 OZ-fl),4,,,,
BEER BTL,BEER BTL Lagunitas Ipa,Bottle (12 OZ-fl),0,,,,
BEER BTL,BEER BTL La Rubia,Bottle (12 OZ-fl),69,,,,
BEER BTL,BEER BTL Heineken,Bottle (12 OZ-fl),124,,,,
BEER BTL,BEER BTL Estrella Damm,Bottle (11.2 OZ-fl),0,,,,
BEER BTL,BEER BTL Peroni 00,Bottle (11.2 OZ-fl),47,,,,
BEER BTL,BEER BTL Funky Buddha Floridian,Bottle (12 OZ-fl),29,,,,
BEER BTL,BEER BTL Peroni,Bottle (11.2 OZ-fl),0,,,,
BEER BTL,BEER DRAFT Stella Artois,Gallon,11.33,Liter,0,,
BEER BTL,BEER BTL Michelob Ultra,Bottle (12 OZ-fl),74,Bottle (16 OZ-fl),0,,
BEER BTL,BEER BTL Modelo Especial,Bottle (12 OZ-fl),99,Bottle (7 OZ-fl),0,,
BEER BTL,BEER BTL Corona,Bottle (12 OZ-fl),152,,,,
CHAMP/SPARK,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),5,Bottle (187 mL),0,,
CHAMP/SPARK,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),5,,,,
CHAMP/SPARK,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),4,,,,
CHAMP/SPARK,CHAMP/SPARK Della Vite Pros,Bottle (750 ML),8,,,,
CHAMP/SPARK,CHAMP/SPARK Gioiosa Prosecco,Bottle (750 ML),18.1,,,,
CHAMP/SPARK,CHAMP/SPARK Le Contesse Prosecco,Bottle (750 ML),9,,,,
CHAMP/SPARK,CHAMP/SPARK House Sparkling,Bottle (750 ML),63.8,,,,
CON BAR,CON BAR Mix Bloody Mary,Bottle (32 OZ-fl),17,Can (7.5 OZ-fl),0,,
CON BAR,SODAS Diet Coke Can,Can (12 OZ-fl),0,Can (7 OZ-fl),0,,
CON BAR,SODAS Diet Coke Btl,Bottle (8 OZ-fl),187,,,,
CON BAR,SODAS Coke Btl,Bottle (8 OZ-fl),166,,,,
CON BAR,SODAS Sprite Btl,Bottle (8 OZ-fl),38,Bottle (12 OZ-fl),0,,
CON BAR,CON BAR Grapefruit Soda,Bottle (6.7 OZ-fl),59,Bottle (12 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,SODAS Ginger Ale,Can (12 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (6.7 OZ-fl),58
CON BAR,CON BAR Ginger Beer,Bottle (6.7 OZ-fl),83,Bottle (16.9 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,CON BAR Tonic Water,Bottle (6.7 OZ-fl),73,Can (7.5 OZ-fl),0,Bottle (12 OZ-fl),0
CON BAR,CON BAR Club Soda,Bottle (6.7 OZ-fl),126,Bottle (12 OZ-fl),0,Can (7.5 OZ-fl),0
CON BAR,SODAS Red Bull,Bottle (8.4 OZ-fl),44,Bottle (12 OZ-fl),0,,
CON BAR,SODAS Red Bull Sugar Free,Bottle (8.4 OZ-fl),18,Bottle (12 OZ-fl),0,,
CON BAR,SODAS Red Bull Yellow,Bottle (8.4 OZ-fl),44,,,,
CON BAR,WATER BTL Panna Water Lg,Bottle (1 Litre),221,Bottle - 750 ML,0,,
CON BAR,WATER BTL San Pellegrino Lg,Bottle (1 Litre),135,,,,
CON BAR,CON BAR Mix Strawberry,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),5,,
CON BAR,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),0,Bottle (17 OZ-fl),1,,
CON BAR,CON BAR Mix Mango,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),2,Bottle (1 Litre),0
CON BAR,CON BAR Mix Peach,Bottle (16.9 OZ-fl),3,Bottle (32 OZ-fl),0,,
CON BAR,CON BAR Mix Kiwi,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),8,,
CON BAR,CON BAR Mix Rose Syrup,Bottle (1 Litre),0,Bottle (750 ML),0,,
CON BAR,COFFEE Syrup Vanilla,Litre,3.7,Bottle (16.9 OZ-fl),0,,
CON BAR,COFFEE Syrup Hazelnut,Bottle (750 ML),0,Bottle (1 Litre),1.2,,
CON BAR,COFFEE Syrup Chocolate,Bottle (24 OZ-fl),17,Bottle (16 OZ-fl),0,Bottle (64 OZ-fl),0
CON BAR,CON BAR Mix Citrus,Bottle (1 Litre),0,Bottle (64 OZ-fl),2,Bottle (32 OZ-fl),0
CON BAR,CON BAR Mix Pina Colada,Bottle (64 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0
CON BAR,CON BAR Nectar Agave,Jug (114 OZ-fl),0,lb,0,Gallon,0.7
CON BAR,CON BAR Queen Olives,Gal,1.1,Pack (64 OZ-wt),0,,
CON BAR,CON BAR Black Cherries,Bottle (44 OZ-fl),0,0.5 Gallon,0,Case - 8 OZ-wt,0
CON BAR,CON BAR Lychee In Heavy Syrup,Bottle (20 OZ-fl),7,,,,
CON BAR,CON BAR Mint,lb,1.1,,,,
CON BAR,CON BAR Garnish Lime,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Garnish Lemon,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Garnish Orange,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Garnish Pineapple,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Garnish Grapefruit,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Garnish Strawberry,SLICE,0,Bag - 500 Slices,0,,
CON BAR,CON BAR Bitter Aromatic,Bottle (4 OZ-fl),0,Bottle (16 OZ-fl),0.3,Bottle (6.7 OZ-fl),0
CON BAR,CON BAR Bitter Orange,Bottle (200 mL),0,Bottle (4 OZ-fl),0.5,,
CON BAR,CON BAR Bitter Peychaud's,Bottle (200 mL),4.2,,,,
CON BAR,CON BAR Fee Foam,Bottle (150 mL),0.2,Bottle (200 mL),0,,
CON BAR,CON BAR Mix Peach,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),0,,
CON BAR,CAN DRY Vanilla Extract,Bottle (32 OZ-fl),0,Gallon,0,,
CON BAR,CAN DRY Tajin,Jar - 5.3 OZ-wt,0,,,,
CON BAR,CON BAR Mix Rose Water,Bottle (10 OZ-fl),0,,,,
CON BAR,CON BAR Garnish Drink Topper,PC,0,,,,
CON BAR,CON BAR Olive Brine,Bottle (12 OZ-fl),0,,,,
CON BAR,CON BAR Mix Kiwi,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,,
CON BAR,CON BAR Rose Petals,Case - 1000 PC,0,,,,
CON BAR,CON BAR Mix Mango,Bottle (32 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (1 Litre),0
CON BAR,CON BAR Mix Pomegranate Basil,Bottle (1 Litre),0,Bottle (200 mL),0,,
CON BAR,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),0,Bottle (17 OZ-fl),0,,
CON BAR,CON BAR Mix Orange Tangerine,Bottle (1 Litre),0,,,,
CON BAR,PROD/FRT Orange,Orange,0,,,,
CON BAR,CON BAR Mix Grenadine,Bottle (1 Litre),0,,,,
CON BAR,CON BAR Puree Lychee,Bottle (16.9 OZ-fl),2,lb,0,Bottle (16.9 OZ-fl),0
CON BAR,SODAS Coke Can,Can (12 OZ-fl),0,,,,
CON BAR,SODAS Coke Can,Can (12 OZ-fl),36,,,,
CORDIALS,CORDIALS Lillet Blanc,Bottle (750 ML),4,,,,
CORDIALS,CORDIALS Lillet Rose,Bottle (750 ML),8,,,,
CORDIALS,CORDIALS Grand Marnier,Bottle (1 Litre),5.9,Bottle (750 ML),0,,
CORDIALS,CORDIALS Cointreau,Bottle (750 ML),0,Bottle (1 Litre),3.4,,
CORDIALS,CORDIALS Disaronno Amaretto,Bottle (750 ML),0,Bottle (1 Litre),1.7,,
CORDIALS,CORDIALS Frangelico,Bottle (1 Litre),2,Bottle (750 ML),0,,
CORDIALS,CORDIALS Luxardo Maraschino,Bottle (750 ML),2.3,,,,
CORDIALS,CORDIALS Italicus Rosolio Bergamoto,Bottle (750 ML),1.8,,,,
CORDIALS,CORDIALS Creme De Mure,Bottle (750 ML),0,Bottle (700 mL),1.6,,
CORDIALS,CORDIALS Fernet Branca,Bottle (750 ML),2.1,,,,
CORDIALS,CORDIALS Sambuca Ramazzotti,Bottle (750 ML),1.7,,,,
CORDIALS,CORDIALS Chartreuse Green,Bottle (750 ML),0.4,,,,
CORDIALS,CORDIALS Caravedo Pisco Puro,Bottle (750 ML),1.25,,,,
CORDIALS,CORDIALS Campari Aperitivo,Bottle (1 Litre),1.7,Bottle - 750 ML,0,,
CORDIALS,CORDIALS Aperol Aperitivo,Bottle (750 ML),0,Bottle (1 Litre),3.8,,
CORDIALS,CORDIALS Giffard Banana Du Brazil,Bottle (750 ML),5.6,,,,
CORDIALS,CORDIALS Chinola Passion Fruit,Bottle (750 ML),4.2,,,,
CORDIALS,CORDIALS Creme De Pamplemousse,Bottle (750 ML),0.9,,,,
CORDIALS,CORDIALS Lo - Fi Amaro,Bottle (750 ML),1.7,,,,
CORDIALS,CORDIALS Botanical Rockey,Bottle (750 ML),3,Bottle (1 Litre),0,,
CORDIALS,CORDIALS Mandarine Napoleon,Bottle (1 Litre),4.8,Bottle (750 ML),0,,
CORDIALS,CORDIALS Amaro Montenegro,Bottle (750 ML),0,Bottle (1 Litre),4.2,,
CORDIALS,CORDIALS Liqueur Triple Sec,Bottle (1 Litre),6.5,Bottle (750 ML),0,,
CORDIALS,CORDIALS Schnapps Peach,Bottle (1 Litre),1.5,Bottle (750 ML),0,Bottle (1.75 Litre),0
CORDIALS,CORDIALS Vermouth Rosso/Rouge,Bottle (1 Litre),2,Bottle - 750 ML,0,Bottle (1.5 Litre),0
CORDIALS,CORDIALS Vermouth Dry,Bottle (1 Litre),0,Bottle (750 ML),2.3,,
CORDIALS,CORDIALS Remy Martin 1738,Bottle (1 Litre),1.8,Bottle (750 ML),0,,
CORDIALS,CORDIALS Hennessy VS,Bottle (1 Litre),1,Bottle (750 ML),0.7,Bottle (375 mL),0
CORDIALS,CORDIALS Kahlua,Bottle (1 Litre),3.3,Bottle (750 ML),0,,
CORDIALS,CORDIALS Creme De Cacao,Bottle (1 Litre),3.3,Bottle (750 ML),0,,
CORDIALS,CORDIALS Ancho Reyes Poblano Chile,Bottle (750 ML),0.2,,,,
CORDIALS,CORDIALS Ancho Reyes Ancho Chile,Bottle (750 ML),0.8,,,,
CORDIALS,CORDIALS Baileys Irish Cream,Bottle (1 Litre),2.2,Bottle (750 ML),0,,
CORDIALS,CORDIALS Benedictine,Bottle (1 Litre),9.3,Bottle (750 ML),0,,
CORDIALS,CORDIALS Licor 43,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
CORDIALS,CORDIALS St Germain,Bottle (750 ML),4,,,,
CORDIALS,CORDIALS Blue Curacao,Bottle (1 Litre),2.1,,,,
GIN,GIN House,Bottle (1 Litre),8.1,Bottle (750 ML),0,,
GIN,GIN Atian,Bottle (750 ML),1.8,,,,
GIN,GIN Bombay Dry Gin,Bottle (1 Litre),2.4,Bottle (1.75 Litre),0,,
GIN,GIN Bombay Sapphire,Bottle (1 Litre),1.6,Bottle (750 ML),0,Bottle (1.75 Litre),0
GIN,GIN Harry Blus,Bottle (750 ML),14,,,,
GIN,GIN Hendricks,Bottle (1 Litre),2.7,Bottle - 750 ML,0,,
GIN,GIN Tanqueray,Bottle (1 Litre),2,,,,
GIN,GIN Fords,Bottle (750 ML),0,Bottle (1 Litre),1.2,,
GIN,GIN Monkey 47,Bottle (1 Litre),2.1,,,,
GIN,GIN Gray Whale,Bottle (750 ML),1.5,Bottle (1 Litre),0,,
GIN,GIN London No.3,Bottle (750 ML),3,Bottle (1 Litre),0,,
INFUSION,INFUSION Blueberry Hibiscus,Tea Bag,85,,,,
INFUSION,INFUSION Chamomile Tea,Tea Bag,83,lb,0,,
INFUSION,INFUSION English Breakfast,Tea Bag,41,,,,
INFUSION,INFUSION Jasmine Tea,Tea Bag,54,lb,0,,
INFUSION,INFUSION Matcha (tea bg),Tea Bag,92,,,,
INFUSION,INFUSION Turmeric Ginger Tea,Tea Bag,60,,,,
INFUSION,COFFEE Matcha (lb),lb,2.32,Case - 2.2 LB,0,,
INFUSION,INFUSION Iced Tea Org Black,Bag - 3 OZ-wt,22,,,,
WINE,RED WINE Cab Sauv Bonanza,Bottle (750 ML),14.4,,,,
WINE,RED WINE P Noir Elouan,Bottle (750 ML),3,,,,
WINE,RED WINE Malbec Aruma,Bottle (750 ML),0,,,,
WINE,RED WINE P Noir Belle Glos Las Alturas,Bottle (750 ML),6,,,,
WINE,RED WINE Red Blend Prisoner,Bottle (750 ML),4,,,,
WINE,RED WINE Merlot Decoy by Duckhorn,Bottle (750 ML),0,,,,
WINE,RED WINE Chianti Classico Collazzi,Bottle (750 ML),4,,,,
WINE,RED WINE Cab Sauv The Quilt Rsv,Bottle (750 ML),5,,,,
WINE,ROSE WINE The Pale Rose,Bottle (750 ML),0,,,,
WINE,ROSE Wine Whispering Angel,Bottle (750 ML),15.1,,,,
WINE,WHITE WINE Chardonnay Sea Sun,Bottle (750 ML),0,,,,
WINE,WHITE WINE Gavi Villa Sparina,Bottle (750 ML),8.9,,,,
WINE,WHITE WINE Riesling Chateau St Michelle,Bottle (750 ML),5.1,,,,
WINE,WHITE WINE Sauv Blanc Justin,Bottle (750 ML),9.9,,,,
WINE,WHITE WINE Sauv Blanc Dashwood,Bottle (750 ML),3,,,,
WINE,WHITE WINE Moscato D Asti  Saracco,Bottle (750 ML),8,,,,
WINE,WHITE WINE Chardonnay Landmark Sonoma,Bottle (750 ML),4,,,,
WINE,WHITE WINE P Grigio La Vis,Bottle (750 ML),3,,,,
WINE,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),8.1,,,,
WINE,RED WINE Malbec Antigal Uno,Bottle (750 ML),2,,,,
WINE,RED WINE Merlot Ca Donini,Bottle (750 ML),10.1,,,,
WINE,RED WINE P Noir Sea Sun,Bottle (750 ML),9.5,,,,
WINE,RED WINE Malbec Rsv Terraza,Bottle (750 ML),4.6,,,,
WINE,RED WINE Marques De Riscal Proximo,Bottle (750 ML),0,,,,
WINE,RED WINE Cab Sauv Justin,Bottle (750 ML),0,,,,
WINE,WHITE WINE Albarino Lusco,Bottle (750 ML),0,,,,
WINE,CHAMP/SPARK Veuve Du Vernay Brut Rose,Bottle (750 ML),0,,,,
WINE,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),0,Bottle (187 mL),0,,
WINE,CHAMP/SPARK Chandon Sparkling,Bottle (750 ML),10,,,,
WINE,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),0,,,,
WINE,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),0,,,,
WINE,RED WINE Chianti Cafaggio,Bottle (750 ML),0,,,,
WINE,WHITE WINE Sauv Blanc Vavasour,Bottle (750 ML),12.5,,,,
WINE,RED WINE Tempranillo Numanthia Termes,Bottle (750 ML),6.1,,,,
WINE,WHITE WINE Chardonnay Elouan,Bottle (750 ML),12.5,,,,
RUM,RUM House,Bottle (1 Litre),0,Bottle (750 ML),0,,
RUM,RUM Bacardi Superior,Bottle (1 Litre),12.05,Bottle (1.75 Litre),0,Bottle - 750 ML,0
RUM,RUM Flor De Cana 4Yr Anejo Oro,Bottle (1 Litre),3.8,,,,
RUM,RUM Copalli Cacao,Bottle (750 ML),2,,,,
RUM,RUM Santa Teresa 1796,Bottle (750 ML),2.2,Bottle (1 Litre),0,,
RUM,RUM Sailor Jerry Spiced Rum,Bottle (1 Litre),3.7,Bottle - 750 ML,0,Bottle (1.75 Litre),0
RUM,RUM Coconut Cartel,Bottle (750 ML),1.1,,,,
RUM,RUM Leblon Cachaca,Bottle (1 Litre),0,Bottle (750 ML),0,,
RUM,RUM Plantation Pineapple,Bottle (1 Litre),0,Bottle (750 ML),0.5,,
RUM,RUM Zacapa Rum Cent 23Yr,Bottle (750 ML),2.8,Bottle (1 Litre),0,,
RUM,RUM Bacardi 10 Yr,Bottle (750 ML),2.1,,,,
RUM,RUM Brugal 1888,Bottle (750 ML),0.8,,,,
RUM,RUM Bacardi Anejo 4 Yr,Bottle (750 ML),0.7,Bottle (1 Litre),1,,
RUM,RUM Piras 51 Cachaca,Bottle (1 Litre),2.7,,,,
RUM,RUM Flor De Cana 4Yr White Extra Seco,Bottle (1 Litre),0,,,,
RUM,RUM Nusa Cana Spiced,Bottle (700 mL),1,,,,
RUM,RUM Nusa Cana Tropical,Bottle (700 mL),1,,,,
RUM,RUM Bacardi Coco,Bottle (1 Litre),0,Bottle (750 ML),0,,
TEQUILA,TEQUILA Gran Coramino Reposado,Bottle (750 ML),1,,,,
TEQUILA,TEQUILA House,Bottle (1 Litre),18.8,Bottle (750 ML),0,,
TEQUILA,TEQUILA Jimador Silver,Bottle (1 Litre),9.9,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA,TEQUILA 512 Blanco,Bottle (750 ML),0,Bottle (1 Litre),1.6,,
TEQUILA,TEQUILA 512 Reposado,Bottle (750 ML),1.3,,,,
TEQUILA,TEQUILA 512 Anejo,Bottle (750 ML),0.9,,,,
TEQUILA,TEQUILA Casamigos Blanco,Bottle (1 Litre),2.5,Bottle - 750 ML,0,Bottle (1 Litre),0
TEQUILA,TEQUILA Casamigos Reposado,Bottle (750 ML),0,Bottle (1 Litre),1.9,,
TEQUILA,TEQUILA Casamigos Anejo,Bottle (1 Litre),2,Bottle (750 ML),0,,
TEQUILA,TEQUILA Don Julio Blanco,Bottle (750 ML),1.9,Bottle (375 mL),0,,
TEQUILA,TEQUILA Don Julio Reposado,Bottle (750 ML),0.2,,,,
TEQUILA,TEQUILA Don Julio Anejo,Bottle (750 ML),1.5,,,,
TEQUILA,TEQUILA Don Julio 1942,Bottle (750 ML),1.25,Bottle (1.75 Litre),0,,
TEQUILA,TEQUILA Herradura Silver,Bottle (1 Litre),3.6,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA,TEQUILA Herradura Reposado,Bottle (1 Litre),1.05,Bottle (750 ML),0,,
TEQUILA,TEQUILA Herradura Anejo,Bottle (750 ML),0.75,Bottle (1 Litre),0,,
TEQUILA,TEQUILA Herradura Ultra Anejo,Bottle (750 ML),0.6,,,,
TEQUILA,TEQUILA Patron Silver,Bottle (750 ML),2.5,Bottle (1 Litre),0,,
TEQUILA,TEQUILA Patron Reposado,Bottle (750 ML),3.1,,,,
TEQUILA,TEQUILA Patron Anejo,Bottle (750 ML),2.45,,,,
TEQUILA,TEQUILA Tromba Blanco,Bottle (750 ML),0,Bottle (1 Litre),5.1,,
TEQUILA,TEQUILA Dahlia Cristalino,Bottle (750 ML),1.75,,,,
TEQUILA,TEQUILA Mezcal Joven Ilegal,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
TEQUILA,TEQUILA Mezcal Del Maguey Vida,Bottle (750 ML),1.15,,,,
TEQUILA,TEQUILA Mezcal El Silencio,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Jose Cuervo Reserva Familia Extra Anejo,Bottle (750 ML),1.5,,,,
TEQUILA,TEQUILA Mezcal Ojo de Tigre,Bottle (750 ML),1.3,Bottle (1 Litre),0,,
TEQUILA,TEQUILA 21 Seeds Cucumber Jalapeno,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA 21 Seeds Grapefruit Hibiscus,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA 21 Seeds Valencia Orange,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Volcan Tierra Blanco,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Volcan Tierra Rep,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Volcan Tierra Tahona,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Volcan Tierra XA,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Astral Anejo,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Astral Blanco,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Astral Reposado,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Pierde Almas Mezcal Espadin,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Pierde Almas Mezcal Purita,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Don Julio 1942 Alma Miel,Bottle (750 ML),0,,,,
TEQUILA,TEQUILA Gran Coramino Cristalino Reposado,Bottle (750 ML),1,,,,
VODKA,VODKA House,Bottle (750 ML),6.9,Bottle (750 ML),0,,
VODKA,VODKA Albani,Bottle (1 Litre),1,,,,
VODKA,VODKA Grey Goose,Bottle (1 Litre),3.7,Bottle (750 ML),0,,
VODKA,VODKA Titos,Bottle (1 Litre),4.3,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA,VODKA Harry Blus,Bottle (750 ML),0.1,,,,
VODKA,VODKA Ketel One,Bottle (1 Litre),3.5,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA,VODKA Ketel One Citroen,Bottle (1 Litre),1,Bottle (750 ML),0,,
VODKA,VODKA Organika Vodka,Bottle (1 Litre),8.4,Bottle (750 ML),0,,
VODKA,VODKA Belvedere,Bottle (1 Litre),2.35,,,,
VODKA,VODKA Absolut,Bottle (1 Litre),1.8,,,,
VODKA,VODKA Smirnoff Orange,Bottle (1 Litre),0,,,,
WHISKEY,WHISKEY Woodford Reserve,Bottle (1 Litre),2.1,Bottle (750 ML),0,,
WHISKEY,WHISKEY Old Forester Brbn 86,Bottle (1 Litre),2.5,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Jack Daniels Single Barrel Rye,Bottle (1 Litre),6.1,,,,
WHISKEY,WHISKEY Jack Daniels Old 7 Blk,Bottle (1 Litre),3.05,Bottle (750 ML),0,,
WHISKEY,WHISKEY Jack Daniels Fire,Bottle (750 ML),2.5,,,,
WHISKEY,WHISKEY Crown Royal Canadian,Bottle (1 Litre),1,Bottle (750 ML),0.9,,
WHISKEY,WHISKEY Crown Royal Apple,Bottle (1 Litre),1.8,,,,
WHISKEY,WHISKEY Jameson,Bottle (1 Litre),1,Bottle (750 ML),0.8,,
WHISKEY,WHISKEY Slane Irish,Bottle (1 Litre),1.3,Bottle - 750 ML,0,,
WHISKEY,WHISKEY Angels Envy Bourbon,Bottle (750 ML),2.5,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Angels Envy Rye,Bottle (750 ML),2.2,,,,
WHISKEY,WHISKEY Dewars White,Bottle (1 Litre),6.7,Bottle (750 ML),0,,
WHISKEY,WHISKEY J Walker Black,Bottle (1 Litre),1.6,Bottle (750 ML),0,,
WHISKEY,WHISKEY Balvenie Scotch 12 Yr Doublewood,Bottle (750 ML),1.5,,,,
WHISKEY,WHISKEY Makers Mark,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
WHISKEY,WHISKEY Buchanans 12 Yr,Bottle (750 ML),0,Bottle (1 Litre),1.7,,
WHISKEY,WHISKEY Chivas Regal 12 Yr,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
WHISKEY,WHISKEY Old Parr Scotch 12 Yr,Bottle (750 ML),1.7,,,,
WHISKEY,WHISKEY Glenfiddich 12 Yr,Bottle (1 Litre),2,Bottle (750 ML),0.3,,
WHISKEY,WHISKEY Glenlivet 12 Yr,Bottle (1 Litre),0,Bottle - 750 ML,2.8,,
WHISKEY,WHISKEY Macallan 12 Yr,Bottle (750 ML),1.8,Bottle (1 Litre),0,,
Bar Prep,PREP NEWS - Frozzie Rosie,QT,20,OZ-fl,0,,
Bar Prep,PREP NEWS - Just Like 1988,QT,15,,,,
Bar Prep,PREP NEWS - Spicy Agave,OZ-fl,0,QT,0,,
Bar Prep,PREP NEWS - Blue Citrus Reduction,QT,0,OZ-fl,0,,
Bar Prep,PREP NEWS - Demerara Syrup,OZ-fl,0,QT,0,,
Bar Prep,PREP MRB - Simple Syrup,Bottle (32 OZ-fl),0,Bottle (1 Litre),0,,
Juices,CAN DRY Juice Lime,Bottle (59 OZ-fl),5,Bottle (59 OZ-fl),0,Bottle (750 ML),0
Juices,CAN DRY Juice Lemon,Bottle (59 OZ-fl),1.3,Gal,0,Bottle (750 ML),0
Juices,JUICES Juice Orange,Bottle (59 OZ-fl),36,Gal,0,Gallon,0
Juices,CON BAR Juice Grapefruit,Bottle (32 OZ-fl),12.7,Gal,0,Bottle (32 OZ-fl),0
Juices,CON BAR Juice Cranberry,Bottle (32 OZ-fl),18.2,Bottle (64 OZ-fl),0,Bottle (5.5 OZ-fl),0
Juices,JUICES Juice Apple,Bottle (32 OZ-fl),15.7,Gal,0,Bottle (46 OZ-fl),0
Juices,CON BAR Juice Pineapple,Can (6 OZ-fl),0,Bottle (46 OZ-fl),9.4,Can (5.5 OZ-fl),0
Juices,JUICES Juice Unbeetable Cold Pressed,Bottle (12 OZ-fl),23,,,,
Juices,JUICES Juice Sunset Cold Pressed,Bottle (12 OZ-fl),40,,,,
Juices,JUICES Juice Green Lover Cold Pressed,Bottle (12 OZ-fl),37,,,,
Coffee,COFFEE Milk Soy,Bottle (32 OZ-fl),14.6,Bottle (64 OZ-fl),0,,
Coffee,COFFEE Milk Oat,Bottle (32 OZ-fl),25.2,,,,
Coffee,COFFEE Milk Almond,Bottle (32 OZ-fl),16,Gal,0,Bottle (64 OZ-fl),0
Coffee,COFFEE Milk Whole,Gal,30.5,Bottle (32 OZ-fl),0,Gallon,0
Coffee,COFFEE Half n Half,0.5 Gallon,6.35,,,,
Coffee,COFFEE Kimbo Decaf Coffee Filtro Ground,Pack (8 OZ-wt),0,Packet (2.25 OZ-wt),0,,
Coffee,COFFEE Kimbo Coffee Filtro Ground,Pack (8 OZ-wt),48,Packet (2.25 OZ-wt),0,,
Coffee,COFFEE Kimbo Decaf Espresso Beans,lb,0.7,,,,
Coffee,COFFEE Kimbo Extra Cream Espresso Beans,lb,15.4,,,,
Coffee,PREP MRB - Caramel Syrup,OZ-fl,0,,,,
Coffee,COFFEE Syrup Caramel,Bottle (44 OZ-fl),0,Bottle (64 OZ-fl),0,Bottle (1 Litre),3.8
BEER Taco Shop,BEER BTL Blue Moon,Bottle (12 OZ-fl),50,,,,
BEER Taco Shop,BEER BTL Corona,Bottle (12 OZ-fl),152,,,,
BEER Taco Shop,BEER BTL Corona Light,Bottle (12 OZ-fl),66,,,,
BEER Taco Shop,BEER BTL Dos Xx Amber,Bottle (12 OZ-fl),97,,,,
BEER Taco Shop,BEER BTL Dos Xx Lager,Bottle (12 OZ-fl),98,,,,
BEER Taco Shop,BEER BTL Heineken,Bottle (12 OZ-fl),61,,,,
BEER Taco Shop,BEER BTL Lagunitas Ipa,Bottle (12 OZ-fl),46,,,,
BEER Taco Shop,BEER BTL Modelo Especial,Bottle (12 OZ-fl),116,Bottle (7 OZ-fl),0,,
BEER Taco Shop,BEER BTL Negra Modelo,Bottle (12 OZ-fl),70,,,,
BEER Taco Shop,BEER BTL Pacifico,Bottle (12 OZ-fl),133,,,,
BEER Taco Shop,BEER BTL Tecate Can,Bottle (12 OZ-fl),67,,,,
BEER Taco Shop,BEER BTL Tecate Light Can,Bottle (12 OZ-fl),83,,,,
BEER Taco Shop,BEER BTL Victoria,Bottle (12 OZ-fl),51,,,,
BAR CONS Taco Shop,CAN DRY Coconut Shredded Sweetened,lb,0,,,,
BAR CONS Taco Shop,CAN DRY Juice Lemon,Bottle (59 OZ-fl),0,Gal,0,Bottle (750 ML),0
BAR CONS Taco Shop,CAN DRY Juice Lime,Bottle (59 OZ-fl),0,Bottle (59 OZ-fl),0,Bottle (750 ML),0
BAR CONS Taco Shop,CAN DRY Tajin,Jar - 5.3 OZ-wt,11,,,,
BAR CONS Taco Shop,CON BAR Agua Tamarindo,Bottle (32 OZ-fl),4.2,,,,
BAR CONS Taco Shop,CON BAR Bitter Aromatic,Bottle (4 OZ-fl),0,Bottle (16 OZ-fl),4.7,Bottle (6.7 OZ-fl),0
BAR CONS Taco Shop,CON BAR Bitter Orange,Bottle (200 mL),0,Bottle (4 OZ-fl),1,,
BAR CONS Taco Shop,CON BAR Bitter Peychaud's,Bottle (200 mL),4,,,,
BAR CONS Taco Shop,CON BAR Black Cherries,Bottle (44 OZ-fl),0,0.5 Gallon,0,Case - 8 OZ-wt,0
BAR CONS Taco Shop,CON BAR Chamoy,Bottle (1 Litre),7.3,,,,
BAR CONS Taco Shop,CON BAR Cherry Maraschino,Gallon,0.4,Can - 3 Kg,0,Case - 8 OZ-wt,0
BAR CONS Taco Shop,CON BAR Coconut Water,Bottle (11.1 OZ-fl),35,Bottle (1 Litre),0,,
BAR CONS Taco Shop,CON BAR Coke Bib,Gallon,5.5,Keg (2.5 Gl),0,,
BAR CONS Taco Shop,CON BAR Dragon Fruit Chunks,lb,15,,,,
BAR CONS Taco Shop,CON BAR Edible Flowers,Flower,0,,,,
BAR CONS Taco Shop,CON BAR Fee Foam,Bottle (150 mL),0.6,Bottle (200 mL),0,,
BAR CONS Taco Shop,CON BAR Garnish Dragonfruit,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Garnish Grapefruit,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Garnish Kiwi,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Garnish Lime,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Garnish Orange,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Garnish Pineapple,SLICE,0,Bag - 500 Slices,0,,
BAR CONS Taco Shop,CON BAR Ginger Beer,Bottle (6.7 OZ-fl),11,Bottle (16.9 OZ-fl),0,Can (7.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Juice Clamato,Bottle (1 Litre),2,Bottle (8 OZ-fl),0,,
BAR CONS Taco Shop,CON BAR Juice Cranberry,Bottle (32 OZ-fl),1.4,Bottle (64 OZ-fl),0,Bottle (5.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Juice Cranberry Bib,Gallon,0,Keg (2.5 Gl),0,,
BAR CONS Taco Shop,CON BAR Juice Pineapple,Can (6 OZ-fl),73,Bottle (46 OZ-fl),0,Can (5.5 OZ-fl),0
BAR CONS Taco Shop,CON BAR Maggi Seasoning Liquid,Bottle (27 OZ-fl),1.7,,,,
BAR CONS Taco Shop,CON BAR Mint,lb,3.1,,,,
BAR CONS Taco Shop,CON BAR Mix Bloody Mary,Bottle (32 OZ-fl),0,Can (7.5 OZ-fl),0,,
BAR CONS Taco Shop,CON BAR Mix Grenadine,Bottle (1 Litre),0.9,,,,
BAR CONS Taco Shop,CON BAR Mix Mango,Bottle (32 OZ-fl),13.7,Bottle (16.9 OZ-fl),0,Bottle (1 Litre),0
BAR CONS Taco Shop,CON BAR Mix Passion Fruit,Bottle (32 OZ-fl),19.2,Bottle (17 OZ-fl),0,,
BAR CONS Taco Shop,CON BAR Mix Pina Colada,Bottle (64 OZ-fl),0,Bottle (16.9 OZ-fl),0,Bottle (32 OZ-fl),19.3
BAR CONS Taco Shop,CON BAR Mix Strawberry,Bottle (32 OZ-fl),19.3,Bottle (16.9 OZ-fl),0,,
BAR CONS Taco Shop,CON BAR Nectar Agave,Jug (114 OZ-fl),0,lb,0,Gallon,0.3
BAR CONS Taco Shop,CON BAR Queen Olives,Gal,0.9,Pack (64 OZ-wt),0,,
BAR CONS Taco Shop,CON BAR Sprite Bib,Gallon,0,Keg (2.5 Gl),0.9,Keg (3 Gal),0
BAR CONS Taco Shop,CON BAR Sugar Cane,Stick,52,Sugar Cane Small,0,Sugar Cane Large,0
BAR CONS Taco Shop,CON BAR Tamarindo Stick,Each,120,,,,
BAR CONS Taco Shop,CON BAR Tonic Water,Bottle (6.7 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (12 OZ-fl),0
BAR CONS Taco Shop,CON BAR Tonic Water Bib,Gallon,2.7,,,,
BAR CONS Taco Shop,PREP OM - Sangrita,Litre,0,,,,
JUICES Taco Shop,JUICES Agua De Horchata,Bottle (32 OZ-fl),8.3,,,,
JUICES Taco Shop,JUICES Juice Orange,Bottle (59 OZ-fl),1,Gal,0,Gallon,0
JUICES Taco Shop,JUICES Juice Tomato,Can (46 OZ-fl),2,,,,
FRUIT Taco Shop,PROD/FRT Blueberry,Case - 6 OZ-wt,0,lb,0,,
FRUIT Taco Shop,PROD/FRT Lime,Lime,0,,,,
FRUIT Taco Shop,PROD/FRT Orange,Orange,0,,,,
FRUIT Taco Shop,FROZEN Pulp Mamey,Pack (14 OZ-wt),0,,,,
SODAS Taco Shop,SODAS Coke Mexican Btl,Bottle (12 OZ-fl),97,,,,
SODAS Taco Shop,SODAS Diet Coke Btl,Bottle (8 OZ-fl),68,,,,
SODAS Taco Shop,SODAS Diet Coke Can,Can (12 OZ-fl),0,Can (7 OZ-fl),0,,
SODAS Taco Shop,SODAS Ginger Ale,Can (12 OZ-fl),0,Can (7.5 OZ-fl),0,Bottle (6.7 OZ-fl),12
SODAS Taco Shop,SODAS Jarrito Limon,Bottle (13.5 OZ-fl),23,,,,
SODAS Taco Shop,SODAS Jarritos Mandarina,Bottle (13.5 OZ-fl),40,,,,
SODAS Taco Shop,SODAS Jarritos Tamarindo,Bottle (13.5 OZ-fl),61,,,,
SODAS Taco Shop,SODAS Jarritos Toronja,Bottle (13.5 OZ-fl),43,,,,
SODAS Taco Shop,SODAS Red Bull,Bottle (8.4 OZ-fl),11,Bottle (12 OZ-fl),0,,
SODAS Taco Shop,SODAS Red Bull Sugar Free,Bottle (8.4 OZ-fl),14,Bottle (12 OZ-fl),0,,
SODAS Taco Shop,SODAS Sangria Senorial,Bottle (11.16 OZ-fl),14,,,,
SODAS Taco Shop,SODAS Sidral Mundet,Bottle (12 OZ-fl),7,,,,
SODAS Taco Shop,SODAS Sprite Mexican Btl,Bottle (12 OZ-fl),54,,,,
SODAS Taco Shop,SUPPLIES CO2 BIB CON BAR,KEG,0,,,,
WATER BTL Taco Shop,WATER BTL Panna Water Lg,Bottle (1 Litre),79,Bottle - 750 ML,0,,
WATER BTL Taco Shop,WATER BTL Topo Chico Sm,Can (12 OZ-fl),82,,,,
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Decaff,Capsule,86,,,,
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Napoli,Capsule,81,,,,
COFFEE Taco Shop,COFFEE Kimbo Blue Capsules Napoli Double,Capsule,48,,,,
COFFEE Taco Shop,COFFEE Milk Whole,Gal,0.8,Bottle (32 OZ-fl),0,Gallon,0
CORDIALS Taco Shop,CORDIALS Amaro Montenegro,Bottle (750 ML),0,Bottle (1 Litre),1.05,,
CORDIALS Taco Shop,CORDIALS Aperol Aperitivo,Bottle (750 ML),0,Bottle (1 Litre),1.4,,
CORDIALS Taco Shop,CORDIALS Baileys Irish Cream,Bottle (1 Litre),0.9,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Campari Aperitivo,Bottle (1 Litre),2.88,Bottle - 750 ML,0,,
CORDIALS Taco Shop,CORDIALS Cointreau,Bottle (750 ML),0,Bottle (1 Litre),12.8,,
CORDIALS Taco Shop,CORDIALS Courvoisier Vs,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Creme De Pamplemousse,Bottle (750 ML),0,,,,
CORDIALS Taco Shop,CORDIALS Disaronno Amaretto,Bottle (750 ML),0,Bottle (1 Litre),1.8,,
CORDIALS Taco Shop,CORDIALS Fernet Branca,Bottle (750 ML),1.5,,,,
CORDIALS Taco Shop,CORDIALS Frangelico,Bottle (1 Litre),1.6,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Grand Marnier,Bottle (1 Litre),4.1,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Hennessy VS,Bottle (1 Litre),1.4,Bottle (750 ML),0,Bottle (375 mL),0
CORDIALS Taco Shop,CORDIALS Jagermeister,Bottle (1 Litre),1.9,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS JF Hadens Espresso,Bottle (750 ML),0,,,,
CORDIALS Taco Shop,CORDIALS Kahlua,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Licor 43,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Lillet Blanc,Bottle (750 ML),1,,,,
CORDIALS Taco Shop,CORDIALS Liqueur Triple Sec,Bottle (1 Litre),14.5,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Lo - Fi Amaro,Bottle (750 ML),1.9,,,,
CORDIALS Taco Shop,CORDIALS Luxardo Maraschino,Bottle (750 ML),1.9,,,,
CORDIALS Taco Shop,CORDIALS Nixta,Bottle (750 ML),1.7,,,,
CORDIALS Taco Shop,CORDIALS Remy Martin Vsop,Bottle (1 Litre),2.2,,,,
CORDIALS Taco Shop,CORDIALS Sambuca Romana Black,Bottle (750 ML),1.3,,,,
CORDIALS Taco Shop,CORDIALS Schnapps Peach,Bottle (1 Litre),0.9,Bottle (750 ML),0,Bottle (1.75 Litre),0
CORDIALS Taco Shop,CORDIALS Schnapps Sour Apple,Bottle (1 Litre),4.8,,,,
CORDIALS Taco Shop,CORDIALS Vermouth Dry,Bottle (1 Litre),0.9,Bottle (750 ML),0,,
CORDIALS Taco Shop,CORDIALS Vermouth Rosso/Rouge,Bottle (1 Litre),1.4,Bottle - 750 ML,0,Bottle (1.5 Litre),0
GIN Taco Shop,GIN Bombay Dry Gin,Bottle (1 Litre),1.8,Bottle (1.75 Litre),0,,
GIN Taco Shop,GIN Bombay Sapphire,Bottle (1 Litre),2.3,Bottle (750 ML),0,Bottle (1.75 Litre),0
GIN Taco Shop,GIN Harry Blus,Bottle (750 ML),2.7,,,,
GIN Taco Shop,GIN Hendricks,Bottle (1 Litre),1.5,Bottle - 750 ML,0,,
GIN Taco Shop,GIN House,Bottle (1 Litre),2.1,Bottle (750 ML),0,,
GIN Taco Shop,GIN Tanqueray,Bottle (1 Litre),2.2,,,,
RUM Taco Shop,RUM Piras 51 Cachaca,Bottle (1 Litre),0.8,,,,
RUM Taco Shop,RUM Bacardi 10 Yr,Bottle (750 ML),1.4,,,,
RUM Taco Shop,RUM Bacardi Anejo 4 Yr,Bottle (750 ML),0,Bottle (1 Litre),1,,
RUM Taco Shop,RUM Bacardi Superior,Bottle (1 Litre),9.3,Bottle (1.75 Litre),0,Bottle - 750 ML,0
RUM Taco Shop,RUM Brugal 1888,Bottle (750 ML),2.6,,,,
RUM Taco Shop,RUM Captain Morgan Spiced,Bottle (1 Litre),1.4,,,,
RUM Taco Shop,RUM Castillo Gold,Bottle (1 Litre),0,,,,
RUM Taco Shop,RUM Coconut Cartel,Bottle (750 ML),2.5,,,,
RUM Taco Shop,RUM Copalli Cacao,Bottle (750 ML),1.7,,,,
RUM Taco Shop,RUM Flor De Cana 4Yr Anejo Oro,Bottle (1 Litre),2.2,,,,
RUM Taco Shop,RUM House,Bottle (1 Litre),0,Bottle (750 ML),0,,
RUM Taco Shop,RUM Leblon Cachaca,Bottle (1 Litre),0,Bottle (750 ML),0,,
RUM Taco Shop,RUM Malibu Coconut,Bottle (750 ML),0,Bottle (1 Litre),3.7,,
RUM Taco Shop,RUM Plantation Pineapple,Bottle (1 Litre),0,Bottle (750 ML),1.5,,
RUM Taco Shop,RUM Sailor Jerry Spiced Rum,Bottle (1 Litre),0,Bottle - 750 ML,0.7,Bottle (1.75 Litre),0
RUM Taco Shop,RUM Santa Teresa 1796,Bottle (750 ML),1.3,Bottle (1 Litre),0,,
RUM Taco Shop,RUM Zacapa Rum Cent 23Yr,Bottle (750 ML),1.4,Bottle (1 Litre),0,,
RUM Taco Shop,RUM Bacardi Coco,Bottle (1 Litre),4.6,Bottle (750 ML),0,,
RUM Taco Shop,RUM Nusa Cana Spiced,Bottle (700 mL),1,,,,
RUM Taco Shop,RUM Nusa Cana Tropical,Bottle (700 mL),1,,,,
TEQUILA Taco Shop,TEQUILA 1800 Anejo,Bottle (1 Litre),0,Bottle (750 ML),1.3,,
TEQUILA Taco Shop,TEQUILA 1800 Cristalino Anejo,Bottle (750 ML),1.4,,,,
TEQUILA Taco Shop,TEQUILA 1800 Milenio Anejo,Bottle (750 ML),0.8,,,,
TEQUILA Taco Shop,TEQUILA 1800 Reposado,Bottle (1 Litre),1.8,,,,
TEQUILA Taco Shop,TEQUILA 1800 Silver,Bottle (1 Litre),1.3,,,,
TEQUILA Taco Shop,TEQUILA 400 Conejos Cuishe,Bottle (750 ML),1.5,,,,
TEQUILA Taco Shop,TEQUILA 400 Conejos Joven Mezcal,Bottle (750 ML),2.5,,,,
TEQUILA Taco Shop,TEQUILA 512 Anejo,Bottle (750 ML),1.8,,,,
TEQUILA Taco Shop,TEQUILA 512 Blanco,Bottle (750 ML),1.5,Bottle (1 Litre),0,,
TEQUILA Taco Shop,TEQUILA 512 Reposado,Bottle (750 ML),1.3,,,,
TEQUILA Taco Shop,TEQUILA Astral Blanco,Bottle (750 ML),15.3,,,,
TEQUILA Taco Shop,TEQUILA Casa Dragones Anejo,Bottle (750 ML),1.9,,,,
TEQUILA Taco Shop,TEQUILA Casa Dragones Blanco,Bottle (750 ML),1.3,,,,
TEQUILA Taco Shop,TEQUILA Casa Dragones Reposado,Bottle (750 ML),1.8,,,,
TEQUILA Taco Shop,TEQUILA Casamigos Anejo,Bottle (1 Litre),2.3,Bottle (750 ML),0,,
TEQUILA Taco Shop,TEQUILA Casamigos Blanco,Bottle (1 Litre),2.7,Bottle - 750 ML,0,Bottle (1 Litre),0
TEQUILA Taco Shop,TEQUILA Casamigos Cristalino,Bottle (1 Litre),1,Bottle (750 ML),0,,
TEQUILA Taco Shop,TEQUILA Casamigos Mezcal Joven 80,Bottle (1 Litre),0.5,Bottle (750 ML),0,,
TEQUILA Taco Shop,TEQUILA Casamigos Reposado,Bottle (750 ML),0,Bottle (1 Litre),1.3,,
TEQUILA Taco Shop,TEQUILA Cincoro Teq Reposado,Bottle (750 ML),1.6,,,,
TEQUILA Taco Shop,TEQUILA Clase Azul Anejo,Bottle (750 ML),1.2,,,,
TEQUILA Taco Shop,TEQUILA Clase Azul Plata,Bottle (750 ML),2.7,,,,
TEQUILA Taco Shop,TEQUILA Clase Azul Reposado,Bottle (750 ML),1,,,,
TEQUILA Taco Shop,TEQUILA Dahlia Cristalino,Bottle (750 ML),0.8,,,,
TEQUILA Taco Shop,TEQUILA Don Julio 1942,Bottle (750 ML),2.2,Bottle (1.75 Litre),0,,
TEQUILA Taco Shop,TEQUILA Don Julio 70,Bottle (750 ML),1.6,,,,
TEQUILA Taco Shop,TEQUILA Don Julio Anejo,Bottle (750 ML),3.5,,,,
TEQUILA Taco Shop,TEQUILA Don Julio Blanco,Bottle (750 ML),1.3,Bottle (375 mL),0,,
TEQUILA Taco Shop,TEQUILA Don Julio Reposado,Bottle (750 ML),0.9,,,,
TEQUILA Taco Shop,TEQUILA Don Julio Anejo,Bottle (750 ML),1.5,,,,
TEQUILA Taco Shop,TEQUILA Herradura Silver,Bottle (1 Litre),3.6,Bottle (750 ML),0,Bottle (1.75 Litre),0
TEQUILA Taco Shop,TEQUILA Herradura Reposado,Bottle (1 Litre),1.05,Bottle (750 ML),0,,
TEQUILA Taco Shop,TEQUILA Herradura Anejo,Bottle (750 ML),0.75,Bottle (1 Litre),0,,
TEQUILA Taco Shop,TEQUILA Herradura Ultra Anejo,Bottle (750 ML),0.6,,,,
TEQUILA Taco Shop,TEQUILA Patron Silver,Bottle (750 ML),2.5,Bottle (1 Litre),0,,
TEQUILA Taco Shop,TEQUILA Patron Reposado,Bottle (750 ML),3.1,,,,
TEQUILA Taco Shop,TEQUILA Patron Anejo,Bottle (750 ML),2.45,,,,
TEQUILA Taco Shop,TEQUILA Tromba Blanco,Bottle (750 ML),0,Bottle (1 Litre),5.1,,
TEQUILA Taco Shop,TEQUILA Dahlia Cristalino,Bottle (750 ML),1.75,,,,
TEQUILA Taco Shop,TEQUILA Mezcal Joven Ilegal,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
TEQUILA Taco Shop,TEQUILA Mezcal Del Maguey Vida,Bottle (750 ML),1.15,,,,
TEQUILA Taco Shop,TEQUILA Mezcal El Silencio,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Jose Cuervo Reserva Familia Extra Anejo,Bottle (750 ML),1.5,,,,
TEQUILA Taco Shop,TEQUILA Mezcal Ojo de Tigre,Bottle (750 ML),1.3,Bottle (1 Litre),0,,
TEQUILA Taco Shop,TEQUILA 21 Seeds Cucumber Jalapeno,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA 21 Seeds Grapefruit Hibiscus,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA 21 Seeds Valencia Orange,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Volcan Tierra Blanco,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Volcan Tierra Rep,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Volcan Tierra Tahona,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Volcan Tierra XA,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Astral Anejo,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Astral Blanco,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Astral Reposado,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Pierde Almas Mezcal Espadin,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Pierde Almas Mezcal Purita,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Don Julio 1942 Alma Miel,Bottle (750 ML),0,,,,
TEQUILA Taco Shop,TEQUILA Gran Coramino Cristalino Reposado,Bottle (750 ML),1,,,,
VODKA Taco Shop,VODKA Absolut,Bottle (1 Litre),1.3,,,,
VODKA Taco Shop,VODKA Albani,Bottle (1 Litre),1,,,,
VODKA Taco Shop,VODKA Belvedere,Bottle (1 Litre),2,,,,
VODKA Taco Shop,VODKA Grey Goose,Bottle (1 Litre),1.7,Bottle (750 ML),0,,
VODKA Taco Shop,VODKA Harry Blus,Bottle (750 ML),6.9,,,,
VODKA Taco Shop,VODKA House,Bottle (750 ML),2.13,Bottle (750 ML),0,,
VODKA Taco Shop,VODKA Ketel One,Bottle (1 Litre),1.7,Bottle (1.75 Litre),0,Bottle (750 ML),0
VODKA Taco Shop,VODKA Ketel One Citroen,Bottle (1 Litre),1.05,Bottle (750 ML),0,,
VODKA Taco Shop,VODKA Organika Vodka,Bottle (1 Litre),10,Bottle (750 ML),0,,
VODKA Taco Shop,VODKA Smirnoff Orange,Bottle (1 Litre),0,,,,
VODKA Taco Shop,VODKA Titos,Bottle (1 Litre),1.1,Bottle (1.75 Litre),0,Bottle (750 ML),0
WHISKEY Taco Shop,WHISKEY Abasolo,Bottle (750 ML),1,,,,
WHISKEY Taco Shop,WHISKEY Angels Envy Bourbon,Bottle (750 ML),0.9,Bottle (1 Litre),0,,
WHISKEY Taco Shop,WHISKEY Angels Envy Rye,Bottle (750 ML),1.5,,,,
WHISKEY Taco Shop,WHISKEY Balvenie Scotch 12 Yr Doublewood,Bottle (750 ML),1.8,,,,
WHISKEY Taco Shop,WHISKEY Buchanans 12 Yr,Bottle (1 Litre),0.7,Bottle (1 Litre),1,,
WHISKEY Taco Shop,WHISKEY Bulleit Bourbon,Bottle (1 Litre),0,Bottle (750 ML),1.8,,
WHISKEY Taco Shop,WHISKEY Chivas Regal 12 Yr,Bottle (1 Litre),0.8,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Crown Royal Apple,Bottle (1 Litre),2.8,,,,
WHISKEY Taco Shop,WHISKEY Crown Royal Canadian,Bottle (1 Litre),1.1,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Dewars White,Bottle (1 Litre),0.9,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Dusse Cognac VSOP,Bottle (750 ML),1.7,,,,
WHISKEY Taco Shop,WHISKEY Glenfiddich 12 Yr,Bottle (1 Litre),0,Bottle (750 ML),1.5,,
WHISKEY Taco Shop,WHISKEY Glenlivet 12 Yr,Bottle (1 Litre),0.9,Bottle - 750 ML,0,,
WHISKEY Taco Shop,WHISKEY J Walker Black,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY J Walker Red,Bottle (1 Litre),1.8,,,,
WHISKEY Taco Shop,WHISKEY Jack Daniels Fire,Bottle (750 ML),3.9,,,,
WHISKEY Taco Shop,WHISKEY Jack Daniels Old 7 Blk,Bottle (1 Litre),1.6,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Jameson,Bottle (1 Litre),1.6,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Macallan 12 Yr,Bottle (750 ML),2.8,Bottle (1 Litre),0,,
WHISKEY Taco Shop,WHISKEY Makers Mark,Bottle (1 Litre),1.05,Bottle (750 ML),0,,
WHISKEY Taco Shop,WHISKEY Old Forester Brbn 86,Bottle (1 Litre),2,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY Taco Shop,WHISKEY Old Parr Scotch 12 Yr,Bottle (750 ML),2.9,,,,
WHISKEY Taco Shop,WHISKEY Slane Irish,Bottle (1 Litre),2,Bottle - 750 ML,0,,
WHISKEY Taco Shop,WHISKEY Woodford Reserve,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
RED WINE Taco Shop,RED WINE Cab Sauv Bonanza,Bottle (750 ML),4,,,,
RED WINE Taco Shop,RED WINE Cab Sauv Los Vascos,Bottle (750 ML),0,,,,
RED WINE Taco Shop,RED WINE Malbec Antigal Uno,Bottle (750 ML),0,,,,
RED WINE Taco Shop,RED WINE Malbec Aruma,Bottle (750 ML),0,,,,
RED WINE Taco Shop,RED WINE P Noir Robert Mondavi,Bottle (750 ML),10.3,,,,
RED WINE Taco Shop,RED WINE P Noir Sea Sun,Bottle (750 ML),3.2,,,,
RED WINE Taco Shop,RED WINE Cab Sauv The Quilt Rsv,Bottle (750 ML),6,,,,
RED WINE Taco Shop,RED WINE Chianti Cafaggio,Bottle (750 ML),4,,,,
RED WINE Taco Shop,RED WINE Malbec Rsv Terraza,Bottle (750 ML),6.9,,,,
RED WINE Taco Shop,RED WINE Tempranillo Numanthia Termes,Bottle (750 ML),3,,,,
RED WINE Taco Shop,RED WINE Merlot Ca Donini,Bottle (750 ML),2.2,,,,
WHITE WINE Taco Shop,WHITE WINE Chardonnay Elouan,Bottle (750 ML),0,,,,
WHITE WINE Taco Shop,WHITE WINE Chardonnay Los Vascos,Bottle (750 ML),0,,,,
WHITE WINE Taco Shop,WHITE WINE P Grigio Lagaria,Bottle (750 ML),0,,,,
WHITE WINE Taco Shop,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),6.5,,,,
WHITE WINE Taco Shop,WHITE WINE Sauv Blanc Vavasour,Bottle (750 ML),0.3,,,,
WHITE WINE Taco Shop,WHITE WINE Riesling Chateau St Michelle,Bottle (750 ML),2,,,,
WHITE WINE Taco Shop,WHITE WINE Sauv Blanc Justin,Bottle (750 ML),5,,,,
WHITE WINE Taco Shop,WHITE WINE Moscato D Asti  Saracco,Bottle (750 ML),4,,,,
WHITE WINE Taco Shop,ROSE Wine Whispering Angel,Bottle (750 ML),0.5,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Gioiosa Prosecco,Bottle (750 ML),0,,,,
SPARK WINE Taco Shop,CHAMP/SPARK House Sparkling,Bottle (750 ML),5.1,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Veuve Du Vernay Brut,Bottle (750 ML),0,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Chandon Sparkling,Bottle (750 ML),6,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Veuve Clicquot Rose,Bottle (750 ML),2,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Moet Ice Imperial,Bottle (750 ML),3,,,,
SPARK WINE Taco Shop,CHAMP/SPARK Moet Imperial Brut,Bottle (750 ML),2,Bottle (187 mL),0,,
`;

console.log("script.js cargado y ejecutándose.");

let inventoryData = [];
let currentInventory1 = {};
let currentInventory2 = {};
let categorizedInventory = {};

// Nueva variable para almacenar los datos totalizados
let totalizedInventoryData = [];

function parseCSV(csvString) {
    console.log("parseCSV se está ejecutando.");
    const lines = csvString.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        data.push(row);
    }
    return data;
}

function groupInventoryByCategory(data) {
    const grouped = {};
    data.forEach(item => {
        const category = item.StorageLocation;
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(item);
    });
    return grouped;
}

function populateCategoryDropdown(locationId) {
    const selectElement = document.getElementById(`category-select-${locationId}`);
    if (!selectElement) return;

    selectElement.innerHTML = '';

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Todas las Categorías';
    selectElement.appendChild(allOption);

    const categories = Object.keys(categorizedInventory).sort();
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectElement.appendChild(option);
    });
}

function filterAndDisplayForm(locationId) {
    console.log(`filterAndDisplayForm para ${locationId} se está ejecutando.`);
    const selectedCategory = document.getElementById(`category-select-${locationId}`).value;
    const searchTerm = document.getElementById(`search-input-${locationId}`).value.toLowerCase();

    let filteredData = [];
    if (selectedCategory === 'all') {
        filteredData = inventoryData;
    } else {
        filteredData = categorizedInventory[selectedCategory] || [];
    }

    const finalFilteredData = filteredData.filter(item => {
        const itemName = item.Item.toLowerCase();
        const storageLocationName = item.StorageLocation.toLowerCase();
        return itemName.includes(searchTerm) || storageLocationName.includes(searchTerm);
    });

    generateForm(locationId, finalFilteredData);
    loadInventoryValuesToForm(locationId);
}

function generateForm(locationId, dataToDisplay) {
    const formContainer = document.getElementById(`form-${locationId}`);
    formContainer.innerHTML = '';

    if (dataToDisplay.length === 0) {
        formContainer.innerHTML = '<p>No se encontraron productos para esta categoría o búsqueda.</p>';
        return;
    }

    dataToDisplay.forEach(item => {
        const originalIndex = inventoryData.findIndex(originalItem =>
            originalItem.StorageLocation === item.StorageLocation && originalItem.Item === item.Item
        );

        if (originalIndex === -1) {
            console.warn(`Item not found in original inventoryData, skipping: ${item.StorageLocation} - ${item.Item}`);
            return;
        }

        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const itemLabel = document.createElement('label');
        itemLabel.textContent = `${item.StorageLocation} - ${item.Item}:`;
        formGroup.appendChild(itemLabel);

        for (let i = 1; i <= 3; i++) {
            const uomKey = `UofM${i === 1 ? '' : i}`;
            if (item[uomKey] && item[uomKey] !== '') {
                const inputId = `${locationId}-${originalIndex}-${uomKey}`;
                const input = document.createElement('input');
                // CAMBIO CLAVE: Cambiado a type="text" para permitir operaciones
                input.type = 'text';
                // Ya no necesitamos min/step para type="text"
                // input.min = '0';
                // input.step = '0.01';
                input.id = inputId;
                input.placeholder = `Cantidad en ${item[uomKey]}`;
                input.dataset.itemIndex = originalIndex;
                input.dataset.uomKey = uomKey;
                input.dataset.locationId = locationId;

                const uomSpan = document.createElement('span');
                uomSpan.textContent = `(${item[uomKey]})`;
                uomSpan.style.fontSize = '0.85em';
                uomSpan.style.color = '#777';

                const inputWrapper = document.createElement('div');
                inputWrapper.style.display = 'flex';
                inputWrapper.style.alignItems = 'center';
                inputWrapper.style.gap = '5px';
                inputWrapper.appendChild(input);
                inputWrapper.appendChild(uomSpan);

                formGroup.appendChild(inputWrapper);
            }
        }
        formContainer.appendChild(formGroup);
    });
}

function loadInventoryValuesToForm(locationId) {
    const savedData = localStorage.getItem(`inventory_${locationId}`);
    if (savedData) {
        const inventoryLoaded = JSON.parse(savedData);
        const formContainer = document.getElementById(`form-${locationId}`);
        const inputs = formContainer.querySelectorAll('input[type="text"]'); // Cambiado a type="text"

        inputs.forEach(input => {
            const itemIndex = input.dataset.itemIndex;
            const uomKey = input.dataset.uomKey;
            if (inventoryLoaded[itemIndex] && inventoryLoaded[itemIndex][uomKey] !== undefined) {
                // Mostrar el valor numérico guardado
                input.value = parseFloat(inventoryLoaded[itemIndex][uomKey]) || '';
            } else {
                input.value = '';
            }
        });
    }
}

// Nueva función para evaluar expresiones matemáticas de forma segura
function safeEvaluateExpression(expression) {
    // Eliminar todos los espacios en blanco
    expression = String(expression).replace(/\s/g, '');

    // Validar estrictamente los caracteres permitidos: números, punto decimal, +, -, *
    // Esto evita la inyección de código malicioso.
    if (!/^[0-9+\-*.]+$/.test(expression)) {
        console.warn("Caracteres inválidos detectados en la expresión:", expression);
        return NaN; // Indicar un error para caracteres no permitidos
    }

    try {
        // Usar Function constructor para evaluar la expresión.
        // Aunque es similar a eval(), es más seguro porque se ejecuta en un ámbito aislado
        // y la validación previa reduce significativamente los riesgos.
        const result = new Function('return ' + expression)();

        // Asegurarse de que el resultado sea un número finito
        if (typeof result === 'number' && isFinite(result)) {
            return result;
        }
        return NaN; // El resultado no es un número válido o es infinito
    } catch (e) {
        console.error("Error al evaluar la expresión:", e);
        return NaN; // Indicar un error si la evaluación falla
    }
}


function saveInventory(locationId) {
    console.log(`saveInventory para ${locationId} se está ejecutando.`);
    const formContainer = document.getElementById(`form-${locationId}`);
    const inputs = formContainer.querySelectorAll('input[type="text"]'); // Cambiado a type="text"
    const inventoryToSave = JSON.parse(localStorage.getItem(`inventory_${locationId}`) || '{}');

    inputs.forEach(input => {
        const itemIndex = input.dataset.itemIndex;
        const uomKey = input.dataset.uomKey;
        
        let valueToSave = NaN; // Valor por defecto en caso de error

        if (input.value.trim() === '') {
            valueToSave = 0; // Si el campo está vacío, guardar 0
        } else {
            // Evaluar la expresión si no está vacía
            valueToSave = safeEvaluateExpression(input.value);
        }

        if (!inventoryToSave[itemIndex]) {
            inventoryToSave[itemIndex] = {};
        }

        // Solo guardar si el valor es un número válido
        if (!isNaN(valueToSave)) {
            inventoryToSave[itemIndex][uomKey] = valueToSave;
            input.value = valueToSave.toFixed(2); // Actualizar el campo con el resultado calculado
        } else {
            // Si la expresión es inválida, no guardar y alertar al usuario
            alert(`Error en el cálculo para el ítem: ${inventoryData[itemIndex].Item} (${inventoryData[itemIndex][uomKey]}). Por favor, introduce una expresión válida (ej. 5+3, 10-2, 4*6).`);
            input.value = ''; // Limpiar el campo para que el usuario corrija
            input.focus(); // Poner el foco en el campo erróneo
        }
    });

    localStorage.setItem(`inventory_${locationId}`, JSON.stringify(inventoryToSave));
    console.log(`Inventario de ${locationId} guardado localmente.`);
}

function loadInventory(locationId) {
    console.log(`loadInventory para ${locationId} se está ejecutando.`);
    const savedData = localStorage.getItem(`inventory_${locationId}`);
    if (savedData) {
        if (locationId === 'location1') {
            currentInventory1 = JSON.parse(savedData);
        } else {
            currentInventory2 = JSON.parse(savedData);
        }
        alert(`Inventario de ${locationId === 'location1' ? 'Bar Principal' : 'Almacén'} cargado.`);
        filterAndDisplayForm(locationId);
    } else {
        alert(`No hay inventario guardado para ${locationId === 'location1' ? 'Bar Principal' : 'Almacén'}.`);
    }
}

function totalizeInventory() {
    console.log("totalizeInventory se está ejecutando.");
    // Al totalizar, nos aseguramos de que ambos inventarios se hayan guardado por última vez
    saveInventory('location1');
    saveInventory('location2');

    currentInventory1 = JSON.parse(localStorage.getItem('inventory_location1') || '{}');
    currentInventory2 = JSON.parse(localStorage.getItem('inventory_location2') || '{}');

    const totalizedData = [];

    inventoryData.forEach((item, index) => {
        const totalItem = { ...item };
        totalItem.Qty = 0;
        totalItem.Qty2 = 0;
        totalItem.Qty3 = 0;

        if (currentInventory1[index]) {
            if (item.UofM && currentInventory1[index].UofM !== undefined) {
                totalItem.Qty += currentInventory1[index].UofM;
            }
            if (item.UofM2 && currentInventory1[index].UofM2 !== undefined) {
                totalItem.Qty2 += currentInventory1[index].UofM2;
            }
            if (item.UofM3 && currentInventory1[index].UofM3 !== undefined) {
                totalItem.Qty3 += currentInventory1[index].UofM3;
            }
        }

        if (currentInventory2[index]) {
            if (item.UofM && currentInventory2[index].UofM !== undefined) {
                totalItem.Qty += currentInventory2[index].UofM;
            }
            if (item.UofM2 && currentInventory2[index].UofM2 !== undefined) {
                totalItem.Qty2 += currentInventory2[index].UofM2;
            }
            if (item.UofM3 && currentInventory2[index].UofM3 !== undefined) {
                totalItem.Qty3 += currentInventory2[index].UofM3;
            }
        }
        totalizedData.push(totalItem);
    });

    // Guarda los datos totalizados en la variable global
    totalizedInventoryData = totalizedData;
    
    // Muestra los datos totalizados (inicialmente sin filtrar)
    displayTotalization(totalizedInventoryData);
}

// Nueva función para filtrar los resultados totalizados
function filterTotalizedItems() {
    console.log("filterTotalizedItems se está ejecutando.");
    const searchTerm = document.getElementById('search-input-totalization').value.toLowerCase();
    
    const filteredData = totalizedInventoryData.filter(item => {
        // Combina los campos de búsqueda en una sola cadena
        const searchableString = `${item.StorageLocation.toLowerCase()} ${item.Item.toLowerCase()}`;
        return searchableString.includes(searchTerm);
    });

    // Muestra la tabla con los datos filtrados
    displayTotalization(filteredData);
}

function displayTotalization(data) {
    console.log("displayTotalization se está ejecutando.");
    const resultsContainer = document.getElementById('totalization-results');
    resultsContainer.innerHTML = '';

    if (data.length === 0) {
        resultsContainer.textContent = 'No se encontraron resultados para la búsqueda.';
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = ['StorageLocation', 'Item', 'UofM', 'Qty', 'UofM2', 'Qty2', 'UofM3', 'Qty3'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach(item => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            if (header.startsWith('Qty') && typeof item[header] === 'number') {
                td.textContent = item[header].toFixed(2);
            } else {
                td.textContent = item[header] || '';
            }
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    resultsContainer.appendChild(table);
}

function exportTotalizedCSV() {
    console.log("exportTotalizedCSV se está ejecutando.");
    const table = document.querySelector('#totalization-results table');
    if (!table) {
        alert('Primero debes totalizar el inventario para poder exportar.');
        return;
    }

    let csvContent = [];
    const headers = [];
    table.querySelectorAll('thead th').forEach(th => headers.push(th.textContent));
    csvContent.push(headers.join(','));

    table.querySelectorAll('tbody tr').forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(td => rowData.push(td.textContent));
        csvContent.push(rowData.join(','));
    });

    const csvString = csvContent.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'inventario_totalizado.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Tu navegador no soporta la descarga directa de archivos. Por favor, copia el texto de la tabla manualmente.');
    }
}

function clearLocalStorage() {
    if (confirm('¿Estás seguro de que quieres limpiar todos los datos de inventario guardados? Esta acción no se puede deshacer.')) {
        localStorage.removeItem('inventory_location1');
        localStorage.removeItem('inventory_location2');
        alert('Datos de inventario limpiados. La página se recargará.');
        location.reload(); // Recarga la página para ver los cambios
    }
}


// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded se ha disparado. Iniciando aplicación de inventario.");
    try {
        inventoryData = parseCSV(CSV_DATA);
        categorizedInventory = groupInventoryByCategory(inventoryData);

        // Generar y poblar los dropdowns de categoría
        populateCategoryDropdown('location1');
        populateCategoryDropdown('location2');

        // Escuchar clics en los títulos para expandir/contraer
        document.querySelectorAll('.collapsible-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                // Alternar la visibilidad
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                    const locationId = this.parentElement.querySelector('div[id^="form-section-location"]').id.replace('form-section-', '');
                    // Si se abre, refrescar el formulario
                    filterAndDisplayForm(locationId);
                }
            });
        });

        // Escuchar la tecla "Enter" en cualquier input de cantidad para guardar automáticamente
        // Asegúrate de que este listener se adjunta después de que los inputs son generados.
        // La función generateForm ya se encarga de esto al ser llamada por filterAndDisplayForm.
        document.querySelectorAll('.inventory-form').forEach(form => {
            form.addEventListener('keydown', function(event) {
                // CAMBIO CLAVE: Ahora es type="text"
                if (event.key === 'Enter' && event.target.tagName === 'INPUT' && event.target.type === 'text') {
                    event.preventDefault(); // Evita el comportamiento por defecto de "Enter"
                    const locationId = event.target.dataset.locationId;
                    if (locationId) {
                        saveInventory(locationId); // La función saveInventory ahora maneja la evaluación
                        // Opcional: mover el foco al siguiente input o a otro lugar
                        const inputs = Array.from(form.querySelectorAll('input[type="text"]')); // Cambiado a type="text"
                        const currentIndex = inputs.indexOf(event.target);
                        if (currentIndex > -1 && currentIndex < inputs.length - 1) {
                            inputs[currentIndex + 1].focus();
                        } else {
                            // Si es el último input, desenfocar
                            event.target.blur();
                        }
                    }
                }
            });
        });

        // Registrar el Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js')
                    .then(registration => {
                        console.log('Service Worker registrado con éxito:', registration);
                    })
                    .catch(error => {
                        console.error('Fallo en el registro del Service Worker:', error);
                    });
            });
        }


        console.log("Inicialización completa de la aplicación de inventario.");
    } catch (error) {
        console.error("Error durante la inicialización de la aplicación:", error);
    }
});