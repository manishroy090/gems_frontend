const Exportbtn = () =>{

    return(
           <div className="border rounded p-2 bg-white shadow">
              {/* <Label>Export</Label> */}
              <select>
                <option>Export</option>
                <option>Download as PDG</option>
                <option>Download as EXCEL</option>
              </select>
            </div>
    )
}


export default Exportbtn;