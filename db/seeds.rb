# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# 100.times do |num|
#   Post.create!({author_id: 1, body: Faker::Hacker.say_something_smart})
# end
User.create(
{first_name: "Luke",
  last_name: "Skywalker",
  email: "luke.skywalker@gmail.com",
  password: "ls123456",
  friend_request_id: nil,
  birthday_month: 9,
  birthday_day: 1,
  birthday_year: 1924,
  about: "Im just a simple moisture farmer turned jedi doin' my best to end the evil gallatic empire takin it one day at a time ;)",
  lives: "Tatooine",
  work: "Rebel Alliance",
  education: "The Yoda School of Jedi Mind Tricks",
  gender: "M",
  prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459191754/iwtc2hiwn3iosjzb74eu.jpg",
  banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459192465/bnln4di8syr6gxylhsm8.jpg"
}
)

Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203502/vkivexl7mfxqzhnl7teb.jpg",
  public_id: "vkivexl7mfxqzhnl7teb"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203576/ttoxhdndfzo2rbsvlkcp.jpg",
  public_id: "ttoxhdndfzo2rbsvlkcp"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203628/f8uiswlimxfagc6qze5l.jpg",
  public_id: "f8uiswlimxfagc6qze5l"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203670/zdahv568izhtzuwdm5wc.jpg",
  public_id: "zdahv568izhtzuwdm5wc"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203707/flnqq1l6mhzofgxxgbuw.jpg",
  public_id: "flnqq1l6mhzofgxxgbuw"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203755/h3gznyrj5sd3zch6ptiy.jpg",
  public_id: "h3gznyrj5sd3zch6ptiy"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203820/pzhj5vqj387mhrrryfjh.jpg",
  public_id: "pzhj5vqj387mhrrryfjh"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203858/xu1hlw5kjdrtsiishci9.jpg",
  public_id: "xu1hlw5kjdrtsiishci9"
  })
Photo.create({user_id: 1,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459203912/d4h920etqiodyyrmhzif.jpg",
  public_id: "d4h920etqiodyyrmhzif"
  })

  User.create(
  {first_name: "Leia",
    last_name: "Skywalker",
    email: "leia.skywalker@gmail.com",
    password: "ls123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1924,
    about: "",
    lives: "Alderaan",
    work: "Gallatic Senate",
    education: "Alderann City College",
    gender: "F",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459192659/wc31k36yunwu7hzytyxy.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459192712/s81lhz1csmhdperyoeru.jpg"
  }
  )

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204188/p14udqon2e0znozaqxgw.jpg",
    public_id: "p14udqon2e0znozaqxgw"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204244/mfeani1lwcg3a98mvfri.jpg",
    public_id: "mfeani1lwcg3a98mvfri"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204288/ufqnzgduegkr3lugplc4.jpg",
    public_id: "ufqnzgduegkr3lugplc4"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204339/cyctrdqyje0o6ujp1ugv.jpg",
    public_id: "cyctrdqyje0o6ujp1ugv"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204380/czxyhhmz8zlgnnvkrckm.jpg",
    public_id: "czxyhhmz8zlgnnvkrckm"
  })

  Photo.create({user_id: 2,
   photo_type: "albumphoto",
   url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204448/uh7fadulv3tqe2hgsynz.jpg",
   public_id: "uh7fadulv3tqe2hgsynz"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204526/qdqvm3xs5hlaxblsf8js.png",
    public_id: "qdqvm3xs5hlaxblsf8js"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204573/ipqz4imtjxhnz0lasoba.jpg",
    public_id: "ipqz4imtjxhnz0lasoba"
  })

  Photo.create({user_id: 2,
    photo_type: "albumphoto",
    url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204624/qx10dijpqxohad190wri.jpg",
    public_id: "qx10dijpqxohad190wri"
  })



  User.create(
  {first_name: "Han",
    last_name: "Solo",
    email: "han.solo@gmail.com",
    password: "hs123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1920,
    about: "orphaned at a young age, and turned to a life of crime as a thief in order to survive the perils of the galaxy.",
    lives: "Space Nomad",
    work: "Hut Inc.",
    education: "School of Hard Knocks",
    gender: "M",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193042/rd90ja1bdtg2wv7aiy.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193092/vcmaggfsatrbsx5m9rpe.jpg"
  }
)

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204811/fjmuwd6v4jzt78c1mjts.jpg",
  public_id: "fjmuwd6v4jzt78c1mjts"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459204870/ncgailrabyllphamtunb.jpg",
  public_id: "ncgailrabyllphamtunb"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205022/vi4mwskrbs1y6tkgfyld.jpg",
  public_id: "vi4mwskrbs1y6tkgfyld"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205098/yi9evwg4lmbu9ihi48mc.jpg",
  public_id: "yi9evwg4lmbu9ihi48mc"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205184/islfy1guffakcktvjxfk.jpg",
  public_id: "islfy1guffakcktvjxfk"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205243/gxrfrvcnr3tjyjfvvx7z.jpg",
  public_id: "gxrfrvcnr3tjyjfvvx7z"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205288/ddcmldherskkwk0ofev1.jpg",
  public_id: "ddcmldherskkwk0ofev1"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205344/iji7l903go0cglnk7xug.jpg",
  public_id: "iji7l903go0cglnk7xug"
})

