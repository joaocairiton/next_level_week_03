const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');



Database.then( async db => {

    await db.run(`
    
    
    INSERT INTO orphanages(
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
        
        ) VALUES (
            "-16.661606,",
            "-49.261717", 
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "012345678",
            "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horarios de visitas das 08h até as 18h",
            "0"

        );
    
    
    
    
    
    
    
    
    
    
    `)

    
     //inserir dados na tabela
  /*await saveOrphanage(db, {
     

     
     lat: "-16.662788,", 
     lng: "-49.260537",
     name: "Lar dos meninos",
     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp : "123456789",
     images: [
         "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
         "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
     ] .toString(),
 
     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
     opening_hours: "Horarios de visitas das 08h até as 18h",
     open_on_weekends: "0"
 
 })*/




     //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


//consulta apenas um olfanato pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2" ')
console.log(orphanage)

//deletar dados

//console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))

})