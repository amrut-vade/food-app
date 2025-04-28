const Contact =()=>{

     return(
        <div>
            <h1 className="font-bold m-4 p-4 text-2xl">this contact page</h1>
            <form>
                <input type="text" className="borde border-black p-2 m-2" placeholder="name"></input>
                <input type="text"  className="borde border-black p-2 m-2" placeholder="messages"></input>
                <button className="borde border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>

            </form>
        </div>
     )

}

export default Contact;
   