Photo.create({user_id: 3,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205403/ibq6n00xz3y0mjecbbxn.jpg",
  public_id: "ibq6n00xz3y0mjecbbxn"
})



User.create(
  {first_name: "Chewbacca",
    last_name: "Solo",
    email: "chewie@gmail.com",
    password: "c123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1900,
    about: "Rrrrrrr-ghghghghghRrrrrrr-ghghghghghRrrrrrr-ghghghghgh!!!",
    lives: "Rrrrrrr-ghghghghgh!",
    work: "Rrrrrrr-ghghghghgh!",
    education: "Rrrrrrr-ghghghghgh!",
    gender: "M",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193160/za1rj6hvwcjofybemejh.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193241/gwferm9bw2eku2st9n7b.jpg"
  }
)

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205491/i68qwzitpggju2zzevss.jpg",
  public_id: "i68qwzitpggju2zzevss"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205594/isww3aqtpxyj1qafa7cb.jpg",
  public_id: "isww3aqtpxyj1qafa7cb"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205640/etpcusvndqljerknbtop.jpg",
  public_id: "etpcusvndqljerknbtop"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205709/gcxznr2vaupzaehwpfzd.jpg",
  public_id: "gcxznr2vaupzaehwpfzd"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205755/jltpswbqcizqltmet6qb.jpg",
  public_id: "jltpswbqcizqltmet6qb"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205800/tv9mxxu80zpz7o6w7euc.png",
  public_id: "tv9mxxu80zpz7o6w7euc"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205862/bmktz9yktqh6ojvdgdnx.png",
  public_id: "bmktz9yktqh6ojvdgdnx"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205900/hebpytjj0vhjnuks5xmn.jpg",
  public_id: "hebpytjj0vhjnuks5xmn"
})

Photo.create({user_id: 4,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459205942/ipctpwuzwgcsegxfo4nv.jpg",
  public_id: "ipctpwuzwgcsegxfo4nv"
})


  User.create(
  {first_name: "Obi",
    last_name: "Kenobi",
    email: "o.k@gmail.com",
    password: "ok123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1996,
    about: "Jedi Master living in exile ;)",
    lives: "Tatooine... ugh",
    work: "Jedi Council",
    education: "Qui-Gon Jinn",
    gender: "M",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193289/oljuoldtk5hn8gku2d3o.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193354/ffepopffg36jzo1epimb.jpg"
  }
  )

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206120/ey6pgujtvga72tpkhocs.jpg",
  public_id: "ey6pgujtvga72tpkhocs"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206156/flmsps6mtelcw30yklv2.jpg",
  public_id: "flmsps6mtelcw30yklv2"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206212/yabkc8z35elubmk0dzpq.jpg",
  public_id: "yabkc8z35elubmk0dzpq"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206242/ar4xtjq4iogrvxi4bxof.png",
  public_id: "ar4xtjq4iogrvxi4bxof"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206280/piyhmi5rxjajdogymd7f.jpg",
  public_id: "piyhmi5rxjajdogymd7f"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206365/fv68xrrdguiuhsam8tds.jpg",
  public_id: "fv68xrrdguiuhsam8tds"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206407/qwsfmqfvsrcntxvzcsg5.jpg",
  public_id: "qwsfmqfvsrcntxvzcsg5"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206437/ds0ynxq7vbyz0aizdm9a.jpg",
  public_id: "ds0ynxq7vbyz0aizdm9a"
})

