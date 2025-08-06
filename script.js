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
GIN,GIN Bombay Dry Gin,Bottle (1itre),2.4,Bottle (1.75 Litre),0,,
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
WINE,WHITE WINE Moscato D Asti Saracco,Bottle (750 ML),8,,,,
WINE,WHITE WINE Chardonnay Landmark Sonoma,Bottle (750 ML),4,,,,
WINE,WHITE WINE P Grigio La Vis,Bottle (750 ML),3,,,,
WINE,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),5,,,,
WINE,WHITE WINE Chard Napa Stags Leap,Bottle (750 ML),3,,,,
WINE,RED WINE P Noir Belle Glos Clark & Telephone,Bottle (750 ML),4,,,,
WINE,RED WINE P Noir Cherry Pie,Bottle (750 ML),4,,,,
WINE,RED WINE P Noir Meiomi,Bottle (750 ML),4,,,,
WINE,RED WINE Cab Sauv Decoy By Duckhorn,Bottle (750 ML),8.5,Bottle (375 mL),0,,
WINE,RED WINE Cab Sauv Daou Paso Robles,Bottle (750 ML),0,,,,
WINE,RED WINE Cab Sauv Hess Select,Bottle (750 ML),5.5,,,,
WINE,RED WINE Cab Sauv Imagery,Bottle (750 ML),0,,,,
WINE,RED WINE Cab Sauv Silver Oak,Bottle (750 ML),2,,,,
WINE,RED WINE Cab Sauv Caymus,Bottle (750 ML),1,Bottle (1 Litre),0,,
WINE,RED WINE Merlot Imagery,Bottle (750 ML),0,,,,
WINE,RED WINE Sangiovese Banfi,Bottle (750 ML),7,,,,
WINE,RED WINE Red Blend Imagery,Bottle (750 ML),0,,,,
WINE,RED WINE Malbec Catena,Bottle (750 ML),2,,,,
WINE,RED WINE Zinfandel Ridge Zin,Bottle (750 ML),2,,,,
WINE,ROSE WINE The Beach Rose,Bottle (750 ML),0,,,,
WINE,ROSE WINE Gerard Bertrand,Bottle (750 ML),0,,,,
WINE,RED WINE P Noir Meiomi,Bottle (750 ML),0,,,,
WINE,WHITE WINE Sauv Blanc La Val,Bottle (750 ML),0,,,,
WINE,WHITE WINE Sauv Blanc The Crossings,Bottle (750 ML),0,,,,
WINE,WHITE WINE Chard Louis Latour,Bottle (750 ML),0,,,,
WINE,WHITE WINE Chard J Lohr,Bottle (750 ML),0,,,,
WINE,WHITE WINE P Grigio La Vis,Bottle (750 ML),0,,,,
WINE,WHITE WINE Chard Landmark Sonoma,Bottle (750 ML),0,,,,
WINE,WHITE WINE P Grigio Venezie Canaletto,Bottle (750 ML),0,,,,
WINE,WHITE WINE Chard Napa Stags Leap,Bottle (750 ML),0,,,,
WHISKEY,WHISKEY The Macallan 18,Bottle (750 ML),2.5,,,,
WHISKEY,WHISKEY Glenlivet 12,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
WHISKEY,WHISKEY Glenmorangie 10,Bottle (1 Litre),1.3,Bottle (750 ML),0,,
WHISKEY,WHISKEY Glenfiddich 12,Bottle (750 ML),0,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Johnnie Walker Black,Bottle (1.75 Litre),0,Bottle (1 Litre),0,Bottle (750 ML),3
WHISKEY,WHISKEY Johnnie Walker Blue,Bottle (750 ML),3.1,,,,
WHISKEY,WHISKEY Johnnie Walker Gold,Bottle (750 ML),1.8,,,,
WHISKEY,WHISKEY Johnnie Walker Platinum,Bottle (750 ML),3.2,,,,
WHISKEY,WHISKEY Jameson Irish,Bottle (1 Litre),0,Bottle (750 ML),1,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Bushmills,Bottle (1 Litre),0.4,Bottle (750 ML),0,,
WHISKEY,WHISKEY Bulleit Bourbon,Bottle (1 Litre),1.8,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Woodford Reserve,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Elijah Craig Small Batch,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
WHISKEY,WHISKEY Makers Mark,Bottle (1 Litre),2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Angels Envy,Bottle (750 ML),2.2,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Jack Daniels,Bottle (1 Litre),0,Bottle (750 ML),2.5,,
WHISKEY,WHISKEY Crown Royal,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Jack Daniels Single Barrel,Bottle (750 ML),0.7,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Bulleit Rye,Bottle (1 Litre),1.1,Bottle (750 ML),0,,
WHISKEY,WHISKEY Old Forrester Rye,Bottle (750 ML),2.3,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Crown Royal Apple,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
WHISKEY,WHISKEY Crown Royal Vanilla,Bottle (1 Litre),1.5,Bottle (750 ML),0,,
WHISKEY,WHISKEY Fireball,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Southern Comfort,Bottle (1 Litre),2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Titos Vodka,Bottle (1.75 Litre),1.6,Bottle (1 Litre),0,Bottle (750 ML),0
WHISKEY,WHISKEY Gray Goose,Bottle (1.75 Litre),0,Bottle (1 Litre),0,Bottle (750 ML),1
WHISKEY,WHISKEY Ketel One,Bottle (1 Litre),0,Bottle (750 ML),1.6,,
WHISKEY,WHISKEY Stoli,Bottle (1 Litre),0.8,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Absolut,Bottle (1 Litre),0.9,Bottle (750 ML),0.2,,
WHISKEY,WHISKEY Absolut Citron,Bottle (1 Litre),0,Bottle (750 ML),0.7,,
WHISKEY,WHISKEY Absolut Elyx,Bottle (1 Litre),1.7,Bottle (750 ML),0,,
WHISKEY,WHISKEY Belvedere,Bottle (1 Litre),1.1,Bottle (750 ML),0,,
WHISKEY,WHISKEY Stoli Cucumber,Bottle (1 Litre),0.7,,,,
WHISKEY,WHISKEY Grey Goose Watermelon Basil,Bottle (1 Litre),1.2,,,,
WHISKEY,WHISKEY Ketel One Botanicals Cucumber Mint,Bottle (1 Litre),0.7,,,,
WHISKEY,WHISKEY Ketel One Botanicals Peach Orange,Bottle (1 Litre),0.2,,,,
WHISKEY,WHISKEY Stoli Blueberi,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Stoli Vanilla,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Absolut Mango,Bottle (1 Litre),0.7,,,,
WHISKEY,WHISKEY Absolut Pear,Bottle (1 Litre),0.9,,,,
WHISKEY,WHISKEY Jameson Black Barrel,Bottle (750 ML),2.8,,,,
WHISKEY,WHISKEY Johnnie Walker 18 Yr,Bottle (750 ML),3,,,,
WHISKEY,WHISKEY Crown Royal Apple,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Fireball,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Southern Comfort,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Jack Daniels,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Makers Mark,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Woodford Reserve,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Bulleit Bourbon,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Bulleit Rye,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Crown Royal,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Jameson Irish,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Chivas Regal 12,Bottle (1 Litre),1.2,Bottle (750 ML),0,,
WHISKEY,WHISKEY Dewar's White,Bottle (1 Litre),1.6,Bottle (750 ML),0,,
WHISKEY,WHISKEY Buchanan's 12,Bottle (1 Litre),0.9,,,,
WHISKEY,WHISKEY Oban 14,Bottle (750 ML),0.2,,,,
WHISKEY,WHISKEY Balvenie 12,Bottle (750 ML),2,,,,
WHISKEY,WHISKEY Lagavulin 16,Bottle (750 ML),2.7,,,,
WHISKEY,WHISKEY Laphroaig 10,Bottle (750 ML),0.8,,,,
WHISKEY,WHISKEY Old Forester 100,Bottle (750 ML),0.9,,,,
WHISKEY,WHISKEY Basil Hayden,Bottle (750 ML),2,,,,
WHISKEY,WHISKEY Woodford Double Oaked,Bottle (750 ML),2.3,,,,
WHISKEY,WHISKEY Basil Hayden Dark Rye,Bottle (750 ML),2,,,,
WHISKEY,WHISKEY Stoli Raspberry,Bottle (1 Litre),0,,,,
WHISKEY,WHISKEY Bulleit Bourbon,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Tito's Vodka,Bottle (1.75 Litre),0,Bottle (1 Litre),0,Bottle (750 ML),0
WHISKEY,WHISKEY Stoli,Bottle (1 Litre),0,Bottle (750 ML),0,Bottle (1.75 Litre),0
WHISKEY,WHISKEY Ketel One,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Johnnie Walker Black,Bottle (1.75 Litre),0,Bottle (1 Litre),0,Bottle (750 ML),0
WHISKEY,WHISKEY Stoli Vanilla,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Absolut,Bottle (1 Litre),0,Bottle (750 ML),0.2,,
WHISKEY,WHISKEY Absolut Citron,Bottle (1 Litre),0,Bottle (750 ML),0.7,,
WHISKEY,WHISKEY Absolut Elyx,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Belvedere,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Stoli Cucumber,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Stoli Blueberi,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Absolut Mango,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Absolut Pear,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Jack Daniels Single Barrel,Bottle (750 ML),0.7,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Johnnie Walker Blue,Bottle (750 ML),3.1,,,,
WHISKEY,WHISKEY Johnnie Walker Gold,Bottle (750 ML),1.8,,,,
WHISKEY,WHISKEY Johnnie Walker Platinum,Bottle (750 ML),3.2,,,,
WHISKEY,WHISKEY Johnnie Walker 18 Yr,Bottle (750 ML),3,,,,
WHISKEY,WHISKEY Chivas Regal 12,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Dewar's White,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Buchanan's 12,Bottle (1 Litre),0,,,,
WHISKEY,WHISKEY Oban 14,Bottle (750 ML),0.2,,,,
WHISKEY,WHISKEY Balvenie 12,Bottle (750 ML),2,,,,
WHISKEY,WHISKEY Lagavulin 16,Bottle (750 ML),2.7,,,,
WHISKEY,WHISKEY Laphroaig 10,Bottle (750 ML),0.8,,,,
WHISKEY,WHISKEY Glenlivet 12,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Glenmorangie 10,Bottle (1 Litre),0,Bottle (750 ML),0,,
WHISKEY,WHISKEY Johnnie Walker Black,Bottle (1.75 Litre),0,Bottle (1 Litre),0,Bottle (750 ML),0
WHISKEY,WHISKEY Angels Envy,Bottle (750 ML),0,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Old Forrester Rye,Bottle (750 ML),0,Bottle (1 Litre),0,,
WHISKEY,WHISKEY Woodford Double Oaked,Bottle (750 ML),0,,,,,
`

const getItems = () => {
    // Código para procesar el CSV, se mantiene igual
    const rows = CSV_DATA.trim().split('\n');
    const headers = rows[0].split(',').map(h => h.trim());
    const data = rows.slice(1).map(row => {
        const values = row.split(',').map(v => v.trim());
        let item = {};
        headers.forEach((header, i) => {
            item[header] = values[i] || '';
        });
        return item;
    });

    const groupedItems = data.reduce((acc, item) => {
        if (!acc[item.StorageLocation]) {
            acc[item.StorageLocation] = [];
        }
        acc[item.StorageLocation].push(item);
        return acc;
    }, {});

    return groupedItems;
}

const renderItems = (items) => {
    const accordion = document.getElementById('accordionInventario');
    accordion.innerHTML = '';
    let accordionHtml = '';

    for (const location in items) {
        // Aseguramos que la ubicación no esté vacía
        if (items[location].length > 0) {
            const sanitizedLocationId = location.replace(/[^a-zA-Z0-9]/g, '_');
            const collapseId = `collapse-${sanitizedLocationId}`;
            const headingId = `heading-${sanitizedLocationId}`;

            // Creación de la tarjeta del acordeón
            accordionHtml += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="${headingId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                            ${location}
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headingId}" data-bs-parent="#accordionInventario">
                        <div class="accordion-body p-0">
                            <ul class="list-group list-group-flush">
                                ${items[location].map(item => `
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>${item.Item}</strong>
                                            <div class="mt-2">
                                                <div class="row g-2">
                                                    <div class="col-auto">
                                                        <label class="form-label mb-0 small text-muted">${item.UofM}</label>
                                                        <input type="number" step="0.1" class="form-control form-control-sm" value="${parseFloat(item.Qty) || 0}">
                                                    </div>
                                                    ${item.UofM2 && `
                                                        <div class="col-auto">
                                                            <label class="form-label mb-0 small text-muted">${item.UofM2}</label>
                                                            <input type="number" step="0.1" class="form-control form-control-sm" value="${parseFloat(item.Qty2) || 0}">
                                                        </div>
                                                    `}
                                                    ${item.UofM3 && `
                                                        <div class="col-auto">
                                                            <label class="form-label mb-0 small text-muted">${item.UofM3}</label>
                                                            <input type="number" step="0.1" class="form-control form-control-sm" value="${parseFloat(item.Qty3) || 0}">
                                                        </div>
                                                    `}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    accordion.innerHTML = accordionHtml;
}

