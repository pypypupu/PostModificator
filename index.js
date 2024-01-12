const posts = [
    {
        id: 1,
        title: "Geresnis titlas diskusijai",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        id: 2,
        title: "qui est esse",
        body: "Cia yra labai svavrbus tekstas kuris apibudina psichine zmogaus busena, \npagal taip kaip jis ja perskaito."
    },
    {
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
        id: 15,
        title: "eveniet quod temporibus",
        body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
        id: 16,
        title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
        id: 17,
        title: "fugit voluptas sed molestias voluptatem provident",
        body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
        id: 18,
        title: "voluptate et itaque vero tempora molestiae",
        body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
        id: 19,
        title: "adipisci placeat illum aut reiciendis qui",
        body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
        id: 20,
        title: "doloribus ad provident suscipit at",
        body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
        id: 21,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        id: 23,
        title: "maxime id vitae nihil numquam",
        body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
        id: 24,
        title: "autem hic labore sunt dolores incidunt",
        body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
        id: 25,
        title: "rem alias distinctio quo quis",
        body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    }
]
const manageTask = (arr) => {
    let _arr = arr;
    let count = 1;
    const log = function (res) {
        console.log(`7.${count++}`, res)
    }
    let managerFuncs = {
        getPost: (index) => {
            return _arr[(_arr.length + index) % _arr.length];
        },
        getPosts: () => {
            return _arr;
        },
        getFromToPosts: (start, end) => {
            return _arr.slice(((_arr.length + start) % _arr.length), ((_arr.length + end) % _arr.length))
        },
        getFilteredBy: (fn) => {
            return _arr.filter(fn)
        }
    }

    for (let property in managerFuncs) {
        let originalFunc = managerFuncs[property]
        managerFuncs[property] = (...args) => {
            let doLog = true
            let arguments = args;
            if (typeof args[0] === "boolean") {
                doLog = args[0]
                arguments.splice(0, 1);
            }
            const res = originalFunc(...args)
            if (doLog)
                log(res)
            return res;
        }
    }
    managerFuncs["getProperties"] = (fnName, propertyNames, transformFn, ...args) => {
        const originalFunc = managerFuncs[fnName];
        let res = originalFunc(false, ...args)
        if (!Array.isArray(res))
            res = [res]
        let constructedArray = []
        if (propertyNames.length > 0) {
            let lastLength = 0;
            for (let element of res) {
                for (let property of propertyNames) {
                    if (lastLength == constructedArray.length)
                        constructedArray.push({ [property]: element[property] })
                    else
                        constructedArray[lastLength] = { ...constructedArray[0], [property]: element[property] }
                }
                lastLength++;
            }
        }
        else
            constructedArray = Array.from(res);

        log(transformFn ? transformFn(constructedArray) : constructedArray)
    }
    return managerFuncs
}
const objManager = manageTask(posts);

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.

// 7.1. Gauti pirmo masyvo nario reikšmę.
objManager.getPost(0)
// 7.2. Gauti paskutinio masyvo nario reikšmę.
objManager.getPost(-1)
// 7.3. Gauti 15 masyvo nario reikšmę.
objManager.getPost(14)
// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
objManager.getPost(-13)
// 7.5. Gauti vidurinio masyvo nario reikšmę.
objManager.getProperties("getPosts", [], (arr) => arr.filter((_, index) => index === Math.round(arr.length / 2)))
// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
objManager.getFromToPosts(0, 4)
// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
objManager.getFromToPosts(-5, -1)
// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
objManager.getFromToPosts(4, 14)
// 7.9. Gauti kas antro masyvo nario reikšmes.
objManager.getFilteredBy((_, index) => index % 2 == 0)
// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
objManager.getProperties("getPosts", [], (arr) => arr.filter((_, index) => index === 0 || index === arr.length - 1))
// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
objManager.getProperties("getPost", ["body"], null, 0)
// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
objManager.getProperties("getPost", ["body"], null, 1)
// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
objManager.getProperties("getPost", ["title", "body"], (post) => `Title of the post: \"${post.title}\". Description of the post: \"${post.body}\"`, 1)
// 7.14. Išvesti visus masyvo narius į konsolę.
objManager.getPosts()
// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
objManager.getProperties("getPosts", ["title", "body"])
// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
objManager.getProperties("getPosts", ["body"])
// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
objManager.getProperties("getPosts", ["title", "body"], (arr) => arr.map((val) => `Title: \"${val.title}\". Content: \"${val.body}\"`).join(" |\n "))
// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
objManager.getProperties("getFromToPosts", ["title", "body"], (arr) => arr.map((val) => `Title: \"${val.title}\". Content: \"${val.body}\"`).join(" |\n "), 0, 4)
// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
objManager.getProperties("getFromToPosts", ["title", "body"], (arr) => arr.map((val) => `Title: \"${val.title}\". Content: \"${val.body}\"`).join(" |\n "), -6, -1)
// 7.22. Išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
objManager.getFilteredBy((val) => val.title.charAt(0) === 's')
// 7.23. Išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
objManager.getFilteredBy((val) => val.title.charAt(val.title.length - 1) === 't')
// 7.24. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
objManager.getFilteredBy((val) => val.title.length > 15)
// 7.25. Išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
objManager.getFilteredBy((val) => val.title.length < 20 && val.body.length > 50)
// 7.26. Išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
objManager.getFilteredBy((val) => (val.title.length > 20 && val.title.length < 30) && (val.body.length > 70 && val.body.length < 130))
// 7.27. Išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
objManager.getFilteredBy((val) => val.title.includes("it") && val.body.includes("quo"))
// 7.28. Išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
objManager.getFilteredBy((val) => val.body.split(" ").find((val) => val == "sit") == "sit")
// 7.29. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
objManager.getFilteredBy((val) => val.title.split("a").length > 3 && val.body.split("o").length > 7)
// 7.30. Išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
objManager.getProperties("getPosts", [], (arr) => arr.sort((a, b) => a.body.length - b.body.length).map((val) => { return { ...val, bodyLength: val.body.length } }))

/* 

*/