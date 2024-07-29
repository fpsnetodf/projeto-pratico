import React, {useState} from "react"

export const Input_add = () => {
    const [lista, setLista] = useState([])
    const [novoItem, setNovoItem] = useState("")
    const adicionaItem = (form) => {
        form.preventDefault()
        if (!novoItem){
            return
        }else{
            setLista([...lista, {text: novoItem, isCompleted: false}])
            setNovoItem("")
            document.querySelector("#input-entrada").focus()
            console.log(lista)
        }
    }
return (
    
    <div className="text-center  my-10">
        <form onSubmit={adicionaItem}>
        <input id="input-entrada" className="px-6 py-2 rounded-s-lg focus:outline-none" 
        type="text" 
        value={novoItem} 
        onChange={(e)=>{
            setNovoItem(e.target.value)
        }}/>
        <input className="px-8 py-2 rounded-e-lg bg-gray-400 hover:bg-gray-500 text-white font-bold" type="submit" value="Add" />
        </form>
    </div>
) 
}