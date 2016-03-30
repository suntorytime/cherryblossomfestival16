angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
  {
      "end_at": "2016-04-09 ??:?? PM",
      "location": "Kabuki Cinemas",
      "start_at": "2016-04-09 06:00 PM",
      "location_id": "0",
      "description": "2015 Cherry Blossom Queen Program Coronation Night! Admission: $25",
      "name": "2015 Queen Program Coronation",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-10 05:00 PM",
      "location": "Kabuki Cinemas",
      "start_at": "2016-04-10 06:00 PM",
      "location_id": "0",
      "description": "Kayo Parade, Guest Singer with Katsunami Kiyomotoi and Shosen Takaane. Admission $30 donation at door",
      "name": "Kayo Parade and Katsunami Kiyomotoi and Shosen Takaane",
      "image_name": "",
      "id": 2
    },
  {
      "end_at": "2016-04-09 05:00 PM",
      "location": "Post & Buchanan",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "0",
      "description": "NBC Bay Area Hula Dance and Prize Give-Aways",
      "name": "Hula Dance and Prize Give-Aways",
      "image_name": "",
      "id": 3
    },
  {
      "end_at": "2016-04-10 05:00 PM",
      "location": "Post & Buchanan",
      "start_at": "2016-04-10 11:00 AM",
      "location_id": "0",
      "description": "NBC Bay Area Hula Dance and Prize Give-Aways",
      "name": "Hula Dance and Prize Give-Aways",
      "image_name": "",
      "id": 4
    },
  {
      "end_at": "2016-04-16 12:00 PM",
      "location": "Post & Buchanan",
      "start_at": "2016-04-16 11:00 AM",
      "location_id": "0",
      "description": "Taru Mikoshi Purification Ceremony and Kagami Kai Mochitsuki",
      "name": "Purification Ceremony and Kagami Kai Mochitsuki",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-17 3:00 PM",
      "location": "Post & Buchanan",
      "start_at": "2016-04-17 01:00 PM",
      "location_id": "0",
      "description": "Grand Parade: Start at City Hall, North on Polk and West on Post. End at Fillmore.",
      "name": "Grand Parade",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-16 06:00 PM",
      "location": "Konko Church",
      "start_at": "2016-04-16 10:00 AM",
      "location_id": "0",
      "description": "Ukiyo-E Exhibition",
      "name": "Ukiyo-E Exhibition",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-16 3:30 PM",
      "location": "Konko Church",
      "start_at": "2016-04-16 02:00 PM",
      "location_id": "0",
      "description": "Ukiyo-E Demonstration",
      "name": "Ukiyo-E Demonstration",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-16 06:00 PM",
      "location": "Konko Church",
      "start_at": "2016-04-16 04:30 PM",
      "location_id": "0",
      "description": "Ukiyo-E Demonstration",
      "name": "Ukiyo-E Demonstration",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-17 06:00 PM",
      "location": "Konko Church",
      "start_at": "2016-04-17 10:00 AM",
      "location_id": "0",
      "description": "Ukiyo-E Exhibition",
      "name": "Ukiyo-E Exhibition",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-17 11:30 AM",
      "location": "Konko Church",
      "start_at": "2016-04-17 10:00 AM",
      "location_id": "0",
      "description": "Ukiyo-E Demonstration",
      "name": "Ukiyo-E Demonstration",
      "image_name": "",
      "id": 1
    },
  {
      "end_at": "2016-04-17 5:00 PM",
      "location": "Konko Church",
      "start_at": "2016-04-17 03:30 PM",
      "location_id": "0",
      "description": "Ukiyo-E Demonstration",
      "name": "Ukiyo-E Demonstration",
      "image_name": "",
      "id": 1
    },
    {
      "end_at": "2016-04-09 12:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 12:00 PM",
      "location_id": "0",
      "description": "Grandmaster Seiichi Tanaka founded the San Francisco Taiko Dojo in 1968 and introduced the taiko art form to America. Over the years, Grandmaster Tanaka’s students have traveled around the globe, forming new taiko ensembles and establishing taiko as an art form. San Francisco Taiko Dojo remains the most exciting and dynamic taiko group in the world. Grandmaster Tanaka’s style has developed the taiko from a primitive folk art to a powerful, sophisticated synthesis of rhythm, harmony and body movements. For more information, go to www.sftaiko.com.",
      "name": "San Francisco Taiko Dojo",
      "image_name": "SF Taiko Dojo",
      "id": 1
    },
    {
      "end_at": "2016-04-09 01:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 01:15 PM",
      "location_id": "0",
      "description": "Opening Ceremony and Kagami Biraki",
      "name": "Opening Ceremony and Kagami Biraki",
      "image_name": "CherryBlossomLogo",
      "id": 2
    },
    {
      "end_at": "2016-04-09 01:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 01:15 PM",
      "location_id": "0",
      "description": "Michiya Hanayagi and Michisuya Hanayagi Kai",
      "name": "Michiya Hanayagi and Michisuya Hanayagi Kai",
      "image_name": "michiya",
      "id": 3
    },
    {
      "end_at": "2016-04-09 02:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 01:45 PM",
      "location_id": "0",
      "description": "Nihon Buyo Kiyonomoto\nPhoto by Dave Golden © 2014",
      "name": "Nihon Buyo Kiyonomoto",
      "image_name": "nihon-buyo-kinomoto",
      "id": 4
    },
    {
      "end_at": "2016-04-09 03:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 02:30 PM",
      "location_id": "0",
      "description": "World Oyama Karate\nPhoto by Dave Golden © 2012. We practice a full-contact style of Japanese karate founded by Soshu Shigeru Oyama and Saiko Shihan Oyama. We have been in the bay area since 2001, with dojos in San Francisco and San Mateo. Our performance at the festival will include kata (forms), kihon (basics), kumite (fighting), as well as breaking demonstrations of wood, baseball bats, and ice. We hope to inspire folks to keep pushing themselves to do more and be more. We are all stronger than we realize. oyamakarate-sf.com",
      "name": "World Oyama Karate",
      "image_name": "oyama-karate",
      "id": 5
    },
    {
      "end_at": "2016-04-09 03:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 02:45 PM",
      "location_id": "0",
      "description": "The tsuzumi is a two-headed Japanese drum with an hourglass-shaped body, and is often found in the music of noh and kabuki theater. The Children’s Tsuzumi Challenge is a six-year-old after-school program, run by NPO Infusion, that teaches elementary school students at the Clarendon School in San Francisco and Willow Creek Academy in Sausalito how to play the drum. npoinfusion.org",
      "name": "Children’s Tsuzumi Challenge",
      "image_name": "filler-03",
      "id": 6
    },
    {
      "end_at": "2016-04-09 03:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 03:00 PM",
      "location_id": "0",
      "description": "Essence is a Japanese music ensemble featuring Masayuki Koga and Tim Hamano on shakuhachi, Jimi Nakagawa on taiko, Shota Osabe on piano.\nPhoto by Dave Golden © 2014",
      "name": "Essence with Masayuki Koga",
      "image_name": "essence",
      "id": 7
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 03:30 PM",
      "location_id": "0",
      "description": "Tomoya Nakai - 25 string koto",
      "name": "Tomoya Nakai - 25 String Koto",
      "image_name": "filler-05",
      "id": 8
    },
  {
      "end_at": "2016-04-09 04:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 04:00 PM",
      "location_id": "0",
      "description": "Yoko Fitzpatrick, choreographer and dance instructor, holds dance classes for seniors at the Richmond Annex Senior Center and North Berkeley Nikkei Senior Center. She teaches modern dances paired with Japanese popular songs. All students are seniors with young minds and enjoy energetic atmosphere. The group was established 12 years ago and performs at various locations for all kinds of occasions several times a year.",
      "name": "Yoko and the Sunshine Girls",
      "image_name": "yoko-sunshine",
      "id": 8
    },
    {
      "end_at": "2016-04-09 04:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 04:15 PM",
      "location_id": "0",
      "description": "This group was started by Issei (1st generation) right after WWII who wanted to entertain themselves by putting on kabuki plays and performing Japanese folk songs and dances. It is now comprised of four generations of Japanese Americans. Our repertoire mainly features from Japan but we have added contemporary music such as \"Sukiyaki\" by Kyu Sakamoto, \"Kyushu Matsuri Uta\" by Saburo Kitajima, and \"Tampopo\" by Nobuko Miyamoto, Rev. Masao Kodani, and Phyllis Nakagawa.",
      "name": "Sakura Minyo Doo Koo Kai",
      "image_name": "filler-06",
      "id": 9
    },
    { /* Is the kendama demonstration the same as the kendama sakura classic? If it is, I'll add the description to it */
      "end_at": "2016-04-09 05:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 04:45 PM",
      "location_id": "0",
      "description": "Kendama Demonstration",
      "name": "Kendama Demonstration",
      "image_name": "filler-01",
      "id": 10
    },
    {
      "end_at": "2016-04-09 05:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 05:15 PM",
      "location_id": "0",
      "description": "Rarely seen outside of Japan, Naginata or Japanese polearm fencing, uses a sword mounted to the end of a staff. The art of wielding the naginata has been handed down through the generations since its use in the battlefields in medieval Japan. For the last three centuries, the tradition of Naginata has been kept alive primarily by women. We practice both a traditional school called Tendo Ryu and the all-Japan version called Atarashii battlefield arts that have been passed down form the 1500s to today! naginata.org/ncnf.",
      "name": "Northern California Naginata Federation",
      "image_name": "naginata",
      "id": 09
    },
    {
      "end_at": "2016-04-09 06:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-09 05:45 PM",
      "location_id": "0",
      "description": "Yosakoi fuses traditional and modern Japanese dance, combining the fluid motions of the fishermen’s dance, Soran Bushi, with high energy and contemporary music. Formed in the fall of 2006, NSU Yosakoi, a subgroup of UC Berkeley's Nikkei Student Union (NSU), is on the of few recognized teams in the United States. Drawing from the original Soran Bushi, the team now choreographs its own performances. This year, the will be performing \"Yaren Soran\" and \"Hishou\", as well as a dance cover for \"Senbon Zakura\". For more information, contact berkeleynsu@gmail.com or visit the Yosakoi page at nsu.berkeley.edu!\nPhoto by Dave Golden © 2013",
      "name": "UC Berkeley Yosakoi Team",
      "image_name": "UCB-yosakoi",
      "id": 12
    },
    {
      "end_at": "2016-04-10 12:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 11:30 AM",
      "location_id": "0",
      "description": "Yamasho Kai \nPhoto by Dave Golden © 2014",
      "name": "Yamasho-Kai",
      "image_name": "yamasho-kai",
      "id": 13
    },
    {
      "end_at": "2016-04-10 12:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 12:00 PM",
      "location_id": "0",
      "description": "2016 Queen and Court\nPhoto by Dave Golden © 2014",
      "name": "2016 Queen and Court",
      "image_name": "queen",
      "id": 14
    },
    {
      "end_at": "2016-04-10 01:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 12:30 PM",
      "location_id": "0",
      "description": "Grandmaster Seiichi Tanaka founded the San Francisco Taiko Dojo in 1968 and introduced the taiko art form to America. Over the years, Grandmaster Tanaka’s students have traveled around the globe. San Francisco Taiko Dojo still remains the most exciting and dynamic taiko group in the world. Grandmaster Tanaka’s style has developed the taiko from a primitive folk art to a powerful, sophisticated synthesis of rhythm, harmony and body movements. For more information, go to www.sftaiko.com.",
      "name": "San Francisco Taiko Dojo",
      "image_name": "SF Taiko Dojo",
      "id": 15
    },
    {
      "end_at": "2016-04-10 02:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 01:30 PM",
      "location_id": "0",
      "description": "A women's Judo club in Noe Valley, founded by Sensei Keiko Fukuda, 10 degree black belt - the only woman in the world to attain the rank in Judo! Sensei Fukuda was the last surviving student of the founder of Judo, and taught Judo at her dojo and around the world until her passing in 2013. Soko Joshi will demonstrate safe falls, basic throws, sparring, and some forms. To find out more, please ask us after our performance, email us, or join us Tuesdays and Thursdays, 6 to 8 p.m. for our women's class. sokojoshijudo.com.",
      "name": "Soko Joshi Dojo",
      "image_name": "filler-03",
      "id": 16
    },
    {
      "end_at": "2016-04-10 02:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 02:00 PM",
      "location_id": "0",
      "description": "Ensohza Minyoshu is a Japanese folk ensemble based in the San Francisco Bay Area. They perform music and dance that evokes the festival spirit of Japan’s diverse rural communities. With lively vocals accompanied by fue and shakuhachi (bamboo flutes), shamisen (three-stringed instrument) and the beat of the taiko drum, Ensohza Minyoshu transports listeners and viewers to Japan’s mountain and fishing villages with traditional folk songs and festival dances. For more information, go to www.ensohza. org.\nPhoto by Dave Golden © 2012",
      "name": "Ensohza Minyoshu",
      "image_name": "ensohza-minyoshu",
      "id": 17
    },
    {
      "end_at": "2016-04-10 02:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 02:30 PM",
      "location_id": "0",
      "description": "El Cerrito High School is in the East Bay. They have a thriving Japanese language program that has existed for over 15 years. Their Soran Bushi Club was born out of a group of students who were studying Japanese. This is the club’s fifth year performing at the San Francisco Cherry Blossom Festival.",
      "name": "El Cerrito High School Japanese Club",
      "image_name": "filler-01",
      "id": 18
    },
    {
      "end_at": "2016-04-10 03:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 02:45 PM",
      "location_id": "0",
      "description": "Oshiro Karate Dojo",
      "name": "Oshiro Karate Dojo",
      "image_name": "filler-06",
      "id": 19
    },
    {
      "end_at": "2016-04-10 03:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 03:15 PM",
      "location_id": "0",
      "description": "San Francisco Wushu Team",
      "name": "San Francisco Wushu Team",
      "image_name": "filler-07",
      "id": 20
    },
    {
      "end_at": "2016-04-10 04:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 03:45 PM",
      "location_id": "0",
      "description": "Suio Ryo lai Kendo",
      "name": "Suio Ryo lai Kendo",
      "image_name": "",
      "id": 21
    },
    {
      "end_at": "2016-04-10 05:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-10 04:30 PM",
      "location_id": "0",
      "description": "Kendama Demonstration",
      "name": "Kendama Demonstration",
      "image_name": "filler-01",
      "id": 22
    },
    {
      "end_at": "2016-04-16 01:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 12:00 PM",
      "location_id": "0",
      "description": "Grandmaster Seiichi Tanaka founded the San Francisco Taiko Dojo in 1968 and introduced the taiko art form to America. Over the years, Grandmaster Tanaka’s students have traveled around the globe. San Francisco Taiko Dojo still remains the most exciting and dynamic taiko group in the world. Grandmaster Tanaka’s style has developed the taiko from a primitive folk art to a powerful, sophisticated synthesis of rhythm, harmony and body movements. For more information, go to www.sftaiko.com.",
      "name": "San Francisco Taiko Dojo",
      "image_name": "SF Taiko Dojo",
      "id": 25
    },
    {
      "end_at": "2016-04-16 01:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 01:00 PM",
      "location_id": "0",
      "description": "The Rosa Parks Japanese Bicultural Program is the only one of its kind in Northern California. It integrates Japanese language and culture with the San Francisco Unified School District's core curriculum, providing students and their families with a rish educational experience and a \"window to the world\". Japanese is taught by native Japanese-speaking teachers who provide authentic language instruction in the context of cultural experiences and perspectives. Kindergarten, 1st, 2nd, 3rd grade and the JBBP Garage Band will be performing songs in Japanese and English. jbbpsf.org.",
      "name": "Rosa Parks School Japanese Bilingual Bicultural Program",
      "image_name": "filler-04",
      "id": 26
    },
    {
      "end_at": "2016-04-16 01:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 01:30 PM",
      "location_id": "0",
      "description": "Rinka started performing Nihon buyo (classical dance) at San Francisco Japantown's Kimono Day in 2009. Their form is based on the minyo style of dance but also draws inspiration from other types of Nihon buyo. Their choreography includes contemporary and ethnic Japanese folk music.",
      "name": "Rinka Buyo Group",
      "image_name": "maiko",
      "id": 27
    },
    {
      "end_at": "2016-04-16 02:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 01:45 PM",
      "location_id": "0",
      "description": "The tsuzumi is a two-headed Japanese drum with an hourglass-shaped body, and is often found in the music of noh and kabuki theater. The Children’s Tsuzumi Challenge is a six-year-old after-school program, run by NPO Infusion, that teaches elementary school students at the Clarendon School in San Francisco and Willow Creek Academy in Sausalito how to play the drum.",
      "name": "Children's Tsuzumi Challenge",
      "image_name": "",
      "id": 28
    },
    {
      "end_at": "2016-04-16 04:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 02:00 PM",
      "location_id": "0",
      "description": "Performances and Demonstrations from visiting Japan groups",
      "name": "Performances and Demonstrations from visiting Japan groups",
      "image_name": "filler-07",
      "id": 29
    },
    {
      "end_at": "2016-04-16 04:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 04:00 PM",
      "location_id": "0",
      "description": "The San Francisco Okinawa Kenjin-Kai is a social organization serving the local Bay Area community. The goal of the club is to share Okinawan culture with people around the world. Every year, during the Cherry Blossom Festival we perform traditional Okinawan music and dance on the Peace Plaza stage and at the Grand Parade. If you watch and listen closely, you will see that our music, dance, and costumes incorporate cultural influences from Southeast Asia, China, Japan, and the U.S. You will also notice that our performers are of a wide range of ages, generations, ethnicities, and nationalities. Please visit our website at okksf.org\nPhoto by Dave Golden © 2013",
      "name": "San Francisco Okinawa Kenjin Kai",
      "image_name": "okinawa-kenjin-kai",
      "id": 30
    },
    {
      "end_at": "2016-04-16 05:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-16 04:30 PM",
      "location_id": "0",
      "description": "Zanshin Dojo",
      "name": "Zanshin Dojo",
      "image_name": "filler-02",
      "id": 31
    },
    {
      "end_at": "2016-04-17 12:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 11:00 AM",
      "location_id": "0",
      "description": "First established in 1957, will be demonstrating and educating viewers about Kendo, Japanese sword fencing. Come learn and see the modern version of one aspect of how to use the Japanese samurai sword. sanfranciscokendo.org.",
      "name": "San Francisco Kendo",
      "image_name": "filler-07",
      "id": 32
    },
    {
      "end_at": "2016-04-17 12:30 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 12:00 PM",
      "location_id": "0",
      "description": "Enshin Karate",
      "name": "Enshin Karate",
      "image_name": "filler-03",
      "id": 33
    },
    {
      "end_at": "2016-04-17 01:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 12:30 PM",
      "location_id": "0",
      "description": "Shorinji Kempo",
      "name": "Shorinji Kempo",
      "image_name": "filler-04",
      "id": 34
    },
    {
      "end_at": "2016-04-17 04:00 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 03:30 PM",
      "location_id": "0",
      "description": "Tokushima Kenjin Kai",
      "name": "Tokushima Kenjin Kai",
      "image_name": "",
      "id": 35
    },
    {
      "end_at": "2016-04-17 04:45 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 04:00 PM",
      "location_id": "0",
      "description": "Anime Costume Contest and Talent Show",
      "name": "Anime Costume Contest and Talent Show",
      "image_name": "filler-06",
      "id": 36
    },
    {
      "end_at": "2016-04-17 05:15 PM",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 04:45 PM",
      "location_id": "0",
      "description": "We perform the traditional Awa-Odori dance, originating from one of the largest dancing festivals in the world, which attracts 1.3 million tourists to Tokushima, Japan every summer. Formed in October 2013, Sakura-Ren sincerely enjoys performing Awa-Odori all over the San Francisco Bay Area. In 2014, we held 16 performances at Japanese festivals, local schools, churches, and association events accompanied by live instruments and vocals. While holding traditional styles in esteem, we keep enjoying trying new and original ideas. We look forward to seeing you and enjoying dacing and having fun together!",
      "name": "Sakura Ren",
      "image_name": "",
      "id": 37
    },
    {
      "end_at": "",
      "location": "Peace Plaza Stage",
      "start_at": "2016-04-17 05:15 PM",
      "location_id": "0",
      "description": "Raffle Drawing",
      "name": "Raffle Drawing",
      "image_name": "filler-01",
      "id": 38
    },
    {
      "end_at": "2016-04-09 01:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-09 12:00 PM",
      "location_id": "1",
      "description": "Offering shakuhachi instruction by Masayuki Koga, Japanese Music Institute (JMI) is a nonprofit organization that breathes new life into traditional and modern Japanese music. Founded in 1981, JMI has performed and taught for over 30 years in the Bay Area, Canada, Germany, and Japan. For more information on classes in San Francisco (Pine Church), Berkeley, and Richmond (East Bay Center for Performing Arts), visit jmia.org.",
      "name": "Japanese Music Institute of America",
      "image_name": "JCCCNC-01",
      "id": 45
    },
    {
      "end_at": "2016-04-09 02:30 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-09 01:00 PM",
      "location_id": "1",
      "description": "Minyo (Japanese FOlk Dance and Song) has been handed down from generation to generation. These dances evoilved from ancient traditions of dancing and singing to pray for good harvests and honor ancestors. Nearly every district of Japan has a rich heritage of songs that reveal the characteristics of the local people and their history. There are rice planting and fishing songs, as well as songs of carpenters, miners, sailors, and craftsmen. Some lyrics at the Minyo Minbu Festival on will include singing and dancing to Japanese folk songs and shamisen gasso (shamisen mass playing).",
      "name": "Minyo Minbu Festival",
      "image_name": "filler-01",
      "id": 46
    },
    {
      "end_at": "2016-04-09 03:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-09 02:30 PM",
      "location_id": "1",
      "description": "Marimo Kai and Yukari Sakaguchi",
      "name": "Marimo Kai and Yukari Sakaguchi",
      "image_name": "JCCCNC-02",
      "id": 47
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-09 03:00 PM",
      "location_id": "1",
      "description": "The Seiha USA Orchestra is a subsidiary of Seiha Music School of Japan, which is one of the oldest and largest koto school in Japan. The school celebrated its 100th anniversary in 2013. All members have attained honorary titles from Japan\nfor their high skills and artistry in the performance of koto and sangen music.",
      "name": "Northern California Seiha USA Orchestra",
      "image_name": "JCCCNC-03",
      "id": 48
    },
    {
      "end_at": "2016-04-09 07:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-09 06:00 PM",
      "location_id": "1",
      "description": "Shigin is the art of chanting. Japanese or Chinese poems are often sung to express the feeling of joy or sorrow, the beauty of nature, or to offer a spiritual message. ",
      "name": "Shigin (Japanese Poetry in Singing Form)",
      "image_name": "filler-02",
      "id": 49
    },
    {
      "end_at": "2016-04-10 01:30 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-10 12:30 PM",
      "location_id": "1",
      "description": "Seiha Sato Masazuka Kai",
      "name": "Seiha Sato Masazuka Kai",
      "image_name": "filler-03",
      "id": 50
    },
    {
      "end_at": "2016-04-10 02:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-10 01:30 PM",
      "location_id": "1",
      "description": "GenRyu Arts was established in 1995 and has offered Taiko and dance classes at the Japanese Cultural and Community Center of Northern California for over 20 years. GenRyu Arts creates pieces that merge Japanese cultural forms of kumi daiko, dance, and folk songs with new music, spoken word, and visual design in a way that honors community heritage and addresses key issues stemming from the legacy of internment and redevlopment. www.genryuarts.org.",
      "name": "Gen Ryu Arts Presents",
      "image_name": "genryu-arts",
      "id": 51
    },
    {
      "end_at": "2016-04-10 03:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-10 02:00 PM",
      "location_id": "1",
      "description": "Shimaoka Kuzusa Kai",
      "name": "Shimaoka Kuzusa Kai",
      "image_name": "filler-05",
      "id": 52
    },
    {
      "end_at": "2016-04-10 04:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-10 03:00 PM",
      "location_id": "1",
      "description": "Chie Kwon-Treagus",
      "name": "Chie Kwon-Treagus",
      "image_name": "filler-06",
      "id": 53
    },
    {
      "end_at": "2016-04-16 01:30 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-16 01:00 PM",
      "location_id": "1",
      "description": "Edo Ensemble",
      "name": "Edo Ensemble",
      "image_name": "filler-06",
      "id": 54
    },
    {
      "end_at": "2016-04-16 02:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-16 01:30 PM",
      "location_id": "1",
      "description": "Nishikawa Ryu",
      "name": "Nishikawa Ryu",
      "image_name": "filler-07",
      "id": 55
    },
    {
      "end_at": "2016-04-16 02:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-16 01:30 PM",
      "location_id": "1",
      "description": "Nagata Dance Studio",
      "name": "Nagata Dance Studio",
      "image_name": "filler-01",
      "id": 56
    },
    {
      "end_at": "2016-04-16 03:30 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-16 02:30 PM",
      "location_id": "1",
      "description": "Azama Honryu Seifu Ishisenkai USA, Kinuko Mototake Dance Academy And Eisa Shima Daiko",
      "name": "Azama Honryu Seifu Ishisenkai USA",
      "image_name": "filler-02",
      "id": 57
    },
    {
      "end_at": "2016-04-16 09:00 PM",
      "location": "JCCCNC Stage",
      "start_at": "2016-04-16 07:00 PM",
      "location_id": "1",
      "description": "Grandmaster Seiichi Tanaka founded the San Francisco Taiko Dojo in 1968 and introduced the taiko art form to America. Over the years, Grandmaster Tanaka’s students have traveled around the globe. San Francisco Taiko Dojo still remains the most exciting and dynamic taiko group in the world. Grandmaster Tanaka’s style has developed the taiko from a primitive folk art to a powerful, sophisticated synthesis of rhythm, harmony and body movements. For more information, go to www.sftaiko.com.",
      "name": "Taiko Festival by San Francisco Taiko Dojo",
      "image_name": "SF Taiko Dojo",
      "id": 60
    },
    {
      "end_at": "2016-04-09 05:00 PM",
      "location": "JCCCNC Exhibit Spaces",
      "start_at": "2016-04-09 09:00 AM",
      "location_id": "5",
      "description": "Ikebana is one of the most famed Japanese traditional arts, and traces its origin back hundreds of years. The Ikebana Teachers Federation consists of seven different schools and will display works of leading teachers throughout the Bay Area at the Cherry Blossom Festival.",
      "name": "Ikebana Exhibit on April 09",
      "image_name": "ikebana",
      "id": 62
    },
    {
      "end_at": "2016-04-10 05:00 PM",
      "location": "JCCCNC - Issei Memorial Hall",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "5",
      "description": "Ikebana is one of the most famed Japanese traditional arts, and traces its origin back hundreds of years. The Ikebana Teachers Federation consists of seven different schools and will display works of leading teachers throughout the Bay Area at the Cherry Blossom Festival.",
      "name": "Ikebana Exhibit on April 09 and 10",
      "image_name": "ikebana",
      "id": 63
    },
    {
      "end_at": "2016-04-16 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (in the Issei Memorial Hall)",
      "start_at": "2016-04-16 11:00 AM",
      "location_id": "5",
      "description": "Bonsai, the art of growing miniature trees and plants, is a manifestation of the Japanese people’s love of nature. The objective of bonsai is to capture the grandeur and beauty of nature on a reduced scale. The bonsai and suiseki display at the festival represent local bonsai clubs and the Bonsai Garden at Lake Merritt in Oakland.",
      "name": "Bonsai/Suiseki Exhbit on April 18",
      "image_name": "bonsai",
      "id": 64
    },
    {
      "end_at": "2016-04-17 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (Issei Memorial Hall)",
      "start_at": "2016-04-17 11:00 AM",
      "location_id": "5",
      "description": "Bonsai, the art of growing miniature trees and plants, is a manifestation of the Japanese people’s love of nature. The objective of bonsai is to capture the grandeur and beauty of nature on a reduced scale. The bonsai and suiseki display at the festival represent local bonsai clubs and the Bonsai Garden at Lake Merritt in Oakland.",
      "name": "Bonsai/Suiseki Exhbit on April 19",
      "image_name": "bonsai",
      "id": 65
    },
    {
      "end_at": "2016-04-09 05:00 PM",
      "location": "JCCCNC Exhibit Spaces (Classroom one)",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "5",
      "description": "The dolls are made from Japanese washi paper and cotton. It takes about two to three hours to make a simple doll. Most washi ningyo do not have eyes, a nose or a mouth.",
      "name": "Washi Ningyo Classes on April 09",
      "image_name": "ningyo",
      "id": 66
    },
    {
      "end_at": "2016-04-10 05:00 PM",
      "location": "JCCCNC Exhibit Spaces (Classroom One)",
      "start_at": "2016-04-10 11:00 AM",
      "location_id": "5",
      "description": "The dolls are made from Japanese washi paper and cotton. It takes about two to three hours to make a simple doll. Most washi ningyo do not have eyes, a nose or a mouth.",
      "name": "Washi Ningyo Classes on April 10",
      "image_name": "ningyo",
      "id": 67
    },
    {
      "end_at": "2016-04-16 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (Classroom One)",
      "start_at": "2016-04-16 11:00 AM",
      "location_id": "5",
      "description": "The Bay Area Shodo Group allows people who enjoy Japanese calligraphy (shodo) to connect with each other. At their exhibit they will showcase the works of experienced calligraphers and Japanese students. Those in attendance will also have an opportunity to try shodo themselves.",
      "name": "Shodo on April 16",
      "image_name": "shodo",
      "id": 68
    },
    {
      "end_at": "2016-04-19 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (Classroom One)",
      "start_at": "2016-04-19 11:00 AM",
      "location_id": "5",
      "description": "The Bay Area Shodo Group allows people who enjoy Japanese calligraphy (shodo) to connect with each other.\nAt their exhibit they will showcase the works of experienced calligraphers and Japanese students. Those in attendance will also have an opportunity to try shodo themselves.",
      "name": "Shodo on April 17",
      "image_name": "shodo",
      "id": 69
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (classroom two)",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "5",
      "description": "The traditions of silk and metal thread embroidery came to Japan 1,600 years ago from China via Korea. After more than a thousand years, the materials, stitches, color schemes, and designs became uniquely Japanese. ",
      "name": "Shishu (Japanese Embroidery) on April 09",
      "image_name": "shishu",
      "id": 70
    },
    {
      "end_at": "2016-04-10 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (classroom two)",
      "start_at": "2016-04-10 11:00 AM",
      "location_id": "5",
      "description": "The traditions of silk and metal thread embroidery came to Japan 1,600 years ago from China via Korea. After more than a thousand years, the materials, stitches, color schemes, and designs became uniquely Japanese. ",
      "name": "Shishu on April 10",
      "image_name": "shishu",
      "id": 71
    },
    {
      "end_at": "2016-04-16 04:00 PM",
      "location": "JCCCNC Exhibit Spaces (classroom two)",
      "start_at": "2016-04-16 11:00 AM",
      "location_id": "5",
      "description": "The San Francisco Karuta Kai, the Satsuki Kai Karuta Kai and the San Francisco Murasame Kai will demonstrate karuta, a Japanese classical poetry card game. Karuta is also called “hyakunin isshu” in Japanese, which means “one hundred poems by one hundred poets.” It combines 100 tanka (a form of Japanese poetry) from the 7th century to the 13th century, which were incorporated into a card game in the 16th century. The game consists of a reader reciting the first three lines of a poem and the players competing to see who can grab the corresponding card the fastest. Anyone who can read hiragana can join the game, but others who can't may play bosan mekuri, which only uses cards with pictures.",
      "name": "Karuta Card Game",
      "image_name": "karuta",
      "id": 72
    },
    {
      "end_at": "2016-04-10 03:00 PM",
      "location": "Tateuchi Auditorium",
      "start_at": "2016-04-10 01:00 PM",
      "location_id": "6",
      "description": "Omotosenke Damonkai",
      "name": "Omotosenke Damonkai",
      "image_name": "Tea Ceremony-1",
      "id": 73
    },
    {
      "end_at": "2016-04-09 03:00 PM",
      "location": "Tateuchi Auditorium",
      "start_at": "2016-04-09 01:00 PM",
      "location_id": "6",
      "description": "Ura Senke Tankokai",
      "name": "Ura Senke Tankokai",
      "image_name": "Tea Ceremony-1",
      "id": 74
    },
    {
      "end_at": "2016-04-16 03:00 PM",
      "location": "Tateuchi Auditorium",
      "start_at": "2016-04-16 12:00 PM",
      "location_id": "6",
      "description": "Urasenke Foundation",
      "name": "Urasenke Foundation",
      "image_name": "Tea Ceremony-1",
      "id": 75
    },
    {
      "end_at": "2016-04-09 05:00 PM",
      "location": "National JACL",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "7",
      "description": "The art of folding paper has been practiced for centuries in Japan as a tradition handed down from parents to their children. Origami is an art where anything is possible. Origami clubs have been formed all around the world and folders meet often to share models and techniques. Members of San Francisco’s Bay Area Rapid Folders and other Northern California folders will be teaching during the Festival and welcome everyone to come and try your hand at origami.",
      "name": "Origami Exhibit and Demonstration",
      "image_name": "origami",
      "id": 76
    },
    {
      "end_at": "2016-04-09 05:00 PM",
      "location": "Union Bank Community Room",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "8",
      "description": "Born of the kendo schools within San Francisco’s early Japanese American community, the Northern California Japanese Sword Club now boasts an international membership and stands as one of the premier organizations for the student and collector of fine Japanese swords and armor. The annual San Francisco To-ken Taikai is the largest sword show and sale in the United States. For more information, speak to our members or visit www.NCJSC.org.",
      "name": "Japanese Sword Club on April 09",
      "image_name": "JapaneseSwordClub",
      "id": 77
    },
    {
      "end_at": "2016-04-10 05:00 PM",
      "location": "Union Bank Community Room",
      "start_at": "2016-04-10 11:00 AM",
      "location_id": "8",
      "description": "Born of the kendo schools within San Francisco’s early Japanese American community, the Northern California Japanese Sword Club now boasts an international membership and stands as one of the premier organizations for the student and collector of fine Japanese swords and armor. The annual San Francisco To-ken Taikai is the largest sword show and sale in the United States. For more information, speak to our members or visit www.NCJSC.org.",
      "name": "Japanese Sword Club on April 10",
      "image_name": "JapaneseSwordClub",
      "id": 78
    },
    {
      "end_at": "2016-04-16 05:00 PM",
      "location": "Union Bank Community Room",
      "start_at": "2016-04-16 11:00 AM",
      "location_id": "8",
      "description": "The Mataro doll is a type of kimekomi doll (wooden dolls dressed in kimono), and it's a product of the Edo period (1600-1867). Mataro Kanabayashi I (1897-1984) studied and perfected the dollmaking technique. He was the founder of the Mataro Doll Craft Academy in Tokyo. The Mataro dolls take their themes and ideas often from the Heian period (784-0991). Many of the dolls are based on the characters from “The Tale of Genji.” There are also dolls representing characters from Japanese folktales, noh dramas and kabuki plays. www.sfmiyabikai.org",
      "name": "Mataro Dolls Exhibit on April 16",
      "image_name": "filler-01",
      "id": 79
    },
    {
      "end_at": "2016-04-17 05:00 PM",
      "location": "Union Bank Community Room",
      "start_at": "2016-04-17 11:00 AM",
      "location_id": "8",
      "description": "e Mataro doll is a type of kimekomi doll (wooden dolls dressed in kimono), and it's a product of the Edo period (1600-1867). Mataro Kanabayashi I (1897-1984) studied and perfected the dollmaking technique. He was the founder of the Mataro Doll Craft Academy in Tokyo. The Mataro dolls take their themes and ideas often from the Heian period (784-0991). Many of the dolls are based on the characters from “The Tale of Genji.” There are also dolls representing characters from Japanese folktales, noh dramas and kabuki plays. www.sfmiyabikai.org",
      "name": "Mataro Dolls Exhibit on April 17",
      "image_name": "filler-02",
      "id": 80
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "Sequoia's Auditorium",
      "start_at": "2016-04-09 03:00 PM",
      "location_id": "9",
      "description": "Japanese American Music with Pianist Hugo Kitano and Chellist Leo Kitano",
      "name": "Japanese American Music Program",
      "image_name": "filler-03",
      "id": 81
    },
    {
      "end_at": "2016-04-09 05:00 PM",
      "location": "National Japanese American Historical Society",
      "start_at": "2016-04-09 12:00 PM",
      "location_id": "10",
      "description": "April 09, 10, 16, 17",
      "name": "110 Years of San Francisco’s Japantown and Japanese Sword Exhibit",
      "image_name": "filler-04",
      "id": 82
    },
  {
      "end_at": "2016-04-17 05:00 PM",
      "location": "Kinokuniya Bookstore",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "10",
      "description": "Biri Biri - Washi Paper Painting Everyday 04/09, 10, 16, 17",
      "name": "Biri Biri - Washi Paper Painting",
      "image_name": "filler-04",
      "id": 82
    },
    {/* The calender has the Sword exhibit and 110 yrs of Japantown put together */
      "end_at": "2016-04-16 05:00 PM",
      "location": "National Japanese American Historical Society",
      "start_at": "2016-04-16 12:00 PM",
      "location_id": "10",
      "description": "Japanese Sword Society displays",
      "name": "Japanese Sword Society displays",
      "image_name": "JapaneseSwordClub",
      "id": 83
    },
    {
      "end_at": "2016-04-09 05:45 PM",
      "location": "Hokka Nichibei-Kai Tea Ceremoney",
      "start_at": "2016-04-09 02:45 PM",
      "location_id": "09",
      "description": "Urasenke – 12:45p, 1:45p, 2:45p, 3:45p\nCHA-NO-YU (literally, hot water for tea), or SA-DÔ (also CHA-DÔ, the Way of Tea), is one of the most highly refined traditional arts of Japan. The Cherry Blossom Festival’s chanoyu demonstrations are on Saturday, April 09 and Sunday, April 12, and are under the auspices of the Northern California/ San Francisco Chapters of the Ura-Senke and Omote-Senke Schools. Each session will be about 30 minutes in length, and there will be tea cakes and tea served to a few members of the audience afterwards.",
      "name": "Tea at Ocha Room “Kan So An” by Tea Society",
      "image_name": "Tea Ceremony",
      "id": 84
    },
    {
      "end_at": "2016-04-10 05:45 PM",
      "location": "Hokka Nichibei-Kai Tea Ceremoney",
      "start_at": "2016-04-10 12:45 PM",
      "location_id": "09",
      "description": "Omoto Senke – 12:45p, 1:45p, 2:45p, 3:45p\nCHA-NO-YU (literally, hot water for tea), or SA-DÔ (also CHA-DÔ, the Way of Tea), is one of the most highly refined traditional arts of Japan. The Cherry Blossom Festival’s chanoyu demonstrations are on Saturday, April 09 and Sunday, April 12, and are under the auspices of the Northern California/ San Francisco Chapters of the Ura-Senke and Omote-Senke Schools. Each session will be about 30 minutes in length, and there will be tea cakes and tea served to a few members of the audience afterwards.",
      "name": "Tea at Ocha Room “Kan So An” by Tea Society",
      "image_name": "Tea Ceremony",
      "id": 85
    },
    {
      "end_at": "2016-04-09 01:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-09 12:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Pulse",
      "image_name": "",
      "id": 86
    },
    {
      "end_at": "2016-04-09 02:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-09 01:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Freaky Deaky",
      "image_name": "",
      "id": 87
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-09 03:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Rendevzous",
      "image_name": "Rendevzous",
      "id": 88
    },
  {
      "end_at": "2016-04-09 05:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-09 04:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Sapo",
      "image_name": "",
      "id": 88
    },
    {
      "end_at": "2016-04-10 01:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-10 12:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Get Lucky",
      "image_name": "",
      "id": 89
    },
    {
      "end_at": "2016-04-10 02:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-10 01:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Humanistic",
      "image_name": "Humanistic",
      "id": 90
    },
    {
      "end_at": "2016-04-10 04:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-10 03:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "In the Mix",
      "image_name": "",
      "id": 91
    },
    {
      "end_at": "2016-04-10 05:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-10 04:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Jest Jammin'",
      "image_name": "Jest Jammin",
      "id": 92
    },
    {
      "end_at": "2016-04-16 01:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-16 12:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Bernal Beat",
      "image_name": "",
      "id": 93
    },
    {
      "end_at": "2016-04-16 02:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-16 01:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "D-Groove",
      "image_name": "D. Groove",
      "id": 94
    },
    {
      "end_at": "2016-04-16 04:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-16 03:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Groove Foundation",
      "image_name": "",
      "id": 95
    },
    {
      "end_at": "2016-04-16 05:30 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-16 04:30 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "LP (Live Performance)",
      "image_name": "Live Performance",
      "id": 96
    },
    {
      "end_at": "2016-04-19 04:00 PM",
      "location": "Webster Street Stage",
      "start_at": "2016-04-19 03:00 PM",
      "location_id": "2",
      "description": "The Webster Street Comcast Stage began more than ten years ago to promote Bay Area contemporary musicians and performing artists. It has provided Asian Americans, as well as other ethnic entertainers, a venue to showcase their talents. From hip-hop to Polynesian dancers, jazz to Top 40 R&B, acapella, to taiko, the Webster Street Comcast Stage lineup has always been exciting to watch. Come join us in a full day of music and fun!",
      "name": "Live Performance",
      "image_name": "Live Performance",
      "id": 97
    },
    {
      "end_at": "2016-04-09 07:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 10:00 AM",
      "location_id": "3",
      "description": "Scavenger Hunt",
      "name": "Scavenger Hunt on April 09",
      "image_name": "Scavenger Hunt",
      "id": 98
    },
    {
      "end_at": "2016-04-09 11:30 AM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 11:00 AM",
      "location_id": "3",
      "description": "Kendama",
      "name": "Kendama USA",
      "image_name": "Kendama",
      "id": 99
    },
    {
      "end_at": "2016-04-09 12:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 11:30 AM",
      "location_id": "3",
      "description": "Mini Games",
      "name": "Mini Games",
      "image_name": "",
      "id": 100
    },
    {
      "end_at": "2016-04-09 12:40 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 12:30 PM",
      "location_id": "3",
      "description": "J-Fashion Walk",
      "name": "J-Fashion Walk",
      "image_name": "",
      "id": 101
    },
    {
      "end_at": "2016-04-09 01:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 12:40 PM",
      "location_id": "3",
      "description": "MaruQ Fashion Show",
      "name": "MaruQ Fashion Show",
      "image_name": "",
      "id": 102
    },
    {
      "end_at": "2016-04-09 01:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 01:00 PM",
      "location_id": "3",
      "description": "Fanimaids",
      "name": "Fanimaids",
      "image_name": "",
      "id": 103
    },
  {
      "end_at": "2016-04-09 02:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 01:30 PM",
      "location_id": "3",
      "description": "DJ Coco",
      "name": "DJ Coco",
      "image_name": "",
      "id": 115
    },
  {
      "end_at": "2016-04-09 03:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 02:00 PM",
      "location_id": "3",
      "description": "DJ Grimecraft",
      "name": "DJ Grimecraft",
      "image_name": "",
      "id": 116
    },
    {
      "end_at": "2016-04-09 03:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 03:00 PM",
      "location_id": "3",
      "description": "Ti@Mi Dance Performance",
      "name": "Ti@Mi Dance Performance",
      "image_name": "Ti@Mi Dance Performance",
      "id": 104
    },
    {
      "end_at": "2016-04-09 04:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 03:30 PM",
      "location_id": "3",
      "description": "Lolita Fashion Contest",
      "name": "Lolita Fashion Contest",
      "image_name": "",
      "id": 105
    },
  {
      "end_at": "2016-04-09 04:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 04:00 PM",
      "location_id": "3",
      "description": "Cosplay Workshop Q&A Panel",
      "name": "Cosplay Workshop Q&A Panel",
      "image_name": "",
      "id": 105
    },
  {
      "end_at": "2016-04-09 05:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 04:30 PM",
      "location_id": "3",
      "description": "Cosplay Masquerade",
      "name": "Cosplay Masquerade",
      "image_name": "",
      "id": 105
    },
    {
      "end_at": "2016-04-09 06:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-09 05:30 PM",
      "location_id": "3",
      "description": "After Party",
      "name": "After Party",
      "image_name": "After Party",
      "id": 106
    },
    {
      "end_at": "2016-04-10 11:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 11:00 AM",
      "location_id": "3",
      "description": "Kendama USA",
      "name": "Kendama USA",
      "image_name": "Kendama",
      "id": 107
    },
    {
      "end_at": "2016-04-10 12:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 11:30 AM",
      "location_id": "3",
      "description": "Lip Sync Battle",
      "name": "Lip Sync Battle",
      "image_name": "",
      "id": 108
    },
    {
      "end_at": "2016-04-10 12:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 12:00 PM",
      "location_id": "3",
      "description": "Games and Prizes on April 10",
      "name": "Games and Prizes on April 10",
      "image_name": "Games and Prizes-1",
      "id": 109
    },
    {
      "end_at": "2016-04-10 01:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 12:30 PM",
      "location_id": "3",
      "description": "Majikuru Ma Chan 2",
      "name": "Majikuru Ma Chan 2",
      "image_name": "TBD",
      "id": 111
    },
    {
      "end_at": "2016-04-10 02:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 01:30 PM",
      "location_id": "3",
      "description": "Akai Sky",
      "name": "Akai Sky",
      "image_name": "",
      "id": 112
    },
    {
      "end_at": "2016-04-10 04:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 02:00 PM",
      "location_id": "3",
      "description": "Super Soul Bros",
      "name": "Super Soul Bros",
      "image_name": "TBD",
      "id": 113
    },
    {
      "end_at": "2016-04-10 05:00 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 04:00 PM",
      "location_id": "3",
      "description": "Cosplay Chess on April 10",
      "name": "Cosplay Chess on April 10",
      "image_name": "Cosplay Chess-1",
      "id": 111
    },
  {
      "end_at": "2016-04-10 05:30 PM",
      "location": "Sakura 360 Stage",
      "start_at": "2016-04-10 05:00 PM",
      "location_id": "3",
      "description": "Mini Gamess",
      "name": "Mini Games",
      "image_name": "TBD",
      "id": 114
    },
  ];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