document.addEventListener('DOMContentLoaded', () => {
    let items = getItems();
    renderItems(items);

    const buscador = document.getElementById('buscador');
    buscador.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredItems = {};

        for (const location in items) {
            const filteredGroup = items[location].filter(item =>
                item.Item.toLowerCase().includes(searchTerm)
            );
            if (filteredGroup.length > 0) {
                filteredItems[location] = filteredGroup;
            }
        }
        renderItems(filteredItems);
    });

    const exportarBtn = document.getElementById('exportar-btn');
    exportarBtn.addEventListener('click', () => {
        const locations = document.querySelectorAll('.accordion-item');
        let newCsvRows = ['StorageLocation,Item,UofM,Qty,UofM2,Qty2,UofM3,Qty3'];

        locations.forEach(locationAccordion => {
            const locationName = locationAccordion.querySelector('.accordion-button').textContent.trim();
            const listItems = locationAccordion.querySelectorAll('.list-group-item');

            listItems.forEach(listItem => {
                const itemName = listItem.querySelector('strong').textContent.trim();
                const inputs = listItem.querySelectorAll('input');
                const labels = listItem.querySelectorAll('label');

                let rowData = [locationName, itemName];
                let inputValues = [];
                let uofmValues = [];

                inputs.forEach((input, index) => {
                    inputValues.push(input.value || 0);
                    uofmValues.push(labels[index].textContent.trim());
                });

                // Combinamos unidades de medida y cantidades
                let fullRowData = rowData.concat(
                    ...uofmValues.map((uofm, i) => [uofm, inputValues[i]])
                );

                // Aseguramos que la fila tenga 8 columnas rellenando con cadenas vacías
                while (fullRowData.length < 8) {
                    fullRowData.push('');
                }

                newCsvRows.push(fullRowData.join(','));
            });
        });

        const csvContent = newCsvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'inventario-actualizado.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Código del Service Worker para la PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('service-worker.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});