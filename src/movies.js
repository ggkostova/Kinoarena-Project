const MOVIES = [
    {
        "id": "1",
        "name": "The Dark Knight",
        "genre": "Action, Crime, Drama",
        "premiere": "2008-07-14",
        "duration": "152 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА THE MALL",
        "director": "Christopher Nolan",
        "cast": "Christian Bale, Heath Ledger, Aaron Eckhart",
        "image_src": "https://cdn.vox-cdn.com/thumbor/Kr_zFMNcZmn28_TBF-8YYlhD9gw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11694967/0_c9S8ajFBpwX89ZuU.jpeg",
        "projection_types": [
            {
                "type": "2D",
                "times": ["14:00", "16:30", "19:00", "21:30"]
            },
            {
                "type": "3D",
                "times": ["15:00", "18:00", "21:00"]
            },
            {
                "type": "IMAX",
                "times": ["12:00", "17:00", "22:00"]

            }
        ]
    },
    {
        "id": "2",
        "name": "Inception",
        "genre": "Action, Adventure, Sci-Fi",
        "premiere": "2010-07-08",
        "duration": "148 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
        "director": "Christopher Nolan",
        "cast": "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt",
        "image_src": "https://images-ext-1.discordapp.net/external/dlnJDHX-YdR7zQ0CBl1bPcj2gSGpoQvctwisep9ctJQ/https/m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw%40%40._V1_.jpg?width=825&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]
            }
        ]
    },
    {
        "id": "3",
        "name": "The Shawshank Redemption",
        "genre": "Drama",
        "premiere": "1994-09-22",
        "duration": "142 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ ВАРНА",
        "director": "Frank Darabont",
        "cast": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "image_src": "https://images-ext-2.discordapp.net/external/xsgmFqFKotLCi-OcBigqK4cC7-C4Tm8UqeaSr7-JI0k/https/i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg?width=697&height=1005",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:30", "16:00", "18:30"]
            },
            {
                "type": "3D",
                "times": ["14:30", "17:30", "20:30"]
            }
        ]
    },
    {
        "id": "4",
        "name": "The Godfather",
        "genre": "Crime, Drama",
        "premiere": "1972-03-15",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА GRAND MALL ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/L2g6XSmyUOeCegmVNUPDG1b2axF6VTRr70PrQvux8Dg/https/m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM%40._V1_.jpg?width=860&height=1220",
        "projection_types": [
            {
                "type": "2D",
                "times": ["12:30", "15:00", "18:30"]
            },
            {
                "type": "3D",
                "times": ["12:30", "15:30", "21:30"]
            }
        ]
    },
    {
        "id": "5",
        "name": "Pulp Fiction",
        "genre": "Crime, Drama",
        "premiere": "1994-05-21",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/T45CdIStMAQTZSnGlkoX8ZGPSQJT5BT8MvVT4KR4RdE/https/m.media-amazon.com/images/I/81wrPiZFKIL._RI_.jpg?width=917&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["11:30", "13:00", "17:30"]
            },
            {
                "type": "3D",
                "times": ["14:30", "18:30", "22:30"]
            }
        ]
    },
    {
        "id": "6",
        "name": "The Matrix",
        "genre": "Action, Sci-Fi",
        "premiere": "1999-03-31",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА THE MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]
            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]
            }
        ]
    },
    {
        "id": "7",
        "name": "Forrest Gump",
        "genre": "Drama, Romance",
        "premiere": "1994-06-23",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/vISBzvfiwwgW5fB7ovJEySJ5FuR2lhNVEHdcwGTdrkM/https/kbimages1-a.akamaihd.net/22585eaf-7415-48f8-bff0-2af6da57338c/1200/1200/False/forrest-gump-1.jpg?width=777&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]
            },
        ]
    },
    {
        "id": "8",
        "name": "Star Wars: Episode IV - A New Hope",
        "genre": "Action, Adventure, Fantasy",
        "premiere": "1977-05-25",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/9l1ZRtmzLZujJMmZSx63F4rxylmzpKt8soeH5sWO30g/%3Fcb%3D20211105092556/https/static.wikia.nocookie.net/listofdeaths/images/b/b5/A_New_Hope_poster.jpg/revision/latest?width=862&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]
            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]
            }
        ]
    },
    {
        "id": "9",
        "name": "The Silence of the Lambs",
        "genre": "Crime, Drama, Thriller",
        "premiere": "1991-02-14",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА THE MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/0YhNjD6J3rPq0FiUZ9eyBxYpIPObNR3ebL2jS0M-qAg/https/images-na.ssl-images-amazon.com/images/S/pv-target-images/1d661187b253755ef32e1f21748ca1e217529bb72f8ef8a87a18fd8e904246a0._RI_V_TTW_.jpg?width=917&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "10",
        "name": "The Lord of the Rings: The Fellowship of the Ring",
        "genre": "Action, Adventure, Drama",
        "premiere": "2001-12-10",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/-6NyHv74hiZMDAgn7A71aktRIwYjL3UkDN-foTBbrbk/https/m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY%40._V1_.jpg?width=822&height=1220",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "11",
        "name": "The Lion King",
        "genre": "Animation, Adventure, Drama",
        "premiere": "1994-06-15",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА GRAND MALL ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/RxGLJ9I8dDIJTUDPCdinxYHqH1wplB9pv4k4-WSyHxM/https/m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI%40._V1_.jpg?width=822&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },

        ]
    },
    {
        "id": "12",
        "name": "Titanic",
        "genre": "Drama, Romance",
        "premiere": "1997-12-19",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/BdbjsyMqwfctoHAuGQsGlgkcv3Bq8CYiMaCu5s-f6eo/https/m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY%40._V1_.jpg?width=820&height=1220",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]
            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]
            },

        ]
    },
    {
        "id": "13",
        "name": "Jurassic Park",
        "genre": "Action, Adventure, Sci-Fi",
        "premiere": "1993-06-09",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/DWkHhI2T2p1J8Wf-vk4YSP0ZdfEP4ruCuSpISvrIDy0/https/m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE%40._V1_.jpg?width=815&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "14",
        "name": "Avatar",
        "genre": "Action, Adventure, Fantasy",
        "premiere": "2009-12-16",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/jQ0IyGoUgs9MxyGKsvP-XQKpMiiScBo9UGiUxtwTf4g/https/m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc%40._V1_.jpg?width=827&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "15",
        "name": "Interstellar",
        "genre": "Adventure, Drama, Sci-Fi",
        "premiere": "2014-10-26",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/f449hmlP6i3S38HcAQ0N2bN0ykijXdsVcV9wo5yvoy4/https/m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU%40._V1_.jpg?width=825&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "16",
        "name": "E.T. the Extra-Terrestrial",
        "genre": "Family, Sci-Fi",
        "premiere": "1982-06-11",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/-hgvUnJOtstxSpUPF-_QJLPNez0gWQ82Dq_xwf5vS7c/https/images.moviesanywhere.com/34f4f25b50973b8fe2b197c8a8a6e3a5/1a9ea9c0-fb38-439b-977e-40b6fe52a006.jpg?width=815&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
        ]
    },
    {
        "id": "17",
        "name": "The Avengers",
        "genre": "Action, Adventure, Sci-Fi",
        "premiere": "2012-04-11",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА THE MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/XzYOSStLzPculPThwuydErqFj5isc2v2kNXirExzUyg/https/m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU%40._V1_.jpg?width=825&height=1220",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "18",
        "name": "Jaws",
        "genre": "Adventure, Thriller",
        "premiere": "1975-06-20",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА GRAND MALL ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/LhMA2Mwdg38If9fSShHJNMQMxsiJXKTR6CzhiBEVWzE/https/assets.scriptslug.com/live/img/posters/jaws-1975.jpg?width=825&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "19",
        "name": "The Terminator",
        "genre": "Action, Sci-Fi",
        "premiere": "1984-10-26",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/aIu7FX5Hei0DBYqA1JkzliejLF8AEgPVbofmz-fHVuc/https/m.media-amazon.com/images/M/MV5BMjAyMTk3ODA2MF5BMl5BanBnXkFtZTcwMTkzNDQyNA%40%40._V1_.jpg?width=815&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    },
    {
        "id": "20",
        "name": "Back to the Future",
        "genre": "Adventure, Comedy, Sci-Fi",
        "premiere": "1985-07-03",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА GRAND MALL ВАРНА",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/OF59brnWW4dLj62_TZU199bqeAsL_R6xtrsexaQOhUQ/https/m.media-amazon.com/images/M/MV5BMWE1MWYyYzEtMWY3YS00OWJiLWEzOGYtMTlkZTcwNWQ5NDVkXkEyXkFqcGdeQXVyMTMyNzcxMzI5._V1_FMjpg_UX1000_.jpg?width=815&height=1222",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },

        ]
    },
    {
        "id": "21",
        "name": "Raiders of the Lost Ark",
        "genre": "Action, Adventure",
        "premiere": "1981-06-12",
        "duration": "122 min",
        "summary": "Lorem ......",
        "cinema": "КИНО АРЕНА THE MALL",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/JZAu09YZWaR0l7ClkAsOrbUPsAvOyrDDoicJknkFu8g/https/m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ%40._V1_FMjpg_UX1000_.jpg?width=830&height=1220",
        "projection_types": [
            {
                "type": "2D",
                "times": ["13:00", "16:00", "19:00", "22:00"]

            },
            {
                "type": "3D",
                "times": ["14:00", "17:00", "20:00"]

            },
            {
                "type": "IMAX",
                "times": ["15:00", "18:00", "21:00"]

            }
        ]
    }
]

export default MOVIES;