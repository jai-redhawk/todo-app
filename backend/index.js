const express= require('express');
const {createtodo, updatetodo}= require('./test');
const { todo } = require('./db');
const cors= require('cors');
const app= express();
app.use(express.json());
app.use(cors());

app.post('/todo', async(req, res)=>{
    const inputs= req.body;
    const finalinputs= createtodo.safeParse(inputs);

    if(!finalinputs.success){
        res.status(500).json({
            msg: 'wrong inputs'
        })
       return; 
    }

    const data = new todo({
        title: req.body.title,
        description: req.body.description,
        completed: false
    })

    await data.save()

    res.json({
        msg: 'todo created succesffuly'
    })
});

app.get('/todos', async(req, res)=>{
    const todos= await todo.find({});
    res.send({
        todos
    })
});

app.put('/completed', (req, res)=>{
    const inputid= req.body;
    const finalinputid= updatetodo.safeParse(inputid);
    if(!finalinputid.success){
        res.status(500).json({
            msg: 'wrong inputs'
        })
        return;
    }
    todo.update({
        _id: finalinputid.id,
    },
    {
        completed: true
    });

    res.json({
        msg: 'todo updated successfully'
    })
    
});

app.listen(3000)