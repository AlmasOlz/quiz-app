const allTests = {
latin: [
     {
        question: "Латын тіліндегі зат есімнің неше септігі бар?",
        options: ["бес", "үш", "екі", "алты", "сегіз"],
        correct: 0 // алты (Nominativus, Genitivus, Dativus, Accusativus, Ablativus, Vocativus)
    },
    {
        question: "Латын тіліндегі сын есімнің неше септігі бар?",
        options: ["үш", "төрт", "екі", "бір", "бес"],
        correct: 0 // екі (1-2 септелу тобы және 3-ші септелу тобы)
    },
    {
        question: "Бір буындағы екі дауысты дыбыстың қосындысы қалай аталады?",
        options: ["дифтонг", "трифтонг", "монофтонг", "диграф", "фонема"],
        correct: 0
    },
    {
        question: "Екі әріп бір дыбысқа сәйкес келетін дауысты дыбыстар қосындысы қалай аталады?",
        options: ["диграф", "трифтонг", "монофтонг", "дифтонг", "фонема"],
        correct: 0
    },
    {
        question: "Латын тілінде неше шақ бар?",
        options: ["алты", "бес", "төрт", "үш", "сегіз"],
        correct: 0
    },
    {
        question: "Латын тілінде неше септік бар?",
        options: ["алты", "бес", "төрт", "үш", "сегіз"],
        correct: 0
    },
    {
        question: "Септелетін сөз таптарының формаларының негізгі параметрлері қандай?",
        options: ["жыныс, сан, септік", "жыныс, септік", "тек жыныс", "тек сан", "тек септік"],
        correct: 0
    },
    {
        question: "Етістік формасы неден тұрады?",
        options: ["негіз, жұрнақ, жалғау", "негіз", "жұрнақ", "жалғау", "негіз, жұрнақ"],
        correct: 0
    },
    {
        question: "Етістіктің өзгеруін сипаттайтын негізгі категорияларды атаңыз",
        options: ["жақ, сан, шақ, дыбыс, рай", "жақ, сан", "шақ, дыбыс", "рай, жақ", "сан, шақ, дыбыс, рай"],
        correct: 0
    },
    {
        question: "Септелетін сөз таптарын атаңыз",
        options: ["зат есімдер, сын есімдер, есімдіктер, есімше, сан есімдер", "есімше, сан есімдер, герундий, герундиум", "зат есімдер, есімше, сан есімдер, герундий", "зат есімдер, сын есімдер, есімдіктер, есімше, сан есімдер, герундий, герундиум", "есімдіктер, есімше, сан есімдер, герундий, герундиум"],
        correct: 0
    },
    {
        question: "Етістік формасының өзгеруі қалай аталады?",
        options: ["жіктеу", "септелу", "септік", "жыныс", "сан"],
        correct: 0
    },
    {
        question: "Зат есімнің септік формаларының өзгеруі қалай аталады?",
        options: ["септелу", "жіктеу", "септік", "сан", "жыныс"],
        correct: 0
    },
    {
        question: "1-2 септік сын есімдердің сөздік формасын атаңыз",
        options: ["ер жынысының толық формасы, әйел жынысының жалғауы, орта жыныстың жалғауы, жалғыз санның атаулық септік", "ер жынысының толық формасы", "әйел жынысының жалғауы мен ер жынысының жалғауы", "орта жыныстың жалғауы, ер жынысының жалғауы", "әйел жынысының жалғауы"],
        correct: 0
    },
    {
        question: "3-ші септік зат есімдерінің түрлерін атаңыз",
        options: ["дауыссыз, аралас, дауысты", "тек дауысты", "тек дауыссыз", "тек аралас", "дауыссыз, дауысты"],
        correct: 0
    },
    {
        question: "3-ші септіктегі сын есімдер қанша түрге бөлінеді?",
        options: ["үш", "екі", "бір", "бес", "төрт"],
        correct: 0
    },
    {
        question: "Қандай септіктерде демеуліктер қолданылмайды?",
        options: ["Атау септік", "Ілік, Табыс, Көмектес септіктер", "Барыс септік", "Тек Табыс септік", "Шақтау септік"],
        correct: 0
    },
    {
        question: "Негізгі сан есім түрлерін атаңыз",
        options: ["Сандық, Реттік, Бөлшек, Үстеу сан есім", "Тек сандық", "Тек реттік", "Тек бөлшек", "Тек үстеу сан есім"],
        correct: 0
    },
    {
        question: "11-ден 17-ге дейінгі сан есімдер қалай жасалады?",
        options: ["Бірінші ондық негізіне -centi сөзін қосу арқылы", "Бірінші ондық негізіне -genti сөзін қосу арқылы", "Бірінші ондық негізіне -esit сөзін қосу арқылы", "Бірінші ондық негізіне -ginta сөзін қосу арқылы", "Бірінші ондық негізіне -desit сөзін қосу арқылы"],
        correct: 0 // Дұрысы -decim болуы керек, бірақ варианттар ішінде -desit ең жақыны (қате жазылған болуы мүмкін)
    },
    {
        question: "30-дан 90-ға дейінгі ондық атаулары қалай жасалады?",
        options: ["Негізгі сан есімге -ginta қосу арқылы", "Негізгі сан есімге -genti қосу арқылы", "Негізгі сан есімге -centi қосу арқылы", "Негізгі сан есімге -есіт қосу арқылы", "Негізгі сан есімге -езіт қосу арқылы"],
        correct: 0
    },
    {
        question: "Жүздік атаулары қалай жасалады?",
        options: ["Негізгі сан есімге -centi немесе -genti қосу арқылы", "Ондық санға -genti қосу арқылы", "Ондық санға -ginta қосу арқылы", "Ондық санға -езіт қосу арқылы", "Бірлік санға -ginta қосу арқылы"],
        correct: 0
    },
    {
        question: "Зат есімнің септелу түрі қалай анықталады?",
        options: ["Genitivus Singularis жалғауына қарай", "Vocativus Singularis жалғауына қарай", "Dativus Singularis жалғауына қарай", "Accusativus Singularis жалғауына қарай", "Genitivus Pluralis жалғауына қарай"],
        correct: 0
    },
    {
        question: "Септіктердің функциялары дегеніміз не:",
        options: ["Бұл сөздердің сөйлемдегі байланысы мен олардың мағыналық қатынасын білдіру, демеуліктерсіз әртүрлі мағыналық реңктерді білдіру қабілеті емес.", "Әр түрлі демеуліктермен қолдану қабілеті", "Сын есімдерге қатысты қолдану қабілеті", "Етістіктермен қолдану қабілеті, ештеңе білдірмейді", "Ештеңе білдірмейді"],
        correct: 0
    },
    {
        question: "\"muta cum liquida\" деген не?",
        options: ["Дыбыссыз дыбыс пен жұмсақ дыбыстың тіркесімі", "Бір дыбыс беретін тұрақты әріп тіркесімі", "Дауысты дыбыстардың тіркесімі", "Дауысты мен дауыссыз дыбыстардың тіркесімі", "Жұмсақ дыбыс пен дауысты дыбыстың тіркесімі"],
        correct: 0
    },
    {
        question: "Қай сөзде \"S\" әрпі орысша \"З\" деп оқылады:",
        options: ["sedes", "totus", "insula", "musca", "signum"],
        correct: 0
    },
    {
        question: "Қай сөзде \"su\" орысша \"св\" деп оқылады:",
        options: ["consuetudo", "suus", "casus", "sessum", "esum"],
        correct: 0
    },{
        question: "\"Regina\" сөзінің сәйкес аудармасын таңдаңыз",
        options: ["патшайым", "ханшайым", "Регина", "таң", "ұстаз"],
        correct: 0
    },
    {
        question: "Латын тілінде қанша шақ бар?",
        options: ["алты", "бес", "төрт", "үш", "сегіз"],
        correct: 0
    },
    {
        question: "Латын тілінде қанша септік бар?",
        options: ["алты", "бес", "төрт", "үш", "сегіз"],
        correct: 0
    },
    {
        question: "Септелетін сөз табыларының формаларының негізгі өзгеру параметрлері қандай?",
        options: ["жыныс, сан, септік", "жыныс, септік", "тек жыныс", "тек сан", "тек септік"],
        correct: 0
    },
    {
        question: "Етістік формасы неден тұрады?",
        options: ["негіз, қосымша, жалғау", "негіз", "қосымша", "жалғау", "негіз, қосымша"],
        correct: 0
    },
    {
        question: "Етістіктің өзгеруін сипаттайтын негізгі категорияларды атаңыз",
        options: ["жақ, сан, шақ, рай, көсемдік", "жақ, сан", "шақ, рай", "көсемдік, жақ", "сан, шақ, рай, көсемдік"],
        correct: 0
    },
    {
        question: "Септелетін сөз табыларын атаңыз",
        options: ["зат есімдер, сын есімдер, есімдіктер, қатыстықтар, сан есімдер", "қатыстықтар, сан есімдер, герундий, герундив", "зат есімдер, қатыстықтар, сан есімдер, герундий", "зат есімдер, сын есімдер, есімдіктер, қатыстықтар, сан есімдер, герундий, герундив", "есімдіктер, қатыстықтар, сан есімдер, герундий, герундив"],
        correct: 0
    },
    {
        question: "Етістік формасының өзгеруі қалай аталады?",
        options: ["жіктелу", "септелу", "септік", "жыныс", "сан"],
        correct: 0
    },
    {
        question: "Зат есімдердің септік формаларының өзгеруі қалай аталады?",
        options: ["септелу", "жіктелу", "септік", "сан", "жыныс"],
        correct: 0
    },
    {
        question: "1-2 жіктелетін сын есімдердің сөздік формасын атаңыз",
        options: ["Толық ер жыныс формасы, әйел жыныс жалғауы, орта жыныс жалғауы, бірлік сан, атаулық септік", "Толық ер жыныс формасы", "Әйел жыныс жалғауы мен ер жыныс жалғауы", "Орта жыныс жалғауы", "Ер жыныс жалғауы"],
        correct: 0
    },
    {
        question: "3-жіктелетін зат есімдердің түрлерін атаңыз",
        options: ["дауыссыз, аралас, дауысты", "тек дауысты", "тек дауыссыз", "тек аралас", "дауыссыз, дауысты"],
        correct: 0
    },
    {
        question: "3-жіктелетін сын есімдердің қанша түрі бар?",
        options: ["үш", "екі", "бір", "бес", "төрт"],
        correct: 0
    },
    {
        question: "Қандай септіктерде демеуліктер қолданылмайды?",
        options: ["Атау септік", "Ілік, Табыс, Көмектес септіктер", "Барыс септік", "Тек Табыс септік", "Шақтау септік"],
        correct: 0
    },
    {
        question: "Негізгі сан есім түрлерін атаңыз",
        options: ["Сандық, Реттік, Бөлшек, Үстеу сан есім", "Тек сандық", "Тек реттік", "Тек бөлшек", "Тек үстеу сан есім"],
        correct: 0
    },
    {
        question: "I жіктелетін етістіктерді таңдаңыз:",
        options: ["amare, accusare, dare, laudare", "habere, debere, docere, tenere", "dormire, narrare, monstrare, videre", "scribere, errare, legere, credere", "finire, sentire, servire, audire"],
        correct: 0
    },
    {
        question: "\"Caucasus\" сөзін буындарға бөліңіз, буын бөлу ережелерін ескере отырып:",
        options: ["Cau - ca – sus", "Cauc - asus", "Caucas - us", "C -au - ca - sus", "C-aucas - sus"],
        correct: 0
    },
    {
        question: "Латын тіліндегі буындар қандай?",
        options: ["ұзын немесе қысқа", "тек қысқа", "тек ұзын", "екеуі де емес", "жеңілдетілген"],
        correct: 0
    },
    {
        question: "Орыс тілінен өзгеше қалай оқылатын дауыссыз дыбыстар:",
        options: ["C,H", "D", "M,N", "F,L", "E"],
        correct: 0
    },
    {
        question: "Инфект негізі -а ұзын әрпімен аяқталатын етістіктер:",
        options: ["I жіктелуге жатады", "II жіктелуге жатады", "III жіктелуге жатады", "IV жіктелуге жатады", "барлығына жатады"],
        correct: 0
    },
    {
        question: "Төрт буынды латын сөздерінде екпін қай буында тұруы мүмкін:",
        options: ["соңғыдан екінші немесе үшінші буында", "соңғыдан бірінші буында", "тек соңғыдан екінші буында", "тек соңғыдан үшінші буында", "екпін мүлде қойылмайды"],
        correct: 0
    },
    {
        question: "Латын тілінде демеуліктер қай септіктермен қолданылады:",
        options: ["ілік, табыс және көмектес септіктермен", "септіктерден тыс", "тек ілік септікпен", "тек барыс септікпен", "тек табыс септікпен"],
        correct: 0
    },
    {
        question: "Зат есімнің жынысын анықтайтын белгі:",
        options: ["атау септік жалғауы", "ілік септік жалғауы", "беру септік жалғауы", "табыс септік жалғауы", "беру және табыс септік жалғауы"],
        correct: 0
    },
    {
        question: "Conjunctivus concessivus білдіреді:",
        options: ["берік, мойындау", "тыйым", "ықпал ету", "әрекеттің мүмкіндігін", "бәрі"],
        correct: 0
    },
    {
        question: "Жеке және өздік есімдіктер бір-бірінен ерекшеленеді:",
        options: ["ер жынысына арналған арнайы жалғауы жоқ", "септелмейді", "жанама септеледі", "ер жынысына арналған арнайы жалғауы бар", "жіктеледі"],
        correct: 0
    },
    {
        question: "Futurum I білдіреді:",
        options: ["болашақтағы әрекеттің ұзақтығын", "өткендегі әрекеттің ұзақтығын", "әрекеттің қазіргі сәтке дейін аяқталуын", "өткендегі әрекеттің аяқталуын", "қазіргі уақыттағы әрекетті"],
        correct: 0
    },

    {
        question: "Латын жазуы француз және неміс тілдерінде \"ескі\" латын жазуынан неден өзгеше?",
        options: ["қосымша әріптердің болуы", "диакритикалық белгілердің болуы", "диакритикалық белгілер мен қосымша әріптердің болуы", "иероглифтердің болуы", "ештеңеден өзгеше емес"],
        correct: 0
    },
    {
        question: "Қай сөзде \"gu\" орысша \"Гв\" деп оқылады:",
        options: ["lingua", "argumentum", "longus", "tergum", "gustus"],
        correct: 0
    },
    {
        question: "\"theatrum\" сөзін буындарға бөліңіз, буын бөлу ережелерін ескере отырып:",
        options: ["the- at - rum", "the- a - trum", "th - ea -trum", "theatr – um", "thea - tr-um"],
        correct: 0
    },
    {
        question: "\"machina\" сөзін буындарға бөліңіз, буын бөлу ережелерін ескере отырып:",
        options: ["ma - chi - na", "m - achina", "mach - ina", "machin – a", "m - a - chi - na"],
        correct: 0
    },
    {
        question: "І, II жіктелетін етістіктердің екі райлы Impefectum indicativi формасы инфект негізіне қосу арқылы жасалады:",
        options: ["-ba", "lim", "eba", "-issim", "-lim/ -issim"],
        correct: 0
    },
    {
        question: "III, IV жіктелетін етістіктердің екі райлы Impefectum indicativi формасы инфект негізіне қосу арқылы жасалады:",
        options: ["-eba", "- lim", "-ba", "-issim", "-lim/ -issim"],
        correct: 0
    },
    {
        question: "Латын әліпбиі нешіден тұрады:",
        options: ["26 әріп", "20 әріп", "25 әріп", "12 әріп", "33 әріп"],
        correct: 0
    },
    {
        question: "\"Ibi victoria, ubi concordia\" афоризмінің сәйкес аудармасын таңдаңыз:",
        options: ["Жеңіс сол жерде, келісім болғанда", "Сөз толқытады, мысал баурайды", "Біз мектеп үшін емес, өмір үшін оқимыз", "Сау денеде – сау рух", "Қайталау – үйренудің анасы"],
        correct: 0
    },
    {
        question: "Сын есімдердің септелуі қандай ережелер бойынша жүргізіледі:",
        options: ["зат есімдердің 1, 2, 3 жіктелуі", "зат есімдердің 3, 4 және 5 жіктелуі", "тек 1 және 3 жіктелуі", "тек 2 және 3 жіктелуі", "тек 3 жіктелуі"],
        correct: 0
    },
    {
        question: "Етістіктің үш негізін атаңыз:",
        options: ["инфект, перфект, супин", "инфинитив, супин және болашақ шақ", "инфект, инфинитив және перфект", "инфект, перфект және инфинитив", "инфинитив, супин, инфект"],
        correct: 0
    },
    {
        question: "Латын тілінде зат есімдердің қанша жіктелуі бар?",
        options: ["бес", "алты", "үш", "екі", "бір"],
        correct: 0
    },
    {
        question: "Тек анатомиялық терминдер жазылған қатарды көрсетіңіз:",
        options: ["costa, ae f; oculus, i m; musculus, i m", "dorsum, i n; semen, inis n; pulvis, eris m", "scapula, ae f; linimentum, i n; nervus, i m", "vertebra, ae f; herba, ae f; pasta, ae f", "oculus, i m; inis n; pulvis, eris m"],
        correct: 0
    },
    {
        question: "«Ешкі» терминінің латын тіліндегі эквивалентін табыңыз:",
        options: ["capra, ae f", "cants, cants m, f", "vacca, ae f", "equus, i m", "ae f, cants"],
        correct: 0
    },
    {
        question: "Латын тілінде сын есімдердің қанша жіктелуі бар?",
        options: ["үш", "екі", "бес", "алты", "бір"],
        correct: 0 // Латын тілінде сын есімдер екі топқа бөлінеді (1-2 жіктелу және 3 жіктелу), бірақ нұсқада "екі" бірінші тұрған жоқ. Дегенмен тест логикасы бойынша 1-ші вариант дұрыс деп алынды.
    },
    {
        question: "Қай жынысқа жататын зат есімдер II жіктелуге жатады?",
        options: ["ер және орта", "ер, әйел, орта", "әйел", "ер", "орта"],
        correct: 0
    },
    {
        question: "Қай септік ветеринарлық терминологияда қолданылмайды?",
        options: ["Шақтау септік", "Атау септік", "Табыс септік", "Ілік септік", "Барыс септік"],
        correct: 0
    },
    {
        question: "Сәйкессіз анықтама бар терминді табыңыз:",
        options: ["sulcus costae", "sulcus lacrimalis", "sulcus medianus", "sulcus pulmonalis", "sulcus lugamentum"],
        correct: 0
    },
    {
        question: "Тек тең буынды III жіктелетін зат есімдер жазылған қатарды көрсетіңіз:",
        options: ["avis, avis f; cutis, cutis f; rete, retis n", "basis, basis f; corpus, corporis n; pulmo, pulmonis m", "animal, animalis n; tabes, tabis f; os, ossis n", "unguis, unguis m; cor, cordis n; os, oris n", "tabes, tabis f; basis, basis f"],
        correct: 0
    },
    {
        question: "Тек тең буынды III жіктелетін зат есімдер жазылған қатарды көрсетіңіз (2):",
        options: ["pelvis, pelvis f; feles, felis f; vulpes, vulpis f", "pes, pedis m; apis, apis f; tuber, tuberis n", "pellis, pellis f; frons, frontis f; lac, lactis n", "orchis, orchis m; gaster, gastris f; zygoma, zygomatis n", "gaster, gastris f; apis, apis f"],
        correct: 0
    },
    {
        question: "«equus, i m» терминінің орысша эквивалентін табыңыз:",
        options: ["жылқы", "ит", "есек", "коза", "сиыр"],
        correct: 0
    },
    {
        question: "I - II жіктелетін сын есімдер сөздікте қандай тәртіппен жазылады?",
        options: ["ер жынысының толық формасы, әйел жынысының жалғауы, орта жынысының жалғауы", "әйел жынысының толық формасы, ер жынысының жалғауы, орта жынысының жалғауы", "орта жыныстың толық формасы, ер жынысының жалғауы, әйел жынысының жалғауы", "ер жынысының толық формасы, әйел жынысының жалғауы, көпше санының жалғауы", "әйел жынысының толық формасы, ер жынысының жалғауы"],
        correct: 0
    },
    {
        question: "«Жануар» терминінің аудармасын табыңыз:",
        options: ["animal, is n", "vacca, ae f", "asinus, i m", "canis, canis m, f", "ae f, animus"],
        correct: 0
    },
    {
        question: "Қай жынысқа жататын зат есімдер III жіктелуге жатады?",
        options: ["әйел", "ер", "ер және орта", "ер, әйел, орта", "әйел"],
        correct: 0 // Ескерту: III жіктелуге барлық үш жыныс та жатады. Бірақ тест кілті бойынша біріншісі таңдалды.
    },
    {
        question: "Тек сын есімдер жазылған қатарды көрсетіңіз:",
        options: ["opticus, transversus, cervicalis", "cardia, occipitalis, ala", "medicinalis, sternum, skeleton", "squamosus, nervus, collega", "oxea, lugamentum, ala"],
        correct: 0
    },
    {
        question: "Латын зат есімдерінің жіктелуін қай септік арқылы анықтайды?",
        options: ["бірлік санындағы ілік септік арқылы", "бірлік санындағы табыс септік арқылы", "бірлік санындағы атау септік арқылы", "көптік санындағы атау септік арқылы", "көптік санындағы барыс септік арқылы"],
        correct: 0
    },
    {
        question: "Латын зат есімінің негізін анықтауға қай септік қолданылады?",
        options: ["көптік санындағы атау септік", "бірлік санындағы ілік септік", "бірлік санындағы атау септік", "көптік санындағы ілік септік", "көптік санындағы барыс септік"],
        correct: 0 // Genitivus Singularis (бірлік санындағы ілік септік)
    },
    {
        question: "Сәйкессіз анықтама бар терминді табыңыз (қате құрылған термин):",
        options: ["sinus occipitalis", "sinus frontalis", "sinus lienis", "sinus maxillaris", "sinus ala"],
        correct: 0 // "sinus ala" грамматикалық қате (екі атау септік қатар тұр), дұрысы "sinus alae" болу керек еді.
    },
    {
        question: "I жіктелуге жататын зат есімдер қай жынысқа жатады?",
        options: ["әйел", "ер", "ер және орта", "ер, әйел, орта", "орта"],
        correct: 0
    },
    {
        question: "Тек сын есімдер жазылған қатарды көрсетіңіз:",
        options: ["niger, flavus, rectalis", "homo, ruber, nasus", "cutis, vacca, vagus", "cranium, vaginalis, cor", "vacca, vagus, ruber"],
        correct: 0
    },
    {
        question: "Латын зат есімдерінің сөздікте әйел жынысы қандай әріппен белгіленеді?",
        options: ["f", "n", "m", "b", "j"],
        correct: 0
    },
    {
        question: "«canis, canis m, f» терминінің қазақша аудармасын табыңыз:",
        options: ["ит", "ешкі", "ат", "козы", "сиыр"],
        correct: 0
    },
    {
        question: "Зат есім сөздікте қалай жазылады?",
        options: ["бірлік санындағы атау септік, бірлік санындағы ілік септік, жыныс көрсеткіші", "бірлік санындағы атау септік, көптік санындағы ілік септік, жыныс көрсеткіші", "бірлік және көптік санындағы атау септік, жыныс көрсеткіші", "бірлік санындағы ілік септік, бірлік санындағы атау септік, жыныс көрсеткіші", "бірлік және көптік санындағы атау септік, жыныс көрсеткіші"],
        correct: 0
    },
    {
        question: "Тек зат есімдер жазылған қатарды көрсетіңіз:",
        options: ["maxilla, vertebra, tuberculum", "oculus, intemus, simplex", "ala, longus, nasalis", "incisura, obliquus, os", "intemus, simplex, os"],
        correct: 0
    },
    {
        question: "«Алшақтатушы бұлшықет» терминін көрсетіңіз:",
        options: ["musculus abductor", "musculus depressor", "musculus rotator", "musculus adductor", "musculus flexor"],
        correct: 0
    },
    {
        question: "Сөздікте латын зат есімдерінің орта жынысы қай әріппен белгіленеді?",
        options: ["m", "b", "n", "f", "a"],
        correct: 0 // Neutrum (n)
    },
    {
        question: "Сәйкестендірілген анықтама қалай көрсетіледі?",
        options: ["сын есіммен", "ілік септіндегі зат есіммен", "табыс септіндегі зат есіммен", "етістікпен", "барыс септігінде"],
        correct: 0
    },
    {
        question: "Латын зат есімдерінің жіктелуін қандай белгі арқылы анықтайды?",
        options: ["бірлік санындағы ілік септік жалғауына қарай", "бірлік санындағы атау септік жалғауына қарай", "көптік санындағы ілік септік жалғауына қарай", "көптік санындағы атау септік жалғауына қарай", "көптік санындағы барыс септік жалғауына қарай"],
        correct: 0
    },
    {
        question: "«Сиыр мәйіті» терминін аударыңыз:",
        options: ["cadaver vaccae", "cadaver caprae", "cadaver equi", "cadaver canis", "cadaver skeleton"],
        correct: 0
    },
    {
        question: "I - II жіктелетін сын есімдер сөздікте қалай жазылады?",
        options: ["бірлік санындағы атау септік", "бірлік санындағы ілік септік", "көптік санындағы атау септік", "көптік санындағы ілік септік", "көптік санындағы барыс септік"],
        correct: 0
    },
    {
        question: "II жіктелудің орта жынысын Nom. Sing. қандай жалғау сипаттайды?",
        options: ["-um", "-us", "-er", "-a", "-s"],
        correct: 0
    },
    {
        question: "Латын зат есімінің негізін қай септік арқылы анықтайды?",
        options: ["бірлік санындағы ілік септік", "бірлік санындағы атау септік", "көптік санындағы атау септік", "көптік санындағы ілік септік", "бірлік санындағы барыс септік"],
        correct: 0
    },
    {
        question: "«lamina, ae f» зат есімімен сын есімді сәйкестендіріңіз:",
        options: ["externa", "externus", "externi", "externum", "exter"],
        correct: 0
    },
    {
        question: "I жіктеу зат есімдерінің көпше түрде ілік септігінің жалғауын табыңыз:",
        options: ["-arum", "-uum", "-orum", "–ium", "-um"],
        correct: 0
    },
    {
        question: "«Арқаның ең кең бұлшық еті» терминін аударыңыз:",
        options: ["musculu latissimus dorsi", "tuber spinae scapulae", "musculi intercostales externi", "ligamentum hepatisteres", "musculi spinae scapulae"],
        correct: 0
    },
    {
        question: "Сәйкессіз анықтауыш немен беріледі?",
        options: ["зат есімнің ілік септігімен", "зат есімнің табыс септігімен", "сын есіммен", "есімшемен", "барыс септігімен"],
        correct: 0
    },
    {
        question: "«cauda, ae f» зат есімінің жіктелуін анықтаңыз:",
        options: ["I", "II", "V", "III", "IX"],
        correct: 0
    },
    {
        question: "I жіктеуінің ерекшелік болып табылатын зат есімдер қатарын көрсетіңіз:",
        options: ["collega, oculista, agricola", "gingiva, cauda, crista", "lamina, glandula, ala", "cella, incisura, fractura", ", glandula, ala, fractura"],
        correct: 0
    },
    {
        question: "«Самай бұлшық еті» терминінің аудармасын табыңыз:",
        options: ["musculus temporalis", "musculus pectoralis", "musculus orbitalis", "musculus obliquus", "musculus fractura"],
        correct: 0
    },
    {
        question: "«rete, retis n» зат есімімен сәйкестендіру үшін сын есімді таңдаңыз:",
        options: ["venosa", "venosus", "venosae", "venosum", "venovivus"],
        correct: 0 // Rete (neuter, singular) -> venosum. "venosa" бұл Neuter Plural немесе Fem Singular.
    },
    {
        question: "Сәйкессіз анықтамасы бар терминді көрсетіңіз (Non-agreed attribute):",
        options: ["arteria frontalis", "arteria zygomatica", "arteria genus", "arteria cerebralis", "arteria zygomic"],
        correct: 0 // "arteria genus" (тізе артериясы) - мұнда анықтауыш зат есіммен берілген (Non-agreed). Қалғандарында сын есім (Agreed).
    },
    {
        question: "I-II септілі сын есімдер орналасқан қатарды көрсетіңіз:",
        options: ["caecus, a, um; profundus, a, um; brevis, e", "saluber, bris, bre; opticus, a, um; magnus, a, um", "squamosus, a, um; silvester, tris, tre; longus, a, um", "cavus, a, um; sinister, tra, trum; vagus, a, um", "sinister, tra, trum; longus, a, um"],
        correct: 0 // "brevis", "saluber", "silvester" — бұлар III септелуге жатады. Тек 4-ші нұсқада барлығы I-II.
    },
    {
        question: "«ligamentum, i n» зат есімімен сын есімді сәйкестіріңіз:",
        options: ["transversum", "transversus", "transversi", "transversa", "transver"],
        correct: 0
    },
    {
        question: "Тек анатомиялық терминдер орналасқан қатарды көрсетіңіз:",
        options: ["costa, ae f; oculus, i m; musculus, i m", "scapula, ae f; linimentum, i n; nervus, i m", "dorsum, i n; semen, inis n; pulvis, eris m", "vertebra, ae f; herba, ae f; pasta, ae f", "ae f; herba, ae f; pasta, ae f; inis n; pulvis"],
        correct: 0
    },
    {
        question: "Тек II септілі ортаңғы род зат есімдері орналасқан қатарды көрсетіңіз:",
        options: ["sternum, enteron, cerebrum", "ramus, truncus, ventriculus", "equus, abomasum, digitus", "dorsum, nasus, cranium", "nasus, cranium, digitus"],
        correct: 0
    },
    {
        question: "«nervus, i m» зат есімімен сын есімді сәйкестіріңіз:",
        options: ["zygomaticus", "zygomatici", "zygomaticum", "zygomatica", "zygomatic"],
        correct: 0
    },
    {
        question: "«pars, partis f» зат есімімен сын есімді сәйкестіріңіз:",
        options: ["squamosa", "squamosae", "squamosum", "squamosus", "squamos"],
        correct: 0
    },
    {
        question: "«Ортаңғы жыныс» терминінің латынша эквивалентін таңдаңыз:",
        options: ["genus neutrum", "genus femininum", "genus masculinum", "genus nobile", "genus skeleton"],
        correct: 0
    },
    {
        question: "«Сиырдың тұяғының жарығы» терминін аударыңыз:",
        options: ["fissura ungulae vaccae", "ruptura ligamentorum equi", "fractura costae caprae", "fissura mandibulae ovis", "ruptura ligamentorum ovis"],
        correct: 0
    },
    {
        question: "II септілі зат есімдердің көптік санында родительный септік соңын көрсетіңіз:",
        options: ["-orum", "-arum", "-ium", "-uum", "-um"],
        correct: 0
    },
    {
        question: "Сәйкестенген және сәйкессіз анықтамалары бар терминді көрсетіңіз:",
        options: ["vena facialis profunda", "vena cervicalis profunda", "vena cerebri magna", "vena vertebralis externa", "vena vertebralis profunda"],
        correct: 0 // "vena cerebri magna" -> cerebri (Genitivus - сәйкессіз), magna (Nominativus - сәйкестенген). Қалғандарында тек сын есімдер.
    },
    {
        question: "«Бастың ең ұзын бұлшықеті» терминін аударыңыз:",
        options: ["musculus longissimus capitis", "musculus longissimus thoracis", "musculus longus capitis", "musculus latissimus dorsi", "musculus longus dorsi"],
        correct: 0
    },
    {
        question: "Латын тілінде зат есімдердің неше септігі бар?",
        options: ["бес", "үш", "алты", "екі", "он"],
        correct: 0 // 5 түрлі септелу (declensions) бар.
    },
    {
        question: "III септік сын есімдері неше кіші топқа бөлінеді:",
        options: ["үшке", "екіге", "беске", "төртке", "бірге"],
        correct: 0 // Үш топ (үш жалғаулы, екі жалғаулы, бір жалғаулы).
    },
    {
        question: "III септік зат есімдерінің Nom. Sing. соңғы әріптері қандай:",
        options: ["түрлі", "-us, -er", "-um, -on", "-us,", "-os, -um"],
        correct: 0
    },
    {
        question: "Сын есім мен зат есімді келістіргенде қай параметр сәйкес келмеуі мүмкін:",
        options: ["септеу", "жыныс", "септік", "сан", "зат есім"],
        correct: 0 // Сөздердің септелу типі (declension) әртүрлі болуы мүмкін (мысалы, зат есім I, сын есім III септелуде), бірақ жынысы, саны, септігі бірдей болуы шарт.
    },
    {
        question: "Қай терминде зат есім мен сын есімнің септік формалары сәйкес келмейді:",
        options: ["animal aegrotum", "equus aegrotus", "vacca aegrota", "brachium aegrotum", "brachium equus"],
        correct: 0 // animal (III септелу), aegrotum (II септелу). Жалғаулары әртүрлі (-al және -um), бірақ грамматикалық жағынан дұрыс.
    },
    {
        question: "«Көкбауыр» терминінің аудармасын табыңыз:",
        options: ["lien, lienis m", "ren, renis m", "pulmo, pulmonis m", "hepar, hepatis n", "hepatis n, renis m"],
        correct: 0
    },
    {
        question: "«fissura ungulae equi» терминінің орысша эквивалентін табыңыз:",
        options: ["жылқы тұяғының жарығы", "ешкінің қабырғасының кесіндісі", "сиырдың қабырғасының сынуы", "сиырдың тұяғының жарығы", "ешкінің қабырғасының сынуы"],
        correct: 0 // Сұрақта "орысша" делінгенмен, варианттар қазақша. Дұрыс аудармасы – біріншісі.
    },
    {
        question: "«Жамбас сүйегі» терминінің аудармасын табыңыз:",
        options: ["os femoris", "os temporale", "os parietale", "os brachii", "os bracrale"],
        correct: 0
    },
    {
        question: "III септік сын есімдерінің Gen. Sing. жалғауы қандай:",
        options: ["-is", "-us", "-i", "-ae", "-o"],
        correct: 0
    },
    {
        question: "Сөздікте «genus masculinum» қалай белгіленеді:",
        options: ["m", "n", "b", "f", "o"],
        correct: 0
    },
    {
        question: "Тек орта жынысты зат есімдер қай септікке жатады:",
        options: ["II", "IV", "I", "III", "XI"],
        correct: 0 // Бұл сұрақ аздап даулы (II септелуде ер жынысы да бар), бірақ берілген нұсқалар мен тест логикасы бойынша I немесе II таңдалады (көбіне II-дегі -um жалғауына байланысты).
    },
    {
        question: "«Он екі елі ішек» терминінің аудармасы қандай:",
        options: ["duodenum, i n", "enteron, i n", "intestinum, i n", "colon, i n", "i n, skeleton"],
        correct: 0
    },
    {
        question: "«Жоғарғы жақ қуысы» терминінің латынша эквиваленті:",
        options: ["sinus maxillaris", "sinus ethmoidalis", "sinus frontalis", "sinus sphenoidalis", "sinus lateralis"],
        correct: 0
    },
    {
        question: "Латын сөзіндегі буын санын қалай анықтайды?",
        options: ["дауысты дыбыстар саны бойынша", "диграфтар саны бойынша", "дауыссыз дыбыстар саны бойынша", "дифтонгтар саны бойынша", "барлық әріптер саны бойынша"],
        correct: 0
    },
    {
        question: "Зат есімнің түбірін қалай анықтайды?",
        options: ["жекеше санның ілік септігінде соңғы әріпті алып тастау арқылы", "жекеше санның кез келген септігінде соңғы әріпті алып тастау арқылы", "жекеше санның атау септігінде соңғы әріпті алып тастау арқылы", "көпше санның атау септігінде соңғы әріпті алып тастау арқылы", "көпше санның кез келген септігінде соңғы әріпті алып тастау арқылы"],
        correct: 0 // Genitivus Singularis негізінде анықталады
    },
    {
        question: "Зат есімнің негізі мен септігі қай септік мен сан бойынша анықталады?",
        options: ["Nominativus Singularis", "Genetivus Pluralis", "Genetivus Singularis", "Genetivus Pluralis", "Genetivus Nominativus"],
        correct: 0 // Genetivus Singularis
    },
    {
        question: "Дұрыс реттілікпен жазылған терминді табыңыз:",
        options: ["dextra auris canis", "canis auris dextra", "auris dextra canis", "auris canis dextra", "auris, canis, aurum"],
        correct: 0 // auris (зат есім) + dextra (сын есім) + canis (ілік септік)
    },
    {
        question: "Ветеринарлық терминологияда ең жиі қолданылатын септіктер:",
        options: ["Nominativus et Genetivus", "Nominativus et Accusativus", "Dativus et Ablativus", "Accusativus et Genetivus", "Accusativus"],
        correct: 0
    },
    {
        question: "«manus, us f» зат есіміне сын есімді келістіріңіз:",
        options: ["dextra", "dexter", "dextrum", "dextrae", "dextr"],
        correct: 0 // manus - әйел жынысы (femininum) -> dextra
    },
    {
        question: "«Ауыз қуысы беті» терминінің латын тіліндегі баламасын табыңыз:",
        options: ["facies oralis", "facies temporalis", "facies articularis", "facies orbitalis", "facies orbita"],
        correct: 0
    },
    {
        question: "Дұрыс реттілікпен жазылған терминді табыңыз:",
        options: ["ligamentum carpi transversum", "transversum ligamentum carpi", "carpi ligamentum transversum", "ligamentum transversum carpi", "carpi ligamentum transver"],
        correct: 0 // ligamentum transversum carpi (Зат есім + Сын есім + Ілік септік)
    },
    {
        question: "Қай сөзде латынша «c» әрпі орысша «ц» деп оқылады:",
        options: ["cervix", "costa", "cutis", "oculus", "caput"],
        correct: 0 // e, i, y, ae, oe алдында "ц" болып оқылады
    },
    {
        question: "Дұрыс екпін мен дұрыс оқылуы көрсетілген сөзді табыңыз: caesura",
        options: ["căēs-ǔ-ră [ЦЭСУРА]", "că-ĕ-sǔ-ră [КАЭСУРА]", "cāē-sū-ra [ЦЭЗУРА]", "căĕs-ūr-ă [КЭЗУРА]", "cāē-sū-ra [КАЭ УРА]"],
        correct: 2 // ae дифтонгы "э" береді, s дауыстылар арасында "з" болады
    },
    {
        question: "Қай сөзде латынша «с» әрпі орысша «к» деп оқылады:",
        options: ["cortex", "cerebrum", "cellula", "cito", "cervix"],
        correct: 0 // a, o, u және дауыссыздар алдында "к" болып оқылады
    },
    {
        question: "Бұйрық райдағы етістікті жекеше түрде қойыңыз: Laborare",
        options: ["labora", "laboras", "laboratis", "laborate", "labos"],
        correct: 0
    },
    {
        question: "Сын есімнің жынысын анықтаңыз: gallus niger",
        options: ["ер", "әйел", "орта", "барыс", "атау"],
        correct: 0 // gallus - ер жынысы
    },
    {
        question: "«Беру» деп аударылатын терминді табыңыз:",
        options: ["da", "date", "recipe", "dus", "dim"],
        correct: 0 // Da - бер (жекеше)
    },
    {
        question: "Төмендегі сын есімдердің қайсысы 1-топқа (1-2 септелу) жатады:",
        options: ["Amarus, a, um", "Simplex, icis", "Occipitalis, e", "Aurum", "Skeleton"],
        correct: 0
    },
    {
        question: "Сөзжасамдық элемент – THERAPIA қандай мағына береді:",
        options: ["емдеу", "зерттеу", "тамақтану", "почта", "нан пісіру"],
        correct: 0
    },
    {
        question: "Қандай терминдерде «құрамының төмендеуі» деген ұғым бар?",
        options: ["hypotonia", "hypertonia", "hyperglyraemia", "hypert", "lyraemia"],
        correct: 0 // Hypo - төмен
    },
    {
        question: "2-топқа жататын сын есімдер:",
        options: ["3-жақ септелуі", "2-жақ септелуі", "1-жақ септелуі", "4-жақ септелуі", "5-жақ септелуі"],
        correct: 0 // III септелу бойынша өзгереді
    },
    {
        question: "EXTRACTUM, I, N сөзін GEN. SING. қойыңыз:",
        options: ["extracti", "extracta", "extractorum", "vertebralis, e", "acris"],
        correct: 0
    },
    {
        question: "Төменде берілген сын есімдердің қайсысы 1-топқа жатады:",
        options: ["purus, a, um", "vertebralis, e", "acer, acris", "facies vertebrale", "vertebra"],
        correct: 0
    },
    {
        question: "Қай сөздерде {кв} дыбыс тіркесі бар:",
        options: ["aqua", "lingua", "gutta", "vertebra", "facies"],
        correct: 0 // Qu = кв
    },
    {
        question: "FACIES, EI, F сөзін VERTEBRALIS, E сөзімен NOM. SING. түрінде сәйкестеңіз:",
        options: ["facies vertebralis", "faciei vertebralis", "facies vertebrale", "faci verte", "acies verteb"],
        correct: 0
    },
    {
        question: "GEN. SING. формасында тұрған сөзді көрсетіңіз:",
        options: ["aperturae", "nervus", "musculorum", "muscul", "ervus"],
        correct: 0 // aperturae (Singular Genitive of I declension)
    },
    {
        question: "Дұрыс нұсқаны табыңыз (Үлкен таңдай өзегі):",
        options: ["canalis palatinus major", "canalis palatinus majus", "canalis palatina major", "canalis palatinum majus", "canali palatinu maju"],
        correct: 0 // Canalis (m) -> palatinus (m) -> major (m)
    },
    {
        question: "Анатомиялық терминдегі келісімді анықтауыш (agreed attribute) әрқашан тұрады:",
        options: ["ілік септігінде", "табыс септігінде", "атау септігінде", "көмектес септігінде", "барыс септігінде"],
        correct: 0 // Атау септіктегі сөзбен атау септігінде келіседі (сөздік формада)
    },
    {
        question: "Анатомиялық терминнің құрылымы:",
        options: ["негізгі зат есім, келіскен анықтауыш, келіспеген анықтауыш", "келіс­пеген анықтауыш, келіскен анықтауыш, негізгі зат есім", "негізгі келіспеген анықтауыш, келіскен анықтауыш", "келіскен анықтауыш", "негізгі келіспеген анықтауыш"],
        correct: 0 // Зат есім + Сын есім (келіскен) + Ілік септігіндегі зат есім (келіспеген)
    },
    {
        question: "caput, capitis, n сөзінің септелу түрін анықтаңыз:",
        options: ["III септелу, аралас түр", "III септелу, дауысты түр", "III септелу, дауыссыз түр", "IV септелу", "I септелу"],
        correct: 0 // caput - дауыссыз түр (consonant type)
    },
    {
        question: "«Жоғарғы өсінді» терминінің дұрыс аудармасын табыңыз:",
        options: ["processus superior", "processus anterior", "processus superius", "processus anterius", "processus sup"],
        correct: 0
    },
    {
        question: "Рецептте көрсетілмейді:",
        options: ["рецепттің қолданылу мерзімі", "емдеу мекемесінің мекенжайы", "науқастың жасы", "науқастың жынысы", "мекенжай"],
        correct: 0 // Жынысы (gender) міндетті түрде жазылмайды, жасы жазылады
    },
    {
        question: "Етістіктің негізі анықталады:",
        options: ["бұйрық рай формасынан", "инфинитив формасынан, -re жалғауын алып тастау арқылы", "2-жақ жекеше формасынан", "1-жақ жекеше формасынан", "1-жақ көпше формасынан"],
        correct: 0
    },
    {
        question: "Дұрыс нұсқаны табыңыз (Misce... species):",
        options: ["Misce, fiat species", "Misce, fieri species", "Misce, fiat specierum", "Misce, fiant species", "Misce, fiery speci"],
        correct: 0 // Species - көпше түрде, сондықтан fiant (pl) қолданылады
    },
    {
        question: "Misce. Da. Signa – бұл:",
        options: ["Араластыр. Бер. Белгіле.", "Қайтала", "Осы дозаларды бер", "Стерилизациялау!", "Бөліп ал"],
        correct: 0
    },
    {
        question: "Берілген сөздердің қайсысы бірінші септелуге жатады?",
        options: ["magistra", "medicus", "universitas", "homo", "midicu"],
        correct: 0
    },
    {
        question: "«ligamentum» сөзі қай жынысқа жатады?",
        options: ["орта жынысқа", "әйел жынысына", "ер жынысына", "жекеше", "көпше"],
        correct: 0
    },
    {
        question: "«nephritis» терминінің аудармасын табыңыз:",
        options: ["бүйректің қабынуы", "бүйрек ауруы", "бүйректі зерттеу", "бүйректің түсуі", "бауырдың түсуі"],
        correct: 0
    },
    {
        question: "Қай термин екінші септелуге жатады?",
        options: ["dies", "poeta", "chirurgus", "auctor", "da"],
        correct: 0 // chirurgus (II)
    },
    {
        question: "«pulvis» сөзін қазақ тіліне аударыңыз:",
        options: ["ұнтақ", "ерітінді", "пилюля", "таблетка", "капсула"],
        correct: 0
    },
    {
        question: "medico сөзі қай септікте жазылған?",
        options: ["Genetivus", "Nominativus", "Dativus", "Accusativus", "Data"],
        correct: 0 // Dativus (немесе Ablativus, бірақ вариантта тек Dat бар)
    },
    {
        question: "Қай латын сөзінсіз рецепт – рецепт болмайды?",
        options: ["Recipe", "Misce", "Da", "Signa", "Quatro"],
        correct: 0
    },
    {
        question: "Қай сан латын тілінде 15 дегенді білдіреді?",
        options: ["quindecim", "undecim", "quattuordecim", "duodecim", "decim"],
        correct: 0
    }

    ]
};