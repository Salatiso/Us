// xh_translations.js

const xhosaTranslations = {
    websiteTitle: "Tee & Me - Ibali Lethu",
    headerTitle: "Tee & Me",
    nav: {
        overview: "Isishwankathelo",
        timeline: "Umzila Wexesha",
        tracking: "Ukulandelela",
        contributions: "Igalelo Lomntu",
        reinforcement: "Ukuqinisa",
        mediaGallery: "Igalari Yemidiya",
        travel: "Uhambo",
        relationshipActions: "Qhagamshela Ucombulule",
        lifesync: "LifeSync",
        insights: "Ukuqonda",
        funtools: "Izixhobo Zolonwabo",
        feedback: "Impendulo"
    },
    overview: {
        title: "Isishwankathelo Sohambo Lwethu",
        dashboardTitle: "Ideshibhodi Yobudlelwane",
        affectionLevel: "Uthando",
        supportScore: "Inkxaso",
        sharedInterests: "Ezabelwanayo", // This key might not be used in V4 dashboard cards, but good to have
        commFrequency: "Unxibelelwano",
        foodContribution: "Ukulung. Ukutya",
        safetyFeeling: "Ukhuseleko",
        financialTeamwork: "Intsebenziswano Kwezemali",
        selectMetric: "Bonisa:",
        ourSong: "Ingoma Yethu Ekhethekileyo",
        songName_shaggy: "\"Thank You Baby! (For Makin' Someday Come So Soon)\"",
        listenToSong: "Mamela Ngoku"
    },
    timeline: {
        week: "Iveki",
        seeDetails: "Bona Iinkcukacha",
        sharedSong: "Kwabelwana Ngengoma:",
        // Add specific week summaries and event translations here as you populate relationshipData
        // Example for week 1, assuming these keys exist in your relationshipData.weeks[0]
        week1: {
            summary: "Isiqalo sohambo olubhaliweyo, ukwenziwa kweqela nezicwangciso zokuqala.",
            event1: "USalatiso wenza iqela 'Us'.",
            event2: "Kwabelwana ngekhonkco leGroot Krokodil."
        },
        sharedThankYouBaby: "USalatiso wabelane ngengoma yethu ekhethekileyo 'Thank You Baby!'.", // Example for a specific song event key
        sharedPerfect: "UTee wabelane nge 'Perfect' ka Ed Sheeran." // Example for another specific song event key
    },
    tracking: {
        title: "Ukulandelela Ubudlelwane",
        selectAspect: "Landelela:",
        affectionLevel: "Uthando",
        supportScore: "Inkxaso",
        communicationFrequency: "Unxibelelwano",
        foodContribution: "Ukulung. Ukutya",
        safetyFeeling: "Ukhuseleko",
        financialTeamwork: "Intsebenziswano Kwezemali",
        feedbackResponseTime: "Ixesha Lokuphendula",
        noResponseData: "Akukho datha yempendulo ekhoyo"
    },
    contributions: {
        title: "Igalelo Lomntu Ngamnye",
        description: "Ngubani onikele ntoni kwiinkalo ezahlukeneyo zobomi bethu kunye.",
        filterWeek: "Hluza ngeVeki:",
        table: {
            parameter: "Inkalo",
            salatiso: "Igalelo likaSalatiso",
            tee: "Igalelo likaTee",
            details: "Iinkcukacha/Amanqaku"
        },
        params: { // Ensure these match the keys used in JS for parameters
            food: "Ukulungiselela Ukutya",
            safety: "Ukhuseleko Nokhuseleko",
            chores: "Imisebenzi Yasekhaya",
            planning: "Ukucwangciswa Kwemisebenzi",
            finances: "Ezemali",
            affection: "Uthando",
            support: "Inkxaso",
            communication: "Unxibelelwano"
        },
        aggregationNote: "(Qaphela: Ukujonga okuhlanganisiweyo, njengo 'rhoqo kwiinyanga ezi-3', sebenzisa iLifeSync Report Generator - indawo yokubeka okwangoku.)",
        noDataForWeek: "Akukho datha yegalelo ethile erekhodiweyo kule veki.",
        noneReported: "Akukho nto ixeliweyo"
    },
    reinforcement: {
        title: "Amagama Nezenzo Zokuqinisa",
        table: {
            wordAction: "Igama/Isenzo",
            purpose: "Injongo",
            salatisoOccurrences: "USalatiso (IiVeki)",
            teeOccurrences: "UTee (IiVeki)",
            jointOccurrences: "Ngokudibeneyo (IiVeki)"
        },
        words: { // These should match keys in relationshipData
            safe: "'Ndifikile/Ndikhuselekile'", // Or a more natural Xhosa equivalent for "I'm safe baby"
            loveYou: "'Ndiyakuthanda'",
            helpRequest: "Isicelo Soncedo"
        },
        purpose: { // These should match keys in relationshipData
            reassurance: "Ukuqinisekisa",
            affection: "Ukubonisa Uthando",
            supportSeeking: "Ukufuna Inkxaso"
        }
    },
    mediaGallery: {
        title: "Igalari Yethu Yemidiya",
        sharedSongs: "Iingoma Esabelane Ngazo",
        photoMoments: "Amaxesha Aneefoto",
        photoNote: "(Iifoto zilayishwa ukusuka kwifolda 'assets/photos/'. Faka imifanekiso yakho apho.)",
        noSongs: "Akukho ngoma zifakiweyo kwiziganeko zomzila wexesha okwangoku.",
        noPhotos: "Akukho foto zongeziweyo okwangoku. Faka imifanekiso kwi 'assets/photos/' uze uzidwelise kwi `relationshipData.photoFileNames`."
    },
    travel: {
        title: "Uhambo Lwethu",
        visitedTitle: "Iindawo Esikhe Saya Kuzo",
        desiredTitle: "Iindawo Esiphupha Ngazo",
        rolesTitle: "Iindima:",
        highlightsTitle: "Ezona Ndawo Zibalulekileyo:",
        photosTitle: "Iifoto:", // Not directly used in current render but good for future
        destination: "Indawo Esiya Kuyo", // Generic, specific ones below
        dates: "Imihla",
        noVisited: "Akukho hambo lwadlulayo lufakiweyo okwangoku.",
        noDesired: "Akukho ndawo esiphupha ngazo zifakiweyo okwangoku.",
        dest: { // Example destinations - add more as needed
            durban: "Uhambo LwaseDurban",
            paris: "Iphupha LaseParis"
        },
        roles: { // Example roles - add more as needed
            durban: {
                salatiso: "UMbhukishi Weenqwelomoya Nophando Lweeresityu",
                tee: "UMcwangcisi Wohambo Lwemihla Ngemihla Nomphathi Wezothutho Lwasekuhlaleni"
            },
            paris: {
                salatiso: "Ukukhokela KwiMetro Njengengcaphephe.",
                tee: "Ukufumana Ezona Croissants Zibalaseleyo Neendawo Ezifihlakeleyo."
            }
        },
        durban: { // Example highlights - add more as needed
            highlights: "Ukuhamba elunxwemeni ekuseni, Utyelelo olumnandi eUshaka Marine World, kunye nokunandipha ikhari yokwenyani yaseDurban!"
        },
        paris: { // Example notes - add more as needed
            notes: "Ukucinga ngokuhambahamba ngase Eiffel Tower, ukulahleka eLouvre, kunye nohambo olumnandi ngesikhephe ebusuku kumlanjana iSeine."
        }
    },
    relationshipActions: {
        title: "Qhagamshela Ucombulule",
        salatiso: "USalatiso",
        tee: "UTee",
        apology: {
            title: "Cela Uxolo",
            from: "Ukusuka ku:",
            messagePlaceholder: "Uxolo lwakho olusuka entliziyweni...",
            sendButton: "Thumela Uxolo",
            success: "Uxolo luthunyelwe lwaze lwarekhodwa."
        },
        dissatisfaction: {
            title: "Chaza Ukunganeliseki",
            from: "Ukusuka ku:",
            messagePlaceholder: "Chaza ukunganeliseki kwakho...",
            sendButton: "Rekhoda Ukunganeliseki",
            success: "Ukunganeliseki kurekhodiwe."
        },
        bookDate: {
            title: "Bhukisha Usuku Lokuthandana",
            booker: "Kubhukishwe ngu:",
            activityPlaceholder: "Umzekelo, Isidlo sangokuhlwa e[Restaurant]",
            proposeButton: "Cebisa Usuku",
            success: "Isicelo sosuku lokuthandana sirekhodiwe."
        },
        terminate: {
            title: "Qalisa Ukupheliswa Kobudlelwane",
            terminator: "Kuqaliswe ngu:",
            reason: "Isizathu:",
            reasons: { // These keys must match the <option value="..."> in HTML
                irreconcilable: "Iiyantlukwano Ezingenakusonjululwa",
                communication: "Ukuqhawuka Konxibelelwano",
                paths: "Iindlela Zobomi Ezahlukeneyo",
                other: "Esinye Isizathu"
            },
            otherReasonPlaceholder: "Chaza esinye isizathu...",
            initiateButton: "Qalisa Ukupheliswa",
            success: "Inkqubo yokupheliswa kobudlelwane iqalisiwe yaze yarekhodwa.",
            confirmMessage: "Uqinisekile ngokwenene ufuna ukuqalisa ukupheliswa kobudlelwane? Esi senzo siza kurekhodwa.",
            specifyOther: "Nceda chaza isizathu 'Esinye'."
        },
        logTitle: "ILogi Yezenzo Zobudlelwane",
        actionBy: "Isenzo ngu {actor}", // {actor} will be replaced by "Salatiso" or "Tee"
        actionType: "Uhlobo: {type}", // {type} will be replaced by action type
        actionDetails: "Iinkcukacha: {details}", // {details} will be replaced
        noActionsYet: "Akukho zenzo zobudlelwane zirekhodiweyo okwangoku."
    },
    lifesync: {
        title: "Uhlalutyo lweLifeSync",
        reportGen: "Yenza Ingxelo Yobudlelwane",
        last3Months: "Kwiinyanga ezi-3 ezidlulileyo",
        last6Months: "Kwiinyanga ezi-6 ezidlulileyo",
        lastYear: "Kunyaka ophelileyo",
        allTime: "Lonke Ixesha",
        generateButton: "Yenza Ingxelo",
        reportNote: "(Ukwenziwa kwengxelo epheleleyo yindawo yokubeka.)"
    },
    insights: {
        title: "Ukuqonda Ngothando Nobuhlobo",
        // Add specific insight translations here as you populate relationshipData
        // Example for week 1 insights, assuming these keys exist in your relationshipData.insightsData[0]
        week1: {
            affection: "Uthando lwabonakala kwasekuqaleni, ngokusetyenziswa rhoqo kwamagama othando.",
            intimacy: "Iingxoxo zokuqala malunga nezicwangciso zexesha elizayo zanceda ukwakha ubuhlobo bokuqala."
        }
    },
    funtools: {
        title: "Izixhobo Zolonwabo Nemisebenzi",
        astrology: {
            title: "Ukuhambelana Kweenkwenkwezi",
            salatisoBday: "Usuku lokuzalwa lukaSalatiso:",
            teeBday: "Usuku lokuzalwa lukaTee:",
            checkButton: "Jonga Ukuhambelana",
            invalidDate: "Nceda faka imihla efanelekileyo.",
            salatisoIsA: "USalatiso ngu",
            teeIsA: "UTee ngu",
            virgoTaurus: "IVirgo neTaurus ziimpawu zomhlaba ezihlala zisenza ubuhlobo obuzinzileyo nobusebenzayo!",
            general: "Yonke indibanisela yeempawu inamandla ayo awodwa!"
        },
        quizzes: {
            title: "Imibuzo Yobudlelwane",
            placeholder: "Imibuzo iyeza kungekudala!"
        }
    },
    feedback: {
        title: "Utshintshiselwano Ngempendulo",
        giveFeedback: "Nika Impendulo",
        sender: "Umthumeli:",
        recipient: "Umamkeli:",
        tee: "UTee",
        salatiso: "USalatiso",
        message: "Umyalezo:",
        sendButton: "Thumela Impendulo",
        receivedFeedback: "Impendulo Efunyenweyo / ILogi",
        feedbackFrom: "Impendulo evela ku {sender}",
        respondedIn: "Uphendule ngexesha: {duration}",
        pendingResponse: "Kulindelwe impendulo",
        markAsRead: "Phawula Njengokufundiweyo/Kuphenduliwe",
        messageEmpty: "Umyalezo awunakuba nto.",
        success: "Impendulo ithunyelwe yaze yarekhodwa.",
        senderRecipientSame: "Umthumeli nomamkeli abanakufana.",
        noFeedbackYet: "Akukho miyalezo yempendulo okwangoku.",
        // Example for a sample feedback message key, if you use keys for messages
        sampleMsg1: "Bendithanda ukubulela ngokwenza ikofu ekuseni!"
    },
    footer: {
        text: "Tee & Me. Isikhumbuzo sothando lwethu sedijithali."
    },
    modal: {
        detailsTitle: "Iinkcukacha zeVeki {weekNumber}"
    },
    alert: {
        defaultTitle: "Isaziso",
        actionLogged: "Isenzo Sirekhodiwe",
        fillAllFields: "Nceda ugcwalise onke amacandelo afunekayo.",
        messageEmpty: "Umyalezo awunakuba yinto engekhoyo."
    },
    playlist: {
        title: "Uluhlu Lwethu Lweengoma Ezabelwana Ngazo",
        note: "Ukuba ukufakwa akusebenzi, uluhlu lweengoma luza kuvuleka kwithebhu entsha."
    }
};

