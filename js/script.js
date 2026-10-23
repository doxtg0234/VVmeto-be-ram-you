(function(){
  const dropdown = document.getElementById('languageDropdown');
  const trigger = document.getElementById('languageTrigger');
  const menu = document.getElementById('languageMenu');
  const current = document.getElementById('languageCurrent');
  const flag = document.getElementById('languageFlag');
  const options = Array.from(document.querySelectorAll('.language-option'));

  const dictionaries = {"en":{"language":"Language","eyebrow":"Your anime discovery destination","visit":"Visit Site","how":"How It Works","explore":"Explore categories","pick":"Pick a genre and start exploring","trending":"Trending","trending_p":"Popular anime and fresh discoveries.","comedy":"Comedy","comedy_p":"Light, fun and entertaining anime.","horror":"Horror","horror_p":"Dark anime stories for a late-night watch.","romance":"Romance","romance_p":"Anime stories built around love and emotion.","goal":"Our goal","simple":"Simple","simple_p":"Clean discovery","fast":"Fast","fast_p":"Built for browsing","responsive":"Responsive","responsive_p":"Any device","intro":"7Anime helps anime fans explore anime titles, genres and anime-related information from around the web — with a fast, modern interface built for every screen.","experience":"The 7Anime experience","simpler":"A simpler way to discover anime online.","about_intro":"7Anime is a modern anime discovery website designed to help visitors find anime-related information and publicly available resources across the web.","external_disclaimer":"7Anime does not directly host anime files on its own servers. It may organize and display information or links publicly available online. Third-party pages are independently operated and may change at any time.","getting_started":"How to get started","getting_started_p":"Start from the homepage and explore the available anime categories. If search is available, enter an anime title or keyword to find relevant information.","understanding":"Understanding external resources","understanding_p":"Links to third-party websites are outside the control of 7Anime. A link does not mean 7Anime owns or endorses the destination. Review the destination website’s terms, privacy policy and copyright rules before using it.","designed":"Designed for every screen","designed_p":"The responsive layout is optimized for smartphones, tablets, laptops and desktop computers. Navigation, typography, cards and spacing automatically adapt to smaller screens for a smoother browsing experience.","goal_heading":"Our goal","goal_p":"Our goal is to make anime discovery clean, fast and enjoyable, with useful information and a polished interface.","public_resources":"Public resources","public_resources_p":"Organized links and information from publicly accessible online sources.","mobile_ready":"Mobile ready","mobile_ready_p":"A responsive experience for phones, tablets and desktop screens.","fast_interface":"Fast interface","fast_interface_p":"Lightweight layout with modern visual effects and simple navigation.","footer_tagline":"Discover anime. Browse smarter.","privacy":"Privacy","privacy_policy":"Privacy Policy","privacy_intro":"We respect your privacy. 7Anime may use cookies and similar technologies to improve website functionality and browsing experience.","cookies":"Cookies","cookies_p":"Cookies can remember preferences and help us understand general site usage. You can manage or disable cookies through your browser settings.","information":"Information","information_p":"We do not ask you to provide unnecessary personal information simply to browse this website. Third-party services or linked websites may have their own privacy policies.","updates":"Updates","updates_p":"This Privacy Policy may be updated when the website's features or practices change.","got_it":"Got it","cookie_text":"We use cookies to improve your experience and analyze site traffic.","accept":"Accept","close":"Close","browse_mood":"Browse your mood","advertisement":"Advertisement","opening_site":"Opening site","redirecting":"Redirecting in 10 seconds","seo_heading":"Find anime by genre","seo_content":"Explore anime genres, trending anime, comedy anime, horror anime, and romance anime. Use these category guides to discover new series, compare themes, and find anime that matches your interests. 7Anime provides anime discovery information and links to public resources; availability and details on third-party sites may change."},"bn":{"language":"ভাষা","eyebrow":"আপনার অ্যানিমে আবিষ্কারের গন্তব্য","visit":"সাইট ভিজিট করুন","how":"কীভাবে কাজ করে","explore":"ক্যাটাগরি দেখুন","pick":"একটি জেনার বেছে নিয়ে শুরু করুন","trending":"ট্রেন্ডিং","trending_p":"জনপ্রিয় অ্যানিমে ও নতুন আবিষ্কার।","comedy":"কমেডি","comedy_p":"হালকা, মজার ও বিনোদনমূলক অ্যানিমে।","horror":"হরর","horror_p":"রাতের জন্য ভৌতিক অ্যানিমে গল্প।","romance":"রোমান্স","romance_p":"ভালোবাসা ও আবেগকে ঘিরে অ্যানিমে গল্প।","goal":"আমাদের লক্ষ্য","simple":"সহজ","simple_p":"সহজে খুঁজে দেখুন","fast":"দ্রুত","fast_p":"ব্রাউজিংয়ের জন্য তৈরি","responsive":"রেসপন্সিভ","responsive_p":"যেকোনো ডিভাইসে","intro":"7Anime অ্যানিমে অনুরাগীদের ওয়েবে অ্যানিমে টাইটেল, জেনার এবং অ্যানিমে-সম্পর্কিত তথ্য সহজে খুঁজে পেতে সাহায্য করে।","experience":"7Anime-এর অভিজ্ঞতা","simpler":"অনলাইনে অ্যানিমে খুঁজে পাওয়ার সহজ উপায়।","about_intro":"7Anime একটি আধুনিক অ্যানিমে ডিসকভারি ওয়েবসাইট, যা দর্শকদের ওয়েবে অ্যানিমে-সম্পর্কিত তথ্য এবং প্রকাশ্যে উপলভ্য রিসোর্স খুঁজে পেতে সাহায্য করে।","external_disclaimer":"7Anime নিজস্ব সার্ভারে সরাসরি অ্যানিমে ফাইল হোস্ট করে না। এটি অনলাইনে প্রকাশ্য তথ্য বা লিংক দেখাতে পারে। তৃতীয় পক্ষের পেজ স্বাধীনভাবে পরিচালিত হয়।","getting_started":"কীভাবে শুরু করবেন","getting_started_p":"হোমপেজ থেকে শুরু করে অ্যানিমে ক্যাটাগরি দেখুন। সার্চ সুবিধা থাকলে অ্যানিমের নাম বা কীওয়ার্ড লিখে তথ্য খুঁজুন।","understanding":"বাহ্যিক রিসোর্স বোঝা","understanding_p":"তৃতীয় পক্ষের ওয়েবসাইটের লিংক 7Anime-এর নিয়ন্ত্রণের বাইরে। লিংক দেখানো মানেই 7Anime সেই সাইটের মালিক বা সমর্থক নয়।","designed":"সব স্ক্রিনের জন্য তৈরি","designed_p":"রেসপন্সিভ লেআউটটি স্মার্টফোন, ট্যাবলেট, ল্যাপটপ ও ডেস্কটপের জন্য অপ্টিমাইজ করা। ছোট স্ক্রিনে আরও স্বচ্ছন্দ ব্রাউজিংয়ের জন্য নেভিগেশন, টাইপোগ্রাফি, কার্ড ও স্পেসিং স্বয়ংক্রিয়ভাবে মানিয়ে যায়।","goal_heading":"আমাদের লক্ষ্য","goal_p":"আমাদের লক্ষ্য অ্যানিমে আবিষ্কারকে পরিষ্কার, দ্রুত ও আনন্দদায়ক করা।","public_resources":"পাবলিক রিসোর্স","public_resources_p":"সর্বসাধারণের জন্য উন্মুক্ত অনলাইন উৎসের সংগঠিত লিংক ও তথ্য।","mobile_ready":"মোবাইল প্রস্তুত","mobile_ready_p":"ফোন, ট্যাবলেট ও ডেস্কটপের জন্য রেসপন্সিভ অভিজ্ঞতা।","fast_interface":"দ্রুত ইন্টারফেস","fast_interface_p":"আধুনিক ভিজ্যুয়াল ইফেক্ট ও সহজ নেভিগেশনসহ হালকা লেআউট।","footer_tagline":"অ্যানিমে আবিষ্কার করুন। স্মার্টভাবে ব্রাউজ করুন।","privacy":"গোপনীয়তা","privacy_policy":"প্রাইভেসি পলিসি","privacy_intro":"আমরা আপনার গোপনীয়তাকে সম্মান করি। ভালো ব্রাউজিং অভিজ্ঞতার জন্য 7Anime কুকি ও অনুরূপ প্রযুক্তি ব্যবহার করতে পারে।","cookies":"কুকি","cookies_p":"কুকি আপনার পছন্দ মনে রাখতে এবং সাধারণ সাইট ব্যবহার বুঝতে সাহায্য করতে পারে। ব্রাউজার সেটিংস থেকে কুকি পরিচালনা বা বন্ধ করতে পারেন।","information":"তথ্য","information_p":"শুধু এই ওয়েবসাইট ব্রাউজ করার জন্য আমরা অপ্রয়োজনীয় ব্যক্তিগত তথ্য চাই না। তৃতীয় পক্ষের সার্ভিস বা লিংক করা সাইটের নিজস্ব প্রাইভেসি পলিসি থাকতে পারে।","updates":"আপডেট","updates_p":"ওয়েবসাইটের ফিচার বা কার্যপ্রণালী পরিবর্তিত হলে এই প্রাইভেসি পলিসি আপডেট হতে পারে।","got_it":"বুঝেছি","cookie_text":"আপনার অভিজ্ঞতা উন্নত করতে এবং সাইট ট্রাফিক বিশ্লেষণ করতে আমরা কুকি ব্যবহার করি।","accept":"গ্রহণ করুন","close":"বন্ধ করুন","browse_mood":"আপনার পছন্দ অনুযায়ী ব্রাউজ করুন","advertisement":"বিজ্ঞাপন","opening_site":"সাইট খোলা হচ্ছে","redirecting":"১০ সেকেন্ডের মধ্যে রিডাইরেক্ট হবে","seo_heading":"ধরন অনুযায়ী অ্যানিমে আবিষ্কার করুন","seo_content":"জনপ্রিয় অ্যানিমে, কমেডি, হরর ও রোমান্স অ্যানিমের বিভাগ ঘুরে দেখুন। আপনার পছন্দের সঙ্গে মেলে এমন নতুন সিরিজ খুঁজতে এই বিভাগগুলো ব্যবহার করুন। 7Anime অ্যানিমে-সম্পর্কিত তথ্য ও প্রকাশ্যে উপলভ্য উৎসের লিংক দেখায়; তৃতীয় পক্ষের সাইটে তথ্য ও প্রাপ্যতা বদলাতে পারে।"},"hi":{"language":"भाषा","eyebrow":"आपकी एनीमे खोज की पसंदीदा जगह","visit":"साइट देखें","how":"यह कैसे काम करता है","explore":"श्रेणियाँ देखें","pick":"एक शैली चुनें और शुरुआत करें","trending":"ट्रेंडिंग","trending_p":"लोकप्रिय एनीमे और नई खोजें।","comedy":"कॉमेडी","comedy_p":"हल्के-फुल्के और मनोरंजक एनीमे।","horror":"हॉरर","horror_p":"देर रात देखने के लिए डरावनी एनीमे कहानियाँ।","romance":"रोमांस","romance_p":"प्यार और भावनाओं पर आधारित एनीमे कहानियाँ।","goal":"हमारा लक्ष्य","simple":"सरल","simple_p":"आसान खोज","fast":"तेज़","fast_p":"ब्राउज़िंग के लिए बनाया गया","responsive":"रिस्पॉन्सिव","responsive_p":"हर डिवाइस पर","intro":"7Anime एनीमे प्रशंसकों को वेब पर एनीमे टाइटल, शैलियाँ और एनीमे से जुड़ी जानकारी आसानी से खोजने में मदद करता है।","experience":"7Anime का अनुभव","simpler":"ऑनलाइन एनीमे खोजने का आसान तरीका।","about_intro":"7Anime एक आधुनिक एनीमे डिस्कवरी वेबसाइट है, जो दर्शकों को वेब पर एनीमे से जुड़ी जानकारी और सार्वजनिक संसाधन खोजने में मदद करती है।","external_disclaimer":"7Anime अपने सर्वर पर सीधे एनीमे फ़ाइलें होस्ट नहीं करता। यह ऑनलाइन उपलब्ध सार्वजनिक जानकारी या लिंक दिखा सकता है। थर्ड-पार्टी पेज स्वतंत्र रूप से संचालित होते हैं।","getting_started":"कैसे शुरू करें","getting_started_p":"होमपेज से शुरुआत करें और एनीमे श्रेणियाँ देखें। सर्च सुविधा उपलब्ध हो तो एनीमे का नाम या संबंधित कीवर्ड दर्ज करें।","understanding":"बाहरी संसाधनों को समझना","understanding_p":"थर्ड-पार्टी वेबसाइटों के लिंक 7Anime के नियंत्रण से बाहर हैं। लिंक दिखने का अर्थ यह नहीं कि 7Anime उस वेबसाइट का मालिक या समर्थक है।","designed":"हर स्क्रीन के लिए डिज़ाइन किया गया","designed_p":"रिस्पॉन्सिव लेआउट स्मार्टफोन, टैबलेट, लैपटॉप और डेस्कटॉप के लिए अनुकूलित है। बेहतर ब्राउज़िंग के लिए नेविगेशन, टाइपोग्राफी, कार्ड और स्पेसिंग छोटी स्क्रीन पर अपने आप अनुकूलित होते हैं।","goal_heading":"हमारा लक्ष्य","goal_p":"हमारा लक्ष्य एनीमे खोज को साफ़, तेज़ और आनंददायक बनाना है।","public_resources":"सार्वजनिक संसाधन","public_resources_p":"सार्वजनिक रूप से उपलब्ध ऑनलाइन स्रोतों से व्यवस्थित लिंक और जानकारी।","mobile_ready":"मोबाइल के लिए तैयार","mobile_ready_p":"फोन, टैबलेट और डेस्कटॉप के लिए रिस्पॉन्सिव अनुभव।","fast_interface":"तेज़ इंटरफ़ेस","fast_interface_p":"आधुनिक विज़ुअल इफेक्ट और सरल नेविगेशन वाला हल्का लेआउट।","footer_tagline":"एनीमे खोजें। बेहतर ब्राउज़ करें।","privacy":"गोपनीयता","privacy_policy":"गोपनीयता नीति","privacy_intro":"हम आपकी गोपनीयता का सम्मान करते हैं। बेहतर ब्राउज़िंग अनुभव के लिए 7Anime कुकीज़ और समान तकनीकों का उपयोग कर सकता है.","cookies":"कुकीज़","cookies_p":"कुकीज़ आपकी पसंद याद रखने और साइट के सामान्य उपयोग को समझने में मदद कर सकती हैं। आप ब्राउज़र सेटिंग्स से इन्हें प्रबंधित या बंद कर सकते हैं।","information":"जानकारी","information_p":"सिर्फ इस वेबसाइट को ब्राउज़ करने के लिए हम अनावश्यक व्यक्तिगत जानकारी नहीं मांगते। थर्ड-पार्टी सेवाओं या लिंक की गई वेबसाइटों की अपनी गोपनीयता नीतियां हो सकती हैं।","updates":"अपडेट","updates_p":"वेबसाइट की सुविधाएं या प्रक्रियाएं बदलने पर यह गोपनीयता नीति अपडेट की जा सकती है।","got_it":"समझ गया","cookie_text":"आपके अनुभव को बेहतर बनाने और साइट ट्रैफिक का विश्लेषण करने के लिए हम कुकीज़ का उपयोग करते हैं।","accept":"स्वीकार करें","close":"बंद करें","browse_mood":"अपनी पसंद के अनुसार ब्राउज़ करें","advertisement":"विज्ञापन","opening_site":"साइट खोली जा रही है","redirecting":"10 सेकंड में रीडायरेक्ट किया जाएगा","seo_heading":"शैली के अनुसार Anime खोजें","seo_content":"ट्रेंडिंग Anime, Comedy, Horror और Romance जैसी श्रेणियाँ देखें। अपनी पसंद के अनुसार नई सीरीज़ खोजने के लिए इन श्रेणियों का उपयोग करें। 7Anime anime-संबंधित जानकारी और सार्वजनिक संसाधनों के लिंक उपलब्ध कराता है; तीसरी-पक्ष वेबसाइटों पर जानकारी और उपलब्धता बदल सकती है।"},"es":{"language":"Idioma","eyebrow":"Tu destino para descubrir anime","visit":"Visitar sitio","how":"Cómo funciona","explore":"Explorar categorías","pick":"Elige un género y empieza","trending":"Tendencias","trending_p":"Anime populares y nuevos descubrimientos.","comedy":"Comedia","comedy_p":"Anime ligeros, divertidos y entretenidos.","horror":"Terror","horror_p":"Historias de anime oscuras para la noche.","romance":"Romance","romance_p":"Historias de anime sobre amor y emociones.","goal":"Nuestro objetivo","simple":"Simple","simple_p":"Descubrimiento fácil","fast":"Rápido","fast_p":"Creado para navegar","responsive":"Adaptable","responsive_p":"Cualquier dispositivo","intro":"7Anime ayuda a los fans a explorar títulos, géneros e información relacionada con anime en la web, con una interfaz rápida y moderna.","experience":"La experiencia 7Anime","simpler":"Una forma más sencilla de descubrir anime online.","about_intro":"7Anime es un sitio moderno para descubrir anime y encontrar información relacionada y recursos disponibles públicamente en la web.","external_disclaimer":"7Anime no aloja directamente archivos de anime en sus propios servidores. Puede organizar información o enlaces disponibles públicamente. Los sitios de terceros son independientes.","getting_started":"Cómo empezar","getting_started_p":"Empieza en la página de inicio y explora las categorías de anime. Si hay búsqueda disponible, introduce un título o palabra clave.","understanding":"Cómo entender los recursos externos","understanding_p":"Los enlaces a sitios de terceros están fuera del control de 7Anime. Un enlace no significa que 7Anime sea propietario o respalde el destino.","designed":"Diseñado para todas las pantallas","designed_p":"El diseño adaptable está optimizado para móviles, tabletas, portátiles y ordenadores. La navegación, tipografía, tarjetas y espacios se adaptan automáticamente a pantallas pequeñas.","goal_heading":"Nuestro objetivo","goal_p":"Nuestro objetivo es que descubrir anime sea sencillo, rápido y agradable.","public_resources":"Recursos públicos","public_resources_p":"Enlaces e información organizados de fuentes online disponibles públicamente.","mobile_ready":"Listo para móviles","mobile_ready_p":"Experiencia adaptable para teléfonos, tabletas y ordenadores.","fast_interface":"Interfaz rápida","fast_interface_p":"Diseño ligero con efectos modernos y navegación sencilla.","footer_tagline":"Descubre anime. Navega mejor.","privacy":"Privacidad","privacy_policy":"Política de privacidad","privacy_intro":"Respetamos tu privacidad. 7Anime puede usar cookies y tecnologías similares para mejorar el sitio y la experiencia de navegación.","cookies":"Cookies","cookies_p":"Las cookies pueden recordar preferencias y ayudar a entender el uso general del sitio. Puedes gestionarlas o desactivarlas desde tu navegador.","information":"Información","information_p":"No te pedimos información personal innecesaria para navegar por este sitio. Los servicios o sitios de terceros pueden tener sus propias políticas de privacidad.","updates":"Actualizaciones","updates_p":"Esta política de privacidad puede actualizarse cuando cambien las funciones o prácticas del sitio.","got_it":"Entendido","cookie_text":"Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.","accept":"Aceptar","close":"Cerrar","browse_mood":"Explora según tu estilo","advertisement":"Publicidad","opening_site":"Abriendo el sitio","redirecting":"Redirigiendo en 10 segundos","seo_heading":"Encuentra anime por género","seo_content":"Explora categorías de anime popular, comedia, terror y romance para descubrir nuevas series y temas que coincidan con tus intereses. 7Anime ofrece información sobre anime y enlaces a recursos públicos; los detalles y la disponibilidad de sitios externos pueden cambiar."},"fr":{"language":"Langue","eyebrow":"Votre destination de découverte d’anime","visit":"Visiter le site","how":"Comment ça marche","explore":"Explorer les catégories","pick":"Choisissez un genre et commencez","trending":"Tendances","trending_p":"Anime populaires et nouvelles découvertes.","comedy":"Comédie","comedy_p":"Des anime légers, amusants et divertissants.","horror":"Horreur","horror_p":"Des histoires d’anime sombres pour la nuit.","romance":"Romance","romance_p":"Des histoires d’anime autour de l’amour et des émotions.","goal":"Notre objectif","simple":"Simple","simple_p":"Découverte facile","fast":"Rapide","fast_p":"Conçu pour naviguer","responsive":"Responsive","responsive_p":"Tout appareil","intro":"7Anime aide les fans à découvrir des titres, genres et informations liés aux anime sur le Web, avec une interface rapide et moderne.","experience":"L’expérience 7Anime","simpler":"Une façon simple de découvrir des anime en ligne.","about_intro":"7Anime est un site moderne de découverte d’anime qui aide les visiteurs à trouver des informations et ressources publiques sur le Web.","external_disclaimer":"7Anime n’héberge pas directement de fichiers anime sur ses serveurs. Il peut présenter des informations ou liens publics. Les sites tiers sont indépendants.","getting_started":"Comment commencer","getting_started_p":"Commencez sur la page d’accueil et explorez les catégories d’anime. Si la recherche est disponible, saisissez un titre ou un mot-clé.","understanding":"Comprendre les ressources externes","understanding_p":"Les liens vers des sites tiers échappent au contrôle de 7Anime. Un lien ne signifie pas que 7Anime possède ou approuve le site.","designed":"Conçu pour tous les écrans","designed_p":"La mise en page responsive est optimisée pour les smartphones, tablettes, ordinateurs portables et de bureau. La navigation, la typographie, les cartes et les espacements s’adaptent automatiquement aux petits écrans.","goal_heading":"Notre objectif","goal_p":"Notre objectif est de rendre la découverte d’anime simple, rapide et agréable.","public_resources":"Ressources publiques","public_resources_p":"Liens et informations organisés provenant de sources accessibles au public.","mobile_ready":"Adapté au mobile","mobile_ready_p":"Une expérience responsive pour téléphones, tablettes et ordinateurs.","fast_interface":"Interface rapide","fast_interface_p":"Une mise en page légère avec des effets modernes et une navigation simple.","footer_tagline":"Découvrez des anime. Naviguez mieux.","privacy":"Confidentialité","privacy_policy":"Politique de confidentialité","privacy_intro":"Nous respectons votre vie privée. 7Anime peut utiliser des cookies et technologies similaires pour améliorer le site.","cookies":"Cookies","cookies_p":"Les cookies peuvent mémoriser vos préférences et aider à comprendre l’utilisation générale du site. Vous pouvez les gérer ou les désactiver dans votre navigateur.","information":"Informations","information_p":"Nous ne demandons pas d’informations personnelles inutiles pour simplement parcourir ce site. Les services ou sites tiers peuvent avoir leurs propres politiques de confidentialité.","updates":"Mises à jour","updates_p":"Cette politique peut être mise à jour lorsque les fonctionnalités ou pratiques du site changent.","got_it":"Compris","cookie_text":"Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.","accept":"Accepter","close":"Fermer","browse_mood":"Parcourez selon votre humeur","advertisement":"Publicité","opening_site":"Ouverture du site","redirecting":"Redirection dans 10 secondes","seo_heading":"Trouver des anime par genre","seo_content":"Explorez les catégories anime tendance, comédie, horreur et romance pour découvrir de nouvelles séries selon vos goûts. 7Anime présente des informations sur les anime et des liens vers des ressources publiques ; les détails et la disponibilité des sites tiers peuvent changer."},"de":{"language":"Sprache","eyebrow":"Dein Ziel zum Entdecken von Anime","visit":"Website besuchen","how":"So funktioniert es","explore":"Kategorien entdecken","pick":"Wähle ein Genre und starte","trending":"Trends","trending_p":"Beliebte Anime und neue Entdeckungen.","comedy":"Komödie","comedy_p":"Leichte, lustige und unterhaltsame Anime.","horror":"Horror","horror_p":"Düstere Anime-Geschichten für die Nacht.","romance":"Romantik","romance_p":"Anime-Geschichten über Liebe und Gefühle.","goal":"Unser Ziel","simple":"Einfach","simple_p":"Einfache Entdeckung","fast":"Schnell","fast_p":"Zum Browsen entwickelt","responsive":"Responsiv","responsive_p":"Jedes Gerät","intro":"7Anime hilft Anime-Fans, Titel, Genres und Informationen rund um Anime im Web zu entdecken – mit einer schnellen, modernen Oberfläche.","experience":"Das 7Anime-Erlebnis","simpler":"Anime online einfacher entdecken.","about_intro":"7Anime ist eine moderne Anime-Entdeckungswebsite, die Besuchern hilft, Anime-Informationen und öffentlich verfügbare Ressourcen im Web zu finden.","external_disclaimer":"7Anime hostet keine Anime-Dateien direkt auf eigenen Servern. Die Website kann öffentlich verfügbare Informationen oder Links anzeigen. Drittanbieter-Websites werden unabhängig betrieben.","getting_started":"So starten Sie","getting_started_p":"Öffne die Startseite und entdecke Anime-Kategorien. Falls die Suche verfügbar ist, gib einen Anime-Titel oder ein Stichwort ein.","understanding":"Externe Ressourcen verstehen","understanding_p":"Links zu Websites Dritter liegen außerhalb der Kontrolle von 7Anime. Ein Link bedeutet nicht, dass 7Anime die Zielseite besitzt oder unterstützt.","designed":"Für jeden Bildschirm entwickelt","designed_p":"Das responsive Layout ist für Smartphones, Tablets, Laptops und Desktop-Computer optimiert. Navigation, Typografie, Karten und Abstände passen sich automatisch an kleinere Bildschirme an.","goal_heading":"Unser Ziel","goal_p":"Unser Ziel ist es, Anime einfach, schnell und angenehm entdecken zu lassen.","public_resources":"Öffentliche Ressourcen","public_resources_p":"Organisierte Links und Informationen aus öffentlich zugänglichen Online-Quellen.","mobile_ready":"Mobil optimiert","mobile_ready_p":"Responsive Nutzung auf Smartphones, Tablets und Desktop-Geräten.","fast_interface":"Schnelle Oberfläche","fast_interface_p":"Leichtes Layout mit modernen Effekten und einfacher Navigation.","footer_tagline":"Entdecke Anime. Stöbere smarter.","privacy":"Datenschutz","privacy_policy":"Datenschutzerklärung","privacy_intro":"Wir respektieren deine Privatsphäre. 7Anime kann Cookies und ähnliche Technologien einsetzen, um Website und Nutzungserlebnis zu verbessern.","cookies":"Cookies","cookies_p":"Cookies können Einstellungen speichern und helfen, die allgemeine Nutzung der Website zu verstehen. Sie können Cookies in Ihren Browsereinstellungen verwalten oder deaktivieren.","information":"Informationen","information_p":"Wir verlangen keine unnötigen persönlichen Daten, nur um diese Website zu nutzen. Dienste oder verlinkte Websites Dritter können eigene Datenschutzrichtlinien haben.","updates":"Aktualisierungen","updates_p":"Diese Datenschutzerklärung kann aktualisiert werden, wenn sich Funktionen oder Praktiken der Website ändern.","got_it":"Verstanden","cookie_text":"Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und den Website-Traffic zu analysieren.","accept":"Akzeptieren","close":"Schließen","browse_mood":"Nach Stimmung stöbern","advertisement":"Werbung","opening_site":"Website wird geöffnet","redirecting":"Weiterleitung in 10 Sekunden","seo_heading":"Anime nach Genre finden","seo_content":"Entdecke Kategorien für angesagte Anime, Comedy, Horror und Romance, um neue Serien und passende Themen zu finden. 7Anime bietet animebezogene Informationen und Links zu öffentlichen Ressourcen; Angaben und Verfügbarkeit externer Seiten können sich ändern."},"ar":{"language":"اللغة","eyebrow":"وجهتك لاكتشاف الأنمي","visit":"زيارة الموقع","how":"كيف يعمل","explore":"استكشف الفئات","pick":"اختر نوعًا وابدأ الاستكشاف","trending":"الرائج","trending_p":"أنمي شائع واكتشافات جديدة.","comedy":"كوميديا","comedy_p":"أنمي خفيف وممتع وترفيهي.","horror":"رعب","horror_p":"قصص أنمي مظلمة للمشاهدة ليلًا.","romance":"رومانسية","romance_p":"قصص أنمي عن الحب والمشاعر.","goal":"هدفنا","simple":"بسيط","simple_p":"اكتشاف سهل","fast":"سريع","fast_p":"مصمم للتصفح","responsive":"متجاوب","responsive_p":"أي جهاز","intro":"يساعد 7Anime محبي الأنمي على استكشاف العناوين والأنواع والمعلومات المتعلقة بالأنمي عبر الويب من خلال واجهة سريعة وحديثة.","experience":"تجربة 7Anime","simpler":"طريقة أسهل لاكتشاف الأنمي عبر الإنترنت.","about_intro":"7Anime موقع حديث لاكتشاف الأنمي، يساعد الزوار في العثور على معلومات الأنمي والموارد المتاحة للعامة عبر الويب.","external_disclaimer":"لا يستضيف 7Anime ملفات الأنمي مباشرة على خوادمه. قد يعرض معلومات أو روابط متاحة للعامة. وتُدار مواقع الجهات الخارجية بشكل مستقل.","getting_started":"كيف تبدأ","getting_started_p":"ابدأ من الصفحة الرئيسية واستكشف فئات الأنمي. إذا كان البحث متاحًا، أدخل عنوان أنمي أو كلمة مفتاحية.","understanding":"فهم الموارد الخارجية","understanding_p":"روابط مواقع الجهات الخارجية خارج نطاق سيطرة 7Anime. ولا يعني عرض رابط أن 7Anime يملك الموقع أو يؤيده.","designed":"مصمم لكل شاشة","designed_p":"تم تحسين التصميم المتجاوب للهواتف والأجهزة اللوحية وأجهزة الكمبيوتر المحمولة والمكتبية. تتكيف عناصر التنقل والخطوط والبطاقات والمسافات تلقائيًا مع الشاشات الصغيرة.","goal_heading":"هدفنا","goal_p":"هدفنا جعل اكتشاف الأنمي سهلًا وسريعًا وممتعًا.","public_resources":"موارد عامة","public_resources_p":"روابط ومعلومات منظمة من مصادر متاحة للعامة عبر الإنترنت.","mobile_ready":"جاهز للجوال","mobile_ready_p":"تجربة متجاوبة للهواتف والأجهزة اللوحية وأجهزة الكمبيوتر.","fast_interface":"واجهة سريعة","fast_interface_p":"تصميم خفيف مع مؤثرات حديثة وتنقل بسيط.","footer_tagline":"اكتشف الأنمي. تصفح بذكاء.","privacy":"الخصوصية","privacy_policy":"سياسة الخصوصية","privacy_intro":"نحترم خصوصيتك. قد يستخدم 7Anime ملفات تعريف الارتباط وتقنيات مشابهة لتحسين الموقع وتجربة التصفح.","cookies":"ملفات تعريف الارتباط","cookies_p":"يمكن لملفات تعريف الارتباط حفظ التفضيلات والمساعدة في فهم الاستخدام العام للموقع. يمكنك إدارتها أو تعطيلها من إعدادات المتصفح.","information":"المعلومات","information_p":"لا نطلب معلومات شخصية غير ضرورية لمجرد تصفح الموقع. قد تكون للخدمات أو المواقع التابعة لجهات خارجية سياسات خصوصية خاصة بها.","updates":"التحديثات","updates_p":"قد يتم تحديث سياسة الخصوصية عند تغير ميزات الموقع أو ممارساته.","got_it":"فهمت","cookie_text":"نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور على الموقع.","accept":"قبول","close":"إغلاق","browse_mood":"تصفح حسب مزاجك","advertisement":"إعلان","opening_site":"جارٍ فتح الموقع","redirecting":"سيتم التحويل خلال 10 ثوانٍ","seo_heading":"ابحث عن الأنمي حسب النوع","seo_content":"تصفح فئات الأنمي الرائج والكوميديا والرعب والرومانسية لاكتشاف مسلسلات جديدة تناسب اهتماماتك. يقدم 7Anime معلومات عن الأنمي وروابط إلى مصادر عامة؛ وقد تتغير تفاصيل المواقع الخارجية ومدى توفرها."},"zh":{"language":"语言","eyebrow":"你的动漫发现目的地","visit":"访问网站","how":"如何运作","explore":"探索分类","pick":"选择类型并开始探索","trending":"热门","trending_p":"热门动漫与新发现。","comedy":"喜剧","comedy_p":"轻松、有趣的动漫。","horror":"恐怖","horror_p":"适合深夜观看的黑暗动漫故事。","romance":"爱情","romance_p":"围绕爱情与情感展开的动漫故事。","goal":"我们的目标","simple":"简单","simple_p":"轻松发现","fast":"快速","fast_p":"为浏览而设计","responsive":"响应式","responsive_p":"任何设备","intro":"7Anime 帮助动漫爱好者通过快速、现代的界面探索网络上的动漫作品、类型及相关信息。","experience":"7Anime 体验","simpler":"更轻松地在线发现动漫。","about_intro":"7Anime 是一个现代动漫发现网站，帮助访客查找网络上的动漫相关信息和公开资源。","external_disclaimer":"7Anime 不会在自己的服务器上直接托管动漫文件。网站可能整理并展示公开可用的信息或链接。第三方网站独立运营。","getting_started":"如何开始","getting_started_p":"从主页开始浏览动漫分类。如果提供搜索功能，请输入动漫名称或关键词查找相关信息。","understanding":"了解外部资源","understanding_p":"第三方网站链接不受 7Anime 控制。显示链接并不表示 7Anime 拥有或认可目标网站。","designed":"为所有屏幕而设计","designed_p":"响应式布局针对手机、平板、笔记本电脑和台式机进行了优化。导航、字体、卡片和间距会自动适应小屏幕，让浏览更加顺畅。","goal_heading":"我们的目标","goal_p":"我们的目标是让动漫发现过程简单、快速且愉快。","public_resources":"公共资源","public_resources_p":"来自公开可访问在线来源的整理链接和信息。","mobile_ready":"移动端就绪","mobile_ready_p":"适用于手机、平板和桌面的响应式体验。","fast_interface":"快速界面","fast_interface_p":"轻量布局、现代视觉效果和简单导航。","footer_tagline":"发现动漫，更智能地浏览。","privacy":"隐私","privacy_policy":"隐私政策","privacy_intro":"我们尊重您的隐私。7Anime 可能使用 Cookie 等技术来改善网站功能和浏览体验。","cookies":"Cookie","cookies_p":"Cookie 可以记住偏好并帮助我们了解网站的一般使用情况。您可以通过浏览器设置管理或禁用 Cookie。","information":"信息","information_p":"仅浏览本网站时，我们不会要求您提供不必要的个人信息。第三方服务或链接网站可能有自己的隐私政策。","updates":"更新","updates_p":"当网站功能或做法发生变化时，本隐私政策可能会更新。","got_it":"知道了","cookie_text":"我们使用 Cookie 来改善您的体验并分析网站流量。","accept":"接受","close":"关闭","browse_mood":"按你的心情浏览","advertisement":"广告","opening_site":"正在打开网站","redirecting":"将在 10 秒后跳转","seo_heading":"按类型查找动漫","seo_content":"浏览热门动漫、喜剧、恐怖和浪漫等分类，发现符合兴趣的新作品。7Anime 提供动漫相关信息和公开资源链接；第三方网站的详情与可用性可能发生变化。"},"ja":{"language":"言語","eyebrow":"アニメを発見するための場所","visit":"サイトを見る","how":"使い方","explore":"カテゴリーを探索","pick":"ジャンルを選んで探索を始める","trending":"トレンド","trending_p":"人気アニメと新しい発見。","comedy":"コメディ","comedy_p":"軽快で楽しいアニメ。","horror":"ホラー","horror_p":"深夜に楽しめるダークなアニメ。","romance":"ロマンス","romance_p":"愛と感情を描いたアニメ。","goal":"私たちの目標","simple":"シンプル","simple_p":"簡単に発見","fast":"高速","fast_p":"ブラウジング向け","responsive":"レスポンシブ","responsive_p":"あらゆるデバイス","intro":"7Anime は、アニメファンがウェブ上の作品タイトル、ジャンル、アニメ関連情報をすばやく快適に探せるサイトです。","experience":"7Anime の体験","simpler":"オンラインでアニメを簡単に見つける方法。","about_intro":"7Anime は、ウェブ上のアニメ関連情報や一般公開されているリソースを見つけやすくする現代的なアニメ発見サイトです。","external_disclaimer":"7Anime はアニメファイルを自社サーバーに直接ホストしていません。公開情報やリンクを整理して表示する場合があります。第三者サイトは独立して運営されています。","getting_started":"はじめ方","getting_started_p":"ホームページからアニメのカテゴリーを探してください。検索機能がある場合は、アニメタイトルやキーワードを入力してください。","understanding":"外部リソースについて","understanding_p":"第三者サイトへのリンクは 7Anime の管理外です。リンク表示は、そのサイトを所有または推奨することを意味しません。","designed":"すべての画面に対応","designed_p":"レスポンシブレイアウトはスマートフォン、タブレット、ノートパソコン、デスクトップ向けに最適化されています。ナビゲーション、文字、カード、余白は小さな画面に自動で適応します。","goal_heading":"私たちの目標","goal_p":"目標は、アニメの発見を簡単で速く楽しいものにすることです。","public_resources":"公開リソース","public_resources_p":"一般公開されているオンラインソースから整理したリンクと情報。","mobile_ready":"モバイル対応","mobile_ready_p":"スマートフォン、タブレット、デスクトップに対応したレスポンシブ体験。","fast_interface":"高速インターフェース","fast_interface_p":"モダンな視覚効果とシンプルなナビゲーションを備えた軽量レイアウト。","footer_tagline":"アニメを発見。スマートに閲覧。","privacy":"プライバシー","privacy_policy":"プライバシーポリシー","privacy_intro":"プライバシーを尊重しています。7Anime はサイトと閲覧体験の改善に Cookie などの技術を使用する場合があります。","cookies":"Cookie","cookies_p":"Cookie は設定を記憶し、サイトの一般的な利用状況を理解するのに役立ちます。ブラウザ設定から管理または無効化できます。","information":"情報","information_p":"このサイトを閲覧するだけで不要な個人情報を求めることはありません。第三者サービスやリンク先には独自のプライバシーポリシーがある場合があります。","updates":"更新","updates_p":"サイトの機能や運用が変わった場合、このプライバシーポリシーを更新することがあります。","got_it":"了解","cookie_text":"快適な利用とサイトトラフィックの分析のために Cookie を使用します。","accept":"同意する","close":"閉じる","browse_mood":"気分に合わせて探す","advertisement":"広告","opening_site":"サイトを開いています","redirecting":"10秒後に移動します","seo_heading":"ジャンル別アニメガイド","seo_content":"人気アニメ、コメディ、ホラー、恋愛などのカテゴリーから、好みに合う新しいシリーズを探しましょう。7Animeはアニメ関連情報と公開リソースへのリンクを提供します。外部サイトの情報や利用可能性は変更される場合があります。"}};

  const meta = {
    en:{name:"English",flag:"🇺🇸"},
    bn:{name:"বাংলা",flag:"🇧🇩"},
    hi:{name:"हिन्दी",flag:"🇮🇳"},
    es:{name:"Español",flag:"🇪🇸"},
    fr:{name:"Français",flag:"🇫🇷"},
    de:{name:"Deutsch",flag:"🇩🇪"},
    ar:{name:"العربية",flag:"🇦🇪"},
    zh:{name:"中文",flag:"🇨🇳"},
    ja:{name:"日本語",flag:"🇯🇵"}
  };

  if (!dropdown || !trigger || !menu || !current || !flag) return;

  const safeStorage = {
    get(key, fallback = null){
      try { return localStorage.getItem(key) ?? fallback; } catch(e) { return fallback; }
    },
    set(key, value){
      try { localStorage.setItem(key, value); } catch(e) {}
    }
  };

  function closeDropdown(){
    dropdown.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
  }

  function openDropdown(){
    dropdown.classList.add('open');
    trigger.setAttribute('aria-expanded','true');
  }

  function applyLanguage(lang){
    const selected = dictionaries[lang] ? lang : 'en';
    const dict = dictionaries[selected];
    const info = meta[selected] || meta.en;

    document.documentElement.lang = selected;
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      const key = el.getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });

    current.textContent = info.name;
    flag.textContent = info.flag;

    options.forEach(function(option){
      const active = option.dataset.lang === selected;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-selected', active ? 'true' : 'false');
      option.tabIndex = active ? 0 : -1;
    });

    safeStorage.set('7anime-language', selected);
  }

  options.forEach(function(option){
    option.addEventListener('click', function(){
      applyLanguage(this.dataset.lang);
      closeDropdown();
      trigger.focus();
    });
  });

  trigger.addEventListener('click', function(e){
    e.stopPropagation();
    if (dropdown.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
      const active = options.find(option => option.getAttribute('aria-selected') === 'true');
      if (active) active.focus();
    }
  });

  document.addEventListener('click', function(e){
    if (!dropdown.contains(e.target)) closeDropdown();
  }, {passive:true});

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      closeDropdown();
      return;
    }

    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === trigger) {
      e.preventDefault();
      dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
      return;
    }

    if (!dropdown.classList.contains('open')) return;

    const index = options.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' && index >= 0) {
      e.preventDefault();
      options[(index + 1) % options.length].focus();
    } else if (e.key === 'ArrowUp' && index >= 0) {
      e.preventDefault();
      options[(index - 1 + options.length) % options.length].focus();
    } else if (e.key === 'Home' && index >= 0) {
      e.preventDefault();
      options[0].focus();
    } else if (e.key === 'End' && index >= 0) {
      e.preventDefault();
      options[options.length - 1].focus();
    }
  });

  const saved = safeStorage.get('7anime-language', safeStorage.get('ff-language', 'en'));
  applyLanguage(dictionaries[saved] ? saved : 'en');
})();

