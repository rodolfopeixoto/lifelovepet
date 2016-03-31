

  $(document).ready(function(){


     //Select radio

    
    $("input[name$='breed']").click(function(){
       var value = $(this).val();

       $("div.breeds").hide();
       $("#Breads" + value).show();
    });

});






  $(function(){
 
    var breedsCat = [
    "Exotic Shorthair",
    "Khao Manee",
    "Korat",
    "Chinese Li Hua",
    "Asian—Burmilla",
    "Asian—Smoke",
    "Asian—Solid and Tortie",
    "Asian—Tabby",
    "Bombay",
    "Singapura",
    "European Burmese",
    "American Burmese",
    "Mandalay",
    "Tonkinese",
    "Oriental—Foreign White",
    "Oriental—Solid",
    "Oriental—Cinnamon and Fawn",
    "Oriental—Smoke",
    "Oriental—Shaded",
    "Oriental—Tabby",
    "Oriental—Tortie",
    "Oriental—Bicolor",
    "Havana",
    "Thai",
    "Siamese—Solid-Pointed",
    "Siamese—Tabby-Pointed",
    "Siamese—Tortie-Pointed",
    "Colorpoint Shorthair",
    "Seychellois",
    "Snowshoe",
    "American Shorthair",
    "European Shorthair",
    "Chartreux",
    "Russian Blue",
    "British Shorthair—Solid",
    "British Shorthair—Colorpointed",
    "British Shorthair-Bicolor",
    "British Shorthair—Smoke",
    "British Shorthair—Tabby",
    "British Shorthair—Tipped",
    "British Shorthair—Tortie",
    "Turkish Shorthair",
    "Ojos Azules",
    "Egyptian Mau",
    "Arabian Mau",
    "Abyssinian",
    "Australian Mist",
    "Ceylon",
    "Ocicat",
    "Ocicat Classic",
    "Sokoke",
    "California Spangled",
    "Toyger",
    "Bengal",
    "Kanaani",
    "Savannah",
    "Serengeti",
    "Chausie",
    "Munchkin",
    "Kinkalow",
    "Lambkin Dwarf",
    "Bambino",
    "Scottish Fold",
    "Highlander",
    "American Curl",
    "Japanese Bobtail",
    "Kurilian Bobtail",
    "Mekong Bobtail",
    "American Bobtail",
    "Manx",
    "Pixiebob",
    "American Ringtail",
    "Sphynx",
    "Donskoy",
    "Peterbald",
    "Ural Rex",
    "LaPerm",
    "Selkirk Rex",
    "Cornish Rex",
    "Devon Rex",
    "German Rex",
    "American Wirehair",
    "House cat—shorthair",
    "Persian Solid",
    "Persian—Blue- and Odd-eyed Bicolor",
    "Persian—Cameo",
    "Persian—Chinchilla",
    "Persian—Golden",
    "Persian—Pewter",
    "Persian—Cameo Bicolor",
    "Persian—Shaded Silver",
    "Persian—Silver Tabby",
    "Persian—Smoke",
    "Persian—Smoke Bicolor",
    "Persian—Tabby and Patched Tabby",
    "Persian—Tabby Tricolor",
    "Persian—Tortie and Calico",
    "Persian—Bicolor",
    "Himalayan",
    "Balinese",
    "Balinese-Javanese",
    "York Chocolate",
    "Oriental Longhair",
    "Tiffanie",
    "Chantilly/Tiffany",
    "Birman",
    "Maine Coon",
    "Ragdoll",
    "Ragamuffin",
    "Somali",
    "British Longhair",
    "Nebelung",
    "Norwegian Forest Cat",
    "Turkish Van",
    "Turkish Vankedisi",
    "Turkish Angora",
    "Siberian",
    "Neva Masquerade",
    "Munchkin",
    "Kinkalow",
    "Skookum",
    "Napoleon",
    "Scottish Fold",
    "American Curl",
    "Highlander",
    "Japanese Bobtail",
    "Kurilian Bobtail",
    "Cymric",
    "House cat—longhair" 
    ];

   // var breedsDog = [];

    $("#breedsCat").autocomplete({
      source: breedsCat
    });



    var breedsDog = [ 
  "Afador"
  "Afaird"
  "Affen Spaniel"
  "Affen Terrier"
  "Affen Tzu"
  "Affengriffon"
  "Affenhuahua"
  "Affenpinscher"
  "Affenpoo"
  "Affenpug"
  "Affenshire"
  "Affenwich"
  "Afghan Chon"
  "Afghan Collie"
  "Afghan Hound"
  "Afghan Retriever"
  "Afghan Sheepdog"
  "Afghan Spaniel"
  "African Pitbull"
  "Afollie"
  "African Wild Dog"
  "Africanis"
  "Aidi"
  "Ainu Dog"
  "Airedale Shepherd"
  "Airedale Terrier"
  "Airedoodle"
  "Akbash Dog"
  "Aki-Poo"
  "Akita (American)"
  "Akita Inu (Japanese)"
  "Akita Chow"
  "Akita Pit"
  "Akita Shepherd"
  "Alaknoori"
  "Alano Español"
  "Alapaha Blue Blood Bulldog"
  "Alaskan Goldenmute"
  "Alaskan Husky"
  "Alaskan Klee Kai"
  "Alaskan Malador"
  "Alaskan Malamute"
  "Alaskan Shepherd"
  "Alopekis"
  "Alpine Dachsbracke"
  "Alusky"
  "Ambullneo Mastiff"
  "American Allaunt"
  "American Alsatian"
  "American Bandogge Mastiff"
  "American Black and Tan Coonhound"
  "American Blue Gascon Hound"
  "American Blue Lacy"
  "American Boston Bull Terrier"
  "American Bull Dane"
  "American Bull Dogue de Bordeaux"
  "American Bull Mastiff"
  "American Bull Molosser"
  "American Bull Staffy"
  "American Bullador"
  "American Bull-Aussie"
  "American Bulldog"
  "American Bulldog Shepherd"
  "American Bullnese"
  "American Bullnese Hybrid"
  "American Bullweiler"
  "American Bully"
  "American Cocker Spaniel"
  "American Crested Sand Terrier"
  "American Eagle Dog"
  "American Eskimo Dog"
  "American Foxhound"
  "American French Bull Terrier"
  "American French Bulldog"
  "American Gointer"
  "American Hairless Terrier"
  "American Hunt Terrier"
  "American Indian Dog"
  "American Leopard Hound"
  "American Lo-Sze Pugg"
  "American Mastiff"
  "American Mastiff (Panja)"
  "American Neo Bull"
  "American Pit Bull Terrier"
  "American Pit Corso"
  "American Rat Pinscher"
  "American Staffordshire Terrier"
  "American Staghound"
  "American Toy Terrier (Amertoy)"
  "American Treeing Feist"
  "American Tundra Shepherd Dog"
  "American Water Spaniel"
  "American White Shepherd"
  "Amitola Bulldog"
  "Anatolian Pyrenees"
  "Anatolian Shepherd Dog"
  "Andalusian Podenco"
  "Anglos-Françai Grand"
  "Anglos-Français de Moyenne Venerie"
  "Anglos-Françaises"
  "Anglos-Françaises de Petite Venerie"
  "Appenzell Mountain Dog"
  "Argentine Dogo"
  "Ariege Pointing Dog"
  "Ariegeois"
  "Armant"
  "Armenian Gampr"
  "Arubian Cunucu Dog"
  "Aryan Molossus"
  "Atlas Terrier"
  "Ausky"
  "Aussalier"
  "Aussie Bulldog"
  "Aussie Siberian"
  "Aussie-Corgi"
  "Aussiedoodle"
  "Aussiedor"
  "Aussie-Flat"
  "Auss-Tzu"
  "Austi-Pap"
  "Australian Bandog"
  "Australian Boxherd"
  "Australian Bulldog"
  "Australian Cattle Dog"
  "Australian Cobberdog"
  "Australian Eskimo"
  "Australian Kelpie"
  "Australian Koolie"
  "Australian Labradoodle"
  "Australian Retriever"
  "Australian Shepherd"
  "Aussie Silk Terrier"
  "Australian Stumpy Tail Cattle Dog"
  "Australian Terrier"
  "Australian Yorkshire Terrier"
  "Austrian Black and Tan Hound"
  "Austrian Brandlbracke"
  "Austrian Shorthaired Pinscher"
  "Auvergne Pointing Dog"
  "Azawakh"
  "Bagle Hound"
  "Bakharwal Dog"
  "Balkan Hound"
  "Balkan Scenthound"
  "Balkanski Gonic"
  "Bangkaew"
  "Banjara Greyhound"
  "Banter Bulldogge"
  "Barbado da Terceira"
  "Barbet"
  "Barger Stock Feist"
  "Bascottie"
  "Basenji"
  "Ba-Shar"
  "Baskimo"
  "Bassador"
  "Basschshund"
  "Basselier"
  "Basset Artesien Normand"
  "Basset Bleu de Gascogne"
  "Basset Fauve de Bretagne"
  "Basset Foxhound"
  "Basset Hound"
  "Basset Retriever"
  "Basset Shepherd"
  "Bassetoodle"
  "Basston"
  "Bassugg"
  "Bavarian Mountain Hound"
  "Bea Griffon"
  "Beabull"
  "Beagi"
  "Beagle"
  "Beagle Chin"
  "Beagle Harrier"
  "Beagleman"
  "Beaglier"
  "Beago"
  "Be-Apso"
  "Bearded Collie"
  "Beaski"
  "Bea-Tzu"
  "Beauceron"
  "Bedlington Terrier"
  "Bedouin Shepherd Dog"
  "Belgian Griffon"
  "Belgian Mastiff"
  "Belgian Shepherd Groenendael"
  "Belgian Shepherd Laekenois"
  "Belgian Shepherd Malinois"
  "Belgian Shepherd Tervuren"
  "Belgian Shorthaired Pointer"
  "Belgrade Terrier"
  "Bench-legged Feist"
  "Bergamasco"
  "Berger de Picard"
  "Berger du Languedoc"
  "Bernedoodle"
  "Bernefie"
  "Berner Chow"
  "Bernese Hound"
  "Bernese Mountain Dog"
  "Bernese Rottie"
  "Bichomo"
  "Bichon Frise"
  "Bichon Havanais"
  "Bichon Yorkie"
  "Bichon-A-Ranian"
  "Bich-poo"
  "Biewer"
  "Billy"
  "Biton"
  "Black and Tan Coonhound"
  "Black and Tan Virginia Foxhound"
  "Black Forest Hound"
  "Blue Gascony Basset"
  "Black Mouth Cur"
  "Black Mouth Pom Cur"
  "Black Norwegian Elkhound"
  "Black Russian Terrier"
  "Bleu de Gascogne"
  "Bloodhound"
  "Blue Gascony Basset"
  "Blue Heeler"
  "Blue Lacy"
  "Blue Picardy Spaniel"
  "Blue Spaniel"
  "Bluetick Coonhound"
  "Bluetick Coonhound Harrier"
  "Bocker"
  "Bo-Dach"
  "Bodacion"
  "Boerboel"
  "Bogle"
  "Boglen Terrier"
  "Bohemian Shepherd"
  "Bohemian Terrier"
  "Bo-Jack"
  "Bolo-chi"
  "Bologco"
  "Bolognese"
  "Bolonoodle"
  "Bonsai Bulldogge"
  "Borador"
  "Border Beagle"
  "Border Collie"
  "Border Collie Pit"
  "Border Collie Pyrenees"
  "Border Heeler"
  "Border Jack"
  "Border Newfie"
  "Border Point"
  "Border Sheepdog"
  "Border Springer"
  "Border Stack"
  "Border Terrier"
  "Border-Aussie"
  "Border Malamute Terrier"
  "Bordernese"
  "Bordoodle"
  "Borgi"
  "Borzoi"
  "Bosanski Ostrodlaki Gonic Barak"
  "Bosapso"
  "BoShih"
  "Boskimo"
  "Bosmaraner"
  "Bosnian-Herzegovinian Sheepdog"
  "Bospin"
  "Bossi-Poo"
  "Bossie"
  "Bostalian"
  "Bostchon"
  "Bostie"
  "Bostillon"
  "Bostinese"
  "Boston Cattle Dog"
  "Boston Chin"
  "Boston Huahua"
  "Boston Lab"
  "Boston Spaniel"
  "Boston Terrier"
  "Boston Yorkie"
  "Bouvier de Ardennes"
  "Bouvier des Flandres"
  "Boweimar"
  "Bowzer"
  "Boxador"
  "Boxane"
  "Boxapoint"
  "Box-a-Shar"
  "Boxer"
  "Boxer Basset"
  "Boxer Chow"
  "Boxerdoodle"
  "Boxerman"
  "Boxita"
  "Boxollie"
  "Boxsky"
  "Boxspring"
  "Boxweiler"
  "Boykin Spaniel"
  "Bracco Italiano"
  "Braque du Bourbonnais"
  "Braque Dupuy"
  "Braque Francais"
  "Brat"
  "Brazilian Terrier"
  "Briard"
  "Briquet"
  "Briquet Griffon Vendeen"
  "Brittany Bourbonnais"
  "Brittany Spaniel"
  "Broholmer"
  "Broodle Griffon"
  "Brottweiler"
  "Brug"
  "Brussalier"
  "Brusselranian"
  "Brussels Griffon"
  "Brusston"
  "BT Walker"
  "Buckley Mountain Feist"
  "Bugg"
  "Bukovina Sheepdog"
  "Buldogue Campeiro"
  "Bulgarian Shepherd Dog"
  "Bull Arab"
  "Bull Jack"
  "Bull Mastweiler"
  "Bull Terrier"
  "Bullador"
  "Bull-Aussie"
  "Bullboxer"
  "Bull-Boxer"
  "Bullboxer Pit"
  "Bullboxer Staff"
  "Bullboxer Staffy Bull"
  "Bulldog"
  "Bullmasador"
  "Bullmastiff"
  "Bullmatian"
  "Bulloxer"
  "Bull Chow Terrier"
  "Bull-Pei"
  "Bullwhip"
  "Bully Basset"
  "Bully Bordeaux"
  "Bully Pitsky"
  "Bully Wheaten"
  "Bullypit"
  "Bushland Terrier"
  "Cadoodle"
  "Cairanian"
  "Cairland Terrier"
  "Cairmal"
  "Cairn Corgi"
  "Cairn Terrier"
  "Cairnese"
  "Cairnoodle"
  "Cairnwich Terrier"
  "Cairoston"
  "Cajun Squirrel Dog"
  "Combai"
  "Cambodian Razorback Dog"
  "Canaan Dog"
  "Canadian Cur"
  "Canadian Eskimo Dog"
  "Canadian Inuit Dog"
  "Canarian Warren Hound"
  "Canary Dog"
  "Cane Corso Italiano"
  "Canis Panther"
  "Canoe Dog"
  "Cantel"
  "Cão da Serra da Estrela"
  "Cão da Serra de Aires"
  "Cão de Castro Laboreiro"
  "Cão de Fila de São Miguel"
  "Cão de Gado Transmontano"
  "Cão dos Mourey"
  "Caravan Hound"
  "Cardigan Welsh Corgi"
  "Care-Tzu"
  "Carkie"
  "Carlin Pinscher"
  "Carnauzer"
  "Carolina Dog"
  "Carpathian Sheepdog"
  "Catahoula Bulldog"
  "Catahoula Leopard Dog"
  "Catalan Sheepdog"
  "Cattle Collie Dog"
  "Caucasian Shepherd"
  "Cava-Chin"
  "Cavachon"
  "Cava-Corgi"
  "Cavador"
  "Cavalier King Charles Spaniel"
  "Cava-lon"
  "Cav-A-Malt"
  "Cav-A-Mo"
  "Cavanese"
  "Cavapom"
  "Cavapoo"
  "Cava-Shell"
  "Cavaton"
  "Cava-Tzu"
  "Cavestie"
  "Cavottish"
  "Central Asian Ovtcharka"
  "Cesky Fousek"
  "Cesky Terrier"
  "Chabrador"
  "Chacy Ranior"
  "Charlie Feist"
  "Chart Polski"
  "Chatham Hill Retriever"
  "Chatterdale"
  "Cheagle"
  "Cheeks"
  "Cheenese"
  "Cherokee Monarch"
  "Chesador"
  "Chesapeake Bay Retriever"
  "Chestie"
  "Chi Apso"
  "Chi Staffy Bull"
  "Chi-Chi"
  "Chi-Chon"
  "Chidale"
  "Chien D'Artois"
  "Chien Française"
  "Chigi"
  "Chihuahua"
  "Chilier"
  "Chimation"
  "Chin"
  "China Jack"
  "Chinaranian"
  "Chineranian"
  "Chinese Chongqing Dog"
  "Chinese Crested"
  "Chinese Crestepoo"
  "Chinese Foo Dog"
  "Chinese Frise"
  "Chinese Imperial Dog"
  "Chinese Shar-Pei"
  "Chin-Ocker"
  "Chinook"
  "Chin-Pin"
  "Chin-wa"
  "Chion"
  "Chipin"
  "Chipit"
  "Chi-Poo"
  "Chippiparai"
  "Chiribaya Shepherd"
  "Chi-Spaniel"
  "Chiweenie"
  "Chiwoxy"
  "Chizer"
  "Chonzer"
  "Chorkie"
  "Chortaj"
  "Chow Chow"
  "Chow Pei"
  "Chow Shepherd"
  "Chug"
  "Chusky"
  "Chussel"
  "Cierny Sery"
  "Cirneco Dell'Etna"
  "Clumber Lab"
  "Clumber Pei"
  "Clumber Spaniel"
  "Clumberstiff"
  "Cluminger Spaniel"
  "Cock-A-Chon"
  "Cockalier"
  "Cock-A-Mo"
  "Cockapin"
  "Cockapoo"
  "Cock-A-Tzu"
  "Cocker Griffon"
  "Cocker Jack"
  "Cocker Pug"
  "Cocker Spaniel"
  "Cocker Westie"
  "Cockeranian"
  "Cocker-Pei"
  "Cockinese"
  "Cojack"
  "Collie"
  "Colonial Cocker Spaniel"
  "Colorado Bulldog"
  "Combai"
  "Confetti Australian Shepherd"
  "Continental Bulldog"
  "Continental Toy Spaniel"
  "Coochi"
  "Copica"
  "Corgi"
  "Corgi Basset"
  "Corgi Cattle Dog"
  "Corgi Pit"
  "Corgi Schip"
  "Corgidor"
  "Corgipoo"
  "Corillon"
  "Corkie"
  "Cosheltie"
  "Coton de Tulear"
  "Coton Eskimo"
  "Coton Tzu"
  "Cotonese"
  "Cotralian"
  "Coydog"
  "Crested Beagle"
  "Crested Cavalier"
  "Crested Malt"
  "Crested Peke"
  "Crested Schnauzer"
  "Crested Tzu"
  "Crestoxie"
  "Cretan Hound"
  "Croatian Sheepdog"
  "Crustie"
  "Curly-Coated Retriever"
  "Cypro Kukur"
  "Czechoslovakian Wolfdog"
  "Czesky Terrier"
  "Dach-Griffon"
  "Dachsador"
  "Dachshund"
  "Dachsweiler"
  "Daisy Dog"
  "Dakotah Shepherd"
  "Dalmadoodle"
  "Dalmador"
  "Dalmatian"
  "Dalmatian Heeler"
  "Dalmatian Husky"
  "Dameranian"
  "Dandie Dinmont Terrier"
  "Daniff"
  "Danish Broholmer"
  "Danish-Swedish Farmdog"
  "Das Pinscher"
  "Dashalier"
  "Daug"
  "Decker Hunting Terrier"
  "Denmark Feist"
  "Deutsche Bracke"
  "Deutsch Drahthaar"
  "Deutscher Wachtelhund"
  "Dingo"
  "Doberman Pinscher"
  "Doberman Shepherd"
  "Dobie-Basset"
  "Dobie Schnauzer"
  "Docker"
  "Dogo Argentino"
  "Dogue Brasileiro"
  "Dogue de Bordeaux"
  "Domitius Maximus Mastiff"
  "Doodleman Pinscher"
  "Dorgi"
  "Dorkie"
  "Dorset Olde Tyme Bulldogge"
  "Double Doodle"
  "Doubull-Mastiff"
  "Doxie Scot"
  "Doxie-Chin"
  "Doxie-Chon"
  "Doxiemo"
  "Doxie-Pin"
  "Doxiepoo"
  "Doxle"
  "Drentse Patrijshond"
  "Drever"
  "Dumfriesshire Hound"
  "Dunker"
  "Dutch Shepherd Dog"
  "Dutch Smoushond"
  "East-European Shepherd"
  "East Russian Coursing Hound"
  "East Siberian Laika"
  "Elk-a-Bee"
  "Elkhound"
  "Elk-Kee"
  "Enga-Apso"
  "Engachon"
  "EngAm Bulldog / Olde Bulldog"
  "Eng-A-Poo"
  "Engatzu Spaniel"
  "Englian Mastiff"
  "English Boodle"
  "English Boston-Bulldog"
  "English Bull Springer"
  "English Bulldog"
  "English Bullen Bordeaux Terrier"
  "English Bullweiler"
  "English Cocker Spaniel"
  "English Coonhound"
  "English Cotralian"
  "English Foxhound"
  "English King"
  "English Mastweiler"
  "English Pointer"
  "English Setter"
  "English Shepherd"
  "English Speagle"
  "English Springer Spaniel"
  "English Toy Cocker Spaniel"
  "English Toy Spaniel"
  "Entlebucher Pit"
  "Entlebucher Sennenhund"
  "Eskapoo"
  "Eskifon"
  "Eskijack"
  "Eskimo Chi"
  "Eskimo Schnauzer"
  "Eskland"
  "Estonian Hound"
  "Eurasier"
  "Euro Mountain Sheparnese"
  "Ewokian"
  "Farm Collie"
  "Fauve de Bretagne"
  "Faux Frenchbo Bulldog"
  "Feist"
  "Field Spaniel"
  "Fila Brasileiro"
  "Finnish Hound"
  "Finnish Lapphund"
  "Finnish Spitz"
  "Flandoodle"
  "Flat-Coated Retriever"
  "Florida/Cracker Cur"
  "Fo-Chon"
  "Foodle"
  "Formosan Mountain Dog"
  "Fo-Tzu"
  "Fourche Terrier"
  "Fox Terrier"
  "Foxhoodle"
  "Foxhound"
  "Foxingese"
  "Foxton"
  "Foxy Rat Terrier"
  "Foxy Russell"
  "Free-Lance Bulldog"
  "French Brittany Spaniel"
  "French Bull Jack"
  "French Bull Tzu"
  "French Bull Weiner"
  "French Bulldog"
  "French Bullhuahua"
  "French Bulloxer"
  "French Mastiff"
  "French Pin"
  "French Pointing Dog"
  "French Spaniel"
  "French Tricolor Hound"
  "French White and Black Hound"
  "French White and Orange Hound"
  "Frenchie Bichon"
  "Frenchie-Pei"
  "Frenchie Pug"
  "Frenchie Staff"
  "Frengle"
  "Galgo Español"
  "Gammel Dansk Hoensehund"
  "Gascons-Saintongeois"
  "Georgian Shepherd"
  "Georgian Mountain Dog"
  "Gerberian Shepsky"
  "German Anatolian Shepherd"
  "German Australian Shepherd"
  "German Hunt Terrier"
  "German Longhaired Pointer"
  "German Malinois"
  "German Pinscher"
  "German Rough-haired Pointing Dog"
  "German Sheeppoodle"
  "German Shepherd Dog"
  "German Sheprador"
  "German Shorthaired Lab"
  "German Shorthaired Pointer"
  "German Spitz Giant"
  "German Spitz Medium"
  "German Spitz Small"
  "German Wirehaired Lab"
  "German Wirehaired Pointer"
  "Giant Maso Mastiff"
  "Giant Schnauzer"
  "Giant Schnoodle"
  "Glechon"
  "Glen of Imaal Terrier"
  "Goberian"
  "Golddust Yorkshire Terrier"
  "Golden Border Retriever"
  "Golden Boxer"
  "Golden Cocker Retriever"
  "Golden Dox"
  "Golden Irish"
  "Golden Labrador"
  "Golden Mountain Dog"
  "Golden Newfie"
  "Golden Pei"
  "Golden Pyrenees"
  "Golden Retriever"
  "Golden Saint"
  "Golden Sammy"
  "Golden Sheltie"
  "Golden Shepherd"
  "Goldenshire"
  "Goldendoodle"
  "Goldmaraner"
  "Goldmation"
  "Gollie"
  "Gonczy Polski"
  "Gordon Setter"
  "Gordon Sheltie"
  "Gran Mastin de Borinquen"
  "Grand Anglo-Français"
  "Grand Anglo-Français Blanc et Noir"
  "Grand Anglo-Français Blanc et Orange"
  "Grand Anglo-Français Tricolore"
  "Grand Basset Griffon Vendeen"
  "Grand Bleu de Gascogne"
  "Grand Gascon Saintongeois"
  "Grand Griffon Vendeen"
  "Great Bernese"
  "Great Dane"
  "Great Danebull"
  "Great Danoodle"
  "Great Pyredane"
  "Great Pyrenees"
  "Great Weimar"
  "Great Wolfhound"
  "Greater Swiss Mountain Dog"
  "Greek Hound"
  "Greek Sheepdog"
  "Greenland Dog"
  "Greyhound"
  "Griffichon"
  "Griffon Bleu de Gascogne"
  "Griffon Fauve de Bretagne"
  "Griffon Nivernais"
  "Griffonese"
  "Griffonshire"
  "Groenendael"
  "Grosser Munsterlander Vorstehhund"
  "Guatemalan Bull Terrier"
  "Hairless Khala"
  "Halden Hound"
  "Hamilton Hound"
  "Hanoverian Hound"
  "Hanoverian Scenthound"
  "Harlequin Pinscher"
  "Harrier"
  "Hava-Apso"
  "Havachin"
  "Havachon"
  "Havallon"
  "Havamalt"
  "Havanese"
  "Havanestie"
  "Havapeke"
  "Havashire"
  "Havashu"
  "Havaton"
  "Hawaiian Poi Dog"
  "Hellenikos Ichnilatis"
  "Hellenikos Poimenikos"
  "Hertha Pointer"
  "Highland Maltie"
  "Himalayan Chamba Gaddi Dog"
  "Himalayan Mastiff Guard Dog"
  "Himalayan Sheepdog"
  "Hokkaido Dog"
  "Hovawart"
  "Hug"
  "Hungarian Greyhound"
  "Hungarian Kuvasz"
  "Hungarian Puli"
  "Hungarian Wire-haired Pointing Dog"
  "Hush Basset"
  "Huskimo"
  "Huskita"
  "Husky"
  "Husky Jack"
  "Hygenhund"
  "Ibizan Hound"
  "Icelandic Sheepdog"
  "Imo-Inu"
  "Inca Hairless Dog"
  "Indian Spitz"
  "Irish Dane"
  "Irish Doodle"
  "Irish Glen Imaal Terrier"
  "Irish Mastiff"
  "Irish Red and White Setter"
  "Irish Setter"
  "Irish Staffordshire Bull Terrier"
  "Irish Terrier"
  "Irish Troodle"
  "Irish Water Spaniel"
  "Irish Wolfhound"
  "Istrian Coarse-haired Hound"
  "Istrian Shorthaired Hound"
  "Italian-Bichon"
  "Italian Bulldogge"
  "Italian Doxie"
  "Italian Grey Min Pin"
  "Italian Greyhound"
  "Italian Greyhuahua"
  "Italian Hound"
  "Italian Papihound"
  "Italian Spinoni"
  "Italian Tzu"
  "Jacairn"
  "Ja-Chon"
  "Jack Chi"
  "Jack Russell Terrier"
  "Jack Tzu"
  "Jack-A-Bee"
  "Jack-A-Poo"
  "Jack-A-Ranian"
  "Jackie-Bichon"
  "Jack-Rat Terrier"
  "Jackshund"
  "Jafox"
  "Jaland"
  "Jamthund"
  "Japanese Spaniel (Chin)"
  "Japanese Spitz"
  "Japanese Terrier"
  "Japeke"
  "Japillon"
  "Japug"
  "Jarkie"
  "Jatese"
  "Jatzu"
  "Jindo"
  "Jug"
  "Kai Dog"
  "Kangal Dog"
  "Kangaroo Dog"
  "Kanni"
  "Karabash"
  "Karelian Bear Dog"
  "Karelian Bear Laika"
  "Karelo-Finnish Laika"
  "Karst Shepherd"
  "Kashon"
  "Keagle"
  "Keeshond"
  "Kelb Tal-Fenek"
  "Kemmer Feist"
  "Kemmer Stock Hybrid Squirrel Dog"
  "Kerry Beagle"
  "Kerry Blue Terrier"
  "Kerry Wheaten"
  "Kimola"
  "King Cavrin"
  "King Charles Spaniel"
  "King Charles Yorkie"
  "King Pin"
  "King Schnauzer"
  "King Shepherd"
  "King Wheaten"
  "Kishu Ken"
  "Klein Poodle"
  "Kobetan"
  "Kokoni"
  "Komondor"
  "Koochee"
  "Kooikerhondje"
  "Koolie"
  "Korean Dosa Mastiff"
  "Krasky Ovcar"
  "Kromfohrlander"
  "Kuchi"
  "Kugsha Dog"
  "Kunming Dog"
  "Kuri"
  "Kuvasz"
  "Kyi-Leo"
  "Lab'Aire"
  "Lab Pei"
  "Lab-Pointer"
  "Labahoula"
  "Labany"
  "Labbe"
  "Labernard"
  "Labernese"
  "Labloodhound"
  "Labmaraner"
  "Labollie"
  "Labrabull"
  "Labradane"
  "Labradinger"
  "Labradoodle"
  "Labradoodle Australian"
  "Labradoodle Miniature"
  "Labrador Corso"
  "Labrador Husky"
  "Labrador Retriever"
  "Labraheeler"
  "Labrahuahua"
  "Labralas"
  "Labrottie"
  "Lacasapoo"
  "La-Chon"
  "Lagotto Romagnolo"
  "Lakeland Terrier"
  "Lakota Mastino"
  "Lancashire Heeler"
  "Landseer"
  "Lapinporokoira"
  "La Pom"
  "Lapphund"
  "Large Münsterländer"
  "Larson Lakeview Bulldogge"
  "Latvian Hound"
  "Leavitt Bulldog"
  "Leonberger"
  "Leopard Cur"
  "Levesque"
  "Lha-Basset"
  "Lha-Cocker"
  "Lhaffon"
  "Lhasa Apso"
  "Lhasa-Coton"
  "Lhasalier"
  "Lhasanese"
  "Lhasapoo"
  "Lhatese"
  "Lithuanian Hound"
  "Llewellin Setter"
  "Longhaired Whippet"
  "Louisiana Catahoula Leopard Dog"
  "Löwchen (Little Lion Dog)"
  "Lucas Terrier"
  "Lundehund"
  "Lurcher"
  "Magyar Agar"
  "Mahratta Greyhound"
  "Majestic Tree Hound"
  "Majorca Shepherd Dog"
  "Malchi"
  "Mally Foxhound"
  "Mal-Shi"
  "Malteagle"
  "Maltese"
  "Maltichon"
  "Malti-Pin"
  "Maltipom"
  "Malti-Poo"
  "Malti-Pug"
  "Malton"
  "Mammut Bulldog"
  "Manchester Terrier"
  "Maremma Sheepdog"
  "Markiesje"
  "Mastador"
  "Masti-Bull"
  "Mastidoodle"
  "Mastiff"
  "Mauxie"
  "Mauzer"
  "McNab"
  "Meagle"
  "Mexican Hairless"
  "Middle Asian Ovtcharka"
  "Mi-Ki"
  "Mini Australian Shepterrier"
  "Mini Coonhound"
  "Mini English Cocker"
  "Mini Foxillon"
  "Mini St. Bernard"
  "Miniature American Eskimo"
  "Miniature American Shepherd"
  "Miniature Aussiedoodle"
  "Miniature Australian Bulldog"
  "Miniature Australian Shepherd"
  "Miniature Boxer"
  "Miniature Bull Terrier"
  "Miniature Bulldog"
  "Miniature English Bulldach"
  "Miniature English Bulldog"
  "Miniature Fox Terrier"
  "Miniature French Bull Terrier"
  "Miniature French Schnauzer"
  "Miniature Golden Retriever"
  "Miniature Goldendoodle"
  "Miniature Labradoodle"
  "Miniature Pinscher"
  "Miniature Poodle"
  "Miniature Schnaupin"
  "Miniature Schnauzer"
  "Miniature Schnauzzie"
  "Miniature Schnoxie"
  "Miniature Shar-Pei"
  "Miniboz"
  "Minnie Jack"
  "Mioritic Sheepdog"
  "Mollett Victorian Bulldog"
  "Mongrel (Mutt)"
  "Moscow Toy Terrier"
  "Moscow Vodolaz"
  "Moscow Watchdog"
  "Moscow Water Dog"
  "Mountain Bulldog"
  "Mountain Cur"
  "Mountain Feist"
  "Mountain Mastiff"
  "Mountain View Cur"
  "Mucuchies"
  "Mudi"
  "Muggin"
  "Mullins Feist"
  "Munsterlander"
  "Muscle Mastiff"
  "Native American Indian Dog"
  "Native American Shepherd"
  "Native American Village Dog"
  "Neapolitan Mastiff"
  "Nebolish Mastiff"
  "Nehi Saint Bernard"
  "Nenets Herding Laika"
  "New Guinea Singing Dog"
  "New Zealand Heading Dog"
  "New Zealand Huntaway"
  "Newfoundland"
  "Newfypoo"
  "Norrbottenspets"
  "Norfolk Terrier"
  "Nortese"
  "North American Miniature Australian Shepherd"
  "Northeasterly Hauling Laika"
  "Northern Inuit Dog"
  "Norwegian Buhund"
  "Norwegian Elkhound"
  "Norwegian Hound"
  "Norwegian Lundehund"
  "Norwich Terrier"
  "Nova Scotia Duck-Tolling Retriever"
  "Ol' Southern Catchdog"
  "Old Anglican Bulldogge"
  "Old Danish Chicken Dog"
  "Old Deerhound Sheepdog"
  "Old English Mastiff"
  "Old English Sheepdog"
  "Olde Boston Bulldogge"
  "Olde English Bulldogge"
  "Olde Pit Bulldogge"
  "Olde Staff Bulldogge"
  "Olde Victorian Bulldogge"
  "Old-Time Farm Shepherd"
  "Ori Pei"
  "Original English Bulldogge"
  "Original Mountain Cur"
  "Otterhound"
  "Otto Bulldog"
  "Owczarek Podhalanski"
  "Pakistani Bull Dog (Gull Dong)"
  "Pakistani Bull Terrier (Pakistani Gull Terr)"
  "Pakistani Mastiff (Pakisani Bully Kutta)"
  "Pakistani Shepherd Dog (Bhagyari Kutta)"
  "Pakistani Tazi Hound"
  "Pakistani Vikhan Dog"
  "Panda Shepherd"
  "Papastzu"
  "Paperanian"
  "Papichon"
  "Papigriffon"
  "Papijack"
  "Papillon"
  "Papimo"
  "Papi-poo"
  "Papitese"
  "Papshund"
  "Pariah Dog"
  "Parnell's Carolina Cur"
  "Parson Russell Terrier"
  "Pastor Garafiano"
  "Patterdale Shepherd"
  "Patterdale Terrier"
  "Patterjack"
  "Patterland Terrier"
  "Patton Terrier"
  "Peagle"
  "Peek-A-Pom"
  "Pek-A-Rat"
  "Peka-A-West"
  "Pekalier"
  "Pekarin"
  "Peke-A-Chon"
  "Peke-A-Pap"
  "Peke-A-Pin"
  "Peke-A-Tese"
  "Pekehund"
  "Peke-Italian"
  "Pekepoo"
  "Pekingese"
  "Pembroke Cocker Corgi"
  "Pembroke Sheltie"
  "Pembroke Welsh Corgi"
  "Pencil-tail Feist"
  "Perdiguero de Burgos"
  "Perdiguero Navarro"
  "Perro Cimarron"
  "Perro de Pastor Mallorquin"
  "Perro de Presa Canario"
  "Perro de Presa Mallorquin"
  "Perro Ratonero Andaluz"
  "Persian Sarabi Dog"
  "Peruvian Inca Orchid"
  "Petit Basset Griffon Vendeen"
  "Petit Bleu de Gascogne"
  "Petit Brabancon"
  "Petit Gascon Saintongeois"
  "Petite Goldendoodle"
  "Petite Labradoodle"
  "Pharaoh Hound"
  "Phu Quoc Ridgeback Dog"
  "Picardy Spaniel"
  "Pineranian"
  "Pinny-Poo"
  "Pin-Tzu"
  "Pit Bull Terrier"
  "Pit Heeler"
  "Pitsky"
  "Pitweiler"
  "Plica"
  "Plott Hound"
  "Plummer Terrier"
  "Pocket Beagle"
  "Pocket Pitbull"
  "Podenco Ibicenco"
  "Pointer"
  "Pointer Bay"
  "Poitevin"
  "Polish Hound"
  "Polish Lowland Sheepdog"
  "Polish Tatra Sheepdog"
  "Pom Terrier"
  "Pom-A-Nauze"
  "Pomapoo"
  "Pom-A-Pug"
  "Pomchi"
  "Pom-Coton"
  "Pomeagle"
  "Pomeranian"
  "Pomerat"
  "Pomimo"
  "Pom-Kee"
  "Pom-Shi"
  "Pom-Silk"
  "Pomsky"
  "Pomston"
  "Pont-Audemer Spaniel"
  "Poochin"
  "Poodle"
  "Poogle"
  "Poolky"
  "Poos"
  "Poo-Shi"
  "Pootalian"
  "Poo-Ton"
  "Poovanese"
  "Porcelaine"
  "Portuguese Podengo"
  "Portuguese Pointer"
  "Portuguese Water Dog"
  "Posavac Hound"
  "Poshies"
  "Potsdam Greyhound"
  "Powderpap"
  "Prague Farm Dog"
  "Prazsky Krysavik"
  "Presa Canario"
  "Presa Dane"
  "Price Boar Beisser"
  "Pudelpointer"
  "Pug"
  "Pugairn"
  "Pugalier"
  "Pug-A-Mo"
  "Pugapoo"
  "Pug-Coton"
  "Pugese"
  "Puggat"
  "Puggit"
  "Puggle",
  "Pughasa",
  "Puginese",
  "Pugland",
  "Pugmatian",
  "Pugottie",
  "Pugshire",
  "Pugwich",
  "Pug-Zu",
  "Puli (Pulik)",
  "Pumi",
  "Pungsan Dog",
  "Pushon",
  "Pyrador",
  "Pyredoodle",
  "Pyrenean Mastiff",
  "Pyrenean Mountain Dog",
  "Pyrenees Pit",
  "Pyrenean Shepherd",
  "Queen Elizabeth Pocket Beagle",
  "Queensland Heeler",
  "Raccoon Dog",
  "Rafeiro do Alentejo",
  "Raggle",
  "Rajapalayam",
  "Rampur Greyhound",
  "Rashon",
  "Rastreador Brasileiro",
  "Rat Terrier",
  "Rat-A-Pap",
  "Rat-Cha",
  "Ratese",
  "Ratshi Terrier",
  "Ratshire Terrier",
  "Rattle",
  "Rattle Griffon",
  "Reagle",
  "Redbone Coonhound",
  "Red-Tiger Bulldog",
  "Rhodesian Bernard",
  "Rhodesian Boxer",
  "Rhodesian Labrador",
  "Rhodesian Ridgeback",
  "Roman Rottweiler",
  "Rott Pei",
  "Rottaf",
  "Rotterman",
  "Rottle",
  "Rottweiler",
  "Rough Collie",
  "Rumanian Sheepdog",
  "Running Walker Foxhound",
  "Rus-A-Pei",
  "Russian Bear Schnauzer",
  "Russian Harlequin Hound",
  "Russian Hound",
  "Russian Spaniel",
  "Russian Toy",
  "Russian Tsvetnaya Bolonka",
  "Russian Wolfhound",
  "Russo-European Laika",
  "Rustralian Terrier",
  "Saarlooswolfhond",
  "Sabueso Español",
  "Sage Ashayeri",
  "Sage Koochee",
  "Sage Mazandarani",
  "Saint Berdoodle",
  "Saint Bermastiff",
  "Saint Bernard",
  "Saint Bernese",
  "Saint Bernewfie",
  "Saint Dane",
  "Saint Pyrenees",
  "Saluki",
  "Samoyed",
  "Sanshu Dog",
  "Sapsari",
  "Sarail Hound",
  "Sarplaninac",
  "Sceagle",
  "Schapendoes",
  "Schapso",
  "Schiller Hound",
  "Schip-A-Pom",
  "Schipese",
  "Schipperke",
  "Schipper-Poo",
  "Schnau-Tzu",
  "Schnauzer",
  "Schneagle",
  "Schnekingese",
  "Schnese",
  "Schnocker",
  "Schnoodle",
  "Schnug",
  "Schweenie",
  "Scobo Terrier",
  "Scoland Terrier",
  "Scolden Terrier",
  "Scoodle",
  "Scorkie",
  "Sco-Shi",
  "Scotch Collie",
  "Scotchi",
  "Scotchon",
  "Scotti Apso",
  "Scottish Cocker",
  "Scottish Deerhound",
  "Scottish Terrier",
  "Scottish-Skye Terrier",
  "Sealydale Terrier",
  "Sealyham Terrier",
  "Segugio Italiano",
  "Seidenspitz",
  "Seppala Siberian Sleddog",
  "Serbian Defence Dog",
  "Serbian Hound",
  "Sharberian Husky",
  "Sharbo",
  "Sharmatian",
  "Sharp Eagle",
  "Shar-Pei",
  "Shar-Poo",
  "Shar Tzu",
  "Sheepadoodle",
  "Shel-Aussie",
  "Shelchon",
  "Shelestie",
  "Shelillon",
  "Sheltidoodle",
  "Sheltie Inu",
  "Sheltie Pin",
  "Sheltie Pug",
  "Sheltie Shepherd",
  "Sheltie Tzu",
  "Shepadoodle",
  "Shepherd Pit",
  "Sheprador",
  "Shepweiler",
  "Shetland Sheepdog (Sheltie)",
  "Shiba Inu",
  "Shibos",
  "ShiChi",
  "Shichon",
  "Shiffon",
  "Shih Apso",
  "Shih Tzu",
  "Shih-Mo",
  "Shih-Poo",
  "Shika Inu",
  "Shikoku",
  "Shiloh Shepherd",
  "Shinese",
  "Shiranian",
  "Shocker",
  "Shockerd",
  "Shollie",
  "Shorgi",
  "Shorkie Tzu",
  "Shorty Bull",
  "Shug",
  "Sibercaan",
  "Siberian Boston",
  "Siberian Cocker",
  "Siberian Husky",
  "Siberian Indian Dog",
  "Siberian Laika",
  "Siberian Retriever",
  "Siberian Shiba",
  "Siberpoo",
  "Silkchon",
  "Silken Windhound",
  "Silkese",
  "Silkin",
  "Silkinese",
  "Silkland Terrier",
  "Silkshund",
  "Silky Cocker",
  "Silky Coton",
  "Silky Jack",
  "Silky Pug",
  "Silky Terrier",
  "Silky Tzu",
  "Silkyhuahua",
  "Silky-Lhasa",
  "Silky-Pin",
  "Silkzer",
  "Simaku",
  "Skilky Terrier",
  "Skip-Shzu",
  "Skye-Pap",
  "Skye Terrier",
  "Skypoo",
  "Sloughi",
  "Slovakian Hound",
  "Slovakian Rough Haired Pointer",
  "Slovensky Cuvac",
  "Smalandsstovare",
  "Small Greek Domestic Dog",
  "Small Munsterlander",
  "Small Swiss Hound",
  "Smithfield",
  "Smooth Collie",
  "Smooth Fox Terrier",
  "Sniffon",
  "Snorkie",
  "Soft Coated Golden",
  "Soft Coated Wheaten Terrier",
  "Soft Coated Wheatzer",
  "Soft Coated Woxer",
  "South Russian Ovtcharka",
  "Spanador",
  "Spangold Retriever",
  "Spaniel de Pont-Audemer",
  "Spanish Bulldog",
  "Spanish Hound",
  "Spanish Mastiff",
  "Spanish Water Dog",
  "Spinone Italiano",
  "Spreagle",
  "Springer Pit",
  "Springer Spaniel",
  "Springerdoodle",
  "Sprocker Spaniel",
  "Srpski Gonic",
  "Srpski Planinski Gonic",
  "Srpski Trobojni Gonic",
  "St. Germain Pointing Dog",
  "St. Weiler",
  "Stabyhoun",
  "Staffordshire Bull Terrier",
  "Staffy Bull Pit",
  "Staghound",
  "Standard American Eskimo",
  "Standard Auss-Tzu",
  "Standard Poodle",
  "Standard Schnauzer",
  "Standard Schnoodle",
  "Stephens' Stock Mountain Cur",
  "Stichelhaar",
  "Strellufstover",
  "Stumpy Tail Cattle Dog",
  "Styrian Roughhaired Mountain Hound",
  "Sulimov Dog",
  "Sussex Spaniel",
  "Swedish Elkhound",
  "Swedish Lapphund",
  "Swedish Vallhund",
  "Swiss Hound",
  "Swiss Laufhund",
  "Swiss Newfie",
  "Swiss Shorthaired Pinscher",
  "Swissneese",
  "Swissy Saint",
  "Taco Terrier",
  "Tahltan Bear Dog",
  "Taigan",
  "Tamaskan Dog",
  "Tasy",
  "Taylor's Bulldane",
  "Teacup Poodle",
  "Teddy Roosevelt Terrier",
  "Telomian",
  "Tenterfield Terrier",
  "Tepeizeuintli",
  "Terri-Poo",
  "Texas Blue Lacy",
  "Texas Heeler",
  "Thai Bangkaew Dog",
  "Thai Ridgeback",
  "The Carolina Dog",
  "Thornburg Feist",
  "Tibalier",
  "Tibetan Chin",
  "Tibetan KyiApso",
  "Tibetan Mastiff",
  "Tibetan Pug",
  "Tibetan Spaltese",
  "Tibetan Spaniel",
  "Tibetan Terrier",
  "Timber Wolf",
  "Titan Bull-Dogge",
  "Titan Terrier",
  "Torkie",
  "Tornjak",
  "Tosa Inu",
  "Toxirn",
  "Toy American Eskimo",
  "Toy Australian Shepherd",
  "Toy Fox Beagle",
  "Toy Fox Pinscher",
  "Toy Fox Terrier",
  "Toy Foxillon",
  "Toy German Spitz",
  "Toy Manchester Terrier",
  "Toy Poodle",
  "Toy Poxer",
  "Toy Rat Doxie",
  "Transylvanian Hound",
  "Treeing Cur",
  "Treeing Tennessee Brindle",
  "Treeing Walker Coonhound",
  "Ttoodle",
  "Tuareg Sloughi",
  "Twatha Utonagan",
  "Tyroler Bracke",
  "Tzu Basset",
  "Ultimate Mastiff",
  "Utonagan",
  "Valley Bulldog",
  "Vanguard Bulldog",
  "Victorian Boston Bulldog",
  "Victorian Bulldog",
  "Victorian Bulldog (Mollett)",
  "Villano de Las Encartaciones",
  "Vizmaraner",
  "Vizsla",
  "Volpino Italiano",
  "Vucciriscu",
  "Wauzer",
  "Wee-Chon",
  "Weeranian",
  "Weimaraner",
  "Weimardoodle",
  "Weim-Pei",
  "Wel-Chon",
  "Welsh Corgi",
  "Welsh Hound",
  "Welsh Sheepdog",
  "Welsh Springer Spaniel",
  "Welsh Terrier",
  "Weshi",
  "West Highland Doxie",
  "West Highland White Terrier (Westie)",
  "West of Argyll Terrier",
  "West Russian Coursing Hound",
  "West Siberian Laika",
  "Westeke",
  "Western Mountain Cur",
  "Westie Staff",
  "Westie-Laso",
  "Westiepoo",
  "Westillon",
  "Weston",
  "Westphalian Dachsbracke",
  "Wetterhoun",
  "Wheaten Terrier",
  "Whippet",
  "White English Bulldog",
  "White German Shepherd",
  "White Swiss Shepherd",
  "Whoodle",
  "Wire Fox Pinscher",
  "Wire Hair Snauzer",
  "Wirehaired Fox Terrier",
  "Wirehaired Pointing Griffon",
  "Wirehaired Vizsla",
  "Wirelsh Terrier",
  "Wire-Poo",
  "Wolador",
  "Wolamute",
  "Wolf Hybrid",
  "Wolfdog",
  "Woodle",
  "Wowauzer",
  "Xoloitzcuintle",
  "Yoranian",
  "Yorkie Pin",
  "Yorkie Russell",
  "Yorkie-Apso",
  "Yorkie-ton",
  "Yorkillon",
  "Yorkinese",
  "Yorkipoo",
  "Yorkshire Terrier",
  "Yorktese",
  "Yorwich",
  "Yugoslavian Hound",
  "Zuchon"
   ];

    $("#breedsCat").autocomplete({
      source: breedsDog
    });



  });

