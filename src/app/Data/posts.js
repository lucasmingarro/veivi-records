const posts = [
  {
    title: "La imagen que nos falta.",
    date: "2025-01-10", // Formato YYYY-MM-DD
    image: "/images/tracks/2025-01-10.jpg", // Ruta a la imagen
    imagePosition: "left", // left or right
    audio: "/audio/2025-01-10.mpeg", // Ruta al MP3
    attachments: [
      // { url: "/attachments/file.pdf", text: "Text del link" },
      { url: "/attachments/Quignard_le_image.pdf", text: "La imagen que nos falta by Pascal Quignard" }
    ],
    content: `
Queridines, salud!

El viento sacude el refugio,
Las ráfagas no ceden.

Hay fuego, hay tiza, hay música.

Saludos,
Veivi Récords
(la cura hoy a cargo de Lauta)`,
  },
  {
    title: "",
    date: "2025-01-05", // Formato YYYY-MM-DD
    image: "/images/tracks/2025-01-05.jpeg", // Ruta a la imagen
    imagePosition: "right", // left or right
    audio: "/audio/2025-01-05.mpeg", // Ruta al MP3
    content: `
Queridines,
Muy buenas noches!
Saludos,
Veivi Récords`,
  },
  {
    title: "",
    date: "2024-12-31", // Formato YYYY-MM-DD
    image: "/images/tracks/2024-12-31.jpeg", // Ruta a la imagen
    imagePosition: "left", // left or right
    audio: "/audio/2024-12-31.mpeg", // Ruta al MP3
    content: `
Queridines,
Los quiero mucho,
Siempre juntos!

Saludos,
Veivi Récords`,
  },
  {
    title: "",
    date: "2024-12-19", // Formato YYYY-MM-DD
    // image: "/images/tracks/2024-11-24-TheWolf.jpeg", // Ruta a la imagen
    // imagePosition: "right", // left or right
    audio: "/audio/2024-12-19.mpeg", // Ruta al MP3
    content: `
Queridines,

Efemérides de hoy.
Saludos,
Veivi Récords`,
  },
  {
    title: "PS: Only for iPod... 🎵",
    date: "2024-11-24", // Formato YYYY-MM-DD
    image: "/images/tracks/2024-11-24-TheWolf.jpeg", // Ruta a la imagen
    imagePosition: "right", // left or right
    audio: "/audio/2024-11-24-TheWolf.mpeg", // Ruta al MP3
    content: `
Good evening!
Greetings to Veivi Records...`,
  },
  {
    title: "Here comes Polly Jean",
    date: "2024-10-03",
    // image: "/images/tracks/2024-10-03-PollyJean.webp",
    // imagePosition: "left", // left or right
    audio: "/audio/2024-10-03-PollyJean.mpeg",
    content: `
Queridines,
Muy buenas noches!
Con ustedes Polly Jean,
Saludos,
Veivi Récords`,
  },
  {
    title: "My Eden",
    date: "2024-08-27",
    image: "/images/tracks/2024-10-03-Eden.jpg",
    imagePosition: "left", // left or right
    audio: "/audio/2024-10-03-Eden.mpeg",
    content: `
  Queridines,
  Printemps!

  Saludos,
  Veivi Récords`,
  },

  {
    title: "Ilusión",
    date: "2024-08-27",
    image: "/images/tracks/2024-08-27.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2024-08-27.mpeg",
    content: `
Muy buenas noches,
Saludos,
Veivi Récords`,
  },

  {
    title: "Such a Shame",
    date: "2024-08-09",
    image: "/images/tracks/2024-08-09.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2024-08-09.mpeg",
    content: `
Muy buenas noches!
Saludos,
Veivi Récord`,
  },

  {
    title: "Just a little rain....fclti",
    date: "2024-07-19",
    // image: "/images/tracks/2024-08-09.jpeg",
    // imagePosition: "left", // left or right
    audio: "/audio/2024-07-19.mpeg",
    content: `
Queridines,
Muy buenas noches.
Saludos,
Veivi Récords`,
  },


  {
    title: "Praça da Sé",
    date: "2024-06-15",
    image: "/images/tracks/2024-06-15.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2024-06-15.mpeg",
    content: `
Queridines,
Caminan unos elefantes escuchando synchronicity,
se encuentran con fripp en praça da se, discuten acerca del mejor disco de Pink Floyd...y resulta esto.
Buenas noches,
Saludos,
Veivi Récords`,
  },

  {
    title: "Shine",
    date: "2024-06-07",
    // image: "/images/tracks/2024-06-15.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2024-06-07.mpeg",
    content: `
Queridines,
Por las noches, siempre vuelve...
Veivi Récords,
Saludos`,
  },

  {
    title: "This Visions",
    date: "2024-05-17",
    // image: "/images/tracks/2024-06-15.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2024-05-17.mpeg",
    content: `
Muy buenas noches,

...all that remains..

Saludos,
Veivi Récords`,
  },

  {
    title: "🍷",
    date: "2024-05-01",
    image: "/images/tracks/2024-05-01.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2024-05-01.mpeg",
    content: `
You think it will never happen to you, that it cannot happen to you, that you are the only person in the world to whom none of these things will ever happen, and then, one  by one, they all begin to happen to you, in the same way they happen to everyone else.

Your bare feet on the cold floor as you climb out of bed and walk to the window. You are six years old. Outside, snow is falling, and the branches of the trees in the backyard are turning white.

Speak now before it is too late, and then hope to go on speaking until there is nothing more to be said. Time is running out, after all. Perhaps it is just as well to put aside your stories for now and try to examine what it has felt like to live inside this body from the first day you can remember being alive until this one. A catalogue of sensory data. What one might call a phenomenology of breathing.
  Saludos,
  Veivi Récords`,
  },

  {
    title: "Feliz Navidad",
    date: "2023-12-25",
    image: "/images/tracks/2023-12-25.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2023-12-25.mpeg",
    content: `
Queridines,
Muy buenas noches y feliz navidad!
Saludos,
Veivi Récords`,
  },

  {
    title: "",
    date: "2023-12-07",
    image: "/images/tracks/2023-12-07.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2023-12-07.mpeg",
    content: `
Queridines,
Muy buenas noches!
Saludos,
Veivi Récords`,
  },


  {
    title: "Crawling all over",
    date: "2023-12-02",
    // image: "/images/tracks/2023-12-07.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2023-12-02.mpeg",
    content: `
Queridines,
Otra noche, otro carnaval.
Saludos,
Veivi Récords`,
  },

  {
    title: "Gidon",
    date: "2023-01-14",
    image: "/images/tracks/2023-01-14.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2023-01-14.mpeg",
    content: `
Queridines,
Mejor que la de Gidon,
Acá estamos.
Muy feliz sábado,
Saludos,
Veivi Récords`,
  },

  {
    title: "Línea de Fuga",
    date: "2022-10-22",
    image: "/images/tracks/2022-10-22.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-10-22.mpeg",
    content: `
Muy buenas noches,
Saludos, Veivi Récords`,
  },


  {
    title: "Extraños en la Noche",
    date: "2022-10-13",
    // image: "/images/tracks/2022-10-13.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2022-10-08.mp3",
    content: `
The song of the lone wolf, the outsider, the alien, the foreigner, and night owl who’s wheeling and dealing, putting everything up for sale and surrendering his self-interest. On the move aimlessly through the dingy darkness — slicing up the pie of sentimental feelings, dividing it into pieces all the time, exchanging piercing penetrating looks with someone he hardly knows.

Tramps and mavericks, the object of each other’s affection, enraptured with each other and creating an alliance — ignoring all the ages of man, the golden age, electronic age, age of anxiety, the jazz age. You’re here to tell a different story, a bird of another feather. You’ve got a tough persona, like a side of beef, and you’re aroused and stimulated, with an ear-to-ear grin, like a Cheshire cat, and you’re rethinking your entire formless life, your entire being is filled with a whiff of this heady ambrosia. Something in your vital spirit, your pulse, something that runs in the blood, tells you that you must have this tender feeling of love now and forever, this essence of devoted love held tightly in your grip — that it’s essential and necessary for staying alive and cheating death.

Intruders, oddballs, kooks, and villains, in this gloomy lifeless dark, fight for space. Two rootless alienated people, withdrawn and isolated, opened the door to each other, said Aloha, Howdy, How you doing, and Good Evening. How could you have known that the smooching and petting, eros and adoration was just one break down mambo hustle away — one far sided google eyed look and a lusty leer — that ever since then, that moment of truth, you’ve been steamed up, head over heels, each other’s hearts’ desire. Sweethearts and honeys right from the beginning. Right from the inaugural sidelong sneak peek, the origin — the starting point. Now you’re yoked together, one flesh in perpetuity — into the vast eternity — immortalized.
Saludos,
Veivi Récords`,
  },

  {
    title: "",
    date: "2022-10-08",
    image: "/images/tracks/2022-10-08.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2022-10-08.mpeg",
    content: `
Saludos,
Veivi Récords`,
  },

  {
    title: "",
    date: "2022-10-04",
    image: "/images/tracks/2022-10-04.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-10-04.mpeg",
    content: `
Muy buenas noches,
Saludos,
Veivi Récords`,
  },

  {
    title: "Veivi special",
    date: "2022-09-27",
    image: "/images/tracks/2022-09-27.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2022-09-27.mpeg",
    content: `
Un veivi special,
"And I shall sleep a pleasant sleep
While storms above their vigils keep"
Saludos,
Veivi Récords`,
  },


  {
    title: "DEVI/ATION",
    date: "2022-09-25",
    image: "/images/tracks/2022-09-25.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-09-25.mpeg",
    content: `
Muy buenas noches,
Saludos,
Veivi Récords`,
  },

  {
    title: "",
    date: "2022-07-21",
    image: "/images/tracks/2022-07-21.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2022-07-21.mpeg",
    content: `
Queridines,
Desde el sol los saluda
Veivi Récords`,
  },

  {
    title: "",
    date: "2022-07-16",
    image: "/images/tracks/2022-07-16.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-07-16.mpeg",
    content: `
Queridines,
Muy buenas tardes.
Saludos,
Veivi Récords`,
  },

  {
    title: "Lado B",
    date: "2022-07-03",
    // image: "/images/tracks/2022-07-21.jpeg",
    // imagePosition: "left", // left or right
    audio: "/audio/2022-07-03.mpeg",
    content: `
Queridines,
Muy buenas noches.
Saludos,
Ringo y el lado b de Veivi Récords`,
  },


  {
    title: "Dos Cosas",
    date: "2022-06-10",
    // image: "/images/tracks/2022-01-07.jpeg",
    // imagePosition: "left", // left or right
    audio: "/audio/2022-06-10.mpeg",
    attachments: [
      // { url: "/attachments/file.pdf", text: "Text del link" },
      { url: "https://archive.org/details/aboutlooking00berg/mode/2up", text: "About looking by Berger, John" }
    ],
    content: `
Queridines,
Reaparecieron dos cosas.
Lindas tardes,
Saludos,
Veivi Récords`,
  },


  {
    title: "",
    date: "2022-06-06",
    image: "/images/tracks/2022-06-06.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-06-06.mpeg",
    content: `
Muy buenas noches,
Saludos,
Veivi Récords`,
  },

  {
    title: "Rita",
    date: "2022-05-25",
    image: "/images/tracks/2022-05-25.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2022-05-25.mpeg",
    content: `
Siempre la noche,
Saludos,
Veivi Récords

Between Rita and my eyes there is a rifle
And whoever knows Rita kneels
and prays
To the divinity in those honey-colored eyes
And I kissed Rita
When she was young
And I remember how she approached
And how my arm covered the loveliest of braids
And I remember Rita
The way a sparrow remembers its stream

Ah, Rita

Between us there are a million sparrows and images
And many a rendezvous
Fired at by a rifle
Rita's name was a feast in my mouth
Rita's body was a wedding in my blood
And I was lost in Rita for two years
And for two years she slept on my arm
And we made promises
Over the most beautiful of cups
And we burned in the wine of our lips
And we were born again

Ah, Rita!

What before this rifle could have turned my eyes from yours
Except a nap or two or honey-colored clouds?
Once upon a time
Oh, the silence of dusk
In the morning my moon migrated to a far place
Towards those honey-colored eyes

And the city swept away all the singers
And Rita
Between Rita and my eyes — A rifle

- Mahmoud Darwish`,
  },

  {
    title: "2022 🍸",
    date: "2022-01-07",
    image: "/images/tracks/2022-01-07.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2022-01-07.mpeg",
    content: `
Queridines,
Muy feliz 2022.
Saludos,
Veivi Récords.`,
  },

  {
    title: "from the haze..",
    date: "2021-04-28",
    // image: "/images/tracks/2021-04-28.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2021-04-28.mpeg",
    content: `
Queridines,
Muy buenas noches!
Saludos,
Veivi Récords.`,
  },

  {
    title: "",
    date: "2020-11-24",
    image: "/images/tracks/2020-11-24.jpeg",
    imagePosition: "right", // left or right
    audio: "/audio/2020-11-24.mpeg",
    content: `
Queridines,
Muy buenas tardes,
Saludos,
Veivi récords`,
  },

  {
    title: "",
    date: "2020-11-07",
    image: "/images/tracks/2020-11-07.jpeg",
    imagePosition: "left", // left or right
    audio: "/audio/2020-11-07.mpeg",
    content: `
Queridines,
Muy buen sábado.
Saludos,
Veivi récords`,
  },


  {
    title: "Desenamorarse",
    date: "2020-10-25",
    // image: "/images/tracks/2023-12-07.jpeg",
    // imagePosition: "right", // left or right
    audio: "/audio/2020-10-25.mpeg",
    content: `
Sheena Baby, de la que estaba enamorado, y yo íbamos caminando. Era de noche, muy tarde. Las nubes habían tomado la forma de grandes hongos y esponjas, y la noche era hermosa como ninguna, con la excepción de que se nos habían pinchado dos ruedas del coche unos cuantos kilómetros atrás y no teníamos ni idea de dónde estábamos ni a quién pedirle ayuda. Aparte de esta emergencia puntual, era evidente que algo no marchaba bien. Habíamos llegado al extremo de querer matarnos el uno al otro, un tema del que ya he hablado en otra ocasión.

Sheena Baby era todo amor, una verdadera gatita. La había querido durante años, desde que me deshice de Miss Sheila, y me sentía como si se me hubiera arrebatado parte de mí mismo. Sheena Baby no estaba tan colada por mí como yo lo estaba por ella. Eso era innegable. Había pensado pegarle un tiro a ella y después pegarme otro a mí, lo cual no nos habría reportado beneficio alguno a ninguno de los dos. Todo se resumiría en una breve noticia de periódico que unos extraños leerían y lamentarían para después pasar a la sección delos deportes. El amor se tuerce. Pasa a diario. No tienes que matarte por amor si es algo que puedes evitar, aunque a veces resulta difícil no hacerlo.

Si no hubiéramos pinchado podríamos habernos metido por el bosque, poner algo de Thin Lizzy, le habría dicho que aún estábamos a tiempo de arreglar las cosas. Que no era sólo que ella fuese mi amor, sino que era el amor de mi vida. Después, en la oscuridad, podríamos habernos dado un buen achuchón. Pero no me quería, al fin me había dado cuenta, así que decidí ser un verdadero cabrón con ella.

   — Lo que te pasa es que no sabes escuchar a nadie — le dije.

   — No, lo que pasa es que estoy hasta el coño de oírte — dijo ella.

   — Que te den — dije.

   — Bésame el culo — dijo.

  — Pues bájate los pantalones — dije, a ver si colaba, pero no fue así y nos pusimos a caminar en direcciones opuestas.

No me explicaba cómo era posible que algo que había empezado tan bien tuviese que acabar así de mal.La palabra amor es mucha palabra y cubre un territorio inmenso. Te puedes pasar la vida entera persiguiéndolo y acabar sin nada, siendo un viejo desdentado de nariz grande y con pelos en las orejas, todo el día amargado en el bar al acecho de alguien de tu edad, pero con probabilidades de éxito cada vez menores. Llegada cierta edad ya se han acumulado demasiados goles en tu contra.

No sabía qué hacer, ni adonde ir. Nos hallábamos a cientos de kilómetros de cualquier ciudad, de alguien que pudiera echarnos una mano con el equipo adecuado para arreglar un pinchazo o que llamase a una grúa para remolcarnos. Ya me veía caminando días enteros, durmiendo en la cuneta. Sin duda el primer tío que pasara la recogería a ella, pero no tenía tan claro que la primera mujer que pasara me recogiera a mí. Me volví para verla. Con cada paso que daba, Sheena Baby se iba haciendo más pequeña en la distancia, aunque aún podía distinguir aquel magnífico culo suyo bamboleándose. Seguro que lo bambolearía más en cuanto oyese que alguien pasaba por allí. Ni siquiera tendría que hacer dedo, con otras partes del cuerpo le bastaba para llamar la atención, pero me costaba hacerme a la idea de no volver a verla. Había encontrado al fin a la mujer de mi vida, y ahora ella ya no quería saber nada de mí. Me lo había buscado yo solo, por haberme quedado levantado hasta las tantas escuchando Grandes éxitos musicales y friendo patatas a las dos de la mañana, por haber amontonado las bolsas de basura en el armario escobero, por haber dejado que me crecieran las uñas de los pies y rasparle las piernas por la noche en la cama. Da la impresión de que al principio de una relación todo marcha a las mil maravillas, pero enseguida acabas conociendo al otro.Entonces descubres que, a pesar de su aparente belleza externa, tiene una verruga asquerosa en el culo, o que ha nacido con seis dedos en los pies y le han cortado uno, lo cual te hace pensar en cuestiones de herencia y descendencia. Te despiertas por la mañana antes que ella, te acercas y le hueles el aliento y entonces sueltas un «Me cago en la puta, ¿se puede saber qué carajo comiste anoche?». Cosas así rompen el encanto, y la opinión que te has hecho de alguien cambia cuando la conoces en profundidad después de haber vivido juntos, cuando la ves por la mañana y te fijas en que en la parte de atrás de los muslos tiene pequeñas vetas de grasa.

Aun así, quería salir corriendo en su busca, porque la quería tal cual era y porque nadie es perfecto, especialmente yo; pero en el instante en que una persona es consciente de que alguien está perdidamente enamorado de ella, ésta automáticamente pierde el interés y se distancia, ya que el ansia que uno siente por el otro es rara vez compartida en igual medida por los dos. Aquello me entristecía y me descolocaba, pero tenía que encontrar una solución, pues ella estaba desandando el camino por el que habíamos llegado, si fuera preciso incluso de vuelta a Oxford, o eso parecía, y lo que yo necesitaba era que me montaran deprisa dos ruedas sin cámara, o al menos que les pusieran un parche a las pinchadas, y necesitaba un gato y una llave inglesa de cuatro brazos, pero no tenía nada de nada. Habíamos salido sin ninguna herramienta, ya que el plan era sólo acercarse hasta la licorería. Después compramos unas Budweiser y desde ese momento las cosas empezaron a ir de mal en peor. Nos fuimos a dar una vuelta. Pensé: «A tomar vientos», decidí que cortar el césped podía esperar hasta más tarde. Los planes minúsculos e insignificantes de los ratones y los hombres.

Nos peleamos, por algo que ya se venía cociendo desde tiempo atrás, por una chavala con la que había estado hablando en un bar hacía unas noches, alguien que se había interesado por mi trabajo. Ya se lo había advertido, que se trataba de algo inevitable, y de hecho hubo un tiempo que parecía haberlo entendido.Incluso estuvo soportando las llamadas durante un tiempo, las de aquellas mujeres que llamaban por teléfono a cualquier hora del día o de la noche.

Pero llegó un momento en que empezó a decir: «Otra llamada para ti». Me pasaba el teléfono mientras sonreía con los labios apretados y acercaba una silla para observarme. Yo me encorvaba sobre el teléfono yen voz baja preguntaba quién era con la boca pegada al micrófono. Ella se quedaba a mi lado para escuchar toda la conversación. Luego llegó el día en que me pidió que nos cambiasen el número de teléfono. Yo me negué. Ella quería que lo quitaran del listín. Yo protesté. La gente tenía que ponerse en contacto con migo para consultarme los detalles, para pedir presupuestos, le dije. También tienen que ponerse en contacto contigo para otros asuntos, o eso parece, dijo ella. La cosa fue a peor. Empezaron las peleas. Si queríamos hacer el amor, antes teníamos que hacer las paces, y eso es matador. Acabó con lo que sentíamos uno por el otro, y una vez que te empieza a corroer por dentro te conviertes en el candidato perfecto para terminar persiguiendo a alguien por la carretera, igual que me estaba sucediendo a mí aquella noche.

Ella no paraba de caminar y yo decidí dar la vuelta y seguirla. Intentaba acercarme lo suficiente como para que me oyera llamarla. Seguro que iba a parecerle un completo idiota, cuanto más lo pensaba más claro lo veía, además de que era muy posible que me ignorase, que siguiera caminando, como si nada.

Me recordaba a aquella vez en que había visitado el Zoo de Memphis, hacía años, antes de que me llegase la pubertad. Iba caminando y llevaba un globo atado a un palito en una mano y un algodón dulce en la otra. Mientras deambulaba por ahí me acerqué al foso de los osos, donde se había congregado mucha gente que los miraba. Eran unos osos enormes, no sé si pardos o qué. Allí estaba sucediendo algo, eso estaba claro. Los osos estaban abajo, en un gran foso lleno de rocas, con una charca artificial y una cueva artificial, viviendo una vida artificial. La gente apuntaba al foso y todos sonreían. Yo me abrí camino entre la multitud para ver qué pasaba. Algunos padres tenían a sus hijos encaramados al cuello y los sujetaban por las piernas. Había dos osos allá abajo en el foso, dos bolas peludas y enormes. Uno de ellos estaba de pie y el otro estaba tumbado sobre la espalda con las garras en el aire, moviendo la cabeza y mirando a la gente. Parecía como si estuviera un poco borracho. Miré a los osos, miré a la gente y después volví a mirar a los osos. El que estaba de pie metió la nariz entre las piernas del que estaba tumbado sobre la espalda y aspiró con fuerza. El oso tumbado sobre la espalda levantó la cabeza, puso los labios en forma de O haciendo un túnel con la boca y gruñó «¡ROOOOOOOOOOOOOO!» a todo volumen. El oso que estaba de pie giró el cuello, cargó su peso alternativamente en cada pie, volvió a meter la nariz entre las piernas del otro oso y, mientras el oso que estaba tumbado agitaba las garras delanteras y gruñía «¡OOOOROOOOOOO! ¡MOOROOOOOOO! ¡GROOOOOOOO!», aspiró con fuerza.

La gente sonreía y apuntaba, mientras el oso que estaba de pie meneaba la nariz, volvía a meterla entre las piernas del otro oso y de nuevo aspiraba con fuerza. El oso tumbado cerró los ojos, agitó la cabeza y gruñó «¡BROOOOOOOOOOOOOOOO!». Después se levantó y lamió un poco al otro oso, ambos lo hicieron, y entonces lentamente se giraron juntos, se metieron en la cueva y desaparecieron. La multitud seguía mirando. Yo también. Pero los osos no salían. Sentía, aun ya entonces, hace tantos años, que algo extraño y misterioso estaba sucediendo, algo que no se nos iba a permitir observar. Después de un rato la multitud se empezó a dispersar de uno en uno y de dos en dos, después de tres en tres y de cuatro en cuatro, hasta que fui yo el único que quedaba allí. Seguía con la vista fija en la oscura entrada de la cueva, pero ya no había nada más que ver excepto el aire negro en su interior y unas formas imprecisas que se movían allí
adentro. Después de un rato yo también me fui y los dejé a sus anchas.

De repente, mientras perseguía a Sheena Baby, lo había recordado todo, como un pensamiento sobre el deseo. Temía que algún extraño recogiese a Sheena Baby, no quería ni imaginar lo que le haría o intentaría hacerle. En estos tiempos que corren no es una buena idea ponerse a hacer dedo para que te coja un desconocido. Puede pasarte de todo. Prefería no ser testigo de que algún suceso peor que yo mismo. Ya tenía suficiente conmigo, desde luego, aunque quería mejorar para ella, quería rectificar mis errores si ella me lo permitía. Pero parecía como si caminase cada vez más deprisa, y no lograba acercarme a ella en absoluto. Me dolían las piernas, hacía calor, aunque había cerveza en el coche. Ella ya había pasado a su lado pero a mí aún me quedaba un buen trecho. Por fin llegué a la altura del coche y paré para tomarme un respiro. Reparé en la neverita que estaba en el suelo y pensé: Coño, ya de estar aquí, habrá que aprovechar.

Los pinchazos nos habían sobrevenido oportunamente a la sombra de un árbol, y no se estaba nada mal bajo aquellas ramas tan frondosas. Casi hacía fresco, y la cerveza estaba fría, de modo que cogí una y me senté a la orilla de la carretera con la espalda apoyada en el coche. Tenía tiempo de sobra para reflexionar. Se puede resolver prácticamente cualquier asunto si se dispone del tiempo oportuno para reflexionar. Es como un alto en el camino para obtener una perspectiva general. Abrí la cerveza y eché un buen trago, bien frío, después encendí un pitillo, y entonces el mundo ya no me parecía ni la mitad de malo. La hilera de árboles continuaba por la orilla de la carretera. Éstos proyectaban una sombra de lo más agradable, incluso había una pequeña acequia con ranas sentadas en los bordes. Todo rezumaba cierto sosiego. Pensé: Bueno, ¿y qué si ella acaba dejándome? ¿Va a ser el fin del mundo? No, no iba a ser el fin del mundo. El mundo no se iba a salir de su eje sólo porque a alguien le hubieran roto el corazón. El sol no iba a dejar de salir. Me pregunté a mí mismo si sería doloroso. Sí, sería doloroso. Dolería durante un número indeterminado de días o de semanas. Con un poco de suerte no me dolería durante toda la vida, aunque no había manera de anticipar cuánto tiempo pasaría antes de que encontrase a otra tan buena como ella. Cuando la hicieron rompieron el molde. Miré en dirección hacia ella. Ya no se le veía.

Seguí bebiendo cerveza y fumando cigarrillos durante un rato. No era un mal modo de dejar que pasara el tiempo. No estaba seguro de qué hacer con el coche (era de ella). No quería dejarlo allí sin más. Podía haber vándalos por los alrededores, tíos al margen de la ley que podrían quitarle las ruedas y afanar el equipo de música, o largarse con la batería. Tampoco quería quedarme allí plantado vigilándolo toda la noche. Así que me volví para ver en qué estado se encontraba. Los dos pinchazos habían sido en el lado del conductor. Depronto me asaltó una idea: ¿Por qué no conducirlo tal cual estaba, pero muy despacio? Era una idea tanbuena que no me explicaba cómo no se me había ocurrido antes. En alguna parte había leído que se puede conducir con una rueda pinchada durante veinticinco kilómetros si se hace muy despacio. Aunque tuvierados pinchadas, podría conducir más deprisa que la velocidad a la que Sheena Baby caminaba, y entonceslograría por fin alcanzarla. De modo que me monté en el coche y coloqué la cerveza entre las piernas. Giré lallave del contacto y arrancó a la primera. Se notaba un poco desequilibrado de mi lado, eso era todo. Seguroque estaba de lo más ridículo, y recé para que nadie se aproximase por detrás y se pusiera a tocarme labocina.

Torcí despacio al entrar en la carretera, para comprobar el tacto del coche. Botaba un poco. De repente temí que las ruedas pudieran estropearse, así que me abrí otra cerveza para ahuyentar aquellos pensamientos.

Quise ver lo deprisa que podía ir una vez que había conseguido enderezar la dirección y poner rumbo al encuentro con Sheena Baby, pero aún seguía en primera y el velocímetro no hacía más que dar saltos entre 0y 10 km/h. Supuse que Sheena Baby estaría caminando a unos 4 ó 5 km/h. Me pregunté: ¿Podré cambiar asegunda? Lo hice. Las ruedas empezaron a golpear el asfalto un poco más deprisa. La aguja subió hasta casi15 km/h. Sonreí. Era sólo cuestión de un momento antes de que la alcanzase.

Encendí la radio y busqué algo de música en el dial. Me puse las gafas de sol. Sentía como si de verdad estuviera progresando.

La última vez que me había montado en el coche de Sheena Baby había visto dos o tres porros en una cajetilla vacía de Marlboro dentro de la guantera. La abrí y la cajetilla de Marlboro todavía seguía allí. Cogí el volante con los codos, miré dentro de la cajetilla y, claro, aún estaban allí los dos porros. Saqué uno y el otro lo dejé en su sitio. Las cosas me estaban saliendo a pedir de boca. Era domingo por la tarde y Army Archard repasaba la lista de los 100 grandes éxitos de 1967. Encendí el porro, el coche iba dando botes mientras yo mantenía el humo dentro tanto como podía y bebía la cerveza sin quitarle ojo a la carretera.Después de un rato ya estaba alucinando por lo bien que me estaba saliendo todo. Sonaban Jimi Hendrix y Janis Joplin y Elvis Presley y The Doors y Cream y Grand Funk Railroad y Creedence Clearwater Revival y Percy Sledge, uauá uauá ua. Me puse a cantar en alto y a mover los hombros al compás, y cuando el porro se iba terminando le di caladas más cortas para sacarle tanto como diera de sí. Army metía baza de vez en cuando, hacía comentarios sobre lo buena que era aquella música y lo afortunados que habíamos sido de vivir en esa época. Yo estaba de acuerdo al cien por cien. Ojalá me hubiera largado a San Francisco y hubiera llevado flores en el pelo. Ojalá hubiera sido
hippy en vez de haber estado recogiendo algodón. De repente ya no me parecía tan mal que Sheena Baby me fuese a dejar, e intuí que había sido algo inevitable.Eramos dos personas muy distintas. Veníamos de ambientes distintos y nuestros intereses no eran ni parecidos. Lo raro era que hubiéramos aguantado tanto tiempo juntos. El amor adquiría multitud de formas ya veces lo que se asemejaba al amor en realidad no era en absoluto amor, tan sólo un capricho pasajero disfrazado. Te dolía cuando sucedía así, y te dejaba para el arrastre durante una temporada, pero tarde o temprano te reponías y encarabas el mundo y veías que era peliagudo encontrar el amor y que a veces se hacía preciso indagar. El amor no iba a plantarse justo delante de ti y a soltarte una bofetada. No se te iba a echar a las rodillas de camino por la calle. El amor no iba a saltar desde un segundo piso para caerte encima.

Seguí conduciendo, dando pequeños botes, mientras la aguja temblaba entre 10 y 15 km/h. Las ruedas hacían bop, bop, bop y la goma se retorcía bajo las llantas, haciendo que el coche se meneara suavemente.Iba a conseguirlo, eso de seguro. Todo aquello no era sino un contratiempo pasajero.

Army Archard seguía poniendo los grandes éxitos de 1967. Yo seguía bebiendo las cervezas. Había bastantes más en la neverita. Tenía cigarrillos de sobra. Divisé una figura que iba caminando por la cuneta, que aumentaba de tamaño según me iba acercando. Yo llevaba el ritmo de la música dando golpecitos con una mano sobre el volante y con las deportivas sobre la alfombrilla. Seguro que a Sheena Baby le extrañaría verme llegar botando en su coche. Entonces me percaté de que aquella noche iba a dormir solo, de que no me rodearía con los brazos ni me abrazaría durante la noche, de que jamás volvería a abrazarme.

Jamás. Volvería. A abrazarme.

Pegué un frenazo justo a su lado. Ella dejó de andar y se volvió para mirarme. Estuvimos mirándonos uno al otro durante casi un minuto. Pude haberle dicho un montón de cosas, pude haberle prometido el oro y el moro aunque después no lo hubiera cumplido, lo que fuera con tal de que subiera de nuevo al coche. Pero todo lo que le dije fue:

—¿Quieres que te lleve?

Se montó sin decir ni una palabra. Cerró la puerta y se puso de rodillas sobre el asiento mirándome de frente, recogiendo aquellas maravillosas piernas suyas de un moreno intenso y con una musculatura del copón, la culturista ganadora de catorce trofeos. Yo era flacucho, tosía por las mañanas, tenía gases la mayoría de los días. Me miró fijamente con aquel azul intenso y bellísimo, tenía los ojos pegados a los míos.Entonces se me abalanzó. Se me abalanzó y me rodeó con los brazos y me estrechó con fuerza (era capaz de levantar noventa kilos). Pegó sus labios contra los míos, apretó firmemente su boca contra la mía y me empujó contra la puerta del coche, podía oírla resoplando por la nariz. Me estaba succionando el aire mientras me besaba con todas sus fuerzas. Mi lado del coche estaba más bajo que el suyo y la tenía encima de mí, me escaló por el regazo, tan pronto me manoseaba como me abrazaba mientras me retenía contra la puerta. De repente ésta se abrió y yo caí de espaldas sobre la carretera, a excepción de los pies, que aún seguían dentro del coche, y Sheena Baby gateó y se me echó encima, me besó, me apretó el cogote contra el asfalto y me estrujó las orejas entre las manos, jadeaba, me estaba perdonando, me estaba cubriendo con su amor, tanto amor que tapaba el sol, allí tumbados junto a una rueda pinchada y los bajos herrumbrosos del coche en plena carretera, donde cualquiera que pasara por allí al volante podría presenciar un verdadero testimonio de amor, sin disimulos, expuesto ante la mirada del mundo entero.

Entonces fue cuando pararon los polis, dos, con cara de pocos amigos y gafas de sol, y supe mientras seme revolvían las tripas que nuestro final feliz estaba a punto de dar un giro fatal.


Muy buenas noches,
Saludos,
Veivi Récords`,
  },


];

export default posts;