(function(){
  const cookie = document.getElementById('cookie');
  const accept = document.getElementById('accept');
  const closeCookie = document.getElementById('close');
  const privacyModal = document.getElementById('privacyModal');
  const privacyClose = document.getElementById('privacyClose');
  const privacyOk = document.getElementById('privacyOk');
  const privacyBackdrop = document.getElementById('privacyBackdrop');

  const safeGet = key => {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  };
  const safeSet = (key, value) => {
    try { localStorage.setItem(key, value); } catch(e) {}
  };

  if (!cookie || !accept || !closeCookie || !privacyModal) return;

  if (!safeGet('ff-cookie')) cookie.classList.add('show');

  function openPrivacy(){
    privacyModal.classList.add('show');
    privacyModal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    if (privacyClose) privacyClose.focus();
  }

  function closePrivacy(){
    privacyModal.classList.remove('show');
    privacyModal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
  }

  accept.addEventListener('click', function(){
    safeSet('ff-cookie','1');
    cookie.classList.remove('show');
    openPrivacy();
  });

  closeCookie.addEventListener('click', function(){
    cookie.classList.remove('show');
  });

  if (privacyClose) privacyClose.addEventListener('click', closePrivacy);
  if (privacyOk) privacyOk.addEventListener('click', closePrivacy);
  if (privacyBackdrop) privacyBackdrop.addEventListener('click', closePrivacy);

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && privacyModal.classList.contains('show')) closePrivacy();
  });
})();