Photo.create({user_id: 5,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206466/wqiqfli4jsnotrwdhdpg.jpg",
  public_id: "wqiqfli4jsnotrwdhdpg"
})

  User.create(
  {first_name: "Darth",
    last_name: "Vader",
    email: "darth.vader@gmail.com",
    password: "dv123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1900,
    about: "I miss my wife and children :(",
    lives: "Death Star",
    work: "Gallatic Empire",
    education: "Old Ben",
    gender: "M",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193412/jgqzd8fgtwwfk6lvmcle.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193446/rfznyxwzwa3w1tavgude.jpg"
  }
  )

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206563/z40uby4xwr2tljljdhhx.jpg",
  public_id: "z40uby4xwr2tljljdhhx"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206653/lkpuvde243fwh6jxi9wi.jpg",
  public_id: "lkpuvde243fwh6jxi9wi"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206689/tf1acp1i4rwew4vdqlka.jpg",
  public_id: "tf1acp1i4rwew4vdqlka"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206734/h6uj8ygc4jpo3wylcp1z.jpg",
  public_id: "h6uj8ygc4jpo3wylcp1z"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206760/yfo01yqy3zawlhw63qcg.jpg",
  public_id: "yfo01yqy3zawlhw63qcg"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206793/h28ssjs0cts8ky0x0ibp.jpg",
  public_id: "h28ssjs0cts8ky0x0ibp"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206848/brrgqteej8j3zynulpfc.jpg",
  public_id: "brrgqteej8j3zynulpfc"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206881/d3ozlvnmrbwuklk3cmbm.jpg",
  public_id: "d3ozlvnmrbwuklk3cmbm"
})

Photo.create({user_id: 6,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459206912/knxakmop5e6dz8ouybhf.jpg",
  public_id: "knxakmop5e6dz8ouybhf"
})


  User.create(
  {first_name: "Darth",
    last_name: "Sidious",
    email: "darth.sidious@gmail.com",
    password: "ds123456",
    friend_request_id: nil,
    birthday_month: 6,
    birthday_day: 5,
    birthday_year: 1800,
    about: "You may know me as Sheev Palpatine or His Majesty or Emperor. I like evil.",
    lives: "Death Star",
    work: "Gallatic Empire",
    education: "Darth Plageis",
    gender: "M",
    prof_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193484/g6sylva5jgclwgmsh1ng.jpg",
    banner_url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459193523/axjklnojhdcmoi70hgf9.jpg"
  }
  )

Photo.create({user_id: 7,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207465/mokse6aokzqy3zw0wbky.jpg",
  public_id: "mokse6aokzqy3zw0wbky"
})

Photo.create({user_id: 7,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207499/sk62k8an2g04l00rnmsl.jpg",
  public_id: "sk62k8an2g04l00rnmsl"
})

Photo.create({user_id: 7,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207524/xtvvhu6wrveqjs3rlcbw.png",
  public_id: "xtvvhu6wrveqjs3rlcbw"
})

Photo.create({user_id: 7,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207568/iiw1nvm5tsm7fmz0itm7.jpg",
  public_id: "iiw1nvm5tsm7fmz0itm7"
})

