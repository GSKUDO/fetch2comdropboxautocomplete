const express = require('express')

const app = express()

let users = [
    {   id: 01, name:"Joao da Silva", email:"silva@email.com"
    },{ id: 02, name:"Diego Gregório Batista", email:"diego.gregb@hotmail.com"
    },{ id: 03, name:"Eduardo Rezende", email:"Edu.itaperuna@gmail.com"
    },{ id: 04, name:"Edwin Capellotto", email:"edw_drum@hotmail.com"
    },{ id: 05, name:"Jose de Abreu", email:"abreu@email.com"
    },{ id: 06, name:"Maria da Luz", email:"luz@email.com"
    },{ id: 07, name:"Antonia Genoveva", email:"genoveva@email.com"
    },{ id: 08, name:"Elisangelo Techy", email:"etechy@tre-pr.jus.br"
    },{ id: 09, name:"Maria das Gracas", email:"gracinha@email.com"
    },{ id: 10, name:"Luiz Antonio de Jesus", email:"laj@email.com"
    },{ id: 11, name:"André Merli", email:"andremerli74@gmail.com"
    },{ id: 12, name:"caue seignemartin ameni", email:"caueameni@gmail.com"
    },{ id: 13, name:"Claudio Oliveira", email:"claudiomsi@hotmail.com"
    },{ id: 14, name:"Daniel Abreu Guerra", email:"daniel.abr@hotmail.com"
    },{ id: 15, name:"Fabio José", email:"fabiosilvarodolpho@gmail.com"
    },{ id: 16, name:"Fernando Eduardo de Souza", email:"fernando.financeiro@Yahoo.com.br"
    },{ id: 17, name:"Fernando Pontes", email:"fernandopontes@outlook.com"
    },{ id: 18, name:"william da silva", email:"williamspedro@oi.com.br"
    },{ id: 19, name:"Thiago Ullmann", email:"thiagoullmann@hotmail.com"
    },{ id: 20, name:"vagnelson alves", email:"vagnelso@hotmail.com"
    },{ id: 21, name:"Ronan Gonçalves Figuerêdo", email:"ronangoncalves@gmail.com"
    },{ id: 22, name:"Rogério Araujo", email:"ogerio.araujo@sindagua.com.br"
    },{ id: 23, name:"Roberto Paiva", email:"obertopaivaf@hotmail.com"
    },{ id: 24, name:"Roberto Canavezzi", email:"robertocanavezzi@yahoo.com.br"
    },{ id: 25, name:"regina barrach", email:"recabarrach@globo.com"
    },{ id: 26, name:"Miguel Lemos Longman", email:"lffcosta2@yahoo.com.br"
    },{ id: 27, name:"Luis Costa", email:"miguel.longman@agu.gov.br"
    },{ id: 28, name:"mariana figueiredo", email:"marcio@usp.br"
    },{ id: 29, name:"Larissa Reis", email:"maripitanga@yahoo.com.br"
    },{ id: 30, name:"Larissa Reis", email:"larissahbaldoino@gmail.com"
    },{ id: 31, name:"Luciano Pires Silva", email:"ucianolf@hotmail.com"
    },{ id: 32, name:"Abenilde Pires dos Santos", email:"abenilde@email.com"
    }
]

app.get("/users", function(req, res) {
    res.json(users)
})

app.use(express.static('publico'))

app.listen(8080, () => console.log("servidor rodando"))