document.querySelectorAll('.genre').forEach(function(card){
  card.addEventListener('pointermove', function(e){
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  }, {passive:true});
});

document.addEventListener('DOMContentLoaded', function(){
  const visitSite = document.getElementById('visitSite');
  const visitLoader = document.getElementById('visitLoader');
  const visitPercent = document.getElementById('visitPercent');
  const ringProgress = document.getElementById('ringProgress');

  if (!visitSite || !visitLoader || !visitPercent || !ringProgress) return;

  let progressFrame = null;
  let redirectTimer = null;

  function stopVisitProgress(){
    if (progressFrame !== null) {
      cancelAnimationFrame(progressFrame);
      progressFrame = null;
    }
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
      redirectTimer = null;
    }
  }

  function resetVisitLoader(){
    stopVisitProgress();
    visitLoader.classList.remove('show');
    visitLoader.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    visitPercent.textContent = '0%';
    ringProgress.style.strokeDashoffset = '314.159';
  }

  window.addEventListener('pageshow', function(event){
    document.body.classList.remove('modal-open');
    document.documentElement.style.overflow = '';
    if (event.persisted) resetVisitLoader();
  });

  window.addEventListener('pagehide', stopVisitProgress, {passive:true});

  visitSite.addEventListener('click', function(event){
    event.preventDefault();
    event.stopImmediatePropagation();

    const encoded = 'L2FwaQ==';
    const destination = atob(encoded);
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const duration = 10000;
    const startedAt = performance.now();

    stopVisitProgress();

    visitLoader.classList.add('show');
    visitLoader.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    ringProgress.style.strokeDasharray = circumference + ' ' + circumference;
    ringProgress.style.strokeDashoffset = circumference;
    visitPercent.textContent = '0%';

    function updateProgress(now){
      const elapsed = Math.min(now - startedAt, duration);
      const ratio = elapsed / duration;
      const percent = Math.floor(ratio * 100);

      visitPercent.textContent = percent + '%';
      ringProgress.style.strokeDashoffset = String(circumference * (1 - ratio));

      if (elapsed < duration) {
        progressFrame = requestAnimationFrame(updateProgress);
      } else {
        progressFrame = null;
        visitPercent.textContent = '100%';
        ringProgress.style.strokeDashoffset = '0';

        redirectTimer = setTimeout(function(){
          redirectTimer = null;
          window.location.href = destination;
        }, 250);
      }
    }

    progressFrame = requestAnimationFrame(updateProgress);
  });
});

window.addEventListener('wheel', function(){}, {passive:true});