Photo.create({user_id: 7,
  photo_type: "albumphoto",
  url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207658/buwoutjxzu4jtt3z0vnb.jpg",
  public_id: "buwoutjxzu4jtt3z0vnb"
})

Photo.create({user_id: 7,
 photo_type: "albumphoto",
 url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207687/xzcyy627vkamkfozfer4.png",
 public_id: "xzcyy627vkamkfozfer4"
})

Photo.create({user_id: 7,
 photo_type: "albumphoto",
 url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207738/hket8co4jgg3y5gmbgjj.jpg",
 public_id: "hket8co4jgg3y5gmbgjj"
})

Photo.create({user_id: 7,
 photo_type: "albumphoto",
 url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207782/mkrae9zl38h9wghywfnp.jpg",
 public_id: "mkrae9zl38h9wghywfnp"
})

Photo.create({user_id: 7,
 photo_type: "albumphoto",
 url: "http://res.cloudinary.com/dzbx4hf1z/image/upload/v1459207827/jllnhf4puyrcyz9twl8n.jpg",
 public_id: "jllnhf4puyrcyz9twl8n"
})

Friendship.create({user_id: 1, friend_id: 2, confirmed: true})
Friendship.create({user_id: 1, friend_id: 3, confirmed: true})
Friendship.create({user_id: 1, friend_id: 4, confirmed: true})
Friendship.create({user_id: 1, friend_id: 5, confirmed: true})
Friendship.create({user_id: 1, friend_id: 6, confirmed: true})
Friendship.create({user_id: 1, friend_id: 7, confirmed: true})

Friendship.create({user_id: 2, friend_id: 3, confirmed: true})
Friendship.create({user_id: 2, friend_id: 4, confirmed: true})
Friendship.create({user_id: 2, friend_id: 5, confirmed: true})
Friendship.create({user_id: 2, friend_id: 6, confirmed: true})
Friendship.create({user_id: 2, friend_id: 7, confirmed: true})

Friendship.create({user_id: 3, friend_id: 4, confirmed: true})
Friendship.create({user_id: 3, friend_id: 5, confirmed: true})
Friendship.create({user_id: 3, friend_id: 6, confirmed: true})
Friendship.create({user_id: 3, friend_id: 7, confirmed: true})

Friendship.create({user_id: 4, friend_id: 5, confirmed: true})
Friendship.create({user_id: 4, friend_id: 6, confirmed: true})
Friendship.create({user_id: 4, friend_id: 7, confirmed: true})

Friendship.create({user_id: 5, friend_id: 6, confirmed: true})
Friendship.create({user_id: 5, friend_id: 7, confirmed: true})

Friendship.create({user_id: 6, friend_id: 7, confirmed: true})


# 1
  Post.create({
    author_id: 7,
    body: "just a reminder, let the hate flow through you :)",
    target_id: 1
    })
# 2
  Post.create({
    author_id: 2,
    body: "Bought to get captured, empire sucks :(",
    target_id: 2
    })

# 3
Post.create({
  author_id: 1,
  body: "so like the force is pretty sweet",
  target_id: 1
  })
# 4
  Post.create({
    author_id: 3,
    body: "lol, you guys ever heard of this force thing. Give me a break",
    target_id: 3
    })

# 5
  Post.create({
    author_id: 1,
    body: "I like old ben but he kinda has a problem with the Tusken people",
    target_id: 1
    })

# 6
  Post.create({
    author_id: 2,
    body: "Really hope Obi Wan helps out soon, pretty over this imprisonment thing",
    target_id: 2
    })
# 7
  Post.create({
    author_id: 2,
    body: "met a guy today :), his friend is a total scruffy looking nerf-herder though",
    target_id: 2
    })

    Comment.create({
      author_id: 3,
      post_id: 7,
      reply_id: nil,
      body: "scruffy looking!?"
    })

# 8
  Post.create({
    author_id: 3,
    body: "Jabba on my back, jeez",
    target_id: 3
    })


