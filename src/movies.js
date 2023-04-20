const MOVIES = [
    {
        "id": "1",
        "name": "The Dark Knight",
        "genre": "Action, Crime, Drama",
        "premiere": "2008-07-14",
        "duration": "152 min",
        "summary": "Lorem ......",
        "director": "Christopher Nolan",
        "cast": "Christian Bale, Heath Ledger, Aaron Eckhart",
        "image_src": "https://cdn.vox-cdn.com/thumbor/Kr_zFMNcZmn28_TBF-8YYlhD9gw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/11694967/0_c9S8ajFBpwX89ZuU.jpeg",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА МОЛ ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Christopher Nolan",
        "cast": "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt",
        "image_src": "https://images-ext-1.discordapp.net/external/dlnJDHX-YdR7zQ0CBl1bPcj2gSGpoQvctwisep9ctJQ/https/m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw%40%40._V1_.jpg?width=825&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА МОЛ ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Frank Darabont",
        "cast": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "image_src": "https://images-ext-2.discordapp.net/external/xsgmFqFKotLCi-OcBigqK4cC7-C4Tm8UqeaSr7-JI0k/https/i.ytimg.com/vi/19THOH_dvxg/movieposter_en.jpg?width=697&height=1005",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/L2g6XSmyUOeCegmVNUPDG1b2axF6VTRr70PrQvux8Dg/https/m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM%40._V1_.jpg?width=860&height=1220",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/T45CdIStMAQTZSnGlkoX8ZGPSQJT5BT8MvVT4KR4RdE/https/m.media-amazon.com/images/I/81wrPiZFKIL._RI_.jpg?width=917&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "cinemas": [
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА GRAND MALL ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-2.discordapp.net/external/vISBzvfiwwgW5fB7ovJEySJ5FuR2lhNVEHdcwGTdrkM/https/kbimages1-a.akamaihd.net/22585eaf-7415-48f8-bff0-2af6da57338c/1200/1200/False/forrest-gump-1.jpg?width=777&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА GRAND MALL ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
            }
        ]
    },
    {
        "id": "8",
        "name": "Star Wars: Episode IV - A New Hope",
        "genre": "Action, Adventure, Fantasy",
        "premiere": "1977-05-25",
        "duration": "122 min",
        "summary": "Lorem ......",
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/9l1ZRtmzLZujJMmZSx63F4rxylmzpKt8soeH5sWO30g/%3Fcb%3D20211105092556/https/static.wikia.nocookie.net/listofdeaths/images/b/b5/A_New_Hope_poster.jpg/revision/latest?width=862&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА GRAND MALL ВАРНА",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/0YhNjD6J3rPq0FiUZ9eyBxYpIPObNR3ebL2jS0M-qAg/https/images-na.ssl-images-amazon.com/images/S/pv-target-images/1d661187b253755ef32e1f21748ca1e217529bb72f8ef8a87a18fd8e904246a0._RI_V_TTW_.jpg?width=917&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/-6NyHv74hiZMDAgn7A71aktRIwYjL3UkDN-foTBbrbk/https/m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY%40._V1_.jpg?width=822&height=1220",
        "cinemas": [
            {
                "name": "КИНО АРЕНА МОЛ МАРКОВО ТЕПЕ ПЛОВДИВ",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "3D",
                        "times": ["15:00", "18:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
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
        "director": "Slavi Vargulev",
        "cast": "Leonardo, Brad, Gosho",
        "image_src": "https://images-ext-1.discordapp.net/external/RxGLJ9I8dDIJTUDPCdinxYHqH1wplB9pv4k4-WSyHxM/https/m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI%40._V1_.jpg?width=822&height=1222",
        "cinemas": [
            {
                "name": "КИНО АРЕНА THE MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["14:00", "16:30", "19:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["12:00", "17:00", "22:00"]
                    }
                ]
            },
            {
                "name": "КИНО АРЕНА ДЕЛУКС BULGARIA MALL",
                "projection_types": [
                    {
                        "type": "2D",
                        "times": ["13:00", "16:00", "22:00"]
                    },
                    {
                        "type": "IMAX",
                        "times": ["15:00", "18:00", "21:00"]
                    }
                ]
            }
        ]
    },
   
]

export default MOVIES;