# 9
  Post.create({
    author_id: 3,
    body: "wow, Jabba should chill, sent some guy to shoot me. Had to kill em, it was totally self defense!! he shot first, you have to believe me",
    target_id: 3
    })

    Comment.create({
      author_id: 1,
      post_id: 9,
      reply_id: nil,
      body: "yeah thats not what happened, Han"
    })

# 10
  Post.create({
    author_id: 2,
    body: ":( Empire blew up all of Alderann.... i can't even right now",
    target_id: 2
    })
# 11
  Post.create({
    author_id: 4,
    body: "Rrrrrrr-ghghghghghRrrrrrr-ghghghghgh Rrrrrrr-ghghghghgh!!!!",
    target_id: 4
    })

# 12
  Post.create({
    author_id: 6,
    body: "saw son today :)",
    target_id: 6
    })
# 13
  Post.create({
    author_id: 4,
    body: "Rrrrrrr-ghghghghgh!!!!",
    target_id: 4
    })
# 14
  Post.create({
    author_id: 7,
    body: "faith in friends is for nerds !!!",
    target_id: 7
    })

# 15
    Post.create({
      author_id: 1,
      body: "You know, I think that R2 unit I bought may have been stolen, lol",
      target_id: 1
      })
# 16
  Post.create({
    author_id: 5,
    body: "pretty boring out here in the desert :(",
    target_id: 5
    })
# 17
  Post.create({
    author_id: 4,
    body: "Rrrrrrr-ghghghghgh! Rrrrrrr-ghghghghghRrrrrrr-ghghghghghRrrrrrr-ghghghghgh Rrrrrrr-ghghghghgh!!!!",
    target_id: 4
    })
# 18
  Post.create({
    author_id: 5,
    body: "Seems like someone needs my help, finally get to leave this dust bowl",
    target_id: 5
    })
# 19
  Post.create({
    author_id: 6,
    body: "I miss my family",
    target_id: 6
    })
# 20
  Post.create({
    author_id: 6,
    body: "i wish i could pall around with my son more, we always seem to fight",
    target_id: 6
    })
# 21
  Post.create({
    author_id: 2,
    body: "WOW just WOW, people still use torture!?",
    target_id: 2
    })
# 22
  Post.create({
    author_id: 5,
    body: "wow, did i die? i feel pretty fine. I'm kinda see through now WTF?",
    target_id: 5
    })
# 23
Post.create({
  author_id: 1,
  body: "Aunt and Uncle just died :( ,but now I get to go to Alderann :)",
  target_id: 1
  })
# 24
Post.create({
  author_id: 1,
  body: "Hate when randos try to pick fights, saw old ben slice some guys arm off though lol",
  target_id: 1
  })
# 25
Post.create({
  author_id: 7,
  body: "Now witness the firepower of this fully ARMED and OPERATIONAL battle station! :)))))",
  target_id: 7
  })
    Comment.create({
      author_id: 2,
      post_id: 25,
      reply_id: nil,
      body: "I wish there was an unlike button :("
    })

name = ['C','T', 'K', 'J', 'N']
nums = (100 .. 999).to_a
education = ['Academy of Carida', 'Imperial Academy']

100.times do |num|
  f_name = name.sample + name.sample
  l_name = nums.sample.to_s
  a = User.create(
    {first_name: f_name,
    last_name: l_name,
    email: "#{f_name}.#{l_name}#{num}@gmail.com",
    password: "#{f_name}.#{l_name}#{num}@gmail.com",
    friend_request_id: nil,
    birthday_month: num % 12,
    birthday_day: 1,
    birthday_year: 1999,
    gender: "M",
    about: "Imperial Storm Trooper Stationed on the Death Star",
    lives: "Death Star",
    work: "Gallatic Empire",
    education: education.sample,
    })

  Friendship.create({user_id: 1, friend_id: a.id})
  if num < 50
    Friendship.create({user_id: 6, friend_id: a.id, confirmed: true})
  else
    Friendship.create({user_id: 7, friend_id: a.id, confirmed: true})
  end

end